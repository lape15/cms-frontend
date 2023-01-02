import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SideMenu } from "../components/Sidebar/menu";
import { DashWrapper, View } from "../helper/styles";
import { getCredentials } from "../helper/helper";
import { Posts } from "../components/posts/posts";

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
      <Posts />
    </DashWrapper>
  );
};
export default Dashboard;
