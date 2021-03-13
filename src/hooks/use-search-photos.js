import { useEffect, useState, useCallback } from "react";
import { searchPhotos } from "services/http";
import { setSuggestions } from "services/localstorage";

export function useSearhPhotos({ query, page, perPage }) {
    const [photos, setPhotos] = useState([]);
    const [loading, setIsLoading] = useState(false);

    const fetchPhotos = useCallback(async () => {
        setIsLoading(true);
        const data = await searchPhotos({ query, page, perPage });
        setIsLoading(false);

        setPhotos(data?.results || []);
    }, [query, page, perPage]);

    useEffect(() => {
        if (query) {
            setSuggestions(query);
            fetchPhotos(query, page, perPage);
        } else {
            setPhotos([]);
        }
    }, [query, page, perPage, fetchPhotos]);

    return { photos, refetch: fetchPhotos, loading };
}
