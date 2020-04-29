// import  "react-native-get-random-values"
// const v4 = require('uuid/v4');
// import { v4 } from 'uuid'
let ProductLists = [
    {
        id: "ABLE A2A SPACER",
        name: "ABLE A2A SPACER",
        tradePrice: 400.00,
        mrp: 470.59,
        qty: 0
    },
    {
        id: "ACTIDIL ELIXIR 60 ",
        name: "ACTIDIL ELIXIR 60 ML",
        tradePrice: 18.09,
        mrp: 21.28,
        qty: 0
    },
    {
        id: "AMIKIN INJECTION 100MG ",
        name: "AMIKIN INJECTION 100MG / 2ML",
        tradePrice: 143.15,
        mrp: 168.41,
        qty: 0
    },
    {
        id: " AMIKIN INJECTION ",
        name: " AMIKIN INJECTION 500MG / 2ML ",
        tradePrice: 453.82,
        mrp: 533.91,
        qty: 0
    },
    {
        id: " AMOXIL CAP ",
        name: " AMOXIL CAP 250mg 100's BLISTER",
        tradePrice: 365.9845,
        mrp: 430.57,
        qty: 0
    },
    {
        id: "AMOXIL CAP 500mg ",
        name: "AMOXIL CAP 500mg 100's BLISTER",
        tradePrice: 883.32,
        mrp: 1039.20,
        qty: 0
    },
    {
        id: " AMOXIL CAP ",
        name: " AMOXIL CAP 500mg 20's BLISTER ",
        tradePrice: 153.62,
        mrp: 180.73,
        qty: 0
    },
    {
        id: "AMOXIL DROP 125mg ",
        name: "AMOXIL DROP 125mg 20ml",
        tradePrice: 53.06,
        mrp: 62.42,
        qty: 0
    },
    {
        id: "AMOXIL SYRUP 125mg ",
        name: "AMOXIL SYRUP 125mg 90ml",
        tradePrice: 66.03,
        mrp: 77.68,
        qty: 0
    },
    {
        id: "AMOXIL SYRUP 250mg ",
        name: "AMOXIL SYRUP 250mg 90ml",
        tradePrice: 86.07,
        mrp: 101.26,
        qty: 0
    },
    {
        id: "AMOXIL VIALS 500MG ",
        name: "AMOXIL VIALS 500MG x10s",
        tradePrice: 53.56,
        mrp: 63.01,
        qty: 0
    },
    {
        id: "AMPHYLL INJECTION 5'",
        name: "AMPHYLL INJECTION 5'S",
        tradePrice: 72.01,
        mrp: 84.72,
        qty: 0
    },
    {
        id: "AMPICLOX CAP 250mg ",
        name: "AMPICLOX CAP 250mg 100's BLIST",
        tradePrice: "379.10",
        mrp: 446.00,
        qty: 0
    },
    {
        id: "AMPICLOX CAP 500mg ",
        name: "AMPICLOX CAP 500mg 100's BLIST",
        tradePrice: 646.00,
        mrp: 760.00,
        qty: 0
    },
    {
        id: "AMPICLOX DROP 90mg ",
        name: "AMPICLOX DROP 90mg 20ML",
        tradePrice: 64.23,
        mrp: 75.57,
        qty: 0
    },
    {
        id: "AMPICLOX SYRUP 250mg ",
        name: "AMPICLOX SYRUP 250mg 90ml",
        tradePrice: 108.80,
        mrp: 128.00,
        qty: 0
    },
    {
        id: "AMPICLOX VIALS 250MG ",
        name: "AMPICLOX VIALS 250MG x10s",
        tradePrice: 214.37,
        mrp: 252.20,
        qty: 0
    },
    {
        id: "AMPICLOX VIALS 500MG ",
        name: "AMPICLOX VIALS 500MG x10s",
        tradePrice: 437.50,
        mrp: 514.70,
        qty: 0
    },
    {
        id: "AMPICLOX VIALS 75MG",
        name: "AMPICLOX VIALS 75MG",
        tradePrice: 10.66,
        mrp: 12.54,
        qty: 0
    },
    {
        id: "ANGISED TABLET 60",
        name: "ANGISED TABLET 60'S ",
        tradePrice: 45.43,
        mrp: 53.45,
        qty: 0
    },
    {
        id: "ATARAX TABLETS 10MG ",
        name: "ATARAX TABLETS 10MG 50'S",
        tradePrice: 29.44,
        mrp: 34.64,
        qty: 0
    },
    {
        id: "ATARAX TABLETS 25MG ",
        name: "ATARAX TABLETS 25MG 50'S",
        tradePrice: 67.71,
        mrp: 79.66,
        qty: 0
    },
    {
        id: "AUGMENTIN BD SUSP.",
        name: "AUGMENTIN BD SUSP.457MG / 5ML 35",
        tradePrice: 98.60,
        mrp: 116.00,
        qty: 0
    },
    {
        id: "AUGMENTIN BD SUSP.",
        name: "AUGMENTIN BD SUSP.457MG / 5ML 70",
        tradePrice: 186.15,
        mrp: 219.00,
        qty: 0
    },
    {
        id: "AUGMENTIN INF DROP ",
        name: "AUGMENTIN INF DROP 62.5MG 20ML",
        tradePrice: 117.55,
        mrp: 138.29,
        qty: 0
    },
    {
        id: "AUGMENTIN SUSP 156 ",
        name: "AUGMENTIN SUSP 156 - 25Mg 90ml",
        tradePrice: 118.15,
        mrp: 139.00,
        qty: 0
    },
    {
        id: "AUGMENTIN SUSP 312.",
        name: "AUGMENTIN SUSP 312.5MG 90ML",
        tradePrice: 182.75,
        mrp: 215.00,
        qty: 0
    },
    {
        id: "AUGMENTIN TAB 1000MGALU ",
        name: "AUGMENTIN TAB 1000MGALU ALU",
        tradePrice: 183.62,
        mrp: 216.02,
        qty: 0
    },
    {
        id: "AUGMENTIN TAB 625MGALU ",
        name: "AUGMENTIN TAB 625MGALU ALU",
        tradePrice: 139.40,
        mrp: 164.00,
        qty: 0
    },
    {
        id: "AUGMENTIN TABLET 375mg ",
        name: "AUGMENTIN TABLET 375mg 6's",
        tradePrice: 121.55,
        mrp: 143.00,
        qty: 0
    },
    {
        id: "AUGMENTIN VIALS 1.",
        name: "AUGMENTIN VIALS 1.2GM x10'S",
        tradePrice: 153.17,
        mrp: 180.20,
        qty: 0
    },
    {
        id: "AUGMENTIN VIALS 600MG ",
        name: "AUGMENTIN VIALS 600MG x10s",
        tradePrice: 85.00,
        mrp: 100.00,
        qty: 0
    },
    {
        id: "AVAMYS NASAL SPRAY ",
        name: "AVAMYS NASAL SPRAY 0.05 %",
        tradePrice: 579.97,
        mrp: 682.32,
        qty: 0
    },
    {
        id: "AVODART CAPSULES 0.",
        name: "AVODART CAPSULES 0.5MG 30'S 1",
        tradePrice: 700.00,
        mrp: 2000.00,
        qty: 0
    },
    {
        id: "Bactroban Ointment",
        name: "Bactroban Ointment",
        tradePrice: 136.42,
        mrp: 160.49,
        qty: 0
    },
    {
        id: "BETNELAN TABLET 0.",
        name: "BETNELAN TABLET 0.5MG 500s",
        tradePrice: 421.35,
        mrp: 495.70,
        qty: 0
    },
    {
        id: "BETNESOL DROPS 7.",
        name: "BETNESOL DROPS 7.5ML",
        tradePrice: 29.41,
        mrp: 34.60,
        qty: 0
    },
    {
        id: "BETNESOL EYE OINTMENT ",
        name: "BETNESOL EYE OINTMENT 5GM",
        tradePrice: 17.91,
        mrp: 21.07,
        qty: 0
    },
    {
        id: "BETNESOL INJECTION 1ML ",
        name: "BETNESOL INJECTION 1ML 5S",
        tradePrice: 58.46,
        mrp: 68.78,
        qty: 0
    },
    {
        id: "BETNESOL TABLET 20'",
        name: "BETNESOL TABLET 20'S",
        tradePrice: 23.38,
        mrp: 27.51,
        qty: 0
    },
    {
        id: "BETNESOL-N DROPS ",
        name: "BETNESOL-N DROPS 7.5ML",
        tradePrice: 34.75,
        mrp: 40.88,
        qty: 0
    },
    {
        id: "BETNESOL-N EYE ",
        name: "BETNESOL-N EYE OINTMENT 5GM",
        tradePrice: 16.84,
        mrp: 19.81,
        qty: 0
    },
    {
        id: "BETNOVATE CREAM 20GM",
        name: "BETNOVATE CREAM 20GM",
        tradePrice: 51.85,
        mrp: 61.00,
        qty: 0
    },
    {
        id: "BETNOVATE LOTION 60ML",
        name: "BETNOVATE LOTION 60ML",
        tradePrice: 131.72,
        mrp: 470.59,
        qty: 0
    },
    {
        id: "BETNOVATE OINTMENT 10GM",
        name: "BETNOVATE OINTMENT 10GM",
        tradePrice: 25.42,
        mrp: 29.90,
        qty: 0
    },
    {
        id: "BETNOVATE OINTMENT 20GM ",
        name: "BETNOVATE OINTMENT 20GM ",
        tradePrice: 43.38,
        mrp: 51.04,
        qty: 0
    },
    {
        id: "THERAGRAN - H ",
        name: "THERAGRAN - H TABLETS 30'S",
        tradePrice: 87.30,
        mrp: 102.71,
        qty: 0
    },
    {
        id: "THERAGRAN-M TABLETS ",
        name: "THERAGRAN-M TABLETS 30'S",
        tradePrice: 94.04,
        mrp: 110.64,
        qty: 0
    },
    {
        id: "THYROXINE TABLETS 50MCG ",
        name: "THYROXINE TABLETS 50MCG 100'S",
        tradePrice: 108.83,
        mrp: 128.04,
        qty: 0
    },
    {
        id: "TRAXON INJECTION IM ",
        name: "TRAXON INJECTION IM 1GM 1'S",
        tradePrice: 280.34,
        mrp: 329.81,
        qty: 0
    },
    {
        id: "TRAXON INJECTION IM ",
        name: "TRAXON INJECTION IM 250MG 1",
        tradePrice: 88.20,
        mrp: 103.77,
        qty: 0
    },
    {
        id: "TRAXON INJECTION IM ",
        name: "TRAXON INJECTION IM 500MG 1",
        tradePrice: 148.46,
        mrp: 174.66,
        qty: 0
    },
    {
        id: "TRAXON INJECTION IV ",
        name: "TRAXON INJECTION IV 1GM 1'S",
        tradePrice: 267.44,
        mrp: 314.64,
        qty: 0
    },
    {
        id: " TRAXON INJECTION ",
        name: " TRAXON INJECTION IV 250MG 1'S",
        tradePrice: 98.06,
        mrp: 115.37,
        qty: 0
    },
    {
        id: "TRAXON INJECTION IV ",
        name: "TRAXON INJECTION IV 500MG 1'S",
        tradePrice: 151.84,
        mrp: 178.64,
        qty: 0
    },
    {
        id: "VALTREX TABLET 500MG ",
        name: "VALTREX TABLET 500MG 42'S",
        tradePrice: 4104.50,
        mrp: 4828.82,
        qty: 0
    },
    {
        id: "VELOSEF CAPS. ",
        name: "VELOSEF CAPS. 250MG 12's",
        tradePrice: 127.69,
        mrp: 150.22,
        qty: 0
    },
    {
        id: "VELOSEF CAPS. ",
        name: "VELOSEF CAPS. 500MG 12's",
        tradePrice: 250.83,
        mrp: 295.09,
        qty: 0
    },
    {
        id: "VELOSEF INJ. ",
        name: "VELOSEF INJ. 1G 1'S(vial)",
        tradePrice: 160.65,
        mrp: 189.00,
        qty: 0
    },
    {
        id: "VELOSEF INJ. ",
        name: "VELOSEF INJ. 250MG 1'S(vial)",
        tradePrice: 74.80,
        mrp: 88.00,
        qty: 0
    },
    {
        id: "VELOSEF INJ. ",
        name: "VELOSEF INJ. 500MG 1'S(vial)",
        tradePrice: 92.65,
        mrp: 109.00,
        qty: 0
    },
    {
        id: "VELOSEF SUSP. ",
        name: "VELOSEF SUSP. 125MG / 5ML 90ML",
        tradePrice: 127.44,
        mrp: 149.93,
        qty: 0
    },
    {
        id: "VELOSEF SUSP. ",
        name: "VELOSEF SUSP. 250MG / 5ML 90ML",
        tradePrice: 216.94,
        mrp: 255.22,
        qty: 0
    },
    {
        id: "VENTOLIN EVOHALER 100 ",
        name: "VENTOLIN EVOHALER 100 MCG",
        tradePrice: 180.85,
        mrp: 212.76,
        qty: 0
    },
    {
        id: "ZEFFIX TABLET 100MG ",
        name: "ZEFFIX TABLET 100MG 14'S",
        tradePrice: 1406.02,
        mrp: 1654.14,
        qty: 0
    },
    {
        id: "ZENTEL SUSPENSION 4%",
        name: "ZENTEL SUSPENSION 4% 10ml",
        tradePrice: 22.85,
        mrp: 26.88,
        qty: 0
    },
    {
        id: "ZENTEL TABLET 2'",
        name: "ZENTEL TABLET 2's",
        tradePrice: 21.03,
        mrp: 24.74,
        qty: 0
    },
    {
        id: "ZINACEF INJECTION 1.",
        name: "ZINACEF INJECTION 1.5G 1'S",
        tradePrice: 277.65,
        mrp: 326.65,
        qty: 0
    },

    {
        id: "ZINACEF INJECTION 250MG ",
        name: "ZINACEF INJECTION 250MG 5'S ",
        tradePrice: 202.96,
        mrp: 238.78,
        qty: 0
    },
    {
        id: "ZINACEF INJECTION 750MG ",
        name: "ZINACEF INJECTION 750MG 1'S ",
        tradePrice: 128.26,
        mrp: 150.89,
        qty: 0
    },
    {
        id: "ZINACEF TABLETS 125MG ",
        name: "ZINACEF TABLETS 125MG 14'S ",
        tradePrice: 289.07,
        mrp: 340.08,
        qty: 0
    },
    {
        id: "ZINACEF TABLETS 250MG ",
        name: "ZINACEF TABLETS 250MG 14'S ",
        tradePrice: 666.77,
        mrp: 784.44,
        qty: 0
    },
    {
        id: "ZOLANIX CAPSULE 150mg ",
        name: "ZOLANIX CAPSULE 150mg 4's",
        tradePrice: 256.15,
        mrp: 301.35,
        qty: 0
    },
    {
        id: "ZOVIRAX  CREAM 2G",
        name: "ZOVIRAX  CREAM 2G",
        tradePrice: 232.19,
        mrp: 273.17,
        qty: 0
    },
    {
        id: "ZOVIRAX CREAM 10G ",
        name: "ZOVIRAX CREAM 10G ",
        tradePrice: 806.02,
        mrp: 948.26,
        qty: 0
    },
    {
        id: "ZOVIRAX I.V ",
        name: "ZOVIRAX I.V INFUSION 5'S",
        tradePrice: 2020.48,
        mrp: 2377.03,
        qty: 0
    },
    {
        id: "ZOVIRAX TABLETS 25",
        name: "ZOVIRAX TABLETS 25's",
        tradePrice: 1487.08,
        mrp: 1749.50,
        qty: 0
    },
    {
        id: "ZYLORIC TABLET 100MG ",
        name: "ZYLORIC TABLET 100MG BL 50'S",
        tradePrice: 71.47,
        mrp: 84.08,
        qty: 0
    },

    {
        id: "ZYLORIC TABLET 300MG ",
        name: "ZYLORIC TABLET 300MG BL 30'S",
        tradePrice: 124.03,
        mrp: 145.92,
        qty: 0
    },
    {
        id: "ZYRTEC ORAL SOLUTION ",
        name: "ZYRTEC ORAL SOLUTION 60ML",
        tradePrice: 46.87,
        mrp: 55.14,
        qty: 0
    },
    {
        id: "ZYRTEC TABLETS 30'",
        name: "ZYRTEC TABLETS 30'S",
        tradePrice: 125.48,
        mrp: 147.62,
        qty: 0
    },
]

// ProductLists = ProductLists.map((item, index) => {
//     return {
//         ...item,
//         id: v4(),
//     }
// })

export default ProductLists;