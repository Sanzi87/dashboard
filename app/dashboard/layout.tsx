import React from 'react';
import Sidebar from './_components/Sidebar';
import Navbar from './_components/Navbar';
import { Flex } from '@radix-ui/themes';
import Footer from './_components/Footer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex className=''>
      <Flex className='w-56'>
        <Sidebar />
      </Flex>
      <Flex className=' flex-col flex-1 m-5'>
        <Navbar />
        {children}
        <Footer />
      </Flex>
    </Flex>
  );
}
