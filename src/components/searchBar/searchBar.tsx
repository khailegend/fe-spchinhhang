import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CustomInput, DropdownMenu, CustomButton } from './searchBar.style';

interface Props {
  searchResult: any[];
}

export const SearchBar: React.FC<Props> = ({ searchResult }) => {
  return (
    <>
      <Autocomplete
        freeSolo
        options={searchResult}
        getOptionLabel={(option) => option.title}
        style={{ width: 590, marginLeft: '16px' }}
        size="small"
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <CustomInput
              {...params.inputProps}
              placeholder="Tìm kiếm sản phẩm, danh mục hay thương hiệu mong muốn..."
            />
          </div>
        )}
        renderOption={(option) => (
          <React.Fragment>
            {option.title} {option.year}
          </React.Fragment>
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
};
