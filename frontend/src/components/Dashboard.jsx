import Plot from 'react-plotly.js';

export default function Dashboard({ figura, kpis }) {
    if (!figura) return <p>Selecione um recorte…</p>;
    return (
        <>
            <Plot data={figura.data} layout={figura.layout}
                config={{ responsive: true }} style={{ width: '100%' }} />
            {/* TODO: mostrar os KPIs (maior, menor, média) em cards */}
        </>
    );
}