let num = [5, 6]
num[2] = 2
num.push(3)

num.sort()

console.log(`nosso vetoo é (${num.length}) ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)

console.log(`O valor 5 está na posição ${pos}`)