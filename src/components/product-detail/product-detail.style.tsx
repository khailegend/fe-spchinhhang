import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export const DetailWrapper = styled.div`
  display: flex;
  background: white;
`;

export const ProductImage = styled.div`
  && {
    border-right: 1px solid #f4f4f4;
    .MuiPaper-root {
      .MuiBox-root {
        width: 444px;
        height: 444px;
      }
      .MuiTabs-root {
        width: 444px;
        .MuiTabs-flexContainer {
          .MuiButtonBase-root {
            min-width: 72px;
            .MuiTab-wrapper {
              img {
                width: 64px;
              }
            }
          }
        }
      }
    }
  }
`;

export const ProductAction = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  padding-left: 18px;
  .title {
    font-size: 15px;
    line-height: 24px;
    color: rgb(36, 36, 36);
    margin-right: 5px;
  }
  .shareSocial {
    display: flex;
    align-items: center;
    img {
      margin: 0 5px 0 5px;
    }
  }
  .like {
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 24px;
    color: rgb(36, 36, 36);
    ::before {
      content: '|';
      margin: 0 10px;
      color: #999999;
    }
    .MuiRating-root {
      .MuiRating-label {
        .MuiRating-iconFilled,
        .MuiRating-iconHover {
          color: #ff3d47;
        }
      }
    }
  }
`;

export const Advertisement = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 360px;
  height: 120px;
  overflow: hidden;
  margin: 24px auto 40px;
  position: relative;
  a {
    text-decoration: none;
    img {
      width: 360px;
      height: 120px;
      overflow: hidden;
    }
  }
`;

export const BoxPanel = styled(Box)`
  && {
    padding: 20px 18px;
  }
`;

export const ProductInfo = styled.div`
  padding-left: 20px;
  padding-right: 28px;
`;

export const Header = styled.div`
  padding: 16px 28px 16px 0;
`;

export const Brand = styled.div`
  font-size: 12px;
  font-weight: 500;
  padding-bottom: 5px;
`;

export const Author = styled.a`
  text-decoration: none;
  padding-left: 5px;
  color: #0d5cb6;
`;

export const Title = styled.span`
  margin: 10px 0 10px 0;
  font-size: 24px;
  color: #242424;
  font-weight: 300;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;
export const Price = styled.span`
  display: flex;
  flex-direction: column;
`;
export const TitlePrice = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-style: italic;
  padding-bottom: 5px;
`;
export const PriceBox = styled.span`
  padding: 15px;
  font-size: 32px;
  font-weight: 600;
  color: white;
  width: 60%;
  background: linear-gradient(100deg, rgb(255, 66, 78), rgb(253, 130, 10));
  border-radius: 5px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 32px 16px 0;
`;

export const TitleDescription = styled.span`
  padding-bottom: 5px;
  font-weight: 600;
  font-size: 16px;
`;
export const Content = styled.span`
  font-size: 14px;
  color: #242424;
  line-height: 21px;
  text-align: justify;
  text-indent: 20px;
`;

export const ColorSelection = styled.div``;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  .radio-item {
    margin-right: 10px;
    max-width: 140px;
    background: #fafafa;
    [type='radio'] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }
    [type='radio'] + .imgGroup {
      cursor: pointer;
      border: 1px solid white;
      border-radius: 5px;
      &:hover {
        border: 1px solid #0d5cb6;
      }
    }
    [type='radio']:checked + .imgGroup {
      border: 1px solid #0d5cb6;
      background: #e5f2ff;

      :after {
        position: absolute;
        top: 0;
        right: 0;
        content: url('https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/selected-variant-indicator.svg');
      }
    }

    input {
    }
    .imgGroup {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      .thumbnail {
        padding: 3px;
        width: 60px;
        height: 60px;
      }
      .labelRadio {
        margin: 6px 8px;
        font-size: 13px;
        color: #242424;
      }
    }
  }
`;

export const ColorSelected = styled.div`
  padding: 5px 0;
  .label {
    font-size: 14px;
  }
  .colorSelected {
    font-size: 14px;
    margin-left: 5px;
    color: #0d5cb6;
  }
`;

export const ButtonBuy = styled(Button)`
  && {
    margin: 32px 0;
    padding: 15px 0;
    width: 30%;
    font-weight: 500;
    background: #ff424e;
    :hover {
      background: #e57373;
    }
  }
`;
