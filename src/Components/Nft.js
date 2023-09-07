import React from "react";
import img1 from "../image/download (1).jpg"
import img2 from "../image/www.png"
import img3 from "../image/pic1 (1).jpeg"
import img4 from "../image/pic1 (2).jpeg"
import img5 from "../image/pic1 (3).jpeg"
import img6 from "../image/pic1 (4).jpeg"
import img7 from "../image/FridaByAmrit.jpg"
import img8 from "../image/Gandalf_ToyFace.jpg"
import img9 from "../image/Sherlock+Toy+Face-low.gif"
import img10 from "../image/Kalpana-Chawla-Toy-Face (1).gif"
import img11 from "../image/MiyazakiToyFace.mp4-low.gif"
import img12 from "../image/RobotoToyFaceFinal-2.jpg"
import img13 from "../image/VanGoghByAmrit.jpg"
import img14 from "../image/Screenshot_54.jpg"
import image1 from "../image/images.jpg"
import image2 from "../image/Kalpana-Chawla-Toy-Face (1).gif"
import image3 from "../image/pic1 (1).jpeg"
import image4 from "../image/RobotoToyFaceFinal-2.jpg"
import image5 from "../image/Screenshot_54.jpg"
import image6 from "../image/VanGoghByAmrit.jpg"
import image7 from "../image/Rare+Pepe+Nakamoto+Toy+Face.jpg"
import UserNavbar from "../Components/UserNavbar"
import "../Css/nfthome.css"
import Footer from "./Footer";

export default function Nft() {
  return (
   
    <div>
         <UserNavbar/>
      {/* home section starts   */}

      <section class="home" id="home">
        <div class="row">
          <div class="content">
            <h3>MAKING NON-FUNGIBLE TOYS ONE TOKEN AT A TIME.</h3>
            <p>
              From Toy Faces to Toy Rooms, we love creating tokens of nostalgia
              one at a time.{" "}
            </p>

            <a href="#" class="btn">
              shop now
            </a>
          </div>
        </div>
      </section>

      {/* home section end  */}

       {/* banner section starts  --> */}

    <section class="banner-container">

        <div class="banner">
            <img src={img1} alt=""/>
            <div class="content">
                <span>special offer</span>
                <h3>upto 50% off</h3>
                <a href="#" class="btn">shop now</a>
            </div>
        </div>

        <div class="banner">
            <img src={img2} alt=""/>
            <div class="content">
                <span>special offer</span>
                <h3>upto 50% off</h3>
                <a href="#" class="btn">shop now</a>
            </div>
        </div>

    </section>

     {/* banner section ends */}

      {/* products section starts  */}

<section class="products" id="products">

    <h1 class="heading"> trending <span>Nft's</span> </h1>

    <div class="filter-buttons">
        <div class="buttons active" data-filter="all">all</div>
        <div class="buttons" data-filter="arrivals">new arrivals</div>
        <div class="buttons" data-filter="featured">featured</div>
        <div class="buttons" data-filter="special">special offer</div>
        <div class="buttons" data-filter="seller">best seller</div>
    </div>

    <div class="box-container">

        <div class="box" data-item="featured">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="product38.html" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={img3} alt=""/>
            </div>
            <div class="content">

                <div class="price">
                    <div class="amount">30 ETH</div>
                    <div class="cut">40 ETH</div>
                    <div class="offer">29% off</div>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>

                </div>
            </div>
        </div>

        <div class="box" data-item="special">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="product39.html" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={img4} alt=""/>
            </div>
            <div class="content">

                <div class="price">
                    <div class="amount">29 ETH</div>
                    <div class="cut">$20 ETH</div>
                    <div class="offer">30% off</div>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>

                </div>
            </div>
        </div>

        <div class="box" data-item="seller">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="product40.html" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={img5} alt=""/>
            </div>
            <div class="content">

                <div class="price">
                    <div class="amount">18 ETH</div>
                    <div class="cut">27 ETH</div>
                    <div class="offer">23% off</div>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>

                </div>
            </div>
        </div>

        <div class="box" data-item="arrivals">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>

                <a href="product41.html" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={img6} alt=""/>
            </div>
            <div class="content">

                <div class="price">
                    <div class="amount">12 ETH</div>
                    <div class="cut">20 ETH</div>
                    <div class="offer">20% off</div>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>

                </div>
            </div>
        </div>

        <div class="box" data-item="featured">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>

                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={img7} alt=""/>
            </div>
            <div class="content">

                <div class="price">
                    <div class="amount">9 ETH</div>
                    <div class="cut">19 ETH</div>
                    <div class="offer">67% off</div>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>

                </div>
            </div>
        </div>

        <div class="box" data-item="arrivals">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>

                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={img8} alt=""/>
            </div>
            <div class="content">

                <div class="price">
                    <div class="amount">30 ETH</div>
                    <div class="cut">40 ETH</div>
                    <div class="offer">20% off</div>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>

                </div>
            </div>
        </div>

        <div class="box" data-item="special">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>

                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={img9} alt=""/>
            </div>
            <div class="content">

                <div class="price">
                    <div class="amount">23 ETH</div>
                    <div class="cut">34 ETH</div>
                    <div class="offer">27% off</div>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>

                </div>
            </div>
        </div>

        <div class="box" data-item="seller">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>

                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={img10} alt=""/>
            </div>
            <div class="content">

                <div class="price">
                    <div class="amount">34 ETH</div>
                    <div class="cut">44 ETH</div>
                    <div class="offer">29% off</div>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>

                </div>
            </div>
        </div>

        <div class="box" data-item="seller">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>

                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={img11} alt=""/>
            </div>
            <div class="content">

                <div class="price">
                    <div class="amount">12 ETH</div>
                    <div class="cut">18 ETH</div>
                    <div class="offer">20% off</div>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>

                </div>
            </div>
        </div>

        <div class="box" data-item="featured">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={img12}alt=""/>
            </div>
            <div class="content">

                <div class="price">
                    <div class="amount">34 ETH</div>
                    <div class="cut">23 ETH</div>
                    <div class="offer">20% off</div>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>

                </div>
            </div>
        </div>

        <div class="box" data-item="special">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={img13} alt=""/>
            </div>
            <div class="content">

                <div class="price">
                    <div class="amount">44 ETH</div>
                    <div class="cut">49 ETH</div>
                    <div class="offer">34% off</div>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>

                </div>
            </div>
        </div>

        <div class="box" data-item="seller">
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src={img14} alt=""/>
            </div>
            <div class="content">

                <div class="price">
                    <div class="amount">12 ETH</div>
                    <div class="cut">18 ETH</div>
                    <div class="offer">20% off</div>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>

                </div>
            </div>
        </div>

    </div>

</section>

 {/* products section ends  */}


 {/* <!-- deal section starts  --> */}

<section class="deal">

    <div class="image">
        <img src={image1} alt=""/>
    </div>

    <div class="content">
        <span>new nft trending!</span>
        <h3>best collection</h3>
        <p>sale get up to 40% off</p>
        <a href="#" class="btn">shop now</a>
    </div>

</section>

{/* <!-- deal section ends --> */}

{/* <!-- featured section starts  --> */}

<section class="featured" id="featured">

    <h1 class="heading"> <span>featured</span> non fungible toys </h1>

    <div class="swiper featured-slider">

        <div class="swiper-wrapper">

            <div class="swiper-slide slide">
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                    <img src={image2} alt=""/>
                </div>
                <div class="content">

                    <div class="price">
                        <div class="amount">23 ETH</div>
                        <div class="cut">35 ETH</div>
                        <div class="offer">20% off</div>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>

                    </div>
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                    <img src={image3} alt=""/>
                </div>
                <div class="content">

                    <div class="price">
                        <div class="amount">23 ETH</div>
                        <div class="cut">35 ETH</div>
                        <div class="offer">20% off</div>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>

                    </div>
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                    <img src={image4} alt=""/>
                </div>
                <div class="content">

                    <div class="price">
                        <div class="amount">23 ETH</div>
                        <div class="cut">35 ETH</div>
                        <div class="offer">20% off</div>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>

                    </div>
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                    <img src={image5} alt=""/>
                </div>
                <div class="content">

                    <div class="price">
                        <div class="amount">23 ETH</div>
                        <div class="cut">35 ETH</div>
                        <div class="offer">20% off</div>
                    </div>
                    <div class="stars">

                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>

                    </div>
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                    <img src={image6} alt=""/>
                </div>
                <div class="content">

                    <div class="price">
                        <div class="amount">23 ETH</div>
                        <div class="cut">35 ETH</div>
                        <div class="offer">20% off</div>
                    </div>
                    <div class="stars">
                        <i class="fas fa-sta"></i>
                        <i class="fas fa-star"></i>

                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>

                    </div>
                </div>
            </div>

            <div class="swiper-slide slide">
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                    <img src={image7} alt=""/>
                </div>
                <div class="content">

                    <div class="price">
                        <div class="amount">23 ETH</div>
                        <div class="cut">35 ETH</div>
                        <div class="offer">20% off</div>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>

                        <i class="far fa-star"></i>

                    </div>
                </div>
            </div>

        </div>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>

    </div>

</section>

 {/* featured section ends  */}
 <Footer/>
    </div>
  );
}
