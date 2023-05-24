import { ref } from "vue";
import { db, auth } from "../firebase/config";

let addFav = () => {
  let Fav = async (message) => {
    let user = ref(auth.currentUser);

    auth.onAuthStateChanged((_user) => {
      user.value = _user;
    });

    if (message.favUsers && message.favUsers.includes(user.value.uid)) {
      // Remove user ID from favUsers array
      const updatedUsers = message.favUsers.filter(
        (userId) => userId !== user.value.uid
      );

      // Check for fav user
      if (updatedUsers.length > 0) {
        db.collection("messages")
          .doc(message.id)
          .update({ fav: true, favUsers: updatedUsers });
      } else {
        db.collection("messages")
          .doc(message.id)
          .update({ fav: false, favUsers: updatedUsers });
      }
    } else {
      // Add user ID to favUsers array or create it
      const favUsers = message.favUsers ? [...message.favUsers] : [];
      favUsers.push(user.value.uid);
      db.collection("messages").doc(message.id).update({ fav: true, favUsers });
    }
  };

  return { Fav };
};

export default addFav;
