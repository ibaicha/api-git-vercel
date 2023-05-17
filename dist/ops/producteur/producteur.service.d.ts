import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProducteurDto } from './dto/createProducteur.dto';
import { UpdateProducteurDto } from './dto/updateProducteur.dto';
export declare class ProducteurService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<import(".prisma/client").Producteur[]>;
    getOne(producteurId: number): Promise<import(".prisma/client").Producteur>;
    create(createProducteurDto: CreateProducteurDto): Promise<{
        data: string;
    }>;
    update(producteurId: number, updateProducteurDto: UpdateProducteurDto): Promise<{
        data: string;
    }>;
    delete(producteurId: number): Promise<{
        data: string;
    }>;
}
