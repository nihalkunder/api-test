import { APIRequestContext } from '@playwright/test';

export async function apiRequest(
    request: APIRequestContext,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    data?: any
) {
    const options = {
        data,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    switch (method) {
        case 'GET':
            return request.get(endpoint);
        case 'POST':
            return request.post(endpoint, options);
        case 'PUT':
            return request.put(endpoint, options);
        case 'DELETE':
            return request.delete(endpoint);
        default:
            throw new Error(`Unsupported method: ${method}`);
    }
}
