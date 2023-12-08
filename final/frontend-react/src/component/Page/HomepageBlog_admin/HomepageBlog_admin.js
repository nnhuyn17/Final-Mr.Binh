import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HomepageBlog_admin.module.scss';
import about_img from '../../../assets/img/3.jpg';
import serice1 from "../../../assets/img/s-1.svg"
import serice2 from "../../../assets/img/s-2.svg"
import serice3 from "../../../assets/img/s-3.svg"
import portfolio from "../../../assets/img/port-1.jpg"

// import { Link, Navigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function HomepageBlog_admin() {
  const pathBackEnd = "https://backend-final-web.onrender.com";
  
  const [date, setDate] = useState('');
  const [time_range, setTime] = useState('9am-11am');
  const [content, setContent] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullDate = `${date}`;

    // Call your API endpoint here with the form data
    // Example using fetch:
    fetch(`https://backend-final-web.onrender.com/createMeeting`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: localStorage.getItem('accountID'), // Replace with the actual user ID
        date: fullDate,
        time_range: time_range,
        content,
        status: 'pending', // Default status
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Add any additional logic for success
      })
      .catch(error => {
        console.error('Error:', error);
        // Add any additional error handling logic
      });
  };

  return (
    <div>
      <section className={cx('hero')} >
        <div className={cx('main-content')} >
          <h4>Hi, There</h4>
          <h1>
            I'm <span>Ngoc Huyen</span>
          </h1>
          <p>
            My focus is on creating user-friendly digital solutions. Let's turn
            ideas into reality through technology. Explore my portfolio to see my
            work, and let's collaborate on exciting projects!
          </p>
          <div className={cx('social')}>
            <a href="https://www.facebook.com/?locale=vi_VN" target="_blank">
              <i className={cx('ri-facebook-fill')} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className={cx('ri-instagram-fill')} />
            </a>
            <a href="https://twitter.com/?lang=vi" target="_blank">
              <i className={cx('ri-twitter-x-fill')} />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <i className={cx('ri-youtube-fill')} />
            </a>
          </div>
          <div className={cx('main-btn')}>
            <a href="#contact" className={cx('btn')}>
              Hire me
            </a>
            <a
              href="C:\Users\NGOC HUYEN\Documents\Zalo Received Files\NguyenNgocHuyen_CV.pdf"
              download="NguyenNgocHuyen_CV.pdf"
              className={cx('btn', 'btn2')}
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
      <section className={cx('about')} id="about">
        <div className={cx('about-img')} >
          <img src={about_img} alt="About" />
        </div>
        <div className={cx('about-text')} >
          <h2>
            I am Product <span>Designer</span> <br /> &amp; Web Developer
          </h2>
          <div className={cx('exp-area')}>
            <p className={cx('exp')}>
              Experience:
              <span>3 Years</span>
            </p>
            <p className={cx('exp')}>
              Specialty:
              <span>Product Designer, Developer</span>
            </p>
            <p className={cx('exp')}>
              Address:
              <span>Ho Chi Minh City, Viet Nam</span>
            </p>
            <p className={cx('exp')}>
              Email:
              <span>ngochuyen.info@gmail.com</span>
            </p>
            <p className={cx('exp')}>
              Phone:
              <span>0123456789</span>
            </p>
            <p className={cx('exp')}>
              Freelance:
              <span>Available</span>
            </p>
          </div>
          <a
            href="https://www.knowledgehut.com/blog/web-development/ui-ux-project-ideas"
            className={cx('btn')}
          >
            View All Projects
          </a>
        </div>
      </section>
      <section className={cx('services')} id="services">
        <div className={cx('center-text')} >
          <h2>
            My <span>Services</span>
          </h2>
        </div>
        <div className={cx('services-content')}>
          <div className={cx('box')}>
            <img src={serice1} alt="Service 1" />
            <h3>UI/UX Design</h3>
            <p>
              I design seamless, intuitive experiences. My user-centered approach
              ensures that your digital product is not just beautiful but also
              highly functional.
            </p>
            <a
              href="https://www.virstack.com/our-solutions/ui-ux-designing/?gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIOy3Np9Slr85w_3K4PBfaK9YNbR7twdtMMi5AWNgIh7eCQKYla51F8aAra4EALw_wcB"
              target="_blank"
            >
              Download Now
              <i className={cx('ri-arrow-right-line')} />
            </a>
          </div>
          <div className={cx('box')}>
            <img src={serice2} alt="Service 2" />
            <h3>Software Engineer</h3>
            <p>
              My expertise lies in designing, developing, and optimizing digital
              solutions. Let's build technology that makes a difference.
            </p>
            <a
              href="https://www.sdu.dk/en/uddannelse/kandidat/softwareengineering/?utm_campaign=tek_google_search_international_os&utm_medium=paid&utm_source=google&utm_term=software_engineering&gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIOWJYE6iv8eJl5ftCCnAZE2GcYvdJ4ABjJKV0PrfQ01z_uQE9rNrVEaAmomEALw_wcB"
              target="_blank"
            >
              Download Now
              <i className={cx('ri-arrow-right-line')} />
            </a>
          </div>
          <div className={cx('box')}>
            <img src={serice3} alt="Service 3" />
            <h3>Front-end Developer</h3>
            <p>
              I create captivating web experiences with elegant design and smooth
              functionality. Let's bring your website to life!
            </p>
            <a href="https://dribbble.com/tags/front-end-developer" target="_blank">
              Download Now
              <i className={cx('ri-arrow-right-line')} />
            </a>
          </div>
        </div>
      </section>
      <section className={cx('portfolio')} id="portfolio">
        <div className={cx('center-text')} >
          <h2>
            My <span>Portfolio</span>
          </h2>
        </div>
        <div className={cx('Portfolio-content')} >
          <div className={cx('row')}>
            {/* Portfolio Item 1 */}
            <a
              href="https://www.binance.com/vi/nft/home?ads=true&utm_source=googleadwords_int&utm_medium=cpc&utm_campaign=paid_NFT&ref=HDYAHEES&gad=1&gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIPJj82GKLF_JJscgrXlY6BhL1S62-5OPM73pSogurI5DXzDivtk-7gaArJZEALw_wcB"
              target="_blank"
            >
              <img src={portfolio} alt="Portfolio Image 1" />
            </a>
            <div className={cx('main-row')}>
              <div className={cx('row-text')}>
                <h5>Website Design</h5>
              </div>
              <div className={cx('row-icon')}>
                <a
                  href="https://github.com/ngochuyen2002/Final-Mr.Binh"
                  target="_blank"
                >
                  <i className={cx('ri-github-fill')} />
                </a>
              </div>
            </div>
            <h4>Website Development For Dark CodeXplore</h4>
          </div>
          <div className={cx('row')}>
            {/* Portfolio Item 1 */}
            <a
              href="https://www.binance.com/vi/nft/home?ads=true&utm_source=googleadwords_int&utm_medium=cpc&utm_campaign=paid_NFT&ref=HDYAHEES&gad=1&gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIPJj82GKLF_JJscgrXlY6BhL1S62-5OPM73pSogurI5DXzDivtk-7gaArJZEALw_wcB"
              target="_blank"
            >
              <img src={portfolio} alt="Portfolio Image 1" />
            </a>
            <div className={cx('main-row')}>
              <div className={cx('row-text')}>
                <h5>Website Design</h5>
              </div>
              <div className={cx('row-icon')}>
                <a
                  href="https://github.com/ngochuyen2002/Final-Mr.Binh"
                  target="_blank"
                >
                  <i className={cx('ri-github-fill')} />
                </a>
              </div>
            </div>
            <h4>Website Development For Dark CodeXplore</h4>
          </div>
          <div className={cx('row')}>
            {/* Portfolio Item 1 */}
            <a
              href="https://www.binance.com/vi/nft/home?ads=true&utm_source=googleadwords_int&utm_medium=cpc&utm_campaign=paid_NFT&ref=HDYAHEES&gad=1&gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIPJj82GKLF_JJscgrXlY6BhL1S62-5OPM73pSogurI5DXzDivtk-7gaArJZEALw_wcB"
              target="_blank"
            >
              <img src={portfolio} alt="Portfolio Image 1" />
            </a>
            <div className={cx('main-row')}>
              <div className={cx('row-text')}>
                <h5>Website Design</h5>
              </div>
              <div className={cx('row-icon')}>
                <a
                  href="https://github.com/ngochuyen2002/Final-Mr.Binh"
                  target="_blank"
                >
                  <i className={cx('ri-github-fill')} />
                </a>
              </div>
            </div>
            <h4>Website Development For Dark CodeXplore</h4>
          </div>
          <div className={cx('row')}>
            {/* Portfolio Item 1 */}
            <a
              href="https://www.binance.com/vi/nft/home?ads=true&utm_source=googleadwords_int&utm_medium=cpc&utm_campaign=paid_NFT&ref=HDYAHEES&gad=1&gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIPJj82GKLF_JJscgrXlY6BhL1S62-5OPM73pSogurI5DXzDivtk-7gaArJZEALw_wcB"
              target="_blank"
            >
              <img src={portfolio} alt="Portfolio Image 1" />
            </a>
            <div className={cx('main-row')}>
              <div className={cx('row-text')}>
                <h5>Website Design</h5>
              </div>
              <div className={cx('row-icon')}>
                <a
                  href="https://github.com/ngochuyen2002/Final-Mr.Binh"
                  target="_blank"
                >
                  <i className={cx('ri-github-fill')} />
                </a>
              </div>
            </div>
            <h4>Website Development For Dark CodeXplore</h4>
          </div>
          <div className={cx('row')}>
            {/* Portfolio Item 1 */}
            <a
              href="https://www.binance.com/vi/nft/home?ads=true&utm_source=googleadwords_int&utm_medium=cpc&utm_campaign=paid_NFT&ref=HDYAHEES&gad=1&gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIPJj82GKLF_JJscgrXlY6BhL1S62-5OPM73pSogurI5DXzDivtk-7gaArJZEALw_wcB"
              target="_blank"
            >
              <img src={portfolio} alt="Portfolio Image 1" />
            </a>
            <div className={cx('main-row')}>
              <div className={cx('row-text')}>
                <h5>Website Design</h5>
              </div>
              <div className={cx('row-icon')}>
                <a
                  href="https://github.com/ngochuyen2002/Final-Mr.Binh"
                  target="_blank"
                >
                  <i className={cx('ri-github-fill')} />
                </a>
              </div>
            </div>
            <h4>Website Development For Dark CodeXplore</h4>
          </div>
          <div className={cx('row')}>
            {/* Portfolio Item 1 */}
            <a
              href="https://www.binance.com/vi/nft/home?ads=true&utm_source=googleadwords_int&utm_medium=cpc&utm_campaign=paid_NFT&ref=HDYAHEES&gad=1&gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIPJj82GKLF_JJscgrXlY6BhL1S62-5OPM73pSogurI5DXzDivtk-7gaArJZEALw_wcB"
              target="_blank"
            >
              <img src={portfolio} alt="Portfolio Image 1" />
            </a>
            <div className={cx('main-row')}>
              <div className={cx('row-text')}>
                <h5>Website Design</h5>
              </div>
              <div className={cx('row-icon')}>
                <a
                  href="https://github.com/ngochuyen2002/Final-Mr.Binh"
                  target="_blank"
                >
                  <i className={cx('ri-github-fill')} />
                </a>
              </div>
            </div>
            <h4>Website Development For Dark CodeXplore</h4>
          </div>
          {/* Repeat the same structure for other portfolio items */}
        </div>
      </section>
      <section className={cx('contact')} id="contact">
        <div className={cx('center-text')} >
          <h2>
            Add <span>activity</span>
          </h2>
        </div>
        <div className={cx('form-container')} >



          <form onSubmit={handleSubmit}>
            <div className={cx('input-field')}>
              <label>Date Meeting</label>
              <input
                type="date"
                required=""
                id="date"
                value={date}
                onChange={handleDateChange}
                className={cx({})}
              />
            </div>

            <div className={cx('input-field')}>
              <label>Time</label>
              <select
                value={time_range}
                onChange={handleTimeChange}>
                <option value="9am-11am">9am-11am</option>
                <option value="1pm-3pm">1pm-3pm</option>
                <option value="3pm-5pm">3pm-5pm</option>
                <option value="5pm-7pm">5pm-7pm</option>
                <option value="7pm-9pm">7pm-9pm</option>
              </select>
            </div>


            <div className={cx('input-field')}>
              <label>Message</label>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Write Message Here ..."
                required=""
                value={content}
                onChange={handleContentChange}
              />
            </div>
            <button className={cx('input-field')} type="submit"
              name=""
              defaultValue="Send Message"
            > submit

            </button>
          </form>
        </div>
      </section>
    </div>

  );
}

export default HomepageBlog_admin;
