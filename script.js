const coroinhas = [
'Alana',
'Alice',
'Aline',
'Ana Mirian',
'Artur',
'Carlos',
'Daniel',
'Eric',
'Giovanna',
'Isabela',
'Isadora',
'João',
'Kethelley',
'Laryssa',
'Marianna',
'Pablo',
'Rafael',
]

let CoroinhaNew = coroinhas
let lista = []

let limite = 14
for(i=0; i< limite; i++){
    const coroinhaSorteado = parseInt(Math.random() * CoroinhaNew.length)
    lista.push(CoroinhaNew[coroinhaSorteado])
    CoroinhaNew = CoroinhaNew.slice(0, coroinhaSorteado).concat(CoroinhaNew.slice(coroinhaSorteado + 1))
}
let modeloPadrao = `
xxxxxxxxxxxxxxxxxxxxxxxx

xx/xx - Sábado
18h
${lista[0]}
${lista[1]}
${lista[2]}

xx/xx - Domingo
7h30
${lista[3]}
${lista[4]}
${lista[5]}

09h30
${lista[6]}
${lista[7]}

11h20
${lista[8]}
${lista[9]}
${lista[10]}

18h
${lista[11]}
${lista[12]}
${lista[13]}
`
document.querySelector('body').innerHTML = `<pre>${modeloPadrao}</pre>`


console.log(modeloPadrao)