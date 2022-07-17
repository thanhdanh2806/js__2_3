function tong() {
    
    var height = +document.getElementById("height").value;
    var width = +document.getElementById("width").value;
  
    var chuvi = ( height + width )* 2;
    var dientich = height * width ;
    
    var result = "";
    result += "<p>chuvi : " + chuvi + "</p>"
    result += "<p>dientich : " + dientich + "</p>"
  

    document.getElementById("showInfoTotal").innerHTML = result;

    document.getElementById("showInfoTotal").className = "card-footer bg-success text-center text-white";
}