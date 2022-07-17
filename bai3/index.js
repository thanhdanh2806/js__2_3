function tong() {
    
    var usd = +document.getElementById("usd").value;
  
    var total = usd * 23.500;
    
    var result = "<p>usd -> vnd : " + total + " vnd </p>";
  
    //Đầu ra
    document.getElementById("showInfoTotal").innerHTML = result;

    document.getElementById("showInfoTotal").className = "card-footer bg-success text-center text-white";
}