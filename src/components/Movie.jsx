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

  const imagesPath = 'https://image.tmdb.org/t/p/';
  const imagesSize = 'w500';

  return (
    <Flex pt={6} flexDirection={['column', 'column', 'row']}>
      <Box>
        <Image
          src={`${imagesPath}${imagesSize}${data.poster_path}`}
          alt={data.title}
          fallbackSrc="https://picsum.photos/350/525"
          rounded="0.5rem"
          maxW="400px"
        />
      </Box>
      <Box pl={6}>
        <Heading pt={{ base: 4, md: 0 }}>{data.title}</Heading>
        <Text pt={2} pb={16} fontStyle="italic">
          {data.tagline}
        </Text>
        <Text py={2}>
          <b>Overview:</b> {data.overview}
        </Text>
        <Text py={2}>{/* {add directors here} */}</Text>
        <Text py={2}>
          <b>Genres: </b>
          {/* {add genres here} */}
        </Text>
        <Text py={2}>
          <b>Top billed cast: </b>
        </Text>
        <List>
          {/* {list the top billed cast here. They are in `cast.cast`} */}
        </List>
      </Box>
    </Flex>
  );
};

export default Movie;
