setTimeout(() => {
    $('h1').addClass('bg-blue') // add uma classe para uma tag
}, 1000); 


setTimeout(() => {
    $('h1').removeClass('bg-blue') //remove uma classe de uma tag
}, 2000);

setTimeout(()=>{
    $('h1').toggleClass('bg-blue') //se houver a classe ele remove e se nao houver ele adiciona
},1000)


setTimeout(()=>{
    $('h1').toggleClass('bg-blue') //se houver a classe ele remove e se nao houver ele adiciona
},3000)


$('h1').addClass('bg-blue')
console.log($('h1').css('background-color')) //O metodo css, se estiver só com 1 parametro, ele mostra os detalhes do parametro passado
$('h1').css('font-size','50px') //com 2 métodos ele altera o primeiro método conforme o segundo método
$('h1').css('background-color','rgb(200,0,200)')//com 2 métodos ele altera o primeiro método conforme o segundo método
$('h1').css('background-color','pink')//com 2 métodos ele altera o primeiro método conforme o segundo método

$('h1').css('background-color','red').css('font-size', '50px').css('color', 'white') //encadeamento do método CSS

$('h1').css({'background-color':'yellow', 'font-size': '40px', 'color':'orange'})// outra maneira de encadeamento do método CSS