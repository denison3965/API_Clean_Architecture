import { getCustomRepository } from "typeorm";
import { IAthenticationRequestDTO } from "./AuthenticationDTO"
import { UserRepository } from "./../../repositories/UserRepository"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';


class AuthenticationUseCase {

    async execute(data: IAthenticationRequestDTO) {

        const authRepository = getCustomRepository(UserRepository);
        const { email, password } = data;
        
        const user = await authRepository.findOne({where: {email}});

        if (!user)
        {
            throw new Error("User not found");
            
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if (!isValidPassword)
        {
            throw new Error("Yor password  is worng");
            
        }

        const token = jwt.sign({ id : user.id}, 'secret', { expiresIn: '1d'});

        delete user.password;

        return {
            user,
            token
        };
    }
}

export { AuthenticationUseCase }