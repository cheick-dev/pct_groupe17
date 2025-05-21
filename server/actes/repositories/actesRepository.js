import { GenericRepository } from "../../repositories/genericRepository";

export class ActeRepository extends GenericRepository {
  constructor() {
    super("document_Acte"); // le nom du modèle Prisma (minuscule par convention)
  }

  // async findByEmail(email) {
  //   return await this.model.findUnique({
  //     where: { Email: email },
  //   })
  // }
}
