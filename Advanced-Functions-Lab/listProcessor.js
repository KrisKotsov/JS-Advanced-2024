function listProcessor(input) {
    let result = []

    for (let el of input) {
        let tokens = el.split(" ")
        let [command, str] = tokens

        if (command == "print") {
            break
        }

        if (command == "add") {
            result.push(str)
        } else if (command == "remove") {
            result = result.filter(item => item !== str);
        }
    }

    console.log(result.join(","));
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])