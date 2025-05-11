import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch, Route, Router } from "wouter";
import Checkout from "./pages/checkout";
import ThankYou from "./pages/thank-you";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/not-found";
const App = () => {
    return (_jsx(Router, { base: "/npd", children: _jsxs(Switch, { children: [_jsx(Route, { path: "/checkout", component: Checkout }), _jsx(Route, { path: "/thank-you", component: ThankYou }), _jsx(Route, { path: "/", component: LandingPage }), _jsx(Route, { component: NotFound })] }) }));
};
export default App;
