import BackContent from "@/components/BackContent";
import HomeContent from "@/components/Content";
import HomeIcon from "@/components/Icon/Home";
import MailIcon from "@/components/Icon/Mail";
import Question from "@/components/Icon/Question";
import Refresh from "@/components/Icon/Refresh";
import UserIcon from "@/components/Icon/User";
import WhitePin from "@/components/Icon/WhitePin";
import MarkerBtn from "@/components/MarkerBtn";
import BottomNav from "@/components/Navbar/Bottom";
import ItemBtn from "@/components/Navbar/Bottom/ItemBtn";
import TopNav from "@/components/Navbar/Top";
import RefreshBtn from "@/components/RefreshBtn";
import ResultBtn from "@/components/ResultBtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/back.png"
          alt="Next.js Logo"
          width={338}
          height={800}
          priority
        />
        <BackContent />
        <TopNav title='RealSpot'><Question /></TopNav>
        <RefreshBtn title="このエリアでさがす"><Refresh /></RefreshBtn>
        <HomeContent>
          <Image src="/user.png" width={230} height={200} className="relative rounded-md ml-[13px]" alt="user.png" />
          <ResultBtn />
          <MarkerBtn title="現在地付近のメンバー"><WhitePin /></MarkerBtn>
        </HomeContent>
        <div className="flex justify-center absolute left-[40px] top-[411px] w-[76%] h-[65px] gap-2">
          <button className="flex flex-col items-center bg-[#EEEEEE] drop-shadow-md rounded-lg text-[#5B5B5B] px-[20px] py-[2px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-[30px] h-[30px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            <label className="text-[10px]">年収で</label>
            <label className="text-[10px]">さがす</label>
          </button>
          <button className="flex flex-col items-center bg-[#EEEEEE] drop-shadow-md rounded-lg text-[#5B5B5B] px-[20px] py-[2px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-[30px] h-[30px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            <label className="text-[10px]">性別で</label>
            <label className="text-[10px]">さがす</label>
          </button>
          <button className="flex flex-col items-center bg-[#EEEEEE] drop-shadow-md rounded-lg text-[#5B5B5B] px-[20px] py-[2px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-[30px] h-[30px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <label className="text-[10px]">年齢で</label>
            <label className="text-[10px]">さがす</label>
          </button>
        </div>
        <BottomNav>
          <ItemBtn title="ホーム"><HomeIcon /></ItemBtn>
          <ItemBtn title="トーク"><MailIcon /></ItemBtn>
          <ItemBtn title="マイページ"><UserIcon /></ItemBtn>
        </BottomNav>
      </div>
    </main >
  );
}
