import React, { useState } from "react";
import Breached from "./components/Breached/Breached";
import { Container, Button } from "./components/MainPage";
import { GlobalStyle } from "./globalStyles";

function App() {
  const [showBreached, setShowBreached] = useState(false);

  const openBreach = () => {
    setShowBreached((prev) => !prev);
  };

  return (
    <Container>
      <h1>Have I Been Breached?</h1>
      <Button onClick={openBreach}>Check My Data</Button>
      <Breached showBreached={showBreached} setShowBreached={setShowBreached} />
      <GlobalStyle />
    </Container>
  );
}

export default App;
