import Hero from "@/components/Hero";
import { CourseCard } from "@/components/CourseCard";
import { getCourses } from "@/sanity/lib/courses/getCourses";
import Footer from "@/components/Footer";

export const dynamic = "force-static";
export const revalidate = 3600; // revalidate at most every hour

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-background">
      <Hero />


      {/* Courses Grid */}
      <div className="mb-32 container mx-auto px-4">
        <div className="flex items-center gap-4 py-8">
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
          
          <div className="flex flex-col items-center">
            <h3 className="text-center text-lg font-semibold text-gray-700"><span className="text-green-700">THE ACADEMY</span></h3>
            <h3 className="text-center text-lg font-semibold text-gray-700">Your journey starts below.</h3>
          </div>
          

          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              href={`/courses/${course.slug}`}
            />
          ))}
        </div>
      </div>



      {/* Testimonials */}


      {/* Footer */}
      <Footer />


    </div>
  );
}