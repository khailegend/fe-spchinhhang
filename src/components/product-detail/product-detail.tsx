import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ReactImageMagnify from 'react-image-magnify';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import {
  DetailWrapper,
  ProductImage,
  ProductAction,
  Advertisement,
  BoxPanel,
  ProductInfo,
  Header,
  Title,
  Brand,
  Author,
  Body,
  Price,
  TitlePrice,
  PriceBox,
  Description,
  TitleDescription,
  Content,
  ColorSelection,
  RadioGroup,
  ColorSelected,
  ButtonBuy
} from './product-detail.style';

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

function allyProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`
  };
}

export default function ProductDetails() {
  const [value, setValue] = React.useState(1);
  const [color, setColor] = React.useState('');

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeColor = (event) => {
    if (event.target.checked) {
      setColor(event.target.value);
    }
  };
  return (
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
                },
                enlargedImageContainerStyle: {
                  zIndex: 1
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
                },
                enlargedImageContainerStyle: {
                  zIndex: 1
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
                },
                enlargedImageContainerStyle: {
                  zIndex: 1
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
          <span className="title">Chia s???:</span>
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
            Th??ch
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
      <ProductInfo>
        <Header>
          <Brand>
            <span>
              Th????ng hi???u:
              <Author href="#">Samsung</Author>
            </span>
          </Brand>
          <Title>??i???n Tho???i Samsung Galaxy Note 10 Plus (256GB/12GB) - H??ng Ch??nh H??ng</Title>
        </Header>
        <Body>
          <Price>
            <TitlePrice>Gi?? tham kh???o:</TitlePrice>
            <PriceBox>13.490.000 ???</PriceBox>
          </Price>
          <Description>
            <TitleDescription>M?? t??? s???n ph???m</TitleDescription>
            <Content>
              Ch??nh h??ng, Nguy??n seal, M???i 100% C??ng ngh??? m??n h??nh: Super AMOLED ????? ph??n gi???i: Full
              HD+ (1080 x 2280 Pixels) M??n h??nh r???ng: 6.3 inch M???t k??nh c???m ???ng: Corning Gorilla
              Glass 6 Camera Sau: Ch??nh 12 MP & Ph??? 12 MP, 16 MP Camera Tr?????c: 10MP CPU: Exynos 9825
              8 nh??n 64-bit B??? Nh???: 256GB RAM: 8GB B???o m???t n??ng cao: M??? kh??a b???ng khu??n m???t, Qu??t
              m???ng m???t, M??? kho?? v??n tay d?????i m??n h??nh
            </Content>
          </Description>
          <ColorSelection>
            <ColorSelected>
              <span className="label">M??u:</span>
              <span className="colorSelected">{color}</span>
            </ColorSelected>
            <RadioGroup>
              <label className="radio-item">
                <input
                  type="radio"
                  name="productColor"
                  value="??nh c???c quang"
                  onClick={(e) => handleChangeColor(e)}
                  defaultChecked
                />
                <div className="imgGroup">
                  <img
                    className="thumbnail"
                    src="https://salt.tikicdn.com/cache/100x100/ts/product/fa/ae/22/4801321264bc821a84f283ffb0035074.jpg"
                  />
                  <span className="labelRadio">??nh c???c quang</span>
                </div>
              </label>

              <label className="radio-item">
                <input
                  type="radio"
                  name="productColor"
                  value="??en pha l??"
                  onClick={(e) => handleChangeColor(e)}
                />
                <div className="imgGroup">
                  <img
                    className="thumbnail"
                    src="https://salt.tikicdn.com/cache/100x100/ts/product/ff/1b/cc/7bfc520143393ade5c76480b679f3868.jpg"
                  />
                  <span className="labelRadio">??en pha l??</span>
                </div>
              </label>
            </RadioGroup>
          </ColorSelection>
          <ButtonBuy
            variant="contained"
            color="primary"
            endIcon={<TouchAppIcon fontSize="large" />}>
            Ch???n mua t???i ????y
          </ButtonBuy>
        </Body>
      </ProductInfo>
    </DetailWrapper>
  );
}
