import { SimpleLayout } from '@/components/layout/SimpleLayout'


import { ProjectCard } from '@/components/project/ProjectCard'
// import { GithubProjectCard } from '@/components/project/GithubProjectCard'
// import { CustomIcon } from '@/components/shared/CustomIcon'


// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "I've worked on a variety of projects, from simple websites to complex web applications. And many of them are open-source. Here are a few of my favorites."


export const metadata = {
  title: 'Projects',
  description: projectHeadLine,
}
// projects 
export const projects = [
  {
    name: 'Indie Hacker Tool',
    description:
      'Best Indie Dev Tools Navigator',
    link: { href: 'indiehackertool.com', label: 'Indie Hacker Tool' },
    logo: '/images/project/indiehackertool.png',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['Tool', 'Dev']
  },
  {
    name: 'Art nav',
    description:
      'The Best Directory Website Template',
    link: { href: 'https://www.art-nav.com', label: 'Art nav' },
    logo: '/images/project/art-nav.png',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['Tool', 'Dev', 'Art', 'Template']
  }
]

export const githubProjects = [
  {
    name: 'Devtoolset',
    description: 'Open-source & database-free developer tools navigator / 开源无数据库配置的开发者工具导航站',
    link: { href: 'github.com/iAmCorey/devtoolset', label: 'Devtoolset' },
    gitStars: 146,
    gitForks: 47
  },
  {
    name: 'Chrome Extension Plasmo Template',
    description:
      'A chrome extension template using plasmo, tailwind css, shadcn/ui',
    link: { href: 'github.com/iAmCorey/chrome-extension-plasmo-template', label: 'Chrome Extension Plasmo Template' },
    gitStars: 52,
    gitForks: 10
  },
  {
    name: 'Awesome Indie Hacker Tools',
    description:
      '独立开发/出海开发相关技术栈及工具收录 / Find the best tools for indie hackers here',
    link: { href: 'github.com/iAmCorey/awesome-indie-hacker-tools', label: 'Awesome Indie Hacker Tools' },
    gitStars: 763,
    gitForks: 61
  },
  {
    name: 'Awesome AI Directory',
    description:
      'AI资源工具导航站收录 / Find all the best AI directories',
    link: { href: 'github.com/iAmCorey/awesome-ai-directory', label: 'Awesome AI Directory' },
    gitStars: 37,
    gitForks: 5
  },
  {
    name: 'Producthunt Daily Bot',
    description:
      'A bot getting product hunt daily top products',
    link: { href: 'github.com/iAmCorey/producthunt-daily-bot', label: 'Producthunt Daily Bot' },
  },
  {
    name: 'Cantonese Echoes',
    description:
      'Cantonese Echoes / 粵語殘片',
    link: { href: 'github.com/iAmCorey/Cantonese-Echoes', label: 'Cantonese Echoes' },
    gitStars: 1
  },
]

export default function Projects() {
  return (
    <SimpleLayout
      title={projectHeadLine}
      intro={projectIntro}
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 pb-10"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
      {/* <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <CustomIcon name='github' size={28}/>
            Open Source
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {githubProjects.map((project) => (
              <GithubProjectCard key={project.name} project={project} titleAs='h3'/>
            ))}
          </ul>
        </div> */}
    </SimpleLayout>
  )
}
