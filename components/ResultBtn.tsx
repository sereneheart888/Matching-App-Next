export default function ResultBtn() {
    return (
        <div className="flex justify-between rounded-xl absolute text-[#5C5F5D] w-[83%] bg-[#FAFB64] text-[15px] font-bold top-[12px] left-[22px] pl-[10px] pr-[10px] pt-[5px] pb-[3px]">
            <div className="flex">
                <label className="text-[20px] pt-[2px] pr-[3px]">Name</label>
                <div className="flex flex-col text-[12px]">
                    <label>25歳</label>
                    <label>友だち募集中</label>
                </div>
            </div>
            <button className="bg-white rounded-full px-[3px] drop-shadow-md">お誘い</button>
        </div>
    );
}
