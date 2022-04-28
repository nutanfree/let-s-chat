const firebaseConfig = {
    apiKey: "AIzaSyC5TGOh9598wfzQphbCT77clFNangL0AQs",
    authDomain: "kwitter-f92c7.firebaseapp.com",
    databaseURL: "https://kwitter-f92c7-default-rtdb.firebaseio.com",
    projectId: "kwitter-f92c7",
    storageBucket: "kwitter-f92c7.appspot.com",
    messagingSenderId: "159231844686",
    appId: "1:159231844686:web:c67b23f68418a0ffbfbe1f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}