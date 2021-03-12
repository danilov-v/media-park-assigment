import React, { useState, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import { useOnClickOutside } from "hooks/use-click-utside";
import { getFilteredSuggestions } from "utils";
import {
    StyledSearchInput,
    StyledButton,
    StyledSearchWrapper,
    StyledMenu,
    StyledMenuItem,
} from "./styled";

export const SearchInput = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const wrapperRef = useRef(null);

    const handleSearchClick = () => {
        onSearch(query);
    };

    const handleOpenMenu = () => setMenuOpen(true);
    const handleCloseMenu = () => setMenuOpen(false);

    const handleSugestClick = (suggest) => (e) => {
        setQuery(suggest);
        onSearch(query);
        handleCloseMenu();
    };

    const handleInputChange = (e) => setQuery(e.target.value);

    const handleEnterClick = (event) => {
        if (event.key === "Enter") {
            handleSearchClick();
        }
    };

    const suggestions = useMemo(() => getFilteredSuggestions(query), [query]);

    // USED TO CLOSE MENU ON INPUT onBlur
    // cant use onBlur handler couse onBlure event fired before onClick StyledMenuItem
    useOnClickOutside(wrapperRef, () =>
        menuOpen ? handleCloseMenu() : undefined,
    );

    return (
        <StyledSearchWrapper ref={wrapperRef}>
            <StyledSearchInput
                placeholder="Search query..."
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleEnterClick}
                onFocus={handleOpenMenu}
            />
            <StyledMenu open={menuOpen && suggestions.length !== 0}>
                {suggestions.map((suggest) => (
                    <StyledMenuItem
                        key={suggest}
                        onClick={handleSugestClick(suggest)}
                    >
                        {suggest}
                    </StyledMenuItem>
                ))}
            </StyledMenu>
            <StyledButton onClick={handleSearchClick}>Search</StyledButton>
        </StyledSearchWrapper>
    );
};

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
