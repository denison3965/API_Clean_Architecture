import { response } from 'express';
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../../repositories/UserRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO'

class CreateUserCase {

    constructor(){
        

    }

    async execute(data: ICreateUserRequestDTO)
    {
        const userRepository = getCustomRepository(UserRepository);

        const userExist = await userRepository.findOne(data.email);

        if(userExist)
        {
            throw new Error('User already Exists');
        }

        const user = userRepository.create(data)

        await userRepository.save(user);

    }
}

export { CreateUserCase }