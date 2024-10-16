const userAdminService = require('../service/user.admin.service');

const saveUserAdmin = async(req, res) => {
    try {
        const saveData = await userAdminService.saveUserAdmin(req.body);
        return res.status(200).send(saveData);
    } catch (error) {
        return res.status(404).send(error);
    }
};

const loginUserAdmin = async(req, res) => {
    try {
        const data = req.body;
        const login = await userAdminService.loginUserAdmin(data);
        return res.status(200).send(login);
    } catch (error) {
        return res.status(404).send('ERROR in logging in!');
    }
};

const findAllData = async(req, res) => {
    try {
        const rol = req.params.role;
        if(rol !== 'admin'){
            return res.status(403).send('Access denied!');
        }
        const viewData = await userAdminService.findAllData(rol);
        return res.status(200).send(viewData);
    } catch (error) {
        return res.status(404).send('ERROR in viewing data');
    }
};

const deleteUserById = async(req, res) => {
    try {
        const rol = req.params.role;
        if(rol !== 'admin'){
            return res.status(403).send('Access denied!');
        }
        const deleteData = await userAdminService.deleteUserById(req.params.id);
        return res.status(200).send(deleteData);
    } catch (error) {
        return res.status(404).send('ERROR in deleting user data');
    }
}

module.exports = {
    /**
   * @swagger
   * /register:
   *   post:
   *     summary: Save user/admin details.
   *     description: Use this API to register new user/admin.
   *     tags:
   *       - User/Admin registration
   *     produces:
   *       - application/json
   *     consumes:
   *       - application/json
   *     parameters:
   *       - in: body
   *         name: user/adminRegistration
   *         description: The user/admin must provide the required credentials.
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             username:
   *               type: string
   *               example: "admin10"
   *             password:
   *               type: string
   *               example: "password"
   *             role:
   *               type: string
   *               example: "admin"
   *     responses:
   *       200:
   *         description: Admin/user registration successful.
   *       400:
   *         description: Bad Request. Invalid input data.
   *       500:
   *         description: Internal Server Error.
   */
saveUserAdmin,
/**
   * @swagger
   * /login:
   *   post:
   *     summary: User and Admin Login.
   *     description: Use this API to User/Admin.
   *     tags:
   *       - User/Admin Login
   *     produces:
   *       - application/json
   *     consumes:
   *       - application/json
   *     parameters:
   *       - in: body
   *         name: User/Admin Login
   *         description: The User/Admin has to provide login credentials.
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             username:
   *               type: string
   *               example: "admin10"
   *             password:
   *               type: string
   *               example: "password"
   *     responses:
   *       200:
   *         description: User/Admin login successfull.
   *       400:
   *         description: Bad Request. Invalid input data.
   *       500:
   *         description: Internal Server Error.
   */
  loginUserAdmin,
 /**
 * @swagger
 * /users/{role}:
 *   get:
 *     summary: View all users.
 *     description: Use this API to view all users. Only admins can retrieve all user details.
 *     tags:
 *       - View all users
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: role
 *         description: Role of the user (must be 'admin' to view all users).
 *         required: true
 *         schema:
 *           type: string
 *           enum: [admin]
 *           example: "admin"
 *     responses:
 *       200:
 *         description: List of all users retrieved successfully.
 *       403:
 *         description: Access denied. Only admins can retrieve all users.
 *       400:
 *         description: Bad Request. Invalid input data.
 *       500:
 *         description: Internal Server Error.
 */
findAllData,
/**
 * @swagger
 * /users/{role}/{id}:
 *   delete:
 *     summary: Delete a user by ID (admin only).
 *     description: Use this API to delete a user by their ID. Only admins can delete users.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: role
 *         description: Role of the user (must be 'admin' to delete a user).
 *         required: true
 *         schema:
 *           type: string
 *           enum: [admin]
 *           example: "admin"
 *       - in: path
 *         name: id
 *         description: ID of the user to delete.
 *         required: true
 *         schema:
 *           type: string
 *           example: "user11"
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *       403:
 *         description: Access denied. Only admins can delete users.
 *       404:
 *         description: User not found with the provided ID.
 *       500:
 *         description: Internal Server Error.
 */
deleteUserById
}