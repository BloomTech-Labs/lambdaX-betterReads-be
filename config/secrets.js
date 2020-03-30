module.exports = { // secret signature used to sign off on tokens and check if they haven't changed when sent back from user
    jwtSecret: process.env.JWT_SECRET || 'you are not authorized!',
  };
  