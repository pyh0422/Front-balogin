import { Button } from "react-bootstrap";
import axiosInstance from "../axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import './TestTrans.css';
import { useEffect } from "react";
import { useState } from "react";

function TestTrans( {userInfo, testTrans, setTestTrans, trans, startTransInfo, setStartTransInfo, transDetail, IntransList, setIntransList } ) {

  const [transInfo, setTransInfo] = useState({

  })

  const [intransInfo, setIntransInfo] = useState({

  })

  // 인계
  console.log(userInfo.username);
  console.log(startTransInfo.sellerId)
  console.log(IntransList);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get(`/intransInfo/${id}`)
    .then((response) => {
      console.log(response.data);
      setTransInfo(response.data.trans);
      setIntransInfo(response.data.intrans);
    }).catch((error) => {
      console.log(error);
    })
    
  }, [])


  const turnOverBtn = () => {
    let transId = testTrans[0].transId;
    axiosInstance.post('/testSellTrans', transId)
      .then(response => {
        alert(response.data);
        console.log(response.data);
  
        setTestTrans((testTrans) => ({
          ...testTrans,
          sellerChk : 'true'
        }));
        
      }).catch(error => {
        console.log(error);
      });
  }

  // 인수
  const takeOverBtn = () => {
    let transId = testTrans[0].transId;
    axiosInstance.post('/testBuyTrans', transId)
      .then(response => {
        alert(response.data);
        alert('거래완료');
        navigate('/')
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
  }

  const testButton = () => {
    if (userInfo.username === intransInfo.buyerId && intransInfo.sellerChk === 'true') {
      return <Button onClick={takeOverBtn}>인수</Button>
    } else if (userInfo.username === intransInfo.sellerId) {
      return <Button onClick={turnOverBtn}>인계</Button>
    } else {
      return null;
    }
  }

  return (
    <div className="TestTrans" style={{marginTop : "5%"}}>
      <table style={{textAlign : "center", border : "0.5px solid #eee", width : "800px"}}>
        <thead>
          <tr>
            <th className="testTh">물품제목</th>
            <td className="testTd" colSpan={3}>{transInfo.title}</td>
            <td></td>
          </tr>

          <tr>
            <th className="testTh">게임</th>
            <td className="testTd">{transInfo.game}</td>
            <th className="testTh" style={{borderLeft : "1px solid #eee"}}>서버</th>
            <td className="testTd">{transInfo.server}</td>
          </tr>

          <tr>
            <th className="testTh">거래번호</th>
            <td className="testTd">{transInfo.id}</td>
            <th className="testTh" style={{borderLeft : "1px solid #eee"}}>가격</th>
            <td className="testTd">{transInfo.price}</td>
          </tr>

          <tr>
            <th className="testTh">판매자명</th>
            <td className="testTd" colSpan={3}>{intransInfo.sellerId}</td>
            <td></td>
          </tr>

          <tr>
            <th className="testTh">연락처</th>
            <td className="testTd" colSpan={3}>{transInfo.phone}</td>
            <td></td>
          </tr>
          



        </thead>
        <tbody>
      

        </tbody>
      </table>
          <br></br>
          <div style={{marginRight : "80%"}}>
          {testButton()}
          </div>
    </div>
/* <div className='payMain'>
<br></br>
<div>
  <h4>카카오페이</h4>
  <hr></hr>
  <table>
    <tbody>
      <tr>
        <td style={tdStyle}>마일리지 종류</td>
        <th style={thStyle}>구매전용 마일리지 (출금불가)</th>
      </tr>
      <tr>
        <td style={tdStyle}>충전 수수료</td>
        <th style={thStyle}>0%</th>
      </tr>
      <tr>
        <td style={tdStyle}>충전 한도</td>
        <th style={thStyle}>카카오페이 한도 확인 </th>
      </tr>
    </tbody>
  </table>
  <ul className="tossReadme">
  </ul>
</div>
<hr></hr>
<table>
  <tbody>
    <tr>
      <td style={tdStyle}>충전신청금액</td>
      <th style={thStyle}><Form.Control type="text" className="mileage" placeholder="1,000원 이상 결제가능"/></th>
    </tr>
  </tbody>
</table>
<hr></hr> */
  );
}

export default TestTrans;