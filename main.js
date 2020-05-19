// Create in HTML una griglia di 36 quadratini (6x6).
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
// BONUS: generare la griglia in jQuery utilizzando handlebars

$(document).ready(function() {
    for (var i = 0; i < 36; i++) {
        $('.griglia').append('<div class="quadrato"></div>')
    }

    $('.quadrato').each(function(){
        // faccio una chiamata ajax per generare un numero casuale => giocata pc
            $.ajax({
                'url': 'https://flynn.boolean.careers/exercises/api/random/int',
                'method': 'GET',
                'success': function(data) {
                    // recupero il numero restituito dall'api
                    var numero_pc = data.response;
                    console.log('Numero pc: ' + numero_pc);

                    $(numero_pc).show();
                },
                'error': function() {
                    alert('si è verificato un errore');
                }
            });

            if (numero_pc <= 5) {
                $(numero_pc).addClass('giallo');
            } else {
                $(numero_pc).addClass('verde')
            }
    });



});

// $(document).ready(function() {
//
//     // quando si carica la pagina chiedo un numero all'utente => giocata utente
//     var numero_utente = parseInt(prompt('Inserisci un numero tra 1 e 9'));
//     console.log('Numero utente: ' + numero_utente);
//
//     // faccio una chiamata ajax per generare un numero casuale => giocata pc
//     $.ajax({
//         'url': 'https://flynn.boolean.careers/exercises/api/random/int',
//         'method': 'GET',
//         'success': function(data) {
//             // recupero il numero restituito dall'api
//             var numero_pc = data.response;
//             console.log('Numero pc: ' + numero_pc);
//             // invoco la funzione per stabilire il vincitore, passando i due numeri
//             decreta_vincitore(numero_utente, numero_pc);
//         },
//         'error': function() {
//             alert('si è verificato un errore');
//         }
//     });
//
// });

// funzione che riceve come parametri due numeri
// che rappresentano la giocata dell'utente e la giocata del pc
// e ne stabilisce il vincitore
// function decreta_vincitore(user_number, pc_number) {
//     if(user_number > pc_number) {
//         console.log('Hai vinto!!');
//     } else {
//         console.log('Hai perso!!');
//     }
// }
