"use client";
import ReactPDF, {
  Document,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import Landing from "./Page/Landing";
import dynamic from "next/dynamic";
import ResumePDFTemplate from "./components/PDF/ResumePDFTemplate";
import PDFTemplate1 from "./main/resume/components/templatess/CVTemplate/AllTemplates/PDFTemplate1/PDFTemplate1";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <div className="fixed w-full top-0 z-[999]">
        <NavBar />
      </div>
      <main className="flex h-full flex-col  w-full p-24">
        <Landing />
      </main>
    </>
  );
}
