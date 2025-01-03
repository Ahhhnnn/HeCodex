import MotionDivWrapper from "@/components/MotionDivWrapper";
import { Newspaper } from "lucide-react";
import { getBlogs } from "@/lib/blog";
import Hero from "@/components/Hero";
import SkillsBar from "@/components/SkillsBar";
import RecentUpdate from "@/components/RecentUpdate";
import BasisInfo from "@/components/BasicInfo";

export default async function Page() {
  const blogs = await getBlogs();
  const recentBlogs = blogs.slice(0, 3);

  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <section className="w-full mb-20 lg:w-6/8 min-h-[calc(100svh-500px)] lg:flex lg:items-center ">
        <Hero />
      </section>
      <div className="flex items-center justify-start w-full gap-3 mb-10">
        <Newspaper />
        <span className="text-lg font-semibold">Recent Update</span>
      </div>
      <section className="relative flex flex-col justify-between w-full gap-10 lg:flex-row">
        <div className="w-full">

          <RecentUpdate blogs={recentBlogs} isHome={true} />
        </div>

        <aside className="lg:w-[680px] w-full lg:sticky lg:h-fit lg:-top-10 flex flex-col gap-12 rounded-2xl ">
          <BasisInfo />
          <SkillsBar />
        </aside>
      </section>
    </MotionDivWrapper>
  );
}
