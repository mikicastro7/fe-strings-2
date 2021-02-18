const snakeCaseText = "hola_me_llamo_miquel";

const camelCaseText = snakeCaseText.split("_").map((ele, i) => {
    return i !== 0 ? ele[0].toUpperCase() + ele.slice(1) : ele;
}).join("")

console.log(camelCaseText)

