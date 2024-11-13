const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const configSecurity = (app) => {
  // Add Helmet middleware
  app.use(helmet());

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });

  app.use(limiter);
};

module.exports = configSecurity; 