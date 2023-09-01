import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactList from "./components/ContactList";
import ChartsAndGraphs from "./components/ChartsAndGraphs";
import ContactForm from "./components/ContactForm";
import EditForm from "./components/EditForm";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <ContactList />,
      },
      {
        path: "editContact",
        element: <EditForm />,
      },
      {
        path: "createContact",
        element: <ContactForm />,
      },
      {
        path: "chartsAndGraphs",
        element: <ChartsAndGraphs />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

/**App
 *  Head
 *  Body
 *   Sidebar
 *   MainContainer
 *
 *
 *
 * **/
