
    import prueba from "./contacts.json"
    import './App.css';
    import { useState } from "react";
    
    function App() {
      const fiveContacts = prueba.slice(0,5)
      const [contacts, setContacts] = useState (fiveContacts)
      console.log(contacts)
      return (
    
        <div className="App">
       
        </div>
      );
    
    }
    
    export default App;
