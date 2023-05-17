import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/createProfile.dto';
import { UpdateProfileDto } from './dto/updateProfile.dto';
export declare class ProfileService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<import(".prisma/client").Profile[]>;
    getOne(profileId: number): Promise<import(".prisma/client").Profile>;
    create(createProfileDto: CreateProfileDto): Promise<{
        data: string;
    }>;
    update(profileId: number, updateProfileDto: UpdateProfileDto): Promise<{
        data: string;
    }>;
    delete(profileId: number): Promise<{
        data: string;
    }>;
}
