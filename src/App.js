import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import PageContent from "./components/PageContent";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import SideNavBar from "./components/SideNavBar";
import { useState } from "react";
import { Row } from "reactstrap";
const App = () => {
  const { innerWidth: width } = window;
  const [sidebar, setSidebar] = useState(width > 500);
  const [themeValue, toggleTheme] = useState("light");
  return (
    <ThemeProvider theme={themeValue === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <NavigationBar isOpen={sidebar} setSidebar={setSidebar} />
          <Row className="p-0 m-0">
            <SideNavBar
              isOpen={sidebar}
              setSidebar={setSidebar}
              themeValue={themeValue}
              toggleTheme={toggleTheme}
            />
            <PageContent isOpen={sidebar} />
          </Row>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
