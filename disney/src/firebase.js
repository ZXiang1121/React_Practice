import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAFWou42dLdSBNFaGXP_k0GvNK6bLQfG8M",
  authDomain: "disney-clone-cb38c.firebaseapp.com",
  projectId: "disney-clone-cb38c",
  storageBucket: "disney-clone-cb38c.appspot.com",
  messagingSenderId: "273378030603",
  appId: "1:273378030603:web:c9d4693aa43a1cdcc0830e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;


// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyAFWou42dLdSBNFaGXP_k0GvNK6bLQfG8M",
//   authDomain: "disney-clone-cb38c.firebaseapp.com",
//   projectId: "disney-clone-cb38c",
//   storageBucket: "disney-clone-cb38c.appspot.com",
//   messagingSenderId: "273378030603",
//   appId: "1:273378030603:web:c9d4693aa43a1cdcc0830e"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;