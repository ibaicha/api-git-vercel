import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaysDto } from './dto/createPays.dto';
import { UpdatePaysDto } from './dto/updatePays.dto';
export declare class PaysService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<import(".prisma/client").Pays[]>;
    getOne(paysId: number): Promise<import(".prisma/client").Pays>;
    create(createPaysDto: CreatePaysDto): Promise<{
        data: string;
    }>;
    update(paysId: number, updatePaysDto: UpdatePaysDto): Promise<{
        data: string;
    }>;
    delete(paysId: number): Promise<{
        data: string;
    }>;
}
