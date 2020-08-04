import React from 'react';
import './App.css';
import { Widget } from 'rasa-webchat';


function App() {
  return (
    <div className="App">
     <Widget
      initPayload={"Hi"}
      socketUrl={"http://localhost:5005"}
      socketPath={"/socket.io/"}
      customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
      title={"CihBank"}
      subtitle={"NovaBot"}
      storage={"session"}
    />
    </div>
  );
}

export default App;
