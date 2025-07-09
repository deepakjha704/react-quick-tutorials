import "./App.css";
import Search from "./hooks/components/Search";

function App() {
  return (
    <>
      <Search
        delay={300}
        suggestion={false}
        endpoint={""}
        item={[]}
        setItem={() => {}}
        renderLoader={<></>}
        renderError={<></>}
        renderItem={<></>}
        style={{ label: "", search: "" }}
        transformData={() => {}}
      />
    </>
  );
}

export default App;
