const todo = require('../model/todoModel')
//get all todo list
exports.getAllTodo = async(req, res) =>{
    try{
        let todo = await todo.find();
        if(todo.length == 0)
            return res.status(404).json({
            success: false,
            message: 'No Todo task found'
        })
        res.status(200).json({
            success: true,
            message: 'Todo task found',
            todo,
            count:todo.length
        })
        }
        catch(err){
            res.status(500).json({
            success:false,
            message: 'Internal Error',
            error:error.message
        })
    }
}
//get single todolist
exports.getTodo = async(req, res) =>{
    try{
        let id ={_id:req_params.id}
        let todo = await todo.findOne(id);
        if(!todo)
            return res.status(404).json({
            success: false,
            message: 'Todo task not found'
        })
        res.status(200).json({
            success: true,
            message: 'Todo task found'
        })
        }
        catch(err){
            res.status(500).json({
            success:false,
            message: 'Internal Error',
            error:error.message
        })
    }
}
// create todolist
exports.createTodo = async(req, res)=>{
    try{
        let todo = await req.body;
        let newTodo = await create(todo)
        if(!newTodo)
            return res.status(404).json({
            success: false,
            message: 'Todo task not created'
        })
        res.status(201).json({
            success: true,
            message: 'Todo task created successfully'
        })
        }
        catch(err){
            res.status(500).json({
            success:false,
            message: 'Internal Error',
            error:error.message
        })
        }
}
//update todo
exports.updateTodo = async(req, res) => {
    try{
        let id ={id: req.req_params.id}
        let todo = await req.body
        let update = await Todo.findOneAndUpdate(id, todo, {new:true}) 
        if(!update)
            return res.status(400).json({
                success: false,
                message: "Todo not updated"
            })
        return res.status(200).json({
            success: true,
            message:'Task Updated',
            todo: update
        })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Internal Error"
        })
    }
}

//delete todo
exports.deleteTodo = async(req, res) => {
    try{
        let id ={id: req.req_params.id}
        let todo = await req.body
        let deleted = await Todo.findOneAndRemove(id) 
        if(!deleted)
            return res.status(400).json({
                success: false,
                message: "Todo not deleted"
            })
        return res.status(200).json({
            success: true,
            message:'Task deleted',
            todo: update
        })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Internal Error"
        })
    }
}