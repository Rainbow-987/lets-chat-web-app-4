// start js part from here
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDuQwEAL8doHhBIFE7XQs0wVbMs2MRHg3Y",
    authDomain: "kwitter-d9129.firebaseapp.com",
    databaseURL: "https://kwitter-d9129-default-rtdb.firebaseio.com",
    projectId: "kwitter-d9129",
    storageBucket: "kwitter-d9129.appspot.com",
    messagingSenderId: "487296534692",
    appId: "1:487296534692:web:61a0b3ca57acb17fe83e31"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Name_user");
room_name = localStorage.getItem("room_selected");

document.getElementById("Welcome").innerHTML = "Welcome " +  user_name  + " to #"+ room_name;

function send(){

    my_msg = document.getElementById("new_message").value;

    firebase.database().ref(room_name).push({
        Name : user_name,
        Message : my_msg,
        Likes : 0

    });
 
}
