// KWH Classifier using Break + Switch Statements

function kwh() {

    num1 = document.getElementById("input1").value;
    
    switch (true) {
        case (num1 > 500):
            window.alert("Very High Consumption : Heavy Electricity Users");
            break;
        case (num1 > 300):
            window.alert("High Consumption : Higher Electricity Usage");
            break;
        case (num1 > 200):
            window.alert("Average Consumption : Typical Electricity Usage");
            break;
        case (num1 > 100):
            window.alert("Low Consumption : Normal Residential Rates");
            break;
        case (num1 > 0):
            window.alert("Lifeline consumer : Discounted Electricity Rates");
            break;
        default:
            window.alert("Invalid input");
    }

}