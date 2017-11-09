 $(document).ready(function () {
    $(function () {
        obtCru('https://swapi.co/api/starships/');
    });
    function obtCru(url) {
        $.ajax({
            url: url,
            method: 'GET',
            success: function (data) {
                console.log(data);
                $('#tabla').empty();
                var cruceros = document.getElementById('tabla');
                var tarjeta = '';
                var cont = 1;
                for (var i = 0; i < data.results.length; i++) {
                    tarjeta += '<tr class="menu-tabla">';
                    tarjeta += '   <td>' + data.results[i].name + '</td>';
                    tarjeta += '   <td>' + data.results[i].model + '</td>';
                    tarjeta += '   <td>' + data.results[i].manufacturer + '</td>';
                    tarjeta += '   <td>' + data.results[i].crew + '</td>';
                    tarjeta += '   <td>' + data.results[i].passengers + '</td>';
                    tarjeta += ' </tr>';
                }
                $('#tabla').html(tarjeta);
                $('#next').on('click', function (e) {
                    e.preventDefault();
                    if (data.next != null)
                        obtCru(data.next);
                });
                $('#prev').on('click', function (e) {
                    e.preventDefault();
                    if (data.previous != null)
                        obtCru(data.previous);
                });
            },
            error: function (e) {
                console.log(e);
            }
        });
    }
});