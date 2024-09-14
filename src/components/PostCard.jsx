// import React from 'react'
// import {Link} from 'react-router-dom';
// import authService from '../appWrite/auth';


// const PostCard = ({$id,title ,featuredImage}) => {
//   return (
//     <>
//       <Link
//       to={`/post/${$id}`}
//       >
//         <div className='w-full rounded-xl p-4 bg-gray-100'>
//             <div className='w-full justify-center mb-4'>
//                 <img 
//                 src={authService.getFilePreview(featuredImage)}
//                 alt={title}
//                 className='rounded-xl'
//                  />
//                  <h2 className='font-xl text-bold'>{title}</h2>
//             </div>
//         </div>
//       </Link>
//     </>
//   )
// }

// export default PostCard

import React from 'react'
import {Link} from 'react-router-dom'
import authService from '../appWrite/config'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={authService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard

