function tong() {
    
    var number = +document.getElementById("number").value;
//  hundred = Math.floor(n/100);
//  ten = Math.floor(n%100/10);
//  unit = n % 10;
    var number1 = Math.floor(number%100/10);
//  console.log (number1);
    var number2 = number % 10; 
    var tong = number1 + number2;
    
    var result = "<p>tổng 2 số là : " + tong + "</p>";

    document.getElementById("showInfoTotal").innerHTML = result;
    document.getElementById("showInfoTotal").className = "card-footer bg-success text-center text-white";
}