import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PostService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<import(".prisma/client").Post[]>;
    getOne(postId: number): Promise<import(".prisma/client").Post>;
    create(createPostDto: CreatePostDto, userId: any): Promise<{
        data: string;
    }>;
    delete(postId: number, userId: number): Promise<{
        data: string;
    }>;
    update(postId: number, userId: any, updatePostDto: UpdatePostDto): Promise<{
        data: string;
    }>;
}
