$(document).ready(function(){
    pokemonGuess();
});

function pokemonGuess(){
    var pokemonArray = ["Pikachu", "Charizard", "Mew", "Cubone", "Koffing", "Arbok", "Vileplume", "Moltres", "Articuno", "Zapdos", "Dragonite", "Vulpix", "Squirtle", "Lickitung", "Magnemite", "Eevee", "Kadabra", "Seel", "Cloyster", "Jigglypuff"];
    var imageArray = ["img/pikachu.png", "img/charizard.png", "img/mew.png", "img/cubone.png", "img/koffing.png", "img/arbok.png", "img/vileplume.png", "img/moltres.png", "img/articuno.png", "img/zapdos.png", "img/dragonite.png", "img/vulpix.png", "img/squirtle.png", "img/lickitung.png", "img/magnemite.png", "img/eevee.png", "img/kadabra.png", "img/seel.png", "img/cloyster.png", "img/jigglypuff.png"];
    var imageArray2 = ["pikachu.png", "charizard.png", "mew.png", "cubone.png", "koffing.png", "arbok.png", "vileplume.jpg", "moltres.png", "articuno.png", "zapdos.png", "dragonite.png", "vulpix.png", "squirtle.png", "lickitung.png", "magnemite.png", "eevee.png", "kadabra.png", "seel.png", "cloyster.png", "jigglypuff.png"];
    var index = Math.floor(Math.random() * pokemonArray.length);
    var answer = pokemonArray[index];
    var answerLower = pokemonArray[index].toLowerCase();
    var answerUpper = pokemonArray[index].toUpperCase();
    console.log(answer);
    console.log(answerLower);
    console.log(answerUpper);
    $('img').attr('src', imageArray[index]);
    $('#submit').click(function() {
        var guess = $('input').val();
        console.log(guess);
        if(guess == answer || guess == answerLower || guess == answerUpper){
            $('h1').text(guess + ' is right!');
            $('h2').text('');
            $('img').attr('src', imageArray2[index]);
            $('input').attr('type', "hidden");
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
        else{
            $('h1').text(guess + ' is wrong. Try Again.');
            $('input').val('');
        
        }
    });
}