// src/pages/Home.jsx
import React from 'react';
import BlogRoll from '../BlogRoll';

const Home = () => {
  return (
    <div className="section">
      <h1>入会のご案内</h1>
      <a href="https://jomo-news-form.spiral-site.com/discussion?_ifbs-discussion=s1_Step1" target="_blank" >
      <input type="button" className="button is-info" value="入会申し込みフォーム" /></a>
      <p>豊富な講師陣による良質な講演をお届けする知的サロンです。ぜひご⼊会ください。</p>
      {/* Add your top list or any content here */}
      <BlogRoll />
    </div>

  );
};

export default Home;