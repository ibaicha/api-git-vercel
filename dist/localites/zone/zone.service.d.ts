import { PrismaService } from 'src/prisma/prisma.service';
import { CreateZoneDto } from './dto/createZone.dto';
import { UpdateZoneDto } from './dto/updateZone.dto';
export declare class ZoneService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<(import(".prisma/client").Zone & {
        pays: {
            name: string;
        };
    })[]>;
    getOne(zoneId: number): Promise<import(".prisma/client").Zone>;
    create(createZoneDto: CreateZoneDto): Promise<{
        data: string;
    }>;
    update(zoneId: number, updateZoneDto: UpdateZoneDto): Promise<{
        data: string;
    }>;
    delete(zoneId: number): Promise<{
        data: string;
    }>;
}
