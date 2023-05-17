import { LocaliteService } from './localite.service';
import { CreateLocaliteDto } from './dto/createLocalite.dto';
import { UpdateLocaliteDto } from './dto/updateLocalite.dto';
import { Request } from 'express';
export declare class LocaliteController {
    private readonly localiteService;
    constructor(localiteService: LocaliteService);
    getAll(): Promise<import(".prisma/client").Localite[]>;
    get(localiteId: number, createLocaliteDto: CreateLocaliteDto): Promise<import(".prisma/client").Localite>;
    create(createLocaliteDto: CreateLocaliteDto): Promise<{
        data: string;
    }>;
    delete(localiteId: number, createLocaliteDto: CreateLocaliteDto, request: Request): Promise<{
        data: string;
    }>;
    update(localiteId: number, updateLocaliteDto: UpdateLocaliteDto): Promise<{
        data: string;
    }>;
}
