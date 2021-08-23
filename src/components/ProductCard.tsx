import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
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

export default function ProductCard() {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);
  const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+'
  };
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
          <div>
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
          </div>
        </StyledCardContent>
      </StyledCard>
    </Link>
  );
}
