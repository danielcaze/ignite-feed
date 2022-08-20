import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
// named exports vs default exports
export function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>


  );
};