import { createRouter } from "../../mist/index";
import Home from "../views/home";
import _404 from "../views/404"

const router = createRouter([
	{
		path: "/",
		name: "home",
		title: "Home",
		view: Home
	},
	{
		path: "/PageNotFound",
		name: "404",
		title: "404",
		view: _404
	}
]);

export default router;