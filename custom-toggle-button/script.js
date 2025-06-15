$(document).ready(function () {
    $('#toggle').change(function () { 
        if($(this).is(':checked'))
        {
            $('#status').text('Status: On');
        }
        else{
            $('#status').text('Status: Off');
        }
        
    });
});