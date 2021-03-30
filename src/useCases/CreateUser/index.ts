import { CreateUserCase } from "./CreateUserCase";
import { CreateUserController } from "./CreateUserController";


const createUserCase = new CreateUserCase;
const createUserCrontroller = new CreateUserController(createUserCase);

export { createUserCrontroller }