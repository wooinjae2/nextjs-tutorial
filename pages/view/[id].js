import axios from 'axios';

import {useRouter} from 'next/router';
import { useEffect } from 'react';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log('id출력 : ', id);
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    function getData(){
        axios.get(API_URL).then(res=>{
            console.log(res.data);
           
        })
    }

    useEffect(()=>{
        getData();
    },[])
    return <div>Post : {id}</div>
}

export default Post;