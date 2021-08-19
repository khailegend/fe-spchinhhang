import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';

const SearchInput = styled(Autocomplete)`
  && {
    background-color: #ffffff;
    margin-left: 16px;
  }
`;

const CustomInput = styled.input`
  padding: 0 10px;
  font-family: Roboto;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  ::-webkit-input-placeholder {
    color: #a8a8a8;
  }
`;

const CustomButton = styled(Button)`
  && {
    padding: 0px 20px;
    background: #0d5cb6;
    font-size: 13px;
    text-transform: none;
    color: white;
    border-radius: 0px 2px 2px 0px;
    font-weight: 500;
    :hover {
      background: #106ad1;
    }
    img {
      margin-right: 8px;
    }
  }
`;

const DropdownMenu = styled(Paper)`
  && {
    color: #242424;
    font-size: 13px;
    font-weight: 500;
    .popularSearch {
      border-color: #f2f2f2;
      border-style: solid none none;
      border-width: 1px 0px 0px;
      .container {
        padding: 8px 12px 12px;
        .heading {
          display: flex;
          align-items: center;
          padding-bottom: 8px;
          span {
            font-size: 15px;
            line-height: 24px;
          }
          img {
            margin-right: 8px;
            width: 20px;
            height: 20px;
          }
        }
        .inner {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 8px;
          line-height: 16.1px;
          .item {
            display: flex;
            background: #fafafa;
            text-decoration: none;
            cursor: pointer;
            :hover {
              box-shadow: #000000 0px 1px 2px 0px;
            }
            .thumb {
              margin-right: 8px;
              width: 38px;
              height: 38px;
            }
            .title {
              margin: 4px 0;
              line-height: 16px;
              font-size: 12px;
            }
          }
        }
      }
    }
    .highlightSearch {
      border-color: #f2f2f2;
      border-style: solid none none;
      border-width: 1px 0px 0px;
      .container {
        padding: 8px 12px 12px;
        .heading {
          display: flex;
          align-items: center;
          padding-bottom: 8px;
          span {
            font-size: 15px;
            line-height: 24px;
          }
        }
        .inner {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr;
          gap: 12px 8px;
          line-height: 16.1px;
          .item {
            display: flex;
            flex-direction: column;
            text-decoration: none;
            cursor: pointer;
            :hover {
              box-shadow: rgb(0 0 0 / 10%) 0px 0px 20px;
            }

            .thumb-wrap {
              padding: 0 40px;
              .thumb {
                width: 100%;
                padding-top: 100%;
                border-radius: 36%;
                position: relative;
                overflow: hidden;
                background: rgb(250, 250, 250);
                img {
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }
              }
            }
            .title {
              font-size: 12px;
              line-height: 16px;
              padding: 6px 0px 0px;
              text-align: center;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
  }
`;

export default function SearchBar() {
  const data = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 }
  ];

  return (
    <>
      <SearchInput
        freeSolo
        options={data}
        getOptionLabel={(option) => option.title}
        style={{ width: 590 }}
        size="small"
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <CustomInput
              {...params.inputProps}
              placeholder="Tìm kiếm sản phẩm, danh mục hay thương hiệu mong muốn..."
            />
          </div>
        )}
        PaperComponent={({ children }) => (
          <DropdownMenu>
            {children}
            <div className="popularSearch">
              <div className="container">
                <div className="heading">
                  <img
                    src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png"
                    alt="iconsearch"
                  />
                  <span>Tìm Kiếm Phổ Biến</span>
                </div>
                <div className="inner">
                  <a className="item">
                    <img
                      className="thumb"
                      src="https://salt.tikicdn.com/cache/280x280/media/catalog/product/1/3/1328628757472.u2409.d20161007.t094849.81387.jpg"
                      alt="icon-search"
                    />
                    <span className="title">Máy sấy tóc</span>
                  </a>
                  <a className="item">
                    <img
                      className="thumb"
                      src="https://salt.tikicdn.com/cache/280x280/ts/product/4c/0f/be/5c7c1d44ecc6b77e5b5fc955bb097c25.jpg"
                      alt="icon-search"
                    />
                    <span className="title">Đèn xong tinh dầu</span>
                  </a>
                  <a className="item">
                    <img
                      className="thumb"
                      src="https://salt.tikicdn.com/cache/280x280/ts/product/31/b4/24/dd840f481bf026534f9afd43203cbca0.jpg"
                      alt="icon-search"
                    />
                    <span className="title">Đầm ngủ</span>
                  </a>
                  <a className="item">
                    <img
                      className="thumb"
                      src="https://salt.tikicdn.com/cache/280x280/ts/product/31/b4/24/dd840f481bf026534f9afd43203cbca0.jpg"
                      alt="icon-search"
                    />
                    <span className="title">Đầm ngủ</span>
                  </a>
                  <a className="item">
                    <img
                      className="thumb"
                      src="https://salt.tikicdn.com/cache/280x280/ts/product/31/b4/24/dd840f481bf026534f9afd43203cbca0.jpg"
                      alt="icon-search"
                    />
                    <span className="title">Đầm ngủ</span>
                  </a>
                  <a className="item">
                    <img
                      className="thumb"
                      src="https://salt.tikicdn.com/cache/280x280/ts/product/31/b4/24/dd840f481bf026534f9afd43203cbca0.jpg"
                      alt="icon-search"
                    />
                    <span className="title">Đầm ngủ</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="highlightSearch">
              <div className="container">
                <div className="heading">
                  <span>Danh Mục Nổi Bật</span>
                </div>
                <div className="inner">
                  <a className="item">
                    <div className="thumb-wrap">
                      <div className="thumb">
                        <img
                          src="https://salt.tikicdn.com/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png"
                          alt="iconSearch"
                        />
                      </div>
                    </div>
                    <span className="title">Điện thoại - Máy tính bảng</span>
                  </a>
                  <a className="item">
                    <div className="thumb-wrap">
                      <div className="thumb">
                        <img
                          src="https://salt.tikicdn.com/cache/280x280/ts/product/6b/ad/bd/62cf0954806cb556d7040181ce1cdc1e.jpg"
                          alt="iconSearch"
                        />
                      </div>
                    </div>
                    <span className="title">Đèn xông</span>
                  </a>
                  <a className="item">
                    <div className="thumb-wrap">
                      <div className="thumb">
                        <img
                          src="https://salt.tikicdn.com/cache/280x280/ts/product/5c/e7/68/26838e18d7f96d562d828980520019d2.jpg"
                          alt="iconSearch"
                        />
                      </div>
                    </div>
                    <span className="title">Thiết kế cho bé</span>
                  </a>
                  <a className="item">
                    <div className="thumb-wrap">
                      <div className="thumb">
                        <img
                          src="https://salt.tikicdn.com/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png"
                          alt="iconSearch"
                        />
                      </div>
                    </div>
                    <span className="title">Đồ chơi - Mẹ &amp; Bé</span>
                  </a>
                  <a className="item">
                    <div className="thumb-wrap">
                      <div className="thumb">
                        <img
                          src="https://salt.tikicdn.com/ts/category/a6/9f/45/460fdecbbe0f81da09c7da37aa08f680.png"
                          alt="iconSearch"
                        />
                      </div>
                    </div>
                    <span className="title">Thực phẩm tươi sống</span>
                  </a>
                  <a className="item">
                    <div className="thumb-wrap">
                      <div className="thumb">
                        <img
                          src="https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png"
                          alt="iconSearch"
                        />
                      </div>
                    </div>
                    <span className="title">Làm đẹp - sức khỏe</span>
                  </a>
                  <a className="item">
                    <div className="thumb-wrap">
                      <div className="thumb">
                        <img
                          src="https://salt.tikicdn.com/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png"
                          alt="iconSearch"
                        />
                      </div>
                    </div>
                    <span className="title">Điện gia dụng</span>
                  </a>
                  <a className="item">
                    <div className="thumb-wrap">
                      <div className="thumb">
                        <img
                          src="https://salt.tikicdn.com/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png"
                          alt="iconSearch"
                        />
                      </div>
                    </div>
                    <span className="title">Thời trang nữ</span>
                  </a>
                </div>
              </div>
            </div>
          </DropdownMenu>
        )}
      />
      <CustomButton>
        <img
          src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
          alt="icon-search"
          width="20px"
          height="20px"
        />
        Tìm Kiếm
      </CustomButton>
    </>
  );
}
