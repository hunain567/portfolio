import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Blog = () => {
    useEffect(() => {
        const breadcrumbSection = document.querySelector('.breadcrumb_area');
        const bgImage = breadcrumbSection.getAttribute('data-bg-image');
        breadcrumbSection.style.backgroundImage = `url(${bgImage})`;
    }, []);

return(
    <div className="absolute_header">

  <div className="preloader">
    <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
    </svg>

    <div className="preloader-heading">
      <div className="load-text">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
    </div>
  </div>

  <div className="progress-wrap" id="scrollUp">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  <header className="tj-header-area header-absolute">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-wrap align-items-center">
            <div className="logo-box">
              <Link to="/">
                <img src="assets/img/logo/logo1.png" alt="Logo" />
              </Link>
            </div>

            <div className="header-info-list d-none d-md-inline-block">
              <ul className="ul-reset">
                <li>
                  <a href="mailto:engr.hunainraza@gmail.com">
                    engr.hunainraza@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="header-menu">
              <nav>
                <ul>
                  <li>
                    <a href="#services-section">Services</a>
                  </li>
                  <li>
                    <a href="#works-section">Works</a>
                  </li>
                  <li>
                    <a href="#skills-section">Skills</a>
                  </li>
                  <li>
                    <a href="#contact-section">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-button">
              <a
                href="https://wa.me/923212734685"
                className="btn tj-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header className="tj-header-area header-2 header-sticky sticky-out">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-wrap align-items-center">
            <div className="logo-box">
              <Link to="/">
                <img src="assets/img/logo/logo1.png" alt="Logo" />
              </Link>
            </div>

            <div className="header-info-list d-none d-md-inline-block">
              <ul className="ul-reset">
                <li>
                  <a href="mailto:engr.hunainraza@gmail.com">
                    engr.hunainraza@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="header-menu">
              <nav>
                <ul>
                  <li>
                    <a href="#services-section">Services</a>
                  </li>
                  <li>
                    <a href="#works-section">Works</a>
                  </li>
                  <li>
                    <a href="#skills-section">Skills</a>
                  </li>
                  <li>
                    <a href="#contact-section">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-button">
              <a
                href="https://wa.me/923212734685"
                className="btn tj-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>


  <main className="site-content" id="content">


    <section className="breadcrumb_area" data-bg-image="./assets/img/breadcrumb/breadcrumb-bg.jpg" data-bg-color="#140C1C">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="breadcrumb_content d-flex flex-column align-items-center">
              <h2 className="title wow fadeInUp" data-wow-delay=".3s">Blog</h2>
              <div className="breadcrumb_navigation wow fadeInUp" data-wow-delay=".5s">
                <span><a href="index.html">Home</a></span>
                <i className="far fa-long-arrow-right"></i>
                <span className="current-item">Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="full-width tj-posts__area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tj-post__container">
              <article className="tj-post wow fadeInUp" data-wow-delay=".3s">
                <div className="tj-post__thumb">
                  <a href="blog-details.html">
                    <img src="./assets/img/blog/blog-4.jpg" alt=""/>
                  </a>

                  <a href="#" className="category">Tutorial</a>
                </div>
                <div className="tj-post__content">
                  <div className="tj-post__meta entry-meta">
                    <span><i className="fa-light fa-user"></i> <a href="#">By Admin</a></span>
                    <span><i className="fa-light fa-calendar-days"></i> 11 Jul, 2023</span>
                    <span><i className="fa-light fa-comments"></i><a href="#">Comments (3)</a></span>
                  </div>
                  <h3 className="tj-post__title entry-title">
                    <a href="blog-details.html">The Role of Technology in Modern Logistics Management</a>
                  </h3>
                  <div className="tj-post__excerpt">
                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum
                      quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
                      lacus quis enim var sed efficitur turpis gilla sed sit...</p>
                  </div>
                  <div className="tj-post__btn">
                    <a href="blog-details.html" className="tj-btn-primary">Read more</a>
                  </div>
                </div>
              </article>

              <blockquote className="wp-block-quote wow fadeInUp" data-wow-delay=".3s">
                <p>“Welcome to our blog, where we celebrate our achievement as an AWS SaaS Competency Partner and share
                  insights on how we accomplished this significant milestone.
                  As businesses unlock growth opportunities in the digital age, harnessing the power of cloud computing
                  has become essential. Amazon Web Services (AWS) offers the AWS SaaS Competency.”</p>
                <p><cite>Silvester Scott</cite></p>
              </blockquote>

              <article className="tj-post wow fadeInUp" data-wow-delay=".3s">
                <div className="tj-post__thumb">

                  <img src="./assets/img/blog/blog-3.jpg" alt=""/>

                  <div className="tj-post__video">
                    <a href="https://player.vimeo.com/video/364758150" className="popup_video"><i
                        className="fa-thin fa-circle-play"></i></a>
                  </div>

                  <a href="#" className="category">TIPS</a>
                </div>
                <div className="tj-post__content">
                  <div className="tj-post__meta entry-meta">
                    <span><i className="fa-light fa-user"></i> <a href="#">By Admin</a></span>
                    <span><i className="fa-light fa-calendar-days"></i> 11 Jul, 2023</span>
                    <span><i className="fa-light fa-comments"></i><a href="#">Comments (3)</a></span>
                  </div>
                  <h3 className="tj-post__title entry-title">
                    <a href="blog-details.html">The Role of Technology in Modern Logistics Management</a>
                  </h3>
                  <div className="tj-post__excerpt">
                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum
                      quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
                      lacus quis enim var sed efficitur turpis gilla sed sit...</p>
                  </div>
                  <div className="tj-post__btn">
                    <a href="blog-details.html" className="tj-btn-primary">Read more</a>
                  </div>
                </div>
              </article>

              <article className="tj-post wow fadeInUp" data-wow-delay=".3s">
                <div className="tj-post__thumb">

                  <div className="tj-post__gallery owl-carousel">
                    <div className="tj-post-gallery__img">
                      <img src="./assets/img/blog/blog-2.jpg" alt=""/>
                    </div>
                    <div className="tj-post-gallery__img">
                      <img src="./assets/img/blog/blog-3.jpg" alt=""/>
                    </div>
                    <div className="tj-post-gallery__img">
                      <img src="./assets/img/blog/blog-1.jpg" alt=""/>
                    </div>
                  </div>

                  <a href="#" className="category">FREEBIES</a>
                </div>
                <div className="tj-post__content">
                  <div className="tj-post__meta entry-meta">
                    <span><i className="fa-light fa-user"></i> <a href="#">By Admin</a></span>
                    <span><i className="fa-light fa-calendar-days"></i> 11 Jul, 2023</span>
                    <span><i className="fa-light fa-comments"></i><a href="#">Comments (3)</a></span>
                  </div>
                  <h3 className="tj-post__title entry-title">
                    <a href="blog-details.html">The Role of Technology in Modern Logistics Management</a>
                  </h3>
                  <div className="tj-post__excerpt">
                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum
                      quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
                      lacus quis enim var sed efficitur turpis gilla sed sit...</p>
                  </div>
                  <div className="tj-post__btn">
                    <a href="blog-details.html" className="tj-btn-primary">Read more</a>
                  </div>
                </div>
              </article>

              <article className="tj-post wow fadeInUp" data-wow-delay=".3s">
                <div className="tj-post__thumb">
                  <a href="blog-details.html">
                    <img src="./assets/img/blog/blog-1.jpg" alt=""/>
                  </a>

                  <a href="#" className="category">Tutorial</a>
                </div>
                <div className="tj-post__content">
                  <div className="tj-post__meta entry-meta">
                    <span><i className="fa-light fa-user"></i> <a href="#">By Admin</a></span>
                    <span><i className="fa-light fa-calendar-days"></i> 11 Jul, 2023</span>
                    <span><i className="fa-light fa-comments"></i><a href="#">Comments (3)</a></span>
                  </div>
                  <h3 className="tj-post__title entry-title">
                    <a href="blog-details.html">The Role of Technology in Modern Logistics Management</a>
                  </h3>
                  <div className="tj-post__excerpt">
                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum
                      quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
                      lacus quis enim var sed efficitur turpis gilla sed sit...</p>
                  </div>
                  <div className="tj-post__btn">
                    <a href="blog-details.html" className="tj-btn-primary">Read more</a>
                  </div>
                </div>
              </article>

              <div className="tj__pagination wow fadeInUp" data-wow-delay=".3s">
                <ul>
                  <li><a className="page-numbers" href="#"><i className="fal fa-arrow-left"></i></a></li>
                  <li><a className="page-numbers" href="#">1</a></li>
                  <li><span className="page-numbers current">2</span></li>
                  <li><a className="page-numbers" href="#">3</a></li>
                  <li><a className="page-numbers" href="#"><i className="fal fa-arrow-right"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tj_main_sidebar">
              <div className="sidebar_widget widget_search wow fadeInUp" data-wow-delay=".3s">
                <div className="tj-widget__search form_group">
                  <form className="search-form" action="#" method="get">
                    <input type="search" id="search" name="search" placeholder="Search..."/>
                    <button className="search-btn" type="submit"> <i className="fa-light fa-magnifying-glass"></i> </button>
                  </form>
                </div>
              </div>

              <div className="sidebar_widget widget_categories wow fadeInUp" data-wow-delay=".3s">
                <div className="widget_title">
                  <h3 className="title">Categories</h3>
                </div>

                <ul>
                  <li><a href="#">Business</a> (4)</li>
                  <li><a href="#">Analysis</a> (0)</li>
                  <li><a href="#">Technology</a> (1)</li>
                  <li><a href="#">Technology</a> (10)</li>
                </ul>
              </div>

              <div className="sidebar_widget tj_recent_posts wow fadeInUp" data-wow-delay=".3s">
                <div className="widget_title">
                  <h3 className="title">Recent post</h3>
                </div>

                <ul>
                  <li>
                    <div className="recent-post_thumb">
                      <a href="blog-details.html">
                        <img src="./assets/img/blog/post-thumb-1.jpg" alt=""/>
                      </a>
                    </div>

                    <div className="recent-post_content">
                      <div className="tj-post__meta entry-meta">
                        <span><i className="fa-light fa-calendar-days"></i>Jan 2024</span>
                        <span><i className="fa-light fa-comments"></i><a href="#"> (3)</a></span>
                      </div>
                      <h4 className="recent-post_title">
                        <a href="blog-details.html">Definition and Principles of JIT Logistics</a>
                      </h4>
                    </div>
                  </li>
                  <li>
                    <div className="recent-post_thumb">
                      <a href="blog-details.html">
                        <img src="./assets/img/blog/post-thumb-2.jpg" alt=""/>
                      </a>
                    </div>

                    <div className="recent-post_content">
                      <div className="tj-post__meta entry-meta">
                        <span><i className="fa-light fa-calendar-days"></i>Jan 2024</span>
                        <span><i className="fa-light fa-comments"></i><a href="#"> (3)</a></span>
                      </div>
                      <h4 className="recent-post_title">
                        <a href="blog-details.html">Real-world Examples of Successful JIT Logistics</a>
                      </h4>
                    </div>
                  </li>
                  <li>
                    <div className="recent-post_thumb">
                      <a href="blog-details.html">
                        <img src="./assets/img/blog/post-thumb-3.jpg" alt=""/>
                      </a>
                    </div>

                    <div className="recent-post_content">
                      <div className="tj-post__meta entry-meta">
                        <span><i className="fa-light fa-calendar-days"></i>Jan 2024</span>
                        <span><i className="fa-light fa-comments"></i><a href="#"> (3)</a></span>
                      </div>
                      <h4 className="recent-post_title">
                        <a href="blog-details.html">Real-world Examples of Successful JIT Logistics</a>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="sidebar_widget widget_tag_cloud wow fadeInUp" data-wow-delay=".3s">
                <div className="widget_title">
                  <h3 className="title">Popular tag</h3>
                </div>

                <div className="tagcloud">
                  <a href="#">Business</a>
                  <a href="#">Analysis</a>
                  <a href="#">Technology</a>
                  <a href="#">Finance</a>
                  <a href="#">Design</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
  </main>
  <footer className="tj-footer-area">
<div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <div className="footer-logo-box">
                <a href="#"><img src="assets/img/logo/logo1.png" alt=""/></a>
            </div>
            <div className="footer-menu">
                <nav>
                    <ul>
                        <li><a href="#services-section">Services</a></li>
                        <li><a href="#works-section">Works</a></li>
                        <li><a href="#skills-section">Skills</a></li>
                        <li><a href="#contact-section">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="copy-text">
                <p>&copy; 2024 All rights reserved<a href="#" target="_blank"></a></p>
            </div>
        </div>
    </div>
</div>
</footer>

</div>
);

};

export default Blog;