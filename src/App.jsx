import { Suspense, lazy } from "react";

const AppRouter = lazy(() => import("./router/AppRouter"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen text-xl">
          Loading...
        </div>
      }
    >
      <AppRouter />
    </Suspense>
  );
};

export default App;