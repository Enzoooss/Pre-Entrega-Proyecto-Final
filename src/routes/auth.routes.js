import { Router } from "express";
import authController from "../controller/auth.controller.js";
import passport from "passport";

const router = Router();

// Ruta para manejar el login
router.post("/login", passport.authenticate("login", { session: false, failureRedirect: "/api/auth/login-error" }), authController.login);

// Ruta para manejar el error de login
router.get("/login-error", authController.loginError);

// Ruta para registrar usuarios
router.post("/register", authController.register);

// Ruta para obtener información del usuario actual
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }), // Middleware para verificar JWT
  authController.current // Controlador que devuelve los datos del usuario
);

// Ruta para cerrar sesión
router.get("/logout", authController.logout);

export default router;
