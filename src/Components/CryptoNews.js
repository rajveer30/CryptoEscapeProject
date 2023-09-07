import React from 'react';
import "../Css/CryptoNews.css"
import UserNavbar from "./UserNavbar"
import Footer from './Footer';
const CryptoNews = () => {
  return (
    <>
    <UserNavbar/>
      <div className='container-fluid cryptoNews'>
      <div class="col-12">
            <iframe width="100%"  allowtransparency="true" frameborder="0"
              src="https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&amp;font_family=sans&amp;font_size=20&amp;header_bg_color=30343B&amp;header_text_color=FFFFFF&amp;link_color=0091C2&amp;news_feed=recent&amp;posts_limit=10&amp;text_color=333333&amp;title=Latest%20News"
              height="800px"></iframe>
          </div>
      </div>
      <Footer/>
    </>
  );
}

export default CryptoNews;
