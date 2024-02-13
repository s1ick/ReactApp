import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';


const PostItem = (props) => {
  const navigate = useNavigate()
    return (
        <div className="post">
        <div className="post__content">
        <Typography variant="h6" gutterBottom>
        <span style={{color: 'red'}}>{props.post.id}.</span> {props.post.title}
      </Typography>
    
            <Typography variant="body2" gutterBottom>
                {props.post.body}
            </Typography>
    
          </div>    
            
          <ButtonGroup variant="contained" aria-label="Basic button group">
              <MyButton onClick={()=> navigate(`/posts/${props.post.id}`)}>Открыть</MyButton>
              <MyButton onClick={()=>props.remove(props.post)}>Удалить</MyButton>
          </ButtonGroup>

          </div>  
    )    
}
export default PostItem;