import express from 'express';
// importar as rotas aqui, quando tiver
// import { teamRoutes } from '../api/routes/teamRoutes'
const app = express();
const port = process.env.PORT || 3000;
// Middleware pro express entender JSON
app.use(express.json());
// Middleware pro express entender formularios (vai que né)
app.use(express.urlencoded({ extended: true }));
// LIGAR AS ROTAS AQUI
// app.use('/api', teamRoutes);
export const startServer = () => {
    app.listen(port, () => {
        console.log(`Tá rodando essa bagaça em http://localhost:${port}`);
    });
};
//# sourceMappingURL=server.js.map