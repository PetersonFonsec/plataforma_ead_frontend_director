import { College, CollegeStyle } from "./collage.model";

export const collegeStyleMock: CollegeStyle = {
  thumb: "https://dummyimage.com/90/000/fff.jpg",
  createdAt: "2024-04-19T19:28:18.987Z",
  updatedAt: "2024-04-19T19:28:18.987Z",
  secundaryColor: "BDD4E7",
  primaryColor: "212227",
  collegeId: 1,
  id: 1,
}

export const collageMock: College = {
  id: 1,
  createdAt: "2024-04-19T19:28:18.952Z",
  updatedAt: "2024-04-19T19:28:18.952Z",
  userId: 3,
  name: "senac",
  CollegeStyle: [collegeStyleMock],
  Course: []
}

export const collageList = Array(2).fill(collageMock);
