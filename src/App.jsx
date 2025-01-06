import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./components/Post";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="app">
      <MainHeader setShowModal={setShowModal} />
      <PostsList showModal={showModal} setShowModal={setShowModal} />
    </main>
  );
}

export default App;
