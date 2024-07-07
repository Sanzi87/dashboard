'use client';
import { Flex, Heading } from '@radix-ui/themes';
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    Date: '2024-07-01',
    Amount: 999,
  },
  {
    Date: '2024-07-02',
    Amount: 0,
  },
  {
    Date: '2024-07-03',
    Amount: 331,
  },
  {
    Date: '2024-07-04',
    Amount: 600,
  },
  {
    Date: '2024-07-05',
    Amount: 639,
  },
  {
    Date: '2024-07-06',
    Amount: 1245,
  },
  {
    Date: '2024-07-07',
    Amount: 555,
  },
];

const Chart = () => {
  return (
    <Flex className='flex-col gap-5 w-full'>
      <Heading as='h2'>Weecly Recap</Heading>
      <div className='w-full h-[300px]'>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray='5 5' />
            <XAxis dataKey='Date' />
            <YAxis />
            <Tooltip contentStyle={{ color: 'black' }} />
            <Area
              type='monotone'
              dataKey='Amount'
              stroke='#084843'
              fill='#0EB39E'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Flex>
  );
};

export default Chart;
