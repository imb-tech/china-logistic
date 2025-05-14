import { ArrowLeft, Upload } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { useForm } from "react-hook-form"
import FormInput from "@/components/form/input"
import { FormSelect } from "@/components/form/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FormNumberInput } from "@/components/form/number-input"
import FormTextarea from "@/components/form/textarea"
import FileUpload from "@/components/form/file-upload"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { FileUploader } from "./file-upload"

type FormType = {
    name: string
    document: string
    category: number | string
    desc: string
    price: number
}

export const ProductsCreatePages = () => {
    const form = useForm<FormType>()
    const [file, setFile] = useState<File | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const onSubmit = (values: FormType) => {}
    return (
        <div className="w-full mx-auto">
            <div className="flex items-center mb-4">
                <Link
                    href="/"
                    className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Bosh sahifaga qaytish
                </Link>
            </div>

            <div className="w-full mx-auto">
                <h1 className="text-2xl font-bold mb-4">
                    Yangi hujjat yuklash
                </h1>

                <Card className="border shadow-md bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle>Hujjat ma'lumotlari</CardTitle>
                        <CardDescription>
                            Hujjat haqida barcha ma'lumotlarni to'ldiring
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="grid lg:grid-cols-2 grid-cols-1 gap-4"
                        >
                            <div className="space-y-2 lg:col-span-2">
                                <Label htmlFor="file">Fayl yuklash</Label>
                                <FileUploader />
                            </div>
                            <FormInput
                                methods={form}
                                name="name"
                                label="Mahsulot nomi"
                                placeholder="Hujjat nomini kiriting"
                                wrapperClassName="lg:col-span-2"
                            />
                            <FormSelect
                                control={form.control}
                                name="category"
                                label="Kategoriya"
                                options={[
                                    { label: "Kurs ishi", value: 1 },
                                    { label: "Slaydlar", value: 2 },
                                ]}
                            />
                            <FormNumberInput
                                control={form.control}
                                name="price"
                                label="Narxi (so'm)"
                                placeholder="Narx  kiriting"
                            />
                            <FormTextarea
                                methods={form}
                                name="desc"
                                label="Tavsif"
                                placeholder="Hujjat haqida batafsil ma'lumot"
                                wrapperClassName={"lg:col-span-2"}
                                rows={6}
                            />
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
                        <Button variant="outline">Bekor qilish</Button>
                        <Button>Hujjatni yuklash</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
