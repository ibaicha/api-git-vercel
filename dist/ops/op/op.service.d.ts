import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOpDto } from './dto/createOp.dto';
import { UpdateOpDto } from './dto/updateOp.dto';
export declare class OpService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<import(".prisma/client").Op[]>;
    getOne(opId: number): Promise<import(".prisma/client").Op>;
    create(createOpDto: CreateOpDto): Promise<{
        data: string;
    }>;
    update(opId: number, updateOpDto: UpdateOpDto): Promise<{
        data: string;
    }>;
    delete(opId: number): Promise<{
        data: string;
    }>;
}
