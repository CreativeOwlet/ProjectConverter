
import {async} from "@firebase/util";
import {useState, useEffect} from "react";
//getting the export db from our config
import {db} from './firebase-config';
import {collection,getDocs,addDoc} from "firebase/firestore";

import './App.css';

function App() {
  const [newSku,setNewSku] = useState(0);
  const [newTitle,setTitle] = useState("");

  const [users, setUsers] =  useState([]);
  const booksCollectionRef = collection(db,"books");

  const createBook = async () => { 
    await addDoc(booksCollectionRef, {sku: newSku,title:newTitle});
  };


  useEffect (()=> {
    const getUsers = async () => {
      const data = await getDocs(booksCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getUsers();
  },[]);

  return (
    <div className="App">
      <input type='number' placeholder="Sku..." onChange={(event) => {setNewSku(event.target.value);}}
      />
      <input type='text' placeholder="Book Title..."
      onChange={(event) => {setTitle(event.target.value);}}
      />
      <button onClick={createBook}>Create</button>
      {users.map((user)=>{
        return <div> 
        <h1>Title:  {user.title}</h1>
        <h1>SKU:  {user.sku}</h1></div>
      })}
    </div>
  );
}

export default App;
