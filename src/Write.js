import React, {useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import './App.css';
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { createDict, loadDictFB, addDictFB} from "./redux/modules/dict";


function Write(){
    const word = React.useRef(null);
    const mean = React.useRef(null);
    const ex = React.useRef(null);
    const exmean = React.useRef(null);
 
    const history = useHistory();
    const dispatch = useDispatch();

  
  return (
      
      <div>
          <h3>단어 추가하기</h3>
          <div className='textbox'>
                <TextField
                error
                id="standard-error"
                label="단어"
                // defaultValue="단어를 입력하세요:)"
                variant="standard"
                inputRef={word}
                />
        
                <TextField
                error
                id="standard-error"
                label="뜻"
                // defaultValue="뜻을 입력하세요:)"
                variant="standard"
                inputRef={mean}
                />

                <TextField
                error
                id="standard-error"
                label="예문"
                // defaultValue="예문을 입력하세요:)"
                variant="standard"
                inputRef={ex}
                />

                <TextField
                error
                id="standard-error"
                label="해석"
                // defaultValue="해석을 입력하세요:)"
                variant="standard"
                inputRef={exmean}
                />
            </div>

            <Button variant="outlined" color="error"
                onClick={() => {
                    history.push("/");

                    dispatch(addDictFB({
                        word: word.current.value,
                        mean: mean.current.value,
                        ex: ex.current.value,
                        exmean: exmean.current.value,
                    }));

                    // dispatch(createDict({
                    //     word: word.current.value,
                    //     mean: mean.current.value,
                    //     ex: ex.current.value,
                    //     exmean: exmean.current.value,}));
                }}
            >
            저장하기
            </Button>

      </div>
  )
};

export default Write