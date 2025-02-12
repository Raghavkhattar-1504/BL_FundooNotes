import User from '../models/user.model'
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export async function UserService(req) {
  try {
    const { name, email, phonenumber, password } = req.validatedBody;

    if (!(name || email || password)) {
      throw new Error("Please provide all required fields");
    }

    const findUser = await User.findOne({ email });
    if (findUser) {
      throw new Error("Email already exists");
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    }
    catch (error) {
      throw error;
    }
    const user = await User.create({ name, email, phonenumber, password: hashedPassword });
    return user;
  }

  catch (error) {
    throw error;
  }
}

export async function LoginService(req) {
  try {
    const { email, password } = req.validatedBody;
    if (!(email || password)) {
      throw new Error("Please provide all required fields");
    }
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Email not found");
    }
    let isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.SECRET_KEY);
    return token;
  }
  catch (error) {
    throw error;
  }
}

export async function getAllUserService() {
  try {
    const data = await User.find();
    return data;

  } catch (error) {
    throw error;
  }
}

let recentOtp;

export async function forgotPasswordService(email) {
  try {
    const otp = Math.floor(Math.random() * 1000000);
    recentOtp = otp;
    return otp;

  } catch (error) {
    throw error;
  }
}

export async function resetPasswordService(body) {
  try {
    const { email, otp, newPassword } = body;

    if (recentOtp !== parseInt(otp)) {
      return { error: "Invalid OTP" };
    }
    recentOtp = null;

    console.log("otp verified");

    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      throw new Error("Email not found");
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(newPassword, 10);
    }
    catch (error) {
      throw error;
    }
    const data = await User.findOneAndUpdate(email, { password: hashedPassword });

    return data;

  } catch (error) {
    throw error;
  }
}
