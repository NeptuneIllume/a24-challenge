import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '../utils/swr-fetcher';

import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/core';

const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;

const Movie = (params) => {
  const { id } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`,
    fetcher
  );

  // Cast gets the crew (director, producer, etc) of the movie and also the cast
  const { data: cast } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/casts?api_key=${apiKey}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!cast) return <div>loading cast...</div>;

  const directors = cast.crew.filter((item) => item.department === 'Directing');
  const director = directors.filter((item) => item.job === 'Director');
  const directorList = director.map(x => { return x.name}).join(', ');
  const genreList = data.genres.map(x => { return x.name}).join (', ');
  const castList = cast.cast.slice(0,5);
  const releaseYear = `${data.release_date && data.release_date !== undefined ?
    data.release_date.substring(0,4) :
    'Release Year Unknown'}`;


  const imagesPath = 'https://image.tmdb.org/t/p/';
  const imagesSize = 'w500';
  const fallbackSrc = 'https://picsum.photos/350/525';

  return (
    <Flex pt={6} flexDirection={['column', 'column', 'row']}>
      <Box>
        <Image
          src={`${data.poster_path !== null ? 
            imagesPath + imagesSize + data.poster_path :
            fallbackSrc}`}
          alt={data.title}
          rounded="0.5rem"
          maxW="400px"
        />
      </Box>
      <Box pl={6}>
        <Heading pt={{ base: 4, md: 0 }}>
          {data.title} <Text as="span" fontWeight="100">({releaseYear})</Text>
        </Heading>
        <Text pt={2} pb={16} fontStyle="italic">
          {data.tagline}
        </Text>
        <Text py={2}>
          <b>Overview:</b> {data.overview}
        </Text>
        <Text py={2}>
          <b>Director:</b> {directorList ? directorList : 'Unknown'} 
        </Text>
        <Text py={2}>
          <b>Genres: </b> {genreList}
        </Text>
        <Text py={2}>
          <b>Top billed cast: </b>
        </Text>
        <List>
          {Array(castList.length)
            .fill('')
            .map((_, i) => (
              <ListItem key={i}>
                <ListIcon icon="star" color="yellow.500" />
                {castList[i].name} {castList[i].character && <i>(as {castList[i].character})</i>}
              </ListItem>
            ))}
        </List>
      </Box>
    </Flex>
  );
};

export default Movie;
