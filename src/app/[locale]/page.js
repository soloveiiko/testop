import {
  Banner,
  Catalog,
  History,
  Partners,
  Partnership,
  Promotion,
  Showreel,
  Statistic,
  Subbanner,
  TopManagement,
} from "@/components";
import api from "@/services";

export const metadata = {
  title: process.env.NEXT_APP_NAME,
  description: "Generated by create next app",
};

const getHomePage = async () => {
  try {
    const data = await api().page.getPage("home");
    return data;
  } catch (e) {
    console.log(e);
  }
};

async function Home() {
  const { seo, blocks, data } = await getHomePage();
  console.log(blocks);
  return (
    <>
      <Banner info={blocks.find((el) => el.type === "home_top")?.content} />
      <Subbanner
        info={blocks.find((el) => el.type === "about_preview")?.content}
      />
      <Catalog info={blocks.find((el) => el.type === "catalog")?.content} />
      <Promotion
        info={blocks.find((el) => el.type === "slider_advantages")?.content}
      />
      <div className="container_black">
        <Statistic
          info={blocks.find((el) => el.type === "statistic")?.content}
        />
        <Showreel />
      </div>
      <TopManagement
        info={blocks.find((el) => el.type === "employees")?.content}
      />
      <History
        info={blocks.find((el) => el.type === "slider_history")?.content}
      />
      <Partners info={blocks.find((el) => el.type === "partners")?.content} />
      <Partnership />
    </>
  );
}

export default Home;
