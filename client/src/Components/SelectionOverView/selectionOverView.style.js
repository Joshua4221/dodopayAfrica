import styled from "styled-components";

export const SelectionDiv = styled.div`
  width: 70%;
  height: 80%;
  border-radius: 8px;
  background-color: #434cb7;
  overflow-y: auto;
  position: relative;

  .selectfirstlayout {
    width: 100%;
    padding: 10px 20px;

    .boxInput {
      width: 100%;
      color: #434cb7;
      border-radius: 8px 8px 0px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .inputbody {
        width: 48%;
        display: flex;
        flex-direction: column;

        label {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
        }

        .input {
          padding: 12px 10px;
          border: none;
          color: #434cb7;
          border-radius: 8px;
          outline: none;
          font-size: 16px;
          font-weight: 700;
        }

        @media screen and (max-width: 500px) {
          width: 100%;
          padding-bottom: 15px;
        }
      }

      @media screen and (max-width: 500px) {
        flex-direction: column;
      }
    }
  }

  .selectsecondlayout {
    width: 100%;
    height: 70%;
    padding: 0px 5px;

    .roomsbody {
      width: 100%;
      height: 100%;
      background-color: #fff;
      text-align: center;

      h2 {
        padding: 10px 0px;
        font-weight: 800;
        color: #434cb7;
      }
    }
  }

  .selectthirdlayout {
  }

  .selectfourthlayout {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .button {
      padding: 12px 10px;
      margin: 20px;
      background-color: #fff;
      border: none;
      outline: none;
      color: #434cb7;
      border-radius: 12px;
      font-size: 17px;
      font-weight: 800;
      cursor: pointer;
    }

    @media screen and (max-width: 500px) {
      position: unset;
      bottom: unset;
    }
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }

  @media screen and (max-width: 500px) {
    width: 95%;
    height: unset;
    margin: 50px 0px;
  }
`;
