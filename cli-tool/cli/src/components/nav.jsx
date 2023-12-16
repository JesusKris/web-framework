/** @jsx jsxTransform */
import { jsxTransform } from "../../mist/index";
import { router } from "../../mist/index";

const addBamboozeled = (state) => state.bamboozeled++

const Nav = (state) => {
    return (
        <div>
            <button class="routerp" onClick={() => {
                router.push({ type: "name", value: "404" })
                addBamboozeled(state)
            }}>Bye!</button>
        </div>
    )
}

export default Nav;

