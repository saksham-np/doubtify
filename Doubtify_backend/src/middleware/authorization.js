"use strict";

const authorize = (role) => {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({
        message: 'Forbidden'
      });
    }
    next();
  };
};

module.exports = authorize;