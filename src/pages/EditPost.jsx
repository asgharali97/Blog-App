import React,{useState,useEffect} from 'react'
import {Container , PostForm} from '../components'
import authService from '../appWrite/config'
import { useNavigate,useParams } from 'react-router-dom'

const EditPost = () => {
    const [posts,setPosts] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

   useEffect(()=>{
      if(slug){
        authService.getPost(slug).then((post)=>{
            if(post){
                setPosts(post)
            }
        })
      }else{
        navigate('/')
      }
   },[navigate,slug])
  return posts ? (
    <div className='py-8'>
        <Container>
            <PostForm post={posts}/>
        </Container>
    </div>
  ) :
  null
}

export default EditPost
