const camelCaseTextEx2 = "holaMeLlamoMiquel";

const snakeCaseTextEx2 = camelCaseText.split(/(?=[A-Z])/).map((ele, i) => {
    let palabra;
    i !== 0 ? palabra = ele[0].toLowerCase() + ele.slice(1) : palabra = ele;
    return palabra
}).join("_");

console.log(snakeCaseTextEx2)