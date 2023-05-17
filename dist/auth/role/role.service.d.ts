import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dto/createRole.dto';
import { UpdateRoleDto } from './dto/updateRole.dto';
export declare class RoleService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<import(".prisma/client").Role[]>;
    getOne(roleId: number): Promise<import(".prisma/client").Role>;
    create(createRoleDto: CreateRoleDto): Promise<{
        data: string;
    }>;
    update(roleId: number, updateRoleDto: UpdateRoleDto): Promise<{
        data: string;
    }>;
    delete(roleId: number): Promise<{
        data: string;
    }>;
}
