import fs from 'fs'
import config from '../Configs/config.js';

export class viewsController {


homeView = (req,res) => {
    const productsData = JSON.parse(fs.readFileSync(`${config.DIRNAME}/Mocks/productos.json`, 'utf8'));
    res.render("home",{title: "Home", style :"styles.css", products: productsData})
}

realTimeProductView = (req, res) => {
    const productsData = JSON.parse(fs.readFileSync(`${config.DIRNAME}/Mocks/productos.json`, 'utf8'));
    res.render('realTimeProducts', { title: "Admin", products: productsData, style :"styles.css" });
}

}



