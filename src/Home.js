import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to the Dashboard</h1>
      <p className="subtitle">Your important information is displayed below.</p>
      <div className="content">
        <h2>Important Updates</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et sagittis justo. In tempus sapien at odio interdum, ac fermentum felis fermentum. Etiam vehicula leo id nisl dictum, nec vestibulum risus vulputate. Nam iaculis fringilla orci non cursus. Ut efficitur diam ut erat gravida, eu rutrum lorem scelerisque.
        </p>
        <p>
          Integer tempor ultricies ante, vel euismod ligula fermentum sed. Phasellus tincidunt, urna ut facilisis euismod, leo justo aliquet lorem, ac fringilla purus magna et sapien. Nam venenatis odio ac bibendum cursus. Aliquam pharetra felis a purus dignissim, et auctor ligula interdum. Donec eget suscipit nunc, vel tincidunt ligula.
        </p>
      </div>
      <div className="footer">
        <p>© 2024 All Rights Reserved. Company Name.</p>
      </div>
    </div>
  );
}

export default Home;
