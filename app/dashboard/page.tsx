import { Flex } from '@radix-ui/themes';
import React from 'react';
import Cards from './_components/Cards';
import Orders from './_components/Orders';
import Chart from './_components/Chart';

const Dashboard = () => {
  return (
    <Flex className='mt-5 flex-col gap-5 w-full'>
      <Flex className='gap-5 rounded-lg !hidden 2xl:!flex'>
        <Cards />
      </Flex>
      <Flex className='bg-zinc-900 p-5 rounded-lg'>
        <Orders />
      </Flex>
      <Flex className='bg-zinc-900 p-5 rounded-lg'>
        <Chart />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
