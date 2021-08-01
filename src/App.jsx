import { ThemeProvider } from "@material-ui/styles";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home.page";
import theme from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";
import Login from "./pages/Login.page";
import NotFound from "./pages/NotFound.page";
import Details from "./pages/Details.page";
import ContentPlay from "./pages/ContentPlay.page";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/details/:id" component={Details} />
            <Route exact path="/playing/:contentId" component={ContentPlay} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
