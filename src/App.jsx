import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
