import { ConfigService } from "@nestjs/config";
import { Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";
type payload = {
    sub: number;
    email: string;
};
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly prismaService;
    constructor(configservice: ConfigService, prismaService: PrismaService);
    validate(payload: payload): Promise<import(".prisma/client").User>;
}
export {};
