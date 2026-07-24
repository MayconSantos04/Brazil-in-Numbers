import { searchRegion } from "@/services/ibge";
import { Request, Response } from "express";

class RegionController {
    async getRegion(request: Request, response: Response) {
        try {
            const regions = await searchRegion();
            return response.status(200).json(regions);
        } catch (error) {
            return response.status(500).json({
                mensagem: 'Erro ao buscar estados',
                erro: error instanceof Error ? error.message : 'Erro desconhecido'
            });
        }
    }
}

export { RegionController }