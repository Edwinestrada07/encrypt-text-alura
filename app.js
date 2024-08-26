// Seleccionamos los elementos del DOM
const textoIngresado = document.getElementById("textoIngresado");
const resultado = document.getElementById("resultado");
const encriptarBtn = document.getElementById("encriptarBtn");
const desencriptarBtn = document.getElementById("desencriptarBtn");
const copiarBtn = document.getElementById("copiarBtn");
const limpiarBtn = document.getElementById("limpiarBtn");

// Función para encriptar texto
function encriptar(texto) { //Pasamos como parámetro texto
    let textoEncriptado = texto
        //Cada vez que encuentre dentro del texto las letras e,i,a,o,u las reemplazará
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado; //retornará un resultado, y se guarda dentro de la variable textoEncriptado
}

// Función para desencriptar texto
function desencriptar(textoEncriptado) { //Pasamos como parámetro el return anterior
    let texto = textoEncriptado
        //Utilizamos la misma lógica que cada que dentro del texto encriptado encuentre 
        //las palabras enter, imes, ai, ober, ufat las debe reemplazar
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return texto; //retornará un resultado, y se guarda dentro de la variable texto
}

// Evento para encriptar el texto al presionar el botón "Encriptar"
encriptarBtn.addEventListener("click", () => {
    let texto = textoIngresado.value;
    let textoEncriptado = encriptar(texto);
    resultado.value = textoEncriptado;
});

// Evento para desencriptar el texto al presionar el botón "Desencriptar"
desencriptarBtn.addEventListener("click", () => {
    let textoEncriptado = textoIngresado.value;
    let texto = desencriptar(textoEncriptado);
    resultado.value = texto;
});

// Evento para copiar el texto al portapapeles
copiarBtn.addEventListener("click", () => {
    resultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
    reset();
});

//Evento para limpiar los campos de textea
limpiarBtn.addEventListener("click", () => {
    textoIngresado.value = "";
    resultado.value = "";
});



