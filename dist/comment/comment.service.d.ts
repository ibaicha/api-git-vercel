import { CreateCommentDto } from './dto/createComment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateCommentDto } from './dto/updateComment.dto';
export declare class CommentService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(userId: number, createCommentDto: CreateCommentDto): Promise<{
        data: string;
    }>;
    delete(commentId: number, userId: number, postId: number): Promise<{
        data: string;
    }>;
    update(commentId: number, userId: number, updateCommentDto: UpdateCommentDto): Promise<{
        data: string;
    }>;
}
