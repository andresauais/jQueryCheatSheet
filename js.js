window.onload = function (){
    document.getElementById("vloaded").innerHTML = "Document has been loaded vanilla";
}

document.getElementById("vclick").addEventListener("click", ()=>{
    document.getElementById("vclick").innerHTML = "Clicked with vanilla";
})
document.getElementById("vclick2").addEventListener("dblclick", ()=>{
    document.getElementById("vclick2").innerHTML = "Double clicked with vanilla";
})

document.addEventListener("keydown", (e)=>{
    document.getElementById("vpressed").innerHTML = e.key + " pressed with vanilla";
})

document.getElementById("mouseover").addEventListener("mouseover", ()=>{
    document.getElementById("vover").innerHTML = "Mouse over with vanilla";
})

document.getElementById("vvalue").addEventListener("click", ()=>{
    document.getElementById("vvalue").innerHTML = "Changed with vanilla";
})

document.getElementById("imgload").addEventListener("click", ()=>{
    var x = document.getElementById("imgload").complete;
    if(x){
        document.getElementById("vload").innerHTML = "Image loaded with vanilla"
    }
    else{
        document.getElementById("vload").innerHTML = "Image didn't load with vanilla"
    }
})

document.getElementById("imgnotload").addEventListener("click", ()=>{
    var x = document.getElementById("imgnotload").complete;
    if(x){
        document.getElementById("vnotload").innerHTML = "Image didn't load with vanilla"
    }
    else{
        document.getElementById("vnotload").innerHTML = "Image loaded with vanilla"
    }
})

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("vsubmit").innerHTML = "Submit with vanilla"
});

var items = ["Apple", "Orange", "Banana"];
var selectElem = document.getElementById("mySelectv");
for (var i = 0; i < items.length; i++){
  var item = items[i];
  var element = document.createElement("option");
  element.innerText = item;
  selectElem.append(element);
}

document.getElementById("mouseover2").addEventListener("mouseover", ()=>{
    document.getElementById("vover2").innerHTML = "Mouse over with vanilla";
})

document.getElementById("vcheck").addEventListener("click", ()=>{
    if(document.getElementById("vcheckbox").checked == true){
        document.getElementById("vcheckbox").checked = false;
    }
    else{
        document.getElementById("vcheckbox").checked = true;
    }
})

document.getElementById("vul").addEventListener("click", function(e){
    document.getElementById("vulclick").innerHTML = e.target.innerHTML;
})
