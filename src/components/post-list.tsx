import React from 'react'
import { noop } from 'lodash'
import { Post } from '../types'

export interface PostListProps {
  data: Post[] | undefined
  onItemClick?(post: Post): void
}

const PostList: React.FC<PostListProps> = ({ data, onItemClick = noop }) => {
  return (
    <div>
      <ul>
        {data && data.length > 0 ? (
          data.map(post => (
            <li
              key={post.id}
              className="flex items-center border-solid border px-2 py-4 select-none rounded cursor-pointer text-gray-800 text-xl font-semibold mb-1 transition duration-200 hover:bg-gray-200"
              onClick={() => onItemClick(post)}
            >
              <img
                className="rounded-full mr-5 w-20 h-20"
                src={post.photo}
                alt={post.title}
              />
              <p className="truncate">{post.title}</p>
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

export default PostList
