import Head from 'next/head';
// import styles from '../styles/home.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemList from '../src/component/ItemList';

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData(){
    axios.get(API_URL).then(res =>{
      console.log(res.data);
      // setList(res.data);
    });
  }

  useEffect(()=>{
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>file Server</title>
      </Head>
      <ItemList list={list}/>
    </div>
  )
}
