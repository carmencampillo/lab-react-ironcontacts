
    import prueba from "./contacts.json"
    import './App.css';
    import { useState } from "react";
    
    function App() {
      const [contacts, setContacts] = useState (contactsJSON.slice(5,10))
  
      return (
     <div className="App">
          <h1>IronContacts</h1>
<button onClicj= {()=> {contactsJSON[Math.floor {Math.random()*contactsJSON.len}]
  <button> Sort by Popularity</button>
  <button>Sort by Name</button>
  <table>
    <thead>
    <tr>
    <th> Picture</th>
    <th>Name</th>
    <th> Popularity</th>
    <th>Won Oscar</th>
    <th>Won Emmy</th>
    </tr>
    </thead>
{contacts.map(
 ({id,name,pictureUrl, popularity, wonOscar, wonEmmy}) => {
  return(
    <tbody key= {id}>
<tr>
  <td>
    <img src ={pictureUrl} alt= "pictureUrl" wigth ="50px"/>
  </td>
  <td>{name}</td>
  <td> {popularity.toFixed(2)}</td>
  {wonOscar ? (<td>yes</td>) :
  (<td>no</td>) } 
</tr>
    </tbody>
  );
 }
)}
</table>
</div>

    
      );
    
    }
    
    export default App;
