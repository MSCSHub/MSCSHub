import { Timestamp } from "@firebase/firestore-types";

export interface FaqEntry {
    entryId: string,
    title: string,
    body: string,
    lastModifiedBy: string,
    lastModifiedAt: Timestamp,
    version: number,
    category: string,
}
