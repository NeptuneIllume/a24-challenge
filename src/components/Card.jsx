import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Badge, Image, Icon } from '@chakra-ui/core';


const Card = ({ movie, watchlist, toggleWatchlist }) => {
  const imagesPath = 'https://image.tmdb.org/t/p/';
  const imagesSize = 'w500';
  const fallbackSrc = 'https://picsum.photos/350/525';

  const property = {
    id: movie.id,
    imageUrl: `${movie.poster_path !== null ? 
      imagesPath + imagesSize + movie.poster_path :
      fallbackSrc  }`,  // just a fallback in case the movie has no poster
    backdrop: `${imagesPath}${imagesSize}${movie.backdrop_path}`,
    imageAlt: `${movie.title} poster`,
    title: `${movie.title}`,
    overview: `${movie.overview}`,
    popularity: `${movie.popularity}`,
    reviewCount: `${movie.vote_count}`,
    rating: `${movie.vote_average}`,
    release: `${movie.release_date && movie.release_date !== undefined ?
      movie.release_date :
      'Unknown'}`
  };

  return (
    <Box
      maxW="md"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      boxShadow="md"
      as={Link}
      to={`/movie/${movie.id}`}
    >
      <Image
        p="6"
        pb="0"
        src={property.imageUrl}
        alt={property.imageAlt}
      />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            Release date: {property.release}
          </Box>
          {new Date(property.release) > new Date() ? (
            <Badge ml="2" rounded="full" px="2" variantColor="teal">
              New
            </Badge>
          ) : (
            ''
          )}
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>{property.overview}</Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(10)
            .fill('')
            .map((_, i) => (
              <Icon
                name="star"
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
