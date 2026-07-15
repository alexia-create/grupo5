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

//testes
try {
    console.log("TESTES DE CONVERSÃO DE MASSA");

    // Teste 1: Converter 1kg para Gramas (Deve dar 1000g)
    console.log(`1 kg equivale a: ${converterMassa(1, 'kg', 'g')} g`);

    // Teste 2: Converter 500g para Libras (lb)
    console.log(`500 g equivale a: ${converterMassa(500, 'g', 'lb').toFixed(4)} lb`);

    // Teste 3: Converter 10 Onças (oz) para Quilogramas (kg)
    console.log(`10 oz equivale a: ${converterMassa(10, 'oz', 'kg').toFixed(4)} kg`);

} catch (error) {
    console.error("Erro na conversão:", error.message);
}