import { Box } from "@mui/material";
import Header from "./Home/components/Header/Header";
import Proposal from "./Home/components/CardSlider/Proposal";
import FeaturedMembers from "./Home/components/FeaturedMember/FeaturedMember";
// import Packages from "./Home/components/Packages/Packages";
import dynamic from "next/dynamic";

const PackagesNoSSR = dynamic(
  () => import("./Home/components/Packages/Packages"),
  { ssr: false }
);
export default function Home() {
  return (
    <Box>
      <Header />
      <Proposal />
      <FeaturedMembers />
      <PackagesNoSSR />
    </Box>
  );
}
