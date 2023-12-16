/** @jsx jsxTransform */
import { jsxTransform, m_if } from "../../mist/index";
// Components
import Nav from "../components/nav";

const Home = (state) => {
	return (
		<div>
			<div class="wrapper">
				<img src="./src/assets/images/mist-logo.png" class="main-logo"/>
				<h1 class="welcome">Welcome to your Mist.js App.</h1>
				{Nav(state)}
				{m_if(state.bamboozeled > 0, (<div class="welcome">You have been bamboozeled counter: {state.bamboozeled}</div>))}
			</div>
		</div>
	)
}

export default Home



// const increaseCount = (state) => state.count++;

// const Body = (state) => {
//     return (
//         <div>
//             {Nav(state)}
//             <h1>Home Page</h1>
//             <div>
//                 {state.count}
//                 <button onClick={() => increaseCount(state)}> Press motherfucker! </button>
//             </div>
//             <div>
//                 <input id="nameInput" type="text" onKeyDown={(e) => changeName(e, state)} />
//             </div>

// 			<ul>
// 				Completed Todos	
// 				{m_for(state.todos.filter(todo => todo.completed), Todo)}
// 			</ul>

// 			<ul>
// 				All Todos
// 				{m_for(state.todos, Todo)}
// 			</ul>

// 			{ m_if(state.count % 2 == 0, (<div>Hello using m_if</div>))}
// 			{ m_if_else(state.count % 2 == 0, (<div>Hello using m_if_else</div>), (<div>Goodbye</div>))}
			
// 			<div style="display:flex;flex-direction:column">
// 				<div>
// 					<button onClick={() => {state.position = { x: state.position.x++, ...state.position} } }>X: {state.position.x}</button>
// 				</div>
// 				<div>
// 					<button onClick={() => {state.position = { y: state.position.y++, ...state.position} } }>Y: {state.position.y}</button>
// 				</div>
// 			</div>
//         </div>
//     )
// }

// const Todo = (todo) => {
// 	return (
// 		<li>
// 			<input type="radio"></input>
// 			{todo.value}
// 		</li>
// 	)
// }

// const changeName = (e, state) => {
//     if (e.key !== "Enter") return;
//     state.name = document.querySelector("#nameInput").value
// }

// export default Body;
