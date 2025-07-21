import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const deleteTask = mutation({
    args: {
        taskId: v.id("tasks")
    },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.taskId)
    }
});

export const updateTask = mutation({
    args: {
        taskId: v.id("tasks"),
        name: v.string(),
        priority: v.union(v.literal("low-priority"), v.literal("medium-priority"), v.literal("high-priority"), v.literal("")),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.taskId, {
            name: args.name,
            priority: args.priority
        })
    }
});

export const updateTaskDate = mutation({
    args: {
        taskId: v.id("tasks"),
        dueDate: v.optional(v.number()),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.taskId, {
            dueDate: args.dueDate
        })
    }
});