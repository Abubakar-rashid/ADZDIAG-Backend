const { models } = require('../config/db');
const { users } = models;

const getAllUsers = async (req, res) => {
    const allUsers = await users.findAll();

    return res.status(200).json({ data: allUsers, message: "Users fetched successfully" });

}


module.exports = { getAllUsers };