import { useEffect, useState } from "react";
import { searchPhotos } from "services/http";

export function useSearhPhotos({ query, page, perPage }) {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        if (query) {
            searchPhotos({ query, page, perPage }).then((data) => {
                setPhotos(data?.results);
            });
        } else {
            setPhotos([]);
        }
    }, [query, page, perPage]);

    return photos;
}
