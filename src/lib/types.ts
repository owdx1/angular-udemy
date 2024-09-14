export interface User { 
  id: string,
  name: string,
  avatar: string
  tasks?: Task[]
}

export interface Task {
  id: string
  title: string
  desc: string
  isCompleted: boolean
}

export interface CreateTask {
  title: string
  desc: string
  isCompleted: boolean
}