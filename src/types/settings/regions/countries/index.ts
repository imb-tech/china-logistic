type CountriesType = {
    id: number
    name: string
    region: string | number
}

type CountriesResults = {
    next: string
    previous: string
    results: CountriesType[]
}