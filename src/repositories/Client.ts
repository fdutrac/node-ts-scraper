import { ParseOptions } from "querystring";
import { IClient } from "src/@types/ClientInterface";
import { IRepository } from "src/@types/ClientRepositoryInterface";
import { getConnection } from "typeorm";

export class ClientRepository implements IRepository {
  async add(client: IClient) {
    const repository = getConnection().getRepository("User");
    const result = repository.save(client);
    return result;
  }

  async list(param?: ParseOptions) {
    const repository = getConnection().getRepository("User");
    const result = repository.find(param);
    return result;
  }
}