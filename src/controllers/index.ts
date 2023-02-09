import { RequestHandler,Request,Response } from 'express'
import {v4 as uid} from 'uuid'
// import { bookingSchema } from '../Helpers'
import { Todos } from '../models'
import { DatabaseHelper } from '../databaseHelpers'
const _db= new DatabaseHelper()
interface ExtendedRequest extends Request{
    body:{title:string,description:string,date:string},
    params:{taskId:string}
}
//Get booking Details
export const getTodos:RequestHandler=async (req,res)=>{
   try {
      const todo:Todos[] = await (await _db.exec('getTodos')).recordset
     res.status(200).json(todo)
   } catch (error) {
    res.status(500).json(error)
   }

}
//Get one booking
export const getOneTodo=async(req:ExtendedRequest,res:Response)=>{
try {
  const taskId = req.params.taskId
  const todo:Todos= await (await  _db.exec('getOneTodo', {taskId})).recordset[0]
  if(!todo){
     res.status(404).json({error:'Todo Not Found'})
  }

  res.status(200).json(todo)

} catch (error) {
  res.status(500).json(error)
}

}
 export async function addTodo( req:ExtendedRequest, res:Response) {
  try {
    const taskId =uid()
    const {title,description,date}= req.body
    
    console.log(req.body);
    
    // if(error){
    //   return res.status(422).json(error.details[0].message)
    // }
    _db.exec('InsertOrUpdate', 
    {taskId,title:title, description:description, date:date})

   return  res.status(201).json({message:'Todo Added'})
  } 
  catch (error:any) {
     return res.status(500).json(error.message)
  }
 }


//Update Booking


export async function updateBooking(req:ExtendedRequest,res:Response){
try {
  const {title,description,date}= req.body
     const todo:Todos= await (await _db.exec('getOneTodo',{taskId:req.params.taskId})).recordset[0]

  if(todo){
    await _db.exec('InsertOrUpdate', {taskIdd:req.params.taskId,title:title, description:description, date:date})
    return res.status(200).json({message:'Updated'})
  }

  return res.status(404).json({error:'Todo Not Found'})    
  } 

catch (error:any) {
   res.status(500).json(error.message)
}
}


//delete


export const deleteTodo=async(req:ExtendedRequest, res:Response)=>{
  try {
    const todo:Todos= await (
    await _db.exec('getOneTodo',{taskId:req.params.taskId})
  ).recordset[0]
    if(todo){
        await _db.exec('deleteTodo',{taskId:req.params.taskId})
        return res.status(200).json({message:'Deleted'})
    }
  return res.status(404).json({error:'Todo Not Found'})  
  } catch (error:any) {
    res.status(500).json(error.message)
  }
}