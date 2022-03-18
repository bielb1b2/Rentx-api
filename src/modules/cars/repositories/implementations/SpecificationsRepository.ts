import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Especification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    // Cria uma especificação
    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
      const specification = this.repository.create({
          description,
          name
      })

      await this.repository.save(specification)
    }

    // Procura por um que já possua o nome
    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({
            name,
        })
        return specification;
    }

}

export { SpecificationsRepository }