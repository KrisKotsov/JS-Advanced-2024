function sum(n, m) {

    n = Number(n)
    m = Number(m)
    let total = 0

    for (let i = n; i <= m; i++) {
        total += i
    }
    return total
}

sum(-8, 20)