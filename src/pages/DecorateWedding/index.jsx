import React, { useState } from 'react';
import './index.css';
import Navigation from "../../component/layout/Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight, faArrowUp, faChevronDown, faChevronUp, faStar } from '@fortawesome/free-solid-svg-icons'
import { Box, Card, CardBody, CardHeader, Center, ChakraProvider, Container, Heading, LinkBox, LinkOverlay, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import Footer from '../../component/footer/Footer';
const DecorateWedding = () => {
  const [showOpinion, setshowOpinion] = useState(false);
  const onClick = () => {
    setshowOpinion(!showOpinion)
  };

  const [showPlan, setshowPlan] = useState(false);
  const onClickPlan = () => {
    setshowPlan(!showPlan)
  };


  const [showDesign, setshowDesigin] = useState(false);
  const onClickDesigin = () => {
    setshowDesigin(!showDesign)
  };


  const [showContract, setshowContract] = useState(false);
  const onClickContract = () => {
    setshowContract(!showContract)
  };


  const [showConstruction, setshowConstruction] = useState(false);
  const onClickConstruction = () => {
    setshowConstruction(!showConstruction)
  };

  const [showHandOver, setshowHandOver] = useState(false);
  const onClickHandOver = () => {
    setshowHandOver(!showHandOver)
  };


  const [showText, setshowText] = useState(false);
  const onClickText = () => {
    setshowText(!showText)
  };


  const [showText1, setshowText1] = useState(false);
  const onClickText1 = () => {
    setshowText1(!showText1)
  };


  const [showText2, setshowText2] = useState(false);
  const onClickText2 = () => {
    setshowText2(!showText2)
  };


  const [showText3, setshowText3] = useState(false);
  const onClickText3 = () => {
    setshowText3(!showText3)
  };
  const [showText4, setshowText4] = useState(false);
  const onClickText4 = () => {
    setshowText4(!showText4)
  };
  const [showText5, setshowText5] = useState(false);
  const onClickText5 = () => {
    setshowText5(!showText5)
  };
  const [showText6, setshowText6] = useState(false);
  const onClickText6 = () => {
    setshowText6(!showText6)
  };
  const [showText7, setshowText7] = useState(false);
  const onClickText7 = () => {
    setshowText7(!showText7)
  };



  return (
    <div>
      <Navigation></Navigation>
      <div id="backgrund-img">
        <div class="h1-h3-text">
          <h1>Dịch Vụ Trang Trí Tiệc Cưới</h1>
          <h3>We Desgin Wedding-That captur The Imagination</h3>
        </div>
      </div>
      <div class="text-h1-p">
        <div class="class-h1-p">
          <div style={{
            backgroundColor: 'white ',
            fontSize: '30px',

          }}>
            <Center bg='tomato' h='100px'>
              <h1>TRANG TRÍ TIỆC CƯỚI</h1>
            </Center>
          </div>
          <p>
            Ngày cưới là một trong những sự kiện quan trọng nhất của cuộc đời, vì vậy các cặp đôi luôn muốn nó thật hoàn hảo. Hãy để Wedding Wonders đảm nhận việc trang trí cho ngày trọng đại này, chúng tôi luôn sẵn sàng lắng nghe mong muốn của các cặp đôi để hiện thực hoá các ý tưởng về đám cưới, giúp ghi dấu ấn cá nhân và trở thành một lễ cưới thật sự có ý nghĩa. Và bạn sẽ hoàn toàn yên tâm rằng không chỉ địa điểm tổ chức sẽ trở nên thật tuyệt vời mà chi phí còn rất linh hoạt, phù hợp với ngân sách mà bạn đang có.

          </p>
        </div>
      </div>
      <div id='container-linkbox'>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '150px',
          justifyContent: ' space-around',
          width: '1212px',
        }}>

          <ChakraProvider>
            <LinkBox className='insert-linkBox' as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',

                height: '200px '
              }}>

                <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                  <img src='https://weddingwonders.vn/wp-content/uploads/2022/02/gate1.png' style={{ width: '48px', height: '48px' }}></img>
                </Box>
                <Heading size='md' my='2'>
                  <LinkOverlay href='#'>
                    <h2>TIỆC CƯỚI NGOÀI TRỜI</h2>
                  </LinkOverlay>
                </Heading>
                <Text mb='3'>
                  <p>Tiệc cưới ngoài trời đang là xu hướng cưới hiện đại của những năm gần đây, loại hình tiệc cưới này rất phù hợp với những tiệc cưới có quy mô vừa và nhỏ.</p>
                </Text>
                <Box as='a' color='teal.400' href='#inner-link' fontWeight='bold'>
                  <a>Xem thêm</a>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Box>

              </div>
            </LinkBox>
          </ChakraProvider>


          <ChakraProvider>
            <LinkBox className='insert-linkBox' as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
                <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                  <img src='https://weddingwonders.vn/wp-content/uploads/2022/02/wedding1.png' style={{ width: '48px', height: '48px' }}></img>
                </Box>
                <Heading size='md' my='2'>
                  <LinkOverlay href='#'>
                    <h2>TIỆC CƯỚI TRONG NHÀ</h2>
                  </LinkOverlay>
                </Heading>
                <Text mb='3'>
                  <p>Tiệc cưới ngoài trời đang là xu hướng cưới hiện đại của những năm gần đây, loại hình tiệc cưới này rất phù hợp với những tiệc cưới có quy mô vừa và nhỏ.</p>
                </Text>
                <Box as='a' color='teal.400' href='#inner-link' fontWeight='bold'>
                  <a>Xem thêm</a>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Box>
              </div>
            </LinkBox>
          </ChakraProvider>


          <ChakraProvider>
            <LinkBox className='insert-linkBox' as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '200px',
              }}>
                <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                  <img src='https://weddingwonders.vn/wp-content/uploads/2022/02/trang-tri-gia-tien-new.png' style={{ width: '48px', height: '48px' }}></img>
                </Box>
                <Heading size='md' my='2'>
                  <LinkOverlay href='#'>
                    <h2>TRANG TRÍ GIA TIÊN</h2>
                  </LinkOverlay>
                </Heading>
                <Text mb='3'>
                  <p>Tiệc cưới ngoài trời đang là xu hướng cưới hiện đại của những năm gần đây, loại hình tiệc cưới này rất phù hợp với những tiệc cưới có quy mô vừa và nhỏ.</p>
                </Text>
                <Box as='a' color='teal.400' href='#inner-link' fontWeight='bold'>
                  <a>Xem thêm</a>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Box>
              </div>
            </LinkBox>
          </ChakraProvider>
        </div>
      </div>

      <div id='container-div-img'>
        <div className='div-icon'>
          <div className='div-icon-img'>
            <img src='https://weddingwonders.vn/wp-content/uploads/2021/10/Dich-vu-trang-tri-tiec-cuoi-cao-cap-Wedding-Wonders-Viet-Nam.jpg' style={{ width: '510px', height: '446.25px' }}></img>
            <img className='weedding-img' src='https://weddingwonders.vn/wp-content/uploads/2020/12/logo-wedding-wonders-tagline.png' style={{ width: '198px', height: '27px' }}></img>
            <h2 className='div-icon-h2'>Premium Wedding Decoration</h2>
          </div>
          <div className='div-icon-img-text'>
            <h2>Giá Trị & Sự Khác Biệt</h2>
            <p>Vì sao khách hàng lựa chọn Wedding Wonders Việt Nam?</p>

            <div className='div-img-dislay'>
              <img src='https://weddingwonders.vn/wp-content/uploads/2022/02/trending.png' style={{ width: '51.74px', height: '51.74px' }}></img>
              <a>
                <h3>Dẫn Đầu Xu Hướng</h3>
                <p>Luôn nắm bắt xu hướng cưới quốc tế và dẫn đầu trong phong cách thiết kế tiệc cưới hiện đại, sang trọng.</p>
              </a>
            </div>
            <div className='div-img-dislay'>
              <img src='https://weddingwonders.vn/wp-content/uploads/2022/02/one.png' style={{ width: '51.74px', height: '51.74px' }}></img>
              <a> <h3>Tính Cá Nhân Hóa</h3>
                <p>Mỗi thiết kế của Wedding Wonders Việt Nam là độc quyền, duy nhất và dành riêng cho mỗi cặp đôi.</p>
              </a>
            </div>
            <div className='div-img-dislay'>
              <img src='https://weddingwonders.vn/wp-content/uploads/2022/02/san-xuat.png' style={{ width: '51.74px', height: '51.74px' }}></img>
              <a>
                <h3>Thiết Kế & Sản Xuất</h3>
                <p>Đội ngũ thiết kế sáng tạo, nhiệt huyết. Sản xuất & thi công chuyên nghiệp, không qua trung gian.</p>
              </a>
            </div>
            <div className='div-img-dislay'>
              <img src='https://weddingwonders.vn/wp-content/uploads/2022/02/tiet-kiem-chi-phi.png' style={{ width: '51.74px', height: '51.74px' }}></img>
              <a>
                <h3>Tiết Kiệm Chi Phí</h3>
                <p>Chi phí linh hoạt, dễ dàng đáp ứng theo ngân sách cho phép và nhu cầu riêng của mỗi khách hàng.</p>
              </a>
            </div>
          </div>
        </div>

      </div>
      <div className="content">
        <div className="content_text-col">
          <h1>Dự Án Thực Tế</h1>
          <h2>Một Số Tiệc Cưới Đã Thực Hiện</h2>
          <p>
            Nếu bạn đang tìm kiếm một tiệc cưới với sự độc đáo, ý nghĩa và thật đáng nhớ. Hãy để Wedding Wonders truyền cảm hứng cho trí tưởng tượng của bạn với những ý tưởng và kinh nghiệm vững chắc của chúng tôi. Cùng theo dõi bộ sưu tập công việc đầy tinh tế từ Wedding Wonders Việt Nam.
          </p>
        </div>
      </div>
      <div className='portfolio-clo'>
        <div className='portfolio-a'>
          <a style={{ color: ' #fdb913' }}>ALL</a>
          <a>TIỆC CƯỚI </a>
          <a>TRANG TRÍ GIA TIÊN</a>

        </div>
      </div>

      <div className="content_img">
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/10/Tiec-cuoi-Huy-Ngoc-tai-Park-Hyatt-Hotel-duoc-len-ke-hoach-va-trang-tri-boi-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>Tiệc CƯới Trọng Huy &amp; Hồng Ngọc</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/06/Trang-tri-gia-tien-Phu-Thinh-Phuong-Thi-duoc-len-ke-hoach-va-trang-tri-boi-Wedding-Wonders-Viet-Nam-0.jpg"
            />
            <a> Lễ Gia Tiên|Thịnh Thi</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Tiec-cuoi-Cao-Tri-Hoang-Anh-tai-Nikko-Hotel-duoc-len-ke-hoach-va-trang-tri-boi-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Cao Trí &amp; Hoàng Anh</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Tiec-cuoi-My-Thanh-tai-Rose-Villa-Sai-Gon-duoc-len-ke-hoach-va-trang-tri-boi-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới My &amp; Thanh</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Tiec-cuoi-Thinh-Thi-tai-Lan-Anh-Garden-duoc-to-chuc-thuc-hien-boi-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯớiThịnh &amp; Thi</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Tiec-cuoi-Ngoc-Xuan-Anh-tai-Continental-Hotel-duoc-thuc-hien-boi-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Bảo Ngọc &amp; Xuân Anh</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Wedding-Khanh-Duy-Anh-tai-Landmark-81-decor-by-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Khanh &amp; Duy Anh</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Wedding-Jilee-Sofitel-by-Wedding-Wonders-Viet-Nam-.jpg"
            />
            <a>TIệc CƯới Ji park &amp; Justin Lee</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Wedding-Linh-Hai-An-Lam-Retreat-by-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Linh &amp; Hải</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/WEDDING-HANH-DUC-PARK-HYATT-By-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Hạnh &amp; Hoàng Đức</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2022/09/Tiec-cuoi-Hanh-Dienel-gem-center-Decor-by-Wedding-Wonders-Viet-Nam-3.jpg"
            />
            <a>TIệc CƯới Hạnh &amp; Daniel</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2022/08/DH_06240.jpg"
            />
            <a>TIệc CƯới Tấn Đạt &amp; Thanh Thi</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2022/07/Tiec-cuoi-Linh-Vinh-Decor-by-wedding-wonders-viet-nam.jpg"
            />
            <a>TIệc CƯới Thùy Linh &amp; Quang Vinh</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Gia-tien-Duc-Warren-Trang-tri-gia-tien-len-ke-hoach-to-chuc-tiec-cuoi-Wedding-Wonders-Viet-Nam-2.jpg"
            />
            <a>TIệc CƯới Hoàng Minh &amp; Phương Hoa</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Trang-tri-gia-tien-Peach-pink-Wedding-Wonders-len-ke-hoach-trang-tri-tiec-cuoi-gia-tien-cao-cap-1.jpg"
            />
            <a>TIệc CƯới Quang Minh&amp; Hoài Tư</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Trang-tri-gia-tien-Modern-Lotus-TRADITIONAL-CEREMONY-by-Wedding-Wonders-Viet-Nam-2.jpg"
            />
            <a>TIệc CƯới Quốc Đạt &amp; Hạnh Nguyễn</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Tiec-cuoi-Duc-Warren-Tiec-cuoi-ngoai-troi-wedding-planner-decor-by-Wedding-Wonders-Viet-Nam-2.jpg"
            />
            <a>Gia Tiên Ngọc Đức &amp; Warren Goodie</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Tiec-cuoi-Giau-Phong-Tiec-cuoi-ngoai-troi-wedding-planner-decor-trang-tri-tiec-cuoi-by-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Cao Trí &amp; Hoàng Anh</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Tiec-cuoi-Hoa-Linh-Tiec-cuoi-ngoai-troi-wedding-planner-decor-trang-tri-tiec-cuoi-by-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>Gia Tiên Peach pink</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Tiec-cuoi-Anh-Hang-Chien-Hung-by-WEDDING-WONDERS-VIET-NAM-Trang-tri-tiec-cuoi-ngoai-troi.jpg"
            />
            <a>Gia Tiên Modern Lotus</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Wedding-Diem-Ho-Thien-Nguyen-by-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>Tiệc Cước Ngọc Đức &amp; Warren Goodie</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/05/Wedding-Thu-Hien-Hoang-Vu-by-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Ngọc Giàu &amp; Huy Phong</a>
          </div>
        </div>
      </div>
      <div className='container-saparat-icon'>
        <div className='separat-icon'>
          <div className='border-botttom' ></div>
          <div className='star-icon'><FontAwesomeIcon icon={faStar} /></div>
          <div className='border-botttom' ></div>
        </div>
        <div className='container-text'>
          <h2>Quy Trình Làm Việc</h2>
          <p>Wedding Wonders Việt Nam đã hoàn thiện quy trình làm việc để có thể lắng nghe và đáp ứng khách hàng tốt nhất!</p>
        </div>
      </div>
      <div className='wrap-disply'>

        <div className='container-inner'>
          <div className='container-inner-h2-icon'>
            <div>
              <div className='div-span'>
                <span>
                  1. Tiếp Nhận Ý Kiến
                </span>
                <button onClick={onClick} >
                  {showOpinion ? (<FontAwesomeIcon icon={faChevronUp} />
                  ) : (<FontAwesomeIcon icon={faChevronDown} />)}
                </button>
                {showOpinion && <div className='display-show-btn'>
                  <p>Trên cơ sở lắng nghe, Weding Wonder sẽ phác thảo những ý tưởng cơ bản mà bạn mong muốn trong ngày cưới của mình</p>
                </div>}
              </div>

              <div className='div-span'>
                <span>
                  2. Lập Kế Hoạch Chi Tiết
                </span>
                <button onClick={onClickPlan} >
                  {showPlan ? (<FontAwesomeIcon icon={faChevronUp} />
                  ) : (<FontAwesomeIcon icon={faChevronDown} />)}
                </button>
                {showPlan && <div className='display-show-btn'>
                  <p>Thống nhất về các hạng mục cần thiết như thời gian, địa điểm, ý tưởng thiết kế.
                    Khách hàng chỉ cần đặt cọc giữ ngày</p>
                </div>}
              </div>
              <div className='div-span'>
                <span>
                  3. Thiết Kế Trực Quan
                </span>
                <button onClick={onClickDesigin} >
                  {showDesign ? (<FontAwesomeIcon icon={faChevronUp} />
                  ) : (<FontAwesomeIcon icon={faChevronDown} />)}
                </button>
                <div> {showDesign && <div className='display-show-btn'>
                  <p>Dựa theo kế hoạch, Wedding Wonders sẽ thiết kế mô phỏng trực quan với các bản vẽ 3D chi tiết, đáp ứng yêu cầu khách hàng</p>
                </div>}
                </div>
              </div>
              <div className='div-span'>
                <span>
                  4. Hợp Đồng Triển Khai
                </span>
                <button onClick={onClickContract} >
                  {showContract ? (<FontAwesomeIcon icon={faChevronUp} />
                  ) : (<FontAwesomeIcon icon={faChevronDown} />)}
                </button>
                {showContract && <div className='display-show-btn'>
                  <p>Từng hạng mục thiết kế được thống nhất trong hợp đồng để đảm bảo tiến độ, chất lượng và chi phi tối ưu cho khách hàng</p>
                </div>}
              </div>
              <div className='div-span'>
                <span>
                  5. Thi Công Và Giám Sát
                </span>
                <button onClick={onClickConstruction} >
                  {showConstruction ? (<FontAwesomeIcon icon={faChevronUp} />
                  ) : (<FontAwesomeIcon icon={faChevronDown} />)}
                </button>
                {showConstruction && <div className='display-show-btn'><p>Từ khâu sản xuất đến thi công trang trí, mỗi hạng mục được thực hiện theo kế hoạch với sự chỉnh chu và hoàn hảo nhất</p></div>}
              </div>
              <div className='div-span'>
                <span>
                  6. Bàn Giao & Kết Thúc
                </span>
                <button onClick={onClickHandOver} >
                  {showHandOver ? (<FontAwesomeIcon icon={faChevronUp} />
                  ) : (<FontAwesomeIcon icon={faChevronDown} />)}
                </button>
                {showHandOver && <div className='display-show-btn'> <p>Wedding Wonders đảm bảo cho sự kiện diễn ra theo kế hoạch, hỗ trợ xuyên suốt, đáp ứng theo toàn bộ hợp đồng.</p></div>}

              </div>
            </div>
          </div>
          <div className='container-img'>
            <img src='https://weddingwonders.vn/wp-content/uploads/2021/06/San-khau-Stage-wedding-tiec-cuoi-Hoa-Linh-Trang-tri-tiec-cuoi-ngoai-troi-len-ke-hoach-tiec-cuoi-Wedding-Wonders-Viet-Nam-4.jpg' style={{ width: '627px', height: '406px' }}></img>
          </div>
        </div>
      </div>


      <div className='container-saparat-icon'>
        <div className='separat-icon'>
          <div className='border-botttom' ></div>
          <div className='star-icon'><FontAwesomeIcon icon={faStar} /></div>
          <div className='border-botttom' ></div>
        </div>
        <div className=' '>
          <h2>CÂU HỎI THƯỜNG GẶP</h2>
        </div>
      </div>

      <div className='container-show-p'>
        <div className='show-div'>
          <div>
            <div onClick={onClickText} className='div-show-span-p'>
             <div className='hover-span-button'>
             <span>
                Wedding Wonders Việt Nam có văn phòng ở đâu?
              </span>
              <button  >
                {showText ? (<FontAwesomeIcon icon={faArrowUp} />
                ) : (<FontAwesomeIcon icon={faArrowDown} />)}
              </button>
             </div>
              {showText && <div className='display-show-text'>
                <p>Wedding Wonders Việt Nam có văn phòng tại: số 57, đường 19, P. An Khánh, TP. Thủ Đức, TP. HCM (Q2 cũ). Và xưởng sản xuất tại: số 189, đường 128, P. Phước Long A, TP. Thủ Đức, TP. HCM (Q9 cũ).

                  Vì tính chất công việc và thường xuyên di chuyển của team nên quý khách hàng vui lòng hẹn lịch trước khi đến qua email hoặc số điện thoại. Team sẽ phản hồi và sắp xếp lịch hẹn thích hợp!</p>
              </div>}
            </div>

            <div onClick={onClickText1} className='div-show-span-p'>
             <div className='hover-span-button'>
             <span>
                Khách hàng cần đặt dịch vụ trang trí bao lâu trước ngày cưới?
              </span>
              <button >
                {showText1 ? (<FontAwesomeIcon icon={faArrowUp} />
                ) : (<FontAwesomeIcon icon={faArrowDown} />)}
              </button>
             </div>
              {showText1 && <div className='display-show-text'>
                <p>Chúng tôi thường khuyên khách hàng nên đặt dịch vụ trước từ 3 đến 6 tháng trước ngày diễn ra tiệc cưới để có nhiều thời gian lên ý tưởng cũng như chỉnh sửa thiết kế. Tuy nhiên trong một vài trường hợp cận ngày cưới khách hàng mới có thể cân đối được chi phí, Wedding Wonders hoàn toàn có thể linh động để thiết kế và sản xuất trong thời gian ngắn hơn rất nhiều mà vẫn đảm bảo yêu cầu về chất lượng và tính mỹ thuật!</p>
              </div>}
            </div>
            <div onClick={onClickText2} className='div-show-span-p'>
             <div className='hover-span-button'>
             <span>
                Wedding Wonders Việt Nam có cung cấp dịch vụ trang trí tiệc cưới theo gói cố định không?
              </span>
              <button >
                {showText2 ? (<FontAwesomeIcon icon={faArrowUp} />
                ) : (<FontAwesomeIcon icon={faArrowDown} />)}
              </button>
             </div>
              <div> {showText2 && <div className='display-show-text'>
                <p>Đối với dịch vụ trang trí tiệc cưới, Wedding Wonders Việt Nam có rất nhiều các gói dịch vụ cố định để khách hàng dễ dàng lựa chọn theo nhu cầu cũng như ngân sách cho phép của mình!</p>
              </div>}
              </div>
            </div>
            <div onClick={onClickText3} className='div-show-span-p'>
             <div className='hover-span-button'>
             <span>
                Wedding Wonders có thiết kế riêng cho mỗi tiệc cưới không?
              </span>
              <button  >
                {showText3 ? (<FontAwesomeIcon icon={faArrowUp}  />
                ) : (<FontAwesomeIcon icon={faArrowDown} />)}
              </button>
             </div>
              {showText3 && <div className='display-show-text'>
                <p>Chúng tôi tin rằng mỗi tiệc cưới là một bài hát viết riêng dành cho mỗi cặp đôi, vì vậy cho dù khách hàng chọn gói thiết kế riêng hay sản phẩm có sẵn chúng tôi đều lên ý tưởng thiết kế, để mỗi tiệc cưới đều là những thiết kế độc quyền, duy nhất và dành riêng cho các cặp đôi.</p>
              </div>}
            </div>

          </div>
        </div>
        <div className='show-div-p'>
          <div>
            <div onClick={onClickText4} className='div-show-span-p'>
         <div className='hover-span-button'>
         <span>
                Chi phí để trang trí cho một tiệc cưới là bao nhiêu?
              </span>
              <button  >
                {showText4 ? (<FontAwesomeIcon icon={faArrowUp} />
                ) : (<FontAwesomeIcon icon={faArrowDown}/>)}
              </button>
         </div>
              {showText4 && <div className='display-show-text'>
                <p>Chi phí để trang trí cho một tiệc cưới của Wedding Wonders phụ thuộc vào nhiều yếu tố khác nhau như số lượng hạng mục trang trí, concept trang trí và các yêu cầu khác. Đội ngũ của chúng tôi luôn sẵn sàng tư vấn để giúp khách hàng dễ dàng chọn lựa hạng mục và cân đối chi phí phù hợp. Thế nên hãy liên hệ ngay với chúng tôi hoặc điền vào bảng thông tin bên dưới để chúng tôi biết về dự định của bạn</p>
              </div>}
            </div>

            <div onClick={onClickText5} className='div-show-span-p'>
             <div className='hover-span-button'>
             <span>
                Wedding Wonders có trang trí tiệc cưới bằng hoa lụa không?
              </span>
              <button >
                {showText5 ? (<FontAwesomeIcon icon={faArrowUp} />
                ) : (<FontAwesomeIcon icon={faArrowDown} />)}
              </button>
             </div>
              {showText5 && <div className='display-show-text'>
                <p>Đề cao tính mỹ thuật và chinh phục cái đẹp, mong muốn tạo cho không gian tiệc cưới một sự tươi mới và đầy sức sống nên chúng tôi không sử dụng hoa lụa mà dùng 100% hoa tươi cho các sản phẩm trang trí của mình.</p>
              </div>}
            </div>
            <div onClick={onClickText6} className='div-show-span-p'>
             <div className='hover-span-button'>
             <span>
                Wedding Wonders Việt Nam có cung cấp dịch vụ ở tỉnh khác ngoài TP HCM không?
              </span>
              <button >
                {showText6 ? (<FontAwesomeIcon icon={faArrowUp} />
                ) : (<FontAwesomeIcon icon={faArrowDown} />)}
              </button>
             </div>
              <div> {showText6 && <div className='display-show-text'>
                <p>Không chỉ riêng Tp HCM mà bất cứ nơi nào có khách hàng yêu cầu, Wedding Wonders Việt Nam luôn sẵn sàng phục vụ.</p>
              </div>}
              </div>
            </div>
            <div onClick={onClickText7} className='div-show-span-p'>
              <div className='hover-span-button'>
              <span>
                Khách hàng liên hệ Wedding Wonders bằng những cách nào?
              </span>
              <button  >
                {showText7 ? (<FontAwesomeIcon icon={faArrowUp} />
                ) : (<FontAwesomeIcon icon={faArrowDown}/>)}
              </button>
              </div>
              {showText7 && <div className='display-show-text'>
                <p>Để nhận tư vấn, khách hàng có thể điền theo bảng thông tin, gửi email, mạng xã hội của Wedding Wonders Việt Nam. Đội ngũ planner của chúng tôi sẽ phản hồi trong thời gian sớm nhất có thể. Hoặc nếu không thể chờ đợi, khách hàng có thể liên hệ hotline (Gọi, Zalo, Viber) để được tư vấn nhanh nhất.</p>
              </div>}
            </div>

          </div>
        </div>
      </div>

      <div className='overlay'>
        <div className='overlay-one'>
          <h1>
            Bạn đã sẵn sàng cho tiệc cưới trong mơ của mình?</h1>
          <h2>
            Hãy sử dụng Form mẫu sau đây để cho Wedding Wonders biết về dự định của bạn nhé!</h2>
            <div className='div-butt'>
            <a>  <button>Bắt Đầu Ngay-></button></a>
            </div>
        </div>
        <div className='overlay-tow'>
          <img src='https://weddingwonders.vn/wp-content/uploads/2022/02/WW-2.png'></img>
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
          src="https://weddingwonders.vn/wp-content/uploads/2021/06/Momments-Tiec-cuoi-Duc-Warren-Tiec-cuoi-ngoai-troi-Wedding-outdoor-Wedding-Wonders-Viet-Nam-17.jpg"
        />
        <a>Cac Su Hướng Cưới Được Yêu Thích Nhất</a>
      </div>
      <div className="div_btn2">
        <img
          className="img_btn2_css"
          src="https://weddingwonders.vn/wp-content/uploads/2021/06/Su-kien-20.10-cong-ty-DKR-To-chuc-trang-tri-boi-Wedding-Wonders-Viet-Nam-2.jpg"
        />
        <a>10 Ý Tưởng Đám Cưới Hiện Đại</a>
      </div>
      <div className="div_btn2">
        <img
          className="img_btn2_css"
          src="https://weddingwonders.vn/wp-content/uploads/2021/06/Moments-Tiec-cuoi-Anh-Hang-Chien-Hung-by-WEDDING-WONDERS-VIET-NAM-Trang-tri-tiec-cuoi-ngoai-troi-Outdoor-wedding-30.jpg"
        />
        <a>9 Điều Cần Chuẩn Bị Cho Ngày Cưới</a>
      </div>
    </div>
  </div>
  <Footer></Footer>

    </div>

  )
}
export default DecorateWedding;