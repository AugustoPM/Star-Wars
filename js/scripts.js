$(document).ready(function(){
   var peli = ('https://swapi.co/api/films/');
   var carga ='';
   obtPeli(peli);
   function obtPeli(url){
       $.ajax ({
url : url,
method : 'GET',
success : function(data){
    var primero = document.getElementById('primero');
    $('#primero').empty();
var final ="";
for (i=0 ; i < data.results.length ; i++){
final +='<div class="col-lg-4 col-12 " >';
final +='<h2>' + data.results[i].title +'</h2> </br>';
final +='<p>' + data.results[i].opening_crawl + '</p>';

final +='<button type="button" class="btn btn-primary" data-title="Episodio :  '+data.results[i].episode_id+'"  data-contenido= "<b><i>Estreno</i></b> : '+data.results[i].release_date+' <br><br> <b><i>Director</i></b> :  '+data.results[i].director+' <br><br> <b><i>Productor</i></b> :  '+data.results[i].producer+'<br><br> <b><i>Personajes</i></b> :  ';
for (var j=0; j<data.results[i].characters.length ; j++){
    carga= cargarPersonajes(data.results[i].characters[j])+ ', ';
    final +=carga ;
}
final+=' "     data-toggle="modal" data-target="#exampleModalLong">Detalles</button>';

final +='</div>';
}
$('#primero').html(final); 
},
error: function(e){
    console.log(e);
}

       });
       $('#exampleModalLong').on('shown.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
        $(this).find('.modal-body').html($(e.relatedTarget).data('contenido'));
      });
    }




function cargarPersonajes (direcc){
    var nombrePersonajes =''
    $.ajax ({
        url:direcc,
        method:'GET',
        async: false,
        success:function(data){
            nombrePersonajes = data.name
        },
        error:function(e){
            console.log(e);
        }      
    })
    return nombrePersonajes ;
}



});
    
