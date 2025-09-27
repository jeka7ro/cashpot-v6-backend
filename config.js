module.exports = {
  MONGODB_URI: process.env.DATABASE_URL || 'mongodb://localhost:27017/cashpot-v6',
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development'
};
