import { GenericRepository } from "../../repositories/genericRepository"

export class AgentRepository extends GenericRepository {
  constructor() {
    super('agent') // le nom du modèle Prisma (minuscule par convention)
  }

  async findByEmail(email) {
    return await this.model.findUnique({
      where: { Email: email },
    })
  }

  async findById(id) {
    return await this.model.findUnique({
      where: { ID_Agent: id },
    })
  }
}