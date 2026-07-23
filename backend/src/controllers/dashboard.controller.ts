import { Request, Response } from "express";

class DashboardController {
    /* 
     * Metodo GET para listar todos os registros
     */
    index(request: Request, response: Response) {
        const { indicador, regiao } = request.query;

        return response.status(200).json({ message: `Enviar gráfico do indicador "${indicador}" e da região "${regiao}"` })
    }
}

export { DashboardController }