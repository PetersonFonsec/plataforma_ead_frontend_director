export interface CreateQuizOption {
  title: string;
  correctOptions: boolean;
  quizId: number;
}

export interface QuizOption {
  correctOptions: boolean,
  createdAt: string,
  updatedAt: string,
  title: string,
  quizId: number,
  id: number,
}

export interface QuizCreateRequest {
  name: string;
  courseId: number;
  quizOptions: CreateQuizOption[];
}

export interface QuizCreateResponse {
  id: number,
  createdAt: string,
  updatedAt: string,
  name: string,
  courseId: number,
  quizOptions: QuizOption[]
}
