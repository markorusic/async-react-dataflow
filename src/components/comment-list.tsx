import React from 'react'
import dayjs from 'dayjs'
import { Comment } from '../types'

import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export interface CommentListProps {
  data: Comment[] | undefined
}

const CommentList: React.FC<CommentListProps> = ({ data }) => (
  <ul>
    {data && data.length > 0 ? (
      data.map(comment => (
        <li
          key={comment.id}
          className="flex border rounded text-gray-600 text-sm mb-1 p-2"
        >
          <img
            className="rounded-full mr-2 w-10 h-10"
            src={comment.user.photo}
            alt={comment.user.name}
          />
          <div>
            <div className="bg-gray-200 rounded p-2">
              <span className="text-green-600 font-semibold mr-2">
                {comment.user.username}
              </span>
              <span>{comment.content}</span>
            </div>
            <div className="pt-1">{dayjs(comment.createdAt).fromNow()}</div>
          </div>
        </li>
      ))
    ) : (
      <div className="bg-orange-100 border-l-4 border-orange-500 p-4">
        <span className="text-orange-700">No Data</span>
      </div>
    )}
  </ul>
)

export default CommentList
