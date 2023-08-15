import React, { useState, useEffect, useRef, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdArrowBack } from "react-icons/md";
import { WebSocketContext } from "WebSocketContext";
import sendIcon from "../../assets/send.png";
import TextField from "@mui/material/TextField";

import "pages/sidebar/css/ChatRoom.css";
import { switchView } from "store/ChatViewStore";

// 닉네임에 색주기
function getNicknameColor(userNickname) {
  let hash = 0;
  if(!userNickname){
    return;
  }
  for (let i = 0; i < userNickname.length; i++) {
    hash = userNickname.charCodeAt(i) + ((hash << 5) - hash);
  }

  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
}

function ChatPrivateRoom() {
  const { client } = useContext(WebSocketContext);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const {roomId,toUser} = useSelector((state) => state.global.currentPrivateRoom);
  const messages = useSelector((state) => state.global.currentPrivateChat);
  const selectedRoomCount = useSelector((state) => {
    const selectedRoom = state.global.privateRooms.find(
      (room) => room.id === roomId
    );
    return selectedRoom ? selectedRoom.count : null;
  });

  const chatContainerRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  // 이전 채팅 가져오기
  const getPreviousChats = () => {
    if (client == null) return;

    const messageData ={
        type: "GET_PRIVATE_ROOM_CHAT",
        data: 
        {
            roomId:roomId,
        }
    }

    client.send(`/app/global.one`, {}, JSON.stringify(messageData));
  };

  // 채팅 보내기
  const sendMessage = () => {
    if (!message.trim()) {
      alert("메시지를 입력하세요."); // 알림을 표시하거나 원하는 대응 로직을 넣을 수 있습니다.
      return;
    }

    const messageData ={
        type: "SEND_PRIVATE_ROOM",
        data: 
        {
            roomId:roomId,
            message: message,
            toUser: toUser,
        }
    }

    client.send(
      `/app/global.one`,
      {},
      JSON.stringify(messageData)
    );
    setMessage("");
  };

  useEffect(()=>{
    getPreviousChats()
  },[roomId])


  // 채팅방 화면 가장 아래로
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-room-container">
      <div className="header">
        <div className="back-button-container">
          <button
            className="back-button"
            onClick={() => dispatch(switchView("ChatList"))}>
            <MdArrowBack size={24} />
          </button>
        </div>
        <div className="chat-title">
          {toUser}님과의 채팅
        </div>
        <div className="back-button-container" />
      </div>
      <div className="chat-container" ref={chatContainerRef}>
        {messages.map((chatMessage, index) => (
          <div key={index}>
            {" "}
            {/* Move the key prop here */}
            <div
              className="chat-user-id"
              style={{
                color: getNicknameColor(chatMessage?.userNickname),
              }}>
              {chatMessage.userNickname}
            </div>
            <div className="chat-message-container">
              <p className="chat-message">{chatMessage.message}</p>
              <span className="chat-time">
                {new Date(chatMessage.timestamp).getHours()}:
                {new Date(chatMessage.timestamp).getMinutes()}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="input-button-container">
        {/* <input
                    className="chatInput"
                    
                /> */}
        <TextField
          id="standard-basic"
          className="chatInput"
          variant="standard"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {/* <button className="sendButton" onClick={sendMessage}>
                    Send
                </button> */}
        <img
          src={sendIcon}
          className="sendButton"
          onClick={sendMessage}
          alt="send"
        />
      </div>
    </div>
  );
}

export default ChatPrivateRoom;