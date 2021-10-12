import {Container} from "react-bootstrap";
import Nav from "./components/ui/Nav";
import Footer from "./components/ui/Footer";

import WelcomePage from "./pages/WelcomePage";
import NewsPage from "./pages/NewsPage";
import {Route, Switch} from "react-router-dom";
import ErrorNotification from "./components/ui/ErrorNotification";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main role={"main"} className={"flex-shrink-0"}>
        <Container>
            <ErrorNotification />
          <Switch>
              <Route path={"/"} exact>
                <WelcomePage />
              </Route>
              <Route path={"/news"}>
                <NewsPage />
              </Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
