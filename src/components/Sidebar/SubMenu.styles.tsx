import tw from 'twin.macro';
import styled from 'styled-components';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

export const Item = styled.div<{ active: boolean }>`
  ${tw`flex flex-row 
  items-center h-10 rounded-lg 
  cursor-pointer 
    hover:bg-gray-500 
    hover:text-white
  px-3
  `}

  ${({ active }) => active && tw`bg-gray-400 text-white`}
`;

export const IconWrapper = tw.div`
  flex 
  items-center justify-center 
  text-lg
`;

export const MenuTitle = tw.div`
  pointer-events-none select-none 
  font-medium
  ml-3
`;

export const ArrowWrapper = tw.div`
  flex items-center h-6 
  ml-auto
`;

export const SidebarSubmenuList = tw.div`
  flex flex-col     
  w-full
  focus:outline-none
  ml-5 pl-4 
`;

export const SidebarSubmenu = styled(Link)<{
  active: boolean;
}>`
  ${tw`
    flex flex-row 
    items-center h-10 rounded-lg
    text-gray-500
    hover:text-white
    select-none 
    my-px px-3
  `}

  ${({ active }) => active && tw`text-white font-bold`}
`;

export const StyledChevronDownIcon = styled(ChevronDownIcon)<{
  open: boolean;
}>`
  ${tw`
    h-5 w-5 
    transition duration-300
  `}

  ${({ open }) => open && tw`transform rotate-180`}
`;
