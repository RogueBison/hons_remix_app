import type { WithId, Document } from "mongodb";

export interface Movie extends WithId<Document> {
  title: string,
  synopsis: string,
  year: number,
  genre: string
}