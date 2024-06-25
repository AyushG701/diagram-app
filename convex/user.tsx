import { v } from "convex/values";
import { query } from "./_generated/server";

export const getUser = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("users")
      .filter({ email: args.email })
      .first();
  },
});
