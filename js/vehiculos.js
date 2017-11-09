$(document).ready(function(){
    var peli = ('https://swapi.co/api/vehicles/');
    obtVehi(peli);
    function obtVehi(url){
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
    final +='<td>'+data.results[i].model+'</td>' ;
    final +='<td>'+data.results[i].length+'</td>' ;
    final +='<td>'+data.results[i].crew+'</td>' ;
    final +='<td>'+data.results[i].passengers+'</td>' ;
    final +='<td>'+data.results[i].vehicle_class+'</td>' ;
    final +='</tr>' ;
}
 $('#tabla').html(final); 
 $('#next').on('click', function (e) {
    e.preventDefault();
    if (data.next != null)
        obtVehi(data.next);
});
$('#prev').on('click', function (e) {
    e.preventDefault();
    if (data.previous != null)
        obtVehi(data.previous);
});
 },
 error: function(e){
     console.log(e);
 }
 
        });
       
    }
 
 
 
 
    
 
 
 });
     
