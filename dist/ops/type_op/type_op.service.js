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
exports.TypeOpService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let TypeOpService = class TypeOpService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        return this.prismaService.typeOp.findMany();
    }
    async getOne(typeOpId) {
        const typeOp = await this.prismaService.typeOp.findUnique({ where: { id: typeOpId } });
        if (!typeOp)
            throw new common_1.NotFoundException('Post not found');
        return typeOp;
    }
    async create(createTypeOpDto) {
        const { name } = createTypeOpDto;
        await this.prismaService.typeOp.create({ data: { name } });
        return { data: "TypeOp created" };
    }
    async update(typeOpId, updateTypeOpDto) {
        const typeOp = await this.prismaService.typeOp.findUnique({ where: { id: typeOpId } });
        if (!typeOp)
            throw new common_1.NotFoundException('TypeOp not found');
        await this.prismaService.typeOp.update({ where: { id: typeOpId }, data: Object.assign({}, updateTypeOpDto) });
        return { data: "TypeOp updeted!" };
    }
    async delete(typeOpId) {
        const typeOp = await this.prismaService.typeOp.findUnique({ where: { id: typeOpId } });
        if (!typeOp)
            throw new common_1.NotFoundException('Post not found');
        await this.prismaService.typeOp.delete({ where: { id: typeOpId } });
        return { data: "TypeOp deleted" };
    }
};
TypeOpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TypeOpService);
exports.TypeOpService = TypeOpService;
//# sourceMappingURL=type_op.service.js.map