import { type SchemaTypeDefinition } from 'sanity'
import { studentType } from './studentType'
import { categoryType } from './categoryType'
import { moduleType } from './moduleType'
import { lessonType } from './lessonType'
import { blockContent } from './blockType'
import { instructorType } from './instructorType'
import { courseType } from './courseType'
import { lessonCompletionType } from './lessonCompletionType'
import { enrollmentType } from './enrollmentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    studentType,
    categoryType,
    moduleType,
    lessonType,
    blockContent,
    instructorType,
    courseType,
    lessonCompletionType,
    enrollmentType,
  ],
}
