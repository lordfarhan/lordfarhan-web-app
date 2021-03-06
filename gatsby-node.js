/* Vendor imports */
const path = require('path');
/* App imports */
const config = require('./config');
const utils = require('./src/utils/pageUtils');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
            fileAbsolutePath
          }
        }
      }
    }    
  `).then((result) => {
    if (result.errors) return Promise.reject(result.errors);

    const { allMarkdownRemark } = result.data;

    /* Project pages */
    allMarkdownRemark.edges.forEach(({ node }) => {
      // Check path prefix of project
      if (node.frontmatter.path.indexOf(config.pages.projects) !== 0) {
        // eslint-disable-next-line no-throw-literal
        throw `Invalid path prefix: ${node.frontmatter.path}`;
      }

      createPage({
        path: node.frontmatter.path,
        component: path.resolve('src/templates/project/project.jsx'),
        context: {
          projectPath: node.frontmatter.path,
          translations: utils.getRelatedTranslations(node, allMarkdownRemark.edges),
        },
      });
    });
    const regexForIndex = /index\.md$/;
    // Projects in default language, excluded the translated versions
    const defaultProjects = allMarkdownRemark.edges
      .filter(({ node: { fileAbsolutePath } }) => fileAbsolutePath.match(regexForIndex));

    /* Tag pages */
    const allTags = [];
    defaultProjects.forEach(({ node }) => {
      node.frontmatter.tags.forEach((tag) => {
        if (allTags.indexOf(tag) === -1) allTags.push(tag);
      });
    });

    allTags
      .forEach((tag) => {
        createPage({
          path: utils.resolvePageUrl(config.pages.tag, tag),
          component: path.resolve('src/templates/tags/index.jsx'),
          context: {
            tag,
          },
        });
      });

    return 1;
  });
};
