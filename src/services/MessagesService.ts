import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository"

interface IMessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesService {
  //private: atributo disponível somente para a classe que á contem;
  private messagesRepository: Repository<Message>;

  constructor() {
    this.messagesRepository = getCustomRepository(MessagesRepository);
  }

  async create({ admin_id, text, user_id }: IMessageCreate) {
    const message = this.messagesRepository.create({
      admin_id,
      text,
      user_id,
    });

    await this.messagesRepository.save(message);

    return message;
  }

  async ListByUser(user_id: string) {
    const list = await this.messagesRepository.find({
      // usado para trazer informações relacionadas ao usuário;
      // tomar cuidado para nao sobre carregar o nossa requisição;
      where: {user_id},
      relations: ["user"],
    });

    return list;
  }
}

export { MessagesService };