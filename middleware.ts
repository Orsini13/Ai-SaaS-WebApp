import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();
    publicRoutes: ["/"]

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};


// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//     publicRoutes: ["/"]
// });

// export const config = {
//   matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
