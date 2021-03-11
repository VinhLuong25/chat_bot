import React from "react";
import Chatbot from "./Chatbot/Chatbot";
import "./index.scss";
import Title from "./Component/Title";
import Banner from "./Component/Banner";
import ImageLink from "./Component/ImageLink";
import Contact from "./Component/Contact";
import Header from "./Component/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Banner />
        <ImageLink />
        <div class="jumbotron" style={{ margin: "30px 0" }}>
          <h1>ABC Tutorial</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <Contact />
      </div>
      <Chatbot />
    </div>
  );
}

export default App;
