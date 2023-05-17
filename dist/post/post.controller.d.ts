import { PostService } from './post.service';
import { CreatePostDto } from 'src/post/dto/createPost.dto';
import { Request } from 'express';
import { UpdatePostDto } from './dto/updatePost.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getAll(): Promise<import(".prisma/client").Post[]>;
    get(postId: number, createPostDto: CreatePostDto): Promise<import(".prisma/client").Post>;
    create(createPostDto: CreatePostDto, request: Request): Promise<{
        data: string;
    }>;
    delete(postId: number, createPostDto: CreatePostDto, request: Request): Promise<{
        data: string;
    }>;
    update(postId: number, UpdatePostDto: UpdatePostDto, request: Request): Promise<{
        data: string;
    }>;
}
