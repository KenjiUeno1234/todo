# Todo App

シンプルなTodoアプリケーション

## Tech Stack

- **Framework**: React Router v7
- **Database**: SQLite (Cloudflare D1)
- **Testing**: Vitest (unit tests)
- **E2E Testing**: Playwright
- **Deployment**: Cloudflare Workers
- **Language**: TypeScript
- **Package Manager**: npm

## Project Structure

- `app/`: React Router v7 application files
- `app/routes/`: Route components and handlers
- `app/components/`: Reusable React components
- `app/lib/`: Utilities and database functions
- `app/types/`: TypeScript type definitions
- `tests/`: Unit tests (Vitest)
- `e2e/`: E2E tests (Playwright)
- `migrations/`: Database migration files

## Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run test`: Run unit tests with Vitest
- `npm run test:watch`: Run tests in watch mode
- `npm run test:e2e`: Run E2E tests with Playwright
- `npm run deploy`: Deploy to Cloudflare Workers
- `npm run db:migrate`: Run database migrations
- `npm run db:seed`: Seed database with sample data

## Code Style

- Use TypeScript for all files
- Prefer function components with React hooks
- Use arrow functions for components
- 2-space indentation
- Use camelCase for variables and functions
- Use PascalCase for components and types
- Prefer async/await over promises
- Use const assertions for readonly data

## Database

- Use Cloudflare D1 SQL database
- Database schema: todos table with id, title, completed, created_at fields
- Use prepared statements for all queries
- Handle database errors gracefully

## Testing

- Write unit tests for all utility functions
- Test React components with Vitest and React Testing Library
- E2E tests should cover main user flows
- Mock database calls in unit tests
- Use data-testid attributes for E2E test selectors

## Deployment

- Deploy to Cloudflare Workers
- Environment variables stored in wrangler.toml
- Database migrations run automatically on deploy
- Use staging environment for testing

## Do Not

- Do not use class components
- Do not commit sensitive data or API keys
- Do not skip TypeScript type definitions
- Do not deploy without running tests
- Do not modify database schema without migrations