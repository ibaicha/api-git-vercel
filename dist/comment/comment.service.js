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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CommentService = class CommentService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(userId, createCommentDto) {
        const { postId, content } = createCommentDto;
        const post = await this.prismaService.post.findUnique({
            where: { id: postId },
        });
        if (!post)
            throw new common_1.NotFoundException('Post not found');
        await this.prismaService.comment.create({
            data: {
                content,
                userId,
                postId,
            },
        });
        return {
            data: 'Comment created!',
        };
    }
    async delete(commentId, userId, postId) {
        const comments = await this.prismaService.comment.findMany();
        console.log('commentId: ' + commentId);
        const comment = await this.prismaService.comment.findFirst({
            where: { id: commentId },
        });
        console.log(comment);
        if (!comment) {
            throw new common_1.NotFoundException('Comment not found');
        }
        if (comment.postId !== postId) {
            console.log('comment.postId: ' + comment.postId);
            console.log('postId: ' + postId);
            throw new common_1.UnauthorizedException('Post id does not match');
        }
        if (comment.userId !== userId) {
            console.log('comment.userId: ' + comment.userId);
            console.log('userId: ' + userId);
            throw new common_1.ForbiddenException('Forbidden action');
        }
        await this.prismaService.comment.delete({
            where: { id: commentId },
        });
        return {
            data: 'Comment deleted!',
        };
    }
    async update(commentId, userId, updateCommentDto) {
        const { content, postId } = updateCommentDto;
        const comment = await this.prismaService.comment.findFirst({
            where: { id: commentId },
        });
        if (!comment)
            throw new common_1.NotFoundException('Comment not found');
        if (comment.postId !== postId)
            throw new common_1.UnauthorizedException('Post id does not match');
        if (comment.userId !== userId)
            throw new common_1.ForbiddenException('Forbidden action');
        await this.prismaService.comment.update({ where: { id: commentId }, data: { content } });
        return {
            data: 'Comment updated',
        };
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map