/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as tasksAndProjectsGet from "../tasksAndProjectsGet.js";
import type * as tasksAndProjectsPost from "../tasksAndProjectsPost.js";
import type * as tasksAndProjectsUpdateDelete from "../tasksAndProjectsUpdateDelete.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  tasksAndProjectsGet: typeof tasksAndProjectsGet;
  tasksAndProjectsPost: typeof tasksAndProjectsPost;
  tasksAndProjectsUpdateDelete: typeof tasksAndProjectsUpdateDelete;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
