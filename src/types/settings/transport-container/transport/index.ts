type TransportType = {
    id: number
    name: string
    is_station_required:boolean
}

type TransportResults = {
    next: string
    previous: string
    results: TransportType[]
}