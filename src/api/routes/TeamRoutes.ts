// src/api/routes/teamRoutes.ts
import { Router } from 'express';
import { TeamController } from '../controllers/TeamController.js';

const router = Router();
const teamController = new TeamController();

// Define o endpoint: POST para /api/teams
router.post('/teams', teamController.create);

// Outros endpoints (GET, PUT, DELETE) virão aqui
// router.get('/teams', teamController.getAll);

export { router as teamRoutes }; // Exporta o router configurado