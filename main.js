// Create in HTML una griglia di 36 quadratini (6x6).
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
// BONUS: generare la griglia in jQuery utilizzando handlebars

$(document).ready(function() {

    // generare la griglia in jQuery utilizzando handlebars
    var html_template = $('#entry-template').html();
    var template_function = Handlebars.compile(html_template);

    // creo un ciclo per generare la griglia composta da 36 quadrati
    for (var i = 0; i < 36; i++) {

        // griglia con handlebars
        var html_finale = template_function({});
        $('.griglia').append(html_finale);

        // griglia senza handlebars
        // $('.griglia').append('<div class="quadrato"></div>')
    }

    // apro la funzione con il click su quadrato
    $('.quadrato').click(function(){

        // salvo il riferimento al quadrato su cui ho cliccato
        var that = $(this);

        // faccio una chiamata ajax per generare un numero random tra 1 e 9
            $.ajax({
                'url': 'https://flynn.boolean.careers/exercises/api/random/int',
                'method': 'GET',
                'success': function(data) {

                    // recupero il numero restituito dall'api
                    var numero_generato = data.response;
                    console.log(numero_generato);
                    // console.log('Numero generato: ' + numero_pc);

                    // se il numero generato è <=5 , il quadrato si colorerà di giallo
                    if (numero_generato <= 5) {
                        $(that).addClass('giallo');
                    // se il numero generato è >5 , il quadrato si colorerà di verde
                    } else {
                        $(that).addClass('verde')
                    }
                    that.text(numero_generato);
                },
                'error': function() {
                    alert('si è verificato un errore');
                }
            });
    });
});
