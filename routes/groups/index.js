import express from "express";
let router = express.Router();
import { Groups } from "../../models/groups.js";

router.get('/getGroups', async (req, res) => {
  let groups = await Groups.find()
  res.json({ groups, message: 'All groups success send!' });
}); 

router.post('/createGroup', async (req, res) => {
  let newGroup = new Groups(req.body)
  newGroup.save()
  res.json({ message: `Group ${req.body.name} success created!` });
});

router.post('/deleteGroup', async (req, res) => {
  await Groups.deleteOne({ name: req.body.name }) 
  res.json({ message: `Group ${req.body.name} success deleted!` });
});

export default router