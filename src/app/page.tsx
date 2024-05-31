import {SignedIn, SignedOut} from "@clerk/nextjs";
import {getMyImages} from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic"

async function Images() {
    const images = await getMyImages();

    return (
        <div className="flex flex-wrap gap-4">
            {
                images.map((image) => (
                    <div key={image.id} className="size-48 flex flex-col">
                        <Image
                            src={image.url}
                            alt={image.name}
                            width={192}
                            height={192}
                            style={{ objectFit: "contain"}}
                        />
                        <div>{image.name}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default function HomePage() {
    return (
        <main className="">
            <SignedOut>
                <div className="w-full h-full text-2xl text-center">
                    Please sign in above
                </div>
            </SignedOut>
            <SignedIn>
                <Images/>
            </SignedIn>
        </main>
    );
}
