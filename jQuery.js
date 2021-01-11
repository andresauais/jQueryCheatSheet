$(document).ready(function() {
    $("#qloaded").text("Document has been loaded with jQuery");
});

$("#qclick").click(()=>{
    $("#qclick").text("Clicked with jQuery");
})

$("#qclick2").dblclick(()=>{
    $("#qclick2").text("Double clicked with jQuery");
})

$(document).keydown((e)=>{
    $("#qpressed").text(e.key + " pressed with jQuery");
})

$("#mouseover").mouseover(()=>{
    $("#qover").text("Mouse over with jQuery");
})

$("#qvalue").click(()=>{
    $("#qvalue").text("Changed with jQuery");
})

$("#imgload").click(()=>{
    $("#qload").text("Image loaded with jQuery");
})

$("#imgnotload").click(()=>{
    $("#qnotload").text("Image didn't load with jQuery");
})

$('form').on('submit', function(e){
    e.preventDefault();
    $("#qsubmit").text("Submit with jQuery")
});

var items = ["Apple", "Orange", "Banana"];
for (var i = 0; i < items.length; i++){
    var item = items[i];
    var element = $("<option></option>");
    element.text(item);
    $('#mySelectq').append(element);
}

$("#mouseover2").mouseover(()=>{
    $("#qover2").text("Mouse over with jQuery");
})

$('#qcheck').click(()=>{
    $('#qcheckbox').prop("checked", true);
})

$('#qul').click(function(e){
    $('#qulclick').text(e.target.innerHTML);
})
