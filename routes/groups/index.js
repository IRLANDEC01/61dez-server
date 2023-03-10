import express from "express";
let router = express.Router();
import { Groups } from "../../models/groups.js";

router.get('/getGroups', async (req, res) => {
  let groups = await Groups.find()
  res.json({ groups, message: 'All groups success send!' });
}); 

router.post('/createGroup', async (req, res) => {
  let newGroup = new Groups(req.body)
 await newGroup.save()
  res.json({ message: `Group ${req.body.name} success created!` });
});

router.post('/deleteGroup', async (req, res) => {
  await Groups.findByIdAndDelete(req.body.id)
  res.json({ message: 'Group success deleted!' });
});

export default router