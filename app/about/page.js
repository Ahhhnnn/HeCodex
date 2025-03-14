import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'

import portraitImage from '@/public/images/avatar.png'

// about page
const aboutMeHeadline = "I'm HeHe, a Software Engineer."
const aboutParagraphs = [
  "I'm a backend development engineer with 5 years of work experience",
  "Currently in the process of full stack advancement.",
  "I'm working as a software develop engineer in ChengDu, China now. And I'm trying to become an Indie Hacker."
]

export const metadata = {
  title: 'About',
  description:
    'I\'m HeHe. I live in ChengDu, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-20">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl dark:text-zinc-100">
            {aboutMeHeadline}
          </h1>
          <div className="mt-10 space-y-7 text-base text-zinc-400 dark:text-zinc-400">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="lg:pl-20">
          {/* <SocialLinks /> */}
        </div>
      </div>
    </Container>
  )
}
