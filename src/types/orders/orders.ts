
type OrderType = {
  agent: string | null;
  agent_full_name: string;
  comment: string;
  container_number: string | null;
  container_type: number;
  created_at: string;
  currency: string | null;
  customers: string[];
  destination_address: string;
  destination_region: number;
  hint: string | null;
  id: number;
  load_date: string;
  order_type: number;
  price: number | string | null;
  quality: number;
  start_date: string | null;
  station: string | null;
  status: number | string;
  team_id: string;
  total_spent: number | string;
  transport: number;
  transport_number: string | null;
  updated_at: string;
};


type OrdersTypeResults = {
  results: OrderType[]
  next: string
  previous: string
}

type OfferAgent = {
  id: number;
  role: number;
  username: string;
  full_name: string;
  phone_code: string;
  phone_number: string;
  address: string | null;
  region: string | null;
  completed_orders: number;
  in_completed_orders: number;
};

type Offers = {
  id: number;
  agent: OfferAgent;
  station: {
    id: number
    name: string
  };
  load_date: string | null;
  start_date: string | null;
  price: number | null;
  currency: string | null;
  status: number;
  container: number;
}



type OffersTypeResults = {
  results: Offers[]
  next: string
  previous: string
}



type Logs = {
  id: number
  status: number
  agent: any
  changed_at: string
  hint: string
}

