import BackContent from "@/components/BackContent";
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
        <div className="absolute left-[40px] top-[180px] w-[76%] h-[230px]">
          <Image src="/user.png" width={230} height={200} className="relative rounded-md ml-[13px]" alt="user.png" />
          <ResultBtn />
          <MarkerBtn title="現在地付近のメンバー"><WhitePin /></MarkerBtn>
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
