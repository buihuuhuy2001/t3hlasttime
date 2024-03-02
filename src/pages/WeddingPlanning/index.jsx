import Navigation from '../../component/layout/Navigation';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@chakra-ui/react";
import Footer from '../../component/footer/Footer';
const WeddingPlanning = () => {
    return (
        <div id='container-wedding'>
            <Navigation></Navigation>
            <div className='container-header'>
                <div className='header-h1-h3'>
                    <h1>Dịch Vụ Wedding Planning</h1>
                    <h3>Whatever You Need, We’ll Be There To Help</h3>
                </div>
            </div>

            <div className='container-colunm-paragraph'>
                <div className='colunm-paragraph'>
                    <h1>DỊCH VỤ WEDDING PLANNING</h1>
                    <h2>LÊN KẾ HOẠCH TIỆC CƯỚI</h2>
                    <div className='colunm-paragraph-p'>
                        <p>Chúng tôi hiểu rằng, những cặp đôi hiên đại thường bận rộn và ít có thời gian để lên kế hoạch, chăm chút cho ngày trọng đại của mình và cũng gặp nhiều khó khăn để tìm kiếm, quản lý các đơn vị cung cấp dịch vụ, địa điểm tổ chức tiệc cưới… Hãy để Wedding Wonders Việt Nam đồng hành cùng bạn để giải tỏa áp lực trên và tận hưởng ngày vui với các gói dịch vụ Wedding Planning đa dạng, chăm lo trọn vẹn.</p>
                        <p>Để phù hợp với ngân sách của mọi khách hàng, phí dịch vụ wedding planning của Wedding Wonders luôn sẵn sàng linh động theo. Với nhu cầu của mình, CDCR chỉ cần lựa chọn dịch vụ cần thiết, chi phí sẽ được cân đối dựa trên lựa chọn tương ứng.</p>
                    </div>
                </div>
            </div>
            <div className='container-boder-icon'>
                <div className='sepera-ico-weddiing'>
                    <div className='separat-icon'>
                        <div className='border-botttom' ></div>
                        <div className='star-icon'><FontAwesomeIcon icon={faStar} /></div>
                        <div className='border-botttom' ></div>
                    </div>
                    <div className='div-h2'>
                        <h2>CÁC GÓI DỊCH VỤ</h2>
                    </div>
                </div>
            </div>
            <div className='container-img-text-colunm'>
                <div className='div-text'>
                    <div className='div-text-colunm'>
                        <div className='div-h3'>
                            <h3>FULL WEDDING PLANNING</h3>
                        </div>
                        <div className='div-p1'>
                            <p>Dịch vụ lên kế hoạch cưới trọn gói phù hợp với các cặp đôi cần sự đồng hành, hỗ trợ đầy đủ của một wedding planner trong suốt quá trình chuẩn bị cho đến ngày cưới để ngày trọng đại diễn ra một cách hoàn hảo, chu đáo.</p>
                        </div>
                        <div className='div-p2'>
                            <p>Với dịch vụ Full Wedding Planning cặp đôi sẽ được team planner của Wedding Wonders Việt Nam tư vấn, hỗ trợ từ những bước đầu tiên của việc lập kế hoạch cưới như lên ngân sách, địa điểm tổ chức, phong cách trang trí… cho đến lên kịch bản và quản lý toàn bộ chương trình trong ngày cưới và giải quyết những vấn đề sau tiệc cưới.</p>
                        </div>
                    </div>
                </div>
                <div className='div-img'>
                    <img src='https://weddingwonders.vn/wp-content/uploads/2021/10/Dich-vu-Wedding-planning-quan-ly-chuong-trinh-cuoi-Wedding-Wonders-Viet-Nam.jpg' style={{ width: '570px', height: '615px' }}></img>
                </div>
            </div>



            <div className='container-img-text-colunm-btn'>
            <div className='div-img'>
                    <img src='https://weddingwonders.vn/wp-content/uploads/2021/10/Dich-vu-Wedding-planning-tuy-chon-Wedding-Wonders-Viet-Nam.jpg' style={{ width: '570px', height: '615px' }}></img>
                </div>
                <div className='div-text'>
                    <div className='div-text-colunm-btn'>
                        <div className='div-h3-btn'>
                            <h3>PARTIAL WEDDING PLANNING</h3>
                        </div>
                        <div className='div-p1'>
                            <p>Dịch vụ lập kế hoạch đám cưới từng phần dành cho các cặp đôi cần sự hỗ trợ và kinh nghiệm của một wedding planner nhưng chỉ lựa chọn những dịch vụ cần thiết, phù hợp dựa trên nhu cầu thực tế của mình.</p>
                        </div>
                        <div className='div-p2'>
                            <p>Wedding Wonders Việt Nam cung cấp dịch vụ wedding planning từng phần cho các cặp đôi dễ dàng lựa chọn hạng mục planning cần thiết cho riêng mình, gói dịch vụ này sẽ giúp cặp đôi không vượt quá ngân sách cho phép của mình mà vẫn nhận được sự hỗ trợ từ các wedding planner chuyên nghiệp.</p>
                        </div>
                    </div>
                </div>
              
            </div>



            <div className='container-img-text-colunm-btn'>
                <div className='div-text'>
                    <div className='div-text-colunm'>
                        <div className='div-h3'>
                            <h3>WEDDING DAY MANAGEMENT</h3>
                        </div>
                        <div className='div-p1'>
                            <p>Dịch vụ Quản lý Ngày Cưới dành cho các cặp đôi chỉ cần sự hỗ trợ và đồng hành của một wedding planner trong ngày cưới của mình. </p>
                        </div>
                        <div className='div-p2'>
                            <p>Với gói dịch vụ quản lý ngày cưới , cặp đôi chỉ cần tận hưởng ngày vui cùng gia đình, bạn bè và người thân, việc tổ chức quản lý và điều hành toàn bộ chương trình, đồng thời giải quyết những tình huống có thể phát sinh trong ngày cưới sẽ do Wedding Wonders Team phụ trách.</p>
                        </div>
                    </div>
                </div>
                <div className='div-img'>
                    <img src='https://weddingwonders.vn/wp-content/uploads/2021/10/Dich-vu-Wedding-planning-full-Wedding-Wonders-Viet-Nam.jpg' style={{ width: '570px', height: '615px' }}></img>
                </div>
            </div>
            <div className='container-boder-icon'>
                <div className='div-sepera-ico-weddiing'>
                    <div className='separat-icon'>
                        <div className='border-botttom' ></div>
                        <div className='star-icon'><FontAwesomeIcon icon={faStar} /></div>
                        <div className='border-botttom' ></div>
                    </div>
                    <div className='div-h2'>
                        <h2>CÁC GÓI DỊCH VỤ</h2>
                    </div>
                    <div className='div-p-btn'>
                        <p>Dịch vụ lên kế hoạch tiệc cưới của Wedding Wonders Việt Nam bao gồm mọi khía cạnh trong quá trình chuẩn bị và tổ chức một tiệc cưới hoàn hảo, chu đáo. Tuy nhiên, dựa trên nhu cầu thực tế của mình, khách hàng có thể lựa chọn cho mình hạng mục cần thiết nhất!</p>
                    </div>
                </div>
            </div>

            <div className='container-three-paragraph'>
                <div className='three-paragraph-one'>
                   <div className='div-paragraph-one-btn'>
                  <div className='div-h3-css-buttom'>
                  <h3>TRƯỚC TIỆC CƯỚI</h3>
                    <div className='div-css-buttom'></div>
                  </div>
                    <div className='div-li-colunm'>
                      <ul>
                      <li>Tư vấn, lên kế hoạch chi tiết về phong cách trang trí, chương trình…phù hợp với tính cách và ngân sách của CDCR.</li>
                        <li>Đồng hành cùng CDCR đến các địa điểm tổ chức.</li>
                        <li>Lên kịch bản chi tiết cho chương trình.</li>
                        <li>Điều phối thời gian giao nhận hàng của các nhà cung cấp khác.</li>
                        <li>Thiết kế, in ấn thiệp mời và một số chi tiết khác trong ngày cưới.</li>
                        <li>Thiết kế website wedding, thiệp mời điện tử..</li>
                      </ul>
                    </div>
                   </div>
                </div>
                <div className='three-paragraph-one'>
                   <div className='div-paragraph-one-btn'>
                  <div className='div-h3-css-buttom'>
                  <h3>TRONG TIỆC CƯỚI</h3>
                    <div className='div-css-buttom'></div>
                  </div>
                    <div className='div-li-colunm'>
                      <ul>
                      <li>Hỗ trợ CDCR làm việc với nhà hàng.</li>
                        <li>Hỗ trợ gia đình đón khách và hướng dẫn khách theo yêu cầu của gia đình.</li>
                        <li>Giám sát, điều phối âm thanh ánh sáng.</li>
                        <li>Chịu trách nhiệm làm việc với MC, ban nhạc…điều phối, quản lý toàn bộ chương trình.</li>
                        <li>Điều phối, làm việc với ekip quay phim, chụp ảnh.</li>
                        <li>Giải quyết các vấn đề phát sinh trong tiệc cưới</li>
                      </ul>
                    </div>
                   </div>
                </div>
                <div className='three-paragraph-one'>
                   <div className='div-paragraph-one-btn'>
                  <div className='div-h3-css-buttom'>
                  <h3>SAU TIỆC CƯỚI</h3>
                    <div className='div-css-buttom'></div>
                  </div>
                    <div className='div-li-colunm'>
                      <ul>
                      <li>Làm việc với ekip quay phim, chụp ảnh, dựng phim, retouch ảnh theo yêu cầu của CDCR.</li>
                        <li>Hỗ trợ giải quyết các vấn đề phát sinh sau tiệc (nếu có)</li>
                       
                      </ul>
                    </div>
                   </div>
                </div>
            </div>
            <div className='container-overlay'>
            <img src="https://weddingwonders.vn/wp-content/uploads/2021/06/Tiec-cuoi-Anh-Hang-Chien-Hung-by-WEDDING-WONDERS-VIET-NAM-Trang-tri-tiec-cuoi-ngoai-troi.jpg" />
             <div className='wrap-h2-div'>
             <h2>Bạn đang lên kế hoạch cho tiệc cưới của mình?</h2>
                <div>Hãy sử dụng Form mẫu sau đây để cho Wedding Wonders biết về nhu cầu của bạn nhé!</div>
                <div className='ovrelay-button'>
                <Button className='button' colorScheme='blue'>LÊN KẾ HOẠCH NGAY</Button>
                </div>
             </div>
            </div>
            <div className="content_btn2">
    <div className="content_btn2_text">
      <h1>Ý TƯỞNG VÀ LỜI KHUYÊN</h1>
      <h2>CẨM NANG CƯỚI</h2>
    </div>
    <div className="content_btn2_img">
      <div className="div_btn2">
        <img
          className="img_btn2_css"
          src="https://weddingwonders.vn/wp-content/uploads/2021/06/Table-map-tiec-cuoi-Giau-Phong-Tiec-cuoi-ngoai-troi-Wedding-Wonders-Viet-Nam.jpg"
        />
        <a>Cac Su Hướng Cưới Được Yêu Thích Nhất</a>
      </div>
      <div className="div_btn2">
        <img
          className="img_btn2_css"
          src="https://weddingwonders.vn/wp-content/uploads/2021/05/Moments-Wedding-Thu-Hien-Hoang-Vu-by-Wedding-Wonders-Viet-Nam-6.jpg"
        />
        <a>10 Ý Tưởng Đám Cưới Hiện Đại</a>
      </div>
      <div className="div_btn2">
        <img
          className="img_btn2_css"
          src="https://weddingwonders.vn/wp-content/uploads/2021/06/Moments-tiec-cuoi-Giau-Phong-Tiec-cuoi-ngoai-troi-Wedding-Wonders-Viet-Nam-3.jpg"
        />
        <a>9 Điều Cần Chuẩn Bị Cho Ngày Cưới</a>
      </div>
    </div>
  </div>
  <Footer></Footer>
        </div>
    )
}
export default WeddingPlanning;