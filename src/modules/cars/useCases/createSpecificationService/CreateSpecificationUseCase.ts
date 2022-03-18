import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository
    ) {}
    
    execute({ name, description }: IRequest): void {

        const specfificationAlreadyExists = this.specificationsRepository.findByName(name);
        if(specfificationAlreadyExists){
            throw new Error("Specification already exists!");
        }

        this.specificationsRepository.create({
            name,
            description
        })
    }
}

export { CreateSpecificationUseCase }