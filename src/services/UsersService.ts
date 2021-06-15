import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/Users";
import { UsersRepository } from "../repositories/UsersRepository";



class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async create(email: string) {
    // Verificar se o usuario existe
    // Caso nao exista, salvar no Banco de Dados
    // Se já existir, retornar o user.

    //Select * from users where email = "email" limit 1;
    const userExists = await this.usersRepository.findOne({
      email,
    });

    if(userExists) {
     return userExists;
    }
    const user = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export { UsersService }