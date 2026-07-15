function converter() {

    const valor = Number(document.getElementById("valor").value);

    const origem = document.getElementById("origem").value;

    const destino = document.getElementById("destino").value;

    try {

        const resultado = converterMassa(valor, origem, destino);

        document.getElementById("resultado").innerHTML =
            `${valor} ${origem} = ${resultado.toFixed(4)} ${destino}`;

    } catch (erro) {

        document.getElementById("resultado").innerHTML = erro.message;

    }

}