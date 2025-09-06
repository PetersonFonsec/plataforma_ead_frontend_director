
export interface IPost {
  id: number,
  createdAt: String,
  updatedAt: String,
  content: string,
  published: boolean,
  authorId: number,
  collegeId: number,
  courseId: number
}

export const Post: IPost = {
  id: 9,
  createdAt: "2025-09-06T14:51:28.781Z",
  updatedAt: "2025-09-06T14:51:28.781Z",
  content: "<h2>Atualização do curso</h2><p>Novos módulos foram adicionados! Acesse a plataforma para conferir.</p>",
  published: true,
  authorId: 1,
  collegeId: 1,
  courseId: 1
}
