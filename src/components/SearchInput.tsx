import React from "react";
import { SearchInputProps } from "../models/SearchInputProps";

export const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, setSearchTerm }) => {

  return (
    <div className="title-and-search-input">
      <h1>Funcionários</h1>
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    </div>
  );
};