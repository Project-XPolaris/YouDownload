export interface TaskEntity {
  id: string;
  name: string;
  complete: number;
  length: number;
  progress: number;
  status: string;
  speed: number;
  eta: number;
  extra?: any;
  type: string;
}
