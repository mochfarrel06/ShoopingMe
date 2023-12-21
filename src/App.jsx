import DetailCoba from "./components/Layouts/DetailCoba";
import DetailPage from "./components/Layouts/DetailPage";
import HomePage from "./components/Layouts/HomePage";
import Man from "./components/Layouts/Man";
import NavbarLogin from "./components/Layouts/NavbarLogin";
import ProfileCoba from "./components/Layouts/ProfileCoba";

function App() {
  return (
    <>
      <NavbarLogin />
      <main>
        <ProfileCoba />
      </main>
    </>
  );
}

export default App;
