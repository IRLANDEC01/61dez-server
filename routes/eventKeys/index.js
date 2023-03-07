import express from "express";
let router = express.Router();
import { EventKeys } from "../../models/eventKeys.js";

router.get('/getEventKeys', async (req, res) => {
  let eventKeys = await EventKeys.find()
  res.json({ eventKeys, message: 'EventKeys success send!' });
});

router.post('/createEventKey', async (req, res) => {
  let newEventKey = new EventKeys(req.body)
  newEventKey.save()
  res.json({ message: 'EventKey success created!' });
});

router.post('/deleteEventKey', async (req, res) => {
  await EventKeys.findByIdAndDelete(req.body.id)
  res.json({ message: 'EventKey success deleted!' });
});

router.post('/passEventKey', async (req, res) => {
  await EventKeys.findByIdAndUpdate(req.body.id, req.body.update)
  res.json({ message: 'EventKey success passed!' });
});

export default router