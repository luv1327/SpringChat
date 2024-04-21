import Auth from "./components/Auth";
import { MainProvider } from "./context/MainContext";

const App = () => {
  return (
    <MainProvider>
      <Auth />
    </MainProvider>
  );
};

export default App;
