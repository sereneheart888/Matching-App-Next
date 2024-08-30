import BackContent from "@/components/BackContent";
import HomeIcon from "@/components/Icon/Home";
import MailIcon from "@/components/Icon/Mail";
import Question from "@/components/Icon/Question";
import UserIcon from "@/components/Icon/User";
import MainContent from "@/components/Main";
import BottomNav from "@/components/Navbar/Bottom";
import ItemBtn from "@/components/Navbar/Bottom/ItemBtn";
import TopNav from "@/components/Navbar/Top";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useMemo } from "react";

export default async function Page() {
    const Map = useMemo(() => dynamic(
        () => import('@/components/Map/LeafletMap'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    return (
        <>
            <MainContent>
                <Image className="z-[0] relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]" src="/back.png" alt="Next.js Logo" width={338} height={800}
                />
                <BackContent />
                <TopNav title='RealSpot'><Question /></TopNav>

                <div className="w-[73%] h-[55%] absolute left-[45px] top-[130px]">
                    <Map posix={[4.79029, -75.69003]} />
                </div>
                <BottomNav>
                    <ItemBtn title="ホーム"><HomeIcon /></ItemBtn>
                    <ItemBtn title="トーク"><MailIcon /></ItemBtn>
                    <ItemBtn title="マイページ"><UserIcon /></ItemBtn>
                </BottomNav>
            </MainContent>
        </>
    )
}