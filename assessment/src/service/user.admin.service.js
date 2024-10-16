const userAdminQuery = require('../query/user.admin.query');
const tokens = require('../middleware/token');
const bcrypt = require('bcrypt');

const saveUserAdmin = async(body) => {
    try {
        const {username, password, role} = body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const savedData = {username, password:hashedPassword, role};
        const saveData = await userAdminQuery.saveUserAdmin(savedData);
        return saveData;
    } catch (error) {
        throw error;
    }
};

const loginUserAdmin = async(body) => {
    try {
        const {username, password} = body;
        const login = await userAdminQuery.findUserAdmin(username);
        const checkPass = await bcrypt.compare(password, login.password);
        if(!checkPass){
            throw 'Invalid credentials';
        }
        let role
        if(login.role == 'admin'){
            const adtoken = await tokens.generateAdminToken(login.username);
            role = "admin";
            return {adtoken, role};
        }
        if(login.role == 'user'){
            const utoken = await tokens.generateUserToken(login.username);
            role = "user";
            return {utoken, role};
        }
    } catch (error) {
        throw error;
    }
};

const findAllData = async() => {
    try {
        const viewData = await userAdminQuery.findAllData();
        return viewData;
    } catch (error) {
        throw error;
    }
};

const deleteUserById = async(id) => {
    try {
        const deleteData = await userAdminQuery.deleteUserById(id);
        return deleteData;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    saveUserAdmin,
    loginUserAdmin,
    findAllData,
    deleteUserById
}