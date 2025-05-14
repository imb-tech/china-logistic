type OrderType = {
  id: string | number;
  customer_info: {
    name: string;
    email_or_phone: string;
  };
  seller_info?: {
    id: string;
    name: string;
    email_or_phone: string;
  };
  document: {
    slug: string;
    title: string;
  };
  price?: number;
  provider?: 'click' | 'payme' | 'card_data';
  created_at: string;
};
