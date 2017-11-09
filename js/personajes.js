$(document).ready(function () {
    var person = ('https://swapi.co/api/people/');
    obtPerson(person);
    function obtEspecie(direcc) {
        var especie = ""
        $.ajax({
            url: direcc,
            method: 'GET',
            async: false,
            success: function (data) {
                especie = data.name
            },
            error: function (e) {
                console.log(e);
            }
        });
        return especie;
    }
    function obtLengua(direcc) {
        var lengua = ""
        $.ajax({
            url: direcc,
            method: 'GET',
            async: false,
            success: function (data) {
                lengua = data.language
            },
            error: function (e) {
                console.log(e);
            }
        });
        return lengua;
    }
    function obtCla(direcc) {
        var cla = ""
        $.ajax({
            url: direcc,
            method: 'GET',
            async: false,
            success: function (data) {
                cla = data.classification
            },
            error: function (e) {
                console.log(e);
            }
        });
        return cla;
    }
    function obtW(direcc) {
        var world = ""
        $.ajax({
            url: direcc,
            method: 'GET',
            async: false,
            success: function (data) {
                world = data.name;
            },
            error: function (e) {
                console.log(e);
            }
        });
        return world;
    }
    function obtFilm(direcc) {
        var film = ""
        $.ajax({
            url: direcc,
            method: 'GET',
            async: false,
            success: function (data) {
                film = data.episode_id;
            },
            error: function (e) {
                console.log(e);
            }
        });
        return film;
    }
    function obtFilmT(direcc) {
        var filmT = ""
        $.ajax({
            url: direcc,
            method: 'GET',
            async: false,
            success: function (data) {
                filmT = data.title;
            },
            error: function (e) {
                console.log(e);
            }
        });
        return filmT;
    }
    function obtPerson(url) {
        $.ajax({
            url: url,
            method: 'GET',
            success: function (data) {
                var primero = document.getElementById('tabla');
                $('#tabla').empty();
                var final = "";
                for (i = 0; i < data.results.length; i++) {
                    final += '<tr>';
                    final += '<td>' + data.results[i].name + '</td>';

                for (j=0 ; j<data.results[i].species.length; j++){
                    especie = obtEspecie(data.results[i].species[j]);
                    final += '<td>' + especie + '</td>';
                }
                   final += '<td>' + obtCla(data.results[i].species) + '</td>';
                   final += '<td>' + obtW(data.results[i].homeworld) + '</td>';
                    final += '<td>' +obtLengua( data.results[i].species )+ '</td>';
                    final += '<td>';
                for(j=0 ; j<data.results[i].films.length;j++){
                    film = obtFilm( data.results[i].films[j]);
                    filmT = obtFilmT(data.results[i].films[j]);
                    final +=  filmT+ '('+ film + ')<br>' ;
                }
                final += '</td>';
                    final += '</tr>';
                }
                $('#tabla').html(final);
                $('#next').on('click', function (e) {
                    e.preventDefault();
                    if (data.next != null)
                        obtPerson(data.next);
                });
                $('#prev').on('click', function (e) {
                    e.preventDefault();
                    if (data.previous != null)
                        obtPerson(data.previous);
                });
            },
            error: function (e) {
                console.log(e);
            }

        });

    }







});

