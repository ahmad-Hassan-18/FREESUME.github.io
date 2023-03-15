function cvMaker() {
    let yourName = document.getElementById("yName").value;
    document.getElementById("youName").innerHTML = yourName;

    let yourAddress = document.getElementById("address").value;
    document.getElementById("youAddress").innerHTML = yourAddress;

    let yourContact = document.getElementById("contact").value;
    document.getElementById("youContact").innerHTML = yourContact;

    let yourEmail = document.getElementById("email").value;
    document.getElementById("youEmail").innerHTML = yourEmail;

    let yourFather = document.getElementById("fName").value;
    document.getElementById("fatherName").innerHTML = yourFather;

    let yourAge = document.getElementById("age").value;
    document.getElementById("AGE").innerHTML = yourAge;

    let yourMartialStatus = document.getElementById("mtStatus").value;
    document.getElementById("martial").innerHTML = yourMartialStatus;

    let yourReligion = document.getElementById("religion").value;
    document.getElementById("Religion").innerHTML = yourReligion;

    let yourProfile = document.getElementById("profile").value;
    document.getElementById("yProfile").innerHTML = yourProfile;

    let yourObjective = document.getElementById("objective").value;
    document.getElementById("yObjective").innerHTML = yourObjective;


    // skill section starts here

    let firstSkill = document.getElementById("sk-1").value;
    document.getElementById("web").innerHTML = firstSkill;

    let oneSkill = document.getElementById("skillOne").value;
    document.getElementById("webDevelopment").innerHTML = oneSkill;

    let secondSkill = document.getElementById("sk-2").value;
    document.getElementById("program").value = secondSkill;

    let twoSkill = document.getElementById("skillTwo").value;
    document.getElementById("programmer").innerHTML = twoSkill;

    let thirdSkill = document.getElementById("sk-3").value;
    document.getElementById("android").value = thirdSkill;

    let threeSkill = document.getElementById("skillThree").value;
    document.getElementById("androidDevelopment").innerHTML = threeSkill;


    // experience section starts here

    let firstExperience = document.getElementById("expOne").value;
    document.getElementById("firstExp").innerHTML = firstExperience;

    let secondExperience = document.getElementById("expTwo").value;
    document.getElementById("secondExp").innerHTML = secondExperience;

    let thirdExperience = document.getElementById("expThree").value;
    document.getElementById("thirdExp").innerHTML = thirdExperience;

    let expDateOne = document.getElementById("ex-1").value;
    document.getElementById("first").value = expDateOne;

    let expDateTwo = document.getElementById("ex-2").value;
    document.getElementById("second").value = expDateTwo;

    let expDateThree = document.getElementById("ex-3").value;
    document.getElementById("third").value = expDateThree;


    // education section starts here

    let eduSchool = document.getElementById("eduOne").value;
    document.getElementById("school").innerHTML = eduSchool;

    let eduCollege = document.getElementById("eduTwo").value;
    document.getElementById("college").innerHTML = eduCollege;

    let eduUniversity = document.getElementById("eduThree").value;
    document.getElementById("university").innerHTML = eduUniversity;

    let eduDateOne = document.getElementById("edu-1").value;
    document.getElementById("sch").value = eduDateOne;

    let eduDateTwo = document.getElementById("edu-2").value;
    document.getElementById("coll").value = eduDateTwo;

    let eduDateThree = document.getElementById("edu-3").value;
    document.getElementById("uni").value = eduDateThree;

}


// color picker section starts here

function colorPicker() {

    let headerPicker = document.getElementById("headerClr").value;
    document.getElementById("cvHeading").style.backgroundColor = headerPicker;

    let bodyPicker = document.getElementById("bodyClr").value;
    document.getElementById("myCv").style.backgroundColor = bodyPicker;

    let footerPicker = document.getElementById("footerClr").value;
    document.getElementById("footer").style.backgroundColor = footerPicker;

}

function openPopup() {
    let show = document.querySelector(".alert").style.visibility = "visible";
}

function closePopup() {
    let close = document.querySelector(".alert").style.visibility = "hidden";
}

