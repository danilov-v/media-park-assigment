import { useEffect, useState, useCallback } from "react";
import { searchPhotos } from "services/http";
import { setSuggestions, getSuggestions } from "services/localstorage";

export function useSearhPhotos({ query, page }) {
    const [photos, setPhotos] = useState([]);
    const [loading, setIsLoading] = useState(false);

    const fetchPhotos = useCallback(async (query, page) => {
        setIsLoading(true);

        const data = await searchPhotos({
            query,
            page,
        });

        setIsLoading(false);
        setPhotos(data?.results || []);
    }, []);

    // preload last query
    useEffect(() => {
        const lastQuery = getSuggestions()[0];

        if (lastQuery) {
            fetchPhotos(lastQuery, 1, 20);
        }
    }, [fetchPhotos]);

    // handle user interaction
    useEffect(() => {
        if (query) {
            setSuggestions(query);
            fetchPhotos(query, page);
        } else {
            setPhotos([]);
        }
    }, [query, page, fetchPhotos]);

    return { photos, refetch: fetchPhotos, loading };
}
