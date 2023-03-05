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
  res.json({ message: 'Aud success created!' });
});

router.post('/deleteAud', async (req, res) => {
  await Auds.deleteOne({ name: req.body.name })
  res.json({ message: 'Aud success deleted!' });
});

router.post('/updateStateAud', async (req, res) => {
  console.log(req.body);
  await Auds.findOneAndUpdate({ name: req.body.name }, { isUsed: true })
  res.json({ message: 'Aud state updated!' });
});

export default router