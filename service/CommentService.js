'use strict';


/**
 * Creates a new comment.
 *
 * authorization String Bearer xxxxxxx (optional)
 * data Data_4 The comment to create. (optional)
 * no response value expected for this operation
 **/
exports.commentsCreatePOST = function(authorization,data) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * find many comment.
 *
 * authorization String Bearer xxxxxxx (optional)
 * filter String  (optional)
 * page String  (optional)
 * limit String  (optional)
 * search String  (optional)
 * searchBy String  (optional)
 * order String  (optional)
 * orderBy String  (optional)
 * no response value expected for this operation
 **/
exports.commentsGET = function(authorization,filter,page,limit,search,searchBy,order,orderBy) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete a comment.
 *
 * id String 
 * authorization String Bearer xxxxxxx (optional)
 * no response value expected for this operation
 **/
exports.commentsIdDeleteDELETE = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * find a comment.
 *
 * id String 
 * authorization String Bearer xxxxxxx (optional)
 * no response value expected for this operation
 **/
exports.commentsIdGET = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * update a comment.
 *
 * id String 
 * authorization String Bearer xxxxxxx (optional)
 * data Data_5 The comment to create. (optional)
 * no response value expected for this operation
 **/
exports.commentsIdUpdatePUT = function(id,authorization,data) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

