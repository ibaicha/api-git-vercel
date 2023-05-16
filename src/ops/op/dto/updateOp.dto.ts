import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateOpDto {
    readonly name: string;
    @IsNotEmpty()
    readonly typeOpd: number;
}