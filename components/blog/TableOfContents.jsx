'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';


export default function TableOfContents({ headings }) {
    const [activeId, setActiveId] = useState('');
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: '-20% 0px -35% 0px' }
      );
  
      const headingElements = document.querySelectorAll('h1, h2, h3');
      headingElements.forEach((element) => observer.observe(element));
  
      return () => {
        headingElements.forEach((element) => observer.unobserve(element));
      };
    }, []);
  
    return (
      <NavigationMenu.Root className="relative">
        <NavigationMenu.List className="space-y-2">
          {headings.map((heading, index) => (
            <NavigationMenu.Item key={index}>
              <NavigationMenu.Link
                href={`#${heading.id}`}
                className={`
                  group flex items-center gap-2 text-sm transition-colors
                  ${heading.level === 1 ? 'ml-0' : heading.level === 2 ? 'ml-4' : 'ml-8'}
                  ${heading.id === activeId 
                    ? 'text-white font-medium' 
                    : 'text-gray-400 hover:text-white'
                  }
                `}
              >
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>{heading.text}</span>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );
  }