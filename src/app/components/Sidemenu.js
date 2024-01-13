'use client';
import { useState } from "react";

import { Sidebar } from "flowbite-react";
import {HiInbox, HiViewBoards, HiChartPie} from "react-icons/hi"

const Sidemenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Sidebar className={`flex-shrink-0 inset-y-0 left-0 transform  transition duration-500 ease-in-out md:translate-x-0 z-30 ${
      isMobileMenuOpen ? " " : "-translate-x-full"
    }`}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiViewBoards}
            label="Pro"
            labelColor="dark"
          >
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            Inbox
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default Sidemenu