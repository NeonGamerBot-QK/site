import express, { Request, Response } from 'express';
const router = express.Router();
router.get('/randomnumber', (req:any,res:any) => {
    res.json({
        message: 2
    })
})
router.all('/', (req:any,res:any) => {
res.json({ version: 1.0 })
})

export default router;