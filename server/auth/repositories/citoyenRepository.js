import { GenericRepository } from "../../repositories/genericRepository"

export class CitoyenRepository extends GenericRepository {
  constructor() {
    super('citoyen') // le nom du modèle Prisma (minuscule par convention)
  }

  async findByEmail(email) {
    return await this.model.findUnique({
      where: { Email: email },
    })
  }

  async findById(id) {
    return await this.model.findUnique({
      where: { ID_Citoyen: id },
    })
  }
}