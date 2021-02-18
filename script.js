const snakeCaseText = "hola_me_llamo_miquel"

const camelCaseText = snakeCaseText.split("_").map((ele, i) => {
    let palabra;
    i !== 0 ? palabra = ele[0].toUpperCase() + ele.slice(1) : palabra = ele;
    return palabra
}).join("")

console.log(camelCaseText)