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

export default function Home() {


  return (
    <>
      <main className="flex h-full flex-col  w-full p-24">
        <Landing />
      </main>
    </>
  );
}
