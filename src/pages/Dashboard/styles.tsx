import tw from 'twin.macro';

export const Wrapper = tw.div`
  min-h-screen flex flex-row 
  bg-gray-100 text-gray-400
`;

export const ContentWrapper = tw.div`
  flex flex-col flex-grow 
  md:ml-0 
  transition-all duration-150 ease-in
`;

export const Nav = tw.div`
  flex flex-row
  items-center  
  p-4
`;

export const Content = tw.div`
  flex flex-col flex-grow 
  p-4
`;

export const CollapseSidebar = tw.div`
  flex md:hidden
`;

export const Button = tw.button`
  flex 
  items-center justify-center 
  h-10 w-10 
  border-transparent
`;

export const Profile = tw.div`
  flex 
  ml-auto
`;

export const Gretting = tw.div`
  flex flex-col
  text-right 
  ml-5 
`;

export const GrettingPerson = tw.div`
  truncate tracking-wide 
  text-black 
  pt-1
`;

export const GrettingPersonName = tw.span`
  font-semibold
`;

export const Rol = tw.span`
  truncate text-gray-400 leading-none 
  text-xs
  mt-1
`;

export const MainTitle = tw.h1`
  font-bold text-2xl text-gray-700
`;

export const ContentFrame = tw.div`
  flex flex-col flex-grow 
  bg-white 
  rounded 
  mt-4 p-5
`;
