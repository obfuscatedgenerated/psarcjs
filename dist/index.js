"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEMParser = exports.BNKParser = exports.DEFAULT_VALUES = exports.MANIFEST = exports.SongNote = exports.SongEbeat = exports.Song2014 = exports.BNK = exports.GENERIC = exports.WAAPI = exports.WEM = exports.DDS = exports.SNG = exports.PSARC = void 0;
var sng_1 = require("./sng");
Object.defineProperty(exports, "SNG", { enumerable: true, get: function () { return sng_1.SNG; } });
var dds_1 = require("./dds");
Object.defineProperty(exports, "DDS", { enumerable: true, get: function () { return dds_1.DDS; } });
var wem_1 = require("./wem");
Object.defineProperty(exports, "WEM", { enumerable: true, get: function () { return wem_1.WEM; } });
var bnk_1 = require("./bnk");
Object.defineProperty(exports, "BNK", { enumerable: true, get: function () { return bnk_1.BNK; } });
var waapi_1 = require("./waapi");
Object.defineProperty(exports, "WAAPI", { enumerable: true, get: function () { return waapi_1.WAAPI; } });
var generic_1 = require("./generic");
Object.defineProperty(exports, "GENERIC", { enumerable: true, get: function () { return generic_1.GENERIC; } });
var manifest_1 = require("./manifest");
Object.defineProperty(exports, "MANIFEST", { enumerable: true, get: function () { return manifest_1.MANIFEST; } });
var psarc_1 = require("./psarc");
Object.defineProperty(exports, "PSARC", { enumerable: true, get: function () { return psarc_1.PSARC; } });
var song2014_1 = require("./song2014");
Object.defineProperty(exports, "SongEbeat", { enumerable: true, get: function () { return song2014_1.SongEbeat; } });
Object.defineProperty(exports, "SongNote", { enumerable: true, get: function () { return song2014_1.SongNote; } });
Object.defineProperty(exports, "Song2014", { enumerable: true, get: function () { return song2014_1.Song2014; } });
var common_1 = require("./common");
Object.defineProperty(exports, "DEFAULT_VALUES", { enumerable: true, get: function () { return common_1.DEFAULT_VALUES; } });
var BNKParser = __importStar(require("./bnkparser"));
exports.BNKParser = BNKParser;
var WEMParser = __importStar(require("./wemparser"));
exports.WEMParser = WEMParser;
