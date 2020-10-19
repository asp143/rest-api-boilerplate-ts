export default class Response {
    public status = 200;
    public success = true;
    public payload: unknown = {};

    constructor() {
        // ... 
    }

    public setFailed(status: number, payload: Record<string, unknown>): void {
        this.status = status;
        this.payload = payload;
        this.success = false;
    }

    public setPayload(status: number, payload: unknown): void {
        this.status = status;
        this.payload = payload;
    }
}