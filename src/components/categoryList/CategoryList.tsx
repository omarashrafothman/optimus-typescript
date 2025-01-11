import Link from "next/link"
import Image from "next/image"
import categories from "../../locals/categories.json";
function CategoryList() {
    return (
        <div className="px-4 overflow-x-scroll scrollbar-hide ">
            <div className="flex gap-4 md:gap-8 ">

                {categories.map((catItem) => (<Link href={`/list?cat=${catItem.categoryName}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6" key={catItem.categoryId} >

                    <div className="relative bg-slate-100 w-full h-96">

                        <Image src={catItem.categoryImage} alt={catItem.categoryName} fill sizes="20vw" className="object-cover" />

                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">{catItem.categoryName}</h1>
                </Link>))}


            </div>


        </div>
    )
}

export default CategoryList