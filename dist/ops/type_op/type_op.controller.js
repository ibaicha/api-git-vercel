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
exports.TypeOpController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const use_guards_decorator_1 = require("@nestjs/common/decorators/core/use-guards.decorator");
const type_op_service_1 = require("./type_op.service");
const passport_1 = require("@nestjs/passport");
const createTypeOp_dto_1 = require("./dto/createTypeOp.dto");
const updateTypeOp_dto_1 = require("./dto/updateTypeOp.dto");
const swagger_1 = require("@nestjs/swagger");
let TypeOpController = class TypeOpController {
    constructor(typeOpService) {
        this.typeOpService = typeOpService;
    }
    getAll() {
        return this.typeOpService.getAll();
    }
    get(typeOpId, createTypeOpDto) {
        return this.typeOpService.getOne(typeOpId);
    }
    create(createTypeOpDto) {
        return this.typeOpService.create(createTypeOpDto);
    }
    delete(typeOpId, createTypeOpDto, request) {
        return this.typeOpService.delete(typeOpId);
    }
    update(typeOpId, updateTypeOpDto) {
        return this.typeOpService.update(typeOpId, updateTypeOpDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TypeOpController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createTypeOp_dto_1.CreateTypeOpDto]),
    __metadata("design:returntype", void 0)
], TypeOpController.prototype, "get", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)("create"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTypeOp_dto_1.CreateTypeOpDto]),
    __metadata("design:returntype", void 0)
], TypeOpController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)("delete/:id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createTypeOp_dto_1.CreateTypeOpDto, Object]),
    __metadata("design:returntype", void 0)
], TypeOpController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)("update/:id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateTypeOp_dto_1.UpdateTypeOpDto]),
    __metadata("design:returntype", void 0)
], TypeOpController.prototype, "update", null);
TypeOpController = __decorate([
    (0, swagger_1.ApiTags)('TypeOp'),
    (0, common_1.Controller)('type-ops'),
    __metadata("design:paramtypes", [type_op_service_1.TypeOpService])
], TypeOpController);
exports.TypeOpController = TypeOpController;
//# sourceMappingURL=type_op.controller.js.map