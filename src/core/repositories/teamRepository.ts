import { PrismaClient } from "@prisma/client/extension";
import { id } from "zod/locales";
import { PokemonInstance } from "../../generated/prisma/index.js";
const prisma = new PrismaClient(); // você instancia isso em um só lugar


export class TeamRepository {
    async create(teamName: string){
        //lógica do prisma
        return prisma.team.create({
            data: {
                name: teamName
            }
        });
    }
}