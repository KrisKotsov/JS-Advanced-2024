function wordsUppercase(str) {

    return str.split(/[^a-zA-Z0-9]+/).join(" ").trim().split(" ").map(x => x.toUpperCase()).join(", ")
}

console.log(wordsUppercase('Hi, how are you?'))