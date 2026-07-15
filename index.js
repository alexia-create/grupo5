// Conversor de Unidades de Massa

const conversao_em_grama = {
    g: 1,           // Grama
    kg: 1000,       // Quilograma
    lb: 453.592,    // Libra
    oz: 28.3495,    // Onça
    mg: 0.001       // Miligrama
};

function converterMassa(valor, deUnidade, paraUnidade) {

    const valorEmGramas = valor * conversao_em_grama[deUnidade];

    const valorConvertido = valorEmGramas / conversao_em_grama[paraUnidade];

    return valorConvertido;
}