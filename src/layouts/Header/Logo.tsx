import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  padding-right: 35px;
`;

const LinkLogo = styled.a`
  width: 120px;
  height: 40px;
  display: block;
`;

const ImgLogo = styled.img`
  width: 100%;
  height: 100%;
`;
export default function Logo() {
  return (
    <StyledLogo>
      <LinkLogo href="#">
        <ImgLogo
          src="https://spchinhhang.s3.ap-southeast-1.amazonaws.com/logo.svg?fbclid=IwAR1MJVChTXCdQ-vVZfNDkfFZUZ321nXv-tGD5798gJQhMGFX9mLDjLzyU0w"
          alt="logo"
        />
      </LinkLogo>
    </StyledLogo>
  );
}
