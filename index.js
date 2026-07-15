// Conversor de Unidades de Massa

const conversao_em_grama = {
    g: 1,           // Grama
    kg: 1000,       // Quilograma
    lb: 453.592,    // Libra
    oz: 28.3495,    // Onça
    mg: 0.001       // Miligrama
};

function converterMassa(valor, deUnidade, paraUnidade) {

    if (valor < 0) {
        throw new Error("A massa não pode ser um valor negativo.");
    }

    if (!conversao_em_grama[deUnidade] || !conversao_em_grama[paraUnidade]) {
        throw new Error("Unidade de medida não suportada.");
    }

    const valorEmGramas = valor * conversao_em_grama[deUnidade];
    return valorEmGramas / conversao_em_grama[paraUnidade];
}