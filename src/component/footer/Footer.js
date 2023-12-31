import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="Footer">
      <div className="firstLayout">
        <b>회사소개</b>
        <b>이용약관</b>
        <b>개인정보 처리방침</b>
        <b>청소년 보호정책</b>
        <b>이메일수집거부</b>
        <b>고객센터</b>
      </div>
      <div className="secondLayout">
        <div className="logo">
          <img src="/img/로고.png" />
        </div>
        <div>
          <div className="firstItem">
            <p>상호명: 바로로그인</p>
            <p>|</p>
            <p>개발자: 최상운, 조준수, 안영민, 박윤희</p>
            <p>|</p>
            <p>연락처: 1997-1999</p>
            <p>|</p>
            <p>사업자 번호: 799-02-23604</p>
            <p>|</p>
            <p>통신판매업신고번호 제 2023-서울강서-8282호</p>
            <p>|</p>
          </div>
          <div className="scondItem">
            <p>주소: 서울특별시 강서구 화곡로 149 3층, 4층, 5층</p>
            <p>|</p>
            <p>copyright ⓒ 2023 바로로그인 All right reserved</p>
            <p></p>
          </div>

          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;