import User from '../models/user.model'
import bcrypt from  "bcrypt";
export async function UserService(req) {
  try {
    const { name, email, phonenumber, password } = req.validatedBody;

    if (!(name || email || password)) {
      throw new Error("Please provide all required fields");
    }

    const findUser = await User.findOne({email});
    if(findUser){
      throw new Error("Email already exists");
    }

    let hashedPassword;
    try{
      hashedPassword = await bcrypt.hash(password, 10);
    }
    catch(error){
      throw error;
    }
    const user = await User.create({ name, email, phonenumber, password: hashedPassword });
    return user;
  }

  catch (error){
    throw error;
  }
}