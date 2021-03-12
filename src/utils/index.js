import { getSuggestions } from "services/localstorage";

export const getFilteredSuggestions = (query) => {
    const sugest = getSuggestions();
    const partialMatch = (str) => str.match(query);

    return sugest.filter(partialMatch);
};
