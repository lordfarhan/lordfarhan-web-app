/* eslint-disable no-param-reassign */
const Config = require('../../config');

const Utils = {
  /**
   * Join provided url paths.
   * @param {...string} paths Provided paths. It doesn't matter if they have trailing slash.
   * @return {string} Resolved url without trailing slash.
   */
  resolveUrl: (...paths) => paths.reduce((resolvedUrl, path) => {
    if (path === undefined) {
      return '';
    }
    const urlPath = path.toString().trim();
    if (urlPath) {
      // eslint-disable-next-line no-param-reassign
      resolvedUrl
        += (resolvedUrl === '' ? '' : '/') + urlPath.replace(/^\/|\/$/g, '');
    }

    resolvedUrl = resolvedUrl[0] !== '/' ? `/${resolvedUrl}` : resolvedUrl;
    return resolvedUrl;
  }, ''),
  /**
   * Resolve a page url adding a trailing slash.
   * Needed to prevent 301 redirects cause of Gatsby.js' folder structure.
   * @param {...string} path Provided paths. It doesn't matter if they have trailing slash.
   * @return {string} Resolved url with trailing slash.
   */
  resolvePageUrl: (...path) => {
    const resolvedUrl = Utils.resolveUrl(...path);
    return resolvedUrl;
  },
  /**
   * Get an ordered list of suggested projects for a single project.
   * @param {Object} project The single project of which to find the related projects.
   * It's the returned object from Graphql's query `markdownRemark`
   * @param {Array} projectList The list where find related projects. It's the returned
   * object from Graphql's query `allMarkdownRemark`
   * @param {number} limit The maximum number of suggested projects to get
   * @return {Array} The `projectList` object sorted according to the best match
   * with the `project` object
   */
  getSuggestedProjects: (project, projectList, limit) => {
    // Get the number of common tags with provided project.
    const getTagScore = (edge) => {
      let commonTags = 0;
      edge.node.frontmatter.tags.forEach((tag) => {
        commonTags += project.frontmatter.tags.indexOf(tag) !== -1 ? 1 : 0;
      });
      return commonTags;
    };

    return projectList.edges
      .sort((edgeA, edgeB) => getTagScore(edgeB) - getTagScore(edgeA))
      .slice(0, limit);
  },
  /**
   * Pass a project and retrieve a list of related translations.
   * @param {Object} project The project of which retrieve its translations.
   * It accepts a `node` object from Graphql's query `allMarkdownRemark`
   * @param {Object} projectList The list of projects where search translations.
   * It accepts a `edges` array from Graphql's query `allMarkdownRemark`
   * @return {Object} An array of objects with languages as keys (ISO 639-1) and
   * translated project's paths as values.
   */
  getRelatedTranslations: (project, projectList) => projectList
    .filter(({ node }) =>
    // Get projects in the same folder of provided project
    // eslint-disable-next-line implicit-arrow-linebreak
      (
        node.fileAbsolutePath.split('/').slice(-2, -1)[0]
      === project.fileAbsolutePath.split('/').slice(-2, -1)[0]
      ))
    .map(({ node }) => {
      const lang = node.fileAbsolutePath.split('.').slice(-2, -1)[0];
      return {
        hreflang: lang.slice(-5) !== 'index' ? lang : Config.defaultLanguage,
        path: Utils.resolvePageUrl(node.frontmatter.path),
      };
    }),
  /**
   * Capitalize passed string
   * @param {string} str string to capitalize
   * @return {string} string with first letter to uppercase
   */
  capitalize: (str) => str[0].toUpperCase() + str.slice(1),
};

module.exports = Utils;
