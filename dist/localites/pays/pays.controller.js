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
exports.PaysController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const use_guards_decorator_1 = require("@nestjs/common/decorators/core/use-guards.decorator");
const pays_service_1 = require("./pays.service");
const passport_1 = require("@nestjs/passport");
const createPays_dto_1 = require("./dto/createPays.dto");
const updatePays_dto_1 = require("./dto/updatePays.dto");
const swagger_1 = require("@nestjs/swagger");
let PaysController = class PaysController {
    constructor(paysService) {
        this.paysService = paysService;
    }
    getAll() {
        return this.paysService.getAll();
    }
    get(paysId, createPaysDto) {
        return this.paysService.getOne(paysId);
    }
    create(createPaysDto) {
        return this.paysService.create(createPaysDto);
    }
    delete(paysId, createPaysDto, request) {
        return this.paysService.delete(paysId);
    }
    update(paysId, updatePaysDto) {
        return this.paysService.update(paysId, updatePaysDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaysController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createPays_dto_1.CreatePaysDto]),
    __metadata("design:returntype", void 0)
], PaysController.prototype, "get", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)("create"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPays_dto_1.CreatePaysDto]),
    __metadata("design:returntype", void 0)
], PaysController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)("delete/:id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createPays_dto_1.CreatePaysDto, Object]),
    __metadata("design:returntype", void 0)
], PaysController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)("update/:id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updatePays_dto_1.UpdatePaysDto]),
    __metadata("design:returntype", void 0)
], PaysController.prototype, "update", null);
PaysController = __decorate([
    (0, swagger_1.ApiTags)('Pays'),
    (0, common_1.Controller)('pays'),
    __metadata("design:paramtypes", [pays_service_1.PaysService])
], PaysController);
exports.PaysController = PaysController;
//# sourceMappingURL=pays.controller.js.map