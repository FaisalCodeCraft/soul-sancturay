import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Box } from "@mui/material";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soul Sanctuary",
  description: "Generated by create next app",
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
        height={"100vh"}
        position={"absolute"}
        width={"100%"}
        zIndex={-1}
        top={0}
      >
        <img
          width={"100%"}
          height={"100%"}
          style={{ filter: "brightness(45%)" }}
          src="https://images.pexels.com/photos/169188/pexels-photo-169188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </Box>
      </body>
    </html>
  );
}
