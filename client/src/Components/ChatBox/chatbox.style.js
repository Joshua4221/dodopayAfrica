import styled from "styled-components";

export const ChatBoxDiv = styled.div`
  width: 100%;
  padding: 30px;
  height: 100%;

  .MessageContainer {
    height: 100%;

    .chatbody {
      width: 100%;
      background-color: #fff;
      padding: 5px 20px;
      border-radius: 8px;
      margin-bottom: 20px;

      .chatHeader {
        display: flex;
        align-items: center;

        .chatname {
          margin-right: 10px;
          font-size: 18px;
          font-weight: 600;
          color: #434cb7;
        }

        .chattime {
          font-size: 14px;
          font-weight: 400;
          color: #434cb7;
        }
      }

      .chattextbody {
        p {
          font-size: 14px;
          font-weight: 500;
          color: #000;
        }
      }
    }
  }
`;
