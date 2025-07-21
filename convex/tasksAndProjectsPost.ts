import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createTask = mutation({
  args: { 
    name: v.string(),
    priority: v.union(v.literal("low-priority"), v.literal("medium-priority"), v.literal("high-priority"), v.literal("")),
    dueDate: v.optional(v.number()),
   },
  handler: async (ctx, args) => {
   const task = await ctx.db.insert("tasks", { name: args.name, priority: args.priority, dueDate: args.dueDate });
   return task;
  },
});