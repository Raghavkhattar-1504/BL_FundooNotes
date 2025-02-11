import { UserService } from "../services/user.service";

export async function registerUser(req, res) {
  try{
   const user = await UserService(req);
   return res.status(201).json({
    message: "User created successfully",
    user: user,
    statusCode: 201
   });
  }
  catch(error){
  return res.status(500).json({message : error.message});
  }
}