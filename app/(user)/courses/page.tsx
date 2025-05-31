import { CourseCard } from '@/components/CourseCard'
import { getCourses } from '@/sanity/lib/courses/getCourses'
import { ScrollText } from 'lucide-react'
import React from 'react'

export default async function Courses() {
    const courses = await getCourses()
  return (
   <div className="h-full pt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-4 mb-8">
              <ScrollText className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">All Courses</h1>
                <p className="text-muted-foreground">
                 Browse our complete catalog of learning paths and individual courses
                </p>
              </div>
            </div>
    
            {courses.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold mb-4">No courses found</h2>
                {/* <p className="text-muted-foreground mb-8">
                  Try searching with different keywords
                </p> */}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <CourseCard
                    key={course._id}
                    course={course}
                    href={`/courses/${course.slug}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
  )
}
