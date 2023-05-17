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
exports.ZoneService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ZoneService = class ZoneService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        return this.prismaService.zone.findMany({
            include: {
                pays: {
                    select: {
                        name: true,
                    }
                },
            }
        });
    }
    async getOne(zoneId) {
        const zone = await this.prismaService.zone.findUnique({ where: { id: zoneId } });
        if (!zone)
            throw new common_1.NotFoundException('Post not found');
        return zone;
    }
    async create(createZoneDto) {
        const { name, paysId } = createZoneDto;
        await this.prismaService.zone.create({ data: { name, paysId } });
        return { data: "Zone created" };
    }
    async update(zoneId, updateZoneDto) {
        const zone = await this.prismaService.zone.findUnique({ where: { id: zoneId } });
        if (!zone)
            throw new common_1.NotFoundException('Zone not found');
        await this.prismaService.zone.update({ where: { id: zoneId }, data: Object.assign({}, updateZoneDto) });
        return { data: "Zone updeted!" };
    }
    async delete(zoneId) {
        const zone = await this.prismaService.zone.findUnique({ where: { id: zoneId } });
        if (!zone)
            throw new common_1.NotFoundException('Post not found');
        await this.prismaService.zone.delete({ where: { id: zoneId } });
        return { data: "Zone deleted" };
    }
};
ZoneService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ZoneService);
exports.ZoneService = ZoneService;
//# sourceMappingURL=zone.service.js.map