'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.usersCreatePOST = function usersCreatePOST (req, res, next) {
  var data = req.swagger.params['data'].value;
  User.usersCreatePOST(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGET = function usersGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var page = req.swagger.params['page'].value;
  var limit = req.swagger.params['limit'].value;
  var search = req.swagger.params['search'].value;
  var searchBy = req.swagger.params['searchBy'].value;
  var order = req.swagger.params['order'].value;
  var orderBy = req.swagger.params['orderBy'].value;
  User.usersGET(authorization,page,limit,search,searchBy,order,orderBy)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersIdDeleteDELETE = function usersIdDeleteDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  var authorization = req.swagger.params['Authorization'].value;
  User.usersIdDeleteDELETE(id,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersIdGET = function usersIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var authorization = req.swagger.params['Authorization'].value;
  User.usersIdGET(id,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersIdUpdatePUT = function usersIdUpdatePUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var authorization = req.swagger.params['Authorization'].value;
  var data = req.swagger.params['data'].value;
  User.usersIdUpdatePUT(id,authorization,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
