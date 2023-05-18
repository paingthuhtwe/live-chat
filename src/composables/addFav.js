import { db } from "../firebase/config";

let addFav = () => {

    let Fav = (message) => {
        message.fav && db.collection('messages').doc(message.id).update({fav: false});
        !message.fav && db.collection('messages').doc(message.id).update({fav: true});
    }

    return { Fav };
}

export default addFav;