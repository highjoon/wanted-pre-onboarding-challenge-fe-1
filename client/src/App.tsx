import { Global, css } from "@emotion/react";
import reset from "emotion-reset";
import Router from "router/router";

const GlobalStyles = css`
  ${reset}
`;

const App = () => {
  return (
    <div className="App">
      <Global styles={GlobalStyles} />
      <Router />
    </div>
  );
};

export default App;
