'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface linkProps {
  item: {
    title: string;
    path: string;
    icon: React.JSX.Element;
  };
}

const MenuLink = ({ item }: linkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`my-1 rounded-lg p-4 flex items-center gap-2 text-white hover:text-teal-300 text-base hover:bg-zinc-700 ${
        pathname === item.path && ' bg-zinc-700 text-teal-300'
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
