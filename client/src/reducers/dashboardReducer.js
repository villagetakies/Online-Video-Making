import {ADD_VIDEO, GET_ITEMS, CURR_VIDEO, RENDER_VIDEO, UPDATE_CURR_VIDEO} from '../actions/types';

const initialState = {
  "timeline": {
    "background": "#000000",
    "tracks": [
        {
            "clips": [
                
            ]
        }
    ]
  },
    "output": {
      "format": "mp4",
      "resolution": "sd"
  },
    currentVideo: "",
    id: ""
}
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS: 
            return{
                ...state
            };
        case CURR_VIDEO:
            return {
                ...state
            };
        case ADD_VIDEO:
          // let updatedclips = [...state["timeline"]["tracks"][0]["clips"]];
          // updatedclips.push(action.payload);
          // let updatedtimeline = state["timeline"];
          // updatedtimeline["tracks"]["clips"] = updatedclips;
          // console.log(updatedtimeline);
          state["timeline"]["tracks"][0]["clips"].push(action.payload);
          // console.log(state);
          return {
            ...state
          }
        case RENDER_VIDEO:
          return{
            ...state,
            id: action.payload
          }
        case UPDATE_CURR_VIDEO:
          let newState = {...state};
          newState.currentVideo = action.payload;
          return{
            ...state,
            currentVideo: action.payload
          }
        default:
            return state;
    }
}