import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, MoreHorizontal, Menu } from 'lucide-react';

const HeroDropdown = ({ options = [] }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setOpen((prev) => !prev);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="transition scroll-smooth hover:cursor-pointer text-gray-300"
        title="Menu"
      >
        <Menu size={30} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-lg z-50">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={option.onClick}
              className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroDropdown;
