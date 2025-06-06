// src/components/home/SearchDoctor.js
import React from "react";
import "./SearchDoctor.css";

const SearchDoctor = () => (
  <section className="search-doctor py-5" data-aos="fade-up">
    <div className="container text-center">
      <h2 className="mb-4">Find a Doctor</h2>
      <form
        className="d-flex justify-content-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="form-control w-50 me-2"
          placeholder="Search by name or specialty"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  </section>
);

export default SearchDoctor;
