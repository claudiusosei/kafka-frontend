import axios from "axios";
import { GET_TOPICS } from "./types";

export const getTopics = () => (dispatch) => {
  axios.get("http://localhost:4000/listtopics").then((res) => {
    console.log("===> ", res)
    dispatch({
      type: GET_TOPICS,
      payload: res.data,
    });
  });
};
