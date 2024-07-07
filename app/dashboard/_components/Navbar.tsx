'use client';

import {
  DotsHorizontalIcon,
  GlobeIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { Flex, Heading, IconButton, TextField } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <Flex className='!justify-between items-center rounded-lg p-5 bg-zinc-900'>
      <Flex>
        <Heading className='capitalize '>{pathname.split('/').pop()}</Heading>{' '}
      </Flex>
      <Flex>
        <Flex maxWidth='250px' className='px-6 !hidden md:!flex'>
          <TextField.Root placeholder='Search…' size='2'>
            <TextField.Slot>
              <MagnifyingGlassIcon height='16' width='16' />
            </TextField.Slot>
          </TextField.Root>
        </Flex>
        <Flex className='items-center gap-4 !hidden md:!flex'>
          <MdOutlineChat size={20} className='hover:text-teal-400' />
          <MdNotifications size={20} className='hover:text-teal-400' />
          <MdPublic size={20} className='hover:text-teal-400' />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
