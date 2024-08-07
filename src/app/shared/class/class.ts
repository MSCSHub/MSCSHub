import { Timestamp } from "@firebase/firestore-types";

export interface ClassData {
  courseId: string,
  BookUsefulnessAvg: number,
  BookUsefulnessCount: number,
  ClassName: string,
  CourseNumber: string,
  DifficultyAvg: number,
  DifficultyCount: number,
  GraphicThumbnail: string,
  GraphicColor: string,
  GraphicUrl: string,
  LectureQualityAvg: number,
  LectureQualityCount: number,
  PiazzaCommunityAvg: number,
  PiazzaCommunityCount: number,
  Prerequisites: string,
  ProfessorQualityAvg: number,
  ProfessorQualityCount: number,
  RatingAvg: number,
  RatingCount: number,
  SlackChannel?: string,
  SlackChannelLink?: string,
  Teacher: string,
  Textbook: boolean,
  TextbookName: string,
  WorkloadAvg: number,
  WorkloadCount: number,
  category: string,
  computerScience: {
    isComputerScience: boolean,
    category?: string,
  },
  dataScience: {
    isDataScience: boolean,
    category?: string,
  },
  ai: {
    isArtificialIntelligence: boolean,
    category?: string
  }
  languages: string[] | null,
  lastUpdated: Timestamp,
  meta: {
    exams: boolean, 
    homework: boolean, 
    "peer reviewed": boolean, 
    projects: boolean, 
    proofs: boolean, 
  },
  season: {
    spring: boolean,
    summer: boolean,
    fall: boolean
  },
  semesters: {[key: string]: number},
}
