import { TypeOpService } from './type_op.service';
import { CreateTypeOpDto } from './dto/createTypeOp.dto';
import { UpdateTypeOpDto } from './dto/updateTypeOp.dto';
import { Request } from 'express';
export declare class TypeOpController {
    private readonly typeOpService;
    constructor(typeOpService: TypeOpService);
    getAll(): Promise<import(".prisma/client").TypeOp[]>;
    get(typeOpId: number, createTypeOpDto: CreateTypeOpDto): Promise<import(".prisma/client").TypeOp>;
    create(createTypeOpDto: CreateTypeOpDto): Promise<{
        data: string;
    }>;
    delete(typeOpId: number, createTypeOpDto: CreateTypeOpDto, request: Request): Promise<{
        data: string;
    }>;
    update(typeOpId: number, updateTypeOpDto: UpdateTypeOpDto): Promise<{
        data: string;
    }>;
}
