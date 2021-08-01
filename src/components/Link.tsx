import { Link as RouterLink } from 'react-router-dom';
import { styled } from 'twin.macro';

const Link = styled(RouterLink)`
  relative 
   py-2 px-4
  sm:w-auto  
  text-sm 
  outline: none
`;

export default Link;
