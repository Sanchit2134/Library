const Booksrow = ({ books, setBooks, setBookId, setName, setAuthor, setEdit, setActive }) => {
    const book_delete = (index) => {
      let copy = books.slice(); // Create a copy of the books array
      copy.splice(index, 1);
      setBooks(copy);
    };
  
    const book_edit = (index) => {
      const book = books[index];
      setBookId(book.bookId);
      setName(book.name);
      setAuthor(book.author);   
      setEdit(true);
      setActive(index);
    };
  
    return (
      <div>
        <table>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <th>{book.bookId}</th>
                <th>{book.name}</th>
                <th>{book.author}</th>
                <td>
                  <button onClick={() => book_delete(index)}>Delete</button>
                  <button onClick={() => book_edit(index)}>Edit</button>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Booksrow;
  