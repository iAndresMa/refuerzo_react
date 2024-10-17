import {useEffect, useRef, useState} from "react";
import axios from "axios";
import type { ReqResUserListResponse, User } from "../interfaces";

const loadUsers = async(page: number = 1): Promise<User[]> => {
    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
            params:{
                page: page
            }
        })
        return data.data;
    }catch (error){
        console.log(error);
        return [];
    }
}
export const UseUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const currenrPageRef = useRef(1);
    useEffect(() => {
        loadUsers(currenrPageRef.current).then( setUsers )
    }, []);

    const nextPage = async () => {
        currenrPageRef.current++;
        const users = await loadUsers(currenrPageRef.current)
        if (users.length > 0) {
            setUsers(users);
        }else{
            currenrPageRef.current--;
        }
    }

    const prevPage = async () => {
        if(currenrPageRef.current < 1) return;
        currenrPageRef.current--;
        const users = await loadUsers(currenrPageRef.current);
        setUsers(users);
    }

    return{
        //properties
        users,
        //Methods
        nextPage,
        prevPage
    }
}