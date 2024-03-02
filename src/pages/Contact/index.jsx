import Navigation from '../../component/layout/Navigation';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faClock, faEnvelope, faEnvelopeOpenText, faHouse, faPhone, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { AspectRatio } from '@chakra-ui/react';
import Footer from '../../component/footer/Footer';

const Contact = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className='contact-header'>
        <h1>LIÊN HỆ</h1>
        <div className='contact-home-span'>
          <span>
            <a>Trang Chủ</a>
          </span>
   //
          <span>
            <strong>
              LIÊN HỆ
            </strong>
          </span>
        </div>
      </div>
      <div className='contact-information-map'>
        <div className='contact-information'>
       <div className='information-h2-span-ico '>
       <div className='container-information'>
            <h2>CÔNG TY TNHH MTV WEDDING WONDERS</h2>
            <li>
              <span>
                <FontAwesomeIcon className='icon' icon={faHouse} />
              </span>
              <span>
                57, đường 19, P.An Khánh, TP Thủ Đức
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon className='icon' icon={faPhoneVolume} />
              </span>
              <span>0977418584 </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon className='icon' icon={faEnvelopeOpenText} />
              </span>
              <span>
                info@weddingwonders.vn
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon className='icon' icon={faClock} />
              </span>
              <span>9:00 - 18:00 Thứ 2- Thứ 6</span>
            </li>
            <div className='contact-h2'>
              <h4>FOLLOW US</h4>
            </div>
            <div className='boder-butom'>
            </div>
            <div className='contact-ico'>
            <div className='hover-ico-black'>  <a><FontAwesomeIcon  icon={faFacebook} /></a></div>
             <div className='hover-ico-black'> <a><FontAwesomeIcon  icon={faYoutube} /></a></div>
             <div className='hover-ico-black'>
             <a><FontAwesomeIcon  icon={faInstagram} /></a>
             </div>
            <div className='hover-ico-black'>  <a><FontAwesomeIcon  icon={faPinterest} /></a></div>
            </div>
            <div>
              <p>Vui lòng hẹn lịch trước khi đến qua email hoặc số điện thoại. </p>
            </div>
          </div>
       </div>
        </div>
        <div className='contact-map'>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
            />
          </AspectRatio>
        </div>

      </div>
      <div className='container-input-button'>
        <div className='div-input-buton'>
      <div className='div-input-button-wrap'>
      <div className='div-input-button-text1 div-margin-top'>
            <h2>GỬI YÊU CẦU CHO CHÚNG TÔI</h2>
          </div>
          <div className='div-input-button-text2 div-margin-top'>
            <label>
            Họ Tên 
            </label>
            <span>*</span>
            <input type='text'className='text-button'  placeholder='Your name'></input>
          </div>
          <div className='div-input-button-text3 div-margin-top'>
          <label>
          Số điện thoại
            </label>
            <span>*</span>
            <input type='text' className='text-button' placeholder='Phone'></input>
          </div>
          <div className='div-input-button-text4 div-margin-top'>
          <label>
             Email
            </label>
            <span>*</span>
            <input type='text' className='text-button' placeholder='Your email'></input>
          </div>
          <div className='div-input-button-text5 div-margin-top'>
          <label>
          Lời nhắn của bạn đến Wedding Wonders
            </label>
            <span>*</span>
        <textarea name="" id="" cols="10" rows="5"></textarea>
          </div>
          <div className='div-input-button-text6 div-margin-top'>
            <button>Gửi yêu cầu</button>
          </div>
      </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
export default Contact;