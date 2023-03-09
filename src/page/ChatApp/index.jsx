import React, { useRef, useState } from "react";
import "./style.css";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { IoSendSharp } from "react-icons/io5";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core
import "primeicons/primeicons.css"; //icons

import { Editor } from '@tinymce/tinymce-react';


firebase.initializeApp({
  apiKey: "AIzaSyAuKM2inLQRPyprSmOQBmoRH-yQXi_aPjo",
  authDomain: "chatapp-2c43d.firebaseapp.com",
  projectId: "chatapp-2c43d",
  storageBucket: "chatapp-2c43d.appspot.com",
  messagingSenderId: "1043886404888",
  appId: "1:1043886404888:web:51fdf1e28382ad69905a6d",
  measurementId: "G-N2QRY1FWC9",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="page-App">
      <header>
        {/* <h1>⚛️💬</h1> */}
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="page-sign-in" onClick={signInWithGoogle}>Google ilə daxil olun</button>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="page-sign-out" onClick={() => auth.signOut()}>Çıxış</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  
  
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main className="page-main">

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form className="page-form" onSubmit={sendMessage}>

      {/* <input className="page-input" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="mesajınızı daxil edin..." /> */}
      {/* <Editor className="page-input" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="mesajınızı daxil edin..."/> */}
      <Editor
        apiKey= "xcg6f5gqt3vbzl0oofjew5r3ty4g946vgma9qj2804i7hpdq"
        authDomain= "chatapp-2c43d.firebaseapp.com"
        projectId= "chatapp-2c43d"
        storageBucket= "chatapp-2c43d.appspot.com"
        messagingSenderId= "1043886404888"
        appId= "1:1043886404888:web:51fdf1e28382ad69905a6d"
        measurementId= "G-N2QRY1FWC9"
        value={formValue}
        onEditorChange={(e) => setFormValue(e)}
        init={{
          width: '100%',
          height: '20px',
          skin: 'oxide-dark',
          content_css: 'dark',
          menubar: false,
          statusbar: false,
          autoresize_bottom_margin: 0,
          plugins: 'link lists emoticons image autoresize codesample',
          toolbar:
            'bold italic strikethrough link numlist bullist blockquote emoticons image codesample | sendBtn',
          codesample_languages: [
            { text: 'HTML/XML', value: 'markup' },
            { text: 'JavaScript', value: 'javascript' },
            { text: 'CSS', value: 'css' },
            { text: 'PHP', value: 'php' },
            { text: 'Ruby', value: 'ruby' },
            { text: 'Python', value: 'python' },
            { text: 'Java', value: 'java' },
            { text: 'C', value: 'c' },
            { text: 'C#', value: 'csharp' },
            { text: 'C++', value: 'cpp' },
          ],
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <button className="page-button" onClick={(e) => sendMessage(e)} disabled={!formValue}><IoSendSharp/></button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img className="page-img" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p className="page-p">{text}</p>
    </div>
  </>)
}



export default App;
