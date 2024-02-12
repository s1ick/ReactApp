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

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);


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
  setModal(false)
}
const removePost = (post) => {
  setPosts(posts.filter(p=>p.id !== post.id))
}



  return (
    <div className="App">
      <MyButton
        style={{marginTop: 30}}
      onClick={()=> setModal(true)}>Создать пользователя</MyButton>
      <MyModal 
        visible={modal}
        setVisible={setModal}
      
      >
        <PostForm create = {createPost} />
      </MyModal>
      
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
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
