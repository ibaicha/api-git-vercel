import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/createRole.dto';
import { Request } from 'express';
import { UpdateRoleDto } from './dto/updateRole.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    getAll(): Promise<import(".prisma/client").Role[]>;
    get(roleId: number, createRoleDto: CreateRoleDto): Promise<import(".prisma/client").Role>;
    create(createRoleDto: CreateRoleDto, request: Request): Promise<{
        data: string;
    }>;
    delete(roleId: number, createRoleDto: CreateRoleDto, request: Request): Promise<{
        data: string;
    }>;
    update(roleId: number, updateRoleDto: UpdateRoleDto, request: Request): Promise<{
        data: string;
    }>;
}
