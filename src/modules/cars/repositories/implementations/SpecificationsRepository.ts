import { Specification } from "../../entities/Especification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specfifications: Specification[];
    
    constructor() {
        this.specfifications = [];
    }

    // Cria uma especificação
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specfifications.push(specification);
    }

    // Procura por um que já possua o nome
    findByName(name: string): Specification {
        const specification = this.specfifications.find(specification => specification.name === name);
        return specification;
    }

}

export { SpecificationsRepository }