/*


//1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
n1 = Number(prompt("Digite o primeiro número"))
n2 = Number(prompt("Digite o segundo número"))
n3 = Number(prompt("Digite o terceiro número"))


document.write("1. Crie um script JS que peça 2 números inteiros e um número real. Calcule e mostre:<br>")

document.write(`<br>a) O produto do dobro do primeiro com metade do segundo: ${(n1*2)*(n2/2)}`)
document.write(`<br>a) O produto do dobro do primeiro com metade do segundo: ${(n1*2)*(n2/2)}<br>`)

document.write("<br>b) A soma do triplo do primeiro com o terceiro: ",n1*3+n3)
document.write(`<br>b) A soma do triplo do primeiro com o terceiro: ${n1*3+n3}<br>`)

document.write("<br>c) O terceiro elevado ao cubo: ",n3*n3*n3)
document.write(`<br>c) O terceiro elevado ao cubo: ${n3**3}<hr>`)

//2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.write('2. Crie um script JS que peça um número e então mostre a mensagem "O número digitado foi (número)", usando o template de string.<br>')
a = Number(prompt("Digite o valor de a:"))

document.write(`<br>O número digitado foi: ${a}<hr>`)

//3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.write('<p>3. Crie um script JS que leia um valor em metros e a exiba convertido em centímetros e milímetros.</p>')

m = +(prompt('Digite quantos metros deseja converter:'))
document.write(m, ' metros equivale a ', m*100, ' centimetros e consequentemente ', m*1000, ' milimetros.')
document.write(`<br>${m} metros equivale a ${m*100} centimetros e consequentemente ${m*1000} milimetros.<hr>`)


//4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.write('<p>4. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.</p>')

f = +(prompt("Digite a temperatura em Fahrenheit: "))
c = 5 * ((f-32) / 9)
document.write("A conversão de ",f ,"F é: ", c.toFixed(2),"C<hr>")

//5~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.write('<p>5. Crie um script JS que leia um número inteiro qualquer e mostre na tela a sua tabuada</p>')
t = parseInt(prompt("Digite o numero que deseja saber a tabuada: "))
for(i = 0; i<11; i++){
  document.write(t,"x",i,"=",t*i)
  document.write("<br>")
}
document.write("<hr>")
//6~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.write('<p>6. Crie um script JS que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos dólares ela pode comprar. Considere a US$1,00 = R$5.40</p>')

d = parseFloat(prompt("Quantos R$ você possui?"))
quant = d/5.4
document.write("Você pode comprar ", quant.toFixed(2), " US$.<br>")
document.write(`Você pode comprar ${quant.toFixed(2)} US$.<hr>`)


//7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.write('<p>7. Crie um script JS que leia a largura e a altura de uma parede em metros, calcule a sua área e a quantidade de tinta necessária para pintá-la. Sabendo que cada litro de tinta pinta uma área de 2 metros quadrados.</p>')

larg = +(prompt("Qual a largura da parede?"))
alt = +(prompt("Qual a altura da parede?"))
area = larg*alt
tinta = area/2

document.write("Quantidade de tinta utilizada será: ",tinta," litros para ", area, " metros².<br>")

document.write(`Quantidade de tinta utilizada será: ${tinta} litros para ${area} metros².`)


*/

