"use client"

import * as React from "react"
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { MusicDisplay } from "@/components/music-display";
import { MusicStats } from "@/components/music-stats";
import { SchedDrawer } from "@/components/scheduling-drawer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { GitHubLogoIcon, LinkedInLogoIcon, CalendarIcon } from '@radix-ui/react-icons'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Mail,
  Music,
} from "lucide-react"


export default function Home() {

  const [open, setOpen] = React.useState(false); // For Command Dialog
  const [drawerOpen, setDrawerOpen] = React.useState(false); // For SchedDrawer
 
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev); // Toggle Command Dialog
      }
    };
 
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
    <div className="flex justify-center min-h-screen">
      <main className="w-full max-w-screen-xl min-h-screen flex flex-col p-6">
        <div className="flex-grow flex flex-col">
          <div className="mb-20 mt-20"></div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-left">
            Nicholas Hutfilz
          </h1>
          <div className="flex space-x-4 mt-4">
          <a href="https://linkedin.com/in/nicholashutfilz" target="_blank" rel="noopener noreferrer">
              <LinkedInLogoIcon className="w-6 h-6 text-gray-400 hover:text-black transition-colors" />
            </a>
            <a href="https://github.com/nicholashutfilz" target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon className="w-6 h-6 text-gray-400 hover:text-black transition-colors" />
            </a>
            <a href="https://app.reclaim.ai/m/nicholas" target="_blank" rel="noopener noreferrer">
              <CalendarIcon className="w-6 h-6 text-gray-400 hover:text-black transition-colors" />
            </a>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
          I am currently a student at Trinity School in New York City. I enjoy music composition and history.
          </p>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Education
          </h2>
          <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 py-2">
                <Image
                  src="/TrinitySchoolNYC.webp"
                  alt="Trinity School"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <Accordion type="single" collapsible className="flex-grow">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Trinity School</AccordionTrigger>
                  <AccordionContent>
                    <b>2021-2025</b> – Track and Field, Cross Country, Trinitones a cappella, Sons of Pitches, Model Congress, Science Olympiad, TrinLabs
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </div>
          <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 py-2">
                <Image
                  src="/AllenStevenson.webp"
                  alt="The Allen-Stevenson School"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <Accordion type="single" collapsible className="flex-grow">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">The Allen-Stevenson School</AccordionTrigger>
                  <AccordionContent>
                  <b>2012-2021</b> – Student Council President (’20-’21), Alumni Council (’23-Present) , Chorus, Philharmonia, Cross Country, Golf, Track & Field, Cello
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Music Programs 
         </h4>
          <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 py-2">
                <Image
                  src="/NYPhil.webp"
                  alt="New York Philharmonic"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <Accordion type="single" collapsible className="flex-grow">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">New York Philharmonic</AccordionTrigger>
                  <AccordionContent>
                    <b>2017-2023</b> – Very Young Composers Bridge
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </div>
          <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 py-2">
                <Image
                  src="/AMF.webp"
                  alt="Atlantic Music Festival"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <Accordion type="single" collapsible className="flex-grow">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Atlantic Music Festival</AccordionTrigger>
                  <AccordionContent>
                  <b>2023</b> – Composition (Pre-College) at the Institute
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </div>
          <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 py-2">
                <Image
                  src="/Berklee.webp"
                  alt="Berklee College of Music"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <Accordion type="single" collapsible className="flex-grow">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Berklee College of Music</AccordionTrigger>
                  <AccordionContent>
                  <b>2022</b> – High School Composition Intensive
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </div>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Experience
          </h2>
          <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 py-2">
                <Image
                  src="/GLI.jpg"
                  alt="Gilder Lehrman Institute"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <Accordion type="single" collapsible className="flex-grow">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Hamilton Education Program Intern, Gilder Lehrman Institute</AccordionTrigger>
                  <AccordionContent>
                    <b>2024</b> – Managed administrative tasks with a focus on website development, data management, and CMS integration to support the creative and educational objectives of the program.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </div>
          <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 py-2">
                <Image
                  src="/NYPhil.webp"
                  alt="New York Philharmonic"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <Accordion type="single" collapsible className="flex-grow">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Very Young Composers Intern, New York Philharmonic</AccordionTrigger>
                  <AccordionContent>
                  <b>2024</b> – Mentored a class of young composers, fostering their creativity and guiding them in music composition. Organized scores for professional performances, ensuring high-quality presentation and readiness for production.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 p-2 text-center text-sm text-gray-600 dark:text-gray-400 hidden md:block">
        Press <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">⌘</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">K</kbd> to open commands
      </div>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Music
      </h2>
      <MusicDisplay></MusicDisplay>
      <MusicStats></MusicStats>
      <SchedDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
      <div className="mb-20 mt-20"></div>
      </main>
    </div>

    {/* Command Bar Settings */}
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => window.open("https://github.com/nicholashutfilz", "_blank")}>
            <GitHubLogoIcon className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </CommandItem>
          <CommandItem onSelect={() => window.open("https://linkedin.com/in/nicholashutfilz", "_blank")}>
            <LinkedInLogoIcon className="mr-2 h-4 w-4" />
            <span>LinkedIn</span>
          </CommandItem>
{/*           <CommandItem onSelect={() => { setDrawerOpen(true); setOpen(false); }}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Schedule a Meeting</span>
          </CommandItem> */}
          <CommandItem onSelect={() => window.open("mailto:nhutfilz@gmail.com")}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Send me an Email</span>
          </CommandItem>
          <CommandItem onSelect={() => window.open("https://spotify.com", "_blank")}>
            <Music className="mr-2 h-4 w-4" />
            <span>Listen on Spotify</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
    </>
  );
}