import { prisma } from "@/lib/prisma"

export class GenericRepository {
  constructor(modelName) {
    if (!prisma[modelName]) {
      throw new Error(`Model ${modelName} does not exist in Prisma Client.`)
    }
    this.model = prisma[modelName]
  }

  async findAll(args = {}) {
    return await this.model.findMany(args)
  }

  async findOne(args) {
    return await this.model.findUnique(args)
  }

  async create(args) {
    return await this.model.create(args)
  }

  async update(args) {
    return await this.model.update(args)
  }

  async delete(args) {
    return await this.model.delete(args)
  }
}
