"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setRoutes;

var _express = _interopRequireDefault(require("express"));

var _upload = _interopRequireDefault(require("./controllers/upload.controler"));

var _gallery = _interopRequireDefault(require("./controllers/gallery.controller"));

//  Allow form-data parsing
function setRoutes(app) {
  var router = _express["default"].Router();

  router.route('/gallery').post(_upload["default"].single('image'), _gallery["default"].create);
  router.route('/gallery').get(_gallery["default"].getAll);
  router.route('/gallery/:id').get(_gallery["default"].get);
  router.route('/gallery/:id').put(_gallery["default"].put);
  router.route('/gallery/:id')["delete"](_gallery["default"]["delete"]);
  app.use('/', router);
}