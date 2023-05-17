"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const prisma_module_1 = require("./prisma/prisma.module");
const mailer_module_1 = require("./mailer/mailer.module");
const post_module_1 = require("./post/post.module");
const comment_module_1 = require("./comment/comment.module");
const pays_module_1 = require("./localites/pays/pays.module");
const zone_module_1 = require("./localites/zone/zone.module");
const sous_zone_module_1 = require("./localites/sous_zone/sous_zone.module");
const localite_module_1 = require("./localites/localite/localite.module");
const role_module_1 = require("./auth/role/role.module");
const profile_module_1 = require("./auth/profile/profile.module");
const type_op_module_1 = require("./ops/type_op/type_op.module");
const op_module_1 = require("./ops/op/op.module");
const producteur_module_1 = require("./ops/producteur/producteur.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({ isGlobal: true }),
            auth_module_1.AuthModule,
            role_module_1.RoleModule,
            profile_module_1.ProfileModule,
            prisma_module_1.PrismaModule,
            mailer_module_1.MailerModule,
            post_module_1.PostModule,
            comment_module_1.CommentModule,
            pays_module_1.PaysModule,
            zone_module_1.ZoneModule,
            sous_zone_module_1.SousZoneModule,
            localite_module_1.LocaliteModule,
            type_op_module_1.TypeOpModule,
            op_module_1.OpModule,
            producteur_module_1.ProducteurModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map