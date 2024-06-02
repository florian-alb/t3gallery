import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import {SimpleUploadButton} from "~/app/_components/simple-upload-button";

export function TopNav() {
    return (
        <nav className="border-b flex items-center justify-between w-full p-4 text-xl font-semibold">
            <div>Gallery</div>

            <div className="flex flex-row gap-4 items-center">
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <SimpleUploadButton/>
                    <UserButton/>
                </SignedIn>
            </div>
        </nav>
    )
}