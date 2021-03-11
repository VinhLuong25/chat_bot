import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { saveMessage } from "../Redux/messageSlice";
export default function Chatbot() {
  const [show, setShow] = useState(false);
  const saveMessages = useSelector((state) => state.message);
  console.log(saveMessages);
  const dispatch = useDispatch();
  useEffect(() => {
    eventQuery("welcomeTo");
  }, []);
  //TEXT QUERY
  const textQuery = async (text) => {
    const userText = {
      who: "user",
      content: {
        text: {
          text: text,
        },
      },
    };
    console.log(userText);
    dispatch(saveMessage(userText));

    const textQueryVariables = {
      text,
    };

    try {
      const res = await Axios.post(
        "http://localhost:5000/api/dialogflow/textQuery",
        textQueryVariables
      );
      const content = res.data.fulfillmentMessages;
      const botText = {
        id: "bot",
        content: content,
      };
      console.log(botText);
      console.log(saveMessages);
      dispatch(saveMessage(botText));
    } catch (error) {
      const text = {
        id: "bot",
        content: {
          text: {
            text: "Error, please check",
          },
        },
      };
      dispatch(saveMessage(text));
    }
  };
  // EVENT QUERY
  const eventQuery = async (event) => {
    const eventQueryVariables = {
      event,
    };
    try {
      const res = await Axios.post(
        "http://localhost:5000/api/dialogflow/eventQuery",
        eventQueryVariables
      );
      const content = res.data.fulfillmentMessages;
      let botText = {
        id: "bot",
        content: content,
      };
      console.log(botText);
      dispatch(saveMessage(botText));
    } catch (error) {
      let text = {
        id: "bot",
        content: {
          text: {
            text: "Error, please check",
          },
        },
      };
      dispatch(saveMessage(text));
    }
  };

  //HANDLE KEY PRESS
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) return alert("type something");
      textQuery(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className="chatbox">
      <div
        className={
          show ? "chatbox__support chatbox--active" : "chatbox__support"
        }
      >
        <div className="chatbox__header">
          <div className="chatbox__image"></div>
          <div className="chatbox__content">
            <h4 className="chatbot__heading">chat support</h4>
            <p className="chatbot__description">support supooty</p>
          </div>
        </div>
        <div className="messages">
          <div>
            <div className="messages__item operator">Hi!</div>
            <div className="messages__item visitor">What is it?</div>
            <div className="messages__item operator">Hi!</div>
            <div className="messages__item visitor">What is it?</div>
            <div className="messages__item operator">Hi!</div>
            <div className="messages__item visitor">What is it?</div>
            <div className="messages__item operator">Hi!</div>
            <div className="messages__item visitor">What is it?</div>
            <div className="messages__item typing typing-indicator">
              <span className="messages__dot"></span>
              <span className="messages__dot"></span>
              <span className="messages__dot"></span>
            </div>
          </div>
        </div>
        <div className="chatbox__footer">
          <input
            placeholder="Type something..."
            type="text"
            onKeyPress={handleKeyPress}
          />
          <p className="chatbox__footer__send">Send</p>
        </div>
      </div>

      <div className="chatbox__button">
        <button onClick={() => setShow(!show)}>I'm a button!</button>
      </div>
    </div>
  );
}
