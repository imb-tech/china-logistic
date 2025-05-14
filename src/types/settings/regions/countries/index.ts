type CountriesType = {
    id: number
    name: string
}

type CountriesResults = {
    next: string
    previous: string
    results: CountriesType[]
}