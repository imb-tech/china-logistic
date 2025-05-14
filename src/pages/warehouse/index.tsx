import { useAdminProductsColumns } from "./columns"
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ParamDateRange from "@/components/as-params/date-picker-range";
import { DataTable } from "@/components/ui/datatable";

export const data: AdminType[] = [
    {
        id: "1",
        name: "Modern Web Design",
        desc: "Learn modern web design techniques using HTML, CSS, and JavaScript.",
        slug: "modern-web-design",
        price: 12000,
        file_url: "https://example.com/files/modern-web-design.pdf",
        category_name: "Web Development",
        tags: ["web", "design", "html", "css", "javascript"],
        poster: "https://example.com/images/modern-web-design.jpg",
        ext: "pdf",
        view_count: 245,
        sold_count: 53,
        size: 3.5, // MB
        pages: 120,
    },
    {
        id: "2",
        name: "Introduction to Python",
        desc: "A beginner's guide to programming with Python.",
        slug: "introduction-to-python",
        price: 5500,
        file_url: "https://example.com/files/introduction-to-python.pdf",
        category_name: "Programming",
        tags: ["python", "beginner", "coding"],
        poster: "https://example.com/images/python-intro.jpg",
        ext: "pdf",
        view_count: 379,
        sold_count: 91,
        size: 4.2,
        pages: 98,
    },
    {
        id: "3",
        name: "Digital Marketing 101",
        desc: "Understand the basics of digital marketing and SEO.",
        slug: "digital-marketing-101",
        price: 3500,
        file_url: "https://example.com/files/digital-marketing-101.pdf",
        category_name: "Marketing",
        tags: ["marketing", "seo", "digital"],
        poster: "https://example.com/images/digital-marketing.jpg",
        ext: "pdf",
        view_count: 189,
        sold_count: 45,
        size: 2.9,
        pages: 80,
    },
    {
        id: "4",
        name: "Modern Web Design",
        desc: "Learn modern web design techniques using HTML, CSS, and JavaScript.",
        slug: "modern-web-design",
        price: 12000,
        file_url: "https://example.com/files/modern-web-design.pdf",
        category_name: "Web Development",
        tags: ["web", "design", "html", "css", "javascript"],
        poster: "https://example.com/images/modern-web-design.jpg",
        ext: "pdf",
        view_count: 245,
        sold_count: 53,
        size: 3.5, // MB
        pages: 120,
    },
    {
        id: "5",
        name: "Introduction to Python",
        desc: "A beginner's guide to programming with Python.",
        slug: "introduction-to-python",
        price: 5500,
        file_url: "https://example.com/files/introduction-to-python.pdf",
        category_name: "Programming",
        tags: ["python", "beginner", "coding"],
        poster: "https://example.com/images/python-intro.jpg",
        ext: "pdf",
        view_count: 379,
        sold_count: 91,
        size: 4.2,
        pages: 98,
    },
    {
        id: "6",
        name: "Digital Marketing 101",
        desc: "Understand the basics of digital marketing and SEO.",
        slug: "digital-marketing-101",
        price: 3500,
        file_url: "https://example.com/files/digital-marketing-101.pdf",
        category_name: "Marketing",
        tags: ["marketing", "seo", "digital"],
        poster: "https://example.com/images/digital-marketing.jpg",
        ext: "pdf",
        view_count: 189,
        sold_count: 45,
        size: 2.9,
        pages: 80,
    },
    {
        id: "7",
        name: "Modern Web Design",
        desc: "Learn modern web design techniques using HTML, CSS, and JavaScript.",
        slug: "modern-web-design",
        price: 12000,
        file_url: "https://example.com/files/modern-web-design.pdf",
        category_name: "Web Development",
        tags: ["web", "design", "html", "css", "javascript"],
        poster: "https://example.com/images/modern-web-design.jpg",
        ext: "pdf",
        view_count: 245,
        sold_count: 53,
        size: 3.5, // MB
        pages: 120,
    },
    {
        id: "8",
        name: "Introduction to Python",
        desc: "A beginner's guide to programming with Python.",
        slug: "introduction-to-python",
        price: 5500,
        file_url: "https://example.com/files/introduction-to-python.pdf",
        category_name: "Programming",
        tags: ["python", "beginner", "coding"],
        poster: "https://example.com/images/python-intro.jpg",
        ext: "pdf",
        view_count: 379,
        sold_count: 91,
        size: 4.2,
        pages: 98,
    },
    {
        id: "9",
        name: "Digital Marketing 101",
        desc: "Understand the basics of digital marketing and SEO.",
        slug: "digital-marketing-101",
        price: 3500,
        file_url: "https://example.com/files/digital-marketing-101.pdf",
        category_name: "Marketing",
        tags: ["marketing", "seo", "digital"],
        poster: "https://example.com/images/digital-marketing.jpg",
        ext: "pdf",
        view_count: 189,
        sold_count: 45,
        size: 2.9,
        pages: 80,
    },
    {
        id: "10",
        name: "Digital Marketing 101",
        desc: "Understand the basics of digital marketing and SEO.",
        slug: "digital-marketing-101",
        price: 3500,
        file_url: "https://example.com/files/digital-marketing-101.pdf",
        category_name: "Marketing",
        tags: ["marketing", "seo", "digital"],
        poster: "https://example.com/images/digital-marketing.jpg",
        ext: "pdf",
        view_count: 189,
        sold_count: 45,
        size: 2.9,
        pages: 80,
    },
]

export const fileColors: { [key: string]: string } = {
    doc: "bg-blue-500",
    docx: "bg-blue-500",
    xls: "bg-green-500",
    xlsx: "bg-green-500",
    ppt: "bg-orange-500",
    pptx: "bg-orange-400",
    pdf: "bg-red-500",
  };

export const WarehousePages = () => {
    return (
        <div className="w-full">
            <Card className="mb-5 rounded-md border">
                <CardContent className="flex justify-between items-start">
                    <div className="flex flex-col gap-3 w-1/2">
                        <h1 className="text-2xl font-bold">Ombor</h1>
                        <Input
                            fullWidth
                            placeholder="Qidiruv..."
                            className=""
                        />
                    </div>
                    <ParamDateRange />
                </CardContent>
            </Card>
            <DataTable
                columns={useAdminProductsColumns({
                    onDelete: () => {},
                    onEdit: () => {},
                })}
                data={data}
                paginationProps={{ totalPages: 1 }}
                // loading={isLoading}
            />
        </div>
    )
}
