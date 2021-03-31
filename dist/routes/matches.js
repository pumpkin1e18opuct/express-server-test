"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
// GETリクエスト
router.get('/', function (req, res) {
    res.status(200).send('This is matches page.');
});
exports.default = router;
//# sourceMappingURL=matches.js.map