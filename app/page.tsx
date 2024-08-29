import BackContent from "@/components/BackContent";
import HomeContent from "@/components/Content";
import CoinIcon from "@/components/Icon/Coin";
import HomeIcon from "@/components/Icon/Home";
import MailIcon from "@/components/Icon/Mail";
import Question from "@/components/Icon/Question";
import Refresh from "@/components/Icon/Refresh";
import SearchIcon from "@/components/Icon/Search";
import UserIcon from "@/components/Icon/User";
import UsersIcon from "@/components/Icon/Users";
import WhitePin from "@/components/Icon/WhitePin";
import MainContent from "@/components/Main";
import MarkerBtn from "@/components/MarkerBtn";
import BottomNav from "@/components/Navbar/Bottom";
import ItemBtn from "@/components/Navbar/Bottom/ItemBtn";
import TopNav from "@/components/Navbar/Top";
import RefreshBtn from "@/components/RefreshBtn";
import ResultBtn from "@/components/ResultBtn";
import SearchContent from "@/components/Search";
import SearchBtn from "@/components/Search/SearchBtn";
import Image from "next/image";

export default function Home() {
  return (
    <MainContent>
      <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]" src="/back.png" alt="Next.js Logo" width={338} height={800} priority
      />
      <BackContent />
      <TopNav title='RealSpot'><Question /></TopNav>
      <RefreshBtn title="このエリアでさがす"><Refresh /></RefreshBtn>
      <HomeContent>
        <Image src="/user.png" width={230} height={200} className="relative rounded-md ml-[13px]" alt="user.png" />
        <ResultBtn />
        <MarkerBtn title="現在地付近のメンバー"><WhitePin /></MarkerBtn>
      </HomeContent>
      <SearchContent>
        <SearchBtn title1="年収で" title2="さがす"><CoinIcon /></SearchBtn>
        <SearchBtn title1="性別で" title2="さがす"><UsersIcon /></SearchBtn>
        <SearchBtn title1="年齢で" title2="さがす"><SearchIcon /></SearchBtn>
      </SearchContent>
      <BottomNav>
        <ItemBtn title="ホーム"><HomeIcon /></ItemBtn>
        <ItemBtn title="トーク"><MailIcon /></ItemBtn>
        <ItemBtn title="マイページ"><UserIcon /></ItemBtn>
      </BottomNav>

    </MainContent>
  );
}
