import React, { useState } from "react";
import ModalWrapper from "./modal/ModalWrapper";

function App() {
  const [modalIsOpen, setModalOpen] = useState(false);

  return (
    <div className="react-app">
      <ModalWrapper isOpen={modalIsOpen} setModalOpen={setModalOpen} />
      <nav className="nav">
        <div className="nav-buttons">
          <button className="nav-button">My Memorials</button>
          <button className="nav-button">Memory Map</button>
          <button className="nav-button">Services</button>
          <button className="nav-button">About Ecorial</button>
          <button className="nav-button">Account</button>
          <button className="nav-button">Help</button>
          <button className="nav-button nav-button_add-memorial">Add memorial</button>
        </div>
      </nav>
      <main>
        <button
          className="ml-blue-btn"
          onClick={() => setModalOpen(!modalIsOpen)}
        >
          Show details
        </button>
      </main>
    </div>
  );
}

export default App;
