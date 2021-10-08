import {Container} from "react-bootstrap";
import Nav from "./components/ui/Nav";
import Footer from "./components/ui/Footer";

import WelcomePage from "./pages/WelcomePage";
import TestPage from "./pages/TestPage";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main role={"main"} className={"flex-shrink-0"}>
        <Container>
          <Switch>
              <Route path={"/"} exact>
                <WelcomePage />
              </Route>
              <Route path={"/test"}>
                <TestPage />
              </Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
