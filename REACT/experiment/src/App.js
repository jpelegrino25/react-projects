import "./App.css";
import User from "./components/user/User";
import UserProvider from "./store/UserProvider";

function App() {
  return (
    <UserProvider>
      <User />
    </UserProvider>
  );
}

export default App;
