import { Box, Flex, Text, Avatar, Link } from '@radix-ui/themes';
import React from 'react';
import {
  MdAttachMoney,
  MdComment,
  MdDocumentScanner,
  MdEditDocument,
  MdGrading,
  MdPages,
  MdShoppingBag,
  MdSupervisedUserCircle,
} from 'react-icons/md';

const cardItems = [
  {
    title: 'Users',
    path: '/dashboard/users',
    icon: <MdSupervisedUserCircle size={55} />,
    total: 19,
  },
  {
    title: 'Products',
    path: '/dashboard/products',
    icon: <MdShoppingBag size={55} />,
    total: 254,
  },
  {
    title: 'Orders',
    path: '/dashboard/orders',
    icon: <MdAttachMoney size={55} />,
    total: 19,
  },
  {
    title: 'Pages',
    path: '/dashboard/pages',
    icon: <MdGrading size={55} />,
    total: 13,
  },
  {
    title: 'Posts',
    path: '/dashboard/posts',
    icon: <MdEditDocument size={55} />,
    total: 54,
  },
  {
    title: 'Comments',
    path: '/dashboard/comments',
    icon: <MdComment size={55} />,
    total: 37,
  },
];

const Cards = () => {
  return (
    <Flex gap='5' className='w-full'>
      {cardItems.map((card) => (
        <Box
          width='16%'
          className='bg-zinc-900 rounded-xl hover:bg-zinc-800 hover:rounded-xl'
          key={card.title}
        >
          <Box key={card.title} className='p-8'>
            <Flex gap='3' align='center'>
              {card.icon}
              <Box>
                <Text as='div' size='3' weight='bold'>
                  {card.title}
                </Text>
                <Text as='div' size='7' color='gray'>
                  <Link
                    underline='none'
                    color='teal'
                    className=''
                    href={card.path}
                  >
                    {card.total}
                  </Link>
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default Cards;
