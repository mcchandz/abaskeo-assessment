const jwt = require('jsonwebtoken');

const generateAdminToken = async(data) => {
    try {
        const adminToken = await jwt.sign(data, 'admin');
        return adminToken;
    } catch (error) {
        throw error;
    }
};
const generateUserToken = async(data) => {
    try {
        const userToken = await jwt.sign(data, 'user');
        return userToken;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    generateAdminToken,
    generateUserToken
}