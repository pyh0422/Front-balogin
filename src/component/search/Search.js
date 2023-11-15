// 데이터 렌더링
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "../CsPage/CsCss/Notice.css";
import OnSearch from "./OnSearch";

function Search({ increaseViews, data, currentPage, itemsPerPage ,path , ad ,userInfo, cs}) {
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(()=>{
    setSearchResults(data) 
  },[data]) 
  //검색 결과저장
  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) //대소문자 구별
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults(data);
    }
  };
  console.log(data)
  return (
    <div className="searchcomp">
      <div id="board-search">
        <div className="container">
          <OnSearch onSearch={handleSearch} path={path} userInfo={userInfo} cs={cs}/>
        </div>
      </div>

      <div id="board-list">
        <div className="container">
          <table className="board-table">
            <thead>
              <tr>
                <th scope="col" className="th-num">
                  번호
                </th>
                <th scope="col" className= "th-title">
                  제목
                </th>
                <th scope="col" className= "th-title">
                  작성자
                </th>
                <th scope="col" className="th-date">
                  등록일
                </th>
                <th scope="col" className="th-cnt">
                  조회수
                </th>
              </tr>
            </thead>
            <tbody>
               {/* currentPage: 현재 페이지를 나타내는 변수
               itemsPerPage: 각 페이지당 표시될 항목의 수를 나타내는 변수       
               (currentPage - 1): 현재 페이지에서 1을 뺀 값입니다. 배열 인덱스는 0부터 시작      
               ((currentPage - 1) * itemsPerPage): 이전 단계에서 구한 값에 한 페이지당 표시될 항목 수를 곱합니다.         
               currentPage * itemsPerPage: 현재 페이지에서 한 페이지당 표시될 항목 수를 곱한 값 */}
              {searchResults 
                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                .map((data, i) => (
                  <tr key={i}>
                    <td>{data.no}</td>
                    <th>
                      <Link
                        to={`${ad}/${data.no}`}
                        onClick={() => increaseViews(data.no)}
                      >
                       {data.title}
                      </Link>
                    </th>
                    <td>{data.member.username}</td>
                    <td>{data.createDate}</td>
                    <td>{data.cnt}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Search;
