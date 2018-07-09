'use strict';


/**
 * Creates a new post.
 *
 * authorization String Bearer xxxxxxx (optional)
 * data Data_2 The post to create. (optional)
 * no response value expected for this operation
 **/
exports.postsCreatePOST = function(authorization,data) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * find many post.
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
exports.postsGET = function(authorization,filter,page,limit,search,searchBy,order,orderBy) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete a post.
 *
 * id String 
 * authorization String Bearer xxxxxxx (optional)
 * no response value expected for this operation
 **/
exports.postsIdDeleteDELETE = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * find a post.
 *
 * id String 
 * authorization String Bearer xxxxxxx (optional)
 * no response value expected for this operation
 **/
exports.postsIdGET = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * update a post.
 *
 * id String 
 * authorization String Bearer xxxxxxx (optional)
 * data Data_3 The post to create. (optional)
 * no response value expected for this operation
 **/
exports.postsIdUpdatePUT = function(id,authorization,data) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

