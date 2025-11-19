import { Request, Response } from 'express';
import { TeamService } from '../services/TeamService.js';

export class TeamController {
    private teamService: TeamService;

    constructor(){
        this.teamService = new TeamService();
    }

    create = async (req: Request, res: Response) => {
    try {
      const { name } = req.body; // Pega o 'name' do JSON enviado
      const newTeam = await this.teamService.createTeam(name);
      return res.status(201).json(newTeam);
    } catch (error) {
      return res.status(400).json({ message: (error as Error).message });
    }
  }

}