import UserDAO           from "../dao/userDAO";
import * as UserUtils    from "../utils/user";
import * as GeneralUtils from "../utils/general";

class UserController {
    login(req, res) {
        try {
            let data = req.body;
            let response = {
                status: false,
                message: "Erro no servidor"
            }

            if (UserUtils.validateUserLogin(data) === false) {
                response.message = "Informe os dados corretamente";
                return res.status(400).send(response);
            }

            UserDAO.login(data, (status) => {
                if (status !== false) {
                    if (status.length > 0) {
                        response.data = status[0];
                        const token = GeneralUtils.generateToken();

                        UserDAO.update({ token: token, id: response.data.id }, (status) => {
                            if (status !== false) {
                                response.status = true;
                                response.data.token = token;
                                delete response.message;
                                delete response.data.password;
                                return res.status(200).send(response);
                            } else {
                                response.message = "Não foi possível liberar o seu acesso no momento";
                                return res.status(500).send(response);
                            }
                        })
                    } else {
                        response.message = "Dados informados incorretos";
                        return res.status(500).send(response);
                    }
                }
            });
        } catch (e) {
            return res.status(500);
        }
    }
}

export default new UserController();
