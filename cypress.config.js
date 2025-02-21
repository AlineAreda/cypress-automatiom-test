require('dotenv').config(); 

module.exports = {
  env: {
    baseApi: process.env.API_URL,
    projectId: 'zyti4h',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Eventos do Cypress (se necessário)
    },
    baseUrl: 'https://e2eburguer.netlify.app',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
  },
};
