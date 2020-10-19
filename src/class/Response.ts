export default class Response {
    public status = 200;
    public success = true;
    public payload = {};

    constructor() {
        // ... 
    }

    public setFailed(status: number, payload: Record<string, unknown>): void {
        this.status = status;
        this.payload = payload;
        this.success = false;
    }

    public setPayload(status: number, payload: Record<string, unknown>): void {
        this.status = status;
        this.payload = payload;
    }
}