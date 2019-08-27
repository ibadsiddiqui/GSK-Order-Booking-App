const uuidv4 = require('uuid/v4');

const ProductLists = [
    {
        id: uuidv4(),
        name: "ABLE A2A SPACER",
        tradePrice: 400.00,
        mrp: 470.59
    },
    {
        id: uuidv4(),
        name: "ACTIDIL ELIXIR 60 ML",
        tradePrice: 18.09,
        mrp: 21.28
    },
    {
        id: uuidv4(),
        name: "AMIKIN INJECTION 100MG / 2ML",
        tradePrice: 143.15,
        mrp: 168.41
    },
    {
        id: uuidv4(),
        name: " AMIKIN INJECTION 500MG / 2ML ",
        tradePrice: 453.82,
        mrp: 533.91
    },
    {
        id: uuidv4(),
        name: " AMOXIL CAP 250mg 100's BLISTER",
        tradePrice: 365.9845,
        mrp: 430.57
    },
    {
        id: uuidv4(),
        name: "AMOXIL CAP 500mg 100's BLISTER",
        tradePrice: 883.32,
        mrp: 1039.20
    },
    {
        id: uuidv4(),
        name: " AMOXIL CAP 500mg 20's BLISTER ",
        tradePrice: 153.62,
        mrp: 180.73
    },
    {
        id: uuidv4(),
        name: "AMOXIL DROP 125mg 20ml",
        tradePrice: 53.06,
        mrp: 62.42
    },
    {
        id: uuidv4(),
        name: "AMOXIL SYRUP 125mg 90ml",
        tradePrice: 66.03,
        mrp: 77.68
    },
    {
        id: uuidv4(),
        name: "AMOXIL SYRUP 250mg 90ml",
        tradePrice: 86.07,
        mrp: 101.26
    },
    {
        id: uuidv4(),
        name: "AMOXIL VIALS 500MG x10s",
        tradePrice: 53.56,
        mrp: 63.01,
    },
    {
        id: uuidv4(),
        name: "AMPHYLL INJECTION 5'S",
        tradePrice: 72.01,
        mrp: 84.72
    },
    {
        id: uuidv4(),
        name: "AMPICLOX CAP 250mg 100's BLIST",
        tradePrice: "379.10",
        mrp: 446.00
    },
    {
        id: uuidv4(),
        name: "AMPICLOX CAP 500mg 100's BLIST",
        tradePrice: 646.00,
        mrp: 760.00
    },
    {
        id: uuidv4(),
        name: "AMPICLOX DROP 90mg 20ML",
        tradePrice: 64.23,
        mrp: 75.57
    },
    {
        id: uuidv4(),
        name: "AMPICLOX SYRUP 250mg 90ml",
        tradePrice: 108.80,
        mrp: 128.00
    },
    {
        id: uuidv4(),
        name: "AMPICLOX VIALS 250MG x10s",
        tradePrice: 214.37,
        mrp: 252.20
    },
    {
        id: uuidv4(),
        name: "AMPICLOX VIALS 500MG x10s",
        tradePrice: 437.50,
        mrp: 514.70,
    },
    {
        id: uuidv4(),
        name: "AMPICLOX VIALS 75MG",
        tradePrice: 10.66,
        mrp: 12.54
    },
    {
        id: uuidv4(),
        name: "ANGISED TABLET 60'S ",
        tradePrice: 45.43,
        mrp: 53.45
    },
    {
        id: uuidv4(),
        name: "ATARAX TABLETS 10MG 50'S",
        tradePrice: 29.44,
        mrp: 34.64
    },
    {
        id: uuidv4(),
        name: "ATARAX TABLETS 25MG 50'S",
        tradePrice: 67.71,
        mrp: 79.66
    },
    {
        id: uuidv4(),
        name: "AUGMENTIN BD SUSP.457MG / 5ML 35",
        tradePrice: 98.60,
        mrp: 116.00
    },
    {
        id: uuidv4(),
        name: "AUGMENTIN BD SUSP.457MG / 5ML 70",
        tradePrice: 186.15,
        mrp: 219.00
    },
    {
        id: uuidv4(),
        name: "AUGMENTIN INF DROP 62.5MG 20ML",
        tradePrice: 117.55,
        mrp: 138.29
    },
    {
        id: uuidv4(),
        name: "AUGMENTIN SUSP 156 - 25Mg 90ml",
        tradePrice: 118.15,
        mrp: 139.00
    },
    {
        id: uuidv4(),
        name: "AUGMENTIN SUSP 312.5MG 90ML",
        tradePrice: 182.75,
        mrp: 215.00
    },
    {
        id: uuidv4(),
        name: "AUGMENTIN TAB 1000MGALU ALU",
        tradePrice: 183.62,
        mrp: 216.02
    },
    {
        id: uuidv4(),
        name: "AUGMENTIN TAB 625MGALU ALU",
        tradePrice: 139.40,
        mrp: 164.00
    },
    {
        id: uuidv4(),
        name: "AUGMENTIN TABLET 375mg 6's",
        tradePrice: 121.55,
        mrp: 143.00
    },
    {
        id: uuidv4(),
        name: "AUGMENTIN VIALS 1.2GM x10'S",
        tradePrice: 153.17,
        mrp: 180.20
    },
    {
        id: uuidv4(),
        name: "AUGMENTIN VIALS 600MG x10s",
        tradePrice: 85.00,
        mrp: 100.00
    },
    {
        id: uuidv4(),
        name: "AVAMYS NASAL SPRAY 0.05 %",
        tradePrice: 579.97,
        mrp: 682.32
    },
    {
        id: uuidv4(),
        name: "AVODART CAPSULES 0.5MG 30'S 1",
        tradePrice: 700.00,
        mrp: 2000.00
    },
    {
        id: uuidv4(),
        name: "Bactroban Ointment",
        tradePrice: 136.42,
        mrp: 160.49
    },
    {
        id: uuidv4(),
        name: "BETNELAN TABLET 0.5MG 500s",
        tradePrice: 421.35,
        mrp: 495.70
    },
    {
        id: uuidv4(),
        name: "BETNESOL DROPS 7.5ML",
        tradePrice: 29.41,
        mrp: 34.60
    },
    {
        id: uuidv4(),
        name: "BETNESOL EYE OINTMENT 5GM",
        tradePrice: 17.91,
        mrp: 21.07
    },
    {
        id: uuidv4(),
        name: "BETNESOL INJECTION 1ML 5S",
        tradePrice: 58.46,
        mrp: 68.78
    },
    {
        id: uuidv4(),
        name: "BETNESOL TABLET 20'S",
        tradePrice: 23.38,
        mrp: 27.51
    },
    {
        id: uuidv4(),
        name: "BETNESOL-N DROPS 7.5ML",
        tradePrice: 34.75,
        mrp: 40.88
    },
    {
        id: uuidv4(),
        name: "BETNESOL-N EYE OINTMENT 5GM",
        tradePrice: 16.84,
        mrp: 19.81
    },
    {
        id: uuidv4(),
        name: "BETNOVATE CREAM 20GM",
        tradePrice: 51.85,
        mrp: 61.00
    },
    {
        id: uuidv4(),
        name: "BETNOVATE LOTION 60ML",
        tradePrice: 131.72,
        mrp: 470.59
    },
    {
        id: uuidv4(),
        name: "BETNOVATE OINTMENT 10GM",
        tradePrice: 25.42,
        mrp: 29.90
    },
    {
        id: uuidv4(),
        name: "BETNOVATE OINTMENT 20GM ",
        tradePrice: 43.38,
        mrp: 51.04
    },
    {
        id: uuidv4(),
        name: "THERAGRAN - H TABLETS 30'S",
        tradePrice: 87.30,
        mrp: 102.71
    },
    {
        id: uuidv4(),
        name: "THERAGRAN-M TABLETS 30'S",
        tradePrice: 94.04,
        mrp: 110.64
    },
    {
        id: uuidv4(),
        name: "THYROXINE TABLETS 50MCG 100'S",
        tradePrice: 108.83,
        mrp: 128.04
    },
    {
        id: uuidv4(),
        name: "TRAXON INJECTION IM 1GM 1'S",
        tradePrice: 280.34,
        mrp: 329.81
    },
    {
        id: uuidv4(),
        name: "TRAXON INJECTION IM 250MG 1",
        tradePrice: 88.20,
        mrp: 103.77
    },
    {
        id: uuidv4(),
        name: "TRAXON INJECTION IM 500MG 1",
        tradePrice: 148.46,
        mrp: 174.66
    },
    {
        id: uuidv4(),
        name: "TRAXON INJECTION IV 1GM 1'S",
        tradePrice: 267.44,
        mrp: 314.64
    },
    {
        id: uuidv4(),
        name: " TRAXON INJECTION IV 250MG 1'S",
        tradePrice: 98.06,
        mrp: 115.37
    },
    {
        id: uuidv4(),
        name: "TRAXON INJECTION IV 500MG 1'S",
        tradePrice: 151.84,
        mrp: 178.64
    },
    {
        id: uuidv4(),
        name: "VALTREX TABLET 500MG 42'S",
        tradePrice: 4104.50,
        mrp: 4828.82
    },
    {
        id: uuidv4(),
        name: "VELOSEF CAPS. 250MG 12's",
        tradePrice: 127.69,
        mrp: 150.22
    },
    {
        id: uuidv4(),
        name: "VELOSEF CAPS. 500MG 12's",
        tradePrice: 250.83,
        mrp: 295.09
    },
    {
        id: uuidv4(),
        name: "VELOSEF INJ. 1G 1'S(vial)",
        tradePrice: 160.65,
        mrp: 189.00
    },
    {
        id: uuidv4(),
        name: "VELOSEF INJ. 250MG 1'S(vial)",
        tradePrice: 74.80,
        mrp: 88.00
    },
    {
        id: uuidv4(),
        name: "VELOSEF INJ. 500MG 1'S(vial)",
        tradePrice: 92.65,
        mrp: 109.00
    },
    {
        id: uuidv4(),
        name: "ABLE A2A SPACER",
        tradePrice: 400.00,
        mrp: 470.59
    },
    {
        id: uuidv4(),
        name: "VELOSEF SUSP. 125MG / 5ML 90ML",
        tradePrice: 127.44,
        mrp: 149.93
    },
    {
        id: uuidv4(),
        name: "VELOSEF SUSP. 250MG / 5ML 90ML",
        tradePrice: 216.94,
        mrp: 255.22
    },
    {
        id: uuidv4(),
        name: "VENTOLIN EVOHALER 100 MCG",
        tradePrice: 180.85,
        mrp: 212.76
    },
    {
        id: uuidv4(),
        name: "ZEFFIX TABLET 100MG 14'S",
        tradePrice: 1406.02,
        mrp: 1654.14
    },
    {
        id: uuidv4(),
        name: "ZENTEL SUSPENSION 4% 10ml",
        tradePrice: 22.85,
        mrp: 26.88
    },
    {
        id: uuidv4(),
        name: "ZENTEL TABLET 2's",
        tradePrice: 21.03,
        mrp: 24.74
    },
    {
        id: uuidv4(),
        name: "ZINACEF INJECTION 1.5G 1'S",
        tradePrice: 277.65,
        mrp: 326.65
    },

    {
        id: uuidv4(),
        name: "ZINACEF INJECTION 250MG 5'S ",
        tradePrice: 202.96,
        mrp: 238.78
    },
    {
        id: uuidv4(),
        name: "ZINACEF INJECTION 750MG 1'S ",
        tradePrice: 128.26,
        mrp: 150.89
    },
    {
        id: uuidv4(),
        name: "ZINACEF TABLETS 125MG 14'S ",
        tradePrice: 289.07,
        mrp: 340.08
    },
    {
        id: uuidv4(),
        name: "ZINACEF TABLETS 250MG 14'S ",
        tradePrice: 666.77,
        mrp: 784.44
    },
    {
        id: uuidv4(),
        name: "ZOLANIX CAPSULE 150mg 4's",
        tradePrice: 256.15,
        mrp: 301.35
    },
    {
        id: uuidv4(),
        name: "ZOVIRAX  CREAM 2G",
        tradePrice: 232.19,
        mrp: 273.17
    },
    {
        id: uuidv4(),
        name: "ZOVIRAX CREAM 10G ",
        tradePrice: 806.02,
        mrp: 948.26
    },
    {
        id: uuidv4(),
        name: "ZOVIRAX I.V INFUSION 5'S",
        tradePrice: 2020.48,
        mrp: 2377.03
    },
    {
        id: uuidv4(),
        name: "ZOVIRAX TABLETS 25's",
        tradePrice: 1487.08,
        mrp: 1749.50
    },
    {
        id: uuidv4(),
        name: "ZYLORIC TABLET 100MG BL 50'S",
        tradePrice: 71.47,
        mrp: 84.08
    },

    {
        id: uuidv4(),
        name: "ZYLORIC TABLET 300MG BL 30'S",
        tradePrice: 124.03,
        mrp: 145.92
    },
    {
        id: uuidv4(),
        name: "ZYRTEC ORAL SOLUTION 60ML",
        tradePrice: 46.87,
        mrp: 55.14
    },
    {
        id: uuidv4(),
        name: "ZYRTEC TABLETS 30'S",
        tradePrice: 125.48,
        mrp: 147.62
    },
]

export default ProductLists;