import { DataStatus } from "../../constants/status";

export class AsyncDataStatus {
  status: DataStatus = DataStatus.initial;

  get isLoading(): boolean {
    return this.status === DataStatus.loading;
  }

  get isSuccess(): boolean {
    return this.status === DataStatus.success;
  }

  get isError(): boolean {
    return this.status === DataStatus.failure;
  }
}
