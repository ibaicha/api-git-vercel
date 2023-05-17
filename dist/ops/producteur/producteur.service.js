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
exports.ProducteurService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProducteurService = class ProducteurService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        return this.prismaService.producteur.findMany();
    }
    async getOne(producteurId) {
        const producteur = await this.prismaService.producteur.findUnique({ where: { id: producteurId } });
        if (!producteur)
            throw new common_1.NotFoundException('Post not found');
        return producteur;
    }
    async create(createProducteurDto) {
        const { prenom, nom, cni, email, telephone, adresse, isActive, opId } = createProducteurDto;
        await this.prismaService.producteur.create({ data: { prenom, nom, cni, email, telephone, adresse, isActive, opId } });
        return { data: "Producteur created" };
    }
    async update(producteurId, updateProducteurDto) {
        const producteur = await this.prismaService.producteur.findUnique({ where: { id: producteurId } });
        if (!producteur)
            throw new common_1.NotFoundException('Producteur not found');
        await this.prismaService.producteur.update({ where: { id: producteurId }, data: Object.assign({}, updateProducteurDto) });
        return { data: "Producteur updeted!" };
    }
    async delete(producteurId) {
        const producteur = await this.prismaService.producteur.findUnique({ where: { id: producteurId } });
        if (!producteur)
            throw new common_1.NotFoundException('Post not found');
        await this.prismaService.producteur.delete({ where: { id: producteurId } });
        return { data: "Producteur deleted" };
    }
};
ProducteurService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProducteurService);
exports.ProducteurService = ProducteurService;
//# sourceMappingURL=producteur.service.js.map