import Head from 'next/head';
import styles from '../styles/home.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemList from '../src/component/ItemList';
import { Divider, Header } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData(){
    axios.get(API_URL).then(res =>{
      console.log(res.data);
      setList(res.data);
    });
  }

  useEffect(()=>{
    getData();
  }, []);

  return (
    <div className="wrapper">
      <Head>
        <title>file Server</title>
      </Head>
      <Header as="h3" style={{paddingTop: 40}}>
        베스트 상품
      </Header>
      <Divider/>
      <ItemList list={list.slice(0,9)}/>
      <Header as="h3" style={{paddingTop: 40}}>
        신상품
      </Header>
      <Divider/>
      <ItemList list={list.slice(9)}/>
    </div>
  )
}
