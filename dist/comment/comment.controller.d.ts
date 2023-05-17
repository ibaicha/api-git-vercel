import { Request } from 'express';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/createComment.dto';
import { UpdateCommentDto } from './dto/updateComment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(request: Request, createCommentDto: CreateCommentDto): Promise<{
        data: string;
    }>;
    delete(request: Request, commentId: number, postId: number): Promise<{
        data: string;
    }>;
    update(commentId: number, request: Request, updateCommentDto: UpdateCommentDto): Promise<{
        data: string;
    }>;
}
