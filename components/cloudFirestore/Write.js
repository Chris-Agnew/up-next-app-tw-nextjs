import firebase from "firebase/app";
import "firebase/firestore";

const WriteToCloud = () => {
  const sendData = () => {
    try {
      firebase.firestore().collection("users").doc("user1").set({
        name: "John Doe",
        age: 30,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
