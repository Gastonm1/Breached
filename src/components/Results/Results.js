import React from "react";
import { ResultsWrapper } from "./ResultStyle";

const Results = ({ hasPass, password, source }) => {
  if (hasPass === true) {
    hasPass = "True";
  } else if (hasPass === false) {
    hasPass = "False";
  } else {
    hasPass = false;
  }
  return (
    <ResultsWrapper>
      <p>Has Password: {hasPass}</p>
      <p>Password: {password}</p>
      <p>Source: {source}</p>
    </ResultsWrapper>
  );
};

export default Results;
