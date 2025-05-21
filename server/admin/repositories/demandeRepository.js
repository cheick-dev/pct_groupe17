import { GenericRepository } from "../../repositories/genericRepository"

export class DemandeRepository extends GenericRepository {
  constructor() {
    super('demande') // le nom du modèle Prisma (minuscule par convention)
  }

  // async findByEmail(email) {
  //   return await this.model.findUnique({
  //     where: { Email: email },
  //   })
  // }

}