import { Request, Response} from 'express';
import { CreateUserCase } from './CreateUserCase';

class CreateUserController {

    private createUserCase: CreateUserCase;

    constructor(createUserCase: CreateUserCase) {
        this.createUserCase = createUserCase;
    }

    index(request: Request, response: Response){
        return response.status(200).json({
            message: "You access one protect router, CONGRATILATIONS your JWT is working",
            userId: request.userId
        })
    }

    async handle(request: Request, response: Response) {
        const { email, password } = request.body

        try
        {
            await this.createUserCase.execute({
                email,
                password
            });

            return response.status(201).send();
        }
        catch (err)
        {
            return response.status(400).json({
                message: err.message || 'Unexpected error',
            })
        }

    }
}

export { CreateUserController }