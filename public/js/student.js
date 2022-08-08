
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

function writeUserDetails(name, email, mobile,address1,address2) {
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




function get_Input(id){
	return document.getElementById(id).value
}


function submitIt(e){
e.preventDefault();


var name = get_Input("name")
var email = get_Input ("mail")
var mobile = get_Input ("number")
var address1 = get_Input ("add1")
var address2 = get_Input ("add2")




writeUserDetails(name,email,mobile,address1,address2)

}


const form = document.getElementById("contact_form")
console.log(form)
form.addEventListener("submit", submitIt);























