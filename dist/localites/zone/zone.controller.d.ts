import { ZoneService } from './zone.service';
import { CreateZoneDto } from './dto/createZone.dto';
import { UpdateZoneDto } from './dto/updateZone.dto';
import { Request } from 'express';
export declare class ZoneController {
    private readonly zoneService;
    constructor(zoneService: ZoneService);
    getAll(): Promise<(import(".prisma/client").Zone & {
        pays: {
            name: string;
        };
    })[]>;
    get(zoneId: number, createZoneDto: CreateZoneDto): Promise<import(".prisma/client").Zone>;
    create(createZoneDto: CreateZoneDto): Promise<{
        data: string;
    }>;
    delete(zoneId: number, createZoneDto: CreateZoneDto, request: Request): Promise<{
        data: string;
    }>;
    update(zoneId: number, updateZoneDto: UpdateZoneDto): Promise<{
        data: string;
    }>;
}
