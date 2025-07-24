import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
