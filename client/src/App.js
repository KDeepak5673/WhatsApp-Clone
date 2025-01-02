import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter} from 'react-router-dom';

// Component
import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId = '363975543480-b19ujq3ho6igccluhfne7e91fhhp8vvj.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <AccountProvider>
          <Messenger/>
        </AccountProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
