
console.log($('[key=2]').remove()) //  Selecionando a key por [] e depois removendo da lista


$('#lista1').children('[key = 2]').remove() 

$('#lista1').remove() // Remove a lista toda

$('#lista1').empty(); //A tag Ul ainda existe pois esta função só remove os filhos dela

$('li').remove('.item2, .item3') //Selecionando todos os LIs, a função remove pode receber parametros para apagar item especificos