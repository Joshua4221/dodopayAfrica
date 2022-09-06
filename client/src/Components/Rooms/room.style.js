import styled from "styled-components";

export const RoomsDiv = styled.div`
  height: 100%;

  .RoomContainer {
    height: 100%;

    .containerWrapper {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      .cardbody {
        background-color: #434cb7;
        width: 250px;
        padding: 10px;
        border-radius: 8px;
        margin: 15px;

        .title {
          p {
            color: #fff;
            font-size: 18px;
            font-weight: 800;
          }
        }
        .modifiers {
          display: flex;
          padding: 10px 0px;

          .iconbody {
            border: 1px solid #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 2px;
            padding: 5px;
            cursor: pointer;
            margin-right: 10px;

            .icon {
              color: #fff;
              font-size: 24px;
            }
          }
        }

        @media screen and (max-width: 500px) {
          width: 100%;
        }
      }
    }
  }
`;
