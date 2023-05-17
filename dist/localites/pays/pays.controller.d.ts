import { PaysService } from './pays.service';
import { CreatePaysDto } from './dto/createPays.dto';
import { UpdatePaysDto } from './dto/updatePays.dto';
import { Request } from 'express';
export declare class PaysController {
    private readonly paysService;
    constructor(paysService: PaysService);
    getAll(): Promise<import(".prisma/client").Pays[]>;
    get(paysId: number, createPaysDto: CreatePaysDto): Promise<import(".prisma/client").Pays>;
    create(createPaysDto: CreatePaysDto): Promise<{
        data: string;
    }>;
    delete(paysId: number, createPaysDto: CreatePaysDto, request: Request): Promise<{
        data: string;
    }>;
    update(paysId: number, updatePaysDto: UpdatePaysDto): Promise<{
        data: string;
    }>;
}
