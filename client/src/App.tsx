import { Switch, Route, Router } from "wouter";
import Checkout from "./pages/checkout";
import ThankYou from "./pages/thank-you";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/not-found";

const App = () => {
  return (
<Router base="/npd">
  <Switch>
    <Route path="/checkout" component={Checkout} />
    <Route path="/thank-you" component={ThankYou} />
    <Route path="/" component={LandingPage} />
    <Route component={NotFound} />
  </Switch>
</Router>
  );
};
export default App;
