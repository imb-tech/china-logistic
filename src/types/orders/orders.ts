
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