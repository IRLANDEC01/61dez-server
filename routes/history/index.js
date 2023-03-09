import express from "express";
import { EventKeys } from "../../models/eventKeys.js";
let router = express.Router();

router.post('/getHistory', async (req, res) => {
     let history = await EventKeys.find({ date: req.body.date })
    res.json({history, message: 'History eventKeys success send!' });
}); 

export default router    