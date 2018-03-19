
$(document).ready(function() {
    $.getJSON('data.json', function(data) { //grabs data from data.json file
        var dataTopSpots = '';              //declaring variable where data will be stored
        $.each(data, function(key, value){  //$.each method iterates through the json array
            dataTopSpots += '<tr>';         //appending stuff to html
            dataTopSpots += '<td>'+value.name+'</td>';              //appending name data to <td>
            dataTopSpots += '<td>'+value.description+'</td>';
            dataTopSpots += '<td class="button"><a href="https://www.google.com/maps?q='+value.location+'">Open in Google Maps</a></td>';
            dataTopSpots += '</tr>';
        });
        $('#table-spots').append(dataTopSpots);                     //jquery append method to put data contained in variable dataTopSpots into the table with id table-spots
    });    
});


