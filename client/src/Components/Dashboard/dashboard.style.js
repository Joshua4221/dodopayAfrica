import styled from "styled-components";

export const DashboardDiv = styled.div`
  background-color: #3b42a2;
  width: 70%;
  height: 80%;
  border-radius: 8px;
  position: relative;

  .nav {
    border-radius: 8px 8px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    color: #fff;
    border-bottom: 1px solid #e0e0e0;

    .navtitle {
      p {
        font-size: 32px;
        font-weight: 800;

        @media screen and (max-width: 500px) {
          font-size: 22px;
          font-weight: 800;
        }
      }
    }

    .navbutton {
      button {
        padding: 12px 10px;
        background-color: #fff;
        border: none;
        outline: none;
        color: #434cb7;
        border-radius: 12px;
        font-size: 17px;
        font-weight: 800;
        cursor: pointer;

        @media screen and (max-width: 500px) {
          font-size: 15px;
          font-weight: 800;
          padding: 8px 10px;
        }
      }
    }
  }

  .dashboardbody {
    border-bottom: 1px solid #e0e0e0;
    height: 70%;
    display: flex;
    padding: 0px 5px;

    .sidebar {
      width: 30%;

      .sidebarhead {
        width: 100%;
        color: #fff;

        .sidebarroom {
          padding: 10px;
          p {
            font-size: 20px;
            font-weight: 800;
          }
        }

        .sidebarroomname {
          background-color: #434cb7;
          padding: 10px;
          p {
            font-size: 16px;
            font-weight: 600;
          }
        }
      }

      .sidebarfooter {
        margin-top: 15px;
        padding-top: 15px;
        width: 100%;
        color: #fff;

        .sidebarUser {
          padding: 1px 10px;
          p {
            font-size: 20px;
            font-weight: 800;
          }
        }

        .sidebarUsernames {
          padding: 10px;
          p {
            margin-right: 10px;
            font-size: 16px;
            font-weight: 600;
          }

          @media screen and (max-width: 500px) {
            display: flex;
            flex-wrap: wrap;
          }
        }
      }
      @media screen and (max-width: 500px) {
        width: 100%;
      }
    }

    .chatbox {
      width: 80%;
      background-color: #f0f0f0;
      @media screen and (max-width: 500px) {
        width: 100%;
        height: 60vh;
      }
    }

    @media screen and (max-width: 500px) {
      height: unset;
      flex-direction: column;
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    border-radius: 0px 0px 8px 8px;
    width: 100%;
    text-align: center;
    padding: 20px 10px;

    .footerInput {
      width: 90%;
      padding: 10px 12px;
      font-size: 15px;
      font-weight: 600;
      border: none;
      outline: none;
      border-radius: 8px 0px 0px 8px;

      @media screen and (max-width: 500px) {
        width: 80%;
      }
    }

    button {
      padding: 10px 12px;
      background-color: #f0f0f0;
      border: none;
      outline: none;
      color: #434cb7;
      border-radius: 12px;
      font-size: 15px;
      font-weight: 600;
      width: calc(100% - 90%);
      cursor: pointer;
      border-radius: 0px 8px 8px 0px;

      @media screen and (max-width: 500px) {
        width: calc(100% - 80%);
      }
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
