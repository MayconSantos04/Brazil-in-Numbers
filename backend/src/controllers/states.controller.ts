import { Request, Response } from "express";

class StatesController {
    /* 
     * Metodo GET para listar todos os registros
     */
    index(request: Request, response: Response) {
        const { states } = request.query;

        return response.status(200).json({ message: `Enviar gráfico do estado ${states}` })
    }
}

export { StatesController }