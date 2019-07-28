import express          from "express";
import bodyParser       from "body-parser";
import userController   from '../controllers/user';

const router = express.Router();
const app = express();

router.post("/login", userController.login);

module.exports = router;
