const {userAdminModel} = require('../model/user.admin.model');

const saveUserAdmin = async(details) => {
    try {
       const userData=await new userAdminModel(details).save();
       return userData;
    } catch (error) {
        throw error;
    }
};

const findUserAdmin = async(username) => {
    try {
        const login = await userAdminModel.findOne({username:username});
        return login;
    } catch (error) {
        throw error;
    }
};

const findAllData = async() => {
    try {
        const viewData = await userAdminModel.find();
        return viewData;
    } catch (error) {
        throw error;
    }
};

const deleteUserById = async(id) => {
    try {
        const deleteData = await userAdminModel.findOneAndDelete(id);
        return deleteData;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    saveUserAdmin,
    findUserAdmin,
    findAllData,
    deleteUserById
}