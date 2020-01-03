function calculate() {

// Creating the variable we will use to calculate the result
    var billammount = document.getElementById("billAmmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numberOfpeople = document.getElementById("numberOfPeople").value;


// Check if the input is valid
    if (/[a-z]/.test(billammount) || billammount === "" || billammount === " ") {
        console.log(/[a-z]/.test(billammount));
        console.log(billammount === "");
        console.log(billammount === " ");
        alert("Please Enter a valid Bill ammount");
    }
    else if (+numberOfpeople < 1 || /[a-z]/.test(numberOfpeople) || numberOfpeople === "" || numberOfpeople === " ") {
        alert("Please Enter a valid number of people");
    }
    else if (+serviceQuality ===1) {
        alert("Please rate the service quality first");
    }

    else {
        var result = (billammount * serviceQuality) / numberOfpeople;

        result = Math.round(result * 100) / 100;

        document.getElementById("result").innerHTML = result + " $ Each";

    }


}

window.onload = function () {

    document.getElementById("btn").onclick = function () {
        calculate();

    };

};