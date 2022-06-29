import "./App.css";
import MainLayout from "./layouts/MainLayout";

function App() {
  document.title = "Wordle App";
  return (
    <div className="App">
      <MainLayout></MainLayout>
    </div>
  );
}

export default App;
