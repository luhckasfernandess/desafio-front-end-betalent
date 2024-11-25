import React from "react";
import { SearchInputProps } from "../models/SearchInputProps";

export const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, setSearchTerm }) => {

  return (
    <input
      type="text"
      placeholder="Pesquisar"
      value={searchTerm}
      onChange={({ target }) => setSearchTerm(target.value)}
    />
  );
};