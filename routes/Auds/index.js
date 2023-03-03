import express from "express";
let router = express.Router();
import { Auds } from "../../models/auds.js";

router.get('/getAuds', async (req, res) => {
  let auds = await Auds.find()
  res.json({ data:auds});
});

router.post('/createAud', async (req, res) => {
  console.log(req.body);
  res.json({ message:'ok'});
});

export default router