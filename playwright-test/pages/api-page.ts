import { APIRequestContext, expect } from '@playwright/test';
import { apiRequest } from '../utils/api-context';

export class APIPage {
    constructor(private readonly request: APIRequestContext) { }

    async getUser(userId: number) {
        const res = await apiRequest(this.request, 'GET', `/users/${userId}`);
        expect(res.ok()).toBeTruthy();
        return res.json();
    }

    async updateUser(userId: number, data: any) {
        const res = await apiRequest(this.request, 'PUT', `/users/${userId}`, data);
        expect(res.ok()).toBeTruthy();
        return res.json();
    }

    async deleteUser(userId: number) {
        const res = await apiRequest(this.request, 'DELETE', `/users/${userId}`);
        expect(res.status()).toBe(200);
    }
}
