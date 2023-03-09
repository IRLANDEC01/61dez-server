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
  await Auds.findByIdAndDelete(req.body.id)
  res.json({ message: 'Aud success deleted!' });
});

router.post('/updateStateAud', async (req, res) => {
  try {
    let aud = await Auds.findOne({ name: req.body.aud }) 
    aud.isUsed = !aud.isUsed 
    await aud.save()
    res.json({ message: `Aud state updated!` });

  } catch (error) {
    console.log(error);
  }
});

export default router