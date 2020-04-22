import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

//curl "https://conversationstartersworld.com/wp-admin/admin-ajax.php"  --data "action=quotescollection&_ajax_nonce=fb930dd8dc&current=1717&char_limit=1000&tags=&orderby=random"

function App() {
const [question,setQuestion] = useState("Click button to get a question!");
const [dogPic, setDogPic] = useState("");
function getDogPic(){
  fetch('https://dog.ceo/api/breeds/image/random?something=test')
  .then(response => response.json())
  .then(data => setDogPic(data.message));
}
function getNewQuestion(){
  fetch('https://conversationstartersworld.com/wp-admin/admin-ajax.php?action=quotescollection&_ajax_nonce=fb930dd8dc&current=1717&char_limit=1000')
  .then(response => response.json())
  .then(data => setQuestion(data.question));
}
console.log(dogPic || logo);

return (
    <div className="App">
      <header className="App-header">
        <img src={dogPic || logo} className={dogPic || "App-logo"} alt="logo" />
        <h1 id="QuestionText">
          {question}
        </h1>
        <button
          onClick={() => {
            getNewQuestion();
            getDogPic();
            }
          }
        >Click me!</button>

      </header>
    </div>
  );
}



export default App;
