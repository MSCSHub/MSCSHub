import { Timestamp } from "@firebase/firestore-types";

export interface Review {
  bookUsefulness: number,
  classId: string,
  course: string,
  difficulty: number,
  exams: true,
  homework: true,
  lectureQuality: number,
  peerReviewed: boolean,
  piazzaCommunity: number,
  professorQuality: number,
  projects: false,
  rating: number,
  review: string,
  semester: string,
  title: string,
  timestamp: Timestamp,
  workload: number,
  year: number,
  userId?: string,
  reviewId?: string,
}