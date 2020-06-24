import React, { useState } from 'react'
import { Post } from '../types'
import { useQuery, usePaginatedQuery } from 'react-query'
import { fetchUser, fetchPostComments } from '../api-client'
import AsyncContainer from './async-container'
import CommentList from './comment-list'
import Pagination from './pagination'

export interface PostDetails {
  post: Post
}

const PostDetails: React.FC<PostDetails> = ({ post }) => {
  const user = useQuery(['post_user', post.userId], () =>
    fetchUser(post.userId)
  )

  const [commentPage, setCommentPage] = useState(0)
  const comments = usePaginatedQuery(
    ['post_comments', post.id, commentPage],
    () => fetchPostComments(post.id, { page: commentPage })
  )

  return (
    <div className="border-solid border-1 border-gray-600">
      <h2 className="text-3xl text-gray-800">{post.title}</h2>
      <div className="my-2">
        <AsyncContainer query={user}>
          Author: <span className="text-green-600">{user.data?.username}</span>
        </AsyncContainer>
      </div>
      <div>{post.body}</div>

      <AsyncContainer query={comments}>
        <div className="my-2">
          <h3 className="text-xl text-gray-800">Comments:</h3>
          <CommentList data={comments.resolvedData?.content} />
          <Pagination
            page={commentPage}
            totalElements={comments.resolvedData?.totalElements || 0}
            onPageChange={setCommentPage}
          />
        </div>
      </AsyncContainer>
    </div>
  )
}

export default PostDetails
