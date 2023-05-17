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
exports.ZoneController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const use_guards_decorator_1 = require("@nestjs/common/decorators/core/use-guards.decorator");
const zone_service_1 = require("./zone.service");
const passport_1 = require("@nestjs/passport");
const createZone_dto_1 = require("./dto/createZone.dto");
const updateZone_dto_1 = require("./dto/updateZone.dto");
const swagger_1 = require("@nestjs/swagger");
let ZoneController = class ZoneController {
    constructor(zoneService) {
        this.zoneService = zoneService;
    }
    getAll() {
        return this.zoneService.getAll();
    }
    get(zoneId, createZoneDto) {
        return this.zoneService.getOne(zoneId);
    }
    create(createZoneDto) {
        return this.zoneService.create(createZoneDto);
    }
    delete(zoneId, createZoneDto, request) {
        return this.zoneService.delete(zoneId);
    }
    update(zoneId, updateZoneDto) {
        return this.zoneService.update(zoneId, updateZoneDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ZoneController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/:id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createZone_dto_1.CreateZoneDto]),
    __metadata("design:returntype", void 0)
], ZoneController.prototype, "get", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)("create"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createZone_dto_1.CreateZoneDto]),
    __metadata("design:returntype", void 0)
], ZoneController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)("delete/:id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createZone_dto_1.CreateZoneDto, Object]),
    __metadata("design:returntype", void 0)
], ZoneController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, use_guards_decorator_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)("update/:id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateZone_dto_1.UpdateZoneDto]),
    __metadata("design:returntype", void 0)
], ZoneController.prototype, "update", null);
ZoneController = __decorate([
    (0, swagger_1.ApiTags)('Zone'),
    (0, common_1.Controller)('zones'),
    __metadata("design:paramtypes", [zone_service_1.ZoneService])
], ZoneController);
exports.ZoneController = ZoneController;
//# sourceMappingURL=zone.controller.js.map