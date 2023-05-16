import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateProducteurDto {
    @IsNotEmpty()
    readonly prenom: string;
    @IsNotEmpty()
    readonly nom: string;
    @IsNotEmpty()
    readonly cni: string;
    @IsNotEmpty()
    readonly email: string;
    @IsNotEmpty()
    readonly telephone: string;
    @IsNotEmpty()
    readonly adresse: string;
    @IsNotEmpty()
    readonly isActive: boolean;
    @IsNotEmpty()
    readonly opId: number;
}