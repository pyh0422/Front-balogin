import { Button } from "react-bootstrap";
import "../CsCss/WriteNotice.css";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import { useState } from "react";

function WriteQuestion(){

  const [question,setQuestion] = useState({
    title : '',
    content : ''
 
  });
  const navigate = useNavigate();
  const changeHandler = (e) =>{
    setQuestion({
      ...question,
      [e.target.name] : e.target.value 
    })
  }
  return(
    <div className="write">
      <div className="title-input">
        <span className="titlespan">제목</span>
        <input className="writetitle" type="text" name="title" onChange={changeHandler} />
      </div>
      <br />

      <div>
        <span className="contentspan">내용</span>
        <textarea className="contentarea" 
          onChange={changeHandler}
          name="content"
          cols="74"
          rows="15"   
        ></textarea>
      </div>
      <br />
      <div className="clickbtn">
      <Button variant="outline-primary" className="sumitbtn" onClick={()=>{
          axiosInstance.post('/questions',question)
          .then(response=>{
              alert(response.data);
              navigate('/questions');
          }).catch(error=>{
              console.log(error);
              // alert('로그인 후 사용하세요');
          })
      }}>작성</Button>{' '}
      <Button variant="outline-danger" className="resetbtn" type="reset"><Link to={"/questions"} className="linknone">취소</Link></Button>{' '}
      </div>
    </div>
  );
}

export default WriteQuestion;