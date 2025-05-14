type StationsType = {
    id: number
    name: string
}

type StationsResults = {
    next: string
    previous: string
    results: StationsType[]
}