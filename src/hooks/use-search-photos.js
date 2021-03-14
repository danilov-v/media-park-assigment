import { useEffect, useState, useCallback } from "react";
import { searchPhotos } from "services/http";
import { setSuggestions } from "services/localstorage";
import { usePrevious } from "hooks/use-previous";

const DEFAULT_PHOTOS = [];

export function useSearhPhotos({ query, page }) {
    const [photos, setPhotos] = useState(DEFAULT_PHOTOS);
    const [loading, setIsLoading] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const prevPage = usePrevious(page);

    const fetchPhotos = useCallback(async (query, page, isNextPage) => {
        setIsLoading(true);
        const data = await searchPhotos({
            query,
            page,
        });

        setIsLoading(false);
        setTotalCount(data.total);

        isNextPage
            ? setPhotos((photos) => [...photos, ...data?.results])
            : setPhotos(data?.results || DEFAULT_PHOTOS);
    }, []);

    // handle user interaction
    useEffect(() => {
        if (query) {
            setSuggestions(query);
            fetchPhotos(query, page, page !== prevPage);
        } else {
            setPhotos(DEFAULT_PHOTOS);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, page, fetchPhotos]);

    return {
        photos,
        refetch: fetchPhotos,
        loading,
        hasMore: totalCount > photos.length,
    };
}
