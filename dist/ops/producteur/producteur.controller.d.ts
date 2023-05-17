import { ProducteurService } from './producteur.service';
import { CreateProducteurDto } from './dto/createProducteur.dto';
import { UpdateProducteurDto } from './dto/updateProducteur.dto';
import { Request } from 'express';
export declare class ProducteurController {
    private readonly producteurService;
    constructor(producteurService: ProducteurService);
    getAll(): Promise<import(".prisma/client").Producteur[]>;
    get(producteurId: number, createProducteurDto: CreateProducteurDto): Promise<import(".prisma/client").Producteur>;
    create(createProducteurDto: CreateProducteurDto): Promise<{
        data: string;
    }>;
    delete(producteurId: number, createProducteurDto: CreateProducteurDto, request: Request): Promise<{
        data: string;
    }>;
    update(producteurId: number, updateProducteurDto: UpdateProducteurDto): Promise<{
        data: string;
    }>;
}
