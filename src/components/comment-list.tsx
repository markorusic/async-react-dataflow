import React from 'react'
import { Comment } from '../types'

export interface CommentListProps {
  data: Comment[] | undefined
}

const CommentList: React.FC<CommentListProps> = ({ data }) => {
  return (
    <div>
      <ul>
        {data && data.length > 0 ? (
          data.map(comment => (
            <li
              key={comment.id}
              className="flex items-center border select-none rounded text-gray-600 text-sm mb-1 p-2"
            >
              <img
                className="rounded-full mr-5 w-10 h-10"
                src={comment.user.photo}
                alt={comment.user.name}
              />
              <p>{comment.content}</p>
            </li>
          ))
        ) : (
          <div className="bg-orange-100 border-l-4 border-orange-500 p-4">
            <span className="text-orange-700">No Data</span>
          </div>
        )}
      </ul>
    </div>
  )
}

export default CommentList
