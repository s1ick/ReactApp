import React, { useEffect, useState } from "react";
import PostList from "../components/PostList"
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/loader/loader";
import { getPageCount, getPagesArray } from "../utils/pages";
import Pagination from "../components/UI/pagination/MyPagination";
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import { Button, DialogActions, DialogContent } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [open, openchange] = useState(false);

  const [fetchPosts, isPostLoading, postError] = useFetching(async(limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount= response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })


  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }


useEffect(() => {
  fetchPosts(limit,page);
}, [])

const createPost = (newPost) => {
  setPosts([...posts, newPost])
  closepopup()
}
const removePost = (post) => {
  setPosts(posts.filter(p=>p.id !== post.id))
}



const openPopup = () => {
    openchange(true) 
}
const closepopup = () => {
    openchange(false)
}

  return (
    <div className="App">
        
      <MyButton
        style={{marginTop: 30}}
        onClick={()=> openPopup()}>Создать пост</MyButton>

        <MyModal open={openPopup} onClose={closepopup}>
            <PostForm create = {createPost} />
        </MyModal>

      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
        <Typography variant="h1" gutterBottom>
            Произошла ошибка ${postError}
      </Typography>
      }
      {isPostLoading
       ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
       : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS' />
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}
export default Posts;
