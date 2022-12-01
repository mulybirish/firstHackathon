import { useEffect, useState } from "react";
import "./App.css";
import { getPosts } from "./api";
import ListPage from "./components/Listpage";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
    });
  }, []);
  //console.log(posts);
  if (!posts.length) {
    return "loading";
  }
  return (
    <div className="App">
      <ListPage posts={posts} />
    </div>
  );
}

export default App;
