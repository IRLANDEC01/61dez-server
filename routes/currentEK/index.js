import express from "express";
let router = express.Router();
import { CurrentEK } from "../../models/currentEK.js";

router.get('/getCurrentEK', async (req, res) => {
    try {
        let currentEKs = await CurrentEK.find()
        res.json({ currentEKs: currentEKs ? currentEKs : [], message: 'All CurrentEKs success send!' });
    } catch (error) {
        console.log(error);
    }
});

router.post('/addCurrentEK', async (req, res) => {
    let newCurrentEK = new CurrentEK(req.body)
    await newCurrentEK.save()
    res.json({ message: `New CurrentEK  success created!` });
});

router.post('/deleteCurrentEK', async (req, res) => {
    await CurrentEK.findByIdAndDelete(req.body.id)
    res.json({ message: 'CurrentEK success deleted!' });
});

router.post('/passCurrentEK', async (req, res) => {
    try {
        await CurrentEK.findByIdAndUpdate(req.body.id, req.body.update)
        res.json({ message: 'CurrentEK success passed!' });

    } catch (error) {
        console.log(error);
    }
});

export default router