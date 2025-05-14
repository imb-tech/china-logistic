type ProductsType = {
    id: number
    name: string
    code: string | number
}

type ProductResults = {
    next: string
    previous: string
    results: ProductsType[]
}