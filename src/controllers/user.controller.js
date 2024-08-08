import { userModel } from '../models/user.model.js'

class userController {
    async getAll(req, res) {
        try {
            const users = await userModel.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: "Hubo un error", details: error.message });
        }
    }
    
    async getById(req, res){
        const { id } = req.params;
        try {
            const user = await userModel.findById(id);  
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: "Hubo un error", details: error.message });
        }
    }

    async create(req, res) {
        const { first_name, last_name, email, password, role } = req.body; 
        
        if (!first_name || !last_name || !email || !password || !role) {
            return res.status(400).json({ error: "Faltan datos", details: "Faltan datos" });
        };

        try {
            const user = new userModel
            ({ first_name, 
                last_name, 
                email, 
                password, 
                role });

                //Con save tenes la ventraja de que podes usar los middlewares de moongose
                await user.save();
                res.status(201).json(user);
                
            } catch (error) {
                res.status(500).json({ error: "Hubo un error", details: error.message });
                }
            }
            async delete(req, res) {
            const { id } = req.params;
            try {
                const user = await userModel.findByIdAndDelete(id);
                res.status(200).json(user);
            } catch (error) {
                res.status(500).json({ error: "Hubo un error", details: error.message });
            }
        }
}

export default new userController();
