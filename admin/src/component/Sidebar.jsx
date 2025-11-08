import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useNavigate, useLocation } from 'react-router-dom'

const sidebarLinks = [
  {
    label: "Add Items",
    icon: <IoIosAddCircleOutline className="w-5 h-5" />,
    path: "/add"
  },
  {
    label: "List Items",
    icon: <FaRegListAlt className="w-5 h-5" />,
    path: "/lists"
  },
  {
    label: "View Orders",
    icon: <SiTicktick className="w-5 h-5" />,
    path: "/orders"
  }
]

function Sidebar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <aside className="hidden md:block w-[230px] lg:w-[320px] min-h-screen fixed left-0 top-0 pt-[90px] pb-8 bg-card border-r border-border">
      <nav className="flex flex-col gap-1 pl-6 pr-2 mt-2">
        {sidebarLinks.map(link => {
          const isActive = pathname === link.path
          return (
            <button
              key={link.label}
              className={`
                flex items-center gap-3 px-4 py-3 my-1 rounded-full transition
                ${isActive
                  ? "bg-navbar text-primary-foreground shadow"
                  : "bg-transparent text-foreground hover:bg-background hover:text-accent"}
              `}
              style={{ outline: isActive ? "2px solid var(--color-border)" : undefined }}
              onClick={() => navigate(link.path)}
            >
              {link.icon}
              <span className="font-medium text-lg">{link.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
