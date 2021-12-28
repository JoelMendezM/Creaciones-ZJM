import { initializeApp }from 'firebase/app'
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC8mJdx_H8ZvkAh_ValFvUWQiHztN2_3Y8",
    authDomain: "creaciones-zjm-coder-react-app.firebaseapp.com",
    projectId: "creaciones-zjm-coder-react-app",
    storageBucket: "creaciones-zjm-coder-react-app.appspot.com",
    messagingSenderId: "246194115130",
    appId: "1:246194115130:web:578a32b13105a389d11b03"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);