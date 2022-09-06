import io from "socket.io-client";
import { ThemeProvider } from "styled-components";
import { theme } from "./lib/theme/index";
import SelectionOverView from "./Components/SelectionOverView/index";
import Dashboard from "./Components/Dashboard/index";
import { AppDiv } from "./App.style";
import { useCallback, useEffect, useState } from "react";
import { UserContext } from "./universal-components/Context";

const socket = io.connect("http://localhost:4000");

function App() {
  const [createRooms, setCreateRooms] = useState([]);
  const [userData, setUserData] = useState({});
  const [showDashboard, setShowDashboard] = useState(false);
  const [userCollection, setUserCollection] = useState([]);
  const [userMessage, setUserMessage] = useState({});
  const [messageList, setMessageList] = useState([]);
  const [roomData, setRoomData] = useState({});
  const [showCreateRoom, setShowCreateRooms] = useState(false);

  const handleChangeOnRoom = (e) => {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
    console.log(name);
  };

  const handleChangeShowCreateRoom = useCallback(() => {
    setShowCreateRooms(!showCreateRoom);
  }, [showCreateRoom]);

  const handleCreateRoom = useCallback(() => {
    console.log("david");
    if (Object.keys(roomData).length > 1) {
      socket.emit("create-room", roomData);
      setCreateRooms((createRooms) => [...createRooms, roomData]);
      handleChangeShowCreateRoom();
    }
  }, [socket, roomData]);

  const HandleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    },
    [userData]
  );

  const JoinRoom = useCallback(() => {
    const roomCheck = createRooms.find(
      (item) => item.room === userData.room
    );
    if (Object.keys(userData).length > 1 && roomCheck) {
      socket.emit("join_room", userData);
      setShowDashboard(!showDashboard);
    }
  }, [userData]);

  const CloseDashbaord = useCallback(() => {
    setShowDashboard(false);
  }, []);

  const HandleUserMessageChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setUserMessage({ ...userMessage, [name]: value });
    },
    [userMessage]
  );

  const SendMessage = useCallback(() => {
    const collection = {
      ...userData,
      ...userMessage,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };
    if (Object.keys(userMessage).length > 0) {
      socket.emit("send_message", collection);
      setMessageList((messageList) => [...messageList, collection]);
    }
  });

  useEffect(() => {
    socket.on("receive-room", (data) => {
      if (!createRooms.find((item, key) => item.room === data.room)) {
        setCreateRooms((createRooms) => [...createRooms, data]);
      }
    });
  }, [socket]);

  useEffect(() => {
    if (showDashboard) {
      socket.on("totaluser", (data) => {
        console.log(data);
        setUserCollection((userCollection) => [...userCollection, data]);
      });

      socket.on("receive_message", (data) => {
        console.log(data);
        if (data) {
          setMessageList((messageList) => [...messageList, data]);
        }
      });
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={userCollection}>
        <AppDiv>
          {!showDashboard && (
            <SelectionOverView
              socket={socket}
              HandleChange={HandleChange}
              JoinRoom={JoinRoom}
              createRooms={createRooms}
              handleChangeOnRoom={handleChangeOnRoom}
              handleCreateRoom={handleCreateRoom}
              handleChangeShowCreateRoom={handleChangeShowCreateRoom}
              showCreateRoom={showCreateRoom}
            />
          )}
          {showDashboard && (
            <Dashboard
              userDetails={userData}
              userCollection={userCollection}
              closeDashboard={CloseDashbaord}
              handleChange={HandleUserMessageChange}
              SendMessage={SendMessage}
              messageList={messageList}
            />
          )}
        </AppDiv>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
