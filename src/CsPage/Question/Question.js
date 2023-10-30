import { useEffect, useState } from "react";
import PaginationComponent from "../../component/PaginationComponent";
import Search from "../../component/Search";
import axiosInstance from "../../axiosInstance";


function Questions() {
    const [questionList, setQuestionList] = useState([]);
    const [isQuestionLoading, setIsQuestionLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    useEffect(() => {
      if (isQuestionLoading) {
        loadQuestionList();
      }
    }, [isQuestionLoading]);
  
   
  
    const increaseViews = (postId) => {
      axiosInstance
        .put(`/questions/${postId}/views`)
        .then(() => {
          loadQuestionList();
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const loadQuestionList = () => {
        axiosInstance
          .get("/questions")
          .then((response) => {
           
            setQuestionList(response.data);
            setIsQuestionLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setIsQuestionLoading(false);
          });
      };
    return (
        <div className="notice">
      <ul className="ulList">
        <h2 style={{ fontSize: "25px" }}>- 자주묻는질문</h2>
        <li>
          <a href="/cs">공지사항</a>
        </li>
        <li>
          <a href="/questions">자주묻는질문</a>
        </li>
        <li>
          <a href="/onetoone">1:1문의</a>
        </li>
      </ul>

      <section className="noti">
        <div className="page-title">
          <div className="container">
            <h3>자주묻는질문</h3>
          </div>
        </div>

        <Search
          increaseViews={increaseViews}
          data={questionList}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          path={"/questionwrite"}
          ad={"/questions"}
        />
        <PaginationComponent
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={questionList.length}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </section>
    </div>
    );
}

export default Questions;