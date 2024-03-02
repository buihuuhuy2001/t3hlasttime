import Footer from '../../component/footer/Footer';
import Navigation from '../../component/layout/Navigation';
import './index.css';
const Introduce=()=>{
    return(
        <div className='container-introduce'>

         <Navigation></Navigation>
            <div id="silder">
    <div className="img">
      <img src="https://weddingwonders.vn/wp-content/uploads/2021/06/Tiec-cuoi-Anh-Hang-Chien-Hung-by-WEDDING-WONDERS-VIET-NAM-Trang-tri-tiec-cuoi-ngoai-troi.jpg" />
    </div>
    <div className="nav-text">
      <h1>WEDDING WONDERS VIỆT NAM</h1>
      <p>PREMIUM WEDDING &amp; EVENTS</p>
    </div>
    <div className="introduce">
      <div className="introduce-img">
        <img
          className="introduce-img-css"
          src="https://weddingwonders.vn/wp-content/uploads/2021/10/Ve-chung-toi-Wedding-Wonders-Viet-Nam.jpg"
        />
      </div>
      <div className="introduce-text">
        <h2>VỀ CHUNG TÔI</h2>
        <p>
          Wedding Wonders Việt Nam là một trong nhưng đơn vị chuyên nghiệp và có
          nhiều năm kinh nghiệm trong lĩnh vực lên kế hoạch ,thiết kế ,tổ chức
          và trang trí tiệc cưới,sự kiện tại Việt Nam. Chúng tôi cung cấp các
          dịch vụ an toàn diện mang đến trải nghiệm hoàn hảo cho mọi khách hàng.
          Đến với Weddinig Wonders Việt Nam, dù là tiệc cưới hay sự kiện cá
          nhân, sự kiện công ty đều mang một dấu ấn rất riêng, nổi bật và thật
          sự có ý nghĩa.
        </p>
        <p>
          Chúng tôi hiểu được rằng các cặp đôi phải mất rất nhiều thời gian, và
          gặp nhiều khó khăn để lựa chọn nguồn cung cấp, địa điểm tổ chức,...và
          phong cách trang trí phù hợp mà không vượt qua quá ngân sách cho phép.
          Với kinh nghiệm nhiều năm trong nghề, sứ mệnh của chúng tôi ở đây là
          để giupd bạn giải tỏa áp lực đó và thật an tâm tận hưởng ngày vui bằng
          sự chuyên nghiệ p, sáng tạo, cùng các gói dịch vụ cước có chi phí linh
          hoạt,phù hợp với mọi khách hàng.
        </p>
      </div>
    </div>
  </div>
  <div className="introduce">
    <div className="introduce-text-css">
      <h1>HOA NGUYEN</h1>
      <p>FOUNDER &amp; CREATIVE DIRECTOR</p>
      <p>
        Để viết veef tình yêu chúng ta có hàng vạn tản văn ca ngợi, Shakespeare
        đã nói "Thời gian với mỗi người là hữu hạn, nhưng tình yêu lứa đôi là vô
        hạn".Ngày trọng đại cuả mỗi cập đôi là thời điểm làm nên sự gắn kết
        trường cửu bằng một tình yêu như thế. Và Wedding Wonders Việt Nam nhận
        thức được sự vinh dự này khi cùng các cặp đôi kiến tạo ngày trọng đại
        của họ một cách chu đáo,để ngày cưới trở thành một kỷ quan cảm xúc, mở
        đầu cho sự gắn kết dài lâu vô hạn.
      </p>
      <img
        className="footer-img"
        src="https://weddingwonders.vn/wp-content/uploads/2020/12/logo-wedding-wonders-tagline.png"
      />
    </div>
    <div className="introduce-img">
      <img
        className="introduce-img-css"
        src="//weddingwonders.vn/wp-content/uploads/2021/10/Wedding-Wonders-Viet-Nam-Story.jpg"
      />
    </div>
  </div>
  <div className="contact-introduce">
    <div className="contact-introduce-h-p">
      <h2>LIÊN HỆ</h2>
      <p>
        Để lại tên và email cùng lời nhắn của bạn tới Wedding Wonders để chúng
        tôi biết về yêu cầu của bạn.
        <br />
        Hoặc gọi ngay cho chung tôi qua số điện thoại 0909.601.301 để được hỗ
        trợ nhanh nhất!
      </p>
    </div>
    <div className="contact-input">
      <div className="input-name-email">
        <div className="input-name">
          <input type="text" placeholder="Name" />
        </div>
        <div className="input-email marigin-left-email">
          <input type="text" placeholder="Email" />
        </div>
      </div>
      <div className="input-message">
        <textarea rows={5} cols={32} placeholder="Message" defaultValue={""} />
      </div>
    </div>
    <div className="contact-button">
      <div className="class-button">
        <button>GỬI YÊU CẦU</button>
      </div>
    </div>
  </div>
 

  <Footer></Footer>
        </div>
    );
}
export default Introduce;