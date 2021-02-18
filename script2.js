const camelCaseTextEx2 = "holaMeLlamoMiquel";

const snakeCaseTextEx2 = camelCaseText.split(/(?=[A-Z])/).map((ele, i) => {
    return ele[0].toLowerCase() + ele.slice(1)
}).join("_");

console.log(snakeCaseTextEx2)
