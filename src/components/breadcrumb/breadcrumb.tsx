import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

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

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
}

export default function Breadcrumb() {
  return (
    <StyledBreadcrumb>
      <Link color="inherit" href="/" onClick={handleClick}>
        Trang chủ
      </Link>
      <Typography color="textPrimary">
        Điện Thoại Samsung Galaxy Note 10 (8GB/256GB) - Hàng Chính Hãng
      </Typography>
    </StyledBreadcrumb>
  );
}
