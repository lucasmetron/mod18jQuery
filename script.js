
console.log($('h1').text("Lista de compras")) //Altera o conteudo dentro do H1

console.log($('#lista1').find('.item2').text('Novo Item')) // alterou o conteudo de texto dentro da tag li

console.log($('#lista1').html('<li>Novo Item 1 </li> <li>Novo Item 2 </li>')) //Alterou todo o html da #lista1

console.log($('#lista1').text('<li>Novo Item 1 </li> <li>Novo Item 2 </li>')) //Mostra a difereça entre html e text, pois neste caso irá mostra na tela um texto e nao o corpo html

console.log($('#novo').val("batata")) //Altera o valor dentro do input

console.log($('#novo').attr('name', 'item de compra')) //Funciona como o setAttribute se houver um atributo com o mesmo nome ele vai alterar o valor do atributo

console.log($('#novo').attr('novoAtt', 'colorir')) // Funciona como o setAttribute se não houver um atributo com o mesmo nome ele vai criar um novo atributo com o valor passado

console.log($('li').attr('name', 'item')) //Coloca em todas Li um novo att com o valor item

console.log($('li').attr('name', (i)=>{//a função attr tambem pode receber outra função com até 2 parametros e neste caso estou passando somente 1 que é o i. i é a posição no vetor
    return 'item'+ (1+i)})) //resutlado: item1, item2 item3  

console.log($('li').attr('class', (i,originalValue)=>{ //Neste exemplo passei os 2 parametros que função atttr espera, que são: i=posição no vetor e OriginalValue que o que tinha ja dentro da tag, então ele concatena os dois
    return originalValue + (1+i); // resultado: item11, item22, item33...
}))

$('input').attr('maxlength', 5).attr('type', 'password') //adiciona 2 atributos a tag





