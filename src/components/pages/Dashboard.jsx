import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardBlog from "../blog/CardBlog";
import { getBlogState } from "../services/BlogCalls";
import useAxios from "../services/useAxios";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs); 

  useEffect(() => {
    dispatch(
      getBlogState({ axiosToken, endPoint: `blogs?page=${currentPage}` })
    );
  }, [currentPage, dispatch,]);

  return (
    <div>
      <CardBlog
        blogs={blogs}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Dashboard;
