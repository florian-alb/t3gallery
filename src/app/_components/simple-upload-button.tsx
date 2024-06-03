"use client";

// inferred input off useUploadThing
import {useUploadThing} from "~/utills/uploadthing";
import React from "react";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
    const $ut = useUploadThing(...args);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const selectedFiles = Array.from(e.target.files);
        const result = await $ut.startUpload(selectedFiles);

        console.log("uploaded files", result);
        // TODO: persist result in state maybe?
    };

    return {
        inputProps: {
            onChange,
            multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
            accept: "image/*",
        },
        isUploading: $ut.isUploading,
    };
}

function UploadSVG() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"/>
        </svg>
    )
}

function LoadingSpinnerSVG() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
            <circle className="spinner_qM83" cx="4" cy="12" r="3"/>
            <circle className="spinner_qM83 spinner_oXPr" cx="12" cy="12" r="3"/>
            <circle className="spinner_qM83 spinner_ZTLf" cx="20" cy="12" r="3"/>
        </svg>
    )
}

function SuccessSVG() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
    )
}

export function SimpleUploadButton() {
    const router = useRouter()

    const {inputProps} = useUploadThingInputProps("imageUploader", {
        onUploadBegin() {
            toast(<div className="flex gap-2">
                    <LoadingSpinnerSVG/><span className="text-lg">Uploading...</span>
                </div>,
                {
                    duration: 100000,
                    id: "upload-begin",
                },
            );
        },
        onClientUploadComplete() {
            toast.dismiss("upload-begin");
            toast.success(<div className="flex gap-2 items-center">
                <SuccessSVG/>
                <span className="text-lg">Upload complete</span>
            </div>);
            router.refresh();
        }
    })

    return (
        <div>
            <label
                className="cursor-pointer"
                htmlFor='uplad-button'>
                <UploadSVG/>
            </label>
            <input id='uplad-button' type='file' className="sr-only"
                   {...inputProps}
            />
        </div>
    )
}