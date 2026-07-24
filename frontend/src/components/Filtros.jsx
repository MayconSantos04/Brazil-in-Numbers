export default function Filtros({ indicador, regiao, onChange }) {
    return (
        <div>
            <select value={indicador} onChange={e => onChange('indicador', e.target.value)}>
                <option value="populacao">População</option>
                <option value="densidade">Densidade demográfica</option>
            </select>

            {/* TODO (nível 3): dropdown de Região.
          Opções: Brasil, N, NE, SE, S, CO */}
        </div>
    );
}