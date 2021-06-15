import { getCustomRepository } from "typeorm"
import { MessagesRepository } from "../repositories/MessagesRepository"

interface IMessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesService {

  async create({ admin_id, text, user_id }: IMessageCreate) {
    const messagesRepository = getCustomRepository(MessagesRepository);

    const message = messagesRepository.create({
      admin_id,
      text,
      user_id,
    });

    await messagesRepository.save(message);

    return message;
  }

  async ListByUser(user_id: string) {
    const messagesRepository = getCustomRepository(MessagesRepository);

    const list = await messagesRepository.find({
      // usado para trazer informações relacionadas ao usuário;
      // tomar cuidado para nao sobre carregar o nossa requisição;
      where: {user_id},
      relations: ["user"],
    });

    return list;
  }
}

export { MessagesService };