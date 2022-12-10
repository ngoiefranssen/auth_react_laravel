import './App.css';
import { Guest } from './components/navbar/Guest';
import AuthUser from './components/auth/AuthUser';
import { Auth } from './components/navbar/auth';

function App() {

  const { getToken } = AuthUser();

  if (!getToken()) {
    return <Guest />
  }
  return (
    <>
      <Auth />
    </>
  );
}

export default App;
