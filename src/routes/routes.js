// Pages
import Homepage from "../pages/Homepage"
import NotFound from "../pages/NotFound"

// Routes
const routes = [
    {
        path: "/",
        element: Homepage,
    },
    {
        path: "*",
        element: NotFound,
    },
]

export default routes
