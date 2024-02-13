import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/loader";
import Typography from '@mui/material/Typography';
const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
    }, [])
    return (
        <div>
            <Typography variant="h1" gutterBottom>
          Вы открыли страницу поста с ID = {params.id}
      </Typography>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
            }
            
        </div>
    )
}
export default PostIdPage;