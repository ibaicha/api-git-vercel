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
exports.LocaliteController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const use_guards_decorator_1 = require("@nestjs/common/decorators/core/use-guards.decorator");
const localite_service_1 = require("./localite.service");
const passport_1 = require("@nestjs/passport");
const createLocalite_dto_1 = require("./dto/createLocalite.dto");
const updateLocalite_dto_1 = require("./dto/updateLocalite.dto");
const swagger_1 = require("@nestjs/swagger");
let LocaliteController = class LocaliteController {
    constructor(localiteService) {
        this.localiteService = localiteService;
    }
    getAll() {
        return this.localiteService.getAll();
    }
    get(localiteId, createLocaliteDto) {
        return this.localiteService.getOne(localiteId);
    }
    create(createLocaliteDto) {
        return this.localiteService.create(createLocaliteDto);
    }
    delete(localiteId, createLocaliteDto, request) {
        return this.localiteService.delete(localiteId);
    }
    update(localiteId, updateLocaliteDto) {
        return this.localiteService.update(localiteId, updateLocaliteDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocaliteController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createLocalite_dto_1.CreateLocaliteDto]),
    __metadata("design:returntype", void 0)
], LocaliteController.prototype, "get", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)("create"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createLocalite_dto_1.CreateLocaliteDto]),
    __metadata("design:returntype", void 0)
], LocaliteController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)("delete/:id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createLocalite_dto_1.CreateLocaliteDto, Object]),
    __metadata("design:returntype", void 0)
], LocaliteController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)("update/:id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateLocalite_dto_1.UpdateLocaliteDto]),
    __metadata("design:returntype", void 0)
], LocaliteController.prototype, "update", null);
LocaliteController = __decorate([
    (0, swagger_1.ApiTags)('Localite'),
    (0, common_1.Controller)('localites'),
    __metadata("design:paramtypes", [localite_service_1.LocaliteService])
], LocaliteController);
exports.LocaliteController = LocaliteController;
//# sourceMappingURL=localite.controller.js.map