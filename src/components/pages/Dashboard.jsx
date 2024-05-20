import CardBlog from "../blog/CardBlog"
import { getBlogState } from "../services/BlogCalls";
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import useAxios from "../services/useAxios"


const Dashboard = () => {

const {axiosToken} =useAxios()

const dispatch = useDispatch()
useEffect(()=>{
dispatch(getBlogState({axiosToken,endPoint:"/comments"}))
},[])

  return (
    <div>
        <CardBlog/>
    </div>
  )
}

export default Dashboard