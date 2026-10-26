import React from 'react'
import Card from '../Card'
import { highlights, technologies } from './AboutMeData'

const AboutMe = () => {
  return (
    <Card>
      <section className="px-6 py-10 md:px-10 lg:px-12 text-white">
        {/* Section Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            About <span className="text-blue-500">Me.</span>
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-blue-500" />
        </div>

        {/* Introduction */}
        <div className="max-w-4xl space-y-5 text-base leading-8 text-gray-300 md:text-lg">
          <p>
            Hi, I'm <span className="font-semibold text-white">Navneet</span>,
            a software developer from{" "}
            <span className="font-medium text-blue-400">
              Sangam Nagri, Prayagraj
            </span>
            , with nearly 5 years of experience building software solutions
            that are scalable, reliable, and built to last.
          </p>

          <p>
            My core strength lies in{" "}
            <span className="font-semibold text-white">
              backend engineering
            </span>
            . From designing REST APIs and data-driven applications to
            developing distributed services, I enjoy turning complex
            requirements into clean, maintainable, and efficient systems.
          </p>

          <p>
            I've worked with both{" "}
            <span className="font-semibold text-white">
              monolithic and microservices architectures
            </span>
            , building applications from the ground up and working across
            SQL and NoSQL databases. My experience also extends to frontend
            development, allowing me to contribute to end-to-end product
            development.
          </p>

          <p>
            Beyond writing code, I'm passionate about{" "}
            <span className="font-semibold text-blue-400">
              solving engineering challenges
            </span>
            , exploring better architectural approaches, and continuously
            improving how software is designed, developed, and delivered.
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mt-10">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
            Technologies I work with
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/4 px-3 py-2 text-sm text-gray-200 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-white/3 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="mb-3 text-xl">{item.icon}</div>

              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                {item.label}
              </p>

              <p className="text-sm font-semibold text-gray-100">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Card>
  );
}

export default AboutMe