import React, { useState } from 'react'
import { useQuery } from 'react-query'
import SearchInput from './components/search-input'
import { fetchPosts } from './api-client'
import PostList from './components/post-list'
import AsyncContainer from './components/async-container'
import { Post } from './types'
import PostDetails from './components/post-details'

const App = () => {
  const [title, setTitle] = useState('')
  const [activePost, setActivePost] = useState<Post | null>(null)

  const posts = useQuery(['posts', title], () => fetchPosts(title))

  return (
    <div className="container mx-auto p-10">
      <div className="grid grid-cols-8 gap-10">
        <div className="col-span-4 xl:col-span-3 xl:col-start-2">
          <SearchInput
            autoFocus
            placeholder="Post search..."
            onChange={setTitle}
          />
          <AsyncContainer query={posts}>
            <PostList
              data={posts.data}
              onItemClick={post => setActivePost(post)}
            />
          </AsyncContainer>
        </div>
        <div className="col-span-4 xl:col-span-3">
          {activePost && <PostDetails post={activePost} />}
        </div>
      </div>
    </div>
  )
}

export default App
