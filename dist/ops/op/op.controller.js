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
exports.OpController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const use_guards_decorator_1 = require("@nestjs/common/decorators/core/use-guards.decorator");
const op_service_1 = require("./op.service");
const passport_1 = require("@nestjs/passport");
const createOp_dto_1 = require("./dto/createOp.dto");
const updateOp_dto_1 = require("./dto/updateOp.dto");
const swagger_1 = require("@nestjs/swagger");
let OpController = class OpController {
    constructor(opService) {
        this.opService = opService;
    }
    getAll() {
        return this.opService.getAll();
    }
    get(opId, createOpDto) {
        return this.opService.getOne(opId);
    }
    create(createOpDto) {
        return this.opService.create(createOpDto);
    }
    delete(opId, createOpDto, request) {
        return this.opService.delete(opId);
    }
    update(opId, updateOpDto) {
        return this.opService.update(opId, updateOpDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createOp_dto_1.CreateOpDto]),
    __metadata("design:returntype", void 0)
], OpController.prototype, "get", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)("create"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createOp_dto_1.CreateOpDto]),
    __metadata("design:returntype", void 0)
], OpController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)("delete/:id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createOp_dto_1.CreateOpDto, Object]),
    __metadata("design:returntype", void 0)
], OpController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)("update/:id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateOp_dto_1.UpdateOpDto]),
    __metadata("design:returntype", void 0)
], OpController.prototype, "update", null);
OpController = __decorate([
    (0, swagger_1.ApiTags)('Op'),
    (0, common_1.Controller)('ops'),
    __metadata("design:paramtypes", [op_service_1.OpService])
], OpController);
exports.OpController = OpController;
//# sourceMappingURL=op.controller.js.map