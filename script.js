// =======================
// Microbes List (20 items)
// =======================
const microbes = [
  {
    name: "Escherichia coli",
    synonyms: ["E. coli", "ecoli", "E.coli", "Escherichia"],
    info: [
      "Gram-negative, rod-shaped bacterium",
      "Normal gut flora, but some strains pathogenic",
      "Indicator of fecal contamination",
      "Model organism in research"
    ]
  },
  {
    name: "Human Immunodeficiency Virus",
    synonyms: ["HIV", "hiv", "AIDS virus"],
    info: [
      "Retrovirus that infects CD4+ T cells",
      "Causes Acquired Immunodeficiency Syndrome (AIDS)",
      "Weakens the immune system",
      "Transmitted through blood, sexual contact, and from mother to child"
    ]
  },
  {
    name: "Mycobacterium tuberculosis",
    synonyms: ["TB bacteria", "Tuberculosis bacterium"],
    info: [
      "Acid-fast bacillus",
      "Causes tuberculosis",
      "Airborne transmission",
      "Can persist in latent form"
    ]
  },
  {
    name: "Staphylococcus aureus",
    synonyms: ["S. aureus", "Staph"],
    info: [
      "Gram-positive coccus",
      "Causes skin infections, pneumonia, and sepsis",
      "MRSA strains are antibiotic resistant",
      "Produces toxins"
    ]
  },
  {
    name: "Streptococcus pyogenes",
    synonyms: ["Group A Streptococcus", "Strep A"],
    info: [
      "Gram-positive coccus",
      "Causes strep throat and scarlet fever",
      "Can lead to rheumatic fever",
      "Beta-hemolytic"
    ]
  },
  {
    name: "Salmonella enterica",
    synonyms: ["Salmonella", "S. enterica"],
    info: [
      "Gram-negative rod",
      "Causes food poisoning and typhoid fever",
      "Spread through contaminated food and water",
      "Facultative intracellular pathogen"
    ]
  },
  {
    name: "Clostridium botulinum",
    synonyms: ["C. botulinum", "Botulism bacterium"],
    info: [
      "Gram-positive, spore-forming rod",
      "Produces botulinum toxin",
      "Causes botulism",
      "Anaerobic"
    ]
  },
  {
    name: "Bacillus anthracis",
    synonyms: ["Anthrax bacterium", "B. anthracis"],
    info: [
      "Gram-positive, spore-forming rod",
      "Causes anthrax",
      "Can infect skin, lungs, and gut",
      "Used as a bioterrorism agent"
    ]
  },
  {
    name: "Vibrio cholerae",
    synonyms: ["Cholera bacterium", "V. cholerae"],
    info: [
      "Gram-negative, comma-shaped bacterium",
      "Causes cholera",
      "Produces cholera toxin",
      "Spread by contaminated water"
    ]
  },
  {
    name: "Helicobacter pylori",
    synonyms: ["H. pylori", "Stomach ulcer bacterium"],
    info: [
      "Gram-negative spiral bacterium",
      "Colonizes stomach lining",
      "Associated with gastritis and ulcers",
      "Risk factor for stomach cancer"
    ]
  },
  {
    name: "Plasmodium falciparum",
    synonyms: ["Malaria parasite", "P. falciparum"],
    info: [
      "Protozoan parasite",
      "Causes severe malaria",
      "Transmitted by Anopheles mosquitoes",
      "Infects red blood cells"
    ]
  },
  {
    name: "Candida albicans",
    synonyms: ["C. albicans", "Yeast infection fungus"],
    info: [
      "Opportunistic pathogenic yeast",
      "Causes oral and genital thrush",
      "Can cause systemic infections in immunocompromised",
      "Part of normal flora"
    ]
  },
  {
    name: "Influenza virus",
    synonyms: ["Flu virus", "Influenza"],
    info: [
      "RNA virus",
      "Causes seasonal flu",
      "Mutates rapidly (antigenic drift and shift)",
      "Transmitted via respiratory droplets"
    ]
  },
  {
    name: "SARS-CoV-2",
    synonyms: ["COVID-19 virus", "Coronavirus"],
    info: [
      "Novel coronavirus",
      "Causes COVID-19 pandemic",
      "Primarily respiratory illness",
      "Transmitted by droplets and aerosols"
    ]
  },
  {
    name: "Treponema pallidum",
    synonyms: ["Syphilis bacterium", "T. pallidum"],
    info: [
      "Spirochete bacterium",
      "Causes syphilis",
      "Transmitted sexually",
      "Cannot be cultured in vitro easily"
    ]
  },
  {
    name: "Neisseria gonorrhoeae",
    synonyms: ["Gonorrhea bacterium", "N. gonorrhoeae"],
    info: [
      "Gram-negative diplococcus",
      "Causes gonorrhea",
      "Sexually transmitted",
      "Some strains resistant to antibiotics"
    ]
  },
  {
    name: "Human Papillomavirus",
    synonyms: ["HPV", "Wart virus"],
    info: [
      "DNA virus",
      "Causes warts and cervical cancer",
      "Many different serotypes",
      "Preventable with vaccine"
    ]
  },
  {
    name: "Rabies virus",
    synonyms: ["Lyssavirus", "Rabies"],
    info: [
      "RNA virus",
      "Causes rabies disease",
      "Transmitted via animal bites",
      "Affects nervous system"
    ]
  },
  {
    name: "Hepatitis B virus",
    synonyms: ["HBV", "Hepatitis B"],
    info: [
      "DNA virus",
      "Causes hepatitis and liver cancer",
      "Transmitted through blood and body fluids",
      "Vaccine-preventable"
    ]
  },
  {
    name: "Giardia lamblia",
    synonyms: ["Giardia", "G. lamblia"],
    info: [
      "Protozoan parasite",
      "Causes giardiasis (diarrheal illness)",
      "Spread through contaminated water",
      "Flagellated protozoan"
    ]
  }
];
// Techniques database
const techniques = [
  { 
    name: ["Gram staining","Gram stain"], 
    steps: [
      "Differentiates Gram-positive (purple) and Gram-negative (pink) bacteria",
      "Primary stain: Crystal violet → Mordant: Iodine → Decolorizer: Alcohol → Counterstain: Safranin",
      "Important for bacterial classification and antibiotic selection"
    ]
  },
  { 
    name: ["Acid-fast staining","Ziehl-Neelsen","AFB stain"], 
    steps: [
      "Used to detect Mycobacterium (e.g., TB bacillus)",
      "Carbol fuchsin (primary stain), acid-alcohol (decolorizer), methylene blue (counterstain)",
      "Acid-fast bacteria retain red color, others turn blue"
    ]
  },
  { 
    name: ["Endospore staining","Schaeffer-Fulton method"], 
    steps: [
      "Visualizes bacterial endospores (e.g., Bacillus, Clostridium)",
      "Primary stain: Malachite green → Heat penetration → Counterstain: Safranin",
      "Spores = green, Vegetative cells = red"
    ]
  },
  { 
    name: ["Capsule staining","Negative staining"], 
    steps: [
      "Detects bacterial capsules (e.g., Klebsiella, Cryptococcus)",
      "Background stained with India ink or nigrosin; capsule remains clear",
      "Helps identify virulence factors"
    ]
  },
  { 
    name: ["Flagella staining"], 
    steps: [
      "Used to visualize bacterial flagella",
      "Mordant thickens flagella, dye makes them visible under light microscope",
      "Determines motility type (monotrichous, peritrichous, etc.)"
    ]
  },
  { 
    name: ["Simple staining"], 
    steps: [
      "Single dye (e.g., methylene blue, safranin, crystal violet)",
      "Reveals cell size, shape, and arrangement",
      "Quick and basic bacterial visualization"
    ]
  },
  { 
    name: ["Differential staining"], 
    steps: [
      "Uses more than one dye to distinguish organisms",
      "Examples: Gram stain, Acid-fast stain",
      "Provides better resolution than simple stains"
    ]
  },
  { 
    name: ["Streak plate method","Streaking"], 
    steps: [
      "Isolates pure colonies on solid agar",
      "Loop streaked across 4 quadrants → gradual dilution of cells",
      "Used in clinical and research microbiology"
    ]
  },
  { 
    name: ["Pour plate method"], 
    steps: [
      "Diluted sample mixed with molten agar → poured into plate",
      "Colonies develop inside agar and on surface",
      "Helps estimate viable bacterial count"
    ]
  },
  { 
    name: ["Spread plate method"], 
    steps: [
      "Diluted sample spread evenly on agar surface with glass rod",
      "Colonies grow only on surface",
      "Used for counting and isolating aerobes"
    ]
  },
  { 
    name: ["Serial dilution"], 
    steps: [
      "Stepwise dilution of culture in sterile water/broth",
      "Helps in colony-forming unit (CFU) calculation",
      "Common in food, water, and medical microbiology"
    ]
  },
  { 
    name: ["Microscopy","Light microscopy","Electron microscopy"], 
    steps: [
      "Light microscopy → bright-field, dark-field, phase-contrast",
      "Electron microscopy → scanning (SEM) and transmission (TEM)",
      "Fluorescence microscopy → uses fluorochromes for pathogen detection"
    ]
  },
  { 
    name: ["Cell culture","Tissue culture"], 
    steps: [
      "Artificial growth of animal/plant cells under sterile conditions",
      "Used for viral growth, vaccine production, and cancer research",
      "Requires aseptic technique and growth medium"
    ]
  },
  { 
    name: ["PCR","Polymerase Chain Reaction"], 
    steps: [
      "Amplifies DNA sequences using primers, nucleotides, and Taq polymerase",
      "Steps: Denaturation → Annealing → Extension",
      "Diagnostic tool for infectious diseases, genetics, forensics"
    ]
  },
  { 
    name: ["Gel electrophoresis"], 
    steps: [
      "Separates DNA, RNA, or proteins based on size/charge",
      "Smaller fragments move faster through agarose/gel matrix",
      "Commonly visualized with UV + ethidium bromide"
    ]
  },
  { 
    name: ["Western blotting"], 
    steps: [
      "Detects specific proteins from a sample",
      "Steps: Gel electrophoresis → Transfer to membrane → Antibody binding",
      "Used in HIV confirmation and protein research"
    ]
  },
  { 
    name: ["ELISA","Enzyme-linked immunosorbent assay"], 
    steps: [
      "Antibody-antigen interaction detected with enzyme-substrate reaction",
      "Produces visible color change",
      "Used in diagnostics (HIV, hepatitis, COVID-19)"
    ]
  },
  { 
    name: ["Flow cytometry"], 
    steps: [
      "Measures physical and chemical characteristics of cells",
      "Laser-based detection → size, granularity, fluorescence",
      "Used in immunology, cancer, and cell sorting"
    ]
  },
  { 
    name: ["Spectrophotometry"], 
    steps: [
      "Measures cell growth via optical density (OD600)",
      "Higher absorbance = higher bacterial growth",
      "Non-invasive, quick method for culture monitoring"
    ]
  },
  { 
    name: ["Blood agar culture","Hemolysis test"], 
    steps: [
      "Detects hemolytic activity of bacteria (α, β, γ hemolysis)",
      "Streptococcus pyogenes = β-hemolysis",
      "Useful in clinical microbiology"
    ]
  },
  { 
    name: ["MacConkey agar test"], 
    steps: [
      "Selective for Gram-negative enteric bacteria",
      "Differentiates lactose fermenters (pink colonies) vs non-fermenters (colorless)",
      "Used for Enterobacteriaceae detection"
    ]
  },
  { 
    name: ["Mannitol salt agar test","MSA test"], 
    steps: [
      "Selective for Staphylococcus due to high NaCl",
      "S. aureus ferments mannitol → turns medium yellow",
      "Differentiates pathogenic vs non-pathogenic staphylococci"
    ]
  },
  { 
    name: ["Catalase test"], 
    steps: [
      "Detects catalase enzyme → breaks down H₂O₂ into water + oxygen",
      "Positive = bubble formation",
      "Used to differentiate Staphylococcus (+) vs Streptococcus (-)"
    ]
  },
  { 
    name: ["Oxidase test"], 
    steps: [
      "Detects cytochrome c oxidase enzyme",
      "Positive = purple/blue color within 30 sec",
      "Important for identifying Pseudomonas, Neisseria"
    ]
  },
  { 
    name: ["Coagulase test"], 
    steps: [
      "Detects coagulase enzyme that clots plasma",
      "S. aureus = positive (clot forms)",
      "Differentiates pathogenic vs non-pathogenic staphylococci"
    ]
  }
];
// Function to search microbes
function searchMicrobes() {
  let query = document.getElementById("microbeSearch").value.toLowerCase().trim();
  let resultsDiv = document.getElementById("microbeResults");
  resultsDiv.innerHTML = "";

  let results = microbes.filter(m => {
    let mainName = m.name.toLowerCase();
    let synonyms = m.synonyms ? m.synonyms.map(s => s.toLowerCase()) : [];
    return mainName.includes(query) || synonyms.some(s => s.includes(query));
  });

  if (results.length > 0) {
    results.forEach(m => {
      let card = document.createElement("div");
      card.className = "result-card";

      let name = document.createElement("h3");
      name.textContent = m.name;
      card.appendChild(name);

      let ul = document.createElement("ul");
      m.info.forEach(point => {
        let li = document.createElement("li");
        li.textContent = point;
        ul.appendChild(li);
      });
      card.appendChild(ul);

      resultsDiv.appendChild(card);
    });
  } else {
    resultsDiv.innerHTML = "<p>No results found</p>";
  }
}
// Function to search techniques
function searchTechniques() {
    let query = document.getElementById("techSearch").value.toLowerCase();
    let resultsDiv = document.getElementById("techResults");
    resultsDiv.innerHTML = "";

    let results = techniques.filter(t =>
        t.name.some(n => n.toLowerCase().includes(query))
    );

    if (results.length > 0) {
        results.forEach(t => {
            let card = document.createElement("div");
            card.className = "result-card";

            let name = document.createElement("h3");
            name.textContent = t.name[0];
            card.appendChild(name);

            let ul = document.createElement("ul");
            t.steps.forEach(point => {   // 🔥 FIXED (was t.info earlier)
                let li = document.createElement("li");
                li.textContent = point;
                ul.appendChild(li);
            });
            card.appendChild(ul);

            resultsDiv.appendChild(card);
        });
    } else {
        resultsDiv.innerHTML = "<p>No results found</p>";
    }
}