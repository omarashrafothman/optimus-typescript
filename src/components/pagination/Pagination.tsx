"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Pagination({
    currentPage,
    hasPrev,
    hasNext,
}: pagenationType) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);
    };
    return (
        <div className="mt-12 flex justify-between w-full">
            <button className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200" onClick={() => createPageUrl(currentPage - 1)}>Pervious</button>
            <button className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200" onClick={() => createPageUrl(currentPage + 1)}>Next</button>
        </div>
    )
}

export default Pagination