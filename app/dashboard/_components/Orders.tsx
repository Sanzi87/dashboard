import { Badge, Flex, Heading, Table } from '@radix-ui/themes';
import React from 'react';

const Orders = () => {
  return (
    <Flex direction='column' gap='5' className='w-full'>
      <Heading as='h2'>Latest Orders</Heading>
      <Table.Root variant='surface' className='w-full'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Daniel Sousa</Table.RowHeaderCell>
            <Table.Cell>
              <Badge color='blue'>New</Badge>
            </Table.Cell>
            <Table.Cell>2024-07-07</Table.Cell>
            <Table.Cell>555</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Alex Sousa</Table.RowHeaderCell>
            <Table.Cell>
              <Badge color='orange'>In progress</Badge>
            </Table.Cell>
            <Table.Cell>2024-07-06</Table.Cell>
            <Table.Cell>1245</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Emma Sousa</Table.RowHeaderCell>
            <Table.Cell>
              <Badge color='green'>Complete</Badge>
            </Table.Cell>
            <Table.Cell>2024-07-05</Table.Cell>
            <Table.Cell>514</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Susanne Sousa</Table.RowHeaderCell>
            <Table.Cell>
              <Badge color='red'>Canceled</Badge>
            </Table.Cell>
            <Table.Cell>2024-07-05</Table.Cell>
            <Table.Cell>125</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Sofia Sousa</Table.RowHeaderCell>
            <Table.Cell>
              <Badge color='green'>Complete</Badge>
            </Table.Cell>
            <Table.Cell>2024-07-04</Table.Cell>
            <Table.Cell>600</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
            <Table.Cell>
              <Badge color='green'>Complete</Badge>
            </Table.Cell>
            <Table.Cell>2024-07-03</Table.Cell>
            <Table.Cell>331</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
            <Table.Cell>
              <Badge color='green'>Complete</Badge>
            </Table.Cell>
            <Table.Cell>2024-07-01</Table.Cell>
            <Table.Cell>999</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Flex>
  );
};

export default Orders;
