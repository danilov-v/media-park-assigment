const TOKEN = "token";
const SUGGESTIONS = "suggestions";

export const setToken = (token) => {
    localStorage.setItem(TOKEN, token);
};

export const getToken = () => localStorage.getItem(TOKEN);

export const getSuggestions = () => {
    const data = localStorage.getItem(SUGGESTIONS);
    return data ? JSON.parse(data) : [];
};

export const setSuggestions = (query) => {
    const sugest = getSuggestions() || [];
    sugest.unshift(query);
    const newArr = [...new Set(sugest)];
    newArr.slice(0, 5);

    localStorage.setItem(
        SUGGESTIONS,
        JSON.stringify([...new Set(sugest)].slice(0, 5)),
    );
};
