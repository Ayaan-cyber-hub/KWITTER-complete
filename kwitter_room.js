
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAiZLgMdUmm0iqPGw4GlIKKcCnnHbSj5Bo",
      authDomain: "kwitter-f318b.firebaseapp.com",
      databaseURL: "https://kwitter-f318b-default-rtdb.firebaseio.com",
      projectId: "kwitter-f318b",
      storageBucket: "kwitter-f318b.appspot.com",
      messagingSenderId: "23718488610",
      appId: "1:23718488610:web:c891cf188bb139225bb87b",
      measurementId: "G-QXSFZH9TBC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "&#9996";


function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location = "Kwitter_page.html";
}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

