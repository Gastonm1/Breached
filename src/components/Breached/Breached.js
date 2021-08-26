import React, { useState, useEffect } from "react";
import {
  Background,
  BreachedWrapper,
  BreachedImg,
  BreachedContent,
  CloseBreachButton,
  SearchSection,
  Form,
  Search,
  SearchIcon,
  SearchInput,
} from "./BreachedStlyes";
import { Grid } from "../Results/ResultStyle";
import Results from "../Results/Results";

const Breached = ({ showBreached, setShowBreached }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("@gmail.com");
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Effect has been run");
    getData();
  }, [query]);

  const getData = async () => {
    const response = await fetch(
      `https://breachdirectory.p.rapidapi.com/?func=auto&term=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "breachdirectory.p.rapidapi.com",
          "x-rapidapi-key":
            "7c7b17def1msh6daf3cfdf9aa73cp1734f5jsn0db3f11479c2",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      {showBreached ? (
        <Background>
          <BreachedWrapper showBreached={showBreached}>
            <BreachedImg
              src="https://images.unsplash.com/photo-1559581958-df379578606a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=647&q=80"
              alt="Photo By: Luis Villasmil"
            />
            <BreachedContent>
              <h1>Lets find out.</h1>
              <p>
                Type in either the email or username that you would like to
                check.
              </p>
              <SearchSection>
                <Form
                  action="/"
                  method="GET"
                  role="search"
                  onSubmit={getSearch}
                >
                  <Search>
                    <SearchIcon>
                      <svg
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                      </svg>
                    </SearchIcon>
                    <SearchInput
                      type="text"
                      value={search}
                      onChange={updateSearch}
                      placeholder="someone@example.com"
                    />
                  </Search>
                </Form>
              </SearchSection>
              <Grid>
                {data.result.map((result) => (
                  <Results
                    key={result.has_password}
                    hasPass={result.has_password}
                    password={result.password}
                    source={result.sources[0]}
                  ></Results>
                ))}
              </Grid>
              <button type="submit">Search</button>
            </BreachedContent>
            <CloseBreachButton
              aria-label="Close"
              onClick={() => setShowBreached((prev) => !prev)}
            />
          </BreachedWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Breached;
