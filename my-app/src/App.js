import logo from './logo.svg';
import './App.css';

function userName(user) {
  return user.fristName + '   ' + user.lastName
}

const user = {
  fristName: '小兰',
  lastName: '毛毛',
}


const e = <h2>8888</h2>



function App() {
  return (
    <h1>
      Hello,{userName(user)}!
    </h1>
  );
}

export default App;
