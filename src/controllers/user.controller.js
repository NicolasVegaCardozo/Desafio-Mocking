import userModel from '../models/user.models';
const postUser = async (req, res) => {
	if (!first_name || !last_name || !email) {
		CustomError.createError({
			name: "User creation error",
			cause: generateUserErrorInfo({ first_name, last_name, age, email }),
			message: "Error Trying to create User",
			code: EErrors.INVALID_TYPES_ERROR
		});
	}
	try {
		if (!req.user) {
			return res.status(400).send({ mensaje: 'Usuario existente' });
		}
		res.status(200).send({ mensaje: 'Usuario creado' });
	} catch (error) {
		res.status(500).send({ mensaje: `Error al crear el usuario ${error}` });
	}
};

const getUser = async (req, res) => {
	try {
		const response = await userModel.find();
		res.status(200).send(response);
	} catch (error) {
		res.status(400).send({ error: `Error al consultar usuarios: ${error}` });
	}
};

const usersController = { getUser, postUser };

export default usersController;