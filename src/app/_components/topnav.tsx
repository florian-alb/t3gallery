"use client"

import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import {UploadButton} from "~/utills/uploadthing";
import {useRouter} from "next/navigation";

export function TopNav() {
    const router = useRouter()

    return (
        <nav className="border-b flex items-center justify-between w-full p-4 text-xl font-semibold">
            <div>Gallery</div>

            <div className="flex flex-row gap-4">
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <UploadButton endpoint="imageUploader"
                                  onClientUploadComplete={() => {
                                      router.refresh();
                                  }}/>
                    <UserButton/>
                </SignedIn>
            </div>
        </nav>
    )
}