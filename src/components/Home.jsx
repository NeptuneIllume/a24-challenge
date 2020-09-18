import React from 'react';
import { useSWRInfinite } from 'swr';
import { SimpleGrid, Box, Text, Button } from '@chakra-ui/core';
import fetcher from '../utils/swr-fetcher';

import Card from './Card';

const a24id = '41077';
const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;
const sortBy = 'popularity.desc';
const PAGE_SIZE = 20; // this API only support 20 as page size

const Home = ({ watchlist, toggleWatchlist }) => {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) =>
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=true&page=${
        index + 1
      }&with_companies=${a24id}&append_to_response=genre`,
    fetcher
  );

  const movies = data ? [].concat(...data) : [];

  const moviesArray = movies.map((issue) => {
    return issue.results;
  });

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');

  const isEmpty = data?.[size - 1] && data?.[size - 1].results.length === 0;

  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < PAGE_SIZE);
  return (
    <>
      {isEmpty ? <Text>No movies found.</Text> : null}
      <SimpleGrid maxW="100%" columns={[1, 2, 3]} gap={6}>
        {moviesArray.flat().map((movie) => {
          return (
            <Card
              movie={movie}
              key={movie.id}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
            />
          );
        })}
      </SimpleGrid>
      <Box py={6} d="flex" justifyContent="center">
        <Button
          leftIcon="download"
          variantColor="teal"
          variant="solid"
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore
            ? 'Loading...'
            : isReachingEnd
            ? 'No more movies :('
            : 'Load more'}
        </Button>
      </Box>
    </>
  );
};

export default Home;
