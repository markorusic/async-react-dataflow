export interface Page<T> {
  totalElements: number
  content: T[]
}

export interface User {
  id: string
  name: string
  username: string
  email: string
  photo: string
}

export interface Post {
  id: string
  title: string
  body: string
  photo: string
  userId: string
}

export interface Comment {
  id: string
  postId: string
  user: User
  content: string
  createdAt: string
}
