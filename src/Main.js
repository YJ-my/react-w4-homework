import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './App.css';
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updateDict, updateDictFB } from "./redux/modules/dict";
// import Rating from '@mui/material/Rating';


function Main(props){
    const data = useSelector((state) => state.dict.list);
    const history = useHistory();
    const dispatch = useDispatch();
  
  return (
      <div className="wordBox">
        {data.map((e, idx) => {
            return (
            <CardsBox key={idx} completed={e.completed}>
                <div class="check" onClick={()=>{
                    dispatch(updateDictFB(e.id, e.completed));
                    console.log('잘 됩니당');
                }}><i class="fas fa-check-square fa-2x"></i></div>
                <div>단어</div>
                <span>"{e.word}"</span>
                <div>설명</div>
                <span>"{e.mean}"</span>
                <div>예시</div>
                <span style={{ color: "#443bb3" }}>"{e.ex}"</span>
                <div>예시해석</div>
                <span style={{ color: "#443bb3" }}>"{e.exmean}"</span>
            </CardsBox>
        );
      })}
          <div className='writebutton' onClick={()=>{history.push("/write")}}><i class="fas fa-pencil-alt fa-2x"></i></div>
      </div>
  )
};

export default Main

const CardsBox = styled.div`
  width: 300px;
  height: 220px;
  padding: 20px;
  border: 2px solid red;
  border-radius: 7px;
  background-color: ${(props) => (props.completed ? "pink" : "white")};
`;