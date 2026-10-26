
import React from 'react';
import Card from '../Card';
import { highlights, technologies } from './AboutMeData';

const AboutMe = () => {
  return (
    <Card>
      <section className="min-w-0 px-4 py-6 text-white sm:px-6 sm:py-10 md:px-10 lg:px-12">

        {/* Section Heading */}
        <div className="mb-6 sm:mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-sm sm:tracking-[0.25em]">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About <span className="text-blue-500">Me.</span>
          </h2>

          <div className="mt-3 h-1 w-14 rounded-full bg-blue-500 sm:mt-4 sm:w-16" />
        </div>

        {/* Introduction */}
        <div className="max-w-4xl space-y-4 wrap-break-word text-sm leading-7 text-gray-300 sm:space-y-5 sm:text-base sm:leading-8 md:text-lg">
          <p>
            Hi, I'm <span className="font-semibold text-white">Navneet</span>,
            a software developer from{' '}
            <span className="font-medium text-blue-400">
              Sangam Nagri, Prayagraj
            </span>
            , with nearly 5 years of experience building software solutions
            that are scalable, reliable, and built to last.
          </p>

          <p>
            My core strength lies in{' '}
            <span className="font-semibold text-white">
              backend engineering
            </span>
            . From designing REST APIs and data-driven applications to
            developing distributed services, I enjoy turning complex
            requirements into clean, maintainable, and efficient systems.
          </p>

          <p>
            I've worked with both{' '}
            <span className="font-semibold text-white">
              monolithic and microservices architectures
            </span>
            , building applications from the ground up and working across
            SQL and NoSQL databases. My experience also extends to frontend
            development, allowing me to contribute to end-to-end product
            development.
          </p>

          <p>
            Beyond writing code, I'm passionate about{' '}
            <span className="font-semibold text-blue-400">
              solving engineering challenges
            </span>
            , exploring better architectural approaches, and continuously
            improving how software is designed, developed, and delivered.
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mt-8 sm:mt-10">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400 sm:mb-4 sm:text-sm sm:tracking-widest">
            Technologies I work with
          </h3>

          <div className="flex min-w-0 flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="max-w-full wrap-break-word rounded-lg border border-white/10 bg-white/4 px-2.5 py-1.5 text-xs text-gray-200 transition-colors duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300 sm:px-3 sm:py-2 sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="mt-8 grid min-w-0 grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="min-w-0 rounded-xl border border-white/10 bg-white/3 p-3 transition-all duration-300 hover:border-blue-500/40 sm:p-4 sm:hover:-translate-y-1"
            >
              <div className="mb-2 text-xl sm:mb-3">
                {item.icon}
              </div>

              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                {item.label}
              </p>

              <p className="wrap-break-word text-sm font-semibold text-gray-100">
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </section>
    </Card>
  );
};

export default AboutMe;
