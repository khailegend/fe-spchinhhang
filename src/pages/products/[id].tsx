import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ReactImageMagnify from 'react-image-magnify';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';

const ProductDetailWrapper = styled.div`
  padding: 10px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1270px;
  margin: auto;
`;

const StyledBreadcrumb = styled(Breadcrumbs)`
  && {
    font-size: 13px;
    font-weight: 300;
    padding-bottom: 10px;
    color: #999999;
    .MuiBreadcrumbs-ol {
      .MuiBreadcrumbs-li {
        .MuiTypography-root {
          font-size: 13px;
          font-weight: 300;
          color: #999999;
          cursor: pointer;
        }
      }
    }
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  background: white;
`;

const ProductImage = styled.div`
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

const ProductAction = styled.div`
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

const Advertisement = styled.div`
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

const ProductInfo = styled.div``;

const BoxPanel = styled(Box)`
  && {
    padding: 20px 18px;
  }
`;
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}>
      {value === index && <BoxPanel>{children}</BoxPanel>}
    </div>
  );
}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
}

function allyProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`
  };
}

export default function ProductDetail() {
  const [value, setValue] = React.useState(1);

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <ProductDetailWrapper>
      <Container>
        <StyledBreadcrumb>
          <Link color="inherit" href="/" onClick={handleClick}>
            Trang chủ
          </Link>
          <Typography color="textPrimary">
            Điện Thoại Samsung Galaxy Note 10 (8GB/256GB) - Hàng Chính Hãng
          </Typography>
        </StyledBreadcrumb>
        <DetailWrapper>
          <ProductImage>
            <Paper square elevation={0}>
              <TabPanel value={value} index={1}>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: 'zoom image',
                      isFluidWidth: true,
                      src: 'https://salt.tikicdn.com/cache/400x400/ts/product/72/78/52/59d3c9c4d0ef6b711a991ff09547a4ed.png',
                      width: 444,
                      height: 444
                    },
                    largeImage: {
                      src: 'https://salt.tikicdn.com/cache/400x400/ts/product/72/78/52/59d3c9c4d0ef6b711a991ff09547a4ed.png',
                      width: 1000,
                      height: 1000
                    }
                  }}
                />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: 'zoom image',
                      isFluidWidth: true,
                      src: 'https://salt.tikicdn.com/cache/400x400/ts/product/b0/72/0b/7eddc6895106cee5a6cbfa21244be429.jpg',
                      width: 444,
                      height: 444
                    },
                    largeImage: {
                      src: 'https://salt.tikicdn.com/cache/400x400/ts/product/b0/72/0b/7eddc6895106cee5a6cbfa21244be429.jpg',
                      width: 1000,
                      height: 1000
                    }
                  }}
                />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: 'zoom image',
                      isFluidWidth: true,
                      src: 'https://salt.tikicdn.com/cache/400x400/ts/product/f8/ec/9f/83f54a256c74c906d19659caffcd070d.jpg',
                      width: 444,
                      height: 444
                    },
                    largeImage: {
                      src: 'https://salt.tikicdn.com/cache/400x400/ts/product/f8/ec/9f/83f54a256c74c906d19659caffcd070d.jpg',
                      width: 1000,
                      height: 1000
                    }
                  }}
                />
              </TabPanel>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                scrollButtons="auto"
                variant="scrollable"
                onChange={handleChangeTab}
                aria-label="disabled tabs example">
                <Tab
                  icon={
                    <img
                      src="https://salt.tikicdn.com/cache/100x100/ts/product/96/d3/61/8d33e59e47c723186d2aa2c1f4bc10fb.jpg"
                      alt="img-tab"
                    />
                  }
                  value={1}
                  {...allyProps(1)}
                />
                <Tab
                  icon={
                    <img
                      src="https://salt.tikicdn.com/cache/100x100/ts/product/78/cc/a6/f5fa90d105b0e29bbc0c02bfc0a550ee.jpg"
                      alt="img-tab"
                    />
                  }
                  value={2}
                  {...allyProps(2)}
                />
                <Tab
                  icon={
                    <img
                      src="https://salt.tikicdn.com/cache/100x100/ts/product/db/fa/ab/5145cc19430fea2845b9efb09dbab8bf.jpg"
                      alt="img-tab"
                    />
                  }
                  value={3}
                  {...allyProps(3)}
                />
                <Tab
                  icon={
                    <img
                      src="https://salt.tikicdn.com/cache/100x100/ts/product/96/d3/61/8d33e59e47c723186d2aa2c1f4bc10fb.jpg"
                      alt="img-tab"
                    />
                  }
                  value={1}
                  {...allyProps(1)}
                />
                <Tab
                  icon={
                    <img
                      src="https://salt.tikicdn.com/cache/100x100/ts/product/96/d3/61/8d33e59e47c723186d2aa2c1f4bc10fb.jpg"
                      alt="img-tab"
                    />
                  }
                  value={1}
                  {...allyProps(1)}
                />
                <Tab
                  icon={
                    <img
                      src="https://salt.tikicdn.com/cache/100x100/ts/product/96/d3/61/8d33e59e47c723186d2aa2c1f4bc10fb.jpg"
                      alt="img-tab"
                    />
                  }
                  value={1}
                  {...allyProps(1)}
                />
              </Tabs>
            </Paper>
            <ProductAction>
              <span className="title">Chia sẻ:</span>
              <span className="shareSocial">
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-facebook.svg"
                  alt="icon-share"
                />
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-messenger.svg"
                  alt="icon-share"
                />
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-twitter.svg"
                  alt="icon-share"
                />
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-pinterest.svg"
                  alt="icon-share"
                />
              </span>
              <span className="like">
                <Rating
                  defaultValue={0}
                  max={1}
                  name="enjoy-product"
                  icon={<FavoriteIcon fontSize="inherit" />}
                />
                Thích
              </span>
            </ProductAction>
            <Advertisement>
              <a href="#">
                <img
                  src="https://salt.tikicdn.com/ts/tka/ca/7c/eb/78c53a98e3c4c3d155f57537a9ab80a5.png"
                  alt="adv-image"
                />
              </a>
            </Advertisement>
          </ProductImage>
          <ProductInfo>product info</ProductInfo>
        </DetailWrapper>
      </Container>
    </ProductDetailWrapper>
  );
}
