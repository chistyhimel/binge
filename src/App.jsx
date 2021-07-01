import { ThemeProvider } from "@material-ui/styles";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home.page";
import theme from "./theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
