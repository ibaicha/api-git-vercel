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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProducteurController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const use_guards_decorator_1 = require("@nestjs/common/decorators/core/use-guards.decorator");
const producteur_service_1 = require("./producteur.service");
const passport_1 = require("@nestjs/passport");
const createProducteur_dto_1 = require("./dto/createProducteur.dto");
const updateProducteur_dto_1 = require("./dto/updateProducteur.dto");
const swagger_1 = require("@nestjs/swagger");
let ProducteurController = class ProducteurController {
    constructor(producteurService) {
        this.producteurService = producteurService;
    }
    getAll() {
        return this.producteurService.getAll();
    }
    get(producteurId, createProducteurDto) {
        return this.producteurService.getOne(producteurId);
    }
    create(createProducteurDto) {
        return this.producteurService.create(createProducteurDto);
    }
    delete(producteurId, createProducteurDto, request) {
        return this.producteurService.delete(producteurId);
    }
    update(producteurId, updateProducteurDto) {
        return this.producteurService.update(producteurId, updateProducteurDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProducteurController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createProducteur_dto_1.CreateProducteurDto]),
    __metadata("design:returntype", void 0)
], ProducteurController.prototype, "get", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)("create"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProducteur_dto_1.CreateProducteurDto]),
    __metadata("design:returntype", void 0)
], ProducteurController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)("delete/:id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createProducteur_dto_1.CreateProducteurDto, Object]),
    __metadata("design:returntype", void 0)
], ProducteurController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)("update/:id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateProducteur_dto_1.UpdateProducteurDto]),
    __metadata("design:returntype", void 0)
], ProducteurController.prototype, "update", null);
ProducteurController = __decorate([
    (0, swagger_1.ApiTags)('Producteur'),
    (0, common_1.Controller)('producteurs'),
    __metadata("design:paramtypes", [producteur_service_1.ProducteurService])
], ProducteurController);
exports.ProducteurController = ProducteurController;
//# sourceMappingURL=producteur.controller.js.map