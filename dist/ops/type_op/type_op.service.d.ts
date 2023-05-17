import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTypeOpDto } from './dto/createTypeOp.dto';
import { UpdateTypeOpDto } from './dto/updateTypeOp.dto';
export declare class TypeOpService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<import(".prisma/client").TypeOp[]>;
    getOne(typeOpId: number): Promise<import(".prisma/client").TypeOp>;
    create(createTypeOpDto: CreateTypeOpDto): Promise<{
        data: string;
    }>;
    update(typeOpId: number, updateTypeOpDto: UpdateTypeOpDto): Promise<{
        data: string;
    }>;
    delete(typeOpId: number): Promise<{
        data: string;
    }>;
}
