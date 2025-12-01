"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionCheck = exports.default = void 0;
var plugins_1 = require("./plugins");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(plugins_1).default; } });
var VersionCheck_1 = require("./components/VersionCheck");
Object.defineProperty(exports, "VersionCheck", { enumerable: true, get: function () { return VersionCheck_1.VersionCheck; } });
