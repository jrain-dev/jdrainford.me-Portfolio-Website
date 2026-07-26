// app/about/page.tsx
import { experience, certifications, education } from '@/app/lib/aboutData'
import Typewriter from '@/components/typewriter'

export default function About() {
  return (
    <main className="">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-70 pt-16 sm:pt-24 md:pt-32 lg:pt-[10rem] pb-8 md:pb-[3rem]">
        <div className="text-base sm:text-lg font-bold">About</div>
        <div className="text-sm sm:text-base md:text-lg">
            <Typewriter
              text="Wouldn't you like to know"
              minSpeed={140}
              maxSpeed={50}
              rampLength={12}
              mistakeChance={0.02}
            />
          </div>
      </div>

      <div className="flex flex-col overflow-y-auto space-y-10 md:space-y-14 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-70 max-h-[70vh] md:max-h-[750px] pb-12">

        {/* Who Am I? */}
        <section>
          <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-3">Who Am I?</h2>
          <div className="border rounded-lg p-4 sm:p-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              I'm a Computer Scientist, Software Engineer, and Masters student in Artificial Intelligence at Kennesaw State University.
              I like to explore technology and the various ways in which it can improve or worsten our collective human experience.

            </p>
          </div>
        </section>

        {/* My Degrees — 2-column grid */}
        <section>
          <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-3">My Degrees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {education.map((item) => (
              <div key={item.degree} className="border rounded-lg p-4">
                <h3 className="font-semibold">{item.degree}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{item.school}</p>
                <p className="text-sm text-gray-700 mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience — stacked full-width cards */}
        <section>
          <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-3">Work Experience</h2>
          <div className="flex flex-col space-y-3 sm:space-y-4">
            {experience.map((item) => (
              <div key={item.role} className="border rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                  <h3 className="font-semibold">{item.role}</h3>
                  <span className="text-xs text-gray-500 shrink-0 sm:ml-2">{item.date}</span>
                </div>
                <p className="text-sm text-gray-500 mt-0.5">{item.company}</p>
                {item.bullets.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                    {item.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Other Credentials — 2-column grid */}
        <section>
          <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-3">Other Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {certifications.map((item) => (
              <div key={item.name} className="border rounded-lg p-4">
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{item.issuer}</p>
                {item.sub && (
                  <ul className="list-disc list-inside text-xs text-gray-700 mt-2 space-y-1">
                    {item.sub.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}