

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyC-mQeYoJG5hMAwwiHr2GUxJbNdz5mR7Do",
    authDomain: "study-verse.firebaseapp.com",
    databaseURL: "https://study-verse.firebaseio.com",
    projectId: "study-verse",
    storageBucket: "study-verse.appspot.com",
    messagingSenderId: "663621189479",
    appId: "1:663621189479:web:8020e5d6f245c57c74b9c2",
    measurementId: "G-NZ3PGCHBY2"
  };
   firebase.initializeApp(config);
}

  // Get a reference to the database service
var database = firebase.database();

console.log(document)

function writeTutorDetails(name, email, mobile,address,city,state,about_themselves,area_for_tutoring,languages,wbjee_rank,jee_advance_rank,subjects_chosen_for_mentoring ) {
  database.ref('tutor_details/').push({
    name: name,
    email: email,
    mobile : mobile,
    address: address,
    city: city,
    state: state,
    about_themselves: about_themselves,
    area_for_tutoring: area_for_tutoring,
    languages: languages,
    wbjee_rank: wbjee_rank,
    jee_advance_rank: jee_advance_rank,
    subjects_chosen_for_mentoring :subjects_chosen_for_mentoring 

  }).then((va) => {
  	console.log(va.path.pieces_[1])
  })
}

function writeStudentDetails(name, email, mobile,address1,address2) {
  database.ref('user_details/').push({
    name: name,
    email: email,
    mobile : mobile,
    address1: address1,
    address2 : address2,
  
  }).then((va) => {
    console.log(va.path.pieces_[1])
  })
}




function getInput(id){
	return document.getElementById(id).value
}





function submitForm(e){
	e.preventDefault();
	var name = getInput("awf_field-73327008")
	var email = getInput("awf_field-73327006")
  var mobile = getInput("awf_field-73327003")
  var address = getInput("awf_field-73327004")
  var city = getInput("awf_field-73327005")
  var state = getInput("awf_field-73327007")
  var about_themselves = getInput("awf_field-73327011")
  var area_for_tutoring = getInput("locality")
  var languages = getInput("language")
  var wbjee_rank = getInput("wbjee")
  var jee_advance_rank = getInput("advanced")
  var subjects_chosen_for_mentoring = getInput("sub")
  


  writeTutorDetails(name, email, mobile,address,city,state,about_themselves,area_for_tutoring,languages,wbjee_rank,jee_advance_rank,subjects_chosen_for_mentoring)
}




const form = document.getElementById("tutor_registration_form")
console.log(form)
form.addEventListener("submit", submitForm);




