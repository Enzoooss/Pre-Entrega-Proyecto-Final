import { Router } from 'express';

const router = Router();

// Ruta para mostrar el formulario de login
router.get('/login', (req, res) => {
    res.render('login'); // Renderiza la vista 'login.hbs'
});

// Ruta para mostrar el formulario de registro
router.get('/register', (req, res) => {
    res.render('register'); // Renderiza la vista 'register.hbs'
});

// Ruta para mostrar la página de inicio
router.get('/', (req, res) => {
    res.render('home'); // Renderiza la vista 'home.hbs'
});

export default router;
