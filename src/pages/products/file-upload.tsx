"use client"

import type React from "react"
import { useState, useRef, useCallback } from "react"
import { Upload, X, File, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { usePost } from "@/hooks/usePost"

export interface FileUploaderProps {
    acceptedFileTypes?: string[]
    maxFileSize?: number
    maxFiles?: number
    multiple?: boolean
    onUpload?: (files: File[]) => Promise<void>
    uploadUrl?: string
    className?: string
    buttonText?: string
    dropzoneText?: string
    fileTypesText?: string
}

interface UploadingFile {
    file: File
    id: string
    progress: number
    error?: string
    uploaded: boolean
}

export function FileUploader({
    acceptedFileTypes = [".pdf", ".doc", ".docx", ".ppt", ".pptx"],
    maxFileSize = 50 * 1024 * 1024, // 10MB
    maxFiles = Number.POSITIVE_INFINITY,
    multiple = false,
    onUpload,
    uploadUrl = "/api/upload",
    className,
    buttonText = "Kompyuterdan tanlash",
    dropzoneText = "Faylni bu yerga tashlang yoki tanlang",
    fileTypesText,
}: FileUploaderProps) {
    const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([])
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const { mutate } = usePost()

    const defaultFileTypesText =
        acceptedFileTypes.join(", ").toUpperCase().replace(/\./g, "") +
        ` (max ${formatFileSize(maxFileSize)})`

    const handleFileChange = useCallback(
        (selectedFiles: FileList | null) => {
            if (!selectedFiles) return

            const newFiles: UploadingFile[] = []
            const filesToUpload: File[] = []

            Array.from(selectedFiles).forEach((file) => {
                if (uploadingFiles.length + newFiles.length >= maxFiles) return

                const fileExtension = `.${file.name
                    .split(".")
                    .pop()
                    ?.toLowerCase()}`
                const isValidType =
                    acceptedFileTypes.includes(fileExtension) ||
                    acceptedFileTypes.includes("*")

                const isValidSize = file.size <= maxFileSize

                if (isValidType && isValidSize) {
                    const newFile: UploadingFile = {
                        file,
                        id: `${file.name}-${Date.now()}`,
                        progress: 0,
                        uploaded: false,
                    }
                    newFiles.push(newFile)
                    filesToUpload.push(file)
                }
            })

            if (newFiles.length > 0) {
                setUploadingFiles((prev) => [...prev, ...newFiles])
                uploadFiles(newFiles)
            }
        },
        [uploadingFiles, maxFiles, acceptedFileTypes, maxFileSize],
    )

    const uploadFiles = async (files: UploadingFile[]) => {
        for (const fileObj of files) {
            const formData = new FormData()
            formData.append("file", fileObj.file)

            simulateProgress(fileObj.id, () => {
                mutate(uploadUrl, formData, {
                    onSuccess: () => graduallyCompleteProgress(fileObj.id),
                    onError: () =>
                        setFileError(fileObj.id, "Yuklashda xatolik yuz berdi"),
                })
            })
        }
    }

    const simulateProgress = (fileId: string, onComplete: () => void) => {
        let progress = 0
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 5) + 5
            if (progress >= 75) {
                progress = 75
                clearInterval(interval)
                onComplete()
            }
            updateFileProgress(fileId, progress)
        }, 200)
    }

    const graduallyCompleteProgress = (fileId: string) => {
        let progress = 75
        const interval = setInterval(() => {
            progress += 5
            if (progress >= 100) {
                progress = 100
                clearInterval(interval)
                markFileAsUploaded(fileId)
            }
            updateFileProgress(fileId, progress)
        }, 100)
    }

    const updateFileProgress = (fileId: string, progress: number) => {
        setUploadingFiles((prev) =>
            prev.map((file) =>
                file.id === fileId ? { ...file, progress } : file,
            ),
        )
    }

    const markFileAsUploaded = (fileId: string) => {
        setUploadingFiles((prev) =>
            prev.map((file) =>
                file.id === fileId
                    ? { ...file, uploaded: true, progress: 100 }
                    : file,
            ),
        )
    }

    const setFileError = (fileId: string, error: string) => {
        setUploadingFiles((prev) =>
            prev.map((file) =>
                file.id === fileId ? { ...file, error } : file,
            ),
        )
    }

    const removeFile = (fileId: string) => {
        setUploadingFiles((prev) => prev.filter((file) => file.id !== fileId))
    }

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragging(true)
    }, [])

    const handleDragLeave = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault()
            e.stopPropagation()
            setIsDragging(false)
        },
        [],
    )

    const handleDrop = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault()
            e.stopPropagation()
            setIsDragging(false)

            const files = e.dataTransfer.files
            handleFileChange(files)
        },
        [handleFileChange],
    )

    const handlePaste = useCallback(
        (e: React.ClipboardEvent) => {
            const files = e.clipboardData.files
            if (files.length > 0) {
                handleFileChange(files)
            }
        },
        [handleFileChange],
    )

    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    return (
        <div className={cn("w-full", className)} onPaste={handlePaste}>
            <div
                className={cn(
                    "border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center gap-4 transition-colors",
                    isDragging
                        ? "border-primary bg-primary/5"
                        : "border-muted-foreground/25 bg-muted/50",
                    uploadingFiles.length > 0 && "pb-4",
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-lg font-medium">{dropzoneText}</p>
                    <p className="text-sm text-muted-foreground">
                        {fileTypesText || defaultFileTypesText}
                    </p>
                </div>

                <Button onClick={openFileDialog} variant="secondary">
                    {buttonText}
                </Button>

                <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    multiple={multiple}
                    accept={acceptedFileTypes.join(",")}
                    onChange={(e) => handleFileChange(e.target.files)}
                />
            </div>

            {uploadingFiles?.length > 0 && (
                <div className="mt-4 space-y-3">
                    {uploadingFiles?.map((file) => (
                        <div
                            key={file.id}
                            className="p-3 border rounded-md flex items-center gap-3 bg-background"
                        >
                            <div className="p-2 rounded-md bg-primary/10">
                                <File className="h-5 w-5 text-primary" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <div className="truncate pr-4 font-medium">
                                        {file.file.name}
                                    </div>
                                    <button
                                        onClick={() => removeFile(file.id)}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>

                                <div className="flex items-center text-xs text-muted-foreground gap-2">
                                    <span>
                                        {formatFileSize(file.file.size)}
                                    </span>
                                    <span>•</span>
                                    <span>
                                        {file.file.type ||
                                            getFileTypeFromName(file.file.name)}
                                    </span>
                                </div>

                                <div className="mt-2">
                                    {file.error ? (
                                        <div className="flex items-center gap-1 text-destructive text-xs">
                                            <AlertCircle className="h-3 w-3" />
                                            {file.error}
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex justify-between text-xs mb-1">
                                                <span>{file.progress}%</span>
                                                {file.uploaded && (
                                                    <span className="flex items-center gap-1 text-primary">
                                                        <CheckCircle className="h-3 w-3" />
                                                        Uploaded
                                                    </span>
                                                )}
                                            </div>
                                            <Progress
                                                value={file.progress}
                                                className="h-1"
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

function formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes"

    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return (
        Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    )
}

function getFileTypeFromName(filename: string): string {
    const extension = filename.split(".").pop()?.toUpperCase() || ""
    return extension
}
