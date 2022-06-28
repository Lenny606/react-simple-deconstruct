import logo from './logo.svg';
import './App.css';
import books from './books.json';

function App() {

  const array = books;
  


  return (

    <div className="App">
      {array.map(book => {
        const {author,description, pages, title, isbn} = book
        {console.log(description)}
        return (
          <div key={isbn}>
            <h1>{author}</h1>
            <p>{title}</p>
            <p>{pages}</p>
            <p>{description}</p>

          </div>
        )
      })}

    </div>

  );



}
export default App;
