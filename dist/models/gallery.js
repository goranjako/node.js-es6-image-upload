"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var GallerySchema = new Schema({
  image: {
    type: String
  },
  imagetitle: {
    type: String
  },
  imagedesc: {
    type: String
  },
  created: {
    type: Date,
    "default": Date.now
  }
});

var _default = _mongoose["default"].model('Gallery', GallerySchema);

exports["default"] = _default;