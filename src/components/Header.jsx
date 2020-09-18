import React from 'react';
import header from '../static/header.gif';
import { Link } from 'react-router-dom';
import { Box, Image } from '@chakra-ui/core';

const Header = () => {
  return (
    <Box pb={6} as={Link} to="/">
      <Image
        src={header}
        alt="A24 intro"
        size="100%"
        rounded="0.5rem"
        loading="lazy"
      />
    </Box>
  );
};

export default Header;
