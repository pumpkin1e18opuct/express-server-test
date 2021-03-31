import express from 'express'
import matches from './routes/matches';

const app = express();
const router = express.Router();

// ルーティング
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send('This is index page.');
});
app.use('/matches', matches);

// ポート3000でサーバを立てる
const port = process.env.PORT || 3000;
app.listen(port);
console.log('Express WebApi listening on port ' + port);