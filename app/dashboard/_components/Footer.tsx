import { Box, Flex, Text } from '@radix-ui/themes';
import React from 'react';

const Footer = () => {
  return (
    <Flex className='!justify-between items-center font-semibold mt-7'>
      <Text>Created by Dala Software</Text>
      <Text>GNU General Public License</Text>
    </Flex>
  );
};

export default Footer;
