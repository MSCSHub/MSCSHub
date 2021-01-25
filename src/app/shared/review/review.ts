import { Timestamp } from "rxjs";

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
  timestamp: Date,
  workload: number,
  year: number,
}