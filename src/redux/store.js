import { createStore } from "redux";

import { rootReducers } from "./reducers";

// Store : attaché à React grâce à la librairie React-redux - accessible depuis tous les composants de notre application

export const store = createStore(rootReducers)