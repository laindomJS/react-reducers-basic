import { Users } from './components/Users';
import { UserState } from './context/UsersState';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <UserState>
        <Users />
      </UserState>
    </div>
  )
}

export default App;
