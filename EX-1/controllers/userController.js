import users from '../models/userModel.js';

export const listUsers = async (req, res) => {
    res.json(users);
};

export const getUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

export const addUser = async (req, res) => {

    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

export const editUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    const user = users.find(u => u.id === userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (name) user.name = name;
    if (email) user.email = email;

    res.json(user);
};

export const removeUser = async (req, res) => {
 const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) return res.status(404).json({ error: 'User not found' });

    users.splice(index, 1);
    res.status(204).send();
};
