module.exports = {
  pathPrefix: '',
  siteUrl: 'https://lordfarhan.me',
  siteTitle: 'Muhammad Farhan',
  siteDescription: 'Public ID card of a software developer',
  author: 'Muhammad Farhan',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://lordfarhan.disqus.com/embed.js',
  pages: {
    home: '/',
    statistics: 'statistics',
    contact: 'contact',
    projects: 'projects',
    tags: 'tags',
    posts: 'posts',
    resume: 'resume',
  },
  social: {
    linkedin: 'https://linkedin.com/in/lordfarhan',
    github: 'https://github.com/lordfarhan',
    facebook: 'https://www.facebook.com/iamfarhanmuhammad',
    twitter: 'https://twitter.com/penafarhan',
    instagram: 'https://www.instagram.com/farhanalrosyid/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/5ca53825-3ea3-45fe-8e0a-2bc11c5202d3',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    android: {
      name: 'Android Development',
      description: 'Design, build, and maintain mobile application based on Android operating system',
      color: '#a4c639',
    },
    kotlin: {
      name: 'Kotlin',
      description: 'A cross-platform, statically typed, general-purpose programming language with type inference.',
      color: '#1AA2D4',
    },
    java: {
      name: 'Java',
      description: 'Java is a high-level, class-based, object-oriented programming language.',
      color: '#D0A384',
    },
    firebase: {
      name: 'Firebase',
      description: 'Firebase is a platform developed by Google for creating mobile and web applications.',
      color: '#FFA611',
    },
    php: {
      name: 'PHP',
      description: 'A general-purpose scripting language that is especially suited to web development.',
      color: '#474A8A',
    },
    laravel: {
      name: 'Laravel',
      description: 'Laravel is a web application framework with expressive, elegant syntax based on PHP.',
      color: '#F05340',
    },
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
  },
};
