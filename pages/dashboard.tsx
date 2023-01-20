import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SideMenu } from "../components/Sidebar/menu";
import { DashView, DashWrapper, View } from "../helper/styles";
import { getCredentials } from "../helper/helper";
import { Posts } from "../components/posts/posts";
import { Nav } from "../components/nav/nav";
import { CreatePost } from "../components/create-post/create";

const Dashboard = () => {
  const [view, setView] = useState("dashboard");

  const router = useRouter();
  const [user, setUser] = useState(null);
  const changeView = (active: string) => {
    setView(active);
  };

  useEffect(() => {
    const credentials = getCredentials();
    if (!credentials!.token) {
      router.push("/login");
    }
  }, [user]);

  useEffect(() => {
    setUser(getCredentials()!.user);
  }, []);

  return (
    <DashWrapper>
      <SideMenu active={view} changeView={changeView} />
      <DashView>
        <Nav changeView={changeView} active={view} />
        {(view === "dashboard" || view === "posts") && <Posts active={view} />}
        {view === "create" && <CreatePost changeView={changeView} />}
      </DashView>
    </DashWrapper>
  );
};
export default Dashboard;
