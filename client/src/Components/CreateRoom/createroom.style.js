import styled from "styled-components";

export const CreateRoomDiv = styled.div`
  z-index: 10;
  padding-top: 100px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  .createRoom {
    margin: auto;
    background-color: #fff;
    position: relative;
    padding: 0;
    outline: 0;
    width: 600px;
    padding: 20px;
    border-radius: 8px;

    .iconbody {
      cursor: pointer;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        color: #434cb7;
        font-size: 32px;
      }
    }

    .createRoombody {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      .createRoombodyD {
        width: 75%;
        text-align: center;
        border: 1px solid #434cb7;
        border-radius: 8px;

        .createRoomHeader {
          p {
            font-size: 32px;
            font-weight: 800;
            color: #434cb7;
          }
        }

        .inputbody {
          width: 80%;
          margin: 0px auto;
          padding: 15px 0px;

          label {
            display: block;
            text-align: left;
            color: #434cb7;
            font-weight: 700;
            font-size: 18px;
            padding: 10px 0px;
          }

          .input {
            width: 100%;
            color: #434cb7;
            font-weight: 700;
            font-size: 16px;
            padding: 10px 12px;
            border-radius: 8px;
            outline: none;
            border: 1px solid #434cb7;
          }
        }

        .buttonbody {
          button {
            padding: 12px 10px;
            margin: 20px;
            background-color: #434cb7;
            border: none;
            outline: none;
            color: #fff;
            border-radius: 12px;
            font-size: 17px;
            font-weight: 800;
            cursor: pointer;
          }
        }
      }
    }

    @media screen and (max-width: 700px) {
      width: 95%;
    }

    @media screen and (max-width: 500px) {
      width: 98%;
    }
  }
`;
