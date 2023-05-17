import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSousZoneDto } from './dto/createSousZone.dto';
import { UpdateSousZoneDto } from './dto/updateSousZone.dto';
export declare class SousZoneService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<import(".prisma/client").SousZone[]>;
    getOne(sousZoneId: number): Promise<import(".prisma/client").SousZone>;
    create(createSousZoneDto: CreateSousZoneDto): Promise<{
        data: string;
    }>;
    update(sousZoneId: number, updateSousZoneDto: UpdateSousZoneDto): Promise<{
        data: string;
    }>;
    delete(sousZoneId: number): Promise<{
        data: string;
    }>;
}
