import {v4 as uuid} from "uuid";
let users=[];
export const getUsers=(req,res)=>{
  res.send(users)
}

export const createUser=(req,res)=>{
    const user=req.body;
    users.push({...user,id:uuid()});
    res.send("user added successfully")
}

export const getUser=(req,res)=>{
    const singleUser=users.filter((user)=>user.id===req.params.id);
    res.send(singleUser)
}

export const deleteUser=(req,res)=>{
  users=users.filter((user)=>user.id!==req.params.id)
  res.send("user deleted successfully")
}

export const updateUser=(req,res)=>{
let flag=false; 
 const user=users.map((user)=>{
    console.log("dasd",req.params.id,users)
    if(user.id==req.params.id){
        user.name=req.body.name;
        user.email=req.body.email;
        user.contact=req.body.contact;
        flag=true
        res.send("user updated successfully")
    }
 })
 if(!flag){
    res.send("no id found")
 }
   
   
}