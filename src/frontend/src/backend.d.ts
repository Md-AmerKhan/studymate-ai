import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Message {
    content: string;
    role: string;
    timestamp: bigint;
}
export interface backendInterface {
    clearSession(sessionId: string): Promise<void>;
    getAllSessionIds(): Promise<Array<string>>;
    getMessages(sessionId: string): Promise<Array<Message>>;
    getTimetable(sessionId: string): Promise<string>;
    saveMessage(sessionId: string, role: string, content: string, timestamp: bigint): Promise<void>;
    saveTimetable(sessionId: string, timetable: string): Promise<void>;
}
