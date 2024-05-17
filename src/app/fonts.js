import { Hanken_Grotesk, Roboto } from "next/font/google";
import localFont from "next/font/local";
const HKFont = Hanken_Grotesk({ subsets: ["latin"] });
const RobotoFont = Roboto(
    { 
        subsets: ["latin"], 
        weight: "400" 
    }
);

export { HKFont, RobotoFont };
