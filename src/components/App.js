import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <TicketControl />
      {/* This is how to use a JSX comment. */}
      <hr />
    </React.Fragment>
  );
}

export default App;
