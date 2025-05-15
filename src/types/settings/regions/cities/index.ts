type CitiesType = {
    id: number
    name: string
    region: string | number
}

type CitiesResults = {
    next: string
    previous: string
    results: CitiesType[]
}