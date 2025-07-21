import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
    tasks: defineTable({
        name: v.string(),
        priority: v.union(v.literal("low-priority"), v.literal("medium-priority"), v.literal("high-priority"), v.literal("")),
        dueDate: v.optional(v.number()),
    })
});

export default schema;