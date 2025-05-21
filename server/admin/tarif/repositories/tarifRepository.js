import { GenericRepository } from "../../../repositories/genericRepository"

export class TarifRepository extends GenericRepository {
  constructor() {
    super('FraisTimbre') // le nom du modèle Prisma (minuscule par convention)
  }

}