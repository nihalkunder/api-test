# 🎯 Playwright API Testing Framework

A lightweight and scalable framework to test REST APIs (`GET`, `PUT`, `DELETE`) using **Playwright's `request` fixture**, written in TypeScript and following the **Page Object Model (POM)** design pattern.

---

## 📦 Features

- ✅ Supports REST API testing (`GET`, `PUT`, `DELETE`)
- 🧱 Follows Page Object Model (POM) for modular test structure
- ⚙️ Generic function to handle API requests dynamically
- 💥 Built using [Playwright Test Runner](https://playwright.dev/docs/test-intro)
- 🧪 Easy to extend for more API endpoints and request types

---

## 🛠️ Installation

```bash
git clone https://github.com/your-username/api-test.git
cd api-test/playwright
npm install
npx playwright install
```

## 📁 Folder Structure
playwright-test/
├── tests/               # Test cases
│   └── users.spec.ts
├── pages/               # Page Object Models for APIs
│   └── api-page.ts
├── utils/               # Utility functions
│   └── api-context.ts
├── playwright.config.ts # Playwright config
├── tsconfig.json        # TypeScript config
├── package.json         # NPM dependencies

## Running the tests
```bash
cd api-test/playwright
npm run test:api
```