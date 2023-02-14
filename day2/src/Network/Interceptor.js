import axios from "axios";
import { useDispatch } from "react-redux";
import { Loder } from "../Store/Action";
import store from "../Store/Store";
const dispatch=useDispatch()
axios.interceptors.request.use(
    (req) => {
       dispatch(Loder(true))
       return req;
    },
    (err) => {
       return Promise.reject(err);
    }
 );
 
 
 axios.interceptors.response.use(
    (res) => {
       dispatch(Loder(false))
        
       return res;
 },
 (err) => {
    return Promise.reject(err);
 }
 )