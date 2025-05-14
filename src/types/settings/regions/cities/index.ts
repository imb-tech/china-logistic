type CitiesType = {
    id: number
    name: string
}

type CitiesResults = {
    next: string
    previous: string
    results: CitiesType[]
}