module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
  },
  settings: {
    'import/core-modules': ['react', 'prop-types', 'glamor'],
  },
  globals: {
    graphql: false,
  },
};
