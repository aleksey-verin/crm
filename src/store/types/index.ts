export interface IEmployees {
  name: string;
  request: string | null;
  id?: number;
  person_name?: string;
  person_surname?: string;
  person_avatar?: string;
}

export interface ICallsData {
  total_rows: string;
  results: ICalls[];
}

export interface ICalls {
  id: number;
  partnership_id: string;
  partner_data: PartnerData;
  date: string;
  date_notime: string;
  time: number;
  from_number: string;
  from_extension: string;
  to_number: string;
  to_extension: string;
  is_skilla: number;
  status: string;
  record: string;
  line_number: string;
  in_out: number;
  from_site: number;
  source: string;
  errors: string[];
  disconnect_reason: string;
  results: Result2[];
  stages: any[];
  abuse: any[];
  contact_name: string;
  contact_company: string;
  person_id: number;
  person_name: string;
  person_surname: string;
  person_avatar: string;
}

export interface PartnerData {
  id: string;
  name: string;
  phone: string;
}

export interface Result2 {
  type: string;
  title: string;
  tooltip: string;
}
