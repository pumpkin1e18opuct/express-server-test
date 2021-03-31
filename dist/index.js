"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var matches_1 = __importDefault(require("./routes/matches"));
var app = express_1.default();
var router = express_1.default.Router();
// ルーティング
app.get('/', function (req, res) {
    res.status(200).send('This is index page.');
});
app.use('/matches', matches_1.default);
// ポート3000でサーバを立てる
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express WebApi listening on port ' + port);
//# sourceMappingURL=index.js.map