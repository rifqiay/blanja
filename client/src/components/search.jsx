import React, { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../asset/style/global.css";
import SearchIcon from "../asset/img/Search.svg";
import axios from "axios";

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/search",
      search: "?key=" + search,
    });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <Form className="d-flex input-search" onSubmit={handleSearch}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 "
          aria-label="Search"
          onChange={handleChange}
        />
        <Button className="btn-light" type="submit">
          <img src={SearchIcon} alt="" />
        </Button>
      </Form>
    </div>
  );
};

export default Search;
