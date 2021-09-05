import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';

export const CustomInput = styled.input`
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

export const CustomButton = styled(Button)`
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

export const DropdownMenu = styled(Paper)`
  && {
    border-radius: 0;
    color: #242424;
    font-size: 13px;
    font-weight: 500;
    border-top: 1px solid rgb(225, 225, 225);
    box-shadow: rgb(0 0 0 / 28%) 0px 6px 12px 0px;
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
