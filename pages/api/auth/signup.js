import connectMongo from "@/database/conn";
import Users from "@/model/Schema";
import { hash } from "bcryptjs";
export default async function handler(req, res){
    connectMongo().catch(error=>res.json({error:"Connection Failed"}))

    if(req.method == 'POST'){

        if(!req.body) {return res.status(404).json({error: "Dont have form data"})}
        const {username, email, password, role} = req.body

        const checkExisting = await Users.findOne({ email })
        if(checkExisting) return res.status(422).json({ message: "User Already Exists"})

        Users.create({ username, email, password : await hash (password, 12), role, function(err, data){
            if(err) return res.status(404).json({err})
            res.status(201).json({ status: true, user: data})
        }})
    }else{
        res.status(500).json({message: "HTTP method invalid. Only POST Accepted"})
    }
}