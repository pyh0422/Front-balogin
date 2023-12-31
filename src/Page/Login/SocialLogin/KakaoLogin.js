
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";


function KakaoLogin({ setIsAuth, setUserInfo, setTrans, setCs ,userInfo}) {


  const URL = window.location.href;
  const match = /code=([^&]+)/.exec(URL);
  const navigate = useNavigate();

  if (match) {

    const code = decodeURIComponent(match[1]);

    axiosInstance.post('/oauth/kakao', { code: code })
      .then(response => {
        const jwt = response.headers.authorization;

        setUserInfo(response.data.member[0]);
        setTrans({ member: response.data.member[0] });
        setCs({ member: response.data.member[0] });

        if (jwt) {
          sessionStorage.setItem('jwt', jwt);
          if (response.data.member[0].birthdate === null) {
            alert("추가 정보를 입력하세요.");
            navigate("/kaGoo-signup");
          } else {
            navigate("/");
            setIsAuth(true);
          }
        }
      }).catch(error => {
        console.log(error);
      })
  }

  return (
    <div>

      <h1>로그인 처리중</h1>

    </div>

  );
}

export default KakaoLogin;



