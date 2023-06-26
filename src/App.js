
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from './components/GistList';
import { LoadinContext, MyContext } from "./MyContext";
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true)

  return (
    <MyContext.Provider value={{ data, setData }}>
      <LoadinContext.Provider value={{ load, setLoad }}>
        <Wrapper className="App" data-testid="app">
          <Header />
          <GlobalStyles />
          <GistList />
        </Wrapper>
      </LoadinContext.Provider>
    </MyContext.Provider>

  );
}

const Wrapper = styled.div`
      font-size: 14px;
      line-height: 1.5;
      `;

export default App;
