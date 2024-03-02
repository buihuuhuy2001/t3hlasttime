import Navigation from "../../component/layout/Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';
import { faComment } from "@fortawesome/free-solid-svg-icons";
const NoPage = () => {
    return (
        <div className="container-blog">
            <Navigation></Navigation>
            <div className='contact-header'>
                <h1>LIÊN HỆ</h1>
                <div className='contact-home-span'>
                    <span>
                        <a>Trang Chủ</a>
                    </span>
           /
                    <span>
                        <strong>
                            LIÊN HỆ
                        </strong>
                    </span>
                </div>
            </div>
          <div className="entry_content">
<div className="entry_content_wrap">
    <div className="div_link_a">
    <a>CẨM NANG CƯỚI </a>/
    <a>TIỆC CƯỚI NGOÀI TRỜI </a>/
    <a>  TIỆC CƯỚI NHÀ HÀNG </a>/
    <a> Ý TƯỞNG CƯỚI</a>
</div>
<h2>Gộp Chung Lễ Ăn Hỏi Và Đám Cưới Nên Hay Không?</h2>
<p>Nhiều gia đình chọn gộp lễ ăn hỏi và đám cưới chung một ngày, nhưng băn khoăn không biết có nên hay không. Hãy cùng Wedding Wonders tìm câu trả lời nhé.</p>
   <div className="div_buttom">
    <div>
    <FontAwesomeIcon icon={faComment} />
       <a>0 COMMENTS</a>
    </div>
    <div>
       03/03/2024
    </div>

    </div>
    </div>
          </div>
          <div className="div_img_conten">
            <div className="div_img">

            </div>
            <div className="div_conten">
                
            </div>
          </div>
        </div>
    )
}
export default NoPage;