import { useState } from "react";
import BookEdit from './BookEdit';

function BookShow ({book, onDelete, onEdit}){
   const handleClick=()=>{
onDelete(book.id);
};
  const [showEdit, setShowEdit]=useState(false);

  const handleEdit=()=>{
    setShowEdit(!showEdit);
  }
  let content =<h3>{book.title}</h3>
  const handleSubmit=()=>{
    setShowEdit(false);
    };
  if(showEdit){
    content =<BookEdit book={book} onEdit={onEdit}  onSubmit={handleSubmit}/>
  }

    return <div className="book-show">
    <div>{content}</div>
    <div className="actions">
    <button className="edit" onClick={handleEdit}>Edit </button>
    <button  className="delete" onClick={handleClick}>Delete</button></div>
    </div>;
}
export default BookShow;