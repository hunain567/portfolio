import { Link } from "react-router-dom";
const Home = () => (
  <>
    <div className="preloader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path
          id="preloaderSvg"
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
        ></path>
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
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
    <header className="tj-header-area header-absolute">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-wrap align-items-center">
            <div className="logo-box">
              <Link to="/">
                <img src="/assets/img/logo/logo1.png" alt="Logo" />
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
      <section className="hero-section d-flex align-items-center" id="intro">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" textAnchor="middle">
              HI
            </text>
          </svg>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content-box">
                <span className="hero-sub-title">I am Hunain Raza</span>
                <h1 className="hero-title">
                  Web Developer +<br />
                  App Developer
                </h1>

                <div className="hero-image-box d-md-none text-center">
                  <img src="assets/img/hero/me.png" alt="" />
                </div>

                <p className="lead">
                  I create user-friendly applications that deliver exceptional
                  experiences, leveraging my expertise in MERN stack and React
                  Native to build powerful web and mobile solutions.
                </p>
                <div className="button-box d-flex flex-wrap align-items-center">
                  <a href="hunainRaza.pdf" className="btn tj-btn-secondary">
                    Download CV <i className="flaticon-download"></i>
                  </a>
                  <ul className="ul-reset social-icons">
                    <li>
                      <a href="https://www.facebook.com/hunain567">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.linkedin.com/in/hu9ai9">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/hunain567">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="hero-image-box text-center">
                <img src="assets/img/hero/me.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" id="services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  My Quality Services
                </h2>
                <p className=" wow fadeInUp" data-wow-delay=".4s">
                  As a MERN and React Native developer, I transform your ideas
                  into dynamic web and mobile applications that engage users and
                  drive success.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="services-widget position-relative">
                <div
                  className="service-item current d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">01</span>
                    <h3 className="service-title">Web Development</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      I build robust and scalable web applications using the
                      MERN stack, ensuring seamless user experiences and
                      efficient performance.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper"
                    className="service-link modal-popup"
                  ></button>
                </div>

                <div
                  className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">02</span>
                    <h3 className="service-title">Mobile App Development</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      I create high-performance mobile applications using React
                      Native, delivering native-like experiences on both iOS and
                      Android platforms.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper"
                    className="service-link modal-popup"
                  ></button>
                </div>

                <div
                  className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">03</span>
                    <h3 className="service-title">API Development</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      I design and develop RESTful APIs that integrate
                      seamlessly with your applications, ensuring smooth data
                      exchange and functionality.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper"
                    className="service-link modal-popup"
                  ></button>
                </div>

                <div
                  className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">04</span>
                    <h3 className="service-title">
                      Web Application Optimization
                    </h3>
                  </div>
                  <div className="right-box">
                    <p>
                      I optimize web applications for performance and
                      scalability, ensuring they handle high traffic while
                      providing a smooth user experience.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper"
                    className="service-link modal-popup"
                  ></button>
                </div>

                <div
                  className="active-bg wow fadeInUp"
                  data-wow-delay=".5s"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="service-wrapper"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        <div className="popup_modal_img">
          <img src="./assets/img/services/modal-img.jpg" alt="" />
        </div>

        <div className="popup_modal_content">
          <div className="service_details">
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="service_details_content">
                  <div className="service_info">
                    <h6 className="subtitle">SERVICES</h6>
                    <h2 className="title">UI/UX Design</h2>
                    <div className="desc">
                      <p>
                        Elizabeth some dodgy chavs are you taking the piss faff
                        about pardon amongst car boot a load of old tosh is
                        cracking goal blow off telling brown.
                      </p>

                      <p>
                        Brolly show off show off pick your nose and blow off
                        well A bit of how’s your father tomfoolery blimey, me
                        old mucker starkers Queen’s English dropped a clanger
                        bite your arm spiffing good time burke Why chancer.
                        Hotpot bum bag cracking goal young delinquent naff
                        bugger cup of chars bender loo it’s all gone to pot the
                        nancy cheeky.
                      </p>

                      <p>
                        At public school cras bog some dodgy chav Richard Why
                        argy bargy vagabon William bender matie boy, off his nut
                        chancer Jeffrey up the kyver say mufty you mug ummm
                        telling pear shaped Oxford owt to do with me do one so
                        said are you taking his.
                      </p>
                    </div>

                    <h3 className="title">Services Process</h3>
                    <div className="desc">
                      <p>
                        Elizabeth some dodgy chavs are you taking the piss faff
                        about pardon amongst car boot a load of old tosh is
                        cracking goal blow off telling brown.
                      </p>
                    </div>
                    <ul>
                      <li>Reinvent Your Business to Better</li>
                      <ul>
                        <li>Pioneering the Internet&apos;s First</li>
                        <li>Pioneering the Design World&apos;s First</li>
                        <li>Pioneering Innovative User Experiences</li>
                        <li>Pioneering Cutting-Edge Web Technologies</li>
                        <li>Pioneering Sustainable Design Practices</li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="tj_main_sidebar">
                  <div className="sidebar_widget services_list">
                    <div className="widget_title">
                      <h3 className="title">All Services</h3>
                    </div>
                    <ul>
                      <li className="active">
                        <button>
                          <i className="flaticon-design"></i>
                          Branding Design
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-3d-movie"></i>
                          3D Animation
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ux-design"></i>
                          UI/UX Design
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-web-design"></i>
                          Web Design
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ui-design"></i>
                          App Design
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="sidebar_widget contact_form">
                    <div className="widget_title">
                      <h3 className="title">Get in Touch</h3>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="portfolio-section" id="works-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  My Recent Works
                </h2>
                <p className=" wow fadeInUp" data-wow-delay=".4s">
                  We put your ideas and thus your wishes in the form of a unique
                  web project that inspires you and you customers.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div
                className="portfolio-filter text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="button-group filter-button-group">
                  <button data-filter="*" className="active">
                    All
                  </button>
                  <button data-filter=".uxui">UX/UI</button>
                  <button data-filter=".branding">Branding</button>
                  <button data-filter=".mobile-app">Apps</button>
                  <div className="active-bg"></div>
                </div>
              </div>

              <div className="portfolio-box wow fadeInUp" data-wow-delay=".6s">
                <div className="portfolio-sizer"></div>
                <div className="gutter-sizer"></div>
                <div className="portfolio-item branding">
                  <div className="image-box">
                    <img src="assets/img/portfolio/2.jpg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">Deloitte</h3>
                    <p>Project was about precision and information.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button
                      data-mfp-src="#portfolio-wrapper"
                      className="portfolio-link modal-popup"
                    ></button>
                  </div>
                </div>
                <div className="portfolio-item uxui">
                  <div className="image-box">
                    <img src="assets/img/portfolio/1.jpg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">New Age</h3>
                    <p>Project was about precision and information.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button
                      data-mfp-src="#portfolio-wrapper"
                      className="portfolio-link modal-popup"
                    ></button>
                  </div>
                </div>
                <div className="portfolio-item mobile-app">
                  <div className="image-box">
                    <img src="assets/img/portfolio/3.jpg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">Sebastian</h3>
                    <p>Project was about precision and information.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button
                      data-mfp-src="#portfolio-wrapper"
                      className="portfolio-link modal-popup"
                    ></button>
                  </div>
                </div>
                <div className="portfolio-item branding">
                  <div className="image-box">
                    <img src="assets/img/portfolio/4.jpg" alt="" />
                  </div>
                  <div className="content-box">
                    <h3 className="portfolio-title">Mochnix</h3>
                    <p>Project was about precision and information.</p>
                    <i className="flaticon-up-right-arrow"></i>
                    <button
                      data-mfp-src="#portfolio-wrapper"
                      className="portfolio-link modal-popup"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="portfolio-wrapper"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        <div className="popup_modal_img">
          <img src="./assets/img/portfolio/modal-img.jpg" alt="" />
        </div>

        <div className="popup_modal_content">
          <div className="portfolio_info">
            <div className="portfolio_info_text">
              <h2 className="title">DStudio</h2>
              <div className="desc">
                <p>
                  They are was greater open above shelter lets itself under
                  appear sixth open gathering made upon cant own above midst
                  gathering gathered he one us saying cant divide.
                </p>
              </div>
              <a href="#" className="btn tj-btn-primary">
                live preview <i className="fal fa-arrow-right"></i>
              </a>
            </div>
            <div className="portfolio_info_items">
              <div className="info_item">
                <div className="key">Category</div>
                <div className="value">Web Design</div>
              </div>
              <div className="info_item">
                <div className="key">Client</div>
                <div className="value">Artboard Studio</div>
              </div>
              <div className="info_item">
                <div className="key">Start Date</div>
                <div className="value">August 20, 2023</div>
              </div>
              <div className="info_item">
                <div className="key">Designer</div>
                <div className="value">
                  <a href="#">ThemeJunction</a>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio_gallery owl-carousel">
            <div className="gallery_item">
              <img
                src="./assets/img/portfolio-gallery/p-gallery-1.jpg"
                alt=""
              />
            </div>
            <div className="gallery_item">
              <img
                src="./assets/img/portfolio-gallery/p-gallery-2.jpg"
                alt=""
              />
            </div>
            <div className="gallery_item">
              <img
                src="./assets/img/portfolio-gallery/p-gallery-3.jpg"
                alt=""
              />
            </div>
            <div className="gallery_item">
              <img
                src="./assets/img/portfolio-gallery/p-gallery-4.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="portfolio_description">
            <h2 className="title">Project Description</h2>
            <div className="desc">
              <p>
                The goal is there are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which dont look
                even slightly believable.
              </p>

              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isnt anything embarrassing
                hidden in the middle of text.
              </p>
            </div>
          </div>

          <div className="portfolio_story_approach">
            <div className="portfolio_story">
              <div className="story_title">
                <h4 className="title">The story</h4>
              </div>
              <div className="story_content">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isnt anything
                  embarrassing hidden in the middle of text. There are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised words which dont look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum,
                  you need to be sure there isnt anything embarrassing hidden in
                  the middle of text.
                </p>
              </div>
            </div>
            <div className="portfolio_approach">
              <div className="approach_title">
                <h4 className="title">OUR APPROACH</h4>
              </div>
              <div className="approach_content">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isnt anything
                  embarrassing hidden in the middle of text. There are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised words which dont look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum,
                  you need to be sure there isnt anything embarrassing hidden in
                  the middle of text.
                </p>
              </div>
            </div>
          </div>

          <div className="portfolio_navigation">
            <div className="navigation_item prev-project">
              <a href="#" className="project">
                <i className="fal fa-arrow-left"></i>
                <div className="nav_project">
                  <div className="label">Previous Project</div>
                  <h3 className="title">Sebastian</h3>
                </div>
              </a>
            </div>

            <div className="navigation_item next-project">
              <a href="#" className="project">
                <div className="nav_project">
                  <div className="label">Next Project</div>
                  <h3 className="title">Qwillo</h3>
                </div>
                <i className="fal fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*
      <section className="resume-section" id="resume-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-header wow fadeInUp" data-wow-delay=".3s">
                <h2 className="section-title">
                  <i className="flaticon-recommendation"></i> My Experience
                </h2>
              </div>

              <div className="resume-widget">
                <div
                  className="resume-item wow fadeInLeft"
                  data-wow-delay=".4s"
                >
                  <div className="time">2022 - Present</div>
                  <h3 className="resume-title">Lead Developer</h3>
                  <div className="institute">Blockdots, London</div>
                </div>
                <div
                  className="resume-item wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <div className="time">2021 - 2022</div>
                  <h3 className="resume-title">Full Stack Web Developer</h3>
                  <div className="institute">Parsons, The New School</div>
                </div>
                <div
                  className="resume-item wow fadeInLeft"
                  data-wow-delay=".6s"
                >
                  <div className="time">2020 - 2021</div>
                  <h3 className="resume-title">UI Designer</h3>
                  <div className="institute">House of Life, Leeds</div>
                </div>
                <div
                  className="resume-item wow fadeInLeft"
                  data-wow-delay=".7s"
                >
                  <div className="time">2018 - 2020</div>
                  <h3 className="resume-title">Junior Graphics Designer</h3>
                  <div className="institute">Theme Junction, Bursa</div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="section-header wow fadeInUp" data-wow-delay=".4s">
                <h2 className="section-title">
                  <i className="flaticon-graduation-cap"></i> My Education
                </h2>
              </div>

              <div className="resume-widget">
                <div
                  className="resume-item wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <div className="time">2020 - 2023</div>
                  <h3 className="resume-title">Programming course</h3>
                  <div className="institute">Harverd University</div>
                </div>
                <div
                  className="resume-item wow fadeInRight"
                  data-wow-delay=".6s"
                >
                  <div className="time">2016 - 2020</div>
                  <h3 className="resume-title">Graphic design course</h3>
                  <div className="institute">University of Denmark</div>
                </div>
                <div
                  className="resume-item wow fadeInRight"
                  data-wow-delay=".7s"
                >
                  <div className="time">2012 - 2015</div>
                  <h3 className="resume-title">Web design course</h3>
                  <div className="institute">University of California</div>
                </div>
                <div
                  className="resume-item wow fadeInRight"
                  data-wow-delay=".8s"
                >
                  <div className="time">2010 - 2011</div>
                  <h3 className="resume-title">Design & Technology</h3>
                  <div className="institute">Parsons, The New School</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
*/}

      <section className="skills-section" id="skills-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  My Skills
                </h2>
                <p className=" wow fadeInUp" data-wow-delay=".4s">
                  I specialize in developing high-performance web and mobile
                  applications with the MERN stack and React Native, turning
                  your ideas into impactful digital experiences that captivate
                  users and drive success.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
                <div className="skill-item wow fadeInUp" data-wow-delay=".3s">
                  <div className="skill-inner">
                    <div className="icon-box">
                      <img src="assets/img/icons/figma.png" alt="" />
                    </div>
                    <div className="number">82%</div>
                  </div>
                  <p>Figma</p>
                </div>
                <div className="skill-item wow fadeInUp" data-wow-delay=".6s">
                  <div className="skill-inner">
                    <div className="icon-box">
                      <img src="assets/img/icons/react.png" alt="" />
                    </div>
                    <div className="number">90%</div>
                  </div>
                  <p>React Native</p>
                </div>
                <div className="skill-item wow fadeInUp" data-wow-delay=".5s">
                  <div className="skill-inner">
                    <div className="icon-box">
                      <img src="assets/img/icons/node.png" alt="" />
                    </div>
                    <div className="number">85%</div>
                  </div>
                  <p>Node Js</p>
                </div>
                <div className="skill-item wow fadeInUp" data-wow-delay=".7s">
                  <div className="skill-inner">
                    <div className="icon-box">
                      <img src="assets/img/icons/react.png" alt="" />
                    </div>
                    <div className="number">85%</div>
                  </div>
                  <p>React Js</p>
                </div>
                <div className="skill-item wow fadeInUp" data-wow-delay=".8s">
                  <div className="skill-inner">
                    <div className="icon-box">
                      <img src="assets/img/icons/js.png" alt="" />
                    </div>
                    <div className="number">85%</div>
                  </div>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section" id="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  Recent Blogs
                </h2>
                <p className=" wow fadeInUp" data-wow-delay=".4s">
                  We put your ideas and thus your wishes in the form of a unique
                  web project that inspires you and you customers.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay=".5s">
                <div className="blog-thumb">
                  <Link to="/blog">
                    {" "}
                    {/* Use Link here to navigate to blog.jsx */}
                    <img src="assets/img/blog/1.jpg" alt="" />
                  </Link>
                  <Link to="#" className="category">
                    Tutorial
                  </Link>
                </div>

                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="ul-reset">
                      <li>
                        <i className="fa-light fa-calendar-days"></i> Oct 01,
                        2022
                      </li>
                      <li>
                        <i className="fa-light fa-comments"></i>{" "}
                        <a href="#">Comment (0)</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">top 10 ui ux designers</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay=".6s">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/2.jpg" alt="" />
                  </a>
                  <a href="#" className="category">
                    TIPS
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="ul-reset">
                      <li>
                        <i className="fa-light fa-calendar-days"></i> Nov 01,
                        2022
                      </li>
                      <li>
                        <i className="fa-light fa-comments"></i>{" "}
                        <a href="#">Comment (0)</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">App Development Guides</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay=".7s">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/3.jpg" alt="" />
                  </a>
                  <a href="#" className="category">
                    FREEBIES
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="ul-reset">
                      <li>
                        <i className="fa-light fa-calendar-days"></i> Dec 01,
                        2022
                      </li>
                      <li>
                        <i className="fa-light fa-comments"></i>{" "}
                        <a href="#">Comment (0)</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">learn graphic design free</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 order-2 order-md-1">
              <div
                className="contact-form-box wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="section-header">
                  <h2 className="section-title">Let’s work together!</h2>
                  <p>
                    I design and code beautifully simple things and i love what
                    i do. Just simple like that!
                  </p>
                </div>

                <div className="tj-contact-form">

                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1 col-md-5  d-flex flex-wrap align-items-center  order-1 order-md-2">
              <div className="contact-info-list">
                <ul className="ul-reset">
                  <li
                    className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                    data-wow-delay=".4s"
                  >
                    <div className="icon-box">
                      <i className="flaticon-phone-call"></i>
                    </div>
                    <div className="text-box">
                      <p>Phone</p>
                      <a href="tel:0123456789">+923212734685</a>
                    </div>
                  </li>
                  <li
                    className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <div className="icon-box">
                      <i className="flaticon-mail-inbox-app"></i>
                    </div>
                    <div className="text-box">
                      <p>Email</p>
                      <a href="mailto:engr.hunainraza@mail.com">
                        engr.hunainraza@mail.com
                      </a>
                    </div>
                  </li>
                  <li
                    className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                    data-wow-delay=".6s"
                  >
                    <div className="icon-box">
                      <i className="flaticon-location"></i>
                    </div>
                    <div className="text-box">
                      <p>Address</p>
                      <a href="#">Sialkot, Pakistan</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal contact_modal" id="message_sent" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title">
                <strong>Message Sent Successfully</strong>
              </span>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Thank you for contacting us. We will get back to you shortly.
                <br />
                Have a great day!
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal contact_modal failed"
        id="message_fail"
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title">
                <strong>Error</strong>
              </span>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <p>Oops! Something went wrong, please try again.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="tj-footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-logo-box">
              <Link to="/">
                <img src="assets/img/logo/logo1.png" alt="Logo" />
              </Link>
            </div>
            <div className="footer-menu">
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
            <div className="copy-text">
              <p>
                &copy; 2024 All rights reserved<a href="#" target="_blank"></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Home;
