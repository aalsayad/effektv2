'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarLink = ({ name, icon, href, setLeftSidebar }) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(false);

  useEffect(() => {
    if (!pathname) return;
    setActiveLink(pathname === href);
  }, [pathname]);

  return (
    <Link
      href={href}
      onClick={() => setLeftSidebar(false)}
      className={`group p-3 flex items-center gap-4 text-sm hover:bg-[#22232B] rounded-lg transition-effekt ${
        activeLink && 'bg-[#22232B]'
      }`}
    >
      {icon}
      {name}
    </Link>
  );
};

export default SidebarLink;
