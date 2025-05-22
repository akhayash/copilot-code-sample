This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## CI/CD Environments

This project is set up with automated CI/CD workflows using GitHub Actions and Azure Static Web Apps with two separate environments:

- **Production Environment (main branch)**: [https://thankful-meadow-05eade300.6.azurestaticapps.net](https://thankful-meadow-05eade300.6.azurestaticapps.net)
- **Development Environment (non-main branches)**: [https://white-wave-0cdad0c00.6.azurestaticapps.net](https://white-wave-0cdad0c00.6.azurestaticapps.net)

The GitHub Actions workflow automatically deploys:
- Changes to non-main branches to the development environment
- Changes merged to the main branch to the production environment

This setup allows for reviewing and testing changes in the development environment before they are merged to production.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
