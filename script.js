const microbes = [
  {
    name: "Escherichia coli",
    synonyms: ["E. coli", "ecoli", "Ecoli"],
    morphological: "Gram-negative, rod-shaped bacterium; facultative anaerobe; motile with peritrichous flagella.",
    culture: "On MacConkey agar forms pink lactose-fermenting colonies; metallic green sheen on EMB agar.",
    virulence: "Fimbriae for adhesion, exotoxins (Shiga-like toxin), endotoxin (LPS).",
    transmission: "Fecal–oral route, contaminated food and water, person-to-person.",
    treatment: "Hydration and electrolyte replacement; antibiotics like ciprofloxacin or TMP-SMX (not for toxin-producing strains); prevention via hygiene and proper food handling."
  },
  {
    name: "Staphylococcus aureus",
    synonyms: ["S. aureus", "staph", "Staph"],
    morphological: "Gram-positive cocci in clusters; facultative anaerobe; non-motile.",
    culture: "Golden-yellow colonies on nutrient agar; beta-hemolysis on blood agar; mannitol fermentation on MSA.",
    virulence: "Protein A, coagulase, hemolysins, enterotoxins, toxic shock syndrome toxin (TSST-1).",
    transmission: "Direct contact, contaminated surfaces, airborne droplets, food contamination.",
    treatment: "Beta-lactamase–resistant antibiotics (e.g., nafcillin); for MRSA, vancomycin or linezolid; prevention by hand hygiene and aseptic techniques."
  },
{
    name: "Salmonella typhi",
    synonyms: ["S. typhi", "Typhoid bacillus"],
    morphological: "Gram-negative rod, facultative anaerobe, motile with peritrichous flagella.",
    culture: "Produces black colonies on SS agar due to H2S production; non-lactose fermenter on MacConkey.",
    virulence: "Vi antigen (capsular), endotoxin, ability to survive in macrophages.",
    transmission: "Fecal–oral route through contaminated water, food, or carriers.",
    treatment: "Ciprofloxacin, azithromycin, or ceftriaxone; prevention by vaccination, safe water, and sanitation."
  },
  {
    name: "Vibrio cholerae",
    synonyms: ["V. cholerae"],
    morphological: "Gram-negative curved rod with polar flagellum; facultative anaerobe.",
    culture: "Grows on TCBS agar producing yellow colonies (sucrose fermenter).",
    virulence: "Cholera toxin (CTX) causing profuse watery diarrhea; toxin-coregulated pili.",
    transmission: "Contaminated water and food; fecal–oral route.",
    treatment: "Aggressive oral or IV rehydration; doxycycline or azithromycin in severe cases; prevention via clean water and sanitation."
  },
{
    name: "Mycobacterium tuberculosis",
    synonyms: ["M. tuberculosis", "Koch’s bacillus", "tb", "TB"],
    morphological: "Acid-fast slender rod, non-motile, obligate aerobe, slow growing.",
    culture: "Lowenstein-Jensen medium shows rough, buff-colored colonies after 2–6 weeks.",
    virulence: "Mycolic acids in cell wall, cord factor, ability to survive inside macrophages.",
    transmission: "Airborne droplets from coughing, sneezing, close contact.",
    treatment: "First-line regimen: isoniazid, rifampicin, pyrazinamide, ethambutol (6–9 months); prevention via BCG vaccination, early diagnosis, infection control."
  },
{
  name: "Proteus mirabilis",
  synonyms: ["proteus", "p. mirabilis"],
  morphological: "Gram-negative rod, highly motile with swarming on agar.",
  culture: "Non-lactose fermenter; urease-positive.",
  virulence: "Urease (stone formation), endotoxin.",
  transmission: "Urinary tract infections, often nosocomial.",
  treatment: "TMP-SMX, third-gen cephalosporins."
},
{
  name: "Salmonella enterica",
  synonyms: ["salmonella", "s. enterica"],
  morphological: "Gram-negative motile rod; non-lactose fermenter; H₂S producer.",
  culture: "Black colonies on Hektoen enteric agar.",
  virulence: "Endotoxin, type III secretion.",
  transmission: "Contaminated food/water, poultry.",
  treatment: "Fluoroquinolones, third-gen cephalosporins."
},
{
  name: "Shigella dysenteriae",
  synonyms: ["shigella", "s. dysenteriae"],
  morphological: "Gram-negative rod; non-motile; non-lactose fermenter.",
  culture: "Colorless or greenish colonies on selective agar.",
  virulence: "Shiga toxin (inhibits protein synthesis), LPS endotoxin.",
  transmission: "Fecal–oral via contaminated food/water.",
  treatment: "Ciprofloxacin, azithromycin."
},
{
  name: "Helicobacter pylori",
  synonyms: ["h. pylori", "helicobacter"],
  morphological: "Gram-negative curved rod; motile; microaerophilic.",
  culture: "Urease positive; grows on selective media (e.g. Campy agar).",
  virulence: "Urease, cagA, vacA cytotoxins.",
  transmission: "Oral–oral or fecal–oral routes.",
  treatment: "PPI + clarithromycin + amoxicillin/metronidazole (triple therapy)."
},
{
  name: "Neisseria gonorrhoeae",
  synonyms: ["gonococcus", "n. gonorrhoeae"],
  morphological: "Gram-negative diplococcus; intracellular in neutrophils.",
  culture: "Thayer-Martin chocolate agar.",
  virulence: "Pili (antigenic variation), IgA protease.",
  transmission: "Sexual contact; perinatal.",
  treatment: "Ceftriaxone + azithromycin."
},
{
  name: "Neisseria meningitidis",
  synonyms: ["meningococcus", "n. meningitidis"],
  morphological: "Gram-negative diplococcus; encapsulated.",
  culture: "Chocolate or Thayer-Martin agar; grows in CO₂.",
  virulence: "Capsule, endotoxin (LPS), IgA protease.",
  transmission: "Respiratory droplets.",
  treatment: "Ceftriaxone; rifampicin prophylaxis for contacts."
},
{
  name: "Klebsiella pneumoniae",
  synonyms: ["klebsiella", "k. pneumoniae"],
  morphological: "Gram-negative rod; large polysaccharide capsule (mucoid colonies).",
  culture: "Lactose fermenter (pink colonies) on MacConkey agar.",
  virulence: "Capsule prevents phagocytosis; endotoxin.",
  transmission: "Aspiration, hospital-acquired infections.",
  treatment: "Carbapenems (if resistant, use colistin)."
},
{
  name: "Pseudomonas aeruginosa",
  synonyms: ["pseudomonas", "p. aeruginosa"],
  morphological: "Gram-negative rod; motile with polar flagella.",
  culture: "Green pigment (pyocyanin), fruity odor.",
  virulence: "Exotoxin A, biofilm formation.",
  transmission: "Contaminated water, hospital equipment.",
  treatment: "Piperacillin-tazobactam, ceftazidime; resistant strains need colistin."
},
{
  name: "Bacillus anthracis",
  synonyms: ["anthrax bacillus", "b. anthracis"],
  morphological: "Gram-positive rod; spore-forming; non-motile; capsule of poly-D-glutamate.",
  culture: "Ground-glass colonies, non-hemolytic on blood agar.",
  virulence: "Anthrax toxin (protective antigen, edema factor, lethal factor).",
  transmission: "Spores from soil, animal products.",
  treatment: "Ciprofloxacin or doxycycline; vaccine available."
},
{
  name: "Bacillus cereus",
  synonyms: ["b. cereus"],
  morphological: "Gram-positive rod; spore-forming; motile.",
  culture: "Hemolytic colonies on blood agar.",
  virulence: "Enterotoxins (emetic and diarrheal forms).",
  transmission: "Contaminated rice, food poisoning.",
  treatment: "Supportive care; vancomycin for systemic infections."
},
{
  name: "Clostridium perfringens",
  synonyms: ["c. perfringens"],
  morphological: "Gram-positive rod; spore-forming anaerobe.",
  culture: "Double-zone hemolysis on blood agar.",
  virulence: "Alpha toxin (lecithinase), enterotoxin.",
  transmission: "Contaminated food; traumatic wounds.",
  treatment: "Penicillin + clindamycin; surgical debridement."
},
{
  name: "Listeria monocytogenes",
  synonyms: ["listeria", "l. monocytogenes"],
  morphological: "Gram-positive coccobacillus; tumbling motility.",
  culture: "Beta-hemolytic on blood agar.",
  virulence: "Listeriolysin O; intracellular survival.",
  transmission: "Contaminated dairy, cold foods; vertical transmission in pregnancy.",
  treatment: "Ampicillin + gentamicin."
},
{
  name: "Haemophilus influenzae",
  synonyms: ["h. influenzae", "hib"],
  morphological: "Gram-negative coccobacillus; requires factors V (NAD⁺) and X (hemin).",
  culture: "Chocolate agar with factor V and X.",
  virulence: "Polysaccharide capsule (type b most virulent).",
  transmission: "Respiratory droplets.",
  treatment: "Ceftriaxone; rifampicin prophylaxis."
},
{
  name: "Corynebacterium diphtheriae",
  synonyms: ["c. diphtheriae", "diphtheria bacillus"],
  morphological: "Gram-positive club-shaped rods in palisades; metachromatic granules.",
  culture: "Loeffler’s medium, tellurite agar (black colonies).",
  virulence: "Diphtheria toxin (inhibits EF-2 → protein synthesis block).",
  transmission: "Respiratory droplets.",
  treatment: "Antitoxin + erythromycin/penicillin; DPT vaccine."
},
{
  name: "Yersinia pestis",
  synonyms: ["yersinia", "plague bacillus"],
  morphological: "Gram-negative coccobacillus; bipolar staining (safety pin).",
  culture: "Grows on blood agar, slower growth.",
  virulence: "Yersinia outer proteins (Yops), capsule (F1 antigen).",
  transmission: "Flea bite (rat reservoir); pneumonic spread human-to-human.",
  treatment: "Streptomycin, gentamicin; doxycycline for prophylaxis."
}
];
// Techniques database
const techniques = [
  { 
    name: ["Gram staining","Gram stain"], 
    principle: "Differentiates bacteria based on cell wall structure into Gram-positive and Gram-negative.",
    materials: "Crystal violet, Iodine, Alcohol, Safranin, Microscope.",
    procedure: "Apply crystal violet → Add iodine → Decolorize with alcohol → Counterstain with safranin.",
    applications: "Used for initial bacterial classification and guiding antibiotic therapy.",
    interpretation: "Gram-positive = Purple, Gram-negative = Pink."
  },
  { 
    name: ["Acid-fast staining","Ziehl-Neelsen","AFB stain"], 
    principle: "Detects acid-fast organisms with mycolic acid in their cell wall.",
    materials: "Carbol fuchsin, Acid-alcohol, Methylene blue, Microscope.",
    procedure: "Stain with carbol fuchsin + heat → Decolorize with acid-alcohol → Counterstain with methylene blue.",
    applications: "Used for *Mycobacterium tuberculosis* and *Nocardia* detection.",
    interpretation: "Acid-fast = Red, Non–acid-fast = Blue."
  },
  { 
    name: ["Endospore staining","Schaeffer-Fulton method"], 
    principle: "Visualizes bacterial endospores resistant to harsh conditions.",
    materials: "Malachite green, Safranin, Heat source, Microscope.",
    procedure: "Apply malachite green with heat → Wash → Counterstain with safranin.",
    applications: "Detection of spore-formers like *Bacillus* and *Clostridium*.",
    interpretation: "Spores = Green, Vegetative cells = Red."
  },
  { 
    name: ["Capsule staining","Negative staining"], 
    principle: "Detects the presence of a capsule that enhances virulence.",
    materials: "India ink / Nigrosin, Microscope slide, Stain.",
    procedure: "Mix sample with ink → Spread on slide → Observe without heat-fixing.",
    applications: "Identification of capsule producers like *Klebsiella pneumoniae* and *Cryptococcus*.",
    interpretation: "Capsule = Clear halo around cell, Background = Dark."
  },
  { 
    name: ["Flagella staining"], 
    principle: "Demonstrates bacterial flagella for motility type determination.",
    materials: "Flagella stain (mordant + dye), Microscope.",
    procedure: "Apply mordant to thicken flagella → Stain → Observe under microscope.",
    applications: "Differentiates motile species (e.g., *Proteus*, *Salmonella*).",
    interpretation: "Flagella become visible as fine projections."
  },
  { 
    name: ["PCR","Polymerase Chain Reaction"], 
    principle: "Amplifies specific DNA sequences using repeated cycles.",
    materials: "Template DNA, Primers, Taq polymerase, dNTPs, Thermal cycler.",
    procedure: "Denaturation → Primer annealing → Extension (repeated 25–35 cycles).",
    applications: "Diagnosis of infections, genetic studies, forensics.",
    interpretation: "DNA band visible in gel electrophoresis indicates positive amplification."
  },
  { 
    name: ["Gel electrophoresis"], 
    principle: "Separates nucleic acids or proteins based on size and charge.",
    materials: "Agarose/Polyacrylamide gel, Buffer, DNA ladder, Power supply.",
    procedure: "Load samples into wells → Run electric current → Visualize bands under UV.",
    applications: "DNA fingerprinting, PCR product analysis, protein studies.",
    interpretation: "Smaller fragments migrate faster; compare with DNA ladder."
  },
  { 
    name: ["ELISA","Enzyme-linked immunosorbent assay"], 
    principle: "Antigen–antibody interaction detected via enzyme-substrate reaction.",
    materials: "Antigen/antibody coated plates, Enzyme conjugate, Substrate, Reader.",
    procedure: "Add sample → Add enzyme-linked antibody → Wash → Add substrate → Detect color change.",
    applications: "Diagnosis of infections (HIV, hepatitis, COVID-19), immunology research.",
    interpretation: "Color intensity is proportional to antigen/antibody presence."
  },
  { 
    name: ["Streak plate method","Streaking"], 
    principle: "Isolates individual colonies from a mixed culture.",
    materials: "Sterile inoculating loop, Agar plates, Bunsen burner.",
    procedure: "Streak sample across 4 quadrants on agar plate for dilution.",
    applications: "Obtaining pure cultures in clinical and research labs.",
    interpretation: "Isolated single colonies appear in later quadrants."
  },
  { 
    name: ["Blood agar culture","Hemolysis test"], 
    principle: "Detects hemolysis patterns caused by bacterial toxins on blood agar.",
    materials: "Blood agar plate, Inoculating loop, Incubator.",
    procedure: "Streak sample on blood agar → Incubate → Observe hemolysis zone.",
    applications: "Differentiates streptococcal species.",
    interpretation: "α-hemolysis = Greenish, β-hemolysis = Clear zone, γ-hemolysis = None."
  },
  { 
    name: ["Simple staining"], 
    principle: "Uses a single dye to visualize cell size, shape, and arrangement.",
    materials: "Methylene blue / Safranin / Crystal violet, glass slide, microscope.",
    procedure: "Fix smear → apply dye → wash → observe under microscope.",
    applications: "Basic study of morphology.",
    interpretation: "Cells appear uniformly stained with chosen color."
  },
  { 
    name: ["Differential staining"], 
    principle: "Uses more than one dye to distinguish organisms or structures.",
    materials: "Primary stain, counterstain, decolorizer.",
    procedure: "Sequential staining with multiple dyes.",
    applications: "Gram stain, Acid-fast stain.",
    interpretation: "Different cell types show contrasting colors."
  },
  { 
    name: ["Streak plate method","Streaking"], 
    principle: "Separates and isolates bacterial colonies on solid media.",
    materials: "Inoculating loop, agar plate, Bunsen burner.",
    procedure: "Streak sample across 4 quadrants with sterilized loop.",
    applications: "Isolation of pure cultures.",
    interpretation: "Well-isolated colonies appear in last quadrant."
  },
  { 
    name: ["Pour plate method"], 
    principle: "Allows growth of colonies inside and on the surface of agar.",
    materials: "Molten agar, Petri plates, pipettes.",
    procedure: "Mix diluted sample with molten agar → pour into plate → solidify.",
    applications: "Counting viable microorganisms.",
    interpretation: "Colonies within agar (subsurface) and on surface."
  },
  { 
    name: ["Spread plate method"], 
    principle: "Even distribution of inoculum across agar surface.",
    materials: "Sterile spreader, agar plate, diluted sample.",
    procedure: "Spread sample evenly with glass rod/spreader.",
    applications: "Quantification of microbes, aerobic culture.",
    interpretation: "Colonies appear only on surface."
  },
  { 
    name: ["Serial dilution"], 
    principle: "Reduces microbial concentration stepwise for accurate counting.",
    materials: "Pipettes, sterile tubes, diluents, agar plates.",
    procedure: "Transfer culture stepwise into diluents → plate out.",
    applications: "CFU determination in water/food testing.",
    interpretation: "Dilution plate with 30–300 colonies is counted."
  },
  { 
    name: ["Microscopy","Light microscopy","Electron microscopy"], 
    principle: "Visualization of microorganisms using magnification and resolution.",
    materials: "Microscope (light, electron, fluorescence), slides, stains.",
    procedure: "Prepare smear → observe under appropriate microscope.",
    applications: "Morphology, structure, diagnostics.",
    interpretation: "Shape, size, arrangement, ultrastructure observed."
  },
  { 
    name: ["Cell culture","Tissue culture"], 
    principle: "Growth of eukaryotic cells under controlled sterile conditions.",
    materials: "Culture media, CO₂ incubator, sterile flasks.",
    procedure: "Seed cells into medium → maintain conditions → observe growth.",
    applications: "Virus isolation, vaccine production, cancer research.",
    interpretation: "Healthy cell monolayer or cytopathic effect (CPE)."
  },
  { 
    name: ["PCR","Polymerase Chain Reaction"], 
    principle: "Amplifies DNA using heat-stable polymerase.",
    materials: "Template DNA, primers, Taq polymerase, nucleotides, thermal cycler.",
    procedure: "Denaturation → Annealing → Extension (repeated cycles).",
    applications: "Pathogen detection, genetic studies, forensics.",
    interpretation: "DNA band visualized after amplification."
  },
  { 
    name: ["Gel electrophoresis"], 
    principle: "Separates DNA, RNA, or proteins based on size/charge in a gel matrix.",
    materials: "Agarose gel, electrophoresis tank, DNA ladder, buffer.",
    procedure: "Load samples → run current → stain → visualize under UV.",
    applications: "DNA analysis, purity check, PCR confirmation.",
    interpretation: "Smaller fragments migrate farther; band patterns compared."
  },
  { 
    name: ["Western blotting"], 
    principle: "Detects specific proteins using antibodies.",
    materials: "Gel electrophoresis system, nitrocellulose membrane, antibodies.",
    procedure: "Protein separation → transfer → antibody probing → detection.",
    applications: "HIV diagnosis, protein research.",
    interpretation: "Presence/absence of protein bands detected."
  },
  { 
    name: ["ELISA","Enzyme-linked immunosorbent assay"], 
    principle: "Antibody-antigen reaction detected by enzyme-substrate color change.",
    materials: "Microtiter plate, antigen/antibody, enzyme conjugate, substrate.",
    procedure: "Bind antigen/antibody → add conjugate → substrate → measure color.",
    applications: "HIV, hepatitis, COVID-19 diagnosis.",
    interpretation: "Positive = color development; Negative = no color."
  },
  { 
    name: ["Flow cytometry"], 
    principle: "Laser-based technique analyzing size, granularity, and fluorescence of cells.",
    materials: "Flow cytometer, fluorescent antibodies, buffer.",
    procedure: "Label cells → pass through laser beam → analyze signals.",
    applications: "Immunology, hematology, cancer diagnosis.",
    interpretation: "Scatter plots show distinct cell populations."
  },
  { 
    name: ["Spectrophotometry"], 
    principle: "Measures microbial growth via light absorbance (OD600).",
    materials: "Spectrophotometer, cuvettes, culture broth.",
    procedure: "Blank instrument → measure culture absorbance.",
    applications: "Growth monitoring, kinetics studies.",
    interpretation: "Higher OD = higher cell density."
  },
  { 
    name: ["Blood agar culture","Hemolysis test"], 
    principle: "Detects bacterial hemolytic activity on blood agar.",
    materials: "Blood agar plates, inoculating loop, incubator.",
    procedure: "Inoculate plate → incubate → examine hemolysis zones.",
    applications: "Differentiation of streptococci and other pathogens.",
    interpretation: "α = green partial; β = clear complete; γ = none."
  },
{
  name: ["Catalase test"],
  principle: "Detects catalase enzyme that breaks hydrogen peroxide into water and oxygen.",
  materials: "3% hydrogen peroxide, glass slide, inoculating loop.",
  procedure: "Place colony on slide → add H₂O₂ → observe for bubbles.",
  applications: "Differentiate Staphylococcus (positive) vs Streptococcus (negative).",
  interpretation: "Positive = bubble formation; Negative = no bubbles."
},
{
  name: ["Oxidase test"],
  principle: "Detects cytochrome c oxidase enzyme in bacteria.",
  materials: "Oxidase reagent (tetramethyl-p-phenylenediamine), filter paper.",
  procedure: "Smear colony → add reagent → observe color change.",
  applications: "Identify Pseudomonas, Neisseria, Vibrio species.",
  interpretation: "Positive = dark purple/blue color within 30 sec; Negative = no change."
},
{
  name: ["Coagulase test"],
  principle: "Detects coagulase enzyme that clots plasma.",
  materials: "Rabbit plasma, bacterial culture.",
  procedure: "Mix culture with plasma → incubate → observe clotting.",
  applications: "Differentiate Staphylococcus aureus (positive) from other staphylococci.",
  interpretation: "Positive = clot formation; Negative = liquid remains."
},
{
  name: ["Indole test"],
  principle: "Detects ability of bacteria to split tryptophan into indole using tryptophanase enzyme.",
  materials: "Tryptone broth, Kovac’s reagent.",
  procedure: "Inoculate broth → incubate 24h → add Kovac’s reagent.",
  applications: "Differentiate E. coli (indole-positive) from Enterobacter, Klebsiella (negative).",
  interpretation: "Positive = red ring at top; Negative = yellow/no color change."
},
{
  name: ["Methyl Red test","MR test"],
  principle: "Detects stable acid production from glucose fermentation.",
  materials: "MR-VP broth, methyl red indicator.",
  procedure: "Inoculate broth → incubate 48h → add methyl red.",
  applications: "Part of IMViC tests for Enterobacteriaceae.",
  interpretation: "Positive = red color; Negative = yellow/orange."
},
{
  name: ["Voges-Proskauer test","VP test"],
  principle: "Detects acetoin (neutral end product of glucose fermentation).",
  materials: "MR-VP broth, Barritt’s reagents A & B.",
  procedure: "Inoculate → incubate → add reagents → shake.",
  applications: "Differentiate Enterobacter (positive) from E. coli (negative).",
  interpretation: "Positive = red/pink color; Negative = no color change."
},
{
  name: ["Citrate utilization test"],
  principle: "Detects ability of bacteria to use citrate as sole carbon source.",
  materials: "Simmons citrate agar slant.",
  procedure: "Streak slant → incubate 24–48h.",
  applications: "Part of IMViC tests for Enterobacteriaceae.",
  interpretation: "Positive = blue slant; Negative = green slant."
},
{
  name: ["Urease test"],
  principle: "Detects urease enzyme which hydrolyzes urea into ammonia & CO₂.",
  materials: "Christensen’s urea agar slant.",
  procedure: "Streak slant → incubate few hours to overnight.",
  applications: "Identify Proteus, Helicobacter pylori.",
  interpretation: "Positive = pink (alkaline); Negative = no color change (yellow/orange)."
},
{
  name: ["Triple Sugar Iron test","TSI test"],
  principle: "Differentiates bacteria based on carbohydrate fermentation and H₂S production.",
  materials: "TSI agar slant.",
  procedure: "Stab butt + streak slant → incubate 18–24h.",
  applications: "Identify Enterobacteriaceae.",
  interpretation: "Slant/butt colors + gas/H₂S recorded (e.g., A/A gas, K/A H₂S)."
}
];
// function to search microbes
function searchMicrobes() {
  const query = document.getElementById("microbeSearch").value.toLowerCase();
  const resultsDiv = document.getElementById("microbeResults");
  resultsDiv.innerHTML = "";

  // match with name + synonyms
  const results = microbes.filter(microbe =>
    [microbe.name, ...(microbe.synonyms || [])]
      .some(n => n.toLowerCase().includes(query))
  );

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No results found</p>";
    return;
  }

  results.forEach(microbe => {
    const details = `
  <div class="subtitle morphology">
    <strong>Morphological characteristics:</strong>
    ${microbe.morphological}
  </div>
  <div class="subtitle culture">
    <strong>Culture characteristics:</strong>
    ${microbe.culture}
  </div>
  <div class="subtitle virulence">
    <strong>Virulence factors:</strong>
    ${microbe.virulence}
  </div>
  <div class="subtitle transmission">
    <strong>Mode of transmission:</strong>
    ${microbe.transmission}
  </div>
  <div class="subtitle treatment">
    <strong>Treatment & Prevention:</strong>
    ${microbe.treatment}
  </div>
`;
 resultsDiv.innerHTML += `
      <div class="result-card">
        <h3>${microbe.name}</h3>
        ${details}
      </div>
    `;
  });
}
// Function to search techniques
// Function to search techniques
function searchTechniques() {
  const query = document.getElementById("techSearch").value.toLowerCase();
  const resultsDiv = document.getElementById("techResults");
  resultsDiv.innerHTML = "";

  // match with name + synonyms
  const results = techniques.filter(t =>
    (t.name || []).some(n => n.toLowerCase().includes(query))
  );

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No results found</p>";
    return;
  }

  results.forEach(t => {
    let details = "";

    if (t.principle) {
      details += `
        <div class="subtitle morphology">
          <strong>Principle:</strong>
          ${t.principle}
        </div>`;
    }
    if (t.materials) {
      details += `
        <div class="subtitle culture">
          <strong>Materials required:</strong>
          ${t.materials}
        </div>`;
    }
    if (t.procedure) {
      details += `
        <div class="subtitle virulence">
          <strong>Procedure:</strong>
          ${t.procedure}
        </div>`;
    }
    if (t.applications) {
      details += `
        <div class="subtitle transmission">
          <strong>Applications:</strong>
          ${t.applications}
        </div>`;
    }
    if (t.interpretation) {
      details += `
        <div class="subtitle treatment">
          <strong>Result interpretation:</strong>
          ${t.interpretation}
        </div>`;
    }

    resultsDiv.innerHTML += `
      <div class="result-card">
        <h3>${t.name[0]}</h3>
        ${details}
      </div>
    `;
  });
}