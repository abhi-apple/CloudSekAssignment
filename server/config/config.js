module.exports = {
  jwtSecret: process.env.JWT_SECRET || "using_abhinay_for_now",
  jwtExpiration: process.env.JWT_EXPIRATION || "36500d",
};
