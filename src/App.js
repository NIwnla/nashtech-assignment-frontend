import './App.css';
import { AppRoutes } from './route/AppRoutes';
import NavBar from "./components/NavBar"
import AuthProvider from './context/authContext';
function App() {
  return (
    <div>
      <AuthProvider>
        <NavBar />
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
