import {db} from "../../firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
//actions
const LOAD = "dict/LOAD";
const CREATE = "dict/CREATE";
const UPDATE = "dict/UPDATE";

const initialState = {
    list: [
      // { word: "culture", mean:"문화,교양", ex:"The children are taught to respect different cultures.", exmean:"아이들은 다른 문화를 존중하라는 가르침을 받는다", completed: false},
      // { word: "culture", mean:"문화,교양", ex:"test", exmean:"test", completed: false},
      // { word: "culture", mean:"문화,교양", ex:"test", exmean:"test", completed: false},
      // { word: "culture", mean:"문화,교양", ex:"test", exmean:"test", completed: false},
    ],
};

/////////////////////////////action creators
export function loadDict(dict_list){
  return {type: LOAD, dict_list}
}
export function createDict(dict){
    console.log("액션을 생성할거야!");
      return {type: CREATE, dict: dict};
  }
  
  //체크버튼 누르면 색 칠해지는거
  export function updateDict(dict_index){
    return {type: UPDATE, dict_index};
  }


/////////////////////////////미들웨어
export const loadDictFB =()=>{
  return async function(dispatch){
    const dict_data = await getDocs(collection(db, "dictdata"));
    console.log(dict_data);

    let dict_list =[];
    dict_data.forEach((doc) => {
      console.log(doc.data());
      //id는 수정기능을 위해서
      dict_list.push({id: doc.id, ...doc.data()});
      // dict_list = [...dict_list, {...doc.data()}];
    })

    console.log(dict_list);

    dispatch(loadDict(dict_list));
  };
};

export const addDictFB = (dict) => {
  return async function(dispatch){
    const docRef = await addDoc(collection(db, "dictdata"), dict);
    const _dict = await getDoc(docRef);
    const dict_data = {id: _dict.id, ..._dict.data()};

    console.log(dict_data);

    dispatch(createDict(dict_data));

  }

}

export const updateDictFB = (dict_id, dict_completed) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "dictdata", dict_id);
    await updateDoc(docRef, dict_completed?{completed:false}:{completed:true});

    const _dict_list = getState().dict.list;
    const dict_index = _dict_list.findIndex((d)=>{
      return d.id === dict_id;
    })
    dispatch(updateDict(dict_index, dict_completed));

  };
};

  /////////////////////////reducer
  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "dict/LOAD" : {
        return {list: action.dict_list};
      }
      case "dict/CREATE": {
          console.log("이제 값을 바꿀거야!");
          const new_dict_list = [...state.list, action.dict];
          return {list : new_dict_list};
      }
  
      //완료 색칠

      case "dict/UPDATE": {
        let new_dict_list = state.list;
        for (let i = 0; i < new_dict_list.length; i++) {
          if (parseInt(action.dict_index) === i) {
            new_dict_list[i].completed = new_dict_list[i].completed
              ? false
              : true;
          }
        }
  
        // let new_word_list = state.list;
  
        return { ...state, list: [...new_dict_list] };
      }
    

      // case "dict/UPDATE": {
        
      //   const new_dict_list = state.list.map((l, idx) => {
      //     if (parseInt(action.dict_index) === idx) {
      //       return { ...l, completed: true };
      //     }else{
      //       return l;
      //     }
      //   });
      //   console.log({ list: new_dict_list });
      //   return {list: new_dict_list};
  
      // }



      default:
        return state;
    }
  }