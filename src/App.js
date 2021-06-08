import Start from "./components/Start";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import bg from "./images/background.jpg";

import Nav from "./components/Nav";
import Informationen from "./components/Informationen";
import Eindruecke from "./components/Eindruecke";
import Preise from "./components/Preise";
import Kontakt from "./components/Kontakt";

function App() {
  return (
    <Main>
      <Nav />
      <Content>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/informationen">
            <Informationen />
          </Route>
          <Route path="/eindruecke">
            <Eindruecke />
          </Route>
          <Route path="/preise">
            <Preise />
          </Route>
          <Route path="/kontakt">
            <Kontakt />
          </Route>
        </Switch>
      </Content>
      <BG src={bg} />
    </Main>
  );
}

export default App;

const Main = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

const BG = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 10%;
  z-index: -1;
`;

const Content = styled.div`
  margin: 15vh 5vw auto auto;
  width: 45vw;
  height: 70vh;
  padding: 1rem;
`;
