export interface AIResponse {
  text: string;
  simpleText: string;
  subject: string;
}

const responses: Record<string, AIResponse> = {
  // ============================
  // MATHEMATICS
  // ============================
  algebra: {
    subject: "Mathematics",
    text: `**Algebra** is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. Here are the key concepts:

**Variables & Expressions:** Variables (like x, y) represent unknown values. Expressions combine variables with numbers and operations (e.g., 3x + 5).

**Equations:** An equation states two expressions are equal (e.g., 2x + 3 = 7). To solve:
1. Isolate the variable: 2x = 7 - 3 = 4
2. Divide: x = 2

**Key Rules:**
- **PEMDAS/BODMAS**: Parentheses → Exponents → Multiply/Divide → Add/Subtract
- **Distributive law**: a(b + c) = ab + ac
- **Quadratic formula**: x = (-b ± √(b² - 4ac)) / 2a

**Linear equations** have one variable with degree 1. **Quadratic equations** have degree 2 and can have 2, 1, or 0 real solutions.`,
    simpleText: `Think of algebra as a mystery game 🔍. You have a box (x) and you need to find what's inside.

**Example:** If x + 3 = 7, the box has 4 inside, because 4 + 3 = 7.

**Easy steps:**
1. Get the mystery box alone on one side
2. Do the same thing to both sides of the equal sign
3. Solve!

Like balancing a see-saw — whatever you do to one side, you must do to the other side too! ⚖️`,
  },

  calculus: {
    subject: "Mathematics",
    text: `**Calculus** is the mathematics of change and accumulation — one of the most powerful tools in science and engineering.

**Two Main Branches:**

**1. Differential Calculus (Derivatives):**
- Measures rate of change (how fast something changes)
- Derivative of f(x): f'(x) = lim[h→0] (f(x+h) - f(x)) / h
- Common rules:
  - Power rule: d/dx (xⁿ) = nxⁿ⁻¹
  - Chain rule: d/dx[f(g(x))] = f'(g(x)) · g'(x)
  - Product rule: d/dx[uv] = u'v + uv'

**2. Integral Calculus (Integrals):**
- Measures accumulation (area under curves)
- **Fundamental Theorem**: Differentiation and integration are inverse operations
- ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (for n ≠ -1)

**Applications:** Velocity, acceleration, areas, volumes, optimization problems.`,
    simpleText: `Calculus is about **measuring change** — like your car's speedometer vs. total distance!

**Derivatives (speed check):** If you're on a road trip, the derivative tells you how fast you're going RIGHT NOW. 🚗💨

**Integrals (total travel):** The integral tells you the TOTAL distance traveled over a trip.

**Super simple rule:** 
- Power rule: xⁿ becomes nxⁿ⁻¹
- So x³ becomes 3x² 
- It's like "bring the power down, then reduce it by 1"

Think of it like: derivative = zoom into a tiny moment, integral = add up all those moments! 📊`,
  },

  trigonometry: {
    subject: "Mathematics",
    text: `**Trigonometry** studies relationships between angles and sides in triangles.

**The 6 Trig Functions** (in a right triangle with angle θ):
- **sin θ** = Opposite/Hypotenuse
- **cos θ** = Adjacent/Hypotenuse  
- **tan θ** = Opposite/Adjacent = sin/cos
- **cosec θ** = 1/sin θ
- **sec θ** = 1/cos θ
- **cot θ** = 1/tan θ

**Key Values Table:**
| Angle | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| sin | 0 | 1/2 | 1/√2 | √3/2 | 1 |
| cos | 1 | √3/2 | 1/√2 | 1/2 | 0 |
| tan | 0 | 1/√3 | 1 | √3 | ∞ |

**Important Identities:**
- sin²θ + cos²θ = 1
- sin 2θ = 2 sin θ cos θ
- cos 2θ = cos²θ - sin²θ`,
    simpleText: `Trig is about **right triangles** — and the three magic words are **SOH-CAH-TOA**! 

**SOH-CAH-TOA:**
- **S**OH = **S**in = **O**pposite / **H**ypotenuse
- **C**AH = **C**os = **A**djacent / **H**ypotenuse
- **T**OA = **T**an = **O**pposite / **A**djacent

Think of a triangle like a ramp: the diagonal (hypotenuse) is the ramp, the bottom is adjacent, the height is opposite.

**Memory trick for sin values:** 0, 1/2, 1/√2, √3/2, 1 — that's 0°, 30°, 45°, 60°, 90°. Count fingers of your left hand: thumb=0, index=1/2... 🤚`,
  },

  geometry: {
    subject: "Mathematics",
    text: `**Geometry** is the study of shapes, sizes, and properties of figures and spaces.

**2D Shapes — Key Formulas:**
- **Circle:** Area = πr², Circumference = 2πr
- **Triangle:** Area = ½ × base × height
- **Rectangle:** Area = l × w, Perimeter = 2(l+w)
- **Square:** Area = a², Perimeter = 4a
- **Trapezoid:** Area = ½(a+b) × h

**3D Shapes — Key Formulas:**
- **Sphere:** Volume = (4/3)πr³, Surface area = 4πr²
- **Cylinder:** Volume = πr²h, Surface area = 2πr(r+h)
- **Cone:** Volume = (1/3)πr²h

**Pythagorean Theorem:** a² + b² = c² (right triangles only)

**Angle Properties:**
- Sum of angles in triangle = 180°
- Sum of angles in quadrilateral = 360°
- Complementary angles sum to 90°, supplementary to 180°`,
    simpleText: `Geometry is about **shapes and measurements** — things you can see and touch!

**Quick formula cheat sheet:**
- Circle area = π × radius² (π ≈ 3.14)
- Triangle area = base × height ÷ 2
- Rectangle area = length × width

**Pythagorean theorem (most important!):**
In a right triangle: a² + b² = c²
If two sides are 3 and 4, the third is 5! (Because 9 + 16 = 25 = 5²) 📐

**Remember angles:**
- Triangle = 180°
- Square = 360° 
- Straight line = 180°`,
  },

  // ============================
  // PHYSICS
  // ============================
  "newton's laws": {
    subject: "Physics",
    text: `**Newton's Three Laws of Motion** are the foundation of classical mechanics:

**First Law (Law of Inertia):**
"An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external net force."
- Objects resist changes to their state of motion
- Example: You slide forward when a car brakes suddenly

**Second Law (F = ma):**
"The net force on an object equals its mass times its acceleration."
- **F = ma** (Force in Newtons, mass in kg, acceleration in m/s²)
- Greater force → greater acceleration
- Greater mass → less acceleration for same force

**Third Law (Action-Reaction):**
"For every action, there is an equal and opposite reaction."
- Forces always come in pairs
- Example: Rocket propulsion — gas pushes down, rocket pushes up

**Important:** The reaction forces act on DIFFERENT objects, so they don't cancel each other out.`,
    simpleText: `Newton's laws explained with everyday examples! 🍎

**Law 1 (Laziness law):** Things are lazy! A sleeping ball stays sleeping unless you kick it. A rolling ball keeps rolling unless friction stops it.

**Law 2 (Push harder, go faster):** F = ma means:
- Push a shopping cart hard → it goes fast
- A heavy cart needs more push
- It's basically: more force = more speed!

**Law 3 (Every push gets a push back):** When you jump, you push the ground down — the ground pushes you UP! When you swim, you push water backward — water pushes you FORWARD! 🏊`,
  },

  motion: {
    subject: "Physics",
    text: `**Kinematics** — the study of motion without considering its causes.

**Key Variables:**
- **s** = displacement (m)
- **u** = initial velocity (m/s)
- **v** = final velocity (m/s)  
- **a** = acceleration (m/s²)
- **t** = time (s)

**Equations of Motion (SUVAT):**
1. **v = u + at**
2. **s = ut + ½at²**
3. **v² = u² + 2as**
4. **s = (u + v)t / 2**

**Projectile Motion:**
- Horizontal: x = u·cos θ · t (constant velocity)
- Vertical: y = u·sin θ · t - ½gt²
- Range: R = u² sin 2θ / g
- Maximum range at θ = 45°

**Free Fall:** a = g = 9.8 m/s² (downward)

**Uniform Circular Motion:**
- Centripetal acceleration: a = v²/r
- Centripetal force: F = mv²/r`,
    simpleText: `Motion is about **where things go and how fast**! 🚀

**The 3 magic equations (memorize these!):**
1. v = u + at (final speed = start speed + speed gained)
2. s = ut + ½at² (distance = starting speed × time + half of acceleration × time²)
3. v² = u² + 2as (useful when no time given)

**Easy example:** A ball dropped from rest (u=0) for 2 seconds:
- s = ½ × 10 × 4 = 20 meters!

**Projectile tip:** The horizontal and vertical movements are INDEPENDENT — treat them separately! The ball goes forward at constant speed AND falls down with gravity at the same time. 🎯`,
  },

  energy: {
    subject: "Physics",
    text: `**Energy** is the capacity to do work. It is conserved — it cannot be created or destroyed, only transformed.

**Types of Mechanical Energy:**
- **Kinetic Energy (KE):** Energy of motion → KE = ½mv²
- **Potential Energy (PE):** Stored energy
  - Gravitational PE = mgh
  - Elastic PE = ½kx² (springs)

**Work-Energy Theorem:**
Work = Change in Kinetic Energy
W = ΔKE = ½mv² - ½mu²

**Power:**
P = W/t = Force × velocity
Units: Watts (W) = Joules/second

**Conservation of Mechanical Energy:**
KE + PE = constant (in the absence of friction)
½mv₁² + mgh₁ = ½mv₂² + mgh₂

**Efficiency:**
η = (Useful output energy / Input energy) × 100%

**Units:** Energy in Joules (J), Power in Watts (W)`,
    simpleText: `Energy is like **money for doing work** 💰. You need it to make things happen!

**Two main types:**
- **Kinetic** = energy of MOVING things: KE = ½ × mass × speed²
- **Potential** = energy STORED (like a stretched rubber band): PE = mass × gravity × height

**The golden rule:** Energy can't be created or destroyed! It just changes form.
- A falling apple: PE → KE (height energy becomes speed energy)
- A car braking: KE → Heat (speed energy becomes warmth)

**Simple numbers:** A 1 kg ball at 10 m height has: PE = 1 × 10 × 10 = 100 J of energy! 🍎`,
  },

  electricity: {
    subject: "Physics",
    text: `**Electricity & Current Electricity** — the flow of electric charge.

**Basic Concepts:**
- **Current (I):** Flow of charge → I = Q/t (Amperes)
- **Voltage (V):** Electric potential difference (Volts)
- **Resistance (R):** Opposition to current flow (Ohms, Ω)

**Ohm's Law:** V = IR (Voltage = Current × Resistance)

**Circuit Types:**
- **Series:** Same current, voltages add up → R_total = R₁ + R₂ + R₃
- **Parallel:** Same voltage, currents add up → 1/R_total = 1/R₁ + 1/R₂ + 1/R₃

**Power:** P = VI = I²R = V²/R (Watts)

**Kirchhoff's Laws:**
- **KCL:** Sum of currents entering a node = sum leaving
- **KVL:** Sum of voltages in a closed loop = 0

**Magnetic Effects of Current:**
- Current-carrying conductor creates a magnetic field
- Force on conductor in field: F = BIL sin θ`,
    simpleText: `Electricity is like **water flowing through pipes** 🚿

**The big three:**
- **Voltage (V)** = Water pressure (pushes electrons)
- **Current (I)** = Water flow rate (how many electrons)
- **Resistance (R)** = Pipe narrowness (blocks electrons)

**Ohm's Law = V = IR**
(Think: V for Voltage = I for intensity × R for resistance)

**Series vs Parallel:**
- Series = Christmas lights in a chain (one breaks, all go out!)
- Parallel = House wiring (one light off, others still on!) 💡

**Power = VI** — just multiply volts × amps to get watts!`,
  },

  optics: {
    subject: "Physics",
    text: `**Optics** — the study of light and its behavior.

**Nature of Light:**
- Travels at c = 3 × 10⁸ m/s in vacuum
- Has both wave and particle nature (wave-particle duality)

**Reflection:**
- Angle of incidence = Angle of reflection
- Mirror formula: 1/v + 1/u = 1/f (where f = R/2)
- Magnification: m = -v/u

**Refraction:**
- Snell's Law: n₁ sin θ₁ = n₂ sin θ₂
- Refractive index: n = c/v = speed in vacuum / speed in medium
- Total Internal Reflection occurs when angle > critical angle

**Lenses:**
- Convex lens: converging, positive focal length
- Concave lens: diverging, negative focal length
- Lens formula: 1/v - 1/u = 1/f
- Lens power: P = 1/f (in Diopters)

**Prism & Dispersion:**
- White light splits into VIBGYOR spectrum
- Violet deviates most, red least`,
    simpleText: `Optics is the physics of **light** — mirrors, lenses, rainbows! 🌈

**Reflection (mirrors):** The angle light hits a mirror = angle it bounces off. Like throwing a ball at a wall!

**Refraction (bending light):** Light bends when it goes from air to water. That's why a straw looks bent in a glass of water!

**Snell's Law:** n₁ sin θ₁ = n₂ sin θ₂
(Don't panic — it just says light bends based on how dense the material is)

**Easy memory:**
- Convex lens = magnifying glass (brings light TOGETHER like a converging meeting)
- Concave lens = spreading out (think CAVE = goes inward, light spreads outward)

Rainbows happen because raindrops act like tiny prisms — splitting white light into all 7 colors! 🌈`,
  },

  // ============================
  // CHEMISTRY
  // ============================
  "periodic table": {
    subject: "Chemistry",
    text: `**The Periodic Table** organizes all 118 known elements by atomic number and properties.

**Structure:**
- **Periods (rows):** 7 horizontal rows. Period number = number of electron shells
- **Groups (columns):** 18 vertical columns. Group number relates to valence electrons
- Elements in same group have similar chemical properties

**Key Groups:**
- **Group 1 (Alkali metals):** Li, Na, K, Rb, Cs, Fr — highly reactive, form +1 ions
- **Group 2 (Alkaline earth metals):** Be, Mg, Ca — form +2 ions
- **Group 17 (Halogens):** F, Cl, Br, I — highly reactive nonmetals, form -1 ions
- **Group 18 (Noble gases):** He, Ne, Ar — inert, complete outer shells
- **Transition metals:** Groups 3-12 — variable oxidation states

**Periodic Trends:**
- **Atomic radius:** Increases down a group, decreases across a period (left to right)
- **Ionization energy:** Decreases down, increases across (left to right)
- **Electronegativity:** Same as ionization energy pattern; F is most electronegative`,
    simpleText: `The periodic table is like a **super organized neighborhood map** of all atoms! 🗺️

**How to read it:**
- **Rows** = how many "layers" (electron shells) the atom has
- **Columns** = how many electrons in the outermost layer

**The most important groups:**
- Column 1 (left side): Very reactive metals (they LOVE to give away 1 electron)
- Column 17: Halogens (they LOVE to grab 1 electron)
- Column 18 (right side): Noble gases — they're PERFECT, don't react with anyone!

**Memory trick for trends:** As you go LEFT and DOWN in the table, atoms get BIGGER and LAZIER (less electronegative). Going RIGHT and UP = smaller and more reactive!`,
  },

  "chemical bonds": {
    subject: "Chemistry",
    text: `**Chemical Bonding** — how atoms combine to form compounds.

**Types of Chemical Bonds:**

**1. Ionic Bond:**
- Between metals and nonmetals
- Transfer of electrons (one atom gives, other takes)
- Forms ions: cations (+) and anions (-)
- Example: NaCl — Na gives 1 electron to Cl

**2. Covalent Bond:**
- Between nonmetals
- Sharing of electrons
- Single bond: 1 shared pair; Double: 2 pairs; Triple: 3 pairs
- Example: H₂O, CO₂, N₂

**3. Metallic Bond:**
- Between metal atoms
- "Sea of electrons" — electrons delocalized
- Explains conductivity and malleability of metals

**Bond Polarity:**
- Determined by electronegativity difference
- Δ EN > 1.7 → Ionic
- 0.4 < Δ EN ≤ 1.7 → Polar covalent
- Δ EN ≤ 0.4 → Nonpolar covalent

**VSEPR Theory:** Electron pairs repel each other → determines molecular geometry`,
    simpleText: `Chemical bonds are how atoms **hold hands** to form molecules! 🤝

**3 ways atoms bond:**

**Ionic bond** (give and take):
- Metal gives electron to nonmetal
- Like a generous friend giving a gift
- Example: Table salt (NaCl) — sodium GIVES an electron to chlorine

**Covalent bond** (sharing):
- Two nonmetals SHARE electrons
- Like friends sharing a pizza 🍕
- Example: Water (H₂O) — hydrogen and oxygen share electrons

**Metallic bond** (sharing with everyone):
- Metal atoms share electrons with ALL neighbors
- Like a commune where everyone shares everything
- That's why metals conduct electricity — electrons roam freely!`,
  },

  acids: {
    subject: "Chemistry",
    text: `**Acids and Bases** — fundamental concepts in chemistry.

**Definitions:**
- **Arrhenius:** Acid produces H⁺ in water; Base produces OH⁻
- **Brønsted-Lowry:** Acid is proton donor (H⁺); Base is proton acceptor
- **Lewis:** Acid is electron pair acceptor; Base is electron pair donor

**pH Scale:**
- pH = -log[H⁺]
- pH < 7: Acidic
- pH = 7: Neutral (pure water)
- pH > 7: Basic/Alkaline
- Each pH unit = 10× change in concentration

**Strong Acids:** HCl, H₂SO₄, HNO₃, HBr, HI (completely ionize)
**Weak Acids:** CH₃COOH (acetic acid), H₂CO₃ (carbonic acid)
**Strong Bases:** NaOH, KOH, Ca(OH)₂
**Weak Bases:** NH₃ (ammonia), amines

**Neutralization:**
Acid + Base → Salt + Water
HCl + NaOH → NaCl + H₂O

**Indicators:** Litmus (red in acid, blue in base), Phenolphthalein (colorless in acid, pink in base)`,
    simpleText: `Acids and bases — imagine a **taste scale** (but don't actually taste chemicals!)

**Acids:** Sour taste, pH below 7
- Lemon juice, vinegar, stomach acid, soda
- Donate H⁺ ions (proton givers!)

**Bases:** Slippery feel, pH above 7  
- Soap, baking soda, bleach, antacids
- Accept H⁺ ions (proton takers!)

**pH = the "how acidic" number:**
- 1 = very acidic (battery acid 😱)
- 7 = neutral (pure water 💧)
- 14 = very basic (drain cleaner 😱)

**Neutralization = acid + base = salt + water**
Like lemon juice (acid) + baking soda (base) = fizzing! That fizz is the reaction! 🍋`,
  },

  organic: {
    subject: "Chemistry",
    text: `**Organic Chemistry** — the study of carbon-containing compounds.

**Why Carbon is Special:**
- Forms 4 bonds (tetravalent)
- Can bond with itself to form chains and rings
- Basis of all life on Earth

**Functional Groups:**
| Group | Name | Example |
|---|---|---|
| -OH | Alcohol | Ethanol (C₂H₅OH) |
| -COOH | Carboxylic acid | Acetic acid (CH₃COOH) |
| -CHO | Aldehyde | Formaldehyde (HCHO) |
| -CO- | Ketone | Acetone (CH₃COCH₃) |
| -NH₂ | Amine | Methylamine |
| -COO- | Ester | Ethyl acetate |

**Hydrocarbons:**
- **Alkanes:** CₙH₂ₙ₊₂ (saturated, single bonds) — methane, ethane
- **Alkenes:** CₙH₂ₙ (one double bond) — ethylene
- **Alkynes:** CₙH₂ₙ₋₂ (one triple bond) — acetylene

**Reactions:**
- Substitution (alkanes), Addition (alkenes), Elimination, Oxidation`,
    simpleText: `Organic chemistry = **chemistry of carbon** (basically chemistry of life!) 🌿

**Why carbon is special:** It can make 4 bonds and link up to form chains, rings, and complex structures — like a Lego master!

**Hydrocarbons (only C and H):**
- **Methane** (CH₄) = natural gas, simplest molecule
- Add one more carbon → **Ethane** → keep adding → make gasoline!

**Functional groups = personality badges:**
- -OH = "I'm an alcohol!" (like ethanol in drinks)
- -COOH = "I'm an acid!" (like vinegar)
- -NH₂ = "I'm an amine!" (found in proteins)

Think of carbon as a connector piece — all of life (DNA, proteins, fats) is just carbon connecting in different ways! 🧬`,
  },

  // ============================
  // BIOLOGY
  // ============================
  cell: {
    subject: "Biology",
    text: `**Cell Biology** — the fundamental unit of life.

**Cell Types:**
- **Prokaryotic:** No membrane-bound nucleus (bacteria, archaea). Smaller, simpler.
- **Eukaryotic:** Membrane-bound nucleus (plants, animals, fungi). Larger, complex.

**Key Organelles:**
| Organelle | Function |
|---|---|
| Nucleus | Controls cell activity, contains DNA |
| Mitochondria | Cellular respiration, ATP production ("powerhouse") |
| Ribosomes | Protein synthesis |
| Endoplasmic Reticulum | Protein/lipid synthesis and transport |
| Golgi Apparatus | Modifies, packages, ships proteins |
| Chloroplasts | Photosynthesis (plant cells only) |
| Cell membrane | Controls what enters/leaves |
| Cell wall | Structural support (plant cells only) |
| Vacuole | Storage (large in plants) |

**Cell Division:**
- **Mitosis:** Body cells, 46 chromosomes → 2 identical daughter cells
- **Meiosis:** Sex cells (gametes), 23 chromosomes → 4 unique cells`,
    simpleText: `A cell is like a **tiny city** with different departments! 🏙️

**The organelles (city departments):**
- **Nucleus** = City Hall (the boss, has all the rules/DNA)
- **Mitochondria** = Power plant (makes energy/ATP)
- **Ribosome** = Factory (makes proteins)
- **Cell membrane** = City walls (controls who enters/exits)
- **Vacuole** = Warehouse (stores stuff)

**Plant vs Animal cells:**
- Plants have: Cell WALL (extra protection), Chloroplasts (for photosynthesis), Large central vacuole
- Animals have: Centrioles (for cell division)

**Division:**
- Mitosis = copy yourself (2 identical copies, for growth)
- Meiosis = make babies (4 half-copies, for reproduction) 👶`,
  },

  photosynthesis: {
    subject: "Biology",
    text: `**Photosynthesis** — how plants make food using sunlight.

**Overall Equation:**
6CO₂ + 6H₂O + Light energy → C₆H₁₂O₆ + 6O₂

**Two Stages:**

**1. Light-Dependent Reactions (in Thylakoid membrane):**
- Captures light energy using chlorophyll
- Splits water (photolysis): H₂O → 2H⁺ + ½O₂ + 2e⁻
- Produces: ATP, NADPH, O₂ (oxygen released!)
- Photosystems I and II involved

**2. Light-Independent Reactions / Calvin Cycle (in Stroma):**
- Uses ATP and NADPH from light reactions
- Fixes CO₂ into glucose
- 3 CO₂ + 9 ATP + 6 NADPH → 1 G3P (precursor to glucose)
- RuBiSCO enzyme catalyzes CO₂ fixation

**Factors Affecting Rate:**
- Light intensity (more light = faster, up to saturation)
- CO₂ concentration
- Temperature (optimal ~25-30°C)
- Water availability`,
    simpleText: `Photosynthesis = plants making their own **food from sunlight** ☀️🌿

**Simple equation:**
Water + Carbon dioxide + Sunlight → Glucose + Oxygen

(Plants breathe IN CO₂ and breathe OUT oxygen — they're our air purifiers!)

**Two steps:**
1. **Light reactions:** "Capture sunlight, split water, make energy (ATP)"
2. **Dark reactions (Calvin cycle):** "Use that energy to build sugar from CO₂"

**Where it happens:** In **chloroplasts** — those green structures in leaves. The green color comes from **chlorophyll** pigment.

**Why care?** Without photosynthesis, there's no oxygen, no food, no life. Plants are literally keeping us alive! 🌍`,
  },

  genetics: {
    subject: "Biology",
    text: `**Genetics** — the study of heredity and variation.

**Key Terms:**
- **Gene:** A segment of DNA coding for a protein
- **Allele:** Alternate forms of a gene (e.g., B for brown eyes, b for blue)
- **Genotype:** Genetic makeup (e.g., Bb)
- **Phenotype:** Observable traits (e.g., brown eyes)
- **Homozygous:** Both alleles identical (BB or bb)
- **Heterozygous:** Different alleles (Bb)

**Mendel's Laws:**
1. **Law of Segregation:** Each organism has 2 alleles for each trait; they separate during gamete formation
2. **Law of Independent Assortment:** Genes for different traits are inherited independently

**Dominance:**
- Dominant allele (B) masks recessive allele (b)
- Phenotype shows dominant trait if at least one dominant allele present

**DNA Structure:**
- Double helix discovered by Watson & Crick (1953)
- Made of nucleotides: Sugar + Phosphate + Nitrogenous base
- Base pairs: A-T and G-C (A pairs with T, G pairs with C)

**Central Dogma:** DNA → RNA → Protein (transcription then translation)`,
    simpleText: `Genetics = how traits are **passed from parents to children** 🧬

**Think of genes like playing cards:**
- You get 2 cards for each trait (one from mom, one from dad)
- Some cards "win" (dominant) over others (recessive)

**Example with eye color:**
- B = brown (dominant), b = blue (recessive)
- BB = brown eyes, Bb = brown eyes, bb = blue eyes
- Brown "beats" blue — you need TWO blue cards to show blue eyes!

**Punnett square** = a grid to predict what kids could look like
- Parent 1: Bb × Parent 2: Bb
- Results: BB (25%), Bb (50%), bb (25%)
- 75% chance of brown eyes, 25% blue eyes! 🎲

**DNA = your body's instruction manual** — 3 billion letters long, all in A, T, G, C code!`,
  },

  // ============================
  // COMPUTER SCIENCE
  // ============================
  arrays: {
    subject: "Computer Science",
    text: `**Arrays** — one of the most fundamental data structures in computer science.

**Definition:** A collection of elements stored at contiguous memory locations, accessed by index.

**Properties:**
- Fixed size (in most languages)
- Same data type for all elements
- Index starts at 0 (zero-indexed)
- Time complexity:
  - Access: O(1) — instant!
  - Search: O(n) — linear scan
  - Insert/Delete: O(n) — shifting required

**Types:**
- **1D Array:** int arr[5] = {1, 2, 3, 4, 5}
- **2D Array (Matrix):** arr[rows][cols]
- **Dynamic arrays:** ArrayList in Java, list in Python, vector in C++

**Common Operations:**
\`\`\`
Traversal: for i in range(len(arr))
Sorting: Arrays.sort() / .sort()
Searching: Binary search O(log n) on sorted arrays
\`\`\`

**When to Use Arrays:**
- When you need fast random access
- When size is known and fixed
- For matrices and 2D data

**Limitations:** Fixed size, expensive insertions/deletions in middle`,
    simpleText: `An array is like a **row of numbered mailboxes** 📬

**Imagine:** 5 mailboxes in a row, numbered 0, 1, 2, 3, 4.
- arr[0] = mailbox 1
- arr[3] = mailbox 4
- Always start counting from 0!

**Why arrays are great:**
- Get any item instantly (just know the number)
- Great for lists of the same kind of thing

**Why they can be tricky:**
- Fixed size — you decide how many mailboxes when you build the row
- Adding in the middle means everyone shifts over (slow!)

**Most used operations:**
- Loop through all items: for i from 0 to length-1
- Find an item: check each one (or binary search if sorted) 🔍`,
  },

  loops: {
    subject: "Computer Science",
    text: `**Loops** — repeating code blocks efficiently.

**Types of Loops:**

**1. For Loop:** Use when iterations are known
\`\`\`python
for i in range(10):
    print(i)  # prints 0 to 9
\`\`\`

**2. While Loop:** Use when condition-based
\`\`\`python
while x > 0:
    x -= 1
\`\`\`

**3. Do-While Loop (C/Java):** Executes at least once
\`\`\`java
do {
    // code
} while (condition);
\`\`\`

**Loop Control:**
- **break:** Exit loop immediately
- **continue:** Skip current iteration, go to next
- **Nested loops:** Loop inside a loop (be careful — O(n²) complexity!)

**Common Patterns:**
- Sum of array: accumulate in variable
- Finding max/min: track while iterating
- Counting occurrences: increment counter

**Infinite Loop Pitfall:** Always ensure loop condition eventually becomes false!`,
    simpleText: `A loop is like saying **"do this repeatedly"** 🔄

**For loop = "do this exactly N times"**
\`\`\`
for i from 1 to 10:
    print "Hello!" 
\`\`\`
(Says hello 10 times)

**While loop = "keep doing until something changes"**
\`\`\`
while hungry:
    eat food
\`\`\`
(Keep eating while hungry!)

**Real example:** Print numbers 1-100
- Without loops: write print(1), print(2)... 100 lines!
- With a loop: just 2 lines!

**Break = emergency exit** 🚪 — leave the loop immediately
**Continue = skip this round** ⏭️ — go to next repetition

Loops are how computers do boring repetitive tasks — they never get tired! 🤖`,
  },

  oop: {
    subject: "Computer Science",
    text: `**Object-Oriented Programming (OOP)** — a programming paradigm based on objects.

**4 Pillars of OOP:**

**1. Encapsulation:**
- Bundling data + methods into a single unit (class)
- Private members hidden from outside
- Access via public methods (getters/setters)

**2. Inheritance:**
- Child class inherits properties and methods from parent
- Promotes code reuse
- "is-a" relationship: Dog is-a Animal

**3. Polymorphism:**
- Same interface, different implementations
- **Method overloading:** Same name, different parameters
- **Method overriding:** Child class provides different implementation

**4. Abstraction:**
- Hiding complex implementation, showing only essential features
- Abstract classes and interfaces

**Class vs Object:**
- **Class** = Blueprint (Car design)
- **Object** = Instance (Your specific car)

**Example:**
\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"
\`\`\``,
    simpleText: `OOP is like **building with blueprints** 🏗️

**Class = Blueprint, Object = Real thing**
- Class "Car" = the design/plan
- Your specific car = an object (instance)

**4 big ideas:**

**Encapsulation** = Keep things private 🔒
- Like a TV remote — you just press buttons, you don't see the circuits inside

**Inheritance** = Kids get traits from parents 👨‍👩‍👧
- Dog class inherits from Animal class
- Dog gets all animal features PLUS dog-specific ones

**Polymorphism** = Same action, different results 🎭
- Animal.speak() → Dog says "Woof!", Cat says "Meow!"

**Abstraction** = Show only what matters 🎭
- You use ATM without knowing the banking software behind it!

OOP makes code organized, reusable, and easy to maintain! 💻`,
  },

  algorithms: {
    subject: "Computer Science",
    text: `**Algorithms** — step-by-step procedures to solve problems.

**Complexity Analysis (Big O):**
- O(1) — Constant: doesn't grow with input
- O(log n) — Logarithmic: very efficient (binary search)
- O(n) — Linear: grows proportionally
- O(n log n) — Log-linear: efficient sorting
- O(n²) — Quadratic: nested loops
- O(2ⁿ) — Exponential: avoid for large inputs!

**Sorting Algorithms:**
| Algorithm | Best | Average | Worst | Space |
|---|---|---|---|---|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |

**Searching:**
- **Linear search:** O(n)
- **Binary search:** O(log n) — requires sorted array

**Algorithm Design Techniques:**
- Divide and Conquer, Dynamic Programming, Greedy, Backtracking`,
    simpleText: `An algorithm is just a **recipe for solving a problem** 👨‍🍳

**Big O = how fast does it grow?**
- O(1) = instant! (like looking at index 5)
- O(n) = checks every item once (like reading a book)
- O(n²) = checks every pair (like comparing everyone with everyone else)

**Sorting algorithms simplified:**
- **Bubble sort:** Compare neighbors and swap — simple but slow 🐢
- **Merge sort:** Divide list in half, sort each, merge — fast! ⚡
- **Quick sort:** Pick a pivot, sort around it — usually fastest in practice

**Binary search (superpower!):**
- Only works on sorted lists
- Always check the MIDDLE — if too high, look left; too low, look right
- Find 1 million items in just 20 checks! 🎯

Always ask: "What's the Big O of my solution?" before coding!`,
  },

  // ============================
  // HISTORY
  // ============================
  "indian history": {
    subject: "History",
    text: `**Indian History** — a rich tapestry spanning thousands of years.

**Ancient India:**
- **Indus Valley Civilization (3300–1300 BCE):** Harappa & Mohenjo-daro, planned cities, drainage systems
- **Vedic Period (1500–500 BCE):** Aryans, Vedas written, caste system begins
- **Maurya Empire (322–185 BCE):** Chandragupta Maurya, Ashoka (spread Buddhism)
- **Gupta Empire (320–550 CE):** "Golden Age" — science, literature, Aryabhata, zero

**Medieval India:**
- **Delhi Sultanate (1206–1526):** First Muslim dynasties
- **Mughal Empire (1526–1857):** Akbar (religious tolerance), Taj Mahal (Shah Jahan), decline under Aurangzeb
- **Vijayanagara Empire, Maratha Empire (17th-18th century)**

**Modern India:**
- **British East India Company (1600s):** Trade to colonization
- **1857 First War of Independence:** Sepoy Mutiny
- **Indian National Congress (1885):** Nationalist movement
- **Gandhian Era:** Non-cooperation, Civil Disobedience, Quit India movements
- **Independence (August 15, 1947):** Partition of India and Pakistan
- **Constitution (January 26, 1950):** Republic Day`,
    simpleText: `Indian history in a nutshell! 🇮🇳

**Timeline (super simplified):**
1. **Ancient** (3000 BCE): Indus Valley people built amazing cities with indoor plumbing!
2. **Maurya Empire** (322 BCE): Ashoka was king, spread Buddhism, ruled wisely
3. **Gupta "Golden Age"** (320 CE): Indians invented ZERO, chess, yoga, and advanced math!
4. **Mughal Empire** (1526): Akbar was the greatest — built Taj Mahal was Shah Jahan
5. **British rule** (1858-1947): East India Company turned into full colonial rule
6. **Freedom struggle**: Gandhi led non-violent protests — no guns, just courage!
7. **Independence** (Aug 15, 1947): India finally free after 200 years!

**Key dates to remember:**
- 1857 = First uprising against British
- 1947 = Independence
- 1950 = Republic Day (constitution adopted) 📜`,
  },

  // ============================
  // ENGLISH
  // ============================
  grammar: {
    subject: "English",
    text: `**English Grammar** — the rules governing the English language.

**Parts of Speech:**
- **Noun:** Person, place, thing, idea (cat, India, love)
- **Pronoun:** Replaces noun (he, she, it, they)
- **Verb:** Action or state (run, is, seems)
- **Adjective:** Describes noun (beautiful, large, red)
- **Adverb:** Modifies verb/adjective/adverb (quickly, very, well)
- **Preposition:** Shows relationship (in, on, at, with, by)
- **Conjunction:** Connects clauses (and, but, because, although)
- **Interjection:** Exclamation (Oh!, Wow!, Alas!)

**Tenses:**
- **Simple:** I walk, I walked, I will walk
- **Continuous:** I am walking, I was walking, I will be walking
- **Perfect:** I have walked, I had walked, I will have walked
- **Perfect Continuous:** I have been walking...

**Active vs Passive Voice:**
- Active: "The dog ate the bone." (Subject does action)
- Passive: "The bone was eaten by the dog." (Subject receives action)

**Subject-Verb Agreement:** Singular subject → singular verb; plural → plural`,
    simpleText: `Grammar = the **rulebook for speaking and writing** English correctly 📖

**Parts of speech (the 8 word types):**
- **Noun** = a NAME (cat, city, happiness)
- **Verb** = an ACTION (run, eat, is)
- **Adjective** = DESCRIBES a noun (big cat, happy day)
- **Adverb** = DESCRIBES a verb (runs quickly, very big)

**Tenses (when did it happen?):**
- Past: "I studied yesterday"
- Present: "I study now"  
- Future: "I will study tomorrow"

**Active vs Passive:**
- Active = subject DOES the action: "Ram ate the mango" 🥭
- Passive = subject RECEIVES the action: "The mango was eaten by Ram"

**Common mistakes to avoid:**
- Their/There/They're are different words!
- "It's" = "it is", "Its" = belonging to it`,
  },
};

function normalizeQuery(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s']/g, " ")
    .trim();
}

const keywordMap: Record<string, keyof typeof responses> = {
  // Algebra
  algebra: "algebra",
  equation: "algebra",
  "quadratic formula": "algebra",
  "linear equation": "algebra",
  variable: "algebra",
  polynomial: "algebra",

  // Calculus
  calculus: "calculus",
  derivative: "calculus",
  integral: "calculus",
  differentiation: "calculus",
  integration: "calculus",
  "chain rule": "calculus",
  limit: "calculus",

  // Trigonometry
  trigonometry: "trigonometry",
  trig: "trigonometry",
  "sin cos tan": "trigonometry",
  sine: "trigonometry",
  cosine: "trigonometry",
  tangent: "trigonometry",
  "soh cah toa": "trigonometry",
  sohtoa: "trigonometry",

  // Geometry
  geometry: "geometry",
  "pythagoras theorem": "geometry",
  pythagorean: "geometry",
  circle: "geometry",
  area: "geometry",
  volume: "geometry",
  triangle: "geometry",
  "surface area": "geometry",

  // Physics - Newton
  "newton's laws": "newton's laws",
  newtons: "newton's laws",
  "law of motion": "newton's laws",
  inertia: "newton's laws",
  "action reaction": "newton's laws",
  "f = ma": "newton's laws",

  // Physics - Motion
  kinematics: "motion",
  motion: "motion",
  velocity: "motion",
  acceleration: "motion",
  displacement: "motion",
  suvat: "motion",
  projectile: "motion",
  "free fall": "motion",

  // Physics - Energy
  energy: "energy",
  "kinetic energy": "energy",
  "potential energy": "energy",
  work: "energy",
  power: "energy",
  joule: "energy",
  watt: "energy",

  // Physics - Electricity
  electricity: "electricity",
  current: "electricity",
  voltage: "electricity",
  resistance: "electricity",
  "ohm's law": "electricity",
  circuit: "electricity",
  "kirchhoff's law": "electricity",
  conductor: "electricity",

  // Physics - Optics
  optics: "optics",
  light: "optics",
  reflection: "optics",
  refraction: "optics",
  lens: "optics",
  mirror: "optics",
  prism: "optics",
  "snell's law": "optics",

  // Chemistry - Periodic Table
  "periodic table": "periodic table",
  element: "periodic table",
  "atomic number": "periodic table",
  "noble gas": "periodic table",
  halogen: "periodic table",
  alkali: "periodic table",
  period: "periodic table",
  group: "periodic table",

  // Chemistry - Bonds
  "chemical bond": "chemical bonds",
  ionic: "chemical bonds",
  covalent: "chemical bonds",
  metallic: "chemical bonds",
  electronegativity: "chemical bonds",
  vsepr: "chemical bonds",
  bonding: "chemical bonds",

  // Chemistry - Acids
  acid: "acids",
  base: "acids",
  ph: "acids",
  neutralization: "acids",
  indicator: "acids",
  litmus: "acids",
  buffer: "acids",

  // Chemistry - Organic
  organic: "organic",
  hydrocarbon: "organic",
  alkane: "organic",
  alkene: "organic",
  carbon: "organic",
  "functional group": "organic",
  polymer: "organic",

  // Biology - Cell
  cell: "cell",
  organelle: "cell",
  nucleus: "cell",
  mitochondria: "cell",
  "cell membrane": "cell",
  "cell wall": "cell",
  prokaryote: "cell",
  eukaryote: "cell",
  mitosis: "cell",
  meiosis: "cell",

  // Biology - Photosynthesis
  photosynthesis: "photosynthesis",
  chlorophyll: "photosynthesis",
  chloroplast: "photosynthesis",
  "calvin cycle": "photosynthesis",
  "light reaction": "photosynthesis",
  glucose: "photosynthesis",

  // Biology - Genetics
  genetics: "genetics",
  dna: "genetics",
  gene: "genetics",
  allele: "genetics",
  mendel: "genetics",
  chromosome: "genetics",
  dominant: "genetics",
  recessive: "genetics",
  heredity: "genetics",

  // CS - Arrays
  array: "arrays",
  "data structure": "arrays",
  "linked list": "arrays",
  index: "arrays",

  // CS - Loops
  loop: "loops",
  "for loop": "loops",
  "while loop": "loops",
  iteration: "loops",
  iterate: "loops",

  // CS - OOP
  oop: "oop",
  "object oriented": "oop",
  class: "oop",
  object: "oop",
  inheritance: "oop",
  polymorphism: "oop",
  encapsulation: "oop",
  abstraction: "oop",

  // CS - Algorithms
  algorithm: "algorithms",
  "sorting algorithm": "algorithms",
  "binary search": "algorithms",
  "big o": "algorithms",
  complexity: "algorithms",
  "merge sort": "algorithms",
  "bubble sort": "algorithms",

  // History
  "indian history": "indian history",
  mughal: "indian history",
  "british india": "indian history",
  gandhi: "indian history",
  independence: "indian history",
  "maurya empire": "indian history",
  "gupta empire": "indian history",
  "freedom struggle": "indian history",

  // English
  grammar: "grammar",
  "parts of speech": "grammar",
  noun: "grammar",
  verb: "grammar",
  tense: "grammar",
  "active voice": "grammar",
  "passive voice": "grammar",
  adjective: "grammar",
  adverb: "grammar",
};

export function getAIResponse(question: string): AIResponse {
  const normalized = normalizeQuery(question);

  // Try to find matching keywords (longest match first)
  const sortedKeys = Object.keys(keywordMap).sort(
    (a, b) => b.length - a.length,
  );
  for (const keyword of sortedKeys) {
    if (normalized.includes(keyword)) {
      const responseKey = keywordMap[keyword];
      const response = responses[responseKey];
      if (response) return response;
    }
  }

  // Consistent fallback — always explains what the AI can answer
  return {
    subject: "Help",
    text: `I don't have a specific answer for that question yet. I'm a study assistant focused on school subjects.

**Topics I can help with:**

**Mathematics:** Algebra, Calculus, Trigonometry, Geometry

**Physics:** Newton's Laws, Motion (SUVAT), Energy, Electricity, Optics

**Chemistry:** Periodic Table, Chemical Bonds, Acids & Bases, Organic Chemistry

**Biology:** Cell Biology, Photosynthesis, Genetics

**Computer Science:** Arrays, Loops, OOP, Algorithms

**History:** Indian History

**English:** Grammar

**Try asking something like:**
- "Explain Newton's laws of motion"
- "What is the quadratic formula?"
- "How does photosynthesis work?"
- "What are the 4 pillars of OOP?"`,
    simpleText: `I'm not sure about that one yet! Here are the topics I know well:

**Ask me about:**
- Math: algebra, calculus, trigonometry, geometry
- Physics: Newton's laws, motion, energy, electricity, light
- Chemistry: periodic table, bonds, acids, organic chemistry
- Biology: cells, photosynthesis, genetics
- Computer Science: arrays, loops, OOP, algorithms
- History: Indian history
- English: grammar

Try asking something like "explain Newton's laws" or "what is photosynthesis?" and I'll give you a full explanation!`,
  };
}
