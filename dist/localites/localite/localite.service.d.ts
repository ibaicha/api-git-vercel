import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLocaliteDto } from './dto/createLocalite.dto';
import { UpdateLocaliteDto } from './dto/updateLocalite.dto';
export declare class LocaliteService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<import(".prisma/client").Localite[]>;
    getOne(localiteId: number): Promise<import(".prisma/client").Localite>;
    create(createLocaliteDto: CreateLocaliteDto): Promise<{
        data: string;
    }>;
    update(localiteId: number, updateLocaliteDto: UpdateLocaliteDto): Promise<{
        data: string;
    }>;
    delete(localiteId: number): Promise<{
        data: string;
    }>;
}
