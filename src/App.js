import './App.css';
import React from "react";
import Main from "./Main";
import Write from "./Write";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import {db} from "./firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { createDict, loadDictFB} from "./redux/modules/dict";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  React.useEffect(async()=>{
    dispatch(loadDictFB());
    // console.log(db);
///////////데이터 추가하기////////////////////
    // addDoc(collection(db, "dictdata"),{word:"like", ....이런식으로 추가하면 돼}
    // });
//////////파이어베이스에 내가 넣은 값 잘 가져와졌나 확인하는거/////////////    
//     //작업이 끝나고 결과를 가져 올 때까지 기다리는 애 (async랑 await는 짝꿍)
//     const query = await getDocs(collection(db, "dictdata"));
//     console.log(query);
// //forEach는 array의 내장함수가 아니라 getdDocs()하면 나오는 return되는 도큐먼트들 모음 객체의 내장함수 쓰는거임
//     query.forEach((doc)=> {
//       console.log(doc.id, doc.data());
//     });
  }, []);

  return (
    <div className="App">
      <NavBar>영어 단어장</NavBar>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route path="/write">
        <Write/>
      </Route>
    </div>
  );
}

export default App;

const NavBar = styled.div`
  width:97%;
  margin: auto;
  padding : 20px; 0px;
  text-align: center;
  font-size: 40px;
  background-color: rgb(255, 228, 228);;
  color: black;
  font-weight: bold;
`;


