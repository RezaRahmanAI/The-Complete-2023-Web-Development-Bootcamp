function fibonacciGenerator(n) {
    var list = []
    if(n>=1) {
        list.push(0)
    }
    if(n>=2)
    {
        list.push(1)
    }

    console.log(list)

    for(let i = 2; i<n; i++)
    {
        list.push(list[i-1] + list[i-2])
    }

    return list
}

var result = fibonacciGenerator(5)
console.log(result)