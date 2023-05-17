import { SousZoneService } from './sous_zone.service';
import { CreateSousZoneDto } from './dto/createSousZone.dto';
import { UpdateSousZoneDto } from './dto/updateSousZone.dto';
import { Request } from 'express';
export declare class SousZoneController {
    private readonly sousZoneService;
    constructor(sousZoneService: SousZoneService);
    getAll(): Promise<import(".prisma/client").SousZone[]>;
    get(sousZoneId: number, createSousZoneDto: CreateSousZoneDto): Promise<import(".prisma/client").SousZone>;
    create(createSousZoneDto: CreateSousZoneDto): Promise<{
        data: string;
    }>;
    delete(sousZoneId: number, createSousZoneDto: CreateSousZoneDto, request: Request): Promise<{
        data: string;
    }>;
    update(sousZoneId: number, updateSousZoneDto: UpdateSousZoneDto): Promise<{
        data: string;
    }>;
}
