import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  // onChange function
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  // form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // setting up search form for the home page
  return (
    <section className="section secrch">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">seach your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
