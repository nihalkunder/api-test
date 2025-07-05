import { test } from '@playwright/test';
import { APIPage } from '../pages/api-page';

test.describe('User API Tests', () => {
    test('GET user', async ({ request }) => {
        const apiPage = new APIPage(request);
        const user = await apiPage.getUser(1);
        console.log(user);
    });

    test('PUT user', async ({ request }) => {
        const apiPage = new APIPage(request);
        const updatedUser = await apiPage.updateUser(1, { name: 'Nihal' });
        console.log(updatedUser);
    });

    test('DELETE user', async ({ request }) => {
        const apiPage = new APIPage(request);
        await apiPage.deleteUser(1);
    });
});
