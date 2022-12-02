import { useState } from "react";
import Post from "./Post";
import "./Listpage.css"

const districts = [
  "Mitte",
  "Lichtenberg",
  "Friedrichshain-Kreuzberg",
  "Spandau",
  "Charlottenburg-Wilmersdorf",
  "Steglitz-Zehlendorf",
  "Reinickendorf",
  "Tempelhof-Schöneberg",
  "Marzahn-Hellersdorf",
  "Treptow-Köpenick",
  "Neukölln",
  "Pankow",
];
const ListPage = ({ posts }) => {
  const [district, setDistrict] = useState("");
  const results = posts
    .filter((post) => post.bezirk.includes(district))
    .map((post, i) => <Post key={i} post={post} />);
  return (
    <main >
      <div className="districts">
        {districts.map((e) => {
          return (
            <button className="filter-district" value={e} onClick={(e) => setDistrict(e.target.value)}>
              {e}
            </button>
          );
        })}
      </div>
      {results}
    </main>
  );
};

export default ListPage;
