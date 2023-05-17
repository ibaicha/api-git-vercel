import { OpService } from './op.service';
import { CreateOpDto } from './dto/createOp.dto';
import { UpdateOpDto } from './dto/updateOp.dto';
import { Request } from 'express';
export declare class OpController {
    private readonly opService;
    constructor(opService: OpService);
    getAll(): Promise<import(".prisma/client").Op[]>;
    get(opId: number, createOpDto: CreateOpDto): Promise<import(".prisma/client").Op>;
    create(createOpDto: CreateOpDto): Promise<{
        data: string;
    }>;
    delete(opId: number, createOpDto: CreateOpDto, request: Request): Promise<{
        data: string;
    }>;
    update(opId: number, updateOpDto: UpdateOpDto): Promise<{
        data: string;
    }>;
}
