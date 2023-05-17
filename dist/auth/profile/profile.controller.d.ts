import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/createProfile.dto';
import { Request } from 'express';
import { UpdateProfileDto } from './dto/updateProfile.dto';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    getAll(): Promise<import(".prisma/client").Profile[]>;
    get(profileId: number, createProfileDto: CreateProfileDto): Promise<import(".prisma/client").Profile>;
    create(createProfileDto: CreateProfileDto, request: Request): Promise<{
        data: string;
    }>;
    delete(profileId: number, createProfileDto: CreateProfileDto, request: Request): Promise<{
        data: string;
    }>;
    update(profileId: number, updateProfileDto: UpdateProfileDto, request: Request): Promise<{
        data: string;
    }>;
}
