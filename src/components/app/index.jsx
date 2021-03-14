import React, { useState, useCallback } from "react";
import { Card } from "components/card";
import { Header } from "components/header";
import { Hero } from "components/hero";
import { Plug } from "components/plug";
import { SearchInput } from "components/search-input";
import { useSearhPhotos } from "hooks/use-search-photos";
import { useAuth } from "hooks/use-auth";
import {
    StyledPageWrapper,
    StyledContentWrapper,
    StyledGridLayout,
    StyledSpinner,
} from "./styled";
import { getSuggestions } from "services/localstorage";

export const App = React.memo(() => {
    const [query, setQuery] = useState(getSuggestions()[0] || "");
    const [page, setPage] = useState(1);

    const { photos, loading, hasMore, refetch } = useSearhPhotos({
        query,
        page,
    });

    const isAuthorized = useAuth();

    const onPhotoUpdate = useCallback(() => {
        refetch(query);
    }, [query, refetch]);

    const fetchMore = useCallback(() => setPage(page + 1), [page]);

    return (
        <StyledPageWrapper>
            <StyledContentWrapper>
                <Header isAuthorized={isAuthorized} />
                <Hero>
                    <SearchInput onSearch={setQuery} />
                </Hero>

                {!photos.length && !loading ? (
                    <Plug query={query} />
                ) : (
                    <StyledGridLayout>
                        {photos.map(
                            ({ id, alt_description, urls, liked_by_user }) => (
                                <Card
                                    key={id}
                                    id={id}
                                    isAuthorized={isAuthorized}
                                    onPhotoUpdate={onPhotoUpdate}
                                    likedByUser={liked_by_user}
                                >
                                    <img
                                        alt={alt_description}
                                        src={urls.small}
                                    />
                                </Card>
                            ),
                        )}
                    </StyledGridLayout>
                )}
                {hasMore && <button onClick={fetchMore}>Get more</button>}
                {loading && <StyledSpinner width={30} height={30} />}
            </StyledContentWrapper>
        </StyledPageWrapper>
    );
});
