import { Users } from './components/Users';
import { UserState } from './context/UsersState';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserState>
        <Users />
      </UserState>
    </div>
  )
}

export default App;
