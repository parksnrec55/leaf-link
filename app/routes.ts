import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/plants/:pid", "routes/details.tsx"),
] satisfies RouteConfig;
