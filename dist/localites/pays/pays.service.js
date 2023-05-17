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
exports.PaysService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PaysService = class PaysService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        return this.prismaService.pays.findMany();
    }
    async getOne(paysId) {
        const pays = await this.prismaService.pays.findUnique({ where: { id: paysId } });
        if (!pays)
            throw new common_1.NotFoundException('Post not found');
        return pays;
    }
    async create(createPaysDto) {
        const { name, sigle } = createPaysDto;
        await this.prismaService.pays.create({ data: { name, sigle } });
        return { data: "Pays created" };
    }
    async update(paysId, updatePaysDto) {
        const pays = await this.prismaService.pays.findUnique({ where: { id: paysId } });
        if (!pays)
            throw new common_1.NotFoundException('Pays not found');
        await this.prismaService.pays.update({ where: { id: paysId }, data: Object.assign({}, updatePaysDto) });
        return { data: "Pays updeted!" };
    }
    async delete(paysId) {
        const pays = await this.prismaService.pays.findUnique({ where: { id: paysId } });
        if (!pays)
            throw new common_1.NotFoundException('Post not found');
        await this.prismaService.pays.delete({ where: { id: paysId } });
        return { data: "Pays deleted" };
    }
};
PaysService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaysService);
exports.PaysService = PaysService;
//# sourceMappingURL=pays.service.js.map