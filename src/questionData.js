const questions = [
  {
    id: 1,
    question: `Identify the steps (A, B, and C) in the following schematic of food product development and engineering.

<img src="/images/1.jpg" alt="Food product development schematic" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. A: Engineering resources B: Develop concept C: National production",
      "b. A: Develop concept B: Engineering resources C: National production",
      "c. A: Engineering resources B: National production C: Develop concept",
      "d. A: National production B: Develop concept C: Engineering resources"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Which of the following microorganisms is inhibited only when P/P₀ is reduced below 0.60?",
    options: [
      "a. Staphylococcus aureus",
      "b. Vibrio parahaemolyticus",
      "c. Saccharomyces rouxii",
      "d. Clostridium perfringens"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Partial pressure of nitrogen in a mixture of 7 parts nitrogen and 3 parts oxygen by mass at 250 kPa total pressure is _____ kPa.",
    options: [
      "a. 180-182",
      "b. 190-192",
      "c. 200-202",
      "d. 210-212"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Sodium stearate, which has an HLB value of 5, can be used as an emulsifier for _____.",
    options: [
      "a. Mayonnaise",
      "b. Cream",
      "c. Butter",
      "d. Margarine"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: `Match the reaction in Column I with food quality alteration in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">I. Bruising of fruit</td>
    <td style="padding: 8px;">A. Off-flavour</td>
  </tr>
  <tr>
    <td style="padding: 8px;">II. Hydrolysis of polysaccharides</td>
    <td style="padding: 8px;">B. Inactivation of enzymes</td>
  </tr>
  <tr>
    <td style="padding: 8px;">III. Lipid oxidation</td>
    <td style="padding: 8px;">C. Protein-sugar reaction</td>
  </tr>
  <tr>
    <td style="padding: 8px;">IV. Heating of muscle tissue</td>
    <td style="padding: 8px;">D. Release of enzymes</td>
  </tr>
</table>`,
    options: [
      "a. I-B, II-C, III-D, IV-A",
      "b. I-A, II-C, III-D, IV-B",
      "c. I-D, II-C, III-A, IV-B",
      "d. I-D, II-A, III-B, IV-C"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: `Which of the following statements are true?

1. Microwave heating is a volumetric heating method.

2. Microwave heating depends on the dielectric properties of food.

3. Microwave heating is independent of thermal properties of food.

4. Microwave heating is uniform throughout the food material.`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Which of the following correctly identifies the type of dispersion where a liquid is dispersed in a gas?",
    options: [
      "a. Emulsion",
      "b. Suspension",
      "c. Aerosol",
      "d. Foam"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: `Match the following:

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">A. Microwave heating</td>
    <td style="padding: 8px;">i. Volumetric heating</td>
  </tr>
  <tr>
    <td style="padding: 8px;">B. Ohmic heating</td>
    <td style="padding: 8px;">ii. Surface heating</td>
  </tr>
  <tr>
    <td style="padding: 8px;">C. Infrared heating</td>
    <td style="padding: 8px;">iii. Electromagnetic waves</td>
  </tr>
  <tr>
    <td style="padding: 8px;">D. Induction heating</td>
    <td style="padding: 8px;">iv. Eddy currents</td>
  </tr>
</table>`,
    options: [
      "a. A-i, B-ii, C-iii, D-iv",
      "b. A-iii, B-i, C-ii, D-iv",
      "c. A-ii, B-iv, C-i, D-iii",
      "d. A-iv, B-iii, C-ii, D-i"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: `Match the following:

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">A. Microwave heating</td>
    <td style="padding: 8px;">i. 915 MHz</td>
  </tr>
  <tr>
    <td style="padding: 8px;">B. Radio frequency heating</td>
    <td style="padding: 8px;">ii. 2450 MHz</td>
  </tr>
  <tr>
    <td style="padding: 8px;">C. Infrared heating</td>
    <td style="padding: 8px;">iii. 27.12 MHz</td>
  </tr>
  <tr>
    <td style="padding: 8px;">D. Ultraviolet radiation</td>
    <td style="padding: 8px;">iv. 0.75-1000 μm</td>
  </tr>
</table>`,
    options: [
      "a. A-i, B-iii, C-iv, D-ii",
      "b. A-ii, B-iii, C-iv, D-i",
      "c. A-iii, B-iv, C-i, D-ii",
      "d. A-iv, B-i, C-ii, D-iii"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which of the following hazards is not associated with environmental contaminants?",
    options: [
      "a. Persistent organic pollutants",
      "b. Heavy metals",
      "c. Radionuclides",
      "d. Natural toxins"
    ],
    correctAnswer: 3
  },
  {
    id: 11,
    question: "How long do perishable foods generally keep at room temperature (20-25°C)?",
    options: [
      "a. 1-2 days",
      "b. 1-7 days",
      "c. 1-Several weeks",
      "d. 1 Year or more"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: `Match the type of bound water in Column I with its characteristic feature in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">I. Type I bound water</td>
    <td style="padding: 8px;">A. Exist in the free state</td>
  </tr>
  <tr>
    <td style="padding: 8px;">II. Type II bound water</td>
    <td style="padding: 8px;">B. Partial removal of this type of water can be accomplished by dehydration</td>
  </tr>
  <tr>
    <td style="padding: 8px;">III. Type III bound water</td>
    <td style="padding: 8px;">C. Permits enzymatic activity (only hydrolytic) and non-enzymatic browning</td>
  </tr>
  <tr>
    <td style="padding: 8px;">IV. Type IV bound water</td>
    <td style="padding: 8px;">D. Available for enzyme activity (hydrolytic and oxidative) and non-enzymatic browning</td>
  </tr>
</table>`,
    options: [
      "a. I-B, II-A, III-D, IV-C",
      "b. I-D, II-B, III-C, IV-A",
      "c. I-C, II-D, III-A, IV-B",
      "d. I-B, II-C, III-D, IV-A"
    ],
    correctAnswer: 3
  },
  {
    id: 13,
    question: `Which of the following statements are true?

1. Microwave heating is used for tempering of frozen foods.

2. Microwave heating is used for precooking of bacon.

3. Microwave heating is used for drying of potato chips.

4. Microwave heating is used for blanching of vegetables.`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: `__________ are a group of homologous oligosaccharides, obtained from the breakdown of starch by the action of cyclodextrin glucanotransferase produced by Bacillus macerans.

1. Schardinger dextrins
2. Cyclodextrins
3. Cycloamyloses`,
    options: [
      "a. Only 1",
      "b. Only 2",
      "c. Only 1 & 3",
      "d. All 1, 2 and 3"
    ],
    correctAnswer: 3
  },
  {
    id: 15,
    question: "Which of the following option is incorrect about the amylopectin?",
    options: [
      "a. Molecular weight is 1 to several million",
      "b. Are bush shaped molecules",
      "c. Are highly susceptibility to retrogradation",
      "d. Contain both α-D-(1-4) and α-D-(1-6) glycosidic linkages"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "Identify I, II and III in the figure showing the correct phase changes occurring in a starch-water mixture during heating, cooling, and storage.",
    options: [
      "a. I: Amylose leaching and formation of ordered or crystalline amylose molecules, II: Gelatinization associated with swelling, III: Formation of ordered or crystalline amylopectin molecules",
      "b. I: Amylopectin leaching and formation of ordered or crystalline amylose molecules, II: Gelatinization associated with swelling, III: Formation of ordered or crystalline amylose molecules",
      "c. I: Gelatinization associated with swelling, II: Amylose leaching and formation of ordered or crystalline amylose molecules, III: Formation of ordered or crystalline amylopectin molecules",
      "d. I: Gelatinization associated with swelling, II: Formation of ordered or crystalline amylopectin molecules, III: Formation of ordered or crystalline amylose molecules"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "The activation energy of a first order reaction is 50400 J/mol at 30°C. Calculate the temperature (°C) at which the rate constant doubles. The value of gas constant may be taken as 8.314 J/mol K.",
    options: [
      "a. 40.0-41.0",
      "b. 48.0-49.0",
      "c. 45.0-46.0",
      "d. 35.0-36.0"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "The group of bacteria that grow in high concentrations of sugar is known as _____.",
    options: [
      "a. Osmophilic",
      "b. Saccharolytic",
      "c. Halophilic",
      "d. Lipolytic"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "The intercept and slope of the BET line are 14.7 and 0.93, respectively. Calculate the value of BET constant (C) and monolayer moisture content (m₁).",
    options: [
      "a. 1.01-1.05, 0.76-0.79",
      "b. 0.06-0.08, 1.068-1.078",
      "c. 1.06-1.07, 0.06-0.08",
      "d. 1.07-1.08, 0.08-0.10"
    ],
    correctAnswer: 2
  },
  {
    id: 20,
    question: `Match the biochemical reactions in Column I with their corresponding consequences/definitions given in Column II.

Column I:
I. Hydrolysis of polysaccharides
II. Protein crosslinking
III. Protein denaturation
IV. Lipid isomerization

Column II:
A. Enhanced rate of polymerization during deep-fat frying
B. Egg white coagulation
C. Loss of nutritive value during alkali processing
D. Sugars react with protein`,
    options: [
      "a. I-B, II-A, III-D, IV-C",
      "b. I-D, II-C, III-B, IV-A",
      "c. I-C, II-D, III-A, IV-B",
      "d. I-D, II-B, III-C, IV-A"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    question: `Which of the following caramel color is produced by direct pyrolysis of sucrose to give a burnt sucrose color?

1. Acid fast caramel
2. Brewer's color
3. Baker's color`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 1 and 3",
      "d. Only 3"
    ],
    correctAnswer: 3
  },
  {
    id: 22,
    question: `Which of the following statements is/are correct with respect to browning reactions?

1. Maillard reaction can be inhibited by keeping the pH below the isoelectric pH of amino acids.
2. Browning rate is maximum at intermediate water activity.
3. Sulphites are mostly used to control the browning reaction in Strecker degradation.`,
    options: [
      "a. 1 & 2",
      "b. 2 & 3",
      "c. 1 & 3",
      "d. 1, 2 & 3"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "Which of the following is NOT a possible effect of protein denaturation?",
    options: [
      "a. Decrease in solubility",
      "b. Loss of biological activity",
      "c. Increase in crystallizing ability",
      "d. Susceptibility to enzymatic hydrolysis"
    ],
    correctAnswer: 2
  },
  {
    id: 24,
    question: "Which of the following options accurately describes the quaternary structure of a protein?",
    options: [
      "a. Sequence of amino acids in a linear arrangement",
      "b. Consistent structural motifs like α-helices and β-sheets",
      "c. Comprehensive three-dimensional interplay among various subunits",
      "d. Three-dimensional configuration of atoms within the polypeptide chain"
    ],
    correctAnswer: 2
  },
  {
    id: 25,
    question: `Identify the correct statements with respect to the basic function of protein in a foam.

1. Proteins in foam help to decrease interfacial tension.
2. Proteins increase the viscous and elastic properties of the liquid phase in foam.
3. Proteins in foam weaken film formation.`,
    options: [
      "a. 1 and 2 only",
      "b. 1 and 3 only",
      "c. 2 and 3 only",
      "d. 1, 2 and 3"
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    question: "Which of the following options is correct about the passive pH homeostasis?",
    options: [
      "a. Microorganisms allow external protons from entering the cell or decrease the buffering capacity of their cytoplasm by synthesis of glutamate and / or citrate",
      "b. Microorganisms either prevent external protons from entering the cell or increase the buffering capacity of their cytoplasm by synthesis of glutamate and / or citrate",
      "c. Cell maintains their cytoplasmic pH through metabolic activity",
      "d. Cell is unable to maintain their cytoplasmic pH through metabolic activity"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    question: `Match the property in Column I with its functional criteria in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">I. Textural</td>
    <td style="padding: 8px;">P. Gelling</td>
  </tr>
  <tr>
    <td style="padding: 8px;">II. Structural</td>
    <td style="padding: 8px;">Q. Elasticity</td>
  </tr>
  <tr>
    <td style="padding: 8px;">III. Rheological</td>
    <td style="padding: 8px;">R. Network cross-binding</td>
  </tr>
  <tr>
    <td style="padding: 8px;">IV. Hydration</td>
    <td style="padding: 8px;">S. Viscosity</td>
  </tr>
</table>`,
    options: [
      "a. I-R; II-S; III-P; IV-Q",
      "b. I-R; II-Q; III-S; IV-P",
      "c. I-P; II-Q; III-R; IV-S",
      "d. I-P; II-R; III-Q; IV-S"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "Which among the following does not constitute an underlying factor influencing the microbial ecology in foods?",
    options: [
      "a. Specific growth rate",
      "b. Antagonism",
      "c. Mutualism",
      "d. Redox potential"
    ],
    correctAnswer: 3
  },
  {
    id: 29,
    question: "_____ method is used to determine the probability of survival of the target organism during commercial sterilization.",
    options: [
      "a. Lethal rate summation",
      "b. Viable plate count",
      "c. Q10 value",
      "d. Specific enzyme activity"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "Which of the following is not a type of toxin producing microbe?",
    options: [
      "a. Aspergillus parasiticus",
      "b. Alternaria citri",
      "c. Rhizopus oligosporus",
      "d. Penicillium citrinum"
    ],
    correctAnswer: 2
  },
  {
    id: 31,
    question: "Which of the following is not a consequence of the denaturation of protein?",
    options: [
      "a. Digestibility improvement",
      "b. Anti-nutritional factors inactivation",
      "c. Deteriorative enzymes inactivation",
      "d. Antioxidant activity increase"
    ],
    correctAnswer: 3
  },
  {
    id: 32,
    question: "Microorganisms appear to be thermally stabilised at a₍w₎ values ranges of _____",
    options: [
      "a. 0.3-0.5",
      "b. 0.6-0.8",
      "c. 0.1-0.3",
      "d. 0.5-0.9"
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: "Calculate the generation time (g) in minutes, if 2000 E. coli cells growing logarithmically for 5 hours produced 2 × 10⁶ cells?",
    options: [
      "a. 30-31",
      "b. 20-21",
      "c. 35-36",
      "d. 40-45"
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: `Match the growth phase of microorganism in Column I with its description in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">A. Lag phase</td>
    <td style="padding: 8px;">1. Population remains stable; no increase or decrease in population</td>
  </tr>
  <tr>
    <td style="padding: 8px;">B. Log phase</td>
    <td style="padding: 8px;">2. Bacteria adapt to surroundings and multiply slowly</td>
  </tr>
  <tr>
    <td style="padding: 8px;">C. Stationary phase</td>
    <td style="padding: 8px;">3. Rapid population increase until resources become limited</td>
  </tr>
  <tr>
    <td style="padding: 8px;">D. Death phase</td>
    <td style="padding: 8px;">4. Bacterial death occurs due to waste accumulation and unfavourable conditions</td>
  </tr>
</table>`,
    options: [
      "a. A-2, B-3, C-1, D-4",
      "b. A-3, B-2, C-4, D-1",
      "c. A-1, B-4, C-3, D-2",
      "d. A-4, B-1, C-2, D-3"
    ],
    correctAnswer: 0
  },
  {
    id: 35,
    question: `Which of the following statements are true?

The rate of heat transfer by radiation is proportional to the fourth power of the absolute temperature difference between the radiating body and the receiving body.

The rate of heat transfer by radiation is proportional to the surface area of the radiating body.

The rate of heat transfer by radiation is proportional to the emissivity of the radiating body.

The rate of heat transfer by radiation is independent of the distance between the radiating body and the receiving body.`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    question: `Study the following diagram and answer the question below.

<img src="/images/36.jpg" alt="Food processing diagram" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />

Which of the following correctly describes the process shown?`,
    options: [
      "a. Continuous flow sterilization",
      "b. Batch sterilization",
      "c. HTST pasteurization",
      "d. UHT processing"
    ],
    correctAnswer: 2
  },
  {
    id: 37,
    question: "The initial count of Clostridium botulinum in a food sample was 10¹² cfu/ml. After a heat treatment of 7 min at 121°C, the count gets reduced to 1 cfu/ml. Calculate the D-value (in seconds) of Clostridium botulinum at 121°C.",
    options: [
      "a. 25-28",
      "b. 5-6",
      "c. 2-3",
      "d. 33-35"
    ],
    correctAnswer: 3
  },
  {
    id: 38,
    question: `A food material inside the can is heated in a retort for sterilization. The time & temperature in the center of can were recorded as
t₁: 0-10 min & T₁=72°C;
t₂: 10-22 min & T₂: 96°C;
t₃: 22-40 min & T₃: 118°C.

Calculate the process time (in minutes), if z=9.5°C.`,
    options: [
      "a. 9.3-9.4",
      "b. 5.5-5.6",
      "c. 2.6-2.7",
      "d. 8.7-8.8"
    ],
    correctAnswer: 3
  },
  {
    id: 39,
    question: "Which of the following is not a part of non-enzymatic browning reaction occurring in a food?",
    options: [
      "a. Heyns rearrangement",
      "b. Beckmann rearrangement",
      "c. Strecker degradation",
      "d. Amadori rearrangement"
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "Decimal reduction times (D-value) for Bacillus subtilis are 46 s and 15 s at temperature of 120°C and 125°C, respectively. Calculate the temperature rise, in °C, necessary to reduce the first value of decimal reduction time at 120°C by factor of 10.",
    options: [
      "a. 4.55",
      "b. 8.13",
      "c. 10.27",
      "d. 12.93"
    ],
    correctAnswer: 2
  },
  {
    id: 41,
    question: `Make the pair of components in Column I with the system where it is used given in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">I. Electrode</td>
    <td style="padding: 8px;">i. High Pressure Processing</td>
  </tr>
  <tr>
    <td style="padding: 8px;">II. Cathode tube</td>
    <td style="padding: 8px;">ii. Microwave drying</td>
  </tr>
  <tr>
    <td style="padding: 8px;">III. Waveguide</td>
    <td style="padding: 8px;">iii. Radiofrequency heating</td>
  </tr>
  <tr>
    <td style="padding: 8px;">IV. Yoke</td>
    <td style="padding: 8px;">iv. Irradiation</td>
  </tr>
</table>`,
    options: [
      "a. I-iv, II-ii, III-iii, IV-i",
      "b. I-ii, II-i, III-iii, IV-iv",
      "c. I-iii, II-i, III-iv, IV-ii",
      "d. I-iii, II-iv, III-ii, IV-i"
    ],
    correctAnswer: 3
  },
  {
    id: 42,
    question: "Which is the correct representation of microbial resistance during high pressure processing (HPP) treatment?",
    options: [
      "a. Gram +ve > Gram -ve > Spores",
      "b. Gram -ve > Gram +ve > Spores",
      "c. Gram -ve > Spores > Gram -ve",
      "d. Spores > Gram +ve > Gram -ve"
    ],
    correctAnswer: 3
  },
  {
    id: 43,
    question: `Match the membrane process in Column I with the correct application in the dairy industry given in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">I. Reverse osmosis</td>
    <td style="padding: 8px;">i. Fractionation of milk for cheese manufacture</td>
  </tr>
  <tr>
    <td style="padding: 8px;">II. Nanofiltration</td>
    <td style="padding: 8px;">ii. Pre-concentration of milk</td>
  </tr>
  <tr>
    <td style="padding: 8px;">III. Ultrafiltration</td>
    <td style="padding: 8px;">iii. Defatting and reducing microbial load of milk</td>
  </tr>
  <tr>
    <td style="padding: 8px;">IV. Microfiltration</td>
    <td style="padding: 8px;">iv. Partial demineralization and concentration of whey</td>
  </tr>
</table>`,
    options: [
      "a. I-ii, II-iv, III-i, IV-iii",
      "b. I-iii, II-ii, III-i, IV-iv",
      "c. I-iv, II-iii, III-ii, IV-i",
      "d. I-iv, II-i, III-iii, IV-ii"
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: `Which of the following statements are true?

1. The rate of heat transfer by radiation is proportional to the fourth power of the absolute temperature difference.

2. The rate of heat transfer by radiation is proportional to the surface area.

3. The rate of heat transfer by radiation is proportional to the emissivity.

4. The rate of heat transfer by radiation is independent of the distance.`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: `Examine the following diagram and identify the process it represents.

<img src="/images/45.jpg" alt="Food processing method" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. Vacuum packaging",
      "b. Modified atmosphere packaging",
      "c. Aseptic packaging",
      "d. Active packaging"
    ],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "If 50 ml of permeate is collected in 1 min through a 0.1 m² ultrafiltration membrane (45 kDa) at a transmembrane pressure of 90 kPa, calculate the membrane resistance (m⁻¹). Use viscosity of solution same as that of water.",
    options: [
      "a. 2.2-2.4 × 10¹²",
      "b. 1-2 × 10¹³",
      "c. 8.2-8.4 × 10¹⁴",
      "d. 2.2-2.4 × 10¹⁰"
    ],
    correctAnswer: 1
  },
  {
    id: 47,
    question: `Which of the following factors affect the temperature increase of food materials during high pressure processing?

1. Final pressure
2. Product composition
3. Initial temperature`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 1 and 3",
      "d. 1, 2 and 3"
    ],
    correctAnswer: 3
  },
  {
    id: 48,
    question: `Match the following:

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">I. Concentration polarization</td>
    <td style="padding: 8px;">A. Membrane module</td>
  </tr>
  <tr>
    <td style="padding: 8px;">II. Cross flow</td>
    <td style="padding: 8px;">B. Hyperfiltration</td>
  </tr>
  <tr>
    <td style="padding: 8px;">III. Hollow fiber</td>
    <td style="padding: 8px;">C. Fouling</td>
  </tr>
  <tr>
    <td style="padding: 8px;">IV. Pre-concentration</td>
    <td style="padding: 8px;">D. Mode of filtration</td>
  </tr>
</table>`,
    options: [
      "a. I-B, II-A, III-D, IV-C",
      "b. I-D, II-B, III-C, IV-A",
      "c. I-C, II-D, III-A, IV-B",
      "d. I-B, II-C, III-D, IV-A"
    ],
    correctAnswer: 2
  },
  {
    id: 49,
    question: `Which of the following statements are true about food preservation?

1. Curing & salting methods kill microorganisms by reducing water activity.

2. Sorbic acid and benzoic acid are approved preservatives.

3. pH control is effective against pathogens.

4. Passive pH homeostasis involves preventing proton entry into cells.`,
    options: [
      "a. 1 and 3",
      "b. 1, 2 and 3",
      "c. 2, 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "How many membrane sheets minimum does one leaf has in a spiral wound module?",
    options: [
      "a. 8",
      "b. 2",
      "c. 6",
      "d. 4"
    ],
    correctAnswer: 1
  },
  {
    id: 51,
    question: "Fruit juice having 10% soluble solid is concentrated by reverse osmosis up to 30% soluble solid. If the feed is flowing at a rate of 20 kg/min, calculate the membrane performance in terms of conversion percentage.",
    options: [
      "a. 33.0-33.5",
      "b. 41.5-42.0",
      "c. 39.0-39.5",
      "d. 29.5-31.5"
    ],
    correctAnswer: 3
  },
  {
    id: 52,
    question: "In a membrane separation process increasing the cross flow rate of the feed causes _____.",
    options: [
      "a. decrease in the permeate flux",
      "b. increase in the resistance to solvent flow",
      "c. reduction in the cake layer thickness",
      "d. increase in fouling at membrane surface"
    ],
    correctAnswer: 2
  },
  {
    id: 53,
    question: `Which of the following statements are true with respect to the effect of ionizing radiation on living organisms?

1. The dose of radiation required to produce a lethal effect varies with the complexity of the organism.
2. A dose of few hundred rad is lethal to human but destruction of some microorganisms requires millions of rad.
3. The most complex organisms tend to be the most sensitive to radiation.`,
    options: [
      "a. 1 & 2",
      "b. 2 & 4",
      "c. 3 & 4",
      "d. 1, 2 & 3"
    ],
    correctAnswer: 3
  },
  {
    id: 54,
    question: "In a reverse osmosis process, calculate the minimum transmembrane pressure (MPa) that must be used to concentrate a fruit juice of water activity 0.75 at 25°C. The density of juice at is 1037.84 kg/m³.",
    options: [
      "a. 30.5-30.6",
      "b. 40.01-42.02",
      "c. 27.8-27.9",
      "d. 23.2-23.3"
    ],
    correctAnswer: 1
  },
  {
    id: 55,
    question: `Match the radiation source in Column I with its suitable characteristics given in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">I. Cobalt-60</td>
    <td style="padding: 8px;">i. Low penetrating power</td>
  </tr>
  <tr>
    <td style="padding: 8px;">II. Electron beams</td>
    <td style="padding: 8px;">ii. Low efficiency</td>
  </tr>
  <tr>
    <td style="padding: 8px;">III. X-rays</td>
    <td style="padding: 8px;">iii. Permanent radioactive source</td>
  </tr>
</table>`,
    options: [
      "a. I-i, II-ii, III-iii",
      "b. I-ii, II-i, III-iii",
      "c. I-iii, II-ii, III-i",
      "d. I-iii, II-i, III-ii"
    ],
    correctAnswer: 3
  },
  {
    id: 56,
    question: "Ten ton fruit juice (12% w/w solids) was pre-concentrated by reverse osmosis up to 36% w/w solids in an 8 h shift at 30°C. If the operating pressure is 5000 kPa and the mass transfer coefficient is 7.4 × 10⁻³ kg m⁻² h⁻¹ kPa⁻¹, calculate the quantity of concentrate produced (ton) and the area of membrane (m²) required. (Assume that sucrose forms the majority of the solids in the juice).",
    options: [
      "a. 3.3-3.4, 40-41",
      "b. 6.6-6.7, 27-28",
      "c. 3.3-3.4, 27-28",
      "d. 6.6-6.7, 40-41"
    ],
    correctAnswer: 2
  },
  {
    id: 57,
    question: `Which phase in the figure below shows that the product temperature is independent of compression rate in high pressure processing?

<img src="/images/57.jpg" alt="High pressure processing phases" style="width: 100%; max-width: 600px; margin: 20px 0;" />`,
    options: [
      "a. t₁-t₂",
      "b. t₁-t₃",
      "c. t₂-t₃",
      "d. t₃-t₄"
    ],
    correctAnswer: 2
  },
  {
    id: 58,
    question: `Calculate the permeate flux (in m³/m².s) in a gel layer controlled ultrafiltration of a protein solution of concentration 0.01 kg/m³ from the under provided data.

1. Viscosity of permeate = 1.5 cP
2. Diameter of protein molecule = 20 nm
3. Operating pressure = 10 kPa
4. Porosity of gel = 0.5
5. Gel layer thickness = 15 μm
6. Membrane resistance = 8.6 × 10¹¹ m⁻¹`,
    options: [
      "a. 4.6-4.7 × 10⁻⁷",
      "b. 4.6-4.7 × 10⁻⁹",
      "c. 10.5-10.6 × 10⁻⁷",
      "d. 10.5-10.6 × 10⁻⁹"
    ],
    correctAnswer: 1
  },
  {
    id: 59,
    question: "Which of the under mentioned packaging materials is/are suitable for high pressure treatment?",
    options: [
      "a. Rigid copolymer films",
      "b. Semi rigid trays",
      "c. Metal cans",
      "d. Paper bags"
    ],
    correctAnswer: 1
  },
  {
    id: 60,
    question: "Whey flowing at a rate of 15 kg/min with 8% is concentrated to 24% solid (w/v) using ultrafiltration membrane system. The inside diameter of membrane tube is 5.5 cm and pressure difference used is 2500 kPa. Membrane permeability constant is 3.2 × 10⁻⁵ kg water/m² kPa s. Calculate the mass flow rate (kg/min) of water through the membrane and length (m) of tube required.",
    options: [
      "a. 7 and 7.5-8.0",
      "b. 10 and 7.5-8.0",
      "c. 10 and 11.5-12.0",
      "d. 7 and 11.5-12.0"
    ],
    correctAnswer: 2
  },
  {
    id: 61,
    question: `Which of the following factors affect the induction of radioactivity in foods?

1. Type of radiation and its energy
2. Dose applied to the food
3. Abundance of specific elements in the food`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 1 and 3",
      "d. 1, 2 and 3"
    ],
    correctAnswer: 3
  },
  {
    id: 62,
    question: "Determine the required thickness (m) of lead to absorb 99.89% of gamma radiation energy, with an incident photon energy of 4 MeV. Use the extinction coefficient (µ) for lead as 0.58 cm⁻¹.",
    options: [
      "a. 0.218-0.220",
      "b. 0.180-0.182",
      "c. 0.191-0.193",
      "d. 0.128-0.160"
    ],
    correctAnswer: 3
  },
  {
    id: 63,
    question: "Identify the incorrect statement with respect to microwave heating of foods.",
    options: [
      "a. Shorter the frequency higher is the penetration",
      "b. MW absorption is directly proportional to depth",
      "c. Penetration depth of microwave is inversely proportional to loss tangent",
      "d. Thermal runaway results in non-uniform heating"
    ],
    correctAnswer: 1
  },
  {
    id: 64,
    question: `Study the following diagram and identify the process shown.

<img src="/images/64.jpg" alt="Food processing equipment" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. Spray drying",
      "b. Freeze drying",
      "c. Drum drying",
      "d. Fluidized bed drying"
    ],
    correctAnswer: 0
  },
  {
    id: 65,
    question: "Which among the following materials has the lowest dielectric constant?",
    options: [
      "a. Apple",
      "b. Water",
      "c. Oil",
      "d. Meat"
    ],
    correctAnswer: 2
  },
  {
    id: 66,
    question: "Calculate the dissipation constant for a material which has dielectric loss factor 20 and dielectric constant 85.",
    options: [
      "a. 13-14",
      "b. 0.23-0.24",
      "c. 0.31-0.32",
      "d. 4.3-4.4"
    ],
    correctAnswer: 1
  },
  {
    id: 67,
    question: `Match the following:

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">I. Radurization</td>
    <td style="padding: 8px;">A. Low penetrating power</td>
  </tr>
  <tr>
    <td style="padding: 8px;">II. Cobalt-60</td>
    <td style="padding: 8px;">B. 1-10 kGy</td>
  </tr>
  <tr>
    <td style="padding: 8px;">III. Electron beams</td>
    <td style="padding: 8px;">C. Half-life of 5.27 Yr</td>
  </tr>
  <tr>
    <td style="padding: 8px;">IV. Eliminates virus contamination</td>
    <td style="padding: 8px;">D. 10-100 kGy</td>
  </tr>
</table>`,
    options: [
      "a. I-D, II-A, III-C, IV-B",
      "b. I-B, II-C, III-A, IV-D",
      "c. I-B, II-A, III-C, IV-D",
      "d. I-D, II-C, III-A, IV-B"
    ],
    correctAnswer: 1
  },
  {
    id: 68,
    question: "The dielectric loss constant and loss tangent for potato at a microwave frequency of 2450 MHz and 30°C are 70 and 0.25, respectively. Calculate the depth (m) beneath the potato's surface where the microwave power decreases to half of its initial value. Apply Lambert's expression for power absorption for this calculation.",
    options: [
      "a. 4.27-4.50 x10⁻³",
      "b. 6.40-7.60 x10⁻³",
      "c. 9.84-9.95 x10⁻³",
      "d. 8.49-8.90 x10⁻³"
    ],
    correctAnswer: 1
  },
  {
    id: 69,
    question: "Loss factor of foods _______ during drying.",
    options: [
      "a. increase",
      "b. decrease",
      "c. remains unchanged",
      "d. increases and then decreases"
    ],
    correctAnswer: 1
  },
  {
    id: 70,
    question: "Which among the following microorganism is the most sensitive to ionizing radiation?",
    options: [
      "a. Bacillus cereus",
      "b. Deinococcus radiodurans",
      "c. Toxoplasma gondii",
      "d. Dipteran beidivirus"
    ],
    correctAnswer: 2
  },
  {
    id: 71,
    question: "What is the penetration depth (m) of microwave emitted at frequency of 2450 MHz in raw potatoes which has dielectric constant 72 and loss tangent 0.231? The speed of the wave may be taken as 3 x 10⁸ m/s.",
    options: [
      "a. 4.1-5.1 x10⁻³",
      "b. 5.9-6.1 x10⁻³",
      "c. 4.9-5.1 x10⁻⁴",
      "d. 5.9-6.1 x10⁻⁴"
    ],
    correctAnswer: 0
  },
  {
    id: 72,
    question: `Which of the following statements are true about food preservation?

1. Curing & salting methods kill microorganisms by reducing water activity.

2. Sorbic acid and benzoic acid are approved preservatives.

3. pH control is effective against pathogens.

4. Passive pH homeostasis involves preventing proton entry into cells.`,
    options: [
      "a. 1 and 3",
      "b. 1, 2 and 3",
      "c. 2, 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 1
  },
  {
    id: 73,
    question: `Which of the following statements are true about food additives?

1. They improve nutritional value of foods.

2. They enhance shelf life of products.

3. They may cause allergic reactions.

4. They are all synthetic compounds.`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 1
  },
  {
    id: 74,
    question: "The D₁₀ for Listeria monocytogenes in meat is 0.85 kGy. Calculate the radiation dose (kGy) needed to reduce the Listeria count by 10 log cycles.",
    options: [
      "a. 3.8",
      "b. 5.4",
      "c. 6.0",
      "d. 8.5"
    ],
    correctAnswer: 3
  },
  {
    id: 75,
    question: "The half-life of radium is 1600 years. The fraction of a sample of radium remaining after 6400 years would be...",
    options: [
      "a. 1/2",
      "b. 1/4",
      "c. 1/8",
      "d. 1/16"
    ],
    correctAnswer: 3
  },
  {
    id: 76,
    question: "Which among the following is heated more effectively by microwaves?",
    options: [
      "a. Glass",
      "b. Paper",
      "c. PET",
      "d. Bread"
    ],
    correctAnswer: 3
  },
  {
    id: 77,
    question: "An 8 kW oven having hearth area of 4 m² operates at 210°C. It is loaded with 150 loaves of bread dough in baking tins. The surface of one loaf measures 12 cm x 20 cm. Assuming that the emissivity of dough is 0.75, the dough bakes at 100°C, and 80% of the heat is transmitted in the form of radiant energy, calculate the efficiency (%) of energy use (as the percentage of the supplied radiant energy which is absorbed by the food) for the batch. (Assume the value of the Stefan-Boltzmann constant (σ) = 5.678×10⁻⁸ W·m⁻²·K⁻⁴).",
    options: [
      "a. 63-67",
      "b. 73-77",
      "c. 85-88",
      "d. 93-96"
    ],
    correctAnswer: 2
  },
  {
    id: 78,
    question: "What is the maximum permissible limit of dosage (kGy) for microbial inactivation in spices and dry herbs during irradiation?",
    options: [
      "a. 60",
      "b. 50",
      "c. 40",
      "d. 30"
    ],
    correctAnswer: 3
  },
  {
    id: 79,
    question: `Which statements about food processing are correct?

1. Heat treatment always reduces nutritional value.

2. Processing can improve digestibility.

3. Blanching helps preserve color and texture.

4. Fermentation reduces food safety.`,
    options: [
      "a. 1 and 3",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 1
  },
  {
    id: 80,
    question: "Identify the most radiation-sensitive material from amongst the below given options.",
    options: [
      "a. Water",
      "b. Protein",
      "c. Lipid",
      "d. Amino acid"
    ],
    correctAnswer: 0
  },
  {
    id: 81,
    question: "In a freeze drier, a product having thickness of 10 mm is dried. The product surface temperature and sublimation temperature are 50°C and -20°C, respectively. The thermal conductivity of the dry part of the product is 0.03 W/m K. Determine the drying time. (Assume: Heat of sublimation as 2840 kJ kg⁻¹, density of ice as 917 kg/m³, porosity of product as 0.8).",
    options: [
      "a. 2 h 40 min-2 h 50 min",
      "b. 3 h 40 min-3 h 50 min",
      "c. 2 h 20 min - 2 h 30 min",
      "d. 3 h 20 min - 3 h 30 min"
    ],
    correctAnswer: 1
  },
  {
    id: 82,
    question: "In a dryer, 4 tons of sorghum is dried from 18%(db) moisture content to 13%(db) moisture content in an hour. Calculate the heat requirement for drying (kcal/s) and the necessary air-flow rate (kg/s) for the drying system. Given that: Drying efficiency 50%; Latent heat of evaporation = 575 kcal/kg; specific heat of air = 0.24 kcal/kg°C; Drying air temperature = 44°C; Ambient air condition = 25°C and 20°C of dry and wet bulb temperature, respectively.",
    options: [
      "a. 2.6-2.8, 10.8-10.9",
      "b. 2.6-2.8, 11.8-11.9",
      "c. 26-28; 10.8-10.9",
      "d. 26-28; 11.8-11.9"
    ],
    correctAnswer: 3
  },
  {
    id: 83,
    question: "Oat meal with a moisture content of 12%(wb) is being extruded through a metering zone of an extruder with the dimensions of the channel as width 4 cm, height 2.5 cm, length 45 cm. The rheological properties of the extrudate can be estimated by a viscosity of 67,000 Pa.s and a density of 1250 kg/m³. The wall velocity is estimated to be 0.4 m/s. If the pressure drop is maintained at 2500 kPa, estimate the mass flow rate of extrudate in the metering zone.",
    options: [
      "a. 3.0-3.1 × 10⁻⁴",
      "b. 3.0-3.1 × 10⁻³",
      "c. 3.4-3.5 × 10⁻⁴",
      "d. 3.4-3.5 × 10⁻³"
    ],
    correctAnswer: 0
  },
  {
    id: 84,
    question: "A twin screw extruder is having the speed of rotation 10 rps; average width of pitch 0.05 m; angle of helix 30°; length of screw 1.2 m; screw tip diameter 0.06 m; average screw height 0.004 m. The melt having average viscosity of 6 Pa s is fed at atmospheric pressure. The pressure at the die is 1.65 MPa. Calculate the volumetric output flow rate (m³/s) of extruder.",
    options: [
      "a. 1.4-1.5 × 10⁻⁴",
      "b. 1.7-1.8 × 10⁻⁴",
      "c. 1.9-2.0 × 10⁻⁴",
      "d. 2.1-2.3 × 10⁻⁴"
    ],
    correctAnswer: 0
  },
  {
    id: 85,
    question: `Which of the following statement(s) is/are true with respect to the freeze drying of food products?

1. The rate of heat transfer depends on the thickness and thermal conductivity of the ice layer during heat transfer through the frozen layer.
2. The rate of heat transfer to the sublimation front depends on the thickness and area of the food, the thermal conductivity of the dry layer and the temperature difference between the surface of the food and ice front during heat transfer through the frozen layer.
3. Heat is generated at the ice front, and the rate of heat transfer is not influenced by the thermal conductivity of ice or dry food, or the thickness of the dry layer during heating by microwaves.`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 1 and 3",
      "d. 1, 2 and 3"
    ],
    correctAnswer: 3
  },
  {
    id: 86,
    question: "Which of the following is not an advantage of freeze drying?",
    options: [
      "a. Rapid rehydration",
      "b. Rapid dehydration",
      "c. Fewer loss of nutrient",
      "d. Retain taste, smell and texture"
    ],
    correctAnswer: 1
  },
  {
    id: 87,
    question: `Analyze the following diagram and identify the process it illustrates.

<img src="/images/87.jpg" alt="Food preservation method" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. Thermal processing",
      "b. Non-thermal processing",
      "c. Chemical preservation",
      "d. Physical preservation"
    ],
    correctAnswer: 1
  },
  {
    id: 88,
    question: "The total amount of heat required in the primary phase of freeze drying includes _____.",
    options: [
      "a. latent heat of sublimation",
      "b. latent heat of vaporization",
      "c. enthalpy",
      "d. specific heat"
    ],
    correctAnswer: 0
  },
  {
    id: 89,
    question: `Make proper combinations (pairs) of components of a pilot scale freeze dryer given in Column I with its function in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Freezing fluid system</td>
    <td style="padding: 8px;">i. Defrosting the condenser</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Heating circuit</td>
    <td style="padding: 8px;">ii. Product freezing</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Vacuum system</td>
    <td style="padding: 8px;">iii. Place for drying</td>
  </tr>
  <tr>
    <td style="padding: 8px;">4. The chamber</td>
    <td style="padding: 8px;">iv. Evacuating air</td>
  </tr>
</table>`,
    options: [
      "a. 1-i, 2-ii, 3-iii, 4-iv",
      "b. 1-iv, 2-iii, 3-i, 4-ii",
      "c. 1-ii, 2-i, 3-iv, 4-iii",
      "d. 1-ii, 2-iv, 3-iii, 4-i"
    ],
    correctAnswer: 2
  },
  {
    id: 90,
    question: `Which of the following statements are true about food packaging?

1. Modified atmosphere packaging extends shelf life.

2. Active packaging materials interact with food.

3. Glass packaging is completely inert.

4. Plastic packaging cannot be recycled.`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 91,
    question: "Which of the following is the correct sequence for the process of freeze concentration?",
    options: [
      "a. Crystal nucleation → Crystal growth → Separation of ice → Concentration",
      "b. Crystal growth → Crystal nucleation → Concentration → Separation of ice",
      "c. Crystal nucleation → Concentration → Crystal growth → Separation of ice",
      "d. Crystal growth → Crystal nucleation → Separation of ice → Concentration"
    ],
    correctAnswer: 0
  },
  {
    id: 92,
    question: `Which statements about food quality control are accurate?

1. Sensory evaluation is always objective.

2. Chemical analysis can measure nutritional content.

3. Microbiological testing ensures food safety.

4. Physical tests measure only texture.`,
    options: [
      "a. 1 and 3",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 1
  },
  {
    id: 93,
    question: "Which of the following are the correct sequential steps of processing for freeze dried instant coffee?",
    options: [
      "a. Extraction → Filtration → Reserving aroma → Aromatization → Freeze drying",
      "b. Extraction → Reserving aroma → Filtration → Freeze drying → Aromatization",
      "c. Extraction → Aromatization → Filtration → Reserving aroma → Freeze drying",
      "d. Extraction → Filtration → Reserving aroma → Freeze drying → Aromatization"
    ],
    correctAnswer: 3
  },
  {
    id: 94,
    question: "What is the TSS of the coffee extract after the extraction step during instant coffee manufacturing process?",
    options: [
      "a. 10-20%",
      "b. 20-30%",
      "c. 30-40%",
      "d. 40-50%"
    ],
    correctAnswer: 1
  },
  {
    id: 95,
    question: "Which of the following terminology related to the extruder screw is defined as horizontal distance of the corresponding points of the two successive lands?",
    options: [
      "a. Flight",
      "b. Pitch",
      "c. Flight depth",
      "d. Screw root"
    ],
    correctAnswer: 1
  },
  {
    id: 96,
    question: `Study the following diagram and identify the equipment shown.

<img src="/images/96.jpg" alt="Food processing equipment" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. Plate heat exchanger",
      "b. Shell and tube heat exchanger",
      "c. Scraped surface heat exchanger",
      "d. Tubular heat exchanger"
    ],
    correctAnswer: 2
  },
  {
    id: 97,
    question: `Which of the following statements are true about food enzymes?

1. All enzymes are deactivated by heat.

2. Enzymes can improve food texture.

3. Natural enzymes always benefit food quality.

4. Enzyme activity depends on pH.`,
    options: [
      "a. 1 and 2",
      "b. 2 and 4",
      "c. 3 and 4",
      "d. 1 and 3"
    ],
    correctAnswer: 1
  },
  {
    id: 98,
    question: `Examine the following diagram and identify the process it represents.

<img src="/images/98.jpg" alt="Food processing system" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. Batch processing",
      "b. Continuous processing",
      "c. Semi-continuous processing",
      "d. Intermittent processing"
    ],
    correctAnswer: 1
  },
  {
    id: 99,
    question: "A plant protein sample was texturized in an extruder using die head temperature 140°C, screw speed 100 rpm, and feed rate 1 kg/h to produce vegetable meat. The temperature of the melt was 125°C, die pressure 100 bar, and torque was 25 Nm. Calculate the energy consumption (kJ/kg) by the extruder.",
    options: [
      "a. 4.3-4.5",
      "b. 10-12",
      "c. 2.0-2.2",
      "d. 30-35"
    ],
    correctAnswer: 1
  },
  {
    id: 100,
    question: "During the freeze concentration process, the fractional crystallization of water into ice and its subsequent removal is accomplished in a _____.",
    options: [
      "a. paddle crystalliser",
      "b. wash column",
      "c. melter",
      "d. heat exchanger"
    ],
    correctAnswer: 0
  },
  {
    id: 101,
    question: `Match the pair of food product in Column I with its pH in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Tomato</td>
    <td style="padding: 8px;">i. <4.0</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Milk</td>
    <td style="padding: 8px;">ii. 4.0-5.0</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Apple</td>
    <td style="padding: 8px;">iii. >5.0</td>
  </tr>
</table>`,
    options: [
      "a. 1-i, 2-i, 3-ii",
      "b. 1-i, 2-ii, 3-iii",
      "c. 1-ii, 2-iii, 3-i",
      "d. 1-iii, 2-ii, 3-i"
    ],
    correctAnswer: 2
  },
  {
    id: 102,
    question: "The tomato juice is flowing at a rate of 2.0 m³/h through a holding tube in an aseptic processing system. The holding tube has inside diameter of 4.55 cm and the flow is laminar. The residence time of juice in the tube is 2.5 min. Calculate the length of holding tube in meter.",
    options: [
      "a. 46-47",
      "b. 48-49",
      "c. 95-96",
      "d. 100-105"
    ],
    correctAnswer: 3
  },
  {
    id: 103,
    question: "The initial concentration of ascorbic acid in an aseptically packed lemon juice is 90 mg/100 g and final concentration after storage for 150 days is 70 mg/100 g. The loss of ascorbic acid follows first order kinetics with a rate constant of 0.00662 day⁻¹ and activation energy of 80110 J/mole at room temperature (25°C). Calculate the storage temperature in °C. (Assume the value of R=8.314 J/mol K.)",
    options: [
      "a. 12-12.5",
      "b. 12.5-13",
      "c. 13-13.5",
      "d. 13.5-14"
    ],
    correctAnswer: 1
  },
  {
    id: 104,
    question: `Match the food antimicrobial in Column I with its natural sources in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Acetic acid</td>
    <td style="padding: 8px;">A. Yoghurt</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Propionic acid</td>
    <td style="padding: 8px;">B. Rowanberries</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Sorbic acid</td>
    <td style="padding: 8px;">C. Vinegar</td>
  </tr>
  <tr>
    <td style="padding: 8px;">4. Lactic acid</td>
    <td style="padding: 8px;">D. Swiss cheese</td>
  </tr>
</table>`,
    options: [
      "a. 1-D, 2-C, 3-B, 4-A",
      "b. 1-C, 2-D, 3-B, 4-A",
      "c. 1-C, 2-D, 3-A, 4-B",
      "d. 1-D, 2-C, 3-A, 4-B"
    ],
    correctAnswer: 1
  },
  {
    id: 105,
    question: "_____ is an antimicrobial, a primary iron binding compound, which is naturally present in milk and colostrum.",
    options: [
      "a. Lactalbumin",
      "b. Lactoferrin",
      "c. Lactose",
      "d. Lactate"
    ],
    correctAnswer: 1
  },
  {
    id: 106,
    question: `Which statements about food irradiation are correct?

1. It kills all microorganisms at any dose.

2. It can extend shelf life of fresh produce.

3. It makes food radioactive.

4. It requires specific labeling.`,
    options: [
      "a. 1 and 3",
      "b. 2 and 4",
      "c. 3 and 4",
      "d. 1 and 2"
    ],
    correctAnswer: 1
  },
  {
    id: 107,
    question: "What is the minimum aₘ needed for the growth of the Staphylococcus aureus in a food?",
    options: [
      "a. 0.55",
      "b. 0.65",
      "c. 0.75",
      "d. 0.85"
    ],
    correctAnswer: 3
  },
  {
    id: 108,
    question: "In osmodehydrofreezing technology, the food material is subjected to osmotic dehydration followed by _____ and freezing processes.",
    options: [
      "a. Combined method",
      "b. Cooling",
      "c. Air dehydration",
      "d. Concentration"
    ],
    correctAnswer: 2
  },
  {
    id: 109,
    question: "What is the most significant effect of heating on polyunsaturated fatty acids (PUFAs)?",
    options: [
      "a. PUFA undergoes oxidation, leading to the formation of hydroperoxides and free radicals.",
      "b. PUFA molecules become more stable due to heat-induced structural changes.",
      "c. The double bonds in PUFA increase, enhancing their antioxidant properties.",
      "d. PUFA converts into saturated fatty acids when exposed to prolonged heat."
    ],
    correctAnswer: 0
  },
  {
    id: 110,
    question: "Which of the following is not a physical hurdle used to preserve foods?",
    options: [
      "a. Modified atmospheres",
      "b. Smoking",
      "c. Ultraviolet radiation",
      "d. Photodynamic inactivation"
    ],
    correctAnswer: 1
  },
  {
    id: 111,
    question: `Match the vitamins in Column I with its chemical name in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Vitamin A</td>
    <td style="padding: 8px;">i. Tocopherol</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Vitamin D₃</td>
    <td style="padding: 8px;">ii. Menaquinone</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Vitamin E</td>
    <td style="padding: 8px;">iii. Phylloquinone</td>
  </tr>
  <tr>
    <td style="padding: 8px;">4. Vitamin K₁</td>
    <td style="padding: 8px;">iv. Cholecalciferol</td>
  </tr>
  <tr>
    <td style="padding: 8px;">5. Vitamin K₂</td>
    <td style="padding: 8px;">v. Retinol</td>
  </tr>
</table>`,
    options: [
      "a. 1-v, 2-iv, 3-iii, 4-ii, 5-i",
      "b. 1-v, 2-i, 3-iii, 4-ii, 5-iv",
      "c. 1-v, 2-iv, 3-i, 4-iii, 5-ii",
      "d. 1-iv, 2-v, 3-i, 4-iii, 5-ii"
    ],
    correctAnswer: 2
  },
  {
    id: 112,
    question: `Study the following diagram and identify the process shown.

<img src="/images/112.jpg" alt="Food processing system" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. Batch mixing",
      "b. Continuous mixing",
      "c. Semi-continuous mixing",
      "d. Intermittent mixing"
    ],
    correctAnswer: 1
  },
  {
    id: 113,
    question: `Analyze the following diagram and identify the equipment illustrated.

<img src="/images/113.jpg" alt="Food processing equipment" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. Plate heat exchanger",
      "b. Tubular heat exchanger",
      "c. Shell and tube heat exchanger",
      "d. Scraped surface heat exchanger"
    ],
    correctAnswer: 0
  },
  {
    id: 114,
    question: "Mrs. Kaibarta is a fisherwoman from Mednipore. She wants to start her business of shrimps delivery to nearby educational institutes to meet the increasing needs of her family for which she needs an antimicrobial to enhance shelf-life of the shrimps against A. hydrophila. Based on the above results, which of the following sequence of ingredients/additives would you suggest to Mrs. Kaibarta to adopt, starting with the one which she should use in terms of cost effectiveness, health prospect and acceptability?",
    options: [
      "a. Propionic acid → Sorbic acid → Benzoic acid",
      "b. Benzoic acid → Propionic acid → Sorbic acid",
      "c. Hexane extract of turmeric → Ethanol extract of turmeric → Turmeric powder",
      "d. Turmeric powder → Ethanol extract of turmeric → Hexane extract of turmeric"
    ],
    correctAnswer: 3
  },
  {
    id: 115,
    question: "Which of the following is not a hurdle for providing microbial stability to the high moisture food product?",
    options: [
      "a. Blanching",
      "b. Water activity increment",
      "c. Addition of chemical preservatives",
      "d. Addition of sulfite as an anti-browning agent"
    ],
    correctAnswer: 1
  },
  {
    id: 116,
    question: "An ice-cream mix having density 1020 kg/m³ and viscosity 72×10⁻³ Pa.s is aseptically processed in a system in which 30 m long holding tube with inside diameter of 0.032 m is used. The average velocity of flow in the tube is 0.75 m/s. The ice cream temperature at the exit of holding tube is 140°C. Calculate sterilising value of the process for a microorganism which has D₀=1.8 min and z=13°C.",
    options: [
      "a. 5.3-5.5",
      "b. 3.5-3.7",
      "c. 9.9-10.1",
      "d. 1.8-2.0"
    ],
    correctAnswer: 0
  },
  {
    id: 117,
    question: `Which of the following statements are true about food allergens?

1. All proteins are potential allergens.

2. Processing can reduce allergenicity.

3. Cross-contamination must be prevented.

4. Allergen labeling is optional.`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 1
  },
  {
    id: 118,
    question: `Which statements about food additives are correct?

1. Natural additives are always safe.

2. Synthetic additives are always harmful.

3. Additives must be declared on labels.

4. Some additives have multiple functions.`,
    options: [
      "a. 1 and 2",
      "b. 3 and 4",
      "c. 2 and 3",
      "d. 1 and 4"
    ],
    correctAnswer: 1
  },
  {
    id: 119,
    question: `Which among the under mentioned statements is/are wrong with respect to the surface-active agents?

1. Polysorbate are used as surface-active ingredients for improving wettability of fat rich powders.

2. Propylene glycol should be used as surface-active ingredients for improving wettability of fat rich powders.

3. Lecithin is used as surface-active ingredients for improving wettability of fat rich powders.

4. Lecithin is limitedly used in dairy industry for instantizing whole milk powder.`,
    options: [
      "a. 1 & 4",
      "b. 2 & 3",
      "c. 3 & 4",
      "d. 2 & 4"
    ],
    correctAnswer: 3
  },
  {
    id: 120,
    question: "Which type of drying method is commonly used in the preparation of powdered eggs?",
    options: [
      "a. Freeze drying",
      "b. Spray drying",
      "c. Drum drying",
      "d. Sun drying"
    ],
    correctAnswer: 1
  },
  {
    id: 121,
    question: "Calculate the weight (kg) of sunflower oil slurry?",
    options: [
      "a. 2500",
      "b. 3500",
      "c. 2000",
      "d. 3000"
    ],
    correctAnswer: 2
  },
  {
    id: 122,
    question: "What is the weight (kg) of final oil slurry mixture?",
    options: [
      "a. 2500",
      "b. 3500",
      "c. 2000",
      "d. 3000"
    ],
    correctAnswer: 3
  },
  {
    id: 123,
    question: "Which of the following edible oil extractor works on the principle of bucket elevators?",
    options: [
      "a. Horizontal compartmented double-belt type extractor",
      "b. Blaw-knox rotocel type extractor",
      "c. Bollman type extractor",
      "d. Hildebrand extractor"
    ],
    correctAnswer: 2
  },
  {
    id: 124,
    question: `Study the following diagram and identify the equipment shown.

<img src="/images/124.jpg" alt="Food processing equipment" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. Spray dryer",
      "b. Freeze dryer",
      "c. Drum dryer",
      "d. Fluidized bed dryer"
    ],
    correctAnswer: 2
  },
  {
    id: 125,
    question: `Which of the following statements are true about food preservation methods?

1. Chemical preservatives are always synthetic.

2. Physical methods can affect texture.

3. Biological methods include fermentation.

4. Combined methods are more effective.`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 2
  },
  {
    id: 126,
    question: "What is the quantity of oil (kg) obtained through pressing?",
    options: [
      "a. 63-64",
      "b. 48-49",
      "c. 52-53",
      "d. 26-29"
    ],
    correctAnswer: 0
  },
  {
    id: 127,
    question: "What is the quantity of oil (kg) recovered in the extraction process?",
    options: [
      "a. 4.1-5.2",
      "b. 24-25",
      "c. 48-49",
      "d. 6.3-7.5"
    ],
    correctAnswer: 1
  },
  {
    id: 128,
    question: "The applied concentrations (%) of catalysts for chemical interesterification generally range between _____.",
    options: [
      "a. 0.05 to 1.5",
      "b. 0.5 to 1.25",
      "c. 0.05 to 1.05",
      "d. 0.005 to 1.5"
    ],
    correctAnswer: 0
  },
  {
    id: 129,
    question: "Which of the following is not the characteristic feature of enzymatic interesterification?",
    options: [
      "a. Low temperature",
      "b. Catalyst specificity",
      "c. Low by-products",
      "d. Dark color of oil"
    ],
    correctAnswer: 3
  },
  {
    id: 130,
    question: "In wet bleaching system, feed oil should have _____ % moisture in bleacher reactor.",
    options: [
      "a. 0.2-0.4",
      "b. 0.6-0.8",
      "c. 6-8",
      "d. 2-4"
    ],
    correctAnswer: 0
  },
  {
    id: 131,
    question: `Which statements about food safety management are correct?

1. HACCP is voluntary for all food businesses.

2. Prerequisites programs are essential.

3. Documentation must be maintained.

4. Training is optional for food handlers.`,
    options: [
      "a. 1 and 3",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 1
  },
  {
    id: 132,
    question: `Identify the incorrect statements with respect to the effect of hydrogenation process.

1. The iodine value of the oil increases.

2. The melting point of the oil increases.

3. The oxidative stability of the oil decreases.

4. The unsaturated fatty acids become more saturated.`,
    options: [
      "a. I, II",
      "b. II, IV",
      "c. III, IV",
      "d. I, III"
    ],
    correctAnswer: 3
  },
  {
    id: 133,
    question: `Match the step of refining (I, II, III, IV) given in column I with its respective functions (A, B, C, D) in the column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">I. Degumming</td>
    <td style="padding: 8px;">A. Separation of waxes</td>
  </tr>
  <tr>
    <td style="padding: 8px;">II. Neutralization</td>
    <td style="padding: 8px;">B. Removal of pigments</td>
  </tr>
  <tr>
    <td style="padding: 8px;">III. Bleaching</td>
    <td style="padding: 8px;">C. Removal of phosphatides</td>
  </tr>
  <tr>
    <td style="padding: 8px;">IV. Winterization</td>
    <td style="padding: 8px;">D. Removal of free fatty acids</td>
  </tr>
</table>`,
    options: [
      "a. I-B, II-D, III-C, IV-A",
      "b. I-A, II-B, III-D, IV-C",
      "c. I-C, II-D, III-B, IV-A",
      "d. I-D, II-A, III-B, IV-C"
    ],
    correctAnswer: 2
  },
  {
    id: 134,
    question: `Analyze the following diagram and identify the process illustrated.

<img src="/images/134.jpg" alt="Food processing system" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. Batch processing",
      "b. Continuous processing",
      "c. Semi-continuous processing",
      "d. Intermittent processing"
    ],
    correctAnswer: 1
  },
  {
    id: 135,
    question: "In a simplified reaction model given, SL₂=K₂/K₃ denotes _____ acid selectivity.",
    options: [
      "a. Linolenic",
      "b. Oleic",
      "c. Linoleic",
      "d. Stearic"
    ],
    correctAnswer: 2
  },
  {
    id: 136,
    question: "Which of the following process is responsible for imparting plasticity to oil seeds?",
    options: [
      "a. Decorticating",
      "b. Milling",
      "c. Flaking",
      "d. Cooking"
    ],
    correctAnswer: 3
  },
  {
    id: 137,
    question: "Calculate the effectiveness (%) of an oil expeller, which yields 37 kg oil containing 5% solid impurities from 100 kg mustard seed having an oil content of 40%.",
    options: [
      "a. 12-13",
      "b. 87-88",
      "c. 92-93",
      "d. 95-96"
    ],
    correctAnswer: 1
  },
  {
    id: 138,
    question: "A modern rice mill of 4 tonne/day capacity is milling parboiled paddy under optimum operating conditions. The paddy has 20% rice husk and 4% bran without fine broken and germs. The bran has 20% oil. If 98% oil is extracted by solvent extraction method, calculate how much bran oil (in kg) will be available during a month of 30 days.",
    options: [
      "a. 3463",
      "b. 153",
      "c. 752",
      "d. 3840"
    ],
    correctAnswer: 2
  },
  {
    id: 139,
    question: "In batch refining process, agitator must be operated at low speed for removal of _____.",
    options: [
      "a. soap",
      "b. pigments",
      "c. free fatty acids",
      "d. alkali"
    ],
    correctAnswer: 2
  },
  {
    id: 140,
    question: "_____ is provided to permit the drainage of oil in screw-press oil extractor.",
    options: [
      "a. Cake bars",
      "b. Spacer",
      "c. Choke",
      "d. Ring"
    ],
    correctAnswer: 1
  },
  {
    id: 141,
    question: "In a dry bleaching system, oil is cooled up to _____ °C by using cold water.",
    options: [
      "a. 20",
      "b. 30",
      "c. 40",
      "d. 50"
    ],
    correctAnswer: 2
  },
  {
    id: 142,
    question: `Match the oxidation stages given in Column I with the products in Column II with respect to food fats & oils.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Primary</td>
    <td style="padding: 8px;">i. Ketones</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Secondary</td>
    <td style="padding: 8px;">ii. Epoxides</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Tertiary</td>
    <td style="padding: 8px;">iii. Hydroperoxides</td>
  </tr>
</table>`,
    options: [
      "a. 1– ii; 2– iii; 3– i",
      "b. 1-ii; 2- i; 3 – iii",
      "c. 1 – iii; 2 – ii; 3 – i",
      "d. 1-iii; 2- i; 3– ii"
    ],
    correctAnswer: 3
  },
  {
    id: 143,
    question: `Which of the following equations correctly represents the relationship between mass transfer coefficient and diffusion coefficient?

k = D/δ

k = D×δ

k = D²/δ

k = D/δ²

Where,
k = mass transfer coefficient
D = diffusion coefficient
δ = thickness of the boundary layer`,
    options: [
      "a. Only 1",
      "b. Only 2",
      "c. Only 3",
      "d. Only 4"
    ],
    correctAnswer: 0
  },
  {
    id: 144,
    question: `Examine the following diagram and identify the equipment illustrated.

<img src="/images/144.jpg" alt="Food processing equipment" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. Plate heat exchanger",
      "b. Shell and tube heat exchanger",
      "c. Scraped surface heat exchanger",
      "d. Tubular heat exchanger"
    ],
    correctAnswer: 3
  },
  {
    id: 145,
    question: "Which of the following compounds works as an antioxidant by breaking the chain in autooxidation?",
    options: [
      "a. Vitamin K",
      "b. Ubiquinone",
      "c. α-Tocopheryl quinone",
      "d. Ascorbyl palmitate"
    ],
    correctAnswer: 3
  },
  {
    id: 146,
    question: `Which of the following statements is/are false for the microencapsulation process?

1. Spray drying is the most widely used microencapsulation method where the particles greater than 100 microns are achieved.

2. The major disadvantage of spray drying process is its lower solubility.

3. Emulsion preparation is a pre-step for microencapsulation.`,
    options: [
      "a. Only 3",
      "b. 1 & 2",
      "c. 2 & 3",
      "d. 1 & 3"
    ],
    correctAnswer: 1
  },
  {
    id: 147,
    question: `Match the antioxidant given in Column I with its source in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Retinoids</td>
    <td style="padding: 8px;">i. Fish</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Ascorbic acid</td>
    <td style="padding: 8px;">ii. Coffee beans</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Selenium</td>
    <td style="padding: 8px;">iii. Cabbage</td>
  </tr>
  <tr>
    <td style="padding: 8px;">4. Melanic acid</td>
    <td style="padding: 8px;">iv. Ginkgo biloba</td>
  </tr>
</table>`,
    options: [
      "a. 1-iv, 2-ii, 3-iii, 4-i",
      "b. 1-iv, 2-iii, 3-i, 4-ii",
      "c. 1-ii, 2-i, 3-iv, 4-iii",
      "d. 1-ii, 2-iv, 3-iii, 4-i"
    ],
    correctAnswer: 1
  },
  {
    id: 147,
    question: `Match the production process given in Column I with the respective material in the Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">A. Production of triangular prismatic shaped nanoparticles</td>
    <td style="padding: 8px;">(i) Nano-biosensor</td>
  </tr>
  <tr>
    <td style="padding: 8px;">B. Produced by interfacial polymerization & electron spinning</td>
    <td style="padding: 8px;">(ii) Nano-laminates</td>
  </tr>
  <tr>
    <td style="padding: 8px;">C. Produced by using layer-by-layer (LBL) deposition technique</td>
    <td style="padding: 8px;">(iii) Nano-fibres</td>
  </tr>
</table>`,
    options: [
      "a. A-(i), B-(iii) C-(ii)",
      "b. A-(ii), B-(iii) C-(i)",
      "c. A-(iii), B-(ii) C-(i)",
      "d. A-(iii), B-(i) C-(ii)"
    ],
    correctAnswer: 0
  },
  {
    id: 148,
    question: "Which of the following is not a proposed release mechanism for microencapsulates (microcapsules)?",
    options: [
      "a. Enzyme attack",
      "b. Melting the wall",
      "c. Slow integration",
      "d. Shear stress"
    ],
    correctAnswer: 2
  },
  {
    id: 149,
    question: "Coacervation process of microencapsulation works on the principle of _____.",
    options: [
      "a. Rayleigh instability",
      "b. Phase separation",
      "c. Volumetric heating",
      "d. Pressure separation"
    ],
    correctAnswer: 1
  },
  {
    id: 150,
    question: `Match the antioxidant given in Column I with its chemical nature/type in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Tocopherol</td>
    <td style="padding: 8px;">i. Oxygen scavenger</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Ascorbic acid</td>
    <td style="padding: 8px;">ii. Hindered phenols</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Citric acid</td>
    <td style="padding: 8px;">iii. Phenols</td>
  </tr>
  <tr>
    <td style="padding: 8px;">4. Hydroquinone</td>
    <td style="padding: 8px;">iv. Metal chelator</td>
  </tr>
</table>`,
    options: [
      "a. 1-i, 2-ii, 3-iii, 4-iv",
      "b. 1-iv, 2-iii, 3-i, 4-ii",
      "c. 1-ii, 2-i, 3-iv, 4-iii",
      "d. 1-ii, 2-iv, 3-iii, 4-i"
    ],
    correctAnswer: 2
  },
  {
    id: 151,
    question: "Which of the following is not a natural metal chelator?",
    options: [
      "a. Transferrin",
      "b. Glutathione peroxidase",
      "c. Lactoferrin",
      "d. Albumin"
    ],
    correctAnswer: 1
  },
  {
    id: 152,
    question: "_____ is the method of microencapsulation in which vertical screw-less process is employed which produces surface-washed particles.",
    options: [
      "a. Melt extrusion",
      "b. Melt injection",
      "c. Centrifugal extrusion",
      "d. Core extrusion"
    ],
    correctAnswer: 0
  },
  {
    id: 153,
    question: `Which among following is the correct example of microencapsulation?

1. Liposome entrapment of vitamin D for milk fortification.

2. Entrapment of Lactobacillus spp. for probiotic ice cream.

3. To control hygroscopic property of salt and sugar.`,
    options: [
      "a. Only 1",
      "b. Only 2 and 3",
      "c. Only 1 and 2",
      "d. All 1, 2 and 3"
    ],
    correctAnswer: 3
  },
  {
    id: 154,
    question: `Match the type of polymerization given in Column I with its process principle in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. In-situ</td>
    <td style="padding: 8px;">i. A core material is imbedded in a polymeric matrix during formation of particles.</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Interfacial</td>
    <td style="padding: 8px;">ii. The direct polymerization of single monomer is carried out on particle surface.</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Matrix</td>
    <td style="padding: 8px;">iii. The two reactants in a poly condensation meet at an interface and react rapidly.</td>
  </tr>
</table>`,
    options: [
      "a. 1-iii, 2-ii, 3-i",
      "b. 1-ii, 2-iii, 3-i",
      "c. 1-ii, 2-i, 3-iii",
      "d. 1-iii, 2-i, 3-ii"
    ],
    correctAnswer: 1
  },
  {
    id: 155,
    question: "In top down approach, which of the following method is not used to generate nano level structures?",
    options: [
      "a. Nanolithography",
      "b. Precision engineering",
      "c. Milling",
      "d. Self-assembling"
    ],
    correctAnswer: 3
  },
  {
    id: 156,
    question: "Which of the following uses a cantilever to scan the surface of the food materials?",
    options: [
      "a. Atomic force microscopy",
      "b. Scanning probe microscopy",
      "c. Scanning tunneling microscopy",
      "d. Interfacial force microscopy"
    ],
    correctAnswer: 0
  },
  {
    id: 157,
    question: "The slope of the force-deformation curve obtained by the atomic force microscope (AFM) can be used as a measure of the _____.",
    options: [
      "a. Modulus of elasticity at the sample surface",
      "b. Modulus of elasticity at the molecular level",
      "c. Modulus of rigidity at the sample surface",
      "d. Modulus of rigidity at the molecular level"
    ],
    correctAnswer: 0
  },
  {
    id: 158,
    question: "Which among the following methods is most commonly used for developing nanofibers?",
    options: [
      "a. Spray drying",
      "b. Coacervation",
      "c. Extrusion",
      "d. Electrospinning"
    ],
    correctAnswer: 3
  },
  {
    id: 159,
    question: "For a particle to be called nanoparticle, its size should not exceed _____ nm.",
    options: [
      "a. 1",
      "b. 10",
      "c. 100",
      "d. 1000"
    ],
    correctAnswer: 2
  },
  {
    id: 160,
    question: `Match the wall material for encapsulation given in Column I with its nature/type in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Ethyl cellulose</td>
    <td style="padding: 8px;">i. Wax and lipid</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Methyl cellulose</td>
    <td style="padding: 8px;">ii. Water soluble resin</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Stearic acid</td>
    <td style="padding: 8px;">iii. Water insoluble resin</td>
  </tr>
</table>`,
    options: [
      "a. 1-iii, 2-ii, 3-i",
      "b. 1-ii, 2-iii, 3-i",
      "c. 1-ii, 2-i, 3-iii",
      "d. 1-iii, 2-i, 3-ii"
    ],
    correctAnswer: 0
  },
  {
    id: 161,
    question: `Assertion (A): In modified atmosphere packaging (MAP), reducing O₂ concentration around fresh produce slows its respiration rate.

Reason (R): Low O₂ levels cause aerobic respiration to increase in fresh produce.`,
    options: [
      "a. Both A and R are correct, and R is the correct explanation of A.",
      "b. Both A and R are correct, but R is not the correct explanation of A.",
      "c. A is correct, but R is incorrect.",
      "d. A is incorrect, but R is correct."
    ],
    correctAnswer: 2
  },
  {
    id: 162,
    question: `Match the type of respiratory quotient (RQ) condition given in Column I with the correct value or range given in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Substrate is a lipid</td>
    <td style="padding: 8px;">i. >1.0</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Substrate is an acid</td>
    <td style="padding: 8px;">ii. < 1.0</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Normal RQ values</td>
    <td style="padding: 8px;">iii. >> 1.0</td>
  </tr>
  <tr>
    <td style="padding: 8px;">4. Anaerobic respiration</td>
    <td style="padding: 8px;">iv. 0.7-1.3</td>
  </tr>
</table>`,
    options: [
      "a. 1-ii, 2-iv, 3-i, 4-iii",
      "b. 1-iii, 2-iv, 3-i, 4-ii",
      "c. 1-ii, 2-i, 3-iv, 4-iii",
      "d. 1-iv, 2-ii, 3-iii, 4-i"
    ],
    correctAnswer: 2
  },
  {
    id: 163,
    question: "Calculate the diffusion flux (kg mol m⁻² s⁻¹).",
    options: [
      "a. 1.06 × 10⁻⁶",
      "b. 1.06 × 10⁻⁷",
      "c. 1.06 × 10⁻⁸",
      "d. 1.06 × 10⁻⁹"
    ],
    correctAnswer: 3
  },
  {
    id: 164,
    question: "Calculate the loss of water vapour (g/day) at steady state.",
    options: [
      "a. 0.66",
      "b. 6.26",
      "c. 0.33",
      "d. 0.05"
    ],
    correctAnswer: 2
  },
  {
    id: 165,
    question: "In the passive modification technique of MAP, how is the steady-state gas equilibrium achieved within the package?",
    options: [
      "a. By vacuuming the package and refilling with gas",
      "b. Through product respiration balancing gas exchange",
      "c. By sealing in pure oxygen",
      "d. By adding CO₂ absorbers"
    ],
    correctAnswer: 1
  },
  {
    id: 166,
    question: "Which of the following statements correctly stated the acceding order of the rate of ripening?",
    options: [
      "a. Banana < Spinach < Broccoli < Mushroom",
      "b. Soft fruit < Spinach < Mushroom < Banana",
      "c. Broccoli < Potatoes < Mushroom < Banana",
      "d. Potatoes < Broccoli < Spinach < Banana"
    ],
    correctAnswer: 3
  },
  {
    id: 167,
    question: `Match the fruits given in Column I with the minimum O₂ tolerated (%) during controlled/modified atmosphere (CA/MA) storage given in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Citrus fruits</td>
    <td style="padding: 8px;">i. 0.5</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Avocado</td>
    <td style="padding: 8px;">ii. 2.0</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Apricot</td>
    <td style="padding: 8px;">iii. 3.0</td>
  </tr>
  <tr>
    <td style="padding: 8px;">4. Tree nuts</td>
    <td style="padding: 8px;">iv. 5.0</td>
  </tr>
</table>`,
    options: [
      "a. 1-ii, 2-iv, 3-i, 4-iii",
      "b. 1-iv, 2-iii, 3-ii, 4-i",
      "c. 1-ii, 2-i, 3-iv, 4-iii",
      "d. 1-iv, 2-ii, 3-iii, 4-i"
    ],
    correctAnswer: 1
  },
  {
    id: 168,
    question: "Which substance is used as an ethylene absorber in active packaging to prevent the ripening of fruits?",
    options: [
      "a. Iron powder",
      "b. Potassium permanganate (KMnO₄)",
      "c. Magnesium oxide",
      "d. Activated charcoal"
    ],
    correctAnswer: 1
  },
  {
    id: 169,
    question: `Match the edible coating material given in Column I with its characteristic property in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Chitosan</td>
    <td style="padding: 8px;">i. Forms a thick layer, often disliked by consumers</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Alginate</td>
    <td style="padding: 8px;">ii. Poor water resistance</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Wax</td>
    <td style="padding: 8px;">iii. High water permeability</td>
  </tr>
  <tr>
    <td style="padding: 8px;">4. Starch</td>
    <td style="padding: 8px;">iv. Good barrier for oxygen but low for moisture</td>
  </tr>
</table>`,
    options: [
      "a. 1-ii, 2-iv, 3-i, 4-iii",
      "b. 1-iv, 2-iii, 3-ii, 4-i",
      "c. 1-ii, 2-i, 3-iv, 4-iii",
      "d. 1-iv, 2-ii, 3-iii, 4-i"
    ],
    correctAnswer: 0
  },
  {
    id: 170,
    question: "What is the role of equilibrium spreading coefficient (Ws) in edible coatings?",
    options: [
      "a. It determines colour stability.",
      "b. It assesses flavor retention.",
      "c. It controls wettability of the coating.",
      "d. It indicates microbial activity."
    ],
    correctAnswer: 2
  },
  {
    id: 171,
    question: `Match the following edible coating materials given in Column I with their common applications in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Alginate</td>
    <td style="padding: 8px;">i. Coating for confectioneries</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Chitosan</td>
    <td style="padding: 8px;">ii. Coating for seafood</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Wax</td>
    <td style="padding: 8px;">iii. Coating for fruits and vegetables</td>
  </tr>
  <tr>
    <td style="padding: 8px;">4. Starch</td>
    <td style="padding: 8px;">iv. Coating films for fresh produce</td>
  </tr>
</table>`,
    options: [
      "a. 1-ii, 2-iv, 3-i, 4-iii",
      "b. 1-iv, 2-iii, 3-ii, 4-i",
      "c. 1-ii, 2-i, 3-iv, 4-iii",
      "d. 1-iv, 2-ii, 3-iii, 4-i"
    ],
    correctAnswer: 3
  },
  {
    id: 172,
    question: "Calculate the water vapor permeability coefficient in kg m/(m² s Pa) of plastic film having the surface area 12 cm² and thickness 12 μm. The partial pressure of water vapour outside the plastic package is 2 kPa and the partial pressure of water vapour inside the plastic package is 0 kPa. The rate of water vapour transfer is 4 × 10⁻¹⁰ kg/s.",
    options: [
      "a. 1 × 10¹⁵",
      "b. 2 × 10⁻¹⁵",
      "c. 1 × 10⁻¹⁵",
      "d. 2 × 10¹⁵"
    ],
    correctAnswer: 1
  },
  {
    id: 173,
    question: "A 5 mm thick plastic package made of LDPE has a surface area of 500 cm². Partial pressure difference of oxygen across the film is 0.21 atm and permeability coefficient is 4 × 10⁻⁸ cm³ cm/cm² s atm. Calculate the rate of oxygen transfer (cm³/s) inside the package.",
    options: [
      "a. 2.1 × 10⁻⁶",
      "b. 4.2 × 10⁻⁶",
      "c. 8.4 × 10⁻⁶",
      "d. 2.1 × 10⁻⁵"
    ],
    correctAnswer: 2
  },
  {
    id: 174,
    question: "A perishable food material is packaged in LDPE having surface area 350 cm² and thickness of 0.2 cm. The permeability coefficient of LDPE is 3.18 × 10⁻⁸ cm³ cm/cm² s atm. The partial pressure difference of oxygen across the film is 0.25 atm. The food becomes rancid when level of oxygen inside package is 2.2 cm³. What is the shelf life (days) of food material if there is no oxygen content inside the package at the zero day of storage?",
    options: [
      "a. 2.5-3.0",
      "b. 1.5-2.0",
      "c. 3.0-3.5",
      "d. 2.0-2.5"
    ],
    correctAnswer: 1
  },
  {
    id: 175,
    question: "A stream of ambient air flowing at 2 kg/s at 27°C is mixed with another stream of exhaust air of a dryer flowing at 1.5 kg/s at 65°C temperature. The enthalpy of ambient air is 60 kJ/kg and enthalpy of exhaust air is 310 kJ/kg. Calculate the enthalpy (kJ/kg dry air) of the mixed air stream.",
    options: [
      "a. 202-203",
      "b. 404-405",
      "c. 167-168",
      "d. 145-146"
    ],
    correctAnswer: 2
  },
  {
    id: 176,
    question: `Study the following diagram and identify the process shown.

<img src="/images/176.jpg" alt="Food preservation system" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. Thermal processing",
      "b. Non-thermal processing",
      "c. Chemical preservation",
      "d. Physical preservation"
    ],
    correctAnswer: 0
  },
  {
    id: 177,
    question: "Calculate overall heat transfer coefficient (W/m² K).",
    options: [
      "a. 2.0-2.1",
      "b. 2.5-2.6",
      "c. 0.3-0.4",
      "d. 1.1-1.2"
    ],
    correctAnswer: 1
  },
  {
    id: 178,
    question: "Calculate the rate of heat transfer per unit area (W/m²).",
    options: [
      "a. 90-92",
      "b. 100-102",
      "c. 111-113",
      "d. 50-52"
    ],
    correctAnswer: 1
  },
  {
    id: 179,
    question: `Which of the below given statements about CA storage is/are correct?

1. CA storage uses a nitrogen generator to control O₂ levels.

2. O₂ scrubbers are used when CO₂ levels are too low.

3. Ethylene decomposers help manage ethylene levels to control ripening.

4. RH levels in CA storage should generally be kept above 90%.`,
    options: [
      "a. 1 and 2",
      "b. 1, 3, and 4",
      "c. 2, 3, and 4",
      "d. 3 and 4"
    ],
    correctAnswer: 1
  },
  {
    id: 180,
    question: "What is the main advantage of using Palliflex units in CA storage?",
    options: [
      "a. High capacity for storing produce",
      "b. The ability to set different gas conditions for each pallet",
      "c. Automatic temperature control",
      "d. Low maintenance cost"
    ],
    correctAnswer: 1
  },
  {
    id: 181,
    question: `Which statements about respiration and shelf life of produce is/are correct?

1. Climacteric fruits experience a rise in respiration during ripening.

2. Non-climacteric fruits have a peak respiration rate at ripening.

3. Higher CO₂ levels can reduce respiration rate.

4. Ripening in climacteric fruits is associated with ethylene production.`,
    options: [
      "a. 1 and 3",
      "b. 1, 3, and 4",
      "c. 2 and 4",
      "d. 2, 3 and 4"
    ],
    correctAnswer: 1
  },
  {
    id: 182,
    question: "What is the primary factor that contributes to grain losses during storage in India?",
    options: [
      "a. Inadequate lighting",
      "b. Moisture and temperature fluctuations",
      "c. High cost of storage",
      "d. Excessive fumigation"
    ],
    correctAnswer: 1
  },
  {
    id: 183,
    question: `Match the grain storage structures given in Column I with its characteristics in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">A. Pusa bin</td>
    <td style="padding: 8px;">i. Underground storage lined to prevent water ingress</td>
  </tr>
  <tr>
    <td style="padding: 8px;">B. Cap storage</td>
    <td style="padding: 8px;">ii. Low-density polyethylene structure for moisture insulation</td>
  </tr>
  <tr>
    <td style="padding: 8px;">C. Pit silo</td>
    <td style="padding: 8px;">iii. Short-term, open storage method</td>
  </tr>
  <tr>
    <td style="padding: 8px;">D. Conventional godown</td>
    <td style="padding: 8px;">iv. Bagged storage with brick or stone walls</td>
  </tr>
</table>`,
    options: [
      "a. A-ii, B-iii, C-i, D-iv",
      "b. A-iv, B-iii, C-ii, D-i",
      "c. A-i, B-ii, C-iv, D-iii",
      "d. A-iii, B-i, C-iv, D-ii"
    ],
    correctAnswer: 0
  },
  {
    id: 183,
    question: "Identify the correct design parameter for air flow rate in grain aeration.",
    options: [
      "a. Sheds require 0.8 l/s/ton",
      "b. Silos require 1.6 l/s/ton",
      "c. Sheds require 1.6 l/s/ton",
      "d. Silos require 0.07 m³/min/ton"
    ],
    correctAnswer: 2
  },
  {
    id: 184,
    question: `Which statements about grain storage are correct?

1. Moisture content is the most critical factor

2. Temperature control prevents insect infestation

3. Aeration systems remove excess heat

4. Fumigation is never necessary`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 1
  },
  {
    id: 185,
    question: "A cold storage plant is used for storing 100 tonnes of apples in perforated plastic crates. During the storage, apples are cooled down from 28°C to storage temperature of 2°C. The specific heat of apple is 0.874 kcal/kg°C. If the required cooling is attained in 12 h, the refrigeration plant capacity (in tons) is _____.",
    options: [
      "a. 189-191",
      "b. 62-64",
      "c. 18-20",
      "d. 40-42"
    ],
    correctAnswer: 1
  },
  {
    id: 186,
    question: `Assertion (A): Ozone is a suitable alternative fumigant for grain disinfestation.

Reason (R): Ozone is a strong oxidizing agent with a higher oxidation potential than chlorine and does not leave harmful residues.`,
    options: [
      "a. Both A and R are correct, and R is the correct explanation of A.",
      "b. Both A and R are correct, but R is not the correct explanation of A.",
      "c. A is correct, but R is incorrect.",
      "d. A is incorrect, but R is correct."
    ],
    correctAnswer: 0
  },
  {
    id: 187,
    question: "For a particular mass of grain stored in a bin, the angle of internal friction of the grain is 30°. The ratio of normal pressure to the applied pressure within the bin is _____.",
    options: [
      "a. 0.33",
      "b. 0.21",
      "c. 0.42",
      "d. 0.29"
    ],
    correctAnswer: 0
  },
  {
    id: 188,
    question: `Analyze the following diagram and identify the equipment illustrated.

<img src="/images/188.jpg" alt="Food processing equipment" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. Spray dryer",
      "b. Freeze dryer",
      "c. Drum dryer",
      "d. Fluidized bed dryer"
    ],
    correctAnswer: 1
  },
  {
    id: 189,
    question: `Examine the following diagram and identify the process it represents.

<img src="/images/189.jpg" alt="Food processing system" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" />`,
    options: [
      "a. Batch processing",
      "b. Continuous processing",
      "c. Semi-continuous processing",
      "d. Intermittent processing"
    ],
    correctAnswer: 0
  },
  {
    id: 190,
    question: `Which statements about hyperspectral image analysis are true?

1. It combines spectral and spatial information

2. It only works with visible light

3. It can detect chemical composition

4. It requires physical contact with food`,
    options: [
      "a. 1 and 3",
      "b. 2 and 4",
      "c. 1 and 2",
      "d. 3 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 191,
    question: "A silo of 10 m diameter and 20 m height is loaded with food grains of density 800 kg·m⁻³. If the coefficient of friction and pressure ratio be 0.4 each, then what will be the lateral pressure (kN·m⁻²) when the silo is filled up to 3/4ᵗʰ height?",
    options: [
      "a. 54.7",
      "b. 30.2",
      "c. 27.4",
      "d. 35.41"
    ],
    correctAnswer: 1
  },
  {
    id: 192,
    question: `Match the flowability of food materials given in Column I with the values of flow function presented in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Cohesive</td>
    <td style="padding: 8px;">A. 4-10</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Not flowing</td>
    <td style="padding: 8px;">B. >10</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Easy flowing</td>
    <td style="padding: 8px;">C. 2-4</td>
  </tr>
  <tr>
    <td style="padding: 8px;">4. Free flowing</td>
    <td style="padding: 8px;">D. <1</td>
  </tr>
</table>`,
    options: [
      "a. 1-B, 2-A, 3-D, 4-C",
      "b. 1-D, 2-B, 3-C, 4-A",
      "c. 1-C, 2-D, 3-A, 4-B",
      "d. 1-B, 2-C, 3-D, 4-A"
    ],
    correctAnswer: 2
  },
  {
    id: 193,
    question: "For an air flow rate of 2 m³/min, the linear air velocity in the intergranular space in a circular storage bin having 2 m diameter and 0.3 void fractions will be _____ m/s.",
    options: [
      "a. 0.21-0.34",
      "b. 0.024-0.027",
      "c. 0.35-0.41",
      "d. 0.029-0.038"
    ],
    correctAnswer: 3
  },
  {
    id: 194,
    question: "Which of the following options shows the correct trend in terms of their decreasing oxidation potential?",
    options: [
      "a. Ozone > Peroxide > Hyper chlorides > Free chlorine",
      "b. Ozone > Hyper chlorides > Peroxide > Free chlorine",
      "c. Peroxide > Hyper chlorides > Free chlorine > Ozone",
      "d. Free chlorine > Hyper chlorides > Peroxide > Ozone"
    ],
    correctAnswer: 0
  },
  {
    id: 195,
    question: "A cylindrical silo of 5 m diameter and 20 m height is filled with wheat. Calculate the height (m) of the upper cone of stored wheat if the minimum and maximum angles of internal friction are given by 25° and 30°, respectively. The maximum angle of friction on smooth sheeting is 18° and angle of repose is 25°.",
    options: [
      "a. 1.17",
      "b. 0.81",
      "c. 1.44",
      "d. 0.72"
    ],
    correctAnswer: 0
  },
  {
    id: 196,
    question: "Two tons of grain stored in a bin is cooled by aeration with ambient air at 27°C at a volumetric flow rate of 0.20 m³/min ton. The specific volume of air at 27°C is 0.92 m³ kg⁻¹. The specific heat of grain and air are 1.67 and 1.0 kJ kg⁻¹ K⁻¹, respectively. Calculate the time required (h) for cooling the grain in the bin.",
    options: [
      "a. 521-522",
      "b. 256-257",
      "c. 331-332",
      "d. 231-232"
    ],
    correctAnswer: 1
  },
  {
    id: 197,
    question: `Match the non-destructive testing method given in Column I with its application in food analysis in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">A. Near infrared spectroscopy</td>
    <td style="padding: 8px;">i. Detects chemical composition on the surface of samples</td>
  </tr>
  <tr>
    <td style="padding: 8px;">B. X-ray photoelectron spectroscopy</td>
    <td style="padding: 8px;">ii. Measures fat, protein, and lactose in milk</td>
  </tr>
  <tr>
    <td style="padding: 8px;">C. Fourier transform infrared spectroscopy</td>
    <td style="padding: 8px;">iii. Identifies molecular structure changes</td>
  </tr>
  <tr>
    <td style="padding: 8px;">D. Raman spectroscopy</td>
    <td style="padding: 8px;">iv. Detects unsaturation levels in fats and oils</td>
  </tr>
</table>`,
    options: [
      "a. A-ii, B-i, C-iv, D-iii",
      "b. A-i, B-ii, C-iii, D-iv",
      "c. A-ii, B-i, C-iii, D-iv",
      "d. A-iii, B-iv, C-ii, D-i"
    ],
    correctAnswer: 2
  },
  {
    id: 198,
    question: "Which among the following is not a common moisture proofing material for storing of grains?",
    options: [
      "a. Aluminum foil",
      "b. Asphalt",
      "c. Foam polystyrene",
      "d. Polyethylene"
    ],
    correctAnswer: 2
  },
  {
    id: 199,
    question: "Which of the following best describes biomimetic methods in food quality analysis?",
    options: [
      "a. They use machine learning exclusively",
      "b. They replicate human sensory mechanisms",
      "c. They enhance the visual quality of food",
      "d. They require destructive sampling"
    ],
    correctAnswer: 1
  },
  {
    id: 200,
    question: "Which technology is best suited for detecting internal insect infestations within grain kernels?",
    options: [
      "a. CO₂ sensing",
      "b. X-ray imaging",
      "c. Thermal imaging",
      "d. Acoustic sensors"
    ],
    correctAnswer: 1
  },
  {
    id: 201,
    question: `Assertion (A): Bio-fortification is a sustainable approach to addressing nutrient deficiencies.

Reason (R): Bio-fortification incorporates nutrients directly into crops through soil and plant breeding techniques.`,
    options: [
      "a. Both A and R are correct, and R is the correct explanation of A.",
      "b. Both A and R are correct, but R is not the correct explanation of A.",
      "c. A is correct, but R is incorrect.",
      "d. A is incorrect, but R is correct."
    ],
    correctAnswer: 0
  },
  {
    id: 202,
    question: "Which fortification type primarily targets a general population at risk of deficiency?",
    options: [
      "a. Market-driven fortification",
      "b. Targeted fortification",
      "c. Mass fortification",
      "d. Food-to-food fortification"
    ],
    correctAnswer: 2
  },
  {
    id: 203,
    question: "For the salt to be iodized at the manufacture level, the iodine content must be in the range of _____.",
    options: [
      "a. 15 to 30 ppb",
      "b. 15 to 30 ppm",
      "c. 20 to 30 ppb",
      "d. 20 to 30 ppm"
    ],
    correctAnswer: 3
  },
  {
    id: 204,
    question: "Which of the following statements is false?",
    options: [
      "a. Standardization is used as a method of addition to compensate for natural or seasonal variations in nutrient content.",
      "b. Substitution is the nutrient addition to substitute product to the levels found in the food which resemble the food and which it is intended to replace partially or completely.",
      "c. Enrichment is defined as increasing the level of nutrients present to make the food a 'richer' source.",
      "d. Restoration process involves the unit operation involved in preventing losses of nutrient during heat treatment or leaching."
    ],
    correctAnswer: 3
  },
  {
    id: 205,
    question: `Match the micronutrients given in Column I with its role in blood formation in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">I. Vitamin B12</td>
    <td style="padding: 8px;">i. Formation of RBC</td>
  </tr>
  <tr>
    <td style="padding: 8px;">II. Folic acid</td>
    <td style="padding: 8px;">ii. Formation of haemoglobin</td>
  </tr>
  <tr>
    <td style="padding: 8px;">III. Iron</td>
    <td style="padding: 8px;">iii. Multiplication & maturation of RBC</td>
  </tr>
</table>`,
    options: [
      "a. I-i, II-iii, III-ii",
      "b. I-iii, II-ii, III-i",
      "c. I-iii, II-i, III-ii",
      "d. I-ii, II-iii, III-i"
    ],
    correctAnswer: 0
  },
  {
    id: 206,
    question: "What is the primary reason for extrusion technology being preferred for fortifying rice with iron?",
    options: [
      "a. It reduces the need for cooking.",
      "b. It simplifies the overall fortification process.",
      "c. It retains nutrient content during washing and cooking.",
      "d. It decreases the cost of rice production."
    ],
    correctAnswer: 2
  },
  {
    id: 207,
    question: "Select the correct process flow chart for the preparation of fortified rice kernels.",
    options: [
      "a. Pulverizing → Blending & Conditioning → Extrusion → Drying → Polishing → Mixing → Packaging",
      "b. Mixing → Blending & Conditioning → Pulverizing → Extrusion → Drying → Polisher → Packaging",
      "c. Blending & Conditioning → Pulverizing → Extrusion → Drying → Mixing → Polisher → Packaging",
      "d. Pulverizing → Mixing → Extrusion → Drying → Polisher → Blending & Conditioning → Packaging"
    ],
    correctAnswer: 0
  },
  {
    id: 208,
    question: "What is the main objective of \"Nutri Dal\" production?",
    options: [
      "a. To create a cheaper dal alternative.",
      "b. To provide a balanced source of essential amino acids (EAA).",
      "c. To increase protein content in pulses.",
      "d. To extend the shelf life of pulses."
    ],
    correctAnswer: 1
  },
  {
    id: 209,
    question: "Which essential amino acid is commonly lacking in pulses and is supplemented in Nutri Dal?",
    options: [
      "a. Lysine",
      "b. Threonine",
      "c. Tryptophan",
      "d. Methionine"
    ],
    correctAnswer: 3
  },
  {
    id: 210,
    question: `Which of the linear programming problems (LPP) forms, among the given options, corresponds correctly to the equation given below?

Maximize Z=c₁x₁+c₂x₂+c₃x₃+...cₙxₙ
subject to the constraints
a₁₁x₁+a₁₂x₂+....+a₁ₙxₙ ≤ b₁
a₂₁x₁+a₂₂x₂+....+a₂ₙxₙ ≤ b₂
......................................
aₘ₁x₁+aₘ₂x₂+...+aₘₙxₙ ≤ bₘ
and the non-negativity restrictions
x₁, x₂, x₃, ...xₙ ≥ 0`,
    options: [
      "a. Canonical form of LPP",
      "b. Standard form of LPP",
      "c. Equations are for graphical representation of LPP",
      "d. Invalid LPP equations"
    ],
    correctAnswer: 0
  },
  {
    id: 211,
    question: "What is the purpose of steaming or boiling rice noodles during processing?",
    options: [
      "a. To increase the shelf life",
      "b. To enhance flavour",
      "c. To gelatinize the starch fully",
      "d. To add moisture"
    ],
    correctAnswer: 2
  },
  {
    id: 212,
    question: "Which of the following is NOT an ideal characteristic of RTE food paste?",
    options: [
      "a. Light brown to creamy color",
      "b. Gritty texture",
      "c. High protein and micronutrient content",
      "d. Easy to squeeze out of a sachet"
    ],
    correctAnswer: 1
  },
  {
    id: 213,
    question: `Match the processing steps in the RTE food paste production given in Column I with its primary purpose in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">A. Roasting</td>
    <td style="padding: 8px;">i. Reduces anti-nutritional factors</td>
  </tr>
  <tr>
    <td style="padding: 8px;">B. Dehulling</td>
    <td style="padding: 8px;">ii. Creates a smooth, uniform texture</td>
  </tr>
  <tr>
    <td style="padding: 8px;">C. Homogenization</td>
    <td style="padding: 8px;">iii. Provides protection from environmental contamination</td>
  </tr>
  <tr>
    <td style="padding: 8px;">D. Packaging</td>
    <td style="padding: 8px;">iv. Improves flavour through Maillard reactions</td>
  </tr>
</table>`,
    options: [
      "a. A-iv, B-i, C-ii, D-iii",
      "b. A-iii, B-ii, C-i, D-iv",
      "c. A-ii, B-iv, C-iii, D-i",
      "d. A-i, B-iii, C-iv, D-ii"
    ],
    correctAnswer: 0
  },
  {
    id: 214,
    question: "Which among the following is the proper sequence of steps involved in CIP process?",
    options: [
      "a. Elimination of accumulated organic matter > Elimination of mineral deposits and neutralization of any residual caustic > Pushing out residual acid and salts > Washing off residual caustic",
      "b. Pushing out residual acid and salts > Elimination of mineral deposits and neutralization of any residual caustic > Washing off residual caustic > Elimination of accumulated organic matter",
      "c. Elimination of accumulated organic matter > Wash off residual caustic > Elimination of mineral deposits and neutralization of any residual caustic > Pushing out residual acid and salts",
      "d. Inactivation of microorganisms > Elimination of accumulated organic matter > Washing off residual caustic > Pushing out residual acid and salts > Elimination of mineral deposits and neutralization of any residual caustic"
    ],
    correctAnswer: 2
  },
  {
    id: 215,
    question: "Arrange the following iron compounds, used for food fortification purposes, in terms in decreasing order of their relative bioavailability?",
    options: [
      "a. Ferrous gluconate 12.0 g/dl",
      "b. <11.0 g/dl",
      "c. >12.0 g/dl",
      "d. 11.0-12.0 g/dl"
    ],
    correctAnswer: 1
  },
  {
    id: 218,
    question: "Which of the following amino acid is essential for children but not for adults and is included in \"Nutri Dal\"?",
    options: [
      "a. Histidine",
      "b. Valine",
      "c. Lysine",
      "d. Arginine"
    ],
    correctAnswer: 0
  },
  {
    id: 219,
    question: `Which of the following statements with respect to the ingredient 'improver' in noodles is/are correct?

1. Improvers are used at about 0.1 to 0.5% of flour weight.

2. Improvers enhance noodle flavour and colour.

3. Improvers are primarily used to improve the noodle texture.

4. Improvers are added to increase the fiber content in noodles.`,
    options: [
      "a. 1, 2 and 3",
      "b. 2 and 3",
      "c. 1 and 3",
      "d. 1, 2 and 4"
    ],
    correctAnswer: 2
  },
  {
    id: 220,
    question: `Which of the following statements with respect to the role of aflatoxins in food safety are true?

1. Aflatoxins are produced by Aspergillus species.

2. They are only harmful in large doses.

3. They can predispose individuals to liver cancer.

4. Storing peanuts in a cool, dry environment can help prevent aflatoxin contamination.`,
    options: [
      "a. 1, 3, and 4",
      "b. 1 and 2",
      "c. 2 and 4",
      "d. 1, 2 and 3"
    ],
    correctAnswer: 0
  },
  {
    id: 221,
    question: `Match the functional component given in the Column I with its associated health benefit in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">A. ω-3 fatty acids</td>
    <td style="padding: 8px;">i. Improves gut health</td>
  </tr>
  <tr>
    <td style="padding: 8px;">B. Phytochemicals</td>
    <td style="padding: 8px;">ii. Reduces oxidative stress</td>
  </tr>
  <tr>
    <td style="padding: 8px;">C. Probiotics</td>
    <td style="padding: 8px;">iii. Reduces inflammation</td>
  </tr>
  <tr>
    <td style="padding: 8px;">D. Antioxidants</td>
    <td style="padding: 8px;">iv. Lowers cancer risk</td>
  </tr>
</table>`,
    options: [
      "a. A-iii, B-iv, C-i, D-ii",
      "b. A-ii, B-i, C-iii, D-iv",
      "c. A-i, B-ii, C-iv, D-iii",
      "d. A-iv, B-iii, C-ii, D-i"
    ],
    correctAnswer: 0
  },
  {
    id: 222,
    question: `Match the functional component given in the Column I with the food source in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">1. Lycopene</td>
    <td style="padding: 8px;">i. Soy</td>
  </tr>
  <tr>
    <td style="padding: 8px;">2. Inulin</td>
    <td style="padding: 8px;">ii. Tomatoes</td>
  </tr>
  <tr>
    <td style="padding: 8px;">3. Isoflavones</td>
    <td style="padding: 8px;">iii. Whole grains</td>
  </tr>
  <tr>
    <td style="padding: 8px;">4. ω-3 fatty acids</td>
    <td style="padding: 8px;">iv. Salmon</td>
  </tr>
</table>`,
    options: [
      "a. 1-ii, 2-iv, 3-i, 4-iii",
      "b. 1-ii, 2-iii, 3-i, 4-iv",
      "c. 1-ii, 2-i, 3-iv, 4-iii",
      "d. 1-iv, 2-ii, 3-iii, 4-i"
    ],
    correctAnswer: 1
  },
  {
    id: 223,
    question: `Which of the following statements describe the role of trans fats in health?

1. Trans fats increase the risk of heart disease.

2. They are naturally found in vegetable oils.

3. Trans fats are formed during hydrogenation.

4. They are safer than saturated fats.`,
    options: [
      "a. Only 1",
      "b. 1 and 3",
      "c. 2 and 4",
      "d. 1, 2 and 3"
    ],
    correctAnswer: 1
  },
  {
    id: 224,
    question: `Match the functional food regulation given in Column I with its description in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">A. Regulation (EU) No. 1169/2011</td>
    <td style="padding: 8px;">i. Food information to consumers</td>
  </tr>
  <tr>
    <td style="padding: 8px;">B. Regulation (EC) No. 1925/2006</td>
    <td style="padding: 8px;">ii. Nutrient addition to foods</td>
  </tr>
  <tr>
    <td style="padding: 8px;">C. Directive 2009/39/EC</td>
    <td style="padding: 8px;">iii. List of permitted health claims</td>
  </tr>
  <tr>
    <td style="padding: 8px;">D. Regulation (EU) No. 432/2012</td>
    <td style="padding: 8px;">iv. Rules for food for specific uses</td>
  </tr>
</table>`,
    options: [
      "a. A-i, B-ii, C-iv, D-iii",
      "b. A-ii, B-i, C-iii, D-iv",
      "c. A-iii, B-i, C-ii, D-i",
      "d. A-iv, B-iii, C-i, D-ii"
    ],
    correctAnswer: 0
  },
  {
    id: 225,
    question: `Match the type of algae given in Column I with its common application in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">A. Spirulina</td>
    <td style="padding: 8px;">i. Source of carrageenan for thickening</td>
  </tr>
  <tr>
    <td style="padding: 8px;">B. Chlorella</td>
    <td style="padding: 8px;">ii. High-protein supplement</td>
  </tr>
  <tr>
    <td style="padding: 8px;">C. Irish moss</td>
    <td style="padding: 8px;">iii. Used in salads and soups</td>
  </tr>
  <tr>
    <td style="padding: 8px;">D. Sea lettuce</td>
    <td style="padding: 8px;">iv. Known for detoxifying properties</td>
  </tr>
</table>`,
    options: [
      "a. A-i, B-iii, C-ii, D-iv",
      "b. A-iii, B-i, C-iv, D-ii",
      "c. A-iv, B-ii, C-i, D-iii",
      "d. A-ii, B-iv, C-i, D-iii"
    ],
    correctAnswer: 3
  },
  {
    id: 226,
    question: `Assertion (A): Algae are suitable for cultivation as a food source due to their adaptability and high productivity.

Reason (R): Algae require complex habitats and extensive resources for growth.`,
    options: [
      "a. Both A and R are correct, and R explains A.",
      "b. Both A and R are correct, but R does not explain A.",
      "c. A is correct, but R is incorrect.",
      "d. A is incorrect, but R is correct."
    ],
    correctAnswer: 2
  },
  {
    id: 227,
    question: `Which among the following statements is/are true with respect to the algal cultivation?

1. Microalgae consist of a wide range of autotrophic organisms which grow through photosynthesis just like land-based plants.

2. The multicellular structure of algae allows them to easily convert solar energy into chemical energy.

3. Open pond system and closed photobioreactor system are the two most commonly used techniques to cultivate microalgae.

4. Raceway pond is a type of closed photobioreactor system.`,
    options: [
      "a. 1, 2 and 3",
      "b. 1 and 2",
      "c. 1 and 3",
      "d. Only 4"
    ],
    correctAnswer: 2
  },
  {
    id: 228,
    question: "What are the main applications of alginates extracted from algae in the food industry?",
    options: [
      "a. Flavouring agents",
      "b. Texturizers and thickeners",
      "c. Colour enhancers",
      "d. Preservatives"
    ],
    correctAnswer: 1
  },
  {
    id: 229,
    question: `Which among the following statements is/are true with respect to the extraction of bioactives from algae?

1. Zeaxanthin from chlorella have shown to be associated with eye health and function.

2. Soxhlet has shown lesser extraction efficiency than maceration.

3. Ethanol (90%) gives highest extraction yield as compared to acetone, hexane, water and various concentration of aqueous ethanol.`,
    options: [
      "a. 1 and 2",
      "b. Only 2",
      "c. 1 and 3",
      "d. 1, 2 and 3"
    ],
    correctAnswer: 2
  },
  {
    id: 230,
    question: "What challenge does gluten-free bread commonly face compared to wheat bread?",
    options: [
      "a. High gas retention",
      "b. Excellent elasticity",
      "c. Crumbling texture",
      "d. Long shelf life"
    ],
    correctAnswer: 2
  },
  {
    id: 231,
    question: "Which of the following proteins is primarily responsible for the elasticity of wheat dough?",
    options: [
      "a. Gliadin",
      "b. Glutenin",
      "c. Casein",
      "d. Albumin"
    ],
    correctAnswer: 1
  },
  {
    id: 232,
    question: "Which of the following options is true with respect to pasta processing?",
    options: [
      "a. In gluten free pasta, protein is the \"glue\"- protein network provides framework of pasta.",
      "b. In conventional wheat pasta, starch is a filler and are embedded in a protein network.",
      "c. In conventional wheat pasta, starch is the \"glue\"-gelatinized starch provides framework of pasta.",
      "d. In conventional wheat pasta, small protein patches are embedded in starch gel."
    ],
    correctAnswer: 1
  },
  {
    id: 233,
    question: `Match the gluten-free processing technology given in Column I with its purpose in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">A. High pressure</td>
    <td style="padding: 8px;">i. Degrades immune-stimulatory peptides</td>
  </tr>
  <tr>
    <td style="padding: 8px;">B. Enzymatic treatment</td>
    <td style="padding: 8px;">ii. Enhances dough structure</td>
  </tr>
  <tr>
    <td style="padding: 8px;">C. Sour dough fermentation</td>
    <td style="padding: 8px;">iii. Hydrolyzes gluten peptides</td>
  </tr>
</table>`,
    options: [
      "a. A-iii, B-i, C-ii",
      "b. A-i, B-ii, C-iii",
      "c. A-ii, B-iii, C-i",
      "d. A-ii, B-i, C-iii"
    ],
    correctAnswer: 2
  },
  {
    id: 234,
    question: `Match the agglomerate structure given in Column I with its description in Column II.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
  <tr>
    <th style="width: 50%; text-align: left; padding: 8px;">Column I</th>
    <th style="width: 50%; text-align: left; padding: 8px;">Column II</th>
  </tr>
  <tr>
    <td style="padding: 8px;">A. Onion</td>
    <td style="padding: 8px;">i. Large droplet collides with many fine particles</td>
  </tr>
  <tr>
    <td style="padding: 8px;">B. Raspberry</td>
    <td style="padding: 8px;">ii. Small droplet contacts fine particles, spreading over the surface</td>
  </tr>
  <tr>
    <td style="padding: 8px;">C. Grape</td>
    <td style="padding: 8px;">iii. Similar quantities of droplets and particles collide</td>
  </tr>
</table>`,
    options: [
      "a. A-i, B-ii, C-iii",
      "b. A-ii, B-i, C-iii",
      "c. A-iii, B-ii, C-i",
      "d. A-i, B-iii, C-ii"
    ],
    correctAnswer: 1
  },
  {
    id: 235,
    question: `Assertion (A): Food powders are often instantized for quick reconstitution.

Reason (R): Instantization reduces particle size, making powders more difficult to dissolve.`,
    options: [
      "a. Both A and R are correct, and R explains A.",
      "b. Both A and R are correct, but R does not explain A.",
      "c. A is correct, but R is incorrect.",
      "d. A is incorrect, but R is correct."
    ],
    correctAnswer: 2
  },
  {
    id: 236,
    question: "Which of the following is not a step in the HACCP in a food manufacturing process?",
    options: [
      "a. Determination of the CCPs.",
      "b. Establishing a system to monitor Control of the CCPs.",
      "c. Establishing the corrective actions to be taken when monitoring indicates that a particular CCP is in control.",
      "d. Establishing the documentation concerning all procedures and records appropriate to these principles and their application."
    ],
    correctAnswer: 2
  },
  {
    id: 237,
    question: `Which statements about pest prevention are true?

1. Regular inspection is essential.

2. Chemical control is the only option.

3. Proper sanitation prevents infestation.

4. Temperature control is ineffective.`,
    options: [
      "a. 1 and 3",
      "b. 2 and 4",
      "c. 1 and 2",
      "d. 3 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 238,
    question: `Which statements about GMP practices are correct?

1. They ensure product quality.

2. They are optional guidelines.

3. They require documentation.

4. They focus only on equipment.`,
    options: [
      "a. 1 and 3",
      "b. 2 and 4",
      "c. 1 and 2",
      "d. 3 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 239,
    question: `Which statements about surface-active agents are true?

1. They reduce surface tension.

2. They are all synthetic compounds.

3. They improve emulsion stability.

4. They work only in water.`,
    options: [
      "a. 1 and 3",
      "b. 2 and 4",
      "c. 1 and 2",
      "d. 3 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 240,
    question: "Which type of drying method is commonly used in the preparation of powdered eggs?",
    options: [
      "a. Freeze drying",
      "b. Spray drying",
      "c. Drum drying",
      "d. Sun drying"
    ],
    correctAnswer: 1
  },
  {
    id: 219,
    question: `Which statements about noodle improvers are correct?

1. They enhance dough strength

2. They improve color stability

3. They reduce cooking time

4. They increase shelf life`,
    options: [
      "a. 1 and 2",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 220,
    question: `Which statements about aflatoxins in food safety are true?

1. They are produced by all molds

2. They are heat stable compounds

3. They can be detected by rapid tests

4. They only affect grains`,
    options: [
      "a. 1 and 3",
      "b. 2 and 3",
      "c. 3 and 4",
      "d. 1 and 4"
    ],
    correctAnswer: 1
  },
  {
    id: 223,
    question: `Which statements about trans fats are correct?

1. They occur naturally in some foods

2. They are always artificial

3. They increase shelf life

4. They are banned globally`,
    options: [
      "a. 1 and 3",
      "b. 2 and 4",
      "c. 1 and 2",
      "d. 3 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 227,
    question: `Which statements about algal cultivation are true?

1. It requires controlled light conditions

2. It only works in seawater

3. It needs specific nutrients

4. It cannot be done indoors`,
    options: [
      "a. 1 and 3",
      "b. 2 and 4",
      "c. 1 and 2",
      "d. 3 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 229,
    question: `Which statements about bioactives from algae are correct?

1. They include antioxidant compounds

2. They are all water-soluble

3. They can be extracted efficiently

4. They are always stable`,
    options: [
      "a. 1 and 3",
      "b. 2 and 4",
      "c. 1 and 2",
      "d. 3 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 237,
    question: `Which statements about pest prevention are true?

1. Regular inspection is essential

2. Chemical control is the only option

3. Proper sanitation prevents infestation

4. Temperature control is ineffective`,
    options: [
      "a. 1 and 3",
      "b. 2 and 4",
      "c. 1 and 2",
      "d. 3 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 238,
    question: `Which statements about GMP practices are correct?

1. They ensure product quality

2. They are optional guidelines

3. They require documentation

4. They focus only on equipment`,
    options: [
      "a. 1 and 3",
      "b. 2 and 4",
      "c. 1 and 2",
      "d. 3 and 4"
    ],
    correctAnswer: 0
  },
  {
    id: 239,
    question: `Which statements about surface-active agents are true?

1. They reduce surface tension

2. They are all synthetic compounds

3. They improve emulsion stability

4. They work only in water`,
    options: [
      "a. 1 and 3",
      "b. 2 and 4",
      "c. 1 and 2",
      "d. 3 and 4"
    ],
    correctAnswer: 0
  }
];

export default questions;