"use client";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { createTw } from "react-pdf-tailwind";
// import styles from './MainTemplate.module.css'

function PDFTemplate1() {
  const styles = StyleSheet.create({
    page: {
      color: "black",
      backgroundColor: "white",
    },
    basic: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      lineHeight: "30pt"
    },
    name: {
      fontWeight: "bold",
      fontSize: "20pt",
      // padding: "10pt"
    },
    header: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    basicInfo: {
      display: "flex",

    },
    divide: {
      margin: "0pt 5pt"
    }
  });
  // const { control } = useFormContext();
  // const resumeData = useWatch({
  //   control,
  // });
  const tw = createTw({
    theme: {
      fontFamily: {
        sans: ["Comic Sans"],
      },
    },
  });
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <View style={styles.basic}>
          {/* <Text style={styles.name}>Thanak Mech</Text>
          <View style={styles.basicInfo}>
            <Text>081790154</Text>
            <Text style={styles.divide}>|</Text>
            <Text>thanakmech@gmail.com</Text>
          </View> */}
          <Text>F22 Borey Monkusdsl Phnojkkkkkm Penh I</Text>
          <Text>I am a student</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PDFTemplate1;
