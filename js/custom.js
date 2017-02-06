// With JQuery

$(document).ready(function(){
    $('#ex1').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
    $('#ex2').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
    
    $('#ex3').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
    
    $('#ex4').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
});
