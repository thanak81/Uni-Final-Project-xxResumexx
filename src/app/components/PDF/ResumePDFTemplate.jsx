"use client"
import { PDFDownloadLink } from '@react-pdf/renderer'
import React from 'react'

function ResumePDFTemplate({childrens,title}) {

    // const MyDoc = () => (
    //     <Document>
    //       <Page size={"A4"} style={styles.page}>
    //         <View style={styles.section}>
    //           <Text>
    //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quae,
    //             aut eum labore animi alias neque, fugit sapiente sit fuga eveniet
    //             reiciendis deserunt iusto provident ducimus excepturi praesentium,
    //             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nobis
    //             a architecto similique quasi qui dolorem quaerat, excepturi
    //             recusandae minus, magni omnis quod dolorum non suscipit consequuntur
    //             molestias dolores enim. expedita pariatur.
    //           </Text>
    //           <Text>
    //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quae,
    //             aut eum labore animi alias neque, fugit sapiente sit fuga eveniet
    //             reiciendis deserunt iusto provident ducimus excepturi praesentium,
    //             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nobis
    //             a architecto similique quasi qui dolorem quaerat, excepturi
    //             recusandae minus, magni omnis quod dolorum non suscipit consequuntur
    //             molestias dolores enim. expedita pariatur.
    //           </Text>
    //           <Text>
    //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quae,
    //             aut eum labore animi alias neque, fugit sapiente sit fuga eveniet
    //             reiciendis deserunt iusto provident ducimus excepturi praesentium,
    //             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nobis
    //             a architecto similique quasi qui dolorem quaerat, excepturi
    //             recusandae minus, magni omnis quod dolorum non suscipit consequuntur
    //             molestias dolores enim. expedita pariatur.
    //           </Text>
    //           <Text>
    //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quae,
    //             aut eum labore animi alias neque, fugit sapiente sit fuga eveniet
    //             reiciendis deserunt iusto provident ducimus excepturi praesentium,
    //             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nobis
    //             a architecto similique quasi qui dolorem quaerat, excepturi
    //             recusandae minus, magni omnis quod dolorum non suscipit consequuntur
    //             molestias dolores enim. expedita pariatur.
    //           </Text>
    //         </View>
    //       </Page>
    //     </Document>
    //   );
    
  return (
    <PDFDownloadLink document={childrens} fileName={title}>
    {({ blob, url, loading, error }) =>
      loading ? "Loading document..." : "Download now!"
    }
  </PDFDownloadLink>
  )
}

export default ResumePDFTemplate