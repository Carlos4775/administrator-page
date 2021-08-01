import tw, { styled } from 'twin.macro';

export const Wrapper = tw.div`
  min-h-screen flex
  items-center justify-center
  py-12 px-4
  sm:px-6
  lg:px-8
  bg-gray-50
`;

export const LoginContent = tw.div`
  flex 
  items-center justify-center 
  h-auto 
  py-12 px-4 
  sm:px-6 sm:w-3/5 
  lg:px-8
  bg-gray-50 
  rounded-md shadow-xl 
`;

export const LogoContainer = tw.div`
  bg-cover
  w-full 
  h-auto 
  rounded-l-lg
`;

export const FormContainer = tw.div`
  max-w-xs 
  w-full 
  space-y-8
`;

export const Logo = tw.img`
  mx-auto
  w-auto
`;

export const Form = tw.form`
  mt-8 space-y-6
`;

export const FormFields = tw.div`
  rounded-md 
  -space-y-px
  shadow-sm 
`;

export const FormField = tw.div`
  relative 
  w-full
  flex flex-wrap 
  items-stretch
  mb-3
`;

export const RemembermeContainer = tw.div`
  flex 
  items-center
`;

export const RemembermeLabel = tw.label`
  ml-2 
  block 
  text-sm 
  text-gray-900
`;

export const FormButtonContainer = tw.div`
  flex 
  items-center 
  justify-between 
  flex-wrap
  sm:flex 
`;

export const FieldIcon = styled.span`
  ${tw`
    justify-center 
    absolute 
    h-full 
    z-10 
    w-8   
    pl-3 
    py-3
    items-center 
    font-normal 
    text-center 
    color[blue] 
    bg-transparent 
    rounded 
    text-base 
    leading-snug 
  `}

  & > * {
   ${tw`
     h-5
     w-5 
     text-black 
     group-hover:text-indigo-400
   `}
  }
`;
