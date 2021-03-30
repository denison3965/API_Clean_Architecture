import { Request, Response} from 'express';
import { AuthenticationUseCase } from './AuthenticationUserCase';


class AuthenticationController {

    private authenticationUserCase: AuthenticationUseCase;

    constructor(authenticationUserCase: AuthenticationUseCase)
    {
        this.authenticationUserCase = authenticationUserCase;
    }

    async handle(request: Request, response: Response) {
        const { email, password } = request.body

        try
        {
            let JWT_token = await this.authenticationUserCase.execute(
                {email, password}
            )

            return response.status(200).json(JWT_token);
        }
        catch (err)
        {
            return response.status(400).json({
                message: err.message || "Unexpected error",
            })
        }


        console.log(email+password);

        return response.send("Okay");
    }
}

export { AuthenticationController }