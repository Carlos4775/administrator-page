import tw from 'twin.macro';

export const FooterWrapper = tw.div`
  absolute bottom-0 left-0
  px-4 py-6 
`;

export const Copyright = tw.p`
  text-sm text-gray-600
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright>
        Carlos Torres <br />© 2021 All Rights Reserved
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
