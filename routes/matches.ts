import express from 'express';

const router = express.Router();

// GETリクエスト
router.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send('This is matches page.');
});

export default router;