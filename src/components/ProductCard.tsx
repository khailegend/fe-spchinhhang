import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Link from 'next/link';

const StyledCard = styled(Card)`
  && {
    display: flex;
    padding: 12px;
    color: rgb(36, 36, 36);
    text-decoration: none;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    box-shadow: none;
  }
`;

const StyledCardContent = styled(CardContent)`
  && {
    padding: 12px 0 0 0;
  }
`;

const Title = styled(Typography)`
  && {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 13px;
    font-weight: 400;
    margin: 0px 0px 4px;
    line-height: 20px;
    word-break: break-word;
  }
`;

const Review = styled.div`
  display: flex;
  align-items: center;
`;
const StyleRating = styled(Rating)`
  && {
    font-size: 14px;
  }
`;
const Quanlity = styled.span`
  font-size: 11px;
  color: #787878;
  ::before {
    content: '|';
    padding: 0 5px;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const DiscountPrice = styled.span`
  font-size: 15px;
  line-height: 24px;
  font-weight: 600;
  margin: 0px 8px 0px 0px;
`;

const Discount = styled.span`
  font-size: 13px;
  line-height: 20px;
  border-radius: 2px;
  background: rgb(255, 66, 78);
  color: white;
  padding: 0px 2px;
`;

export default function ProductCard() {
  const [value, setValue] = React.useState<number | null>(2.5);

  return (
    <Link href="/products/1">
      <StyledCard>
        <CardMedia
          component="img"
          image="https://salt.tikicdn.com/cache/200x200/ts/product/96/d3/61/8d33e59e47c723186d2aa2c1f4bc10fb.jpg"
          title="Contemplative Reptile"
        />
        <StyledCardContent>
          <Title
            variant="body2"
            title="Điện Thoại Samsung Galaxy Note 10 (8GB/256GB) - Hàng Chính Hãng">
            Điện Thoại Samsung Galaxy Note 10 (8GB/256GB) - Hàng Chính Hãng
          </Title>
          <Review>
            <StyleRating name="read-only" value={value} readOnly size="small" />
            <Quanlity>Đã bán 960</Quanlity>
          </Review>
          <Price>
            <DiscountPrice>11.590.000 ₫</DiscountPrice>
            <Discount>-50%</Discount>
          </Price>
        </StyledCardContent>
      </StyledCard>
    </Link>
  );
}
