
function stepItUp() {

    var startingNumber = document.forms["findingEvens"]["startingNumber"].value;
    var endingNumber = document.forms["findingEvens"]["endingNumber"].value;
    var stepNumber = document.forms["findingEvens"]["stepNumber"].value;
   

   /*validation of input*/
    if (startingNumber == "" || isNaN(startingNumber)) {
        alert("Starting number must be a number.");
       document.forms["findingEvens"]["startingNumber"].parentElement.parentElement.className="form-group row has-error";
        document.forms["findingEvens"]["startingNumber"].focus();
        return false;
    }
    

    if (Number(endingNumber) < Number(startingNumber) || endingNumber == "" || isNaN(endingNumber)) {
        alert("Ending number must be a number greater than or equal to the starting number.");
        document.forms["findingEvens"]["endingNumber"].parentElement.parentElement.className="form-group row has-error";
        document.forms["findingEvens"]["endingNumber"].focus();
        return false;
    }


    if (stepNumber == "" || isNaN(stepNumber) || Number(stepNumber) <=0) {
        alert("Step number must be a number greater than zero.");
        document.forms["findingEvens"]["stepNumber"].parentElement.parentElement.className="form-group row has-error";
        document.forms["findingEvens"]["stepNumber"].focus();
        return false;
    }

    /* math portion*/
    var x = [];

    for (var i = Number(startingNumber); i <= Number(endingNumber); i+= Number(stepNumber)) {
        if (i % 2 == 0) {
        x.push(i + "<br/>");
       
        }
     document.getElementById("evenResults").innerHTML = x.join("");     
    }

    /*results*/
    document.getElementById("results").style.display = "block";
    document.getElementById("info1").innerText = startingNumber;
    document.getElementById("info2").innerText = endingNumber;
    document.getElementById("info3").innerText = stepNumber;

    return false;
}



    
