'use strict';

var utils = require('../utils/writer.js');
var Comment = require('../service/CommentService');

module.exports.commentsCreatePOST = function commentsCreatePOST (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var data = req.swagger.params['data'].value;
  Comment.commentsCreatePOST(authorization,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commentsGET = function commentsGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var filter = req.swagger.params['filter'].value;
  var page = req.swagger.params['page'].value;
  var limit = req.swagger.params['limit'].value;
  var search = req.swagger.params['search'].value;
  var searchBy = req.swagger.params['searchBy'].value;
  var order = req.swagger.params['order'].value;
  var orderBy = req.swagger.params['orderBy'].value;
  Comment.commentsGET(authorization,filter,page,limit,search,searchBy,order,orderBy)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commentsIdDeleteDELETE = function commentsIdDeleteDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Comment.commentsIdDeleteDELETE(id,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commentsIdGET = function commentsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Comment.commentsIdGET(id,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commentsIdUpdatePUT = function commentsIdUpdatePUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var authorization = req.swagger.params['Authorization'].value;
  var data = req.swagger.params['data'].value;
  Comment.commentsIdUpdatePUT(id,authorization,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
