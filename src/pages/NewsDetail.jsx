import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const NewsDetail = () => {
  const { id } = useParams();
  const articleState = useLocation();
  console.log(id, articleState, 'id');
  return (
    <div>
      test
    </div>
  )
}

export default NewsDetail
