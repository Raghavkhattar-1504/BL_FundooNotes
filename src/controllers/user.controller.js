import { LoginService, UserService, getAllUserService, forgotPasswordService, resetPasswordService } from "../services/user.service";

export async function registerUser(req, res) {
  try {
    const user = await UserService(req);
    return res.status(201).json({
      message: "User created successfully",
      user: user,
      statusCode: 201
    });
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function LoginUser(req, res) {
  try {


    const token = await LoginService(req);
    return res.status(201).json({
      message: "User logged in successfully",
      token: token,
      statusCode: 201
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await getAllUserService();
    console.log("inside users", users);

    return res.status(201).json({
      message: "All users sent successfully.",
      data: users,
      statusCode: 201
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function forgotPassword(req, res) {
  try {
    const note = await forgotPasswordService(req);
    return res.status(200).json({
      message: "OTP sent successfully",
      data: note,
      statusCode: 200
    });
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function resetPassword(req, res) {
  try {
    const user = await resetPasswordService(req.body);

    if (user) {
      return res.status(200).json({
        message: "Password changed successfully",
        data: user,
        statusCode: 200
      });
    }
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}