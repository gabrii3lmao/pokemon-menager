import { error } from "console";
import { TeamRepository } from "../../core/repositories/teamRepository.js";

export class TeamService {
    private teamRepository: TeamRepository;

    constructor(){
        this.teamRepository = new TeamRepository();
    }

    async createTeam(name: string){
        if(!name){
            throw new Error("O nome do time é obrigatório");
        }
        
        return this.teamRepository.create(name);

    }

}