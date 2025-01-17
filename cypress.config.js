require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

module.exports = {
  env: {
    baseApi: process.env.API_URL,
    projectId: 'zyti4h',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Eventos do Cypress (se necessário)
    },
    baseUrl: process.env.WEB_URL,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
  },
};
