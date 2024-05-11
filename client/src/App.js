import React from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import PromptBox from './components/PromptBox';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH9iTJMN_ogclhIQ8I0qEEYiOlN1Utzo4",
  authDomain: "celestis-ai.firebaseapp.com",
  projectId: "celestis-ai",
  storageBucket: "celestis-ai.appspot.com",
  messagingSenderId: "442132310768",
  appId: "1:442132310768:web:e2d2041aa162ca7728f035",
  measurementId: "G-P66EKS7XBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


function App() {
  return (
    <div>
      <PromptBox />
    </div>
  )
}

export default App