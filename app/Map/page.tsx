"use client"
import React, { MouseEvent } from 'react';
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
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('EEEEE')
    // e.preventDefault()
    router.push('/Map/index')
    // router.push('../components/Map')
  }
  return (
    <MainContent>
      <Image className="z-[0] relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]" src="/back.png" alt="Next.js Logo" width={338} height={800}
      />
      <BackContent />
      <TopNav title='RealSpot'><Question /></TopNav>

      <BottomNav>
        <ItemBtn title="ホーム"><HomeIcon /></ItemBtn>
        <ItemBtn title="トーク"><MailIcon /></ItemBtn>
        <ItemBtn title="マイページ"><UserIcon /></ItemBtn>
      </BottomNav>
    </MainContent>
  );
}
