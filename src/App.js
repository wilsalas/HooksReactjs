import React, {
  useState,
  useEffect,
  useContext,
  createContext
} from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './store/Store';

function App() {

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => {
          setCount(count + 1)

        }}>
          Test {count}
        </button>

        <CountProvider>
          <br />
          <Counter />
          <br />
          <Test />
        </CountProvider>
      </header>
    </div>
  );
}



// redux in react hooks


const CountContext = createContext()

const CountProvider = ({ children }) => {
  const contextValue = Store();
  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  )
}

const useCount = () => {
  const contextValue = useContext(CountContext)
  return contextValue;
}


function Counter() {
  const [state, dispatch] = useCount() //useReducer(reducer, initialState);

  return (
    <>
      Counter: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

function Test() {
  const [state] = useCount()

  // const [state, dispatch] = Store()


  useEffect(() => {

    document.title = `title changed ${state.count}`
  })



  return (
    <div>
      DATO DE STATE: {state.count} 
    </div>
  );
}


export default App;
