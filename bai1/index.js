function tong() {
    
    var money = +document.getElementById("money").value;
    var day = +document.getElementById("day").value;
  
    var total = money * day;
    
    var result = "<p>Tổng tiền lương : " + total + "</p>";
  
    //Đầu ra
    document.getElementById("showInfoTotal").innerHTML = result;

    document.getElementById("showInfoTotal").className = "card-footer bg-success text-center text-white";
}