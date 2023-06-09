import { createSlice } from "@reduxjs/toolkit";
// import { ADD_Note,DELETE_NOTE } from "../actions/noteActions";

const initialState = {
  notes: [
    {
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quibusdam iure eaque officia quidem vel commodi quos sequi quas! Velit laborum earum repellat cumque eos sit illum labore tenetur assumenda fugiat! Iusto perferendis accusamus molestiae.",
      createdOn: new Date(),
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, ad voluptatem illum iste quia exercitationem, culpa non maxime veniam tempora reiciendis magnam dolore!",
      createdOn: new Date(),
    }
  ],
};

// creating reducers using reducer toolkit
const noteSlice = createSlice({
  name:'note',
  initialState,
  reducers:{
    add:(state , action)=>{
      state.notes.push({
        text:action.payload,
        createdOn: new Date()
      })
    },
    delete:(state,action)=>{
      state.notes.splice(action.payload , 1);
    }
  }
});
export const noteReducer = noteSlice.reducer;

export const actions = noteSlice.actions;

export const noteSelector = (state)=>state.noteReducer.notes;

// export function noteReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_Note:
//             return {
//                 ...state,
//                 notes:[
//                     ...state.notes,
//                     {
//                         text:action.text,
//                         createdOn: new Date()
//                     }
//                 ]
//             }
//         case DELETE_NOTE:
//             state.notes.splice(action.index,1);
//             return{
//                 ...state,
//                 notes: [...state.notes]
//             }
//         default:
//             return state;
//     }
// }
