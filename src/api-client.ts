import axios from 'axios'
import { User, Comment, Post } from './types'

export const http = axios.create({
  baseURL: 'http://localhost:3000'
})

export const fetchPosts = (title: string, { page = 0 } = {}) =>
  http
    .get<Post[]>('/posts', {
      params: { title_like: title, _page: page, _limit: 5 }
    })
    .then(response => response.data)

export const fetchUser = async (id: string) =>
  http.get<User>('/users/' + id).then(response => response.data)

export const fetchPostComments = async (
  postId: string,
  { page = 0, size = 5 } = {}
) =>
  http
    .get<Comment[]>(`/posts/${postId}/comments`, {
      params: {
        _start: page * size,
        _limit: size
      }
    })
    .then(response => ({
      content: response.data,
      totalElements: response.headers['x-total-count'] as number
    }))
