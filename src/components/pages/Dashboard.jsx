import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardBlog from "../blog/CardBlog";
import { getBlogState } from "../services/BlogCalls";
import useAxios from "../services/useAxios";
import { useSelector } from "react-redux";
import LoadingSkeleton from "../blog/LoadingSkeleton";
import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const params = useLocation()?.search?.split("page=")[1]
  const [currentPage, setCurrentPage] = useState(params ?? 1);
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();
  const { blogs,totalPage, loading } = useSelector((state) => state.blogs);
console.log("params",currentPage)
  useEffect(() => {
    dispatch(
      getBlogState({  currentPage })
    );
  }, [currentPage, dispatch]);
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
        />
      )}
    </div>
  );
};

export default Dashboard;