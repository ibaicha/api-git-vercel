"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProfileService = class ProfileService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        return this.prismaService.profile.findMany();
    }
    async getOne(profileId) {
        const profile = await this.prismaService.profile.findUnique({ where: { id: profileId } });
        if (!profile)
            throw new common_1.NotFoundException('Profile not found');
        return profile;
    }
    async create(createProfileDto) {
        const { firstName, lastName, adress, userId } = createProfileDto;
        await this.prismaService.profile.create({ data: { firstName, lastName, adress, userId } });
        return { data: "Profile created" };
    }
    async update(profileId, updateProfileDto) {
        const profile = await this.prismaService.profile.findUnique({ where: { id: profileId } });
        if (!profile)
            throw new common_1.NotFoundException('Profile not found');
        await this.prismaService.profile.update({ where: { id: profileId }, data: Object.assign({}, updateProfileDto) });
        return { data: "Profile updeted!" };
    }
    async delete(profileId) {
        const profile = await this.prismaService.profile.findUnique({ where: { id: profileId } });
        if (!profile)
            throw new common_1.NotFoundException('Post not found');
        await this.prismaService.profile.delete({ where: { id: profileId } });
        return { data: "Profile deleted" };
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map