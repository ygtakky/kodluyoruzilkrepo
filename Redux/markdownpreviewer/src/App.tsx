import "./App.css";
import HelpButton from "./components/HelpButton";
import MarkdownShow from "./components/MarkdownShow";
import TextInput from "./components/TextInput";

function App() {
  return (
    <div className="app">
      <HelpButton />
      <h2>Markdown Previewer</h2>
      <div className="app__container">
        <TextInput />
        <MarkdownShow />
      </div>
    </div>
  );
}

export default App;
