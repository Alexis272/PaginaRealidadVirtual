//FRUITS CONTROLLER
function loaded(){
    // call the back-end and provide
    // a callback function to draw the results
    backend.fruits(function(data){
        for(var fruit in data){
            $("#fruitslist").append("<li>"+data[fruit]+"</li>");
        }
    });
 
};
$(document).ready(function(){
        // It seems that the backend object is not yet available on the
        // body onload() or $(document).ready(). It seems that timers
        // are started after the backend is injected.
        setTimeout(loaded, 10);
});
 
//CALCULATOR CONTROLLER
//connect the 'calc' button listener
$(document).ready(function(){
 
        $("#calculatebutton").click(function(){
            var a = parseInt($("#aValue").val());
            var b = parseInt($("#bValue").val());
 
            // call the back-end and provide a callback
            // function to draw results
            backend.sum(a, b, function(result) {
                $('#resultvalue').html(result);
            });
 
        });
    }
);