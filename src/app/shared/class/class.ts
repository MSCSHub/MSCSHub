export interface ClassData {
  CourseNumber: string,
  ClassName: string,
  DifficultyAvg: number,
  DifficultyCount: number,
  RatingAvg: number,
  RatingCount: number,
  Teacher: string,
  WorkloadAvg: number,
  WorkloadCount: number,
  BookUsefulnessAvg: number,
  BookUsefulnessCount: number,
  season: {
    spring: boolean,
    summer: boolean,
    fall: boolean
  }
}
