import { useEffect, useState } from "react";
import "./App.css";
import Calander from "./components/Calander";
import Landing from "./components/Landing";
import { getPosts } from "./api";
import ListPage from "./components/Listpage";
import ScrollButton from "./components/ScrollButton";
import Snowfall from "react-snowfall";
import "./components/Landing.css";
import BarLoader from "react-spinners/BarLoader";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
    });
  }, []);

  if (!posts.length) {
    return (
      <BarLoader
        className="loader"
        speedMultiplier={2}
        color="#cc231e"
        height={20}
        width={300}
      />
    );
  }
  return (
    <div className="App">
      <Snowfall />
      <Landing />
      <ListPage posts={posts} />
      <Calander>{/* <Nav /> */}</Calander>
      <ScrollButton />
    </div>
  );
}

export default App;
