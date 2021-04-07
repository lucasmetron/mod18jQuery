
// $('#lista1').append('<li class=item>Item 6</li>') //add item no final da lista
// $('#lista1').prepend('<li class=item >Item 0</li>') //add item no inicio da lista
// $('#lista1').before('<li class=item >Item 0</li>') // add item antes da UL lista1, ou seja fora da ul
// $('#lista1').after('<li class=item >Item 0</li>')// add item depois da UL lista1, ou seja fora da ul

$('#lista1').append('<li> item 6</li>')

let lis = document.getElementsByTagName('li')

console.log(lis[5].className ='item item6')