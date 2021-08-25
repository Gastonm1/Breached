import React from "react";
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

const Breached = ({ showBreached, setShowBreached }) => {
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
                <Form action="/" method="GET" role="search">
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
                    <SearchInput type="text" />
                  </Search>
                </Form>
              </SearchSection>
              <button>Search Me.</button>
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
