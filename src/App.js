import React, { useState , useEffect} from 'react';
import BookCreate from './components/BookCreate.js';
import BookList from './components/BookList.js';
import axios from 'axios';
function App(){
  const [books, setBooks]=useState([]);
  const fetchBooks=async()=>{
const response= await axios.get('http://localhost:3001/books');
setBooks(response.data);
  };

useEffect(()=>{
  fetchBooks();
},[]);

  const deleteBookByID=async(id)=>{
    const response=await axios.put(`http://localhost:3001/books/${id}`)
    const updatedBooks= books.filter((book)=>{
      return id!==book.id;
    });
    setBooks(updatedBooks);
  }
  const createBook=async(title)=>{
    const response=await axios.post('http://localhost:3001/books',{title,})
const updatedBooks=[
    ...books,
   response.data
   ]
   setBooks(updatedBooks);
   console.log(response);
  };
const editBookById=async(id, newtitle)=>{
 const response=await axios.put(`http://localhost:3001/books/${id}`,{
  title: newtitle
 });
 
 
  const updatedBooks=books.map((book)=>{
if(book.id===id){
  return {...book, ...response.data}
}
return book;
 });
 setBooks(updatedBooks);
}
return <div className="app">
<h1>Reading List</h1>
<BookList books={books} onDelete={deleteBookByID} onEdit={editBookById}/>
<BookCreate onCreate={createBook}/>
  </div>;
}
export default App;
