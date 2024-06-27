import React from 'react';
import Sidebar from '../login/_components/Sidebar';
import Navbar from '../login/_components/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />
      <Navbar />
      Dashboard layout
    </div>
  );
}
