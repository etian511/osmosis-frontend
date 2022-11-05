export interface IbcMetrics {
  data: {
    source: string;
    destination: string;
    channel_id: string;
    token_symbol: string;
    token_name: string;
    last_tx: string;
    size_queue: number;
    duration_minutes: number;
  }[];
}

export enum IbcStatus {
  OK = 0,
  Congested = 1,
  Blocked = 2,
  Undefined = 3,
}
