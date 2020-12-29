import {ADD_VIDEO, GET_ITEMS, UPDATE_CURR_VIDEO, CURR_VIDEO, RENDER_VIDEO} from './types';
import axios from 'axios';

export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};

export const addVideo = videosrc => {
    // console.log("Added Video");
    // console.log(videosrc);
    return {
        type: ADD_VIDEO,
        payload: videosrc
    };
};

export const renderVideo = dashboard => async (dispatch)  => {
//    axios.post("api/dashboard", dashboard)
//     .then(function(response) {
//         console.log(response);
//         dispatch({
//             type: RENDER_VIDEO,
//             payload: response.data
//         })
//     }          
//     );    
    const dashResponse = await axios.post("api/dashboard", dashboard);
    dispatch({
                    type: RENDER_VIDEO,
                    payload: dashResponse.data
                });
}

export const getCurrentVideo = () => {
    return {
        type: CURR_VIDEO
    };
};

export const updateCurrVideo = newVideo => {
    return {
        type: UPDATE_CURR_VIDEO,
        payload: newVideo
    }
}