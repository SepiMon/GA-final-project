const careForm = document.querySelector('#childcare-form');
const careInput = document.querySelector('#care-type');
function showCarePic(event) {
    event.preventDefault();
    const care = careInput.value;
    const cleanedCare = care.trim().toLowerCase();
    document.body.classlist = "";
    switch (cleanedCare) {
        case 'babycare':
            document.body.classlist.add('babycare');
            break;
        case 'careone':
            document.body.classlist.add('careone');
            break;
        case 'caretwo':
            document.body.classlist.add('caretwo');
            break;
    }
    careForm.reset();
}
// careForm.addEventListener('submit', showCarePic);

// document.addEventListener('toggle', showPosition);

// function showPosition() {
//     document.getElementById("our-people-position-Educator").style.visibility = "visible";
//     document.getElementById("position2").innerHTML = "Chef";
//     document.getElementById("position3").innerHTML = "Manager";
// }
function myFunctionEducator() {
    var getText = document.getElementById("our-people-position-Educator");
    if (getText.style.visibility === "visible") {
        getText.style.visibility = "hidden";
    } else {
        getText.style.visibility = "visible";
    }
}
function myFunctionChef() {
    var getText = document.getElementById("our-people-position-Chef");
    if (getText.style.visibility === "visible") {
        getText.style.visibility = "hidden";
    } else {
        getText.style.visibility = "visible";
    }
}
function myFunctionManager() {
    var getText = document.getElementById("our-people-position-Manager");
    if (getText.style.visibility === "visible") {
        getText.style.visibility = "hidden";
    } else {
        getText.style.visibility = "visible";
    }
}

