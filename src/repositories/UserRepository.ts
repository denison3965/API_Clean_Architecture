import { EntityRepository, Repository } from "typeorm"
import { User } from '../entitys/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {

}

export { UserRepository }