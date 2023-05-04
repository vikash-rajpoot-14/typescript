import { Router } from "express"
import { Todo } from "../models/todo";

const router = Router();

let todo : Todo[] = [];

type RequestBody = {text : "string"}
type RequestParams = { todoId: "string" }

router.get('/', (req, res, next) => {
    res.status(200).json({message:"fetched todo successfully",todo: todo});
})
 
router.post('/todo', (req, res, next) => {
    const body = req.body as RequestBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text : body.text
  }
    todo.push(newTodo);
      res.status(201).json({message:"todo added successfully", todo : newTodo});
})
 
router.put('/todo/:todoId', (req, res, next) => {
    const todoparam = req.params as RequestParams;
        const body = req.body as RequestBody;
    const Index = todo.findIndex((ele) => ele.id === todoparam.todoId);
    if (Index >= 0) {
        todo[Index] = { id: todo[Index].id, text: body.text };
        return res.status(200).json({message:"updated todo succesfully",todo});
    }
     res.status(404).json({message:"todo not found"});
})

router.delete('/todo/:todoId', (req, res, next) => {
    const todoparam = req.params as RequestParams;
    todo = todo.filter((ele) => ele.id !== todoparam.todoId);
      res.status(204).json({message:"todo deleted succesfully",todo:todo});
})

export default router;