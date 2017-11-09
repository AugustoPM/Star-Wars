$(document).ready(function(){
    var peli = ('https://swapi.co/api/planets/');
    obtPlanet(peli);
    function obtPlanet(url){
        $.ajax ({
 url : url,
 method : 'GET',
 success : function(data){
     var primero = document.getElementById('tabla');
     $('#tabla').empty();
 var final ="";
 for (i = 0; i < data.results.length; i++) {
    final += '<tr>' ;
    final +='<td>'+data.results[i].name+'</td>' ;
    final +='<td>'+data.results[i].diameter+'</td>' ;
    final +='<td>'+data.results[i].climate+'</td>' ;
    final +='<td>'+data.results[i].terrain+'</td>' ;
    final +='<td>'+data.results[i].surface_water+'</td>' ;
    final +='<td>'+data.results[i].population+'</td>' ;
    final +='</tr>' ;
}
 $('#tabla').html(final); 
 $('#next').on('click', function (e) {
    e.preventDefault();
    if (data.next != null)
        obtPlanet(data.next);
});
$('#prev').on('click', function (e) {
    e.preventDefault();
    if (data.previous != null)
        obtPlanet(data.previous);
});
 },
 error: function(e){
     console.log(e);
 }
 
        });
       
    }
 
 
 
 
    
 
 
 });
     
