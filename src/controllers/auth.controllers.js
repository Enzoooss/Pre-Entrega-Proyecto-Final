import { userModel } from "../models/user.model.js";
import { generateToken } from "../utils/jwtFunction.js";
import { verifyPassword } from "../utils/hashPassword.js";

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Faltan datos", details: "Faltan datos" });
    }
    try {
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "usuario no encontrado" });
      }
      const isPasswordCorrect = await verifyPassword(password, user.password);

      if (!isPasswordCorrect) {
        return res.status(401).json({ error: "contraseña incorrecta" });
      }

      const payload = {
        fullName: `${user.first_name} ${user.last_name}`,
        email: user.email,
        role: user.role,
      };
      const token = generateToken(payload);

      res.cookie("currentUser", token, {
        maxage: 100000,
        httpOnly: true,
      })

      res.status(200).json({ message: "Login correcto" });
    } catch (error) {
      res.status(500).json({ error: "Hubo un error", details: error.message });
    }
  }
}

export default new AuthController();
