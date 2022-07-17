function tong() {
    
    var number1 = +document.getElementById("number1").value;
    var number2 = +document.getElementById("number2").value;
    var number3 = +document.getElementById("number3").value;
    var number4 = +document.getElementById("number4").value;
    var number5 = +document.getElementById("number5").value;
  
    var total = number1 + number2 + number3 + number4 + number5;

    var tb = total / 5;
    
    var result = "<p>trung bình 5 số : " + tb + "</p>";

    document.getElementById("showInfoTotal").innerHTML = result;
    document.getElementById("showInfoTotal").classList.add("bg-success");
    document.getElementById("showInfoTotal").classList.add("text-center");
    document.getElementById("showInfoTotal").classList.add("text-white");
}