import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faCaretRight,  faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer=()=>{
    return(
    <div>
        <div id="footer">
    <div className="footer_end col">
      <div className="footer_end_img">
        <img
          className="footer_end_img"
          src="https://weddingwonders.vn/wp-content/uploads/2020/12/logo-wedding-wonders-tagline.png"
        />
      </div>
      <div className="footer_end_p">
        <span>
          Tự hào dẫn đầu lĩnh vực tổ chức sự kiện và là nhà kiến tạo xu hướng
          tiệc cưới hàng đầu Việt Nam.
        </span>
      </div>
      <div className="footer_end_icon">
    <i><FontAwesomeIcon icon={faFacebook}  /></i>
      
        <i ><FontAwesomeIcon icon={faYoutube}  /></i>
       <i><FontAwesomeIcon icon={faInstagram} /></i>
      <i><FontAwesomeIcon icon={faPinterest} /></i>
  
      </div>
    </div>
    <div className="footer_contac col ">
      <h5>LIÊN HỆ</h5>
      <div>
        <a />
      </div>
      <div className="css_img">
        <ul>
          <li>
          <i><FontAwesomeIcon icon={faHouse} /></i>
            <span>57, Đường 19, P. An Khánh, TP Thủ Đức, TP HCM</span>
          </li>
          <li>
         <i><FontAwesomeIcon icon={faPhone} /></i>
            <span>0909.601.301</span>
          </li>
          <li>
           <i><FontAwesomeIcon icon={faEnvelope} /></i>
            <span>info@weddingwonders.vn</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer_service col ">
      <h5>DỊCH VỤ</h5>
      <div />
      <div className="css_img">
        <ul>
          <li>
          <i><FontAwesomeIcon icon={faCaretRight} /></i>
            <span>Trang trí tiệc cưới</span>
          </li>
          <li>
          <i><FontAwesomeIcon icon={faCaretRight} /></i>
            <span>Wedding planning</span>
          </li>
          <li>
          <i><FontAwesomeIcon icon={faCaretRight} /></i>
            <span>Wedding planning</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer_register col_css">
      <h5>ĐĂNG KÝ NHẬN ƯU ĐÃI</h5>
      <div />
      <div>
        <p>Nhận ngay phiếu giảm giá 5% cho lần đầu tiên sử dụng dịch vụ.</p>
      </div>
      <div>
        <input placeholder="Email" />
        <button>ĐĂNG KÝ</button>
      </div>
    </div>
  </div>
    </div>
    )

}
export default Footer;