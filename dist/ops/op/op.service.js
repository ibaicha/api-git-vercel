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
exports.OpService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let OpService = class OpService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        return this.prismaService.op.findMany();
    }
    async getOne(opId) {
        const op = await this.prismaService.op.findUnique({ where: { id: opId } });
        if (!op)
            throw new common_1.NotFoundException('Post not found');
        return op;
    }
    async create(createOpDto) {
        const { name, typeOpId } = createOpDto;
        await this.prismaService.op.create({ data: { name, typeOpId } });
        return { data: "Op created" };
    }
    async update(opId, updateOpDto) {
        const op = await this.prismaService.op.findUnique({ where: { id: opId } });
        if (!op)
            throw new common_1.NotFoundException('Op not found');
        await this.prismaService.op.update({ where: { id: opId }, data: Object.assign({}, updateOpDto) });
        return { data: "Op updeted!" };
    }
    async delete(opId) {
        const op = await this.prismaService.op.findUnique({ where: { id: opId } });
        if (!op)
            throw new common_1.NotFoundException('Post not found');
        await this.prismaService.op.delete({ where: { id: opId } });
        return { data: "Op deleted" };
    }
};
OpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OpService);
exports.OpService = OpService;
//# sourceMappingURL=op.service.js.map