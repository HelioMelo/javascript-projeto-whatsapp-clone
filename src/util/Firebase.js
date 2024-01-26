import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';



export class Firebase {

    constructor() {
        this.initFirebase();
    }

    initFirebase() {
        const firebaseConfig = {            
            apiKey: "AIzaSyBJtb-jVtl9bBwy8RG6b7Z1QOMTmxWsotY",
            authDomain: "whatsapp-clone-16797.firebaseapp.com",
            projectId: "whatsapp-clone-16797",
            storageBucket: "gs://whatsapp-clone-16797.appspot.com",
            messagingSenderId: "321633434993",
            appId: "1:321633434993:web:bbe2f1fdb9924201300ad0",
            measurementId: "G-XSSTK4CEFF"
        };

        if (!window._initialized) {
            firebase.initializeApp(firebaseConfig);
            window._initialized = true;
        }
    }

    static db() {
        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }

    initAuth(){
        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then(result =>{

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user, 
                    token
                });
                

            })
            .catch(err=>{
                f(err);

            })
        });
    }
}
