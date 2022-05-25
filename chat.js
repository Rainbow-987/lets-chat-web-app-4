// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

  var firebaseConfig = {
    apiKey: "AIzaSyAIDN0o2z7qDQFGK-qK-cRfbMrcTPo3XTM",
    authDomain: "let-s-chat-web-app-2a531.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-2a531-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-2a531",
    storageBucket: "let-s-chat-web-app-2a531.appspot.com",
    messagingSenderId: "88092089962",
    appId: "1:88092089962:web:62040ac7e64aba53693413"
  };

  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  
  function add_room(){

    room_new = document.getElementById("new_room").value;

    firebase.database().ref("/").child(room_new).update({
          purpose: "adding new Room"
    });
    
    localStorage.setItem("room_selected", room_new);
    window.location = "chat_room.js";


}



function getData() {
firebase.database().ref("/").on('value', function(snapshot) {

      document.getElementById("output").innerHTML = "";
      
      snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
            Room_names = childKey;
     
            new_row_room = "<div class = 'room_name' id = " + Room_names +" onclick = 'redirect_room(this.id)'> #" + Room_names +"</div> <hr>"


      document.getElementById("output").innerHTML += new_row_room;
     
      });
});
}
getData();


function redirect_room(selected_room){

localStorage.setItem("room_selected", selected_room);
window.location = "chat_room.html";

}

function logout(){

      localStorage.removeItem("Name_user");

      window.location="index.html";
}