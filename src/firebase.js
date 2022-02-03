
  // Import the functions you need from the SDKs you need
  
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";

  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD731N4Vqnoyd55uei9tn_ysoYHBT-S-Tg",
    authDomain: "dictionary-6a781.firebaseapp.com",
    projectId: "dictionary-6a781",
    storageBucket: "dictionary-6a781.appspot.com",
    messagingSenderId: "596558697734",
    appId: "1:596558697734:web:5a6e9251539a8581d43a87",
    measurementId: "G-3PB0FF8WNW"
  };

/*   변수없이 그냥 해주는 이유 :
   파이어베이스라는 파일을 호출하는 그 순간이 있을거잖아
   그 순간에 이 firebase를 쓸 수 있도록
   초기화 기초 설정 해 줄 거라는 뜻 */
  initializeApp(firebaseConfig);
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

  export const db = getFirestore();
