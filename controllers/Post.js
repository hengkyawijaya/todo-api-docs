'use strict';

var utils = require('../utils/writer.js');
var Post = require('../service/PostService');

module.exports.postsCreatePOST = function postsCreatePOST (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var data = req.swagger.params['data'].value;
  Post.postsCreatePOST(authorization,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsGET = function postsGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var filter = req.swagger.params['filter'].value;
  var page = req.swagger.params['page'].value;
  var limit = req.swagger.params['limit'].value;
  var search = req.swagger.params['search'].value;
  var searchBy = req.swagger.params['searchBy'].value;
  var order = req.swagger.params['order'].value;
  var orderBy = req.swagger.params['orderBy'].value;
  Post.postsGET(authorization,filter,page,limit,search,searchBy,order,orderBy)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsIdDeleteDELETE = function postsIdDeleteDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Post.postsIdDeleteDELETE(id,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsIdGET = function postsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Post.postsIdGET(id,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsIdUpdatePUT = function postsIdUpdatePUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var authorization = req.swagger.params['Authorization'].value;
  var data = req.swagger.params['data'].value;
  Post.postsIdUpdatePUT(id,authorization,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
