import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardBlog from "../blog/CardBlog";
import { getBlogState } from "../services/BlogCalls";
import { useSelector } from "react-redux";
import LoadingSkeleton from "../blog/LoadingSkeleton";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const params = useLocation()?.search?.split("page=")[1]
  const [currentPage, setCurrentPage] = useState(params ?? 1);
  const dispatch = useDispatch();
  const { blogs,totalPage, loading,isLiked,postedBlog } = useSelector((state) => state.blogs);

console.log(postedBlog,"qqqqqqqqqqqqqq")
  useEffect(() => {
    dispatch(
      getBlogState({  currentPage })
    );
  }, [currentPage,isLiked]);


useEffect(()=>{
  setCurrentPage(params ?? 1)
},[params])



  return (

    <div>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <CardBlog
          blogs={blogs}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPage={totalPage}
          isLiked={isLiked}
        />
      )}
    </div>
  );
};

export default Dashboard;