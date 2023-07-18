import { Router } from "express";
const router = Router();
// remove the below line
const testPathRouter = "/";
const moduleRoutes = [
  // add the module routes objects here
  // {path:"/pathname", router: moduleroute}
  { path: "/test-path", router: testPathRouter },
];
// !uncomment the below line while using this
// moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
