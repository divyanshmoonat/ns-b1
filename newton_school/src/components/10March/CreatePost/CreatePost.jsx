import useInput from "../../../hooks/useInput";
import axios from "axios";
import "./CreatePost.css";

const CreatePost = () => {
  const [title, bindTitle] = useInput("");
  const [body, bindBody] = useInput("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.table({ title, body });
    const apiData = {
      title,
      body,
    };
    // console.log(title, body);
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        apiData
      );
      console.log(response);
      alert("Post saved successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="title">Post Title</label>
          <input id="title" type={"text"} {...bindTitle} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input id="body" type={"text"} {...bindBody} />
        </div>
        <input type={"submit"} />
      </form>
    </div>
  );
};

export default CreatePost;
