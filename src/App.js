import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from "./Context/AuthContext";
import Routers from "./Route";
axios.defaults.withCredentials = true;
toast.configure()

function App() {
    return (
    <div>
      <AuthContextProvider>
        <Routers />
      </AuthContextProvider>
    </div>
  );
}

export default App;
