import { ChatEngine } from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

function App() {

  if(!localStorage.getItem('username')) {
    return <LoginForm />
  }

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    window.location.reload();
  }

  return (
    <div className="App">
      <div height="5vh" style={{textAlign: 'right'}}>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <ChatEngine 
          height="95vh"
          projectID="95ad89a4-7b36-4eb1-83d9-eba553fec2cf"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
