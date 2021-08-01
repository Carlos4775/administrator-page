import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div<{ open: boolean }>`
  ${tw`
    fixed
      sm:static
    w-screen
      sm:w-64
    h-screen
    transform transition-transform duration-150 ease-in
      sm:translate-x-0
    bg-black
  `}

  ${({ open }) => !open && tw`-translate-x-full`}
`;
