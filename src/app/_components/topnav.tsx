import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

export function TopNav() {
    return (
        <nav className="border-b flex items-center justify-between w-full p-4 text-xl font-semibold">
            <div>Gallery</div>

            <div>
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </div>
        </nav>
    )
}