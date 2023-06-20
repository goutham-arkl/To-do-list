const router =require('express').Router()
const {verifyToken} = require('../middlewares/verify')
const Task=require('../models/Task')

//create
router.post('/:id',verifyToken,async(req,res)=>{
    const newTask =new Task({
        name:req.body.name,
        desc:req.body.desc,
        userId:req.params.id
    })

    try {
         const savedTask=await newTask.save();
         res.status(201).json(savedTask)
    } catch (error) {
        res.status(500).json(error)
    }
})


//task status (compleate/incompleate) toggle
router.put('/:id', verifyToken, async (req, res) => {
    const taskId = req.params.id;
  
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      task.completed = !task.completed;
      const updatedTask = await task.save();
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  


//delete
router.delete('/:id',verifyToken,async(req,res)=>{
    try {
        await Task.deleteOne({_id:req.params.id})
        res.status(200).json('Task deleted')
    } catch (error) {
        res.status(500).json(error)
        
    }
})

//getall user tasks
router.get('/:id',verifyToken,async(req,res)=>{
    try {
        const tasks=await Task.find({userId:req.params.id})
        res.status(200).json(tasks) 
    } catch (error) {
        res.status(500).json(error)
    }

})

module.exports=router