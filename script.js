let jq = $('#lista1');

console.log(jq.slideUp(2000).slideDown(1000).fadeOut().fadeIn())

let objeto = {
    print10: function (){
        console.log(10)
        return this;
    },

    print20: function (){
        console.log(20)
        return this;
    }
}

objeto.print10().print10().print20().print10()