/** @jsx jsxTransform */
import { jsxTransform, router } from "../../mist/index";

const _404 = (state) => {
    return (
        <div class="wrapper" style="font-size: 70px">
            <h1 style="font-size: 200px">404</h1>
            <h1>PAGE NOT FOUND</h1>
            <button class="routerp" onClick={() => {router.push({type: "path", value: "/"})}}>Take me back to safety!</button>
        </div>
    )
}

export default _404;
