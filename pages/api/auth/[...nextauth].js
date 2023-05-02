import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials"
import connectMongo from "@/database/conn"
import Users from "@/model/Schema"
import { compare } from "bcryptjs"

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name: "credentials",
            async authorize(credentials, req){
                connectMongo().catch(error=>{error:"Connection failed"})

                const result = await Users.findOne({email:credentials.email})

                if(!result){
                    throw new Error("No user found with this email")
                }

                const comparePassword = await compare(credentials.password, result.password)

                if(!comparePassword || result.email!==credentials.email){
                    throw new Error("Credentials didnt match")
                }
                const user= result
                return result;
            }
        })
    ],
    callbacks: {
        jwt:({token,user})=>{
            if(user){
                token.id=user.id
                token.name= user.name
                token.role =user.role 
            }
            return token;
        },
        session:({session,token})=>{
            if(token){
                session.id=token.id
                session.name=token.name
                session.role = token.role
            }
            return session;
        }

    }
})