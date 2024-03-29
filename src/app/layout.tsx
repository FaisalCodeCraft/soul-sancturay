import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Box } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soul Sanctuary",
  description: "Find Your Perfect Soul Mate!,Find relation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box position={"relative"}>
          <Navbar />
          <Box mt={3}>{children}</Box>
          <Footer />
        </Box>
        <Box
          height={{ md: "100%", xs: "120vh" }}
          position={"absolute"}
          width={"100%"}
          zIndex={-1}
          top={0}
        >
          <Image
            fill
            style={{ filter: "brightness(45%)" }}
            src="https://images.pexels.com/photos/169188/pexels-photo-169188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </Box>
      </body>
    </html>
  );
}
