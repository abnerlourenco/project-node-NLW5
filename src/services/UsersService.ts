import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";



class UsersService {
  async create(email: string) {
    // Verificar se o usuario existe
    // Caso nao exista, salvar no Banco de Dados
    // Se já existir, retornar o user.

    const usersRepository = getCustomRepository(UsersRepository);

    //Select * from users where email = "email" limit 1;
    const userExists = await usersRepository.findOne({
      email
    });

    if(userExists) {
      throw new Error("Email has already been signed!!")
    }
    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { UsersService }