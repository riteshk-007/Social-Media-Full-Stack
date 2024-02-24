import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-2 ">
      <CreatePost />
      <div className="mt-10 mx-auto w-full flex flex-col justify-center items-center">
        <Post
          img={
            "https://images.unsplash.com/photo-1708257106582-3734df4532e7?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Post
          img={
            "https://images.unsplash.com/photo-1594746309863-72601060ac8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Post
          img={
            "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Post
          img={
            "https://images.unsplash.com/photo-1708607534586-7e3d7e401f48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
    </div>
  );
};

export default Home;
