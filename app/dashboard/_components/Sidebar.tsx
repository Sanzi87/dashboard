import React from 'react';
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from 'react-icons/md';
import MenuLink from './MenuLink';
import { Box, Button, Flex } from '@radix-ui/themes';
import Image from 'next/image';

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />,
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className='sticky p-5 bg-zinc-900 w-full'>
      <Flex className='items-center gap-5 mb-5'>
        <Image
          className='rounded-full object-cover mb-7'
          src='/avatar.svg'
          alt='User'
          width={50}
          height={50}
        />
        <Flex className='flex-col '>
          <span className='font-semibold'>John Doe</span>
          <span className='text-xs text-zinc-400'>Administrator</span>

          <Button className='!mt-2'>
            <MdLogout />
            Logout
          </Button>
        </Flex>
      </Flex>

      <ul>
        {menuItems.map((cat) => (
          <li className='text-zinc-400 text-sm my-3' key={cat.title}>
            <span>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
