// https://model-tapir-57.clerk.accounts.dev


export default {
  providers: [
    {
      domain: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API_URL,
      applicationID: "convex",
    },
  ]
};