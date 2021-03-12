import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledSearchInput, StyledButton, StyledSearchWrapper } from "./styled";

export const SearchInput = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearchClick = () => {
        onSearch(query);
    };

    const handleInputChange = (e) => setQuery(e.target.value);

    const handleEnterClick = (event) => {
        if (event.key === "Enter") {
            handleSearchClick();
        }
    };

    return (
        <StyledSearchWrapper>
            <StyledSearchInput
                placeholder="Search query..."
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleEnterClick}
            />
            <StyledButton onClick={handleSearchClick}>Search</StyledButton>
        </StyledSearchWrapper>
    );
};

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
