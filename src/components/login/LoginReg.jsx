import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
// import login3 from '../../../images/login3.jpg'
import { useState } from "react";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import UserLogin from "./UserLogin";
import Registration from "./Registration";
import { hover } from "@testing-library/user-event/dist/hover";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container sx={{ height: "85vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url("https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "800px",
            backgroundPosition: "center",
            marginTop: "20px",
            display: { xs: "none", sm: "block" },
          }}
        ></Grid>
        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: "90%", height: "80%", marginTop: "100px" }}>
            <Box>
              <Box sx={{ borderBottom: 5, borderColor: "green" }}>
                <Tabs
                  value={value}
                  textColor="primary"
                  indicatorColor="primary"
                  onChange={handleChange}
                >
                  <Tab
                    label="Login"
                    sx={{
                      fontWeight: "bold",
                      marginLeft: "90px",
                      justifyContent: "center",
                      color: "green",
                    }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{
                      fontWeight: "bold",
                      marginLeft: "90px",
                      color: "green",
                    }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration />
              </TabPanel>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;
