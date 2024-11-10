import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import NavigationBottomBar from '../../components/Sidebar/ProfileBar2';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ChatPage = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          padding: 0,
          margin: 0,
          fontFamily: 'Arial, sans-serif',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavigationBottomBar />
        <div
          style={{
            flex: 1,
            padding: 20,
            overflowY: 'scroll',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <h1
              style={{
                fontSize: 24,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Chat
            </h1>
            <Link to="/chat" style={{ textDecoration: 'none', color: 'black' }}>
              <AiOutlineArrowRight size={25} fill="#333" />
            </Link>
          </div>
          <h2>Hello</h2>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default ChatPage;





