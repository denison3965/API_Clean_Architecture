import { AuthenticationController } from "./AuthenticationController";
import { AuthenticationUseCase } from "./AuthenticationUserCase";

const authenticationUseCase = new AuthenticationUseCase()
const authenticationController = new AuthenticationController(authenticationUseCase);

export { authenticationController }