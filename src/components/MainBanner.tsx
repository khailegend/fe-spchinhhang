import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledBanner = styled(Grid)`
  && {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
const GridRight = styled(Grid)`
  width: 824px;
  height: 274px;
`;

const GridLeft = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  width: 408px;
  height: 274px;
  overflow: hidden;
`;
const ImgLink = styled.a`
  object-fit: contain;
  img {
    border-radius: 4px;
    width: 100%;
  }
`;

const StyleSlider = styled(Slider)`
  .slick-arrow {
    height: 55px;
    opacity: 0.3;
    padding: 5px 20px 10px 10px;
    border-radius: 5px 0 0 5px;
    :hover {
      opacity: 1;
    }
    &.slick-prev {
      left: 0;
      top: 40%;
      z-index: 1;
      background-image: url('https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png');
      background-repeat: no-repeat;
      background-size: cover;
      transform: rotate(180deg);
      ::before {
        content: '';
      }
    }
    &.slick-next {
      right: 0;
      background-image: url('https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png');
      background-repeat: no-repeat;
      background-size: cover;
      ::before {
        content: '';
      }
    }
  }
  .slick-dots {
    bottom: 10px;
    display: flex;
    width: 100%;
    li {
      button {
        ::before {
          font-size: 9px;
          color: white;
        }
      }
    }
  }
`;

export default function MainBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <StyledBanner>
      <Grid container spacing={1}>
        <GridRight item xs={8}>
          <StyleSlider {...settings}>
            <ImgLink href="#">
              <img
                src="https://salt.tikicdn.com/cache/w1080/ts/banner/59/e0/d5/99ad7554b768b95f19c97efb21ab6358.png"
                alt="banner-img"
              />
            </ImgLink>
            <ImgLink href="#">
              <img
                src="https://salt.tikicdn.com/cache/w1080/ts/banner/df/ea/6a/5391d355c4236dc8cf28b35e4985ccde.png"
                alt="banner-img"
              />
            </ImgLink>
            <ImgLink href="#">
              <img
                src="https://salt.tikicdn.com/cache/w1080/ts/banner/92/89/98/2dce99a7b0e3c2f79f340cfaeb7c0613.png"
                alt="banner-img"
              />
            </ImgLink>
          </StyleSlider>
        </GridRight>
        <Grid item xs={4}>
          <GridLeft>
            <ImgLink href="#">
              <img
                src="https://salt.tikicdn.com/cache/w400/ts/banner/68/d8/07/bcd7719fbd365ae23846c3ddb22343f9.png"
                alt="banner-img"
              />
            </ImgLink>
          </GridLeft>
        </Grid>
      </Grid>
    </StyledBanner>
  );
}
