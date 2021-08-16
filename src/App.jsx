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
import Device from "./pages/Divice.page";
import WatchTv from "./pages/WatchTv.page";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import UserProfile from "./pages/UserProfile.page";
import SearchResult from "./pages/SearchResult.page";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/details/:id" component={Details} />
              <Route exact path="/playing/:contentId" component={ContentPlay} />
              <Route exact path="/watch-tv" component={WatchTv} />
              <Route exact path="/profile" component={UserProfile} />
              <Route exact path="/device" component={Device} />
              <Route exact path="/search-results" component={SearchResult} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
