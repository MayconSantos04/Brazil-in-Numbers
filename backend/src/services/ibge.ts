import axios from 'axios';

const BASE = 'https://servicodados.ibge.gov.br/api/v1/localidades';

export async function searchRegion() {
  try {
    const { data } = await axios.get(`${BASE}/estados?orderBy=nome`);

    // TODO: mapear cada UF para { sigla, nome, regiao: regiao.sigla }
    const statesMap = data.map((state: any) => ({
      acronym: state.sigla,
      name: state.nome,
      region: state.regiao.sigla
    }));

    const stateGroup = statesMap.reduce((arrayState: any, state: any) => {
      const region = state.region;
      if (!arrayState[region]) {
        arrayState[region] = [];
      }
      arrayState[region].push({
        acronym: state.acronym,
        name: state.name
      });
      return arrayState;
    }, {});

    const regions = Object.keys(stateGroup);

    return regions;
  } catch (error) {
    console.error('Erro ao buscar estados:', error);
    throw new Error('Erro ao buscar lista de estados');
  }
}