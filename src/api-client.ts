import axios from 'axios'
import { User, Comment, Post, Page } from './types'

export const http = axios.create({
  baseURL: 'http://localhost:3000'
})

export const fetchPage = <T>(
  url: string,
  { page = 0, size = 5, ...params }: Record<string, any> = {}
): Promise<Page<T>> =>
  http
    .get<T[]>(url, {
      params: {
        _start: page * size,
        _limit: size,
        ...params
      }
    })
    .then(response => ({
      content: response.data,
      totalElements: response.headers['x-total-count'] as number
    }))

export const fetchPosts = (params = {}) => fetchPage<Post>('/posts', params)

export const fetchUser = async (id: string) =>
  http.get<User>('/users/' + id).then(response => response.data)

export const fetchPostComments = (postId: string, params = {}) =>
  fetchPage<Comment>(`/posts/${postId}/comments`, {
    _sort: 'createdAt',
    _order: 'desc',
    ...params
  })
