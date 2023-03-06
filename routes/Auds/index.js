import express from "express";
let router = express.Router();
import { Auds } from "../../models/auds.js";

router.get('/getAuds', async (req, res) => {
  let auds = await Auds.find()
  res.json({ auds, message: 'All auds success send!' });
});

router.post('/createAud', async (req, res) => {
  let newAud = new Auds(req.body)
  newAud.save()
  res.json({ message: `Aud ${req.body.name} success created!` });
});

router.post('/deleteAud', async (req, res) => {
  await Auds.deleteOne({ name: req.body.name })
  res.json({ message: `Aud ${req.body.name} success deleted!` });
});

router.post('/updateStateAud', async (req, res) => {
  let aud = await Auds.findOne({ name: req.body.name })
  await Auds.findOneAndUpdate({ name: req.body.name }, { isUsed: !aud.isUsed })
  res.json({ message: `Aud ${req.body.name}state updated!` });
});

export default router