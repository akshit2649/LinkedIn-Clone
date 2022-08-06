import React, { useEffect, useRef, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firabse";

function Feed() {
  const inputRef = useRef();
  const [posts, setPosts] = useState([]);

  const colRef = collection(db, "posts");
  const q = query(colRef, orderBy("timestamp", "desc"));

  useEffect(() => {
    onSnapshot(q, (doc) => {
      let post = doc.docs.map((item) => {
        return {
          id: item.id,
          data: item.data(),
        };
      });

      setPosts(post);
    });
  }, [q]);

  const sendPost = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      name: "Akshit Thakur",
      description: "this is a test",
      message: inputRef.current.value,
      photoUrl: "",
      timestamp: serverTimestamp(),
    })
      .then(() => console.log("Success"))
      .catch((err) => alert(err.message));

    inputRef.current.value = "";
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input ref={inputRef} type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
        />
      ))}
    </div>
  );
}

export default Feed;
