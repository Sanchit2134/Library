import './App.css';
import { useState } from 'react';
import Booksrow from './components/Booksrow';
function App() {
  const [bookId,setBookId] = useState("");
  const [name,setName] = useState("");
  const [author,setAuthor] = useState("");
  const [edit,setEdit] = useState(false);
  const [active,setActive] = useState(null);

  const [books,setBooks] = useState([]);

  function add_book(e){
    e.preventDefault();  //with prevenDefault function browser page will not refresh. 
    const book = {
      bookId,
      name,
      author,
    };
    if(edit){
      let copy = books;
      Object.assign(copy[active],book)  //changing the value of copy[active] element to book
      setBooks([...copy]);
      setEdit(false);
      setActive(null);
      setBookId('');
      setName('');
      setAuthor('');
    }
    else{
      setBooks([...books,book]);   //update book array to current books array+new book appended at back
      setBookId('');
      setName('');
      setAuthor('');
    }

    //This part is for reset input
    setBookId("");  
    setName("");
    setAuthor("");
  }
  return (
    <div className="App">
      <h1>Book Keeper App</h1>
      <form onSubmit={add_book}>
        <label>Booked Id</label>
        <input type="text" value={bookId} onChange={(e)=>setBookId(e.target.value)}></input>
        <br></br>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <br></br>
        <label>Author</label>
        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
        <br></br>
        <button> {edit ? "Update":"Add"} Book</button>
      </form>
      <h2>Books</h2>
      <Booksrow books={books} setBooks={setBooks} setBookId={setBookId} setName={setName} setAuthor={setAuthor} setEdit={setEdit} setActive={setActive}></Booksrow>
    </div>
  );
}

export default App;
