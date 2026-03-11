export type SubjectKey =
  | "Physics"
  | "Chemistry"
  | "Math"
  | "Biology"
  | "English"
  | "History"
  | "Computer Science";

export interface MCQQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explanation: string;
}

export const mcqBank: Record<SubjectKey, MCQQuestion[]> = {
  Physics: [
    {
      id: "phy-1",
      question:
        "A body of mass 5 kg is moving with a velocity of 4 m/s. What is its kinetic energy?",
      options: ["10 J", "20 J", "40 J", "80 J"],
      correct: 2,
      explanation: "KE = ½mv² = ½ × 5 × 4² = ½ × 5 × 16 = 40 J",
    },
    {
      id: "phy-2",
      question: "Newton's first law of motion is also known as:",
      options: [
        "Law of Force",
        "Law of Inertia",
        "Law of Action-Reaction",
        "Law of Acceleration",
      ],
      correct: 1,
      explanation:
        "Newton's first law (objects stay at rest or uniform motion unless acted on) is the Law of Inertia.",
    },
    {
      id: "phy-3",
      question: "The SI unit of electric current is:",
      options: ["Volt", "Watt", "Ampere", "Ohm"],
      correct: 2,
      explanation:
        "The SI unit of electric current is the Ampere (A). Volt is for voltage, Watt for power, Ohm for resistance.",
    },
    {
      id: "phy-4",
      question:
        "Which of the following statements about projectile motion is correct?",
      options: [
        "Horizontal velocity changes continuously",
        "Vertical velocity is constant throughout",
        "Horizontal and vertical motions are independent",
        "Maximum range occurs at 30° angle",
      ],
      correct: 2,
      explanation:
        "In projectile motion, horizontal and vertical components are independent. Horizontal velocity is constant; vertical velocity changes due to gravity. Max range is at 45°.",
    },
    {
      id: "phy-5",
      question:
        "According to Ohm's Law, if voltage doubles and resistance stays constant:",
      options: [
        "Current halves",
        "Current doubles",
        "Current stays same",
        "Current quadruples",
      ],
      correct: 1,
      explanation:
        "By Ohm's Law: I = V/R. If V doubles and R is constant, I doubles.",
    },
    {
      id: "phy-6",
      question:
        "The image formed by a concave mirror when the object is at the center of curvature is:",
      options: [
        "Virtual and diminished",
        "Real, inverted and same size",
        "Virtual and enlarged",
        "Real and diminished",
      ],
      correct: 1,
      explanation:
        "When the object is at C (center of curvature), the image is also at C — real, inverted, and same size as the object.",
    },
    {
      id: "phy-7",
      question: "The speed of light in vacuum is approximately:",
      options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10¹² m/s"],
      correct: 1,
      explanation:
        "The speed of light in vacuum c ≈ 3 × 10⁸ m/s (exactly 299,792,458 m/s).",
    },
    {
      id: "phy-8",
      question:
        "Which law states that equal volumes of gases at the same temperature and pressure contain equal numbers of molecules?",
      options: [
        "Boyle's Law",
        "Charles's Law",
        "Avogadro's Law",
        "Gay-Lussac's Law",
      ],
      correct: 2,
      explanation:
        "Avogadro's Law states equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules.",
    },
    {
      id: "phy-9",
      question: "The unit of force is:",
      options: ["Joule", "Watt", "Newton", "Pascal"],
      correct: 2,
      explanation: "The SI unit of force is Newton (N). 1 N = 1 kg·m/s²",
    },
    {
      id: "phy-10",
      question:
        "In a series circuit with three resistors of 2Ω, 3Ω, and 5Ω, the total resistance is:",
      options: ["0.97 Ω", "5 Ω", "10 Ω", "30 Ω"],
      correct: 2,
      explanation: "In series: R_total = R₁ + R₂ + R₃ = 2 + 3 + 5 = 10 Ω",
    },
    {
      id: "phy-11",
      question: "Which of the following is a scalar quantity?",
      options: ["Velocity", "Force", "Momentum", "Speed"],
      correct: 3,
      explanation:
        "Speed is a scalar quantity (only magnitude). Velocity, force, and momentum are vectors (have both magnitude and direction).",
    },
    {
      id: "phy-12",
      question: "The SI unit of pressure is:",
      options: ["Newton", "Joule", "Pascal", "Watt"],
      correct: 2,
      explanation:
        "Pressure = Force/Area. Its SI unit is Pascal (Pa) = N/m². Named after Blaise Pascal.",
    },
    {
      id: "phy-13",
      question: "Gravitational acceleration on Earth (g) is approximately:",
      options: ["9.8 cm/s²", "9.8 m/s²", "9.8 km/s²", "98 m/s²"],
      correct: 1,
      explanation:
        "Standard gravitational acceleration on Earth g ≈ 9.8 m/s² (often approximated as 10 m/s² in problems).",
    },
    {
      id: "phy-14",
      question:
        "The work done by a force is zero when the angle between force and displacement is:",
      options: ["0°", "45°", "90°", "180°"],
      correct: 2,
      explanation:
        "Work = F × d × cos θ. When θ = 90°, cos 90° = 0, so W = 0. A force perpendicular to displacement does no work.",
    },
    {
      id: "phy-15",
      question:
        "Which phenomenon explains the bending of light when passing from one medium to another?",
      options: ["Reflection", "Refraction", "Diffraction", "Polarization"],
      correct: 1,
      explanation:
        "Refraction is the bending of light when it passes from one medium to another due to change in speed. Governed by Snell's Law.",
    },
    {
      id: "phy-16",
      question: "The law of conservation of energy states that:",
      options: [
        "Energy can be created but not destroyed",
        "Energy can be destroyed but not created",
        "Total energy of an isolated system remains constant",
        "Energy always increases in a system",
      ],
      correct: 2,
      explanation:
        "Conservation of energy: total energy in an isolated system remains constant. Energy can be converted from one form to another, but neither created nor destroyed.",
    },
    {
      id: "phy-17",
      question: "The frequency of a wave is 50 Hz. Its time period is:",
      options: ["50 s", "0.02 s", "0.2 s", "2 s"],
      correct: 1,
      explanation:
        "T = 1/f = 1/50 = 0.02 s. The time period (T) and frequency (f) are reciprocals of each other.",
    },
    {
      id: "phy-18",
      question:
        "Which type of lens is used to correct myopia (short-sightedness)?",
      options: [
        "Convex lens",
        "Concave lens",
        "Bifocal lens",
        "Cylindrical lens",
      ],
      correct: 1,
      explanation:
        "Myopia (short-sightedness) is corrected using a concave (diverging) lens, which diverges the incoming parallel rays so they focus on the retina.",
    },
    {
      id: "phy-19",
      question:
        "The phenomenon of emission of electrons from a metal surface when light falls on it is called:",
      options: [
        "Thermionic emission",
        "Photoelectric effect",
        "Compton effect",
        "Zeeman effect",
      ],
      correct: 1,
      explanation:
        "The photoelectric effect: electrons are emitted from a metal surface when light of sufficient frequency strikes it. Explained by Einstein using photons.",
    },
    {
      id: "phy-20",
      question: "The SI unit of power is:",
      options: ["Joule", "Newton", "Watt", "Ampere"],
      correct: 2,
      explanation:
        "Power = Work/Time. SI unit is Watt (W) = J/s. Named after James Watt.",
    },
    {
      id: "phy-21",
      question: "Which color of visible light has the longest wavelength?",
      options: ["Violet", "Blue", "Green", "Red"],
      correct: 3,
      explanation:
        "Red light has the longest wavelength (~700 nm) and lowest frequency in visible spectrum. Violet has the shortest wavelength (~400 nm). ROYGBIV order.",
    },
    {
      id: "phy-22",
      question:
        "A transformer increases voltage. This type of transformer is called:",
      options: [
        "Step-down transformer",
        "Step-up transformer",
        "Isolation transformer",
        "Auto transformer",
      ],
      correct: 1,
      explanation:
        "A step-up transformer increases voltage (secondary voltage > primary voltage). A step-down transformer decreases voltage.",
    },
    {
      id: "phy-23",
      question:
        "The half-life of a radioactive element is 10 years. After 30 years, what fraction remains?",
      options: ["1/2", "1/4", "1/8", "1/16"],
      correct: 2,
      explanation:
        "After each half-life, the amount halves. 30 years = 3 half-lives. Remaining = (1/2)³ = 1/8.",
    },
    {
      id: "phy-24",
      question:
        "Archimedes' principle states that a body immersed in fluid experiences an upward force equal to:",
      options: [
        "The weight of the body",
        "The volume of fluid displaced",
        "The weight of fluid displaced",
        "The density of the fluid",
      ],
      correct: 2,
      explanation:
        "Archimedes' principle: the buoyant force on an object equals the weight of the fluid displaced by the object.",
    },
    {
      id: "phy-25",
      question: "The momentum of an object of mass 2 kg moving at 10 m/s is:",
      options: ["5 kg·m/s", "20 kg·m/s", "100 kg·m/s", "12 kg·m/s"],
      correct: 1,
      explanation:
        "Momentum p = m × v = 2 × 10 = 20 kg·m/s. Momentum is a vector quantity in the direction of velocity.",
    },
    {
      id: "phy-26",
      question: "Which particle has positive charge?",
      options: ["Electron", "Neutron", "Proton", "Photon"],
      correct: 2,
      explanation:
        "Proton has a positive charge (+1.6 × 10⁻¹⁹ C). Electron has negative charge, neutron has no charge, photon has no charge.",
    },
    {
      id: "phy-27",
      question: "The process by which heat is transferred through a vacuum is:",
      options: ["Conduction", "Convection", "Radiation", "Diffusion"],
      correct: 2,
      explanation:
        "Radiation transfers heat through electromagnetic waves (like infrared) and can occur through a vacuum. Conduction and convection require matter.",
    },
    {
      id: "phy-28",
      question: "What is the formula for gravitational potential energy?",
      options: ["½mv²", "mgh", "mv", "Fd"],
      correct: 1,
      explanation:
        "Gravitational PE = mgh, where m = mass, g = gravitational acceleration, h = height above reference point.",
    },
    {
      id: "phy-29",
      question:
        "The angle of incidence equals the angle of reflection. This is the law of:",
      options: ["Refraction", "Diffraction", "Reflection", "Polarization"],
      correct: 2,
      explanation:
        "Law of Reflection: angle of incidence = angle of reflection (both measured from the normal to the surface).",
    },
    {
      id: "phy-30",
      question: "The device used to measure potential difference is called:",
      options: ["Ammeter", "Galvanometer", "Voltmeter", "Ohmmeter"],
      correct: 2,
      explanation:
        "A voltmeter measures potential difference (voltage) between two points. Ammeter measures current, ohmmeter measures resistance.",
    },
    {
      id: "phy-31",
      question:
        "The first law of thermodynamics is essentially a statement of:",
      options: [
        "Newton's second law",
        "Conservation of momentum",
        "Conservation of energy",
        "Conservation of mass",
      ],
      correct: 2,
      explanation:
        "The first law of thermodynamics states that energy cannot be created or destroyed: ΔU = Q − W (change in internal energy = heat added − work done by system).",
    },
    {
      id: "phy-32",
      question: "Which process occurs at constant temperature?",
      options: [
        "Adiabatic process",
        "Isochoric process",
        "Isothermal process",
        "Isobaric process",
      ],
      correct: 2,
      explanation:
        "Isothermal process: temperature remains constant (ΔT = 0). Adiabatic: no heat exchange. Isochoric: constant volume. Isobaric: constant pressure.",
    },
    {
      id: "phy-33",
      question:
        "The efficiency of a Carnot engine operating between temperatures T₁ (source) and T₂ (sink) is:",
      options: ["1 - T₁/T₂", "1 - T₂/T₁", "T₂/T₁", "T₁/T₂"],
      correct: 1,
      explanation:
        "Carnot efficiency η = 1 − T₂/T₁, where T₁ is the higher temperature (source) and T₂ is the lower temperature (sink). Both in Kelvin.",
    },
    {
      id: "phy-34",
      question: "The speed of sound in air at 0°C is approximately:",
      options: ["232 m/s", "332 m/s", "432 m/s", "532 m/s"],
      correct: 1,
      explanation:
        "The speed of sound in air at 0°C is approximately 332 m/s (331.3 m/s). It increases with temperature — about 0.6 m/s per degree Celsius rise.",
    },
    {
      id: "phy-35",
      question: "The Doppler effect is the change in observed frequency when:",
      options: [
        "Light passes through a prism",
        "Sound reflects off a wall",
        "Source or observer is in relative motion",
        "A wave diffracts around an obstacle",
      ],
      correct: 2,
      explanation:
        "The Doppler effect is the apparent change in frequency of a wave when the source and observer are in relative motion. Pitch rises when approaching, falls when receding.",
    },
    {
      id: "phy-36",
      question:
        "The phenomenon of superposition of two coherent waves producing regions of constructive and destructive interference is called:",
      options: ["Diffraction", "Polarization", "Interference", "Refraction"],
      correct: 2,
      explanation:
        "Interference occurs when two coherent waves superpose. Constructive interference (path difference = nλ) gives bright fringes; destructive (path difference = (n+½)λ) gives dark fringes.",
    },
    {
      id: "phy-37",
      question:
        "Faraday's law of electromagnetic induction states that the induced EMF is proportional to:",
      options: [
        "The magnetic field strength",
        "The resistance of the coil",
        "The rate of change of magnetic flux",
        "The current in the coil",
      ],
      correct: 2,
      explanation:
        "Faraday's law: EMF = −dΦ/dt. The induced EMF in a circuit is equal to the negative rate of change of magnetic flux through the circuit.",
    },
    {
      id: "phy-38",
      question: "The unit of magnetic flux is:",
      options: ["Tesla", "Weber", "Gauss", "Ampere-meter"],
      correct: 1,
      explanation:
        "The SI unit of magnetic flux (Φ) is the Weber (Wb). 1 Wb = 1 V·s. The unit of magnetic flux density (B) is Tesla (T). 1 T = 1 Wb/m².",
    },
    {
      id: "phy-39",
      question:
        "In the photoelectric effect, increasing the intensity of light (above threshold frequency) increases:",
      options: [
        "The kinetic energy of emitted electrons",
        "The frequency of emitted electrons",
        "The number of emitted electrons",
        "The stopping potential",
      ],
      correct: 2,
      explanation:
        "In the photoelectric effect, increasing light intensity increases the NUMBER of photoelectrons emitted (more photons hit the surface). The kinetic energy depends only on frequency, not intensity.",
    },
    {
      id: "phy-40",
      question: "Einstein's mass-energy equivalence is given by:",
      options: ["E = mc", "E = mc²", "E = m²c", "E = ½mc²"],
      correct: 1,
      explanation:
        "Einstein's famous equation E = mc² states that mass and energy are interchangeable. A small mass (m) can produce enormous energy due to c² ≈ 9 × 10¹⁶ m²/s².",
    },
    {
      id: "phy-41",
      question:
        "The focal length of a convex lens is positive. The focal length of a concave lens is:",
      options: ["Also positive", "Negative", "Zero", "Infinite"],
      correct: 1,
      explanation:
        "By the sign convention, a concave (diverging) lens has a negative focal length. A convex (converging) lens has a positive focal length.",
    },
    {
      id: "phy-42",
      question: "Total internal reflection occurs when light travels from:",
      options: [
        "Rarer to denser medium at any angle",
        "Denser to rarer medium above the critical angle",
        "Vacuum into any medium",
        "Rarer to denser medium above the critical angle",
      ],
      correct: 1,
      explanation:
        "Total internal reflection occurs when light travels from a denser to a rarer medium and the angle of incidence exceeds the critical angle. Used in optical fibres.",
    },
    {
      id: "phy-43",
      question:
        "According to Bernoulli's principle, as the velocity of a fluid increases, its pressure:",
      options: ["Increases", "Decreases", "Remains constant", "Doubles"],
      correct: 1,
      explanation:
        "Bernoulli's principle: for an ideal fluid, P + ½ρv² + ρgh = constant. When velocity (v) increases, pressure (P) decreases. This explains aircraft lift and venturi effect.",
    },
    {
      id: "phy-44",
      question: "Surface tension of a liquid is caused by:",
      options: [
        "Gravitational force between molecules",
        "Cohesive forces between molecules at the surface",
        "Adhesive forces between liquid and container",
        "Atmospheric pressure on the surface",
      ],
      correct: 1,
      explanation:
        "Surface tension arises due to cohesive forces between liquid molecules at the surface. Molecules at the surface have unbalanced attractive forces, creating a film-like effect.",
    },
    {
      id: "phy-45",
      question: "For a simple pendulum, the time period T is given by:",
      options: ["T = 2π√(g/l)", "T = 2π√(l/g)", "T = π√(l/g)", "T = 2π√(m/k)"],
      correct: 1,
      explanation:
        "Time period of a simple pendulum T = 2π√(l/g), where l is the length and g is gravitational acceleration. Note: T does NOT depend on mass or amplitude (for small oscillations).",
    },
    {
      id: "phy-46",
      question: "In SHM (Simple Harmonic Motion), at the mean position:",
      options: [
        "Velocity is zero and acceleration is maximum",
        "Velocity is maximum and acceleration is zero",
        "Both velocity and acceleration are maximum",
        "Both velocity and acceleration are zero",
      ],
      correct: 1,
      explanation:
        "At the mean (equilibrium) position in SHM: velocity is maximum, acceleration is zero (restoring force = 0). At extreme positions: velocity = 0, acceleration is maximum.",
    },
    {
      id: "phy-47",
      question: "The nuclear reaction in the sun is primarily:",
      options: [
        "Nuclear fission of uranium",
        "Nuclear fusion of hydrogen",
        "Radioactive decay of carbon",
        "Chemical combustion",
      ],
      correct: 1,
      explanation:
        "The sun generates energy through nuclear fusion — hydrogen nuclei (protons) fuse to form helium, releasing enormous energy. This is the proton-proton chain reaction.",
    },
    {
      id: "phy-48",
      question: "Alpha particles are identical to:",
      options: ["Helium-4 nuclei", "Hydrogen nuclei", "Electrons", "Neutrons"],
      correct: 0,
      explanation:
        "An alpha particle is identical to a helium-4 nucleus: 2 protons + 2 neutrons, charge +2e. Alpha radiation has low penetration but high ionizing power.",
    },
    {
      id: "phy-49",
      question: "The magnifying power of a simple microscope is:",
      options: ["D/f", "1 + D/f", "f/D", "D × f"],
      correct: 1,
      explanation:
        "Magnifying power of a simple microscope (magnifying glass) = 1 + D/f, where D = least distance of distinct vision (25 cm) and f = focal length of lens.",
    },
    {
      id: "phy-50",
      question:
        "The work done in moving a charge Q through a potential difference V is:",
      options: ["V/Q", "Q/V", "QV", "Q²V"],
      correct: 2,
      explanation:
        "Work done W = QV, where Q is the charge and V is the potential difference. The unit is Joule: 1 J = 1 C × 1 V.",
    },
    {
      id: "phy-51",
      question: "Lenz's law is used to determine the:",
      options: [
        "Magnitude of induced EMF",
        "Direction of induced current",
        "Speed of electromagnetic waves",
        "Resistance of a coil",
      ],
      correct: 1,
      explanation:
        "Lenz's law states that the induced current flows in a direction that opposes the change causing it (conservation of energy). It gives the DIRECTION of induced current.",
    },
    {
      id: "phy-52",
      question: "The SI unit of capacitance is:",
      options: ["Henry", "Ohm", "Farad", "Weber"],
      correct: 2,
      explanation:
        "The SI unit of capacitance is the Farad (F). 1 F = 1 C/V. Practical capacitors are in microfarads (μF) or picofarads (pF). Henry is inductance, Ohm is resistance.",
    },
    {
      id: "phy-53",
      question:
        "When two resistors R₁ and R₂ are connected in parallel, the equivalent resistance is:",
      options: ["R₁ + R₂", "(R₁ + R₂)/(R₁R₂)", "R₁R₂/(R₁ + R₂)", "√(R₁R₂)"],
      correct: 2,
      explanation:
        "For parallel resistors: 1/R = 1/R₁ + 1/R₂, so R = R₁R₂/(R₁ + R₂). The equivalent resistance is always less than the smallest resistor.",
    },
    {
      id: "phy-54",
      question:
        "Huygen's principle states that every point on a wavefront acts as:",
      options: [
        "A reflecting surface",
        "A new source of secondary wavelets",
        "A point of minimum intensity",
        "A diffraction grating",
      ],
      correct: 1,
      explanation:
        "Huygen's principle: every point on a wavefront is a source of secondary spherical wavelets. The new wavefront is the envelope of all secondary wavelets.",
    },
    {
      id: "phy-55",
      question:
        "The work function of a metal in the photoelectric effect refers to:",
      options: [
        "The maximum kinetic energy of emitted electrons",
        "The minimum energy required to eject an electron from the metal surface",
        "The frequency of incident light",
        "The velocity of emitted electrons",
      ],
      correct: 1,
      explanation:
        "The work function (φ) is the minimum energy needed to free an electron from the surface of a metal. Photons with energy hf > φ can cause photoelectric emission.",
    },
    {
      id: "phy-56",
      question:
        "According to the equipartition theorem, each degree of freedom of a molecule contributes __ to its average energy:",
      options: ["kT", "½kT", "kT/2 per pair", "3kT/2"],
      correct: 1,
      explanation:
        "The equipartition theorem states that each degree of freedom contributes ½kT to the average energy of a molecule (where k = Boltzmann constant, T = temperature).",
    },
    {
      id: "phy-57",
      question: "Which type of waves require a medium to travel?",
      options: [
        "Electromagnetic waves",
        "Radio waves",
        "Mechanical waves",
        "X-rays",
      ],
      correct: 2,
      explanation:
        "Mechanical waves (sound, water waves, seismic waves) require a material medium to propagate. Electromagnetic waves (light, radio, X-rays) can travel through vacuum.",
    },
    {
      id: "phy-58",
      question: "The de Broglie wavelength of a particle with momentum p is:",
      options: ["λ = p/h", "λ = h/p", "λ = hp", "λ = h²/p"],
      correct: 1,
      explanation:
        "de Broglie's matter-wave hypothesis: λ = h/p = h/(mv), where h is Planck's constant. This shows particles have wave-like properties.",
    },
    {
      id: "phy-59",
      question:
        "Which law states that at constant volume, pressure of a gas is directly proportional to its absolute temperature?",
      options: [
        "Boyle's Law",
        "Charles's Law",
        "Gay-Lussac's Law",
        "Avogadro's Law",
      ],
      correct: 2,
      explanation:
        "Gay-Lussac's Law: P/T = constant at constant volume. Pressure is directly proportional to absolute temperature (Kelvin). Also called the pressure-temperature law.",
    },
    {
      id: "phy-60",
      question: "The change in entropy for a reversible isothermal process is:",
      options: ["Zero", "ΔQ/T", "ΔQ × T", "Negative"],
      correct: 0,
      explanation:
        "For a reversible process, the total entropy change (system + surroundings) is zero. For an irreversible process, entropy increases. For isothermal reversible: ΔS_universe = 0.",
    },
    {
      id: "phy-61",
      question: "Refractive index of a medium with speed of light v is:",
      options: ["v/c", "c/v", "c × v", "c − v"],
      correct: 1,
      explanation:
        "Refractive index n = c/v, where c is speed of light in vacuum and v is speed of light in the medium. n > 1 for all transparent media (light slows down).",
    },
    {
      id: "phy-62",
      question: "The principle of a nuclear reactor is based on:",
      options: [
        "Nuclear fusion",
        "Controlled nuclear fission",
        "Radioactive decay",
        "Thermonuclear reaction",
      ],
      correct: 1,
      explanation:
        "Nuclear reactors use controlled nuclear fission of uranium-235 or plutonium-239. Control rods (boron, cadmium) absorb neutrons to control the chain reaction rate.",
    },
    {
      id: "phy-63",
      question:
        "The orbital speed of a satellite at height h above Earth's surface is:",
      options: [
        "Independent of mass of satellite",
        "Proportional to mass of satellite",
        "Inversely proportional to radius",
        "Equal to escape velocity",
      ],
      correct: 0,
      explanation:
        "The orbital speed v = √(GM/(R+h)) depends only on the mass of Earth (M) and the orbital radius, NOT the mass of the satellite. Heavier satellites orbit at the same speed.",
    },
    {
      id: "phy-64",
      question:
        "Which formula gives the electric potential V at distance r from a point charge Q?",
      options: ["V = Q/4πε₀r²", "V = Q/4πε₀r", "V = Qr/4πε₀", "V = 4πε₀Q/r"],
      correct: 1,
      explanation:
        "Electric potential V = kQ/r = Q/(4πε₀r), where k = 1/(4πε₀) ≈ 9×10⁹ N·m²/C². Note: potential is inversely proportional to r (unlike force which is 1/r²).",
    },
    {
      id: "phy-65",
      question:
        "The beat frequency heard when two tuning forks of frequencies 256 Hz and 260 Hz are played together is:",
      options: ["2 Hz", "4 Hz", "516 Hz", "258 Hz"],
      correct: 1,
      explanation:
        "Beat frequency = |f₁ − f₂| = |256 − 260| = 4 Hz. Beats are periodic variations in loudness caused by superposition of two waves with slightly different frequencies.",
    },
    {
      id: "phy-66",
      question:
        "Which phenomenon is responsible for the blue color of the sky?",
      options: [
        "Reflection",
        "Refraction",
        "Polarization",
        "Rayleigh scattering",
      ],
      correct: 3,
      explanation:
        "Rayleigh scattering: shorter wavelengths (blue/violet) scatter more than longer wavelengths in the atmosphere. Our eyes are more sensitive to blue than violet, so the sky appears blue.",
    },
    {
      id: "phy-67",
      question:
        "The period of a mass-spring system is T = 2π√(m/k). If the mass is quadrupled, the period:",
      options: ["Remains the same", "Doubles", "Quadruples", "Halves"],
      correct: 1,
      explanation:
        "T = 2π√(m/k). If m → 4m, then T → 2π√(4m/k) = 2 × 2π√(m/k) = 2T. The period doubles when mass is quadrupled.",
    },
    {
      id: "phy-68",
      question:
        "The Bohr model of the hydrogen atom predicts that electrons move in:",
      options: [
        "Elliptical orbits with varying speeds",
        "Fixed circular orbits without radiating energy",
        "Spiral paths toward the nucleus",
        "Random paths with fixed energy",
      ],
      correct: 1,
      explanation:
        "Bohr's model postulates that electrons move in fixed circular orbits (stationary states) without radiating energy. Radiation occurs only during transitions between orbits.",
    },
    {
      id: "phy-69",
      question: "The energy of a photon with frequency f is:",
      options: ["hf²", "hf", "h/f", "f/h"],
      correct: 1,
      explanation:
        "Energy of a photon E = hf, where h = Planck's constant (6.626 × 10⁻³⁴ J·s) and f = frequency. Also written as E = hc/λ.",
    },
    {
      id: "phy-70",
      question: "Viscosity of a fluid is a measure of its:",
      options: [
        "Density",
        "Resistance to flow (internal friction)",
        "Surface tension",
        "Compressibility",
      ],
      correct: 1,
      explanation:
        "Viscosity is the internal friction of a fluid — its resistance to flow. Honey has high viscosity; water has low viscosity. SI unit is Pascal-second (Pa·s).",
    },
  ],

  Chemistry: [
    {
      id: "che-1",
      question: "The atomic number of Carbon (C) is:",
      options: ["4", "6", "8", "12"],
      correct: 1,
      explanation:
        "Carbon has atomic number 6 — meaning it has 6 protons. Its atomic mass is approximately 12 u.",
    },
    {
      id: "che-2",
      question: "Which type of bond is formed between NaCl (sodium chloride)?",
      options: [
        "Covalent bond",
        "Metallic bond",
        "Ionic bond",
        "Hydrogen bond",
      ],
      correct: 2,
      explanation:
        "NaCl forms an ionic bond — sodium (Na) gives one electron to chlorine (Cl), forming Na⁺ and Cl⁻ ions.",
    },
    {
      id: "che-3",
      question: "The pH of a neutral solution at 25°C is:",
      options: ["0", "5", "7", "14"],
      correct: 2,
      explanation:
        "A neutral solution (like pure water) has pH = 7. Below 7 is acidic, above 7 is basic.",
    },
    {
      id: "che-4",
      question:
        "Which of the following is the correct formula for sulfuric acid?",
      options: ["H₂SO₃", "H₂SO₄", "HSO₄", "H₂S"],
      correct: 1,
      explanation:
        "Sulfuric acid is H₂SO₄. H₂SO₃ is sulfurous acid, H₂S is hydrogen sulfide.",
    },
    {
      id: "che-5",
      question:
        "The process in which a solid directly converts to vapor without passing through liquid state is called:",
      options: ["Evaporation", "Condensation", "Sublimation", "Deposition"],
      correct: 2,
      explanation:
        "Sublimation is the direct conversion of solid to gas (vapor) without going through liquid. Dry ice (solid CO₂) sublimes at room temperature.",
    },
    {
      id: "che-6",
      question: "Which element has the highest electronegativity?",
      options: ["Oxygen", "Chlorine", "Nitrogen", "Fluorine"],
      correct: 3,
      explanation:
        "Fluorine (F) has the highest electronegativity (3.98 on Pauling scale). It attracts electrons more strongly than any other element.",
    },
    {
      id: "che-7",
      question: "The organic compound with formula CH₃OH is:",
      options: ["Methane", "Ethanol", "Methanol", "Formaldehyde"],
      correct: 2,
      explanation:
        "CH₃OH is methanol (methyl alcohol). Ethanol is C₂H₅OH, methane is CH₄, formaldehyde is HCHO.",
    },
    {
      id: "che-8",
      question:
        "The law 'at constant temperature, volume of a gas is inversely proportional to pressure' is:",
      options: [
        "Charles's Law",
        "Avogadro's Law",
        "Gay-Lussac's Law",
        "Boyle's Law",
      ],
      correct: 3,
      explanation:
        "Boyle's Law: PV = constant at constant T. If pressure increases, volume decreases proportionally.",
    },
    {
      id: "che-9",
      question:
        "Which indicator turns red in an acidic solution and blue in a basic solution?",
      options: [
        "Phenolphthalein",
        "Methyl orange",
        "Litmus",
        "Universal indicator",
      ],
      correct: 2,
      explanation:
        "Litmus turns red in acids and blue in bases/alkalis. Phenolphthalein is colorless in acid and pink in base.",
    },
    {
      id: "che-10",
      question: "The valency of aluminum (Al) is:",
      options: ["1", "2", "3", "4"],
      correct: 2,
      explanation:
        "Aluminum (Al) has valency 3. It has 3 electrons in its outermost shell and forms Al³⁺ ions.",
    },
    {
      id: "che-11",
      question:
        "The number of moles in 44 g of CO₂ (molar mass = 44 g/mol) is:",
      options: ["0.5", "1", "2", "44"],
      correct: 1,
      explanation:
        "Moles = mass / molar mass = 44/44 = 1 mole. One mole contains 6.022 × 10²³ molecules (Avogadro's number).",
    },
    {
      id: "che-12",
      question:
        "Which gas is produced when zinc reacts with dilute hydrochloric acid?",
      options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
      correct: 2,
      explanation:
        "Zn + 2HCl → ZnCl₂ + H₂↑. Hydrogen gas is produced when zinc reacts with dilute acids.",
    },
    {
      id: "che-13",
      question: "The chemical formula of common salt is:",
      options: ["Na₂O", "NaCl", "NaOH", "Na₂CO₃"],
      correct: 1,
      explanation:
        "Common salt (table salt) is sodium chloride, NaCl. NaOH is caustic soda, Na₂CO₃ is washing soda.",
    },
    {
      id: "che-14",
      question: "Which of the following is a noble gas?",
      options: ["Nitrogen", "Oxygen", "Argon", "Chlorine"],
      correct: 2,
      explanation:
        "Argon (Ar) is a noble gas — group 18 element with a full outer electron shell, making it very unreactive. Others listed are not noble gases.",
    },
    {
      id: "che-15",
      question: "An exothermic reaction is one that:",
      options: [
        "Absorbs heat from surroundings",
        "Releases heat to surroundings",
        "Requires light energy",
        "Requires electrical energy",
      ],
      correct: 1,
      explanation:
        "Exothermic reactions release heat energy to surroundings (temp rises). Endothermic reactions absorb heat (temp drops). Combustion is exothermic.",
    },
    {
      id: "che-16",
      question: "The modern periodic table is arranged by increasing:",
      options: [
        "Atomic mass",
        "Atomic number",
        "Electron configuration",
        "Valency",
      ],
      correct: 1,
      explanation:
        "Moseley arranged the modern periodic table by increasing atomic number (number of protons). Mendeleev's original table used atomic mass.",
    },
    {
      id: "che-17",
      question:
        "Which allotrope of carbon is the hardest naturally occurring substance?",
      options: ["Graphite", "Fullerene", "Diamond", "Charcoal"],
      correct: 2,
      explanation:
        "Diamond is the hardest naturally occurring substance. In diamond, each carbon atom forms 4 covalent bonds in a 3D tetrahedral structure.",
    },
    {
      id: "che-18",
      question: "What type of reaction is: A + BC → AC + B?",
      options: [
        "Combination reaction",
        "Decomposition reaction",
        "Single displacement reaction",
        "Double displacement reaction",
      ],
      correct: 2,
      explanation:
        "A + BC → AC + B is a single displacement (substitution) reaction where element A replaces element B in compound BC.",
    },
    {
      id: "che-19",
      question: "The chemical formula for water is:",
      options: ["HO", "H₂O", "H₂O₂", "HO₂"],
      correct: 1,
      explanation:
        "Water is H₂O — two hydrogen atoms bonded to one oxygen atom. H₂O₂ is hydrogen peroxide.",
    },
    {
      id: "che-20",
      question: "Which metal is liquid at room temperature?",
      options: ["Gold", "Silver", "Mercury", "Copper"],
      correct: 2,
      explanation:
        "Mercury (Hg) is the only metal that exists as a liquid at room temperature (melting point = -38.83°C). It's used in thermometers.",
    },
    {
      id: "che-21",
      question: "Rust is chemically known as:",
      options: [
        "Iron oxide (Fe₂O₃)",
        "Iron carbonate (FeCO₃)",
        "Iron sulfate (FeSO₄)",
        "Iron chloride (FeCl₂)",
      ],
      correct: 0,
      explanation:
        "Rust is hydrated iron(III) oxide — mainly Fe₂O₃·xH₂O. Iron reacts with oxygen and water to form rust in a process called corrosion.",
    },
    {
      id: "che-22",
      question:
        "The process of coating iron with zinc to prevent rusting is called:",
      options: ["Anodizing", "Electroplating", "Galvanizing", "Alloying"],
      correct: 2,
      explanation:
        "Galvanization is the process of coating iron/steel with zinc to prevent rusting. Zinc acts as a sacrificial anode — it corrodes instead of iron.",
    },
    {
      id: "che-23",
      question: "Which gas makes up most of Earth's atmosphere?",
      options: [
        "Oxygen (O₂)",
        "Carbon dioxide (CO₂)",
        "Nitrogen (N₂)",
        "Argon (Ar)",
      ],
      correct: 2,
      explanation:
        "Nitrogen (N₂) makes up ~78% of Earth's atmosphere. Oxygen is ~21%, Argon ~0.9%, CO₂ ~0.04%.",
    },
    {
      id: "che-24",
      question: "An acid that ionizes completely in water is called:",
      options: [
        "Weak acid",
        "Strong acid",
        "Neutral acid",
        "Concentrated acid",
      ],
      correct: 1,
      explanation:
        "Strong acids (like HCl, H₂SO₄, HNO₃) completely ionize in water. Weak acids (like CH₃COOH) only partially ionize.",
    },
    {
      id: "che-25",
      question: "The element with symbol 'Fe' is:",
      options: ["Fluorine", "Francium", "Iron", "Fermium"],
      correct: 2,
      explanation:
        "Fe stands for Iron, from its Latin name 'Ferrum'. Fe is essential in biology as part of hemoglobin.",
    },
    {
      id: "che-26",
      question: "Which of the following is NOT an organic compound?",
      options: [
        "Glucose (C₆H₁₂O₆)",
        "Methane (CH₄)",
        "Ethanol (C₂H₅OH)",
        "Sodium chloride (NaCl)",
      ],
      correct: 3,
      explanation:
        "Organic compounds contain carbon-hydrogen bonds. NaCl is an inorganic ionic compound. Glucose, methane, and ethanol are organic.",
    },
    {
      id: "che-27",
      question:
        "In the electrolysis of water, which gas is produced at the cathode?",
      options: ["Oxygen", "Hydrogen", "Ozone", "Chlorine"],
      correct: 1,
      explanation:
        "At cathode (negative electrode), H⁺ ions are reduced: 2H⁺ + 2e⁻ → H₂. At anode, OH⁻ ions are oxidized to produce O₂.",
    },
    {
      id: "che-28",
      question: "The chemical formula of baking soda is:",
      options: ["Na₂CO₃", "NaHCO₃", "NaOH", "Na₂SO₄"],
      correct: 1,
      explanation:
        "Baking soda is sodium bicarbonate (NaHCO₃). Washing soda is Na₂CO₃, caustic soda is NaOH.",
    },
    {
      id: "che-29",
      question:
        "Which bond is formed between two non-metal atoms by sharing electrons?",
      options: [
        "Ionic bond",
        "Covalent bond",
        "Metallic bond",
        "Van der Waals bond",
      ],
      correct: 1,
      explanation:
        "Covalent bonds form when atoms share electrons. This occurs mainly between non-metals. Example: H₂, O₂, H₂O, CH₄.",
    },
    {
      id: "che-30",
      question: "The pH of a strong acid like HCl (0.1 M) is approximately:",
      options: ["1", "4", "7", "10"],
      correct: 0,
      explanation:
        "For strong acid HCl at 0.1 M, [H⁺] = 0.1 M, pH = -log(0.1) = 1. Strong acids have very low pH values.",
    },
    {
      id: "che-31",
      question: "The IUPAC name of CH₃−CH₂−OH is:",
      options: ["Methanol", "Ethanol", "Propanol", "Ethanoic acid"],
      correct: 1,
      explanation:
        "CH₃−CH₂−OH has 2 carbon atoms with an −OH group. IUPAC name: Ethanol (ethan = 2 carbons, ol = alcohol). Methanol has 1 carbon, propanol has 3.",
    },
    {
      id: "che-32",
      question: "Which of the following is a carboxylic acid?",
      options: ["CH₃CHO", "CH₃OH", "CH₃COOH", "CH₃COCH₃"],
      correct: 2,
      explanation:
        "CH₃COOH is acetic acid (ethanoic acid), a carboxylic acid containing the −COOH group. CH₃CHO is an aldehyde, CH₃OH is methanol, CH₃COCH₃ is acetone (ketone).",
    },
    {
      id: "che-33",
      question:
        "The reaction of an alcohol with a carboxylic acid to form an ester is called:",
      options: [
        "Saponification",
        "Esterification",
        "Hydrolysis",
        "Condensation polymerization",
      ],
      correct: 1,
      explanation:
        "Esterification: R-COOH + R'-OH → R-COOR' + H₂O. Example: acetic acid + ethanol → ethyl acetate + water. It is a reversible reaction.",
    },
    {
      id: "che-34",
      question:
        "Elements in the same period of the periodic table have the same:",
      options: [
        "Number of valence electrons",
        "Number of electron shells",
        "Atomic mass",
        "Chemical properties",
      ],
      correct: 1,
      explanation:
        "Elements in the same period have the same number of electron shells (energy levels). Elements in the same group have the same number of valence electrons.",
    },
    {
      id: "che-35",
      question: "The d-block elements in the periodic table are also called:",
      options: [
        "Alkali metals",
        "Alkaline earth metals",
        "Transition metals",
        "Halogens",
      ],
      correct: 2,
      explanation:
        "d-block elements (groups 3-12) are called transition metals. They have partially filled d-orbitals and show variable oxidation states, colored compounds, and catalytic properties.",
    },
    {
      id: "che-36",
      question:
        "The trend in ionization energy across a period (left to right) is:",
      options: [
        "Decreases",
        "Increases",
        "Remains constant",
        "First increases then decreases",
      ],
      correct: 1,
      explanation:
        "Ionization energy generally increases across a period (left to right) as nuclear charge increases with the same electron shell, making electrons harder to remove.",
    },
    {
      id: "che-37",
      question: "The hybridization of carbon in methane (CH₄) is:",
      options: ["sp", "sp²", "sp³", "sp³d"],
      correct: 2,
      explanation:
        "Carbon in CH₄ is sp³ hybridized — one 2s orbital mixes with three 2p orbitals to form four equivalent sp³ hybrid orbitals in a tetrahedral geometry (bond angle 109.5°).",
    },
    {
      id: "che-38",
      question: "According to VSEPR theory, the shape of H₂O molecule is:",
      options: ["Linear", "Tetrahedral", "Bent (V-shaped)", "Trigonal planar"],
      correct: 2,
      explanation:
        "H₂O has 4 electron pairs (2 bonding + 2 lone pairs) around oxygen. VSEPR predicts a bent/V-shaped geometry with bond angle ~104.5° (lone pairs repel more).",
    },
    {
      id: "che-39",
      question: "Which of the following is NOT a strong acid?",
      options: ["HCl", "H₂SO₄", "CH₃COOH", "HNO₃"],
      correct: 2,
      explanation:
        "CH₃COOH (acetic acid) is a weak acid — it partially ionizes in water. HCl, H₂SO₄, and HNO₃ are strong acids that completely ionize in water.",
    },
    {
      id: "che-40",
      question: "A buffer solution resists changes in:",
      options: ["Temperature", "Volume", "pH", "Concentration"],
      correct: 2,
      explanation:
        "A buffer solution resists significant changes in pH when small amounts of acid or base are added. It typically consists of a weak acid and its conjugate base (or weak base + conjugate acid).",
    },
    {
      id: "che-41",
      question: "In electrochemistry, oxidation occurs at the:",
      options: ["Cathode", "Anode", "Electrolyte", "Salt bridge"],
      correct: 1,
      explanation:
        "Oxidation (loss of electrons) occurs at the anode. Reduction (gain of electrons) occurs at the cathode. Remember: AN-OX (Anode-Oxidation), RED-CAT (Reduction-Cathode).",
    },
    {
      id: "che-42",
      question:
        "The standard hydrogen electrode (SHE) has a standard electrode potential of:",
      options: ["-1.0 V", "-0.5 V", "0.00 V", "+1.0 V"],
      correct: 2,
      explanation:
        "The Standard Hydrogen Electrode (SHE) is assigned an electrode potential of exactly 0.00 V by convention. All other electrode potentials are measured relative to SHE.",
    },
    {
      id: "che-43",
      question:
        "Faraday's first law of electrolysis states that the mass of substance deposited is proportional to:",
      options: [
        "The voltage applied",
        "The temperature",
        "The quantity of charge passed",
        "The resistance of electrolyte",
      ],
      correct: 2,
      explanation:
        "Faraday's first law: m = ZQ = ZIt, where m = mass deposited, Z = electrochemical equivalent, Q = charge (I × t). More charge → more deposition.",
    },
    {
      id: "che-44",
      question: "The mole fraction of solute in a solution is defined as:",
      options: [
        "Moles of solute / Volume of solution in litres",
        "Moles of solute / Total moles of solution",
        "Mass of solute / Mass of solution × 100",
        "Moles of solute / Mass of solvent",
      ],
      correct: 1,
      explanation:
        "Mole fraction of solute = n(solute) / [n(solute) + n(solvent)]. It is dimensionless and the sum of all mole fractions in a solution equals 1.",
    },
    {
      id: "che-45",
      question:
        "According to Le Chatelier's principle, increasing pressure in a gas-phase equilibrium favors:",
      options: [
        "The side with more moles of gas",
        "The side with fewer moles of gas",
        "The side with higher temperature",
        "No change in equilibrium",
      ],
      correct: 1,
      explanation:
        "Le Chatelier's principle: increasing pressure shifts equilibrium toward the side producing fewer moles of gas (to reduce pressure). Decreasing pressure favors more moles of gas.",
    },
    {
      id: "che-46",
      question: "The equilibrium constant expression for N₂ + 3H₂ ⇌ 2NH₃ is:",
      options: [
        "Kc = [NH₃]² / ([N₂][H₂]³)",
        "Kc = [N₂][H₂]³ / [NH₃]²",
        "Kc = [NH₃] / ([N₂][H₂])",
        "Kc = 2[NH₃] / ([N₂] + 3[H₂])",
      ],
      correct: 0,
      explanation:
        "Kc = [products]^stoichiometry / [reactants]^stoichiometry = [NH₃]² / ([N₂][H₂]³). Pure solids and liquids are excluded from the expression.",
    },
    {
      id: "che-47",
      question:
        "The mass percentage of an element in a compound is used to determine its:",
      options: [
        "Molar mass",
        "Empirical formula",
        "Molecular structure",
        "Ionic charge",
      ],
      correct: 1,
      explanation:
        "Mass percentage data (from elemental analysis) is used to determine the empirical formula — the simplest whole-number ratio of atoms in a compound.",
    },
    {
      id: "che-48",
      question: "Which of the following represents a balanced equation?",
      options: [
        "H₂ + O₂ → H₂O",
        "2H₂ + O₂ → 2H₂O",
        "H₂ + 2O₂ → H₂O",
        "2H₂ + 2O₂ → H₂O",
      ],
      correct: 1,
      explanation:
        "2H₂ + O₂ → 2H₂O is balanced: 4H on each side, 2O on each side. Balancing follows conservation of mass — atoms cannot be created or destroyed.",
    },
    {
      id: "che-49",
      question: "The number of bonds in a nitrogen molecule (N₂) is:",
      options: ["Single bond", "Double bond", "Triple bond", "No bond"],
      correct: 2,
      explanation:
        "N₂ contains a triple bond (one σ + two π bonds). This makes N₂ extremely stable (bond energy ~945 kJ/mol). Nitrogen is unreactive at room temperature.",
    },
    {
      id: "che-50",
      question: "The addition of a catalyst to a reaction:",
      options: [
        "Increases activation energy",
        "Decreases activation energy",
        "Changes the equilibrium constant",
        "Increases temperature",
      ],
      correct: 1,
      explanation:
        "A catalyst provides an alternative reaction pathway with lower activation energy, speeding up both forward and reverse reactions equally. It does NOT change Kc or ΔG.",
    },
    {
      id: "che-51",
      question: "The functional group −CHO is called:",
      options: ["Ketone", "Aldehyde", "Alcohol", "Ether"],
      correct: 1,
      explanation:
        "−CHO is the aldehyde functional group (carbonyl group at the terminal carbon). Ketone (−CO−) has the carbonyl group between two carbons. −OH is alcohol, −O− is ether.",
    },
    {
      id: "che-52",
      question: "Benzene (C₆H₆) is an example of:",
      options: [
        "Aliphatic compound",
        "Alicyclic compound",
        "Aromatic compound",
        "Saturated compound",
      ],
      correct: 2,
      explanation:
        "Benzene is the simplest aromatic compound — a planar ring with delocalized π electrons satisfying Hückel's rule (4n+2 π electrons). It shows resonance stability.",
    },
    {
      id: "che-53",
      question: "Osmotic pressure (π) of a solution is given by:",
      options: ["π = nRT", "π = CRT", "π = RT/C", "π = nR/T"],
      correct: 1,
      explanation:
        "Van't Hoff's osmotic pressure equation: π = CRT = (n/V)RT, where C = molar concentration, R = gas constant, T = temperature in Kelvin.",
    },
    {
      id: "che-54",
      question:
        "Which of the following is the correct order of atomic radius in the periodic table?",
      options: [
        "Increases left to right across a period",
        "Increases top to bottom in a group",
        "Increases right to left and bottom to top",
        "Remains constant in the same period",
      ],
      correct: 1,
      explanation:
        "Atomic radius increases going DOWN a group (more electron shells added) and DECREASES going left to right across a period (more protons pull electrons closer).",
    },
    {
      id: "che-55",
      question:
        "The process of converting alkenes into alkanes by adding hydrogen is called:",
      options: ["Oxidation", "Hydrogenation", "Halogenation", "Dehydration"],
      correct: 1,
      explanation:
        "Hydrogenation: alkene + H₂ → alkane (requires Ni/Pd/Pt catalyst, heat). Example: CH₂=CH₂ + H₂ → CH₃-CH₃ (ethylene to ethane). Used in making margarine from vegetable oils.",
    },
    {
      id: "che-56",
      question: "What is the charge on the chromate ion (CrO₄²⁻)?",
      options: ["-1", "-2", "+2", "+6"],
      correct: 1,
      explanation:
        "Chromate ion is CrO₄²⁻ with a charge of −2. Chromium's oxidation state in chromate: since O is −2, 4×(−2) = −8, so Cr must be +6 to give overall −2 charge.",
    },
    {
      id: "che-57",
      question: "Soaps are sodium or potassium salts of:",
      options: [
        "Short-chain carboxylic acids",
        "Long-chain fatty acids",
        "Amino acids",
        "Sulfonic acids",
      ],
      correct: 1,
      explanation:
        "Soaps are sodium (hard soap) or potassium (soft soap) salts of long-chain fatty acids (like stearic acid C₁₈). They are made by saponification of fats/oils with NaOH/KOH.",
    },
    {
      id: "che-58",
      question: "Which property of water makes it an excellent solvent?",
      options: [
        "Low boiling point",
        "Its nonpolar nature",
        "High polarity and hydrogen bonding",
        "Low surface tension",
      ],
      correct: 2,
      explanation:
        "Water is a polar molecule and forms hydrogen bonds, making it an excellent solvent for ionic and polar compounds ('like dissolves like'). It's called the 'universal solvent'.",
    },
    {
      id: "che-59",
      question:
        "The atomic mass of chlorine is approximately 35.5 u. This is because:",
      options: [
        "All chlorine atoms have mass 35.5",
        "Chlorine exists as two isotopes (Cl-35 and Cl-37) in a 3:1 ratio",
        "Chlorine gains 0.5 electrons",
        "Chlorine has 35.5 protons",
      ],
      correct: 1,
      explanation:
        "Chlorine has two isotopes: Cl-35 (~75%) and Cl-37 (~25%). Average atomic mass = (35×0.75 + 37×0.25) = 26.25 + 9.25 = 35.5 u (weighted average).",
    },
    {
      id: "che-60",
      question:
        "The reaction in which a substance is both oxidized and reduced is called:",
      options: [
        "Neutralization",
        "Precipitation",
        "Disproportionation",
        "Substitution",
      ],
      correct: 2,
      explanation:
        "Disproportionation (comproportionation) is when a single substance simultaneously undergoes both oxidation and reduction. Example: 2H₂O₂ → 2H₂O + O₂ (hydrogen peroxide decomposes).",
    },
    {
      id: "che-61",
      question: "Which of the following has the greatest lattice energy?",
      options: ["NaF", "NaCl", "NaBr", "NaI"],
      correct: 0,
      explanation:
        "Lattice energy increases with smaller ionic radii and higher charge. F⁻ is the smallest halide ion, so NaF has the greatest lattice energy among sodium halides.",
    },
    {
      id: "che-62",
      question: "In organic chemistry, the SN2 reaction mechanism involves:",
      options: [
        "Two-step mechanism with a carbocation intermediate",
        "One-step mechanism with backside attack",
        "Free radical mechanism",
        "Electrophilic addition",
      ],
      correct: 1,
      explanation:
        "SN2 (Substitution Nucleophilic Bimolecular) is a one-step mechanism where the nucleophile attacks from the backside of the leaving group, causing inversion of configuration.",
    },
    {
      id: "che-63",
      question: "The IUPAC name of CH₃−CH₂−CHO is:",
      options: ["Propanal", "Propanone", "Butanal", "Ethanal"],
      correct: 0,
      explanation:
        "CH₃−CH₂−CHO has 3 carbons with an aldehyde (−CHO) group. IUPAC: propanal (prop = 3 carbons, an = single bonds, al = aldehyde). Ethanal has 2 carbons.",
    },
    {
      id: "che-64",
      question: "Avogadro's number (Nₐ) is approximately:",
      options: ["6.022 × 10²⁰", "6.022 × 10²³", "6.022 × 10²⁶", "6.022 × 10¹⁸"],
      correct: 1,
      explanation:
        "Avogadro's number Nₐ ≈ 6.022 × 10²³ mol⁻¹. One mole of any substance contains 6.022 × 10²³ particles (atoms, molecules, ions, etc.).",
    },
    {
      id: "che-65",
      question: "The hybridization of nitrogen in ammonia (NH₃) is:",
      options: ["sp", "sp²", "sp³", "sp³d"],
      correct: 2,
      explanation:
        "Nitrogen in NH₃ is sp³ hybridized — three bonding pairs + one lone pair. The lone pair causes the geometry to be trigonal pyramidal (not tetrahedral) with bond angle 107°.",
    },
    {
      id: "che-66",
      question: "Which of the following is an example of a nucleophile?",
      options: ["H⁺", "BF₃", "AlCl₃", "OH⁻"],
      correct: 3,
      explanation:
        "A nucleophile is an electron-rich species that donates an electron pair. OH⁻ has lone pairs and negative charge, making it a good nucleophile. H⁺, BF₃, AlCl₃ are electrophiles.",
    },
    {
      id: "che-67",
      question: "Rubber is a natural polymer of:",
      options: [
        "Ethylene",
        "Isoprene (2-methyl-1,3-butadiene)",
        "Styrene",
        "Vinyl chloride",
      ],
      correct: 1,
      explanation:
        "Natural rubber is a polymer of isoprene (2-methyl-1,3-butadiene, C₅H₈). Its systematic name is cis-polyisoprene. Vulcanization with sulfur improves its strength.",
    },
    {
      id: "che-68",
      question: "The law of conservation of mass in chemical reactions states:",
      options: [
        "Mass increases in exothermic reactions",
        "Total mass of reactants equals total mass of products",
        "Mass is converted to energy in all reactions",
        "Only atoms of same element can combine",
      ],
      correct: 1,
      explanation:
        "Law of conservation of mass (Lavoisier): in a chemical reaction, the total mass of reactants equals the total mass of products. Matter is neither created nor destroyed.",
    },
    {
      id: "che-69",
      question: "The colligative properties of a solution depend on:",
      options: [
        "The nature (identity) of the solute",
        "The number of solute particles",
        "The color of the solute",
        "The chemical formula of solvent",
      ],
      correct: 1,
      explanation:
        "Colligative properties (boiling point elevation, freezing point depression, osmotic pressure, vapor pressure lowering) depend only on the NUMBER of solute particles, not their identity.",
    },
    {
      id: "che-70",
      question: "Alkynes are characterized by the presence of:",
      options: [
        "Only single bonds",
        "One double bond",
        "One triple bond",
        "Aromatic ring",
      ],
      correct: 2,
      explanation:
        "Alkynes contain at least one carbon-carbon triple bond (one σ + two π bonds). General formula: CₙH₂ₙ₋₂. Example: ethyne (acetylene) HC≡CH.",
    },
  ],

  Math: [
    {
      id: "mat-1",
      question: "If f(x) = x² + 3x + 2, what is f(2)?",
      options: ["8", "12", "10", "6"],
      correct: 1,
      explanation: "f(2) = 2² + 3(2) + 2 = 4 + 6 + 2 = 12",
    },
    {
      id: "mat-2",
      question: "What is sin 30°?",
      options: ["0", "√3/2", "1/2", "1"],
      correct: 2,
      explanation:
        "sin 30° = 1/2. Remember the pattern: sin values at 0°, 30°, 45°, 60°, 90° are 0, 1/2, 1/√2, √3/2, 1",
    },
    {
      id: "mat-3",
      question: "The derivative of sin(x) is:",
      options: ["-cos(x)", "cos(x)", "-sin(x)", "tan(x)"],
      correct: 1,
      explanation:
        "d/dx(sin x) = cos x. And d/dx(cos x) = -sin x. These are fundamental derivatives to memorize!",
    },
    {
      id: "mat-4",
      question:
        "What is the area of a circle with radius 7 cm? (Take π = 22/7)",
      options: ["44 cm²", "154 cm²", "22 cm²", "308 cm²"],
      correct: 1,
      explanation: "Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm²",
    },
    {
      id: "mat-5",
      question: "What is the sum of the first 10 natural numbers?",
      options: ["45", "50", "55", "60"],
      correct: 2,
      explanation:
        "Sum = n(n+1)/2 = 10 × 11 / 2 = 55. This formula is essential for AP sums.",
    },
    {
      id: "mat-6",
      question: "If log₁₀(100) = x, then x equals:",
      options: ["1", "2", "10", "100"],
      correct: 1,
      explanation:
        "log₁₀(100) = log₁₀(10²) = 2. The logarithm asks 'to what power must 10 be raised to get 100?' Answer: 2.",
    },
    {
      id: "mat-7",
      question: "The quadratic formula for ax² + bx + c = 0 gives x as:",
      options: [
        "x = (-b ± √(b² - 4ac)) / 2a",
        "x = (b ± √(b² - 4ac)) / 2a",
        "x = (-b ± √(b² + 4ac)) / 2a",
        "x = (-b ± √(4ac - b²)) / 2a",
      ],
      correct: 0,
      explanation:
        "The quadratic formula is x = (-b ± √(b² - 4ac)) / 2a. The discriminant b² - 4ac determines the nature of roots.",
    },
    {
      id: "mat-8",
      question:
        "In a right triangle, if one angle is 90° and another is 45°, the third angle is:",
      options: ["30°", "45°", "60°", "90°"],
      correct: 1,
      explanation:
        "Sum of angles in a triangle = 180°. So 90° + 45° + x = 180°, giving x = 45°. This is an isosceles right triangle!",
    },
    {
      id: "mat-9",
      question: "What is ∫x² dx (indefinite integral)?",
      options: ["2x", "x³", "x³/3 + C", "3x²"],
      correct: 2,
      explanation:
        "∫x² dx = x³/3 + C. Power rule for integrals: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ -1.",
    },
    {
      id: "mat-10",
      question: "A matrix has 3 rows and 4 columns. Its order is:",
      options: ["4 × 3", "3 × 4", "12 × 1", "7 × 1"],
      correct: 1,
      explanation:
        "Matrix order is written as rows × columns. 3 rows and 4 columns → order is 3 × 4.",
    },
    {
      id: "mat-11",
      question: "What is the value of cos 0°?",
      options: ["0", "1/2", "√3/2", "1"],
      correct: 3,
      explanation:
        "cos 0° = 1. At 0°, the adjacent side equals the hypotenuse. Trigonometric values: cos at 0°,30°,45°,60°,90° = 1, √3/2, 1/√2, 1/2, 0.",
    },
    {
      id: "mat-12",
      question: "The equation of a line with slope 2 and y-intercept 3 is:",
      options: ["y = 3x + 2", "y = 2x + 3", "y = 2x - 3", "y = 3x - 2"],
      correct: 1,
      explanation:
        "Slope-intercept form: y = mx + b, where m = slope and b = y-intercept. So y = 2x + 3.",
    },
    {
      id: "mat-13",
      question: "n! (n factorial) for n = 5 is:",
      options: ["25", "60", "120", "720"],
      correct: 2,
      explanation:
        "5! = 5 × 4 × 3 × 2 × 1 = 120. Factorial is the product of all positive integers up to n.",
    },
    {
      id: "mat-14",
      question: "The probability of getting a head in a single coin toss is:",
      options: ["0", "1/4", "1/2", "1"],
      correct: 2,
      explanation:
        "A fair coin has 2 equally likely outcomes: Head or Tail. P(Head) = 1/2 = 0.5 = 50%.",
    },
    {
      id: "mat-15",
      question: "If the radius of a sphere is r, its volume is:",
      options: ["4πr²", "πr²h", "(4/3)πr³", "2πr³"],
      correct: 2,
      explanation:
        "Volume of a sphere = (4/3)πr³. Surface area of a sphere = 4πr². Don't confuse the two!",
    },
    {
      id: "mat-16",
      question: "What is the determinant of matrix [[2,3],[1,4]]?",
      options: ["5", "8", "11", "14"],
      correct: 0,
      explanation:
        "det([[a,b],[c,d]]) = ad - bc = (2)(4) - (3)(1) = 8 - 3 = 5.",
    },
    {
      id: "mat-17",
      question:
        "The nth term of an arithmetic progression with first term a and common difference d is:",
      options: ["a + nd", "a + (n-1)d", "a × dⁿ", "a × dⁿ⁻¹"],
      correct: 1,
      explanation:
        "nth term (Tₙ) of an AP = a + (n-1)d. For a GP, nth term = a × rⁿ⁻¹ where r is the common ratio.",
    },
    {
      id: "mat-18",
      question: "What is the value of i² where i = √(-1)?",
      options: ["1", "-1", "i", "-i"],
      correct: 1,
      explanation:
        "By definition, i = √(-1), so i² = -1. This is the fundamental property of imaginary numbers.",
    },
    {
      id: "mat-19",
      question:
        "The perimeter of a rectangle with length 8 cm and width 5 cm is:",
      options: ["13 cm", "26 cm", "40 cm", "80 cm"],
      correct: 1,
      explanation:
        "Perimeter of rectangle = 2(l + w) = 2(8 + 5) = 2 × 13 = 26 cm. Area would be l × w = 40 cm².",
    },
    {
      id: "mat-20",
      question: "Solve: 2x + 5 = 13. The value of x is:",
      options: ["3", "4", "5", "9"],
      correct: 1,
      explanation: "2x + 5 = 13 → 2x = 13 - 5 = 8 → x = 8/2 = 4.",
    },
    {
      id: "mat-21",
      question: "The number of diagonals in a hexagon (6 sides) is:",
      options: ["6", "9", "12", "15"],
      correct: 1,
      explanation:
        "Number of diagonals = n(n-3)/2 = 6(6-3)/2 = 6×3/2 = 9. A hexagon has 9 diagonals.",
    },
    {
      id: "mat-22",
      question: "What is 2³ × 2⁴?",
      options: ["2⁷", "2¹²", "4⁷", "2⁶"],
      correct: 0,
      explanation:
        "Using the law of exponents: aᵐ × aⁿ = aᵐ⁺ⁿ. So 2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128.",
    },
    {
      id: "mat-23",
      question: "The median of the data set {3, 7, 1, 9, 5} is:",
      options: ["3", "5", "7", "9"],
      correct: 1,
      explanation:
        "Sort the data: {1, 3, 5, 7, 9}. The middle value (3rd of 5) is 5. For even number of values, median = average of two middle values.",
    },
    {
      id: "mat-24",
      question: "The distance between points (0,0) and (3,4) is:",
      options: ["3", "4", "5", "7"],
      correct: 2,
      explanation:
        "Distance = √((x₂-x₁)² + (y₂-y₁)²) = √(3² + 4²) = √(9+16) = √25 = 5. Classic 3-4-5 Pythagorean triple!",
    },
    {
      id: "mat-25",
      question: "The value of tan 45° is:",
      options: ["0", "1/√2", "1", "√3"],
      correct: 2,
      explanation:
        "tan 45° = sin 45°/cos 45° = (1/√2)/(1/√2) = 1. In a 45-45-90 triangle, opposite = adjacent, so tan = 1.",
    },
    {
      id: "mat-26",
      question: "If A and B are two sets, A ∪ B means:",
      options: [
        "Elements common to both A and B",
        "Elements only in A",
        "All elements in A or B or both",
        "Elements in A but not B",
      ],
      correct: 2,
      explanation:
        "A ∪ B (A union B) = all elements in A or B or both. A ∩ B (A intersection B) = elements common to both.",
    },
    {
      id: "mat-27",
      question: "What is the LCM of 12 and 18?",
      options: ["6", "36", "72", "216"],
      correct: 1,
      explanation:
        "12 = 2² × 3, 18 = 2 × 3². LCM = 2² × 3² = 4 × 9 = 36. LCM takes the highest power of each prime factor.",
    },
    {
      id: "mat-28",
      question: "The sum of interior angles of a triangle is:",
      options: ["90°", "180°", "270°", "360°"],
      correct: 1,
      explanation:
        "The sum of interior angles of any triangle is always 180°. For a quadrilateral it's 360°, pentagon 540°, hexagon 720°.",
    },
    {
      id: "mat-29",
      question: "Which of the following is a prime number?",
      options: ["1", "9", "15", "17"],
      correct: 3,
      explanation:
        "17 is prime — divisible only by 1 and 17. 1 is not prime (by definition). 9 = 3², 15 = 3 × 5 are composite.",
    },
    {
      id: "mat-30",
      question:
        "If P(A) = 0.3 and P(B) = 0.4 and A, B are independent, then P(A ∩ B) is:",
      options: ["0.07", "0.12", "0.70", "0.12"],
      correct: 1,
      explanation:
        "For independent events: P(A ∩ B) = P(A) × P(B) = 0.3 × 0.4 = 0.12.",
    },
    {
      id: "mat-31",
      question: "The derivative of xⁿ with respect to x is:",
      options: ["nxⁿ", "nxⁿ⁻¹", "xⁿ/n", "n·xⁿ⁺¹"],
      correct: 1,
      explanation:
        "Power rule for differentiation: d/dx(xⁿ) = nxⁿ⁻¹. Example: d/dx(x⁵) = 5x⁴. This is one of the most fundamental rules in calculus.",
    },
    {
      id: "mat-32",
      question: "The derivative of e^x with respect to x is:",
      options: ["xe^(x-1)", "e^(x+1)", "e^x", "ln(x)"],
      correct: 2,
      explanation:
        "d/dx(eˣ) = eˣ. The exponential function is its own derivative — a unique and remarkable property of Euler's number e.",
    },
    {
      id: "mat-33",
      question: "∫eˣ dx equals:",
      options: ["eˣ/x + C", "eˣ + C", "xeˣ + C", "e^(x+1) + C"],
      correct: 1,
      explanation:
        "∫eˣ dx = eˣ + C. The exponential function is also its own integral (up to a constant). This is consistent with d/dx(eˣ) = eˣ.",
    },
    {
      id: "mat-34",
      question: "The limit lim(x→0) [sin(x)/x] equals:",
      options: ["0", "1", "∞", "undefined"],
      correct: 1,
      explanation:
        "lim(x→0) [sin(x)/x] = 1 (x in radians). This is one of the most important standard limits. It can be proved using the squeeze theorem.",
    },
    {
      id: "mat-35",
      question: "If f(x) = ln(x), then f'(x) equals:",
      options: ["1/x", "eˣ", "ln(x)/x", "x·ln(x)"],
      correct: 0,
      explanation:
        "d/dx[ln(x)] = 1/x for x > 0. This is derived from the fact that the derivative of eˣ is eˣ using implicit differentiation.",
    },
    {
      id: "mat-36",
      question: "∫sin(x) dx equals:",
      options: ["cos(x) + C", "-cos(x) + C", "sin(x) + C", "-sin(x) + C"],
      correct: 1,
      explanation:
        "∫sin(x) dx = −cos(x) + C. This follows because d/dx[−cos(x)] = sin(x). Remember: integration is the reverse of differentiation.",
    },
    {
      id: "mat-37",
      question:
        "The probability of getting at least one head in two tosses of a fair coin is:",
      options: ["1/4", "1/2", "3/4", "1"],
      correct: 2,
      explanation:
        "P(at least one head) = 1 − P(no heads) = 1 − P(TT) = 1 − (1/2)² = 1 − 1/4 = 3/4. Sample space: {HH, HT, TH, TT} — 3 out of 4 have at least one head.",
    },
    {
      id: "mat-38",
      question: "The standard deviation is the square root of:",
      options: ["Mean", "Median", "Variance", "Range"],
      correct: 2,
      explanation:
        "Standard deviation σ = √(Variance). Variance is the average squared deviation from the mean. σ measures the spread or dispersion of data.",
    },
    {
      id: "mat-39",
      question: "The mean of the data set {4, 8, 6, 5, 3, 2, 8, 9, 2, 5} is:",
      options: ["5", "5.2", "5.5", "6"],
      correct: 1,
      explanation:
        "Sum = 4+8+6+5+3+2+8+9+2+5 = 52. Mean = 52/10 = 5.2. The mean is the arithmetic average of all data points.",
    },
    {
      id: "mat-40",
      question:
        "In coordinate geometry, the midpoint of the line joining (x₁, y₁) and (x₂, y₂) is:",
      options: [
        "(x₁+y₁, x₂+y₂)",
        "((x₁+x₂)/2, (y₁+y₂)/2)",
        "(x₂-x₁, y₂-y₁)",
        "((x₁-x₂)/2, (y₁-y₂)/2)",
      ],
      correct: 1,
      explanation:
        "Midpoint formula: M = ((x₁+x₂)/2, (y₁+y₂)/2). It gives the point exactly halfway between two given points.",
    },
    {
      id: "mat-41",
      question: "The equation of a circle with center (h, k) and radius r is:",
      options: [
        "x² + y² = r²",
        "(x-h)² + (y-k)² = r²",
        "(x+h)² + (y+k)² = r",
        "x²/h² + y²/k² = r²",
      ],
      correct: 1,
      explanation:
        "Standard equation of a circle: (x−h)² + (y−k)² = r². When center is at origin (0,0): x² + y² = r².",
    },
    {
      id: "mat-42",
      question: "The eccentricity of a circle is:",
      options: ["1", "0", "> 1", "< 0"],
      correct: 1,
      explanation:
        "A circle has eccentricity = 0. Eccentricity (e): circle e=0, ellipse 0<e<1, parabola e=1, hyperbola e>1. It measures how 'elongated' a conic section is.",
    },
    {
      id: "mat-43",
      question:
        "The determinant of a 2×2 matrix [[a,b],[c,d]] equals zero when:",
      options: [
        "a = d",
        "b = c",
        "ad = bc (rows are proportional)",
        "a + d = 0",
      ],
      correct: 2,
      explanation:
        "det = ad − bc = 0 means the rows (and columns) are linearly dependent (proportional). This means the matrix is singular and has no inverse.",
    },
    {
      id: "mat-44",
      question:
        "If A is a 2×3 matrix and B is a 3×4 matrix, the product AB has order:",
      options: ["3×3", "2×4", "3×4", "2×3"],
      correct: 1,
      explanation:
        "Matrix multiplication: (m×n) × (n×p) = (m×p). A is 2×3 and B is 3×4. The inner dimensions (3) must match. Result is 2×4.",
    },
    {
      id: "mat-45",
      question: "The modulus of the complex number (3 + 4i) is:",
      options: ["3", "4", "5", "7"],
      correct: 2,
      explanation:
        "|3 + 4i| = √(3² + 4²) = √(9 + 16) = √25 = 5. The modulus is the distance from the origin in the Argand plane (3-4-5 triangle!).",
    },
    {
      id: "mat-46",
      question: "The conjugate of (2 + 3i) is:",
      options: ["2 - 3i", "-2 + 3i", "-2 - 3i", "3 + 2i"],
      correct: 0,
      explanation:
        "The conjugate of (a + bi) is (a − bi). So the conjugate of (2 + 3i) is (2 − 3i). The product of a complex number and its conjugate is always real: (2+3i)(2-3i) = 4+9 = 13.",
    },
    {
      id: "mat-47",
      question:
        "The sum of an infinite geometric series with first term a and common ratio |r| < 1 is:",
      options: ["a/(1-r)", "a/(1+r)", "a(1-r)", "a·r/(1-r)"],
      correct: 0,
      explanation:
        "Sum of infinite GP = a/(1−r), valid when |r| < 1. Example: 1 + 1/2 + 1/4 + ... = 1/(1−1/2) = 2.",
    },
    {
      id: "mat-48",
      question:
        "The common ratio of the geometric progression 3, 6, 12, 24, ... is:",
      options: ["2", "3", "4", "6"],
      correct: 0,
      explanation:
        "Common ratio r = second term / first term = 6/3 = 2. Each term is obtained by multiplying the previous term by 2.",
    },
    {
      id: "mat-49",
      question:
        "The coefficient of x³ in the binomial expansion of (1 + x)⁵ is:",
      options: ["5", "10", "15", "20"],
      correct: 1,
      explanation:
        "By binomial theorem, coefficient of xʳ in (1+x)ⁿ = C(n,r). Coefficient of x³ = C(5,3) = 5!/(3!2!) = 10.",
    },
    {
      id: "mat-50",
      question: "The value of C(n, r) + C(n, r-1) is:",
      options: ["C(n+1, r)", "C(n, r+1)", "C(n-1, r)", "2·C(n, r)"],
      correct: 0,
      explanation:
        "Pascal's rule: C(n,r) + C(n,r−1) = C(n+1,r). This is the additive property of binomial coefficients that forms Pascal's triangle.",
    },
    {
      id: "mat-51",
      question: "The slope of the line perpendicular to y = 3x + 5 is:",
      options: ["3", "-3", "1/3", "-1/3"],
      correct: 3,
      explanation:
        "For perpendicular lines, the product of slopes = −1. Slope of given line = 3. Perpendicular slope = −1/3. So (3) × (−1/3) = −1.",
    },
    {
      id: "mat-52",
      question: "∫₀¹ x dx (definite integral) equals:",
      options: ["0", "1/2", "1", "2"],
      correct: 1,
      explanation:
        "∫₀¹ x dx = [x²/2]₀¹ = 1²/2 − 0²/2 = 1/2. The definite integral represents the area under the curve y = x from x=0 to x=1 (a triangle with area ½×1×1=½).",
    },
    {
      id: "mat-53",
      question: "The number of ways to arrange 5 distinct objects is:",
      options: ["25", "120", "240", "720"],
      correct: 1,
      explanation:
        "The number of permutations of n distinct objects = n! = 5! = 5×4×3×2×1 = 120. These are all possible orderings.",
    },
    {
      id: "mat-54",
      question:
        "If two events A and B are mutually exclusive, then P(A ∪ B) equals:",
      options: [
        "P(A) × P(B)",
        "P(A) + P(B) − P(A∩B)",
        "P(A) + P(B)",
        "P(A) − P(B)",
      ],
      correct: 2,
      explanation:
        "For mutually exclusive events, P(A∩B) = 0, so P(A∪B) = P(A) + P(B). Mutually exclusive means A and B cannot both occur simultaneously.",
    },
    {
      id: "mat-55",
      question: "The inverse of matrix A exists if and only if:",
      options: [
        "Trace of A ≠ 0",
        "det(A) ≠ 0",
        "A is a square matrix",
        "All entries of A are positive",
      ],
      correct: 1,
      explanation:
        "A matrix A has an inverse (is invertible/non-singular) if and only if det(A) ≠ 0. If det(A) = 0, the matrix is singular and has no inverse.",
    },
    {
      id: "mat-56",
      question: "The derivative of cos(x) is:",
      options: ["sin(x)", "-sin(x)", "cos(x)", "-cos(x)"],
      correct: 1,
      explanation:
        "d/dx[cos(x)] = −sin(x). And d/dx[sin(x)] = cos(x). Note the negative sign for cosine's derivative.",
    },
    {
      id: "mat-57",
      question:
        "The sum of first n terms of an AP with first term a and common difference d is:",
      options: [
        "n/2 × (2a + nd)",
        "n/2 × (2a + (n-1)d)",
        "n × (a + d)",
        "n × (2a + d)",
      ],
      correct: 1,
      explanation:
        "Sum of AP: Sₙ = n/2 × [2a + (n−1)d] = n/2 × (first term + last term). For n=1, S₁ = a; for n=2, S₂ = 2a+d — both consistent.",
    },
    {
      id: "mat-58",
      question: "lim(x→∞) (1 + 1/x)^x equals:",
      options: ["0", "1", "e", "∞"],
      correct: 2,
      explanation:
        "lim(x→∞) (1 + 1/x)ˣ = e ≈ 2.718... This is one of the fundamental definitions of Euler's number e.",
    },
    {
      id: "mat-59",
      question:
        "If the discriminant b² − 4ac < 0 for a quadratic equation, the roots are:",
      options: [
        "Real and equal",
        "Real and unequal",
        "Complex (imaginary) conjugates",
        "Rational",
      ],
      correct: 2,
      explanation:
        "Discriminant D = b²−4ac: D>0 → two distinct real roots; D=0 → one repeated real root; D<0 → two complex conjugate roots (no real solutions).",
    },
    {
      id: "mat-60",
      question:
        "The angle subtended by an arc of length l at the center of a circle with radius r is:",
      options: ["θ = l + r", "θ = l/r", "θ = r/l", "θ = l × r"],
      correct: 1,
      explanation:
        "Arc length formula: l = rθ, so θ = l/r (θ in radians). This is the definition of radian measure: 1 radian is the angle subtended by an arc equal in length to the radius.",
    },
    {
      id: "mat-61",
      question:
        "Which of the following is correct for a function f(x) to be differentiable at x = a?",
      options: [
        "f(a) must exist only",
        "Left-hand and right-hand derivatives must be equal",
        "f(x) must be a polynomial",
        "f(a) must equal zero",
      ],
      correct: 1,
      explanation:
        "A function is differentiable at x=a if the left-hand derivative equals the right-hand derivative at that point. Differentiability implies continuity, but not vice versa.",
    },
    {
      id: "mat-62",
      question: "The geometric mean of two positive numbers a and b is:",
      options: ["(a+b)/2", "√(ab)", "2ab/(a+b)", "ab"],
      correct: 1,
      explanation:
        "Geometric mean (GM) = √(ab). Arithmetic mean (AM) = (a+b)/2. Harmonic mean (HM) = 2ab/(a+b). The AM-GM inequality states AM ≥ GM for positive numbers.",
    },
    {
      id: "mat-63",
      question: "The number of terms in the expansion of (a + b)ⁿ is:",
      options: ["n", "n-1", "n+1", "2n"],
      correct: 2,
      explanation:
        "The binomial expansion of (a+b)ⁿ has (n+1) terms: from r=0 to r=n in C(n,r)·aⁿ⁻ʳ·bʳ. So (a+b)³ has 4 terms, (a+b)¹⁰ has 11 terms.",
    },
    {
      id: "mat-64",
      question:
        "The equation of the parabola with vertex at origin opening upward is:",
      options: ["x² = −4ay", "y² = 4ax", "x² = 4ay", "y² = −4ax"],
      correct: 2,
      explanation:
        "For a parabola with vertex at origin opening upward: x² = 4ay (a>0). For rightward: y² = 4ax. For downward: x² = −4ay. 'a' is the distance from vertex to focus.",
    },
    {
      id: "mat-65",
      question: "If n(A) = 5, n(B) = 4, and n(A ∪ B) = 7, then n(A ∩ B) is:",
      options: ["1", "2", "3", "4"],
      correct: 1,
      explanation:
        "By inclusion-exclusion: n(A∪B) = n(A) + n(B) − n(A∩B). So 7 = 5 + 4 − n(A∩B), giving n(A∩B) = 9 − 7 = 2.",
    },
    {
      id: "mat-66",
      question: "The value of tan(90°) is:",
      options: ["0", "1", "√3", "Undefined"],
      correct: 3,
      explanation:
        "tan(90°) = sin(90°)/cos(90°) = 1/0, which is undefined. The tangent function has vertical asymptotes at 90°, 270°, etc.",
    },
    {
      id: "mat-67",
      question: "Which of the following is an even function?",
      options: ["f(x) = x³", "f(x) = sin(x)", "f(x) = x²", "f(x) = x"],
      correct: 2,
      explanation:
        "Even function: f(−x) = f(x). f(x) = x² → f(−x) = (−x)² = x² = f(x). ✓ Odd functions: f(−x) = −f(x). x, x³, sin(x) are odd functions.",
    },
    {
      id: "mat-68",
      question: "The integration by parts formula is:",
      options: [
        "∫uv dx = u∫v dx + v∫u dx",
        "∫uv dx = u∫v dx − ∫(du/dx × ∫v dx) dx",
        "∫uv dx = ∫u dx × ∫v dx",
        "∫uv dx = uv − ∫v du",
      ],
      correct: 3,
      explanation:
        "Integration by parts: ∫u dv = uv − ∫v du (or ∫u·v'dx = uv − ∫u'·v dx). Used when integrating products of functions. Choose u and dv using LIATE rule.",
    },
    {
      id: "mat-69",
      question:
        "The number of sample points in the sample space when a die is rolled twice is:",
      options: ["6", "12", "36", "64"],
      correct: 2,
      explanation:
        "When a die is rolled twice, each roll has 6 outcomes. Total sample space = 6 × 6 = 36 equally likely outcomes. These are ordered pairs (i, j) where i, j ∈ {1,2,3,4,5,6}.",
    },
    {
      id: "mat-70",
      question:
        "The slope of a curve at a given point is equal to the value of its:",
      options: [
        "Integral at that point",
        "Derivative at that point",
        "Second derivative at that point",
        "Inverse function",
      ],
      correct: 1,
      explanation:
        "The slope of a curve y = f(x) at a point x = a is the derivative f'(a) (the gradient of the tangent at that point). This is the geometric interpretation of the derivative.",
    },
  ],

  Biology: [
    {
      id: "bio-1",
      question: "Which organelle is known as the 'powerhouse of the cell'?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
      correct: 2,
      explanation:
        "Mitochondria produces ATP (energy) through cellular respiration, hence called the powerhouse of the cell.",
    },
    {
      id: "bio-2",
      question: "The overall equation for photosynthesis is:",
      options: [
        "6O₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂",
        "6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂",
        "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
        "6CO₂ + Light → C₆H₁₂O₆",
      ],
      correct: 1,
      explanation:
        "Photosynthesis: 6CO₂ + 6H₂O + Light energy → C₆H₁₂O₆ (glucose) + 6O₂. Option C is actually cellular respiration!",
    },
    {
      id: "bio-3",
      question: "DNA base pairing: Adenine (A) pairs with:",
      options: ["Guanine (G)", "Cytosine (C)", "Thymine (T)", "Uracil (U)"],
      correct: 2,
      explanation:
        "In DNA: A pairs with T (adenine-thymine), and G pairs with C (guanine-cytosine). Remember: A-T-G-C with A opposite T.",
    },
    {
      id: "bio-4",
      question: "Which process results in two identical daughter cells?",
      options: ["Meiosis", "Mitosis", "Binary fission", "Budding"],
      correct: 1,
      explanation:
        "Mitosis produces 2 identical daughter cells for growth and repair. Meiosis produces 4 genetically unique cells for reproduction.",
    },
    {
      id: "bio-5",
      question: "Which blood group is the universal donor?",
      options: ["A", "B", "AB", "O"],
      correct: 3,
      explanation:
        "Blood group O (specifically O-negative) is the universal donor because it lacks A, B, and Rh antigens, so it won't trigger immune reactions.",
    },
    {
      id: "bio-6",
      question: "Gregor Mendel used which plant for his genetics experiments?",
      options: [
        "Sunflower",
        "Garden pea (Pisum sativum)",
        "Corn (Zea mays)",
        "Fruit fly (Drosophila)",
      ],
      correct: 1,
      explanation:
        "Gregor Mendel conducted his famous heredity experiments using garden pea plants (Pisum sativum), studying 7 traits over many years.",
    },
    {
      id: "bio-7",
      question:
        "The green pigment in plants responsible for photosynthesis is:",
      options: ["Carotene", "Xanthophyll", "Chlorophyll", "Anthocyanin"],
      correct: 2,
      explanation:
        "Chlorophyll is the primary pigment for photosynthesis, absorbing red and blue light while reflecting green light (that's why plants look green!).",
    },
    {
      id: "bio-8",
      question: "Which organ produces insulin?",
      options: ["Liver", "Kidney", "Pancreas", "Thyroid"],
      correct: 2,
      explanation:
        "Insulin is produced by the beta cells of the pancreas (in the islets of Langerhans). Insulin regulates blood glucose levels.",
    },
    {
      id: "bio-9",
      question: "The basic unit of heredity is called:",
      options: ["Chromosome", "Gene", "Allele", "Genome"],
      correct: 1,
      explanation:
        "A gene is the basic unit of heredity — a specific sequence of DNA that codes for a protein or has a specific function.",
    },
    {
      id: "bio-10",
      question:
        "Which part of the human brain controls balance and coordination?",
      options: ["Cerebrum", "Medulla oblongata", "Hypothalamus", "Cerebellum"],
      correct: 3,
      explanation:
        "The cerebellum controls balance, coordination, and fine motor movements. The cerebrum handles higher functions, medulla controls breathing/heartbeat.",
    },
    {
      id: "bio-11",
      question:
        "The process by which cells engulf and digest particles is called:",
      options: ["Exocytosis", "Pinocytosis", "Phagocytosis", "Osmosis"],
      correct: 2,
      explanation:
        "Phagocytosis is the process where cells engulf large particles (like bacteria). White blood cells use phagocytosis to destroy pathogens.",
    },
    {
      id: "bio-12",
      question:
        "Which vitamin is produced by the skin when exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
      correct: 3,
      explanation:
        "Vitamin D (calciferol) is synthesized in the skin when exposed to ultraviolet (UV) radiation from sunlight. Deficiency causes rickets.",
    },
    {
      id: "bio-13",
      question: "The function of the kidney is to:",
      options: [
        "Produce insulin",
        "Filter blood and produce urine",
        "Pump blood through the body",
        "Digest food",
      ],
      correct: 1,
      explanation:
        "The kidneys filter blood to remove waste products and excess water, producing urine. They also regulate blood pressure and electrolyte balance.",
    },
    {
      id: "bio-14",
      question: "Which type of tissue connects muscles to bones?",
      options: ["Ligament", "Cartilage", "Tendon", "Nerve"],
      correct: 2,
      explanation:
        "Tendons connect muscles to bones. Ligaments connect bones to bones. Both are made of fibrous connective tissue.",
    },
    {
      id: "bio-15",
      question: "The smallest unit of life is:",
      options: ["Atom", "Molecule", "Cell", "Organelle"],
      correct: 2,
      explanation:
        "The cell is the smallest unit of life that can carry out all basic life processes. All living organisms are made of one or more cells.",
    },
    {
      id: "bio-16",
      question: "The number of chromosomes in a normal human somatic cell is:",
      options: ["23", "44", "46", "48"],
      correct: 2,
      explanation:
        "Human somatic (body) cells have 46 chromosomes (23 pairs). Gametes (sperm/egg) have 23 chromosomes (haploid). Down syndrome has 47.",
    },
    {
      id: "bio-17",
      question: "Which blood cells are responsible for immunity?",
      options: [
        "Red blood cells (RBCs)",
        "Platelets",
        "White blood cells (WBCs)",
        "Plasma cells",
      ],
      correct: 2,
      explanation:
        "White blood cells (WBCs / leukocytes) are responsible for immunity. They fight infections, produce antibodies, and destroy foreign agents.",
    },
    {
      id: "bio-18",
      question:
        "The process of breaking down glucose to release energy is called:",
      options: [
        "Photosynthesis",
        "Transpiration",
        "Cellular respiration",
        "Fermentation",
      ],
      correct: 2,
      explanation:
        "Cellular respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP (energy). Occurs in mitochondria. Aerobic respiration produces 36-38 ATP per glucose.",
    },
    {
      id: "bio-19",
      question: "Which structure controls what enters and exits the cell?",
      options: ["Cell wall", "Cell membrane", "Nucleus", "Cytoplasm"],
      correct: 1,
      explanation:
        "The cell membrane (plasma membrane) is selectively permeable — it controls what enters and exits the cell through various transport mechanisms.",
    },
    {
      id: "bio-20",
      question: "The theory of evolution by natural selection was proposed by:",
      options: [
        "Gregor Mendel",
        "Louis Pasteur",
        "Charles Darwin",
        "Jean-Baptiste Lamarck",
      ],
      correct: 2,
      explanation:
        "Charles Darwin proposed the theory of evolution by natural selection in his book 'On the Origin of Species' (1859). He observed variations and survival of the fittest.",
    },
    {
      id: "bio-21",
      question: "The liquid part of blood is called:",
      options: ["Serum", "Plasma", "Lymph", "Hemoglobin"],
      correct: 1,
      explanation:
        "Plasma is the liquid component of blood (~55% of blood volume). It contains proteins, nutrients, hormones, and waste products. Serum is plasma without clotting factors.",
    },
    {
      id: "bio-22",
      question: "Which organ is responsible for producing bile?",
      options: ["Stomach", "Pancreas", "Liver", "Gallbladder"],
      correct: 2,
      explanation:
        "The liver produces bile, which is stored in the gallbladder and released into the small intestine to help digest fats.",
    },
    {
      id: "bio-23",
      question:
        "The nervous system's basic structural and functional unit is the:",
      options: ["Synapse", "Neuron", "Axon", "Dendrite"],
      correct: 1,
      explanation:
        "The neuron (nerve cell) is the basic structural and functional unit of the nervous system. Axons carry signals away from the cell body; dendrites receive signals.",
    },
    {
      id: "bio-24",
      question: "Which gas is released during aerobic respiration?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Water vapor"],
      correct: 2,
      explanation:
        "Aerobic respiration releases CO₂ and water as by-products: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP).",
    },
    {
      id: "bio-25",
      question: "The term 'ecology' refers to the study of:",
      options: [
        "Internal organs of animals",
        "Relationships between organisms and their environment",
        "Classification of living organisms",
        "Cell structure and function",
      ],
      correct: 1,
      explanation:
        "Ecology is the scientific study of the relationships between organisms and their environment, including both biotic (living) and abiotic (non-living) factors.",
    },
    {
      id: "bio-26",
      question: "Which part of the flower becomes the fruit?",
      options: ["Sepal", "Petal", "Ovary", "Stamen"],
      correct: 2,
      explanation:
        "After fertilization, the ovary develops into a fruit. The ovules inside the ovary develop into seeds. This is the basis of fruit formation in flowering plants.",
    },
    {
      id: "bio-27",
      question: "Penicillin, an antibiotic, is derived from:",
      options: ["Bacteria", "Fungus (Penicillium)", "Algae", "Plant roots"],
      correct: 1,
      explanation:
        "Penicillin was discovered by Alexander Fleming from the fungus Penicillium notatum (now Penicillium chrysogenum). It was the first widely used antibiotic.",
    },
    {
      id: "bio-28",
      question: "Which process allows plants to lose water through leaves?",
      options: ["Photosynthesis", "Respiration", "Transpiration", "Absorption"],
      correct: 2,
      explanation:
        "Transpiration is the loss of water vapor from plant leaves through stomata. It helps in water and mineral transport through xylem (transpiration pull).",
    },
    {
      id: "bio-29",
      question: "The HIV virus mainly attacks which cells?",
      options: [
        "Red blood cells",
        "T-helper cells (CD4+)",
        "Platelets",
        "Neurons",
      ],
      correct: 1,
      explanation:
        "HIV (Human Immunodeficiency Virus) primarily attacks T-helper cells (CD4+ T cells), which are crucial for immune response. This weakens the immune system causing AIDS.",
    },
    {
      id: "bio-30",
      question: "Which scientist discovered the structure of DNA?",
      options: [
        "Gregor Mendel and Louis Pasteur",
        "Watson and Crick",
        "Darwin and Lamarck",
        "Hooke and Leeuwenhoek",
      ],
      correct: 1,
      explanation:
        "James Watson and Francis Crick, using X-ray crystallography data from Rosalind Franklin, proposed the double helix structure of DNA in 1953.",
    },
    {
      id: "bio-31",
      question: "The organelle responsible for protein synthesis is the:",
      options: ["Mitochondria", "Ribosome", "Golgi apparatus", "Lysosome"],
      correct: 1,
      explanation:
        "Ribosomes are the sites of protein synthesis (translation). They read mRNA and assemble amino acids into polypeptide chains. Found free in cytoplasm or on rough ER.",
    },
    {
      id: "bio-32",
      question: "The Golgi apparatus is primarily responsible for:",
      options: [
        "Energy production",
        "Protein modification and packaging for secretion",
        "DNA replication",
        "Cellular respiration",
      ],
      correct: 1,
      explanation:
        "The Golgi apparatus (Golgi body) processes, modifies, packages, and sorts proteins received from the rough ER for secretion or delivery to other organelles.",
    },
    {
      id: "bio-33",
      question: "Lysosomes contain:",
      options: [
        "Digestive enzymes",
        "Photosynthetic pigments",
        "ATP molecules",
        "Ribosomes",
      ],
      correct: 0,
      explanation:
        "Lysosomes contain hydrolytic (digestive) enzymes in an acidic environment (~pH 5). They digest worn-out organelles (autophagy) and foreign material brought in by phagocytosis.",
    },
    {
      id: "bio-34",
      question:
        "During which phase of mitosis does the nuclear envelope break down?",
      options: ["Interphase", "Prophase", "Metaphase", "Anaphase"],
      correct: 1,
      explanation:
        "During prophase, chromosomes condense and the nuclear envelope breaks down. In metaphase, chromosomes align at the equatorial plate. In anaphase, chromatids separate.",
    },
    {
      id: "bio-35",
      question: "Meiosis results in the formation of:",
      options: [
        "2 diploid cells",
        "4 diploid cells",
        "4 haploid cells",
        "2 haploid cells",
      ],
      correct: 2,
      explanation:
        "Meiosis produces 4 genetically unique haploid cells (n). Meiosis I separates homologous chromosomes; Meiosis II separates sister chromatids. This is essential for sexual reproduction.",
    },
    {
      id: "bio-36",
      question: "In Mendel's law of segregation, alleles separate during:",
      options: ["Mitosis", "Fertilization", "Meiosis", "DNA replication"],
      correct: 2,
      explanation:
        "Mendel's Law of Segregation: the two alleles for any trait separate (segregate) during gamete formation (meiosis). Each gamete receives only one allele from each pair.",
    },
    {
      id: "bio-37",
      question:
        "A cross between a homozygous dominant (TT) and homozygous recessive (tt) gives offspring with genotype:",
      options: ["TT only", "tt only", "Tt only", "TT and tt equally"],
      correct: 2,
      explanation:
        "TT × tt → all offspring are Tt (heterozygous). All show the dominant phenotype. This is the F1 generation in Mendel's monohybrid cross.",
    },
    {
      id: "bio-38",
      question: "DNA replication is called semi-conservative because:",
      options: [
        "Half the DNA is destroyed during replication",
        "Each new DNA molecule contains one old and one new strand",
        "Replication occurs at half speed",
        "Only half the genome is copied",
      ],
      correct: 1,
      explanation:
        "Semi-conservative replication: each new DNA double helix contains one original (parental) strand and one newly synthesized strand. Proven by Meselson-Stahl experiment (1958).",
    },
    {
      id: "bio-39",
      question:
        "The enzyme that synthesizes new DNA during DNA replication is:",
      options: ["DNA ligase", "RNA polymerase", "DNA polymerase", "Helicase"],
      correct: 2,
      explanation:
        "DNA polymerase synthesizes new DNA strands by adding nucleotides in the 5' to 3' direction. Helicase unwinds DNA, ligase joins Okazaki fragments, RNA polymerase makes RNA.",
    },
    {
      id: "bio-40",
      question:
        "The trophic level that includes decomposers such as fungi and bacteria is:",
      options: [
        "Producers",
        "Primary consumers",
        "Secondary consumers",
        "Detritivores/Decomposers",
      ],
      correct: 3,
      explanation:
        "Decomposers (bacteria, fungi) break down dead organic matter and recycle nutrients. They occupy a separate trophic category. They are critical for nutrient cycling in ecosystems.",
    },
    {
      id: "bio-41",
      question: "The food chain always begins with:",
      options: [
        "Herbivores",
        "Carnivores",
        "Producers (plants)",
        "Decomposers",
      ],
      correct: 2,
      explanation:
        "Food chains always begin with producers (autotrophs/plants) that convert solar energy to chemical energy through photosynthesis. Energy flows: producers → primary consumers → secondary consumers.",
    },
    {
      id: "bio-42",
      question: "The term 'biodiversity' refers to:",
      options: [
        "The number of individuals in a population",
        "The variety of life forms in an area",
        "The rate of evolution",
        "The biomass of an ecosystem",
      ],
      correct: 1,
      explanation:
        "Biodiversity is the variety of life — including genetic diversity, species diversity, and ecosystem diversity. Tropical rainforests have the highest biodiversity on Earth.",
    },
    {
      id: "bio-43",
      question: "Digestion of food in the stomach occurs in a __ environment:",
      options: [
        "Neutral (pH 7)",
        "Basic (pH > 7)",
        "Acidic (pH 1.5–3.5)",
        "Strongly alkaline (pH 12)",
      ],
      correct: 2,
      explanation:
        "The stomach produces HCl (hydrochloric acid), maintaining pH of ~1.5–3.5. This acidic environment activates pepsin (protein-digesting enzyme) and kills bacteria in food.",
    },
    {
      id: "bio-44",
      question:
        "The organ where most nutrient absorption occurs in the human digestive system is:",
      options: ["Stomach", "Large intestine", "Small intestine", "Esophagus"],
      correct: 2,
      explanation:
        "Most digestion and absorption of nutrients occurs in the small intestine (ileum). It has villi and microvilli (brush border) that greatly increase surface area for absorption.",
    },
    {
      id: "bio-45",
      question: "The gas exchange surface in the human lungs is the:",
      options: ["Trachea", "Bronchi", "Alveoli", "Bronchioles"],
      correct: 2,
      explanation:
        "Alveoli are tiny air sacs in the lungs where gas exchange occurs. Their features: thin walls (one cell thick), moist surface, rich blood supply, and large surface area (~70 m²).",
    },
    {
      id: "bio-46",
      question: "Hemoglobin is the protein in red blood cells that:",
      options: [
        "Fights infections",
        "Carries oxygen and carbon dioxide",
        "Clots blood",
        "Produces antibodies",
      ],
      correct: 1,
      explanation:
        "Hemoglobin is an iron-containing protein in RBCs that binds O₂ in the lungs (forming oxyhemoglobin) and releases it to tissues. It also carries ~20% of CO₂ back to lungs.",
    },
    {
      id: "bio-47",
      question: "The autonomic nervous system controls:",
      options: [
        "Voluntary muscle movements",
        "Conscious thought processes",
        "Involuntary body functions (heart rate, digestion)",
        "Vision and hearing",
      ],
      correct: 2,
      explanation:
        "The autonomic nervous system (ANS) controls involuntary functions — heart rate, breathing, digestion, glandular secretion. It has two divisions: sympathetic ('fight-or-flight') and parasympathetic ('rest-and-digest').",
    },
    {
      id: "bio-48",
      question: "Reflex actions in humans are controlled by the:",
      options: ["Cerebrum", "Cerebellum", "Spinal cord", "Hypothalamus"],
      correct: 2,
      explanation:
        "Simple reflex actions (like knee-jerk, withdrawal reflex) are controlled by the spinal cord without direct brain involvement. This allows rapid response to stimuli without waiting for brain processing.",
    },
    {
      id: "bio-49",
      question: "The light reactions of photosynthesis occur in the:",
      options: [
        "Stroma",
        "Matrix of mitochondria",
        "Thylakoid membranes",
        "Cytoplasm",
      ],
      correct: 2,
      explanation:
        "The light-dependent reactions (light reactions) occur on the thylakoid membranes in chloroplasts. They produce ATP, NADPH, and O₂. The Calvin cycle (dark reactions) occurs in the stroma.",
    },
    {
      id: "bio-50",
      question:
        "Which wavelengths of light are MOST absorbed by chlorophyll for photosynthesis?",
      options: [
        "Green and yellow",
        "Red and blue-violet",
        "Orange and indigo",
        "UV and infrared",
      ],
      correct: 1,
      explanation:
        "Chlorophyll absorbs red (peak ~680 nm) and blue-violet light (~430 nm) most strongly for photosynthesis. Green light is reflected (hence plants appear green). This is the absorption spectrum.",
    },
    {
      id: "bio-51",
      question:
        "According to Darwin's theory of evolution, organisms best suited to their environment are said to have:",
      options: [
        "Increased mutation rate",
        "Greater fitness and reproductive success",
        "Larger body size",
        "More chromosomes",
      ],
      correct: 1,
      explanation:
        "Darwinian fitness refers to an organism's ability to survive and reproduce in its environment. Natural selection favors individuals with traits that improve survival and reproduction.",
    },
    {
      id: "bio-52",
      question:
        "Which of the following is an example of homologous structures?",
      options: [
        "Wings of butterfly and wings of birds",
        "Human arm and whale flipper",
        "Eye of octopus and vertebrate eye",
        "Wings of bat and wings of insect",
      ],
      correct: 1,
      explanation:
        "Homologous structures share common ancestry (same basic structure, different functions). Human arm and whale flipper — same bone structure (humerus, radius, ulna) but different functions.",
    },
    {
      id: "bio-53",
      question: "Recombinant DNA technology (genetic engineering) involves:",
      options: [
        "Cross-breeding of organisms",
        "Inserting genes from one organism into another",
        "Selective breeding",
        "Cloning by cell division",
      ],
      correct: 1,
      explanation:
        "Recombinant DNA technology cuts DNA with restriction enzymes and inserts a gene of interest into a vector (plasmid) to produce a desired protein. Used to produce insulin, vaccines, GMOs.",
    },
    {
      id: "bio-54",
      question: "PCR (Polymerase Chain Reaction) is used to:",
      options: [
        "Separate proteins by size",
        "Amplify specific DNA sequences",
        "Sequence amino acids",
        "Create mutations in DNA",
      ],
      correct: 1,
      explanation:
        "PCR amplifies (makes millions of copies of) a specific DNA sequence in vitro. It uses DNA polymerase, primers, and thermal cycling. Essential for forensics, medical diagnosis, research.",
    },
    {
      id: "bio-55",
      question: "The process of transcription produces:",
      options: [
        "DNA from RNA",
        "mRNA from DNA",
        "Protein from mRNA",
        "DNA from protein",
      ],
      correct: 1,
      explanation:
        "Transcription: DNA → mRNA (using RNA polymerase in the nucleus). Translation: mRNA → Protein (at ribosomes). The central dogma: DNA → RNA → Protein.",
    },
    {
      id: "bio-56",
      question:
        "In a typical food chain, the amount of energy transferred to the next trophic level is approximately:",
      options: ["90%", "50%", "10%", "1%"],
      correct: 2,
      explanation:
        "The 10% rule: only about 10% of energy is transferred from one trophic level to the next. The rest is lost as heat (respiration) or waste. This limits food chain length.",
    },
    {
      id: "bio-57",
      question: "Which type of cell lacks a membrane-bound nucleus?",
      options: [
        "Animal cell",
        "Plant cell",
        "Fungal cell",
        "Prokaryotic cell (bacterial)",
      ],
      correct: 3,
      explanation:
        "Prokaryotic cells (bacteria, archaea) lack a membrane-bound nucleus and membrane-bound organelles. Eukaryotic cells (animals, plants, fungi) have a true nucleus.",
    },
    {
      id: "bio-58",
      question: "The primary function of platelets (thrombocytes) in blood is:",
      options: [
        "Oxygen transport",
        "Immunity",
        "Blood clotting (hemostasis)",
        "Nutrient transport",
      ],
      correct: 2,
      explanation:
        "Platelets (thrombocytes) are cell fragments that aggregate at wound sites to form blood clots (hemostasis), preventing blood loss. They release factors that activate the clotting cascade.",
    },
    {
      id: "bio-59",
      question:
        "Which plant hormone is responsible for promoting fruit development and seed germination?",
      options: ["Abscisic acid", "Cytokinin", "Gibberellin", "Auxin"],
      correct: 2,
      explanation:
        "Gibberellins promote stem elongation, fruit development, seed germination, and breaking dormancy. Auxin promotes cell elongation and phototropism. Abscisic acid promotes dormancy.",
    },
    {
      id: "bio-60",
      question:
        "The scientific study of heredity and genetic variation is called:",
      options: ["Ecology", "Taxonomy", "Genetics", "Physiology"],
      correct: 2,
      explanation:
        "Genetics is the branch of biology that studies heredity (how traits are passed from parents to offspring) and genetic variation. Gregor Mendel is called the 'Father of Genetics'.",
    },
    {
      id: "bio-61",
      question:
        "In the nitrogen cycle, the conversion of nitrogen gas (N₂) into ammonia (NH₃) is called:",
      options: [
        "Nitrification",
        "Denitrification",
        "Nitrogen fixation",
        "Ammonification",
      ],
      correct: 2,
      explanation:
        "Nitrogen fixation converts atmospheric N₂ into NH₃ (ammonia) by nitrogen-fixing bacteria (Rhizobium in legume root nodules, Azotobacter in soil). This makes nitrogen available to plants.",
    },
    {
      id: "bio-62",
      question:
        "Which of the following is the correct sequence of stages in the cell cycle?",
      options: [
        "G1 → S → G2 → M",
        "S → G1 → G2 → M",
        "M → G1 → S → G2",
        "G2 → G1 → S → M",
      ],
      correct: 0,
      explanation:
        "Cell cycle: G1 (growth) → S (DNA synthesis/replication) → G2 (preparation for division) → M (mitosis). G1, S, G2 together form interphase.",
    },
    {
      id: "bio-63",
      question: "Antibodies are produced by which type of cells?",
      options: [
        "T-lymphocytes",
        "B-lymphocytes (plasma cells)",
        "Macrophages",
        "Neutrophils",
      ],
      correct: 1,
      explanation:
        "B-lymphocytes differentiate into plasma cells that produce specific antibodies (immunoglobulins). T-lymphocytes coordinate immune response and kill infected cells. Macrophages are phagocytes.",
    },
    {
      id: "bio-64",
      question: "The term 'biomagnification' refers to:",
      options: [
        "Enlarging microscopic organisms for study",
        "Increase in toxin concentration at higher trophic levels",
        "Growth of organisms due to nutrients",
        "Magnification in electron microscopes",
      ],
      correct: 1,
      explanation:
        "Biomagnification (bioaccumulation): concentration of persistent toxins (DDT, mercury) increases at each successive trophic level because toxins are not metabolized and accumulate in fatty tissues.",
    },
    {
      id: "bio-65",
      question: "The secondary structure of proteins includes:",
      options: [
        "Amino acid sequence",
        "Alpha helix and beta pleated sheet",
        "Overall 3D shape",
        "Quaternary arrangement of subunits",
      ],
      correct: 1,
      explanation:
        "Protein structure levels: Primary = amino acid sequence; Secondary = alpha helix or beta pleated sheet (hydrogen bonds); Tertiary = overall 3D folding; Quaternary = multiple polypeptide chains.",
    },
    {
      id: "bio-66",
      question:
        "Which type of reproduction produces offspring genetically identical to the parent?",
      options: [
        "Sexual reproduction",
        "Asexual reproduction",
        "Budding only",
        "Parthenogenesis",
      ],
      correct: 1,
      explanation:
        "Asexual reproduction (binary fission, budding, fragmentation, vegetative propagation) produces genetically identical offspring (clones). Sexual reproduction creates genetic diversity.",
    },
    {
      id: "bio-67",
      question:
        "The process by which undigested food leaves the body is called:",
      options: [
        "Excretion",
        "Secretion",
        "Egestion (defecation)",
        "Filtration",
      ],
      correct: 2,
      explanation:
        "Egestion (defecation) is the elimination of undigested food from the digestive tract as feces. Excretion is elimination of metabolic waste products (urea, CO₂) by kidneys and lungs.",
    },
    {
      id: "bio-68",
      question:
        "Which vessel carries oxygenated blood AWAY from the heart to the body?",
      options: ["Vena cava", "Pulmonary vein", "Aorta", "Pulmonary artery"],
      correct: 2,
      explanation:
        "The aorta carries oxygenated blood from the left ventricle to the body. Pulmonary artery carries deoxygenated blood to lungs. Vena cava returns deoxygenated blood from body to heart.",
    },
    {
      id: "bio-69",
      question:
        "Osmosis is the movement of water molecules through a semi-permeable membrane from:",
      options: [
        "High solute concentration to low solute concentration",
        "Low solute (high water) concentration to high solute (low water) concentration",
        "High pressure to low pressure",
        "Low concentration to high concentration of all molecules",
      ],
      correct: 1,
      explanation:
        "Osmosis: water moves from low solute concentration (high water potential) to high solute concentration (low water potential) through a semi-permeable membrane. No energy required (passive).",
    },
    {
      id: "bio-70",
      question: "The Krebs cycle (citric acid cycle) occurs in the:",
      options: [
        "Cytoplasm",
        "Nucleus",
        "Mitochondrial matrix",
        "Thylakoid membrane",
      ],
      correct: 2,
      explanation:
        "The Krebs cycle occurs in the mitochondrial matrix. It oxidizes pyruvate (from glycolysis) producing CO₂, NADH, FADH₂. Electron transport chain (inner membrane) produces most ATP.",
    },
  ],

  English: [
    {
      id: "eng-1",
      question: "Which sentence is grammatically correct?",
      options: [
        "Neither of the students have submitted their assignments.",
        "Neither of the students has submitted his assignment.",
        "Neither of the students has submitted their assignments.",
        "Neither student have submitted their assignment.",
      ],
      correct: 2,
      explanation:
        "'Neither' takes a singular verb ('has'), and with a plural subject implied, 'their' is acceptable in modern usage. Best choice: 'Neither of the students has submitted their assignments.'",
    },
    {
      id: "eng-2",
      question: "The word 'benevolent' means:",
      options: [
        "Cruel and harsh",
        "Indifferent",
        "Well-meaning and charitable",
        "Dishonest",
      ],
      correct: 2,
      explanation:
        "Benevolent comes from Latin 'bene' (well) + 'volens' (wishing). It means well-meaning, charitable, and kindly disposed toward others.",
    },
    {
      id: "eng-3",
      question:
        "Identify the type: 'The quick brown fox jumps over the lazy dog.'",
      options: [
        "Complex sentence",
        "Compound sentence",
        "Simple sentence",
        "Compound-complex sentence",
      ],
      correct: 2,
      explanation:
        "This is a simple sentence — one independent clause with one subject (fox) and one predicate (jumps). It contains no subordinate clauses.",
    },
    {
      id: "eng-4",
      question: "The passive voice of 'She wrote a letter' is:",
      options: [
        "A letter is writing by her.",
        "A letter was written by her.",
        "A letter will be written by her.",
        "A letter has been written by her.",
      ],
      correct: 1,
      explanation:
        "Active: 'She wrote a letter' (past tense). Passive: 'A letter was written by her.' (Past passive = was/were + past participle)",
    },
    {
      id: "eng-5",
      question: "Which word is an antonym of 'verbose'?",
      options: ["Wordy", "Talkative", "Concise", "Eloquent"],
      correct: 2,
      explanation:
        "Verbose means using more words than needed (wordy). Its antonym is concise — expressing things briefly and clearly.",
    },
    {
      id: "eng-6",
      question:
        "A figure of speech where human qualities are given to non-human things is called:",
      options: ["Simile", "Metaphor", "Personification", "Alliteration"],
      correct: 2,
      explanation:
        "Personification gives human traits to non-human things: 'The wind whispered secrets.' Simile uses 'like/as'; metaphor directly equates two things.",
    },
    {
      id: "eng-7",
      question: "Which is the correct spelling?",
      options: [
        "Accomodation",
        "Accommodation",
        "Accomadation",
        "Accommadation",
      ],
      correct: 1,
      explanation:
        "The correct spelling is 'Accommodation' — with double 'c' and double 'm'. Ac-com-mo-da-tion.",
    },
    {
      id: "eng-8",
      question:
        "The tense in 'By next year, I will have finished my degree' is:",
      options: [
        "Simple Future",
        "Future Continuous",
        "Future Perfect",
        "Present Perfect",
      ],
      correct: 2,
      explanation:
        "Future Perfect tense (will have + past participle) indicates an action that will be completed before a specific future time.",
    },
    {
      id: "eng-9",
      question:
        "Which literary device is used in: 'Peter Piper picked a peck of pickled peppers'?",
      options: ["Assonance", "Alliteration", "Onomatopoeia", "Consonance"],
      correct: 1,
      explanation:
        "Alliteration is the repetition of the same initial consonant sound in neighboring words. Here 'P' repeats: Peter, Piper, picked, peck, peppers.",
    },
    {
      id: "eng-10",
      question: "The synonym of 'ephemeral' is:",
      options: ["Permanent", "Eternal", "Transient", "Substantial"],
      correct: 2,
      explanation:
        "Ephemeral means lasting for only a short time (transient, fleeting, temporary). From Greek 'ephemeros' meaning 'lasting only a day'.",
    },
    {
      id: "eng-11",
      question:
        "Which part of speech is the word 'quickly' in: 'She ran quickly'?",
      options: ["Adjective", "Verb", "Adverb", "Preposition"],
      correct: 2,
      explanation:
        "Quickly is an adverb — it modifies the verb 'ran' by telling us HOW she ran. Adverbs often end in '-ly' and modify verbs, adjectives, or other adverbs.",
    },
    {
      id: "eng-12",
      question: "The word 'ambiguous' means:",
      options: [
        "Having only one meaning",
        "Clear and distinct",
        "Open to more than one interpretation",
        "Without any meaning",
      ],
      correct: 2,
      explanation:
        "Ambiguous means open to multiple interpretations or having unclear meaning. Opposite: unambiguous (clear). Example: 'I saw the man with the telescope' is ambiguous.",
    },
    {
      id: "eng-13",
      question:
        "In the sentence 'The cake was eaten by the children,' 'the children' is the:",
      options: ["Subject", "Object", "Agent", "Predicate"],
      correct: 2,
      explanation:
        "In passive voice, the doer of the action is the agent (preceded by 'by'). The grammatical subject is 'the cake'. Children performed the action but are the agent.",
    },
    {
      id: "eng-14",
      question: "Which of the following is an example of a metaphor?",
      options: [
        "Life is like a box of chocolates",
        "The moon smiled down on us",
        "Time is money",
        "The wind howled loudly",
      ],
      correct: 2,
      explanation:
        "'Time is money' is a direct comparison (metaphor) without 'like' or 'as'. 'Life is like...' uses 'like' so it's a simile. 'Moon smiled' is personification.",
    },
    {
      id: "eng-15",
      question: "The reported speech of 'She said, \"I am happy\"' is:",
      options: [
        "She said that I am happy.",
        "She said that she was happy.",
        "She told that she is happy.",
        "She said that she is happy.",
      ],
      correct: 1,
      explanation:
        "In reported speech, the present tense (am) changes to past (was). The pronoun 'I' changes to 'she'. Correct: 'She said that she was happy.'",
    },
    {
      id: "eng-16",
      question: "A word opposite in meaning to another is called:",
      options: ["Synonym", "Homonym", "Antonym", "Acronym"],
      correct: 2,
      explanation:
        "An antonym is a word with opposite meaning (hot/cold, big/small). A synonym has similar meaning. A homonym sounds the same but has different meaning.",
    },
    {
      id: "eng-17",
      question:
        "Which article is used before a word beginning with a vowel sound?",
      options: ["a", "an", "the", "No article needed"],
      correct: 1,
      explanation:
        "'An' is used before vowel sounds: an apple, an hour (silent h). 'A' is used before consonant sounds: a book, a university (u sounds like 'y').",
    },
    {
      id: "eng-18",
      question: "The study of meaning in language is called:",
      options: ["Syntax", "Phonology", "Semantics", "Morphology"],
      correct: 2,
      explanation:
        "Semantics is the branch of linguistics that studies meaning. Syntax studies sentence structure, phonology studies sounds, morphology studies word forms.",
    },
    {
      id: "eng-19",
      question: "Choose the sentence with correct subject-verb agreement:",
      options: [
        "The team are playing well.",
        "Each of the boys have a book.",
        "Mathematics is my favourite subject.",
        "The news are surprising.",
      ],
      correct: 2,
      explanation:
        "'Mathematics is' is correct — subjects like mathematics, physics, news are singular despite ending in 's'. 'Each' takes singular verb. 'The team is' in American English.",
    },
    {
      id: "eng-20",
      question: "The literary term for a story within a story is called:",
      options: [
        "Flashback",
        "Frame narrative",
        "Stream of consciousness",
        "Foreshadowing",
      ],
      correct: 1,
      explanation:
        "A frame narrative (or frame story) is a story within a story structure. Example: The Canterbury Tales, Arabian Nights (1001 Nights).",
    },
    {
      id: "eng-21",
      question: "Which punctuation mark is used to show possession?",
      options: ["Comma (,)", "Semicolon (;)", "Apostrophe (')", "Hyphen (-)"],
      correct: 2,
      explanation:
        "Apostrophe shows possession: John's book, the dog's tail. Also used for contractions: don't, can't.",
    },
    {
      id: "eng-22",
      question: "The word 'protagonist' refers to:",
      options: [
        "The villain of a story",
        "The narrator of a story",
        "The main character of a story",
        "The supporting character",
      ],
      correct: 2,
      explanation:
        "The protagonist is the main character or hero of a story. The antagonist is the character who opposes the protagonist (often the villain).",
    },
    {
      id: "eng-23",
      question: "Choose the correct comparative form of 'good':",
      options: ["More good", "Gooder", "Better", "Best"],
      correct: 2,
      explanation:
        "'Better' is the comparative form of 'good'. 'Best' is the superlative. Good → Better → Best. (Irregular adjective — doesn't follow standard -er/-est pattern)",
    },
    {
      id: "eng-24",
      question: "A phrase that cannot stand alone as a sentence is called:",
      options: [
        "Independent clause",
        "Dependent clause",
        "Simple sentence",
        "Compound sentence",
      ],
      correct: 1,
      explanation:
        "A dependent (subordinate) clause cannot stand alone. It needs an independent clause to complete its meaning. Example: 'Although it was raining...' needs completion.",
    },
    {
      id: "eng-25",
      question: "The word 'loquacious' means:",
      options: ["Silent", "Talkative", "Confused", "Angry"],
      correct: 1,
      explanation:
        "Loquacious means tending to talk a great deal; talkative. From Latin 'loquax'. Synonyms: garrulous, verbose, chatty.",
    },
    {
      id: "eng-26",
      question: "Which sentence uses the Present Perfect tense correctly?",
      options: [
        "She has gone to market yesterday.",
        "She went to market yesterday.",
        "She has gone to market.",
        "She is going to market yesterday.",
      ],
      correct: 2,
      explanation:
        "Present Perfect: 'has/have + past participle.' It cannot be used with specific past time expressions like 'yesterday.' 'She has gone to market' (unspecified past time) is correct.",
    },
    {
      id: "eng-27",
      question: "Convert to passive voice: 'The teacher teaches the students.'",
      options: [
        "The students are taught by the teacher.",
        "The students were taught by the teacher.",
        "The students have been taught by the teacher.",
        "The students are being taught the teacher.",
      ],
      correct: 0,
      explanation:
        "Active (simple present): Subject + V₁ + object. Passive: Object + am/is/are + past participle + by + subject. → 'The students are taught by the teacher.'",
    },
    {
      id: "eng-28",
      question:
        "Which is the correct use of articles: 'She is ___ honest woman.'",
      options: ["a", "an", "the", "No article"],
      correct: 1,
      explanation:
        "'Honest' starts with a silent 'h' and the vowel sound 'o' (pronounced 'on-est'). Since the sound is a vowel, use 'an' — 'an honest woman.'",
    },
    {
      id: "eng-29",
      question: "The antonym of 'magnanimous' is:",
      options: ["Generous", "Petty", "Courageous", "Humble"],
      correct: 1,
      explanation:
        "Magnanimous means generous and forgiving, especially toward rivals. Its antonym is petty — mean-minded, small in outlook. Other antonyms: vindictive, selfish, unforgiving.",
    },
    {
      id: "eng-30",
      question: "The synonym of 'meticulous' is:",
      options: ["Careless", "Hasty", "Thorough/Precise", "Confused"],
      correct: 2,
      explanation:
        "Meticulous means showing great attention to detail, very careful and precise. Synonyms: thorough, precise, painstaking, scrupulous. Antonyms: careless, sloppy.",
    },
    {
      id: "eng-31",
      question:
        "Which figure of speech is used in 'The pen is mightier than the sword'?",
      options: ["Simile", "Hyperbole", "Metaphor", "Metonymy"],
      correct: 2,
      explanation:
        "'The pen is mightier than the sword' is a metaphor — it directly states that writing (pen) has more influence than military force (sword) without using 'like' or 'as'.",
    },
    {
      id: "eng-32",
      question: "A deliberate exaggeration for emphasis or effect is called:",
      options: ["Litotes", "Hyperbole", "Irony", "Oxymoron"],
      correct: 1,
      explanation:
        "Hyperbole is a figure of speech using intentional exaggeration: 'I've told you a million times.' Litotes is understatement ('not bad' = good). Oxymoron pairs contradictory terms.",
    },
    {
      id: "eng-33",
      question: "The term 'oxymoron' refers to:",
      options: [
        "Comparing two unlike things using 'like'",
        "A phrase combining contradictory terms",
        "Giving human qualities to objects",
        "Repetition of initial consonants",
      ],
      correct: 1,
      explanation:
        "An oxymoron combines two contradictory terms: 'deafening silence,' 'living death,' 'bittersweet.' The effect creates a paradoxical meaning.",
    },
    {
      id: "eng-34",
      question: "In a reading comprehension, an 'inference' is:",
      options: [
        "A direct statement from the text",
        "A conclusion drawn based on evidence and reasoning",
        "A definition provided in the passage",
        "A summary of the passage",
      ],
      correct: 1,
      explanation:
        "An inference is a conclusion drawn from evidence and reasoning, not explicitly stated in the text. 'Reading between the lines' — using clues to determine what is implied.",
    },
    {
      id: "eng-35",
      question: "Choose the grammatically correct sentence:",
      options: [
        "Between you and I, the secret is safe.",
        "Between you and me, the secret is safe.",
        "Between you and myself, the secret is safe.",
        "Between I and you, the secret is safe.",
      ],
      correct: 1,
      explanation:
        "'Between' is a preposition and requires objective pronouns. 'Me' is the objective form of 'I'. Correct: 'Between you and me.' ('I' is subjective, used as subject of verb.)",
    },
    {
      id: "eng-36",
      question: "The use of 'who' vs 'whom': choose the correct sentence.",
      options: [
        "Who did you speak to?",
        "Whom did you speak to?",
        "Who spoke to you?",
        "Whom spoke to you?",
      ],
      correct: 1,
      explanation:
        "'Whom' is used as an object. 'Whom did you speak to?' (object of 'to'). 'Who spoke to you?' (subject). Test: if answer uses 'him/her' → use 'whom'; if 'he/she' → use 'who'.",
    },
    {
      id: "eng-37",
      question:
        "Identify the literary device in: 'The bees hummed, the leaves whispered, the brook babbled.'",
      options: ["Personification", "Onomatopoeia", "Alliteration", "Assonance"],
      correct: 1,
      explanation:
        "Onomatopoeia uses words that imitate sounds: hummed, whispered, babbled all sound like the actions they describe. Combined with personification here.",
    },
    {
      id: "eng-38",
      question: "The term 'denouement' in literature refers to:",
      options: [
        "The rising action of the plot",
        "The climax of the story",
        "The final resolution of the plot",
        "The introduction of characters",
      ],
      correct: 2,
      explanation:
        "Denouement (from French 'to untangle') is the final part of a play/story where conflicts are resolved. It comes after the climax. Part of Freytag's pyramid of plot structure.",
    },
    {
      id: "eng-39",
      question: "Which sentence has a dangling modifier?",
      options: [
        "Running to catch the bus, John tripped.",
        "Running to catch the bus, the bag was dropped.",
        "While running to catch the bus, John dropped his bag.",
        "John, running to catch the bus, dropped his bag.",
      ],
      correct: 1,
      explanation:
        "A dangling modifier lacks a clear subject: 'Running to catch the bus, the bag was dropped.' — The bag cannot run. The subject (John) is missing. Options A, C, D correctly identify John as the runner.",
    },
    {
      id: "eng-40",
      question: "The word 'ameliorate' means:",
      options: [
        "To make worse",
        "To improve a bad situation",
        "To remain neutral",
        "To destroy",
      ],
      correct: 1,
      explanation:
        "Ameliorate means to make (something bad or unsatisfactory) better; to improve. Example: 'Aid organizations work to ameliorate the conditions of refugees.' Antonym: worsen, aggravate.",
    },
    {
      id: "eng-41",
      question: "An 'allegory' is a narrative in which:",
      options: [
        "Characters speak in rhyme",
        "Events and characters symbolize deeper moral or political meanings",
        "The ending is unexpected",
        "The hero has superhuman abilities",
      ],
      correct: 1,
      explanation:
        "An allegory is a story where characters and events symbolize deeper truths about human nature, morality, or politics. Examples: 'Animal Farm' (political allegory), 'The Pilgrim's Progress' (moral).",
    },
    {
      id: "eng-42",
      question:
        "Identify the correct reported speech for: 'He said, \"I will come tomorrow.\"'",
      options: [
        "He said that he will come the next day.",
        "He said that he would come tomorrow.",
        "He said that he would come the next day.",
        "He told that he would come the next day.",
      ],
      correct: 2,
      explanation:
        "Reported speech rules: 'will' → 'would'; 'tomorrow' → 'the next day'; 'said' (no object) is kept. Correct: 'He said that he would come the next day.'",
    },
    {
      id: "eng-43",
      question: "Which of the following is correctly punctuated?",
      options: [
        "Its a beautiful day, isnt it?",
        "It's a beautiful day, isn't it?",
        "Its a beautiful day isnt it?",
        "It's a beautiful day isn't it.",
      ],
      correct: 1,
      explanation:
        "'It's' = 'it is' (apostrophe for contraction). 'isn't' = 'is not' (apostrophe for contraction). A question must end with '?'. 'Its' without apostrophe is possessive.",
    },
    {
      id: "eng-44",
      question:
        "The figure of speech 'The city never sleeps' is an example of:",
      options: ["Simile", "Hyperbole", "Personification", "Alliteration"],
      correct: 2,
      explanation:
        "Personification gives human qualities to non-human things. A city cannot literally 'sleep' — this gives the city a human ability, expressing that it is always active.",
    },
    {
      id: "eng-45",
      question: "What does 'I.e.' stand for and how is it used?",
      options: [
        "'In example' — to give multiple examples",
        "'That is' — to clarify or restate",
        "'In effect' — to show result",
        "'Including everything' — to list items",
      ],
      correct: 1,
      explanation:
        "'I.e.' stands for Latin 'id est' meaning 'that is.' It introduces a clarification or restatement. 'E.g.' (exempli gratia) introduces examples. E.g.: 'I like citrus fruits, i.e., fruits with vitamin C.'",
    },
    {
      id: "eng-46",
      question:
        "The rhetorical device of asking a question not expecting an answer is called:",
      options: ["Hyperbole", "Rhetorical question", "Irony", "Apostrophe"],
      correct: 1,
      explanation:
        "A rhetorical question is asked for effect, not to get an answer. Example: 'Can't anyone do anything right?' The speaker doesn't expect a literal answer — it emphasizes a point.",
    },
    {
      id: "eng-47",
      question: "The word 'ubiquitous' means:",
      options: [
        "Rare and unusual",
        "Present or appearing to be present everywhere",
        "Unknown and mysterious",
        "Ancient and outdated",
      ],
      correct: 1,
      explanation:
        "Ubiquitous means present, appearing, or found everywhere. From Latin 'ubique' (everywhere). Example: 'Smartphones have become ubiquitous in modern life.'",
    },
    {
      id: "eng-48",
      question: "Which of the following is NOT a conjunction?",
      options: ["Although", "Because", "However", "Since"],
      correct: 2,
      explanation:
        "'However' is a conjunctive adverb (connects ideas in separate sentences), not a subordinating or coordinating conjunction. Although, because, and since are subordinating conjunctions.",
    },
    {
      id: "eng-49",
      question: "The past participle of 'break' is:",
      options: ["Broke", "Broken", "Breaked", "Breaking"],
      correct: 1,
      explanation:
        "'Break' is an irregular verb: break (base) → broke (simple past) → broken (past participle). Used in perfect tenses: 'He has broken the window.'",
    },
    {
      id: "eng-50",
      question:
        "Choose the word that best fills the blank: 'The evidence was __ to convict him.'",
      options: ["Sufficient", "Sufficiently", "Suffice", "Sufficiency"],
      correct: 0,
      explanation:
        "The blank follows 'was' (linking verb) and should complete the predicate as a subject complement — requiring an adjective. 'Sufficient' (adjective) is correct: 'The evidence was sufficient.'",
    },
    {
      id: "eng-51",
      question:
        "Which word correctly completes: 'Neither the students nor the teacher __ present.'",
      options: ["are", "were", "is", "have been"],
      correct: 2,
      explanation:
        "With 'neither...nor', the verb agrees with the CLOSER subject. 'The teacher' (singular) is closer, so use 'is'. Rule: 'Neither A nor B + verb agreeing with B.'",
    },
    {
      id: "eng-52",
      question: "A 'soliloquy' in drama is when:",
      options: [
        "Two characters converse privately",
        "A character speaks their thoughts aloud to the audience",
        "The narrator describes a scene",
        "Characters break the fourth wall together",
      ],
      correct: 1,
      explanation:
        "A soliloquy is a dramatic device where a character speaks their inner thoughts aloud, alone on stage, revealing their true feelings to the audience. Famous example: Hamlet's 'To be, or not to be...'",
    },
    {
      id: "eng-53",
      question:
        "The literary term for a recurring theme, symbol, or image in a work is:",
      options: ["Irony", "Motif", "Archetype", "Epiphany"],
      correct: 1,
      explanation:
        "A motif is a recurring element (symbol, image, theme, phrase) that has symbolic significance. Example: light and darkness motif in Romeo and Juliet. An archetype is a universal character/pattern.",
    },
    {
      id: "eng-54",
      question: "The antonym of 'cacophony' is:",
      options: ["Noise", "Silence", "Euphony", "Discord"],
      correct: 2,
      explanation:
        "Cacophony means a harsh, discordant mixture of sounds. Its antonym is euphony — a pleasing, harmonious combination of sounds. Both are also literary terms for sound effects in poetry.",
    },
    {
      id: "eng-55",
      question:
        "The conditional sentence 'If I were you, I would study harder' is:",
      options: [
        "First conditional (real/possible)",
        "Second conditional (unreal/hypothetical present)",
        "Third conditional (unreal past)",
        "Zero conditional (general truth)",
      ],
      correct: 1,
      explanation:
        "Second conditional: If + past tense + would + base verb. Used for unreal/hypothetical present situations. 'If I were you' is contrary to fact (I am not you). 'Were' is used for all persons.",
    },
    {
      id: "eng-56",
      question: "Which sentence uses the gerund correctly?",
      options: [
        "She is interesting in reading.",
        "She is interested in reading.",
        "She is interest in read.",
        "She interests in to read.",
      ],
      correct: 1,
      explanation:
        "'Interested in reading' — 'interested' is an adjective (past participle), and 'reading' is a gerund (verb+ing used as noun) functioning as the object of preposition 'in'.",
    },
    {
      id: "eng-57",
      question: "The word 'sycophant' means:",
      options: [
        "A person of great wisdom",
        "A flatterer who seeks favor through excessive praise",
        "A person who is very outspoken",
        "An ancient Greek philosopher",
      ],
      correct: 1,
      explanation:
        "A sycophant is a person who uses excessive flattery to gain favor with influential people. Synonyms: flatterer, toady, yes-man, fawner. From Greek roots meaning 'fig shower'.",
    },
    {
      id: "eng-58",
      question: "What is a 'thesis statement' in an essay?",
      options: [
        "The conclusion paragraph",
        "The main argument or central claim of the essay",
        "A list of all examples used",
        "The topic sentence of each paragraph",
      ],
      correct: 1,
      explanation:
        "A thesis statement presents the main argument or central claim of an essay, usually in the introduction. It tells the reader what to expect and what position the writer will defend.",
    },
    {
      id: "eng-59",
      question:
        "Identify the error: 'The data shows that pollution has increased.'",
      options: [
        "'Data' should be 'datum'",
        "'Shows' should be 'show' since 'data' is plural",
        "'Has' should be 'have'",
        "No error — this is correct",
      ],
      correct: 1,
      explanation:
        "Strictly, 'data' is the plural of 'datum' and should take a plural verb: 'The data show...' However, 'data' is increasingly used as a singular collective noun in informal contexts.",
    },
    {
      id: "eng-60",
      question: "The word 'perspicacious' means:",
      options: [
        "Having a tendency to sweat",
        "Having a ready insight; shrewdly observant",
        "Being overly talkative",
        "Being extremely cautious",
      ],
      correct: 1,
      explanation:
        "Perspicacious means having a ready insight into things; shrewd, discerning, perceptive. Example: 'A perspicacious student notices subtle patterns in literature.' From Latin 'perspicax' (seeing through).",
    },
    {
      id: "eng-61",
      question: "Which of the following is an example of situational irony?",
      options: [
        "A fire station burning down",
        "A character saying 'What lovely weather!' in a storm",
        "The twist ending of a story",
        "A narrator who knows more than the characters",
      ],
      correct: 0,
      explanation:
        "Situational irony: when the opposite of what is expected occurs. A fire station (meant to prevent fires) burning down is the classic example. Option B is verbal irony (sarcasm).",
    },
    {
      id: "eng-62",
      question: "The prefix 'mis-' in words like 'misunderstand' means:",
      options: ["Again", "Before", "Wrongly/badly", "Against"],
      correct: 2,
      explanation:
        "The prefix 'mis-' means wrongly or badly: misunderstand (understand wrongly), misspell, misfortune, mislead. Other prefixes: 're-' (again), 'pre-' (before), 'anti-' (against).",
    },
    {
      id: "eng-63",
      question: "Which of the following sentences is in the subjunctive mood?",
      options: [
        "If I was rich, I would travel.",
        "I suggest that he studies harder.",
        "I wish I were taller.",
        "She is going to the market.",
      ],
      correct: 2,
      explanation:
        "Subjunctive mood expresses wishes, hypotheticals, demands. 'I wish I were taller' uses 'were' (not 'was') — the classic subjunctive indicator. Also: 'If I were you...' and 'I recommend that he be...'",
    },
    {
      id: "eng-64",
      question: "The word 'pragmatic' describes a person who:",
      options: [
        "Is highly idealistic",
        "Deals with things practically and sensibly",
        "Is emotionally sensitive",
        "Is very talkative",
      ],
      correct: 1,
      explanation:
        "Pragmatic means dealing with things sensibly and realistically based on practical rather than idealistic considerations. Antonym: idealistic, impractical.",
    },
    {
      id: "eng-65",
      question: "A 'paradox' in literature is:",
      options: [
        "A comparison using 'like' or 'as'",
        "A statement that seems contradictory but may reveal a deeper truth",
        "The repetition of similar sounds",
        "An expression of extreme sorrow",
      ],
      correct: 1,
      explanation:
        "A paradox is a seemingly contradictory statement that may nonetheless be true: 'Less is more,' 'I must be cruel to be kind' (Shakespeare). Different from oxymoron (two contradictory words).",
    },
    {
      id: "eng-66",
      question: "Which sentence correctly uses a semicolon?",
      options: [
        "I went to the store; and bought milk.",
        "She studies hard; she always gets good grades.",
        "He likes music; that is upbeat and fast.",
        "She ran quickly; towards the finish line.",
      ],
      correct: 1,
      explanation:
        "A semicolon joins two closely related independent clauses without a conjunction. 'She studies hard; she always gets good grades' — both are complete sentences. Never use '; and' or '; that'.",
    },
    {
      id: "eng-67",
      question:
        "The literary term for the point of highest tension in a story is:",
      options: ["Exposition", "Rising action", "Climax", "Denouement"],
      correct: 2,
      explanation:
        "The climax is the point of highest tension or the turning point in a narrative. Plot structure: exposition → rising action → climax → falling action → resolution (denouement).",
    },
    {
      id: "eng-68",
      question: "The antonym of 'belligerent' is:",
      options: ["Aggressive", "Warlike", "Peaceful", "Angry"],
      correct: 2,
      explanation:
        "Belligerent means hostile and aggressive, inclined to start wars or arguments. Its antonym is peaceful/pacifistic. Synonyms: aggressive, combative, antagonistic, hostile.",
    },
    {
      id: "eng-69",
      question: "Which of the following is a compound sentence?",
      options: [
        "Although it rained, we played cricket.",
        "We played cricket in the rain.",
        "It rained, but we played cricket.",
        "We played cricket because it rained.",
      ],
      correct: 2,
      explanation:
        "A compound sentence has two independent clauses joined by a coordinating conjunction (FANBOYS): 'It rained, but we played cricket.' A complex sentence has one independent + one dependent clause.",
    },
    {
      id: "eng-70",
      question:
        "The use of a part to represent a whole (e.g., 'All hands on deck') is called:",
      options: ["Metonymy", "Synecdoche", "Euphemism", "Allusion"],
      correct: 1,
      explanation:
        "Synecdoche uses a part to represent a whole ('hands' for 'sailors') or a whole for a part. Metonymy substitutes a closely associated word ('The White House announced' for US government).",
    },
  ],

  History: [
    {
      id: "his-1",
      question: "In which year did India gain independence from British rule?",
      options: ["1945", "1947", "1950", "1857"],
      correct: 1,
      explanation:
        "India gained independence on August 15, 1947. India became a Republic on January 26, 1950 (Constitution adopted). 1857 was the First War of Independence.",
    },
    {
      id: "his-2",
      question: "Who was the first Prime Minister of independent India?",
      options: [
        "Mahatma Gandhi",
        "Sardar Patel",
        "Dr. B.R. Ambedkar",
        "Jawaharlal Nehru",
      ],
      correct: 3,
      explanation:
        "Jawaharlal Nehru became India's first Prime Minister on August 15, 1947. He served until his death in 1964.",
    },
    {
      id: "his-3",
      question:
        "The Great Wall of China was primarily built during which dynasty?",
      options: ["Han Dynasty", "Ming Dynasty", "Qin Dynasty", "Tang Dynasty"],
      correct: 2,
      explanation:
        "Although the wall was built by various dynasties, the Qin Dynasty (221–206 BCE) under Emperor Qin Shi Huang initiated the major construction connecting existing walls.",
    },
    {
      id: "his-4",
      question:
        "The Battle of Plassey (1757) was fought between the British East India Company and:",
      options: [
        "The Maratha Empire",
        "Nawab Siraj ud-Daulah of Bengal",
        "Tipu Sultan of Mysore",
        "Mughal Emperor Aurangzeb",
      ],
      correct: 1,
      explanation:
        "The Battle of Plassey (1757) was fought between the British East India Company under Robert Clive and Nawab Siraj ud-Daulah of Bengal. It marked the beginning of British dominance in India.",
    },
    {
      id: "his-5",
      question: "World War I began in:",
      options: ["1914", "1918", "1939", "1945"],
      correct: 0,
      explanation:
        "World War I began in July 1914, triggered by the assassination of Archduke Franz Ferdinand. It ended in November 1918. WW2 was 1939-1945.",
    },
    {
      id: "his-6",
      question: "Who founded the Indian National Congress in 1885?",
      options: [
        "Mahatma Gandhi",
        "Bal Gangadhar Tilak",
        "A.O. Hume",
        "Gopal Krishna Gokhale",
      ],
      correct: 2,
      explanation:
        "Allan Octavian (A.O.) Hume, a retired British civil servant, founded the Indian National Congress in 1885. The first session was held in Bombay.",
    },
    {
      id: "his-7",
      question: "The Taj Mahal was built by Mughal emperor:",
      options: ["Akbar", "Babur", "Aurangzeb", "Shah Jahan"],
      correct: 3,
      explanation:
        "The Taj Mahal was built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, who died in 1631. Construction was completed around 1648.",
    },
    {
      id: "his-8",
      question: "The French Revolution began in which year?",
      options: ["1776", "1789", "1799", "1815"],
      correct: 1,
      explanation:
        "The French Revolution began in 1789 with the storming of the Bastille on July 14. It led to the end of monarchy and established democratic ideals.",
    },
    {
      id: "his-9",
      question: "The Non-Cooperation Movement led by Gandhi began in:",
      options: ["1905", "1915", "1920", "1930"],
      correct: 2,
      explanation:
        "Gandhi launched the Non-Cooperation Movement in September 1920, calling on Indians to boycott British goods, courts, and educational institutions.",
    },
    {
      id: "his-10",
      question: "Which civilization built the ancient city of Mohenjo-daro?",
      options: [
        "Egyptian Civilization",
        "Mesopotamian Civilization",
        "Indus Valley Civilization",
        "Roman Civilization",
      ],
      correct: 2,
      explanation:
        "Mohenjo-daro was a major city of the Indus Valley Civilization (also called Harappan Civilization), dating to around 2500 BCE, located in present-day Pakistan.",
    },
    {
      id: "his-11",
      question: "The Renaissance originated in which country?",
      options: ["France", "England", "Italy", "Germany"],
      correct: 2,
      explanation:
        "The Renaissance (14th–17th century) originated in Italy, particularly in Florence and Venice. It was a cultural movement that revived classical Greek and Roman learning.",
    },
    {
      id: "his-12",
      question: "Who was the first President of the United States?",
      options: [
        "Abraham Lincoln",
        "Thomas Jefferson",
        "George Washington",
        "Benjamin Franklin",
      ],
      correct: 2,
      explanation:
        "George Washington was the first President of the United States (1789–1797). He is often called the 'Father of the Nation'.",
    },
    {
      id: "his-13",
      question:
        "The Dandi March (Salt March) was conducted by Mahatma Gandhi in:",
      options: ["1920", "1925", "1930", "1942"],
      correct: 2,
      explanation:
        "Gandhi's Dandi March took place in March–April 1930 — a 386-km march to the Arabian Sea coast to protest against the British salt tax. It triggered the Civil Disobedience Movement.",
    },
    {
      id: "his-14",
      question:
        "Which country was known as 'the sick man of Europe' in the 19th century?",
      options: ["Austria-Hungary", "Ottoman Empire", "Russia", "Spain"],
      correct: 1,
      explanation:
        "The Ottoman Empire was called 'the sick man of Europe' due to its political and military decline in the 19th century, leading to its eventual dissolution after WWI.",
    },
    {
      id: "his-15",
      question: "The United Nations was founded in:",
      options: ["1918", "1939", "1945", "1950"],
      correct: 2,
      explanation:
        "The United Nations was founded on October 24, 1945, after World War II, to promote international peace and cooperation. The UN Charter was signed in San Francisco.",
    },
    {
      id: "his-16",
      question: "Who was known as the 'Iron Man of India'?",
      options: [
        "Jawaharlal Nehru",
        "Subhas Chandra Bose",
        "Sardar Vallabhbhai Patel",
        "Lal Bahadur Shastri",
      ],
      correct: 2,
      explanation:
        "Sardar Vallabhbhai Patel was called the 'Iron Man of India' for his role in integrating 562 princely states into the Indian Union after independence.",
    },
    {
      id: "his-17",
      question: "The Berlin Wall fell in:",
      options: ["1985", "1987", "1989", "1991"],
      correct: 2,
      explanation:
        "The Berlin Wall fell on November 9, 1989. It had divided East and West Berlin since 1961. Its fall symbolized the end of the Cold War and led to German reunification in 1990.",
    },
    {
      id: "his-18",
      question: "Which empire was ruled by Ashoka the Great?",
      options: [
        "Gupta Empire",
        "Maurya Empire",
        "Mughal Empire",
        "Chola Empire",
      ],
      correct: 1,
      explanation:
        "Ashoka (273–232 BCE) ruled the Maurya Empire — one of the largest empires in Indian history. After the Kalinga War, he embraced Buddhism and promoted Dhamma.",
    },
    {
      id: "his-19",
      question: "The American Declaration of Independence was signed in:",
      options: ["1765", "1776", "1787", "1800"],
      correct: 1,
      explanation:
        "The American Declaration of Independence was signed on July 4, 1776. This date is celebrated as Independence Day in the United States.",
    },
    {
      id: "his-20",
      question:
        "The partition of Bengal (1905) was announced by which British Viceroy?",
      options: [
        "Lord Dalhousie",
        "Lord Curzon",
        "Lord Mountbatten",
        "Lord Wavell",
      ],
      correct: 1,
      explanation:
        "Lord Curzon announced the partition of Bengal on July 19, 1905. It was widely opposed and sparked the Swadeshi Movement. The partition was annulled in 1911.",
    },
    {
      id: "his-21",
      question: "Who gave the famous 'I Have a Dream' speech?",
      options: [
        "Malcolm X",
        "Nelson Mandela",
        "Martin Luther King Jr.",
        "Barack Obama",
      ],
      correct: 2,
      explanation:
        "Martin Luther King Jr. delivered his famous 'I Have a Dream' speech on August 28, 1963, during the March on Washington for Jobs and Freedom.",
    },
    {
      id: "his-22",
      question: "The Quit India Movement was launched in:",
      options: ["1940", "1942", "1945", "1946"],
      correct: 1,
      explanation:
        "Gandhi launched the Quit India Movement on August 8-9, 1942, demanding immediate British withdrawal from India. The slogan 'Do or Die' was given.",
    },
    {
      id: "his-23",
      question: "Which treaty ended World War I?",
      options: [
        "Treaty of Paris",
        "Treaty of Versailles",
        "Treaty of Berlin",
        "Treaty of London",
      ],
      correct: 1,
      explanation:
        "The Treaty of Versailles (June 28, 1919) officially ended WWI. It imposed heavy reparations and territorial losses on Germany, contributing to the rise of Hitler and WWII.",
    },
    {
      id: "his-24",
      question: "The Harappan civilization was discovered in which decade?",
      options: ["1900s", "1920s", "1940s", "1960s"],
      correct: 1,
      explanation:
        "The Indus Valley (Harappan) Civilization was discovered in the 1920s. Harappa was excavated in 1921 by Daya Ram Sahni, Mohenjo-daro in 1922 by R.D. Banerji.",
    },
    {
      id: "his-25",
      question: "Who was the last Mughal Emperor of India?",
      options: ["Akbar", "Aurangzeb", "Bahadur Shah Zafar", "Muhammad Shah"],
      correct: 2,
      explanation:
        "Bahadur Shah Zafar II (1837–1857) was the last Mughal Emperor. After the Revolt of 1857, the British exiled him to Rangoon (Burma), where he died in 1862.",
    },
    {
      id: "his-26",
      question: "The Magna Carta was signed in:",
      options: ["1066", "1215", "1455", "1688"],
      correct: 1,
      explanation:
        "The Magna Carta (Great Charter) was signed by King John of England on June 15, 1215. It limited royal power and is considered a foundation of constitutional governance.",
    },
    {
      id: "his-27",
      question: "Which country was the first to grant women the right to vote?",
      options: ["USA", "UK", "New Zealand", "France"],
      correct: 2,
      explanation:
        "New Zealand was the first country to grant women the right to vote in 1893. USA followed in 1920 (19th Amendment), UK in 1928 (equal voting rights), France in 1944.",
    },
    {
      id: "his-28",
      question: "The industrial revolution began in which country?",
      options: ["France", "Germany", "United States", "Great Britain"],
      correct: 3,
      explanation:
        "The Industrial Revolution began in Great Britain in the mid-18th century (around 1760s), with inventions like the steam engine (James Watt) transforming manufacturing.",
    },
    {
      id: "his-29",
      question: "Who wrote 'The Communist Manifesto'?",
      options: [
        "Vladimir Lenin",
        "Joseph Stalin",
        "Karl Marx and Friedrich Engels",
        "Leon Trotsky",
      ],
      correct: 2,
      explanation:
        "Karl Marx and Friedrich Engels wrote 'The Communist Manifesto' in 1848. It described class struggle and called for workers to unite against capitalist exploitation.",
    },
    {
      id: "his-30",
      question: "The Rowlatt Act (1919) gave the British government powers to:",
      options: [
        "Grant self-rule to India",
        "Imprison suspects without trial",
        "Partition Punjab",
        "Increase Indian representation in councils",
      ],
      correct: 1,
      explanation:
        "The Rowlatt Act (Black Act) of 1919 allowed the government to imprison political suspects without trial. It was widely opposed, leading to the Rowlatt Satyagraha by Gandhi and the Jallianwala Bagh Massacre.",
    },
    {
      id: "his-31",
      question: "The Indian National Army (INA) was led by:",
      options: [
        "Bhagat Singh",
        "Subhas Chandra Bose",
        "Bal Gangadhar Tilak",
        "Lala Lajpat Rai",
      ],
      correct: 1,
      explanation:
        "Subhas Chandra Bose (Netaji) formed and led the Indian National Army (INA/Azad Hind Fauj) in 1943 to fight British rule with Japanese support. His slogan: 'Give me blood, I will give you freedom.'",
    },
    {
      id: "his-32",
      question: "The Swadeshi Movement (1905) was a response to:",
      options: [
        "The Salt Tax",
        "The Partition of Bengal",
        "The Rowlatt Act",
        "The Jallianwala Bagh Massacre",
      ],
      correct: 1,
      explanation:
        "The Swadeshi Movement began in 1905 as a protest against Lord Curzon's Partition of Bengal. It encouraged use of Indian-made goods and boycott of British goods.",
    },
    {
      id: "his-33",
      question: "The Jallianwala Bagh Massacre (1919) was carried out by:",
      options: [
        "Lord Dalhousie",
        "Lord Curzon",
        "General Dyer",
        "Lord Mountbatten",
      ],
      correct: 2,
      explanation:
        "On April 13, 1919, General Reginald Dyer ordered troops to fire on a peaceful gathering at Jallianwala Bagh, Amritsar, killing hundreds. It shocked India and the world.",
    },
    {
      id: "his-34",
      question: "The Indus Valley Civilization is also known as the:",
      options: [
        "Vedic Civilization",
        "Dravidian Civilization",
        "Harappan Civilization",
        "Aryan Civilization",
      ],
      correct: 2,
      explanation:
        "The Indus Valley Civilization is also called the Harappan Civilization, named after Harappa — one of its major sites. It flourished around 3000–1500 BCE in the Indus River valley.",
    },
    {
      id: "his-35",
      question:
        "The Great Bath, a remarkable structure of the Indus Valley Civilization, was found at:",
      options: ["Harappa", "Mohenjo-daro", "Lothal", "Dholavira"],
      correct: 1,
      explanation:
        "The Great Bath was discovered at Mohenjo-daro. It is considered one of the earliest public water tanks in the ancient world, suggesting sophisticated urban planning.",
    },
    {
      id: "his-36",
      question: "Ancient Egypt's pharaohs were buried in:",
      options: [
        "Underground tunnels",
        "Ziggurats",
        "Pyramids",
        "Stone temples",
      ],
      correct: 2,
      explanation:
        "Egyptian pharaohs were buried in elaborate pyramids (or later in the Valley of the Kings). The Great Pyramid of Giza, built for Pharaoh Khufu, is one of the Seven Wonders of the Ancient World.",
    },
    {
      id: "his-37",
      question: "The writing system of ancient Egypt is called:",
      options: ["Cuneiform", "Sanskrit", "Hieroglyphics", "Linear A"],
      correct: 2,
      explanation:
        "Ancient Egyptians used hieroglyphics — a writing system combining pictographic and phonetic elements. The Rosetta Stone (1799) was key to deciphering hieroglyphics.",
    },
    {
      id: "his-38",
      question:
        "The ancient Greek philosopher who was a teacher of Alexander the Great was:",
      options: ["Socrates", "Plato", "Aristotle", "Pythagoras"],
      correct: 2,
      explanation:
        "Aristotle was the tutor of Alexander the Great. The lineage: Socrates taught Plato, Plato taught Aristotle, Aristotle taught Alexander the Great.",
    },
    {
      id: "his-39",
      question: "World War II began when Germany invaded:",
      options: ["France", "Poland", "Soviet Union", "United Kingdom"],
      correct: 1,
      explanation:
        "WWII began on September 1, 1939, when Germany under Hitler invaded Poland. This prompted Britain and France to declare war on Germany on September 3, 1939.",
    },
    {
      id: "his-40",
      question:
        "The atomic bombs in World War II were dropped on which Japanese cities?",
      options: [
        "Tokyo and Osaka",
        "Hiroshima and Nagasaki",
        "Kyoto and Yokohama",
        "Nagoya and Kobe",
      ],
      correct: 1,
      explanation:
        "The USA dropped atomic bombs on Hiroshima (August 6, 1945) and Nagasaki (August 9, 1945). Japan surrendered on August 15, 1945, ending WWII in the Pacific.",
    },
    {
      id: "his-41",
      question:
        "The policy of Apartheid in South Africa was officially ended when:",
      options: [
        "Nelson Mandela was imprisoned in 1964",
        "Nelson Mandela became President in 1994",
        "The ANC was formed in 1912",
        "South Africa became a republic in 1961",
      ],
      correct: 1,
      explanation:
        "Apartheid (racial segregation) officially ended when Nelson Mandela was elected South Africa's first Black President in May 1994. He had been imprisoned for 27 years (1964–1990).",
    },
    {
      id: "his-42",
      question: "The founder of the Mughal Empire in India was:",
      options: ["Akbar", "Humayun", "Babur", "Shah Jahan"],
      correct: 2,
      explanation:
        "Babur founded the Mughal Empire in 1526 after defeating Ibrahim Lodi in the First Battle of Panipat. He was a descendant of Timur (Tamerlane) and Genghis Khan.",
    },
    {
      id: "his-43",
      question: "Akbar's policy of religious tolerance was called:",
      options: [
        "Sulh-i-Kul (Universal Peace)",
        "Din-i-Ilahi",
        "Dhamma",
        "Panchasheela",
      ],
      correct: 0,
      explanation:
        "Akbar's principle of Sulh-i-Kul (Universal Peace/Tolerance) treated all religions equally. He also founded Din-i-Ilahi, a syncretic religious movement blending elements of multiple faiths.",
    },
    {
      id: "his-44",
      question: "The British East India Company was established in:",
      options: ["1498", "1600", "1757", "1858"],
      correct: 1,
      explanation:
        "The British East India Company was founded in 1600 by Queen Elizabeth I's royal charter. It initially traded in spices but gradually gained political and military control over India.",
    },
    {
      id: "his-45",
      question: "The first Governor-General of Independent India was:",
      options: [
        "Jawaharlal Nehru",
        "Dr. Rajendra Prasad",
        "C. Rajagopalachari",
        "Lord Mountbatten",
      ],
      correct: 3,
      explanation:
        "Lord Mountbatten was the last Viceroy of British India and the first Governor-General of Independent India (August 1947 – June 1948). C. Rajagopalachari succeeded him.",
    },
    {
      id: "his-46",
      question:
        "The Khilafat Movement (1919-1924) in India was led to support the:",
      options: [
        "Ottoman Caliph",
        "Indian Independence",
        "British Rule",
        "Hindu-Muslim Unity (alone)",
      ],
      correct: 0,
      explanation:
        "The Khilafat Movement was launched by Indian Muslims (led by Ali brothers) to protect the Ottoman Caliph's position after WWI. Gandhi supported it to build Hindu-Muslim unity.",
    },
    {
      id: "his-47",
      question: "The French Revolution's motto was:",
      options: [
        "Unity, Equality, Progress",
        "Liberty, Equality, Fraternity",
        "Freedom, Justice, Prosperity",
        "Independence, Democracy, Rights",
      ],
      correct: 1,
      explanation:
        "The French Revolution's motto was 'Liberté, Égalité, Fraternité' (Liberty, Equality, Fraternity). This became the national motto of France and influenced democratic movements worldwide.",
    },
    {
      id: "his-48",
      question:
        "Napoleon Bonaparte was exiled to St. Helena after his defeat at:",
      options: [
        "Battle of Austerlitz",
        "Battle of Trafalgar",
        "Battle of Waterloo",
        "Battle of Leipzig",
      ],
      correct: 2,
      explanation:
        "Napoleon was defeated at the Battle of Waterloo (1815) by the Duke of Wellington and the Prussians. He was exiled to the island of St. Helena, where he died in 1821.",
    },
    {
      id: "his-49",
      question:
        "The spinning jenny, a key invention of the Industrial Revolution, was invented by:",
      options: [
        "James Watt",
        "James Hargreaves",
        "Richard Arkwright",
        "George Stephenson",
      ],
      correct: 1,
      explanation:
        "James Hargreaves invented the spinning jenny (~1764), which could spin multiple threads simultaneously, revolutionizing textile manufacturing. James Watt improved the steam engine.",
    },
    {
      id: "his-50",
      question:
        "The concept of 'Drain of Wealth' from India to Britain was given by:",
      options: [
        "Bal Gangadhar Tilak",
        "Dadabhai Naoroji",
        "Gopal Krishna Gokhale",
        "Mahatma Gandhi",
      ],
      correct: 1,
      explanation:
        "Dadabhai Naoroji (the 'Grand Old Man of India') introduced the 'Drain of Wealth' theory in his book 'Poverty and Un-British Rule in India,' explaining how Britain was economically exploiting India.",
    },
    {
      id: "his-51",
      question:
        "The Champaran Satyagraha (1917) was Gandhi's first civil disobedience movement in India against:",
      options: [
        "Salt tax",
        "Indigo planters forcing farmers to grow indigo",
        "Partition of Bengal",
        "The Rowlatt Act",
      ],
      correct: 1,
      explanation:
        "Gandhi's Champaran Satyagraha (1917) in Bihar was against British indigo planters (tinkathia system) who forced farmers to grow indigo on 3/20th of their land. It was Gandhi's first major success in India.",
    },
    {
      id: "his-52",
      question:
        "The first civilization in Mesopotamia (present-day Iraq) was the:",
      options: [
        "Egyptian civilization",
        "Sumerian civilization",
        "Persian civilization",
        "Greek civilization",
      ],
      correct: 1,
      explanation:
        "The Sumerian civilization (c. 4500–1900 BCE) in southern Mesopotamia is considered one of the first civilizations. They invented writing (cuneiform), the wheel, and city-states.",
    },
    {
      id: "his-53",
      question: "The Cold War was primarily a conflict between:",
      options: [
        "USA and UK",
        "USA and China",
        "USA and USSR",
        "NATO and China",
      ],
      correct: 2,
      explanation:
        "The Cold War (1947–1991) was the geopolitical tension between the USA (capitalism/democracy) and USSR (communism) and their respective alliances, without direct military conflict between them.",
    },
    {
      id: "his-54",
      question: "Who was the last British Viceroy of India?",
      options: [
        "Lord Curzon",
        "Lord Dalhousie",
        "Lord Mountbatten",
        "Lord Wavell",
      ],
      correct: 2,
      explanation:
        "Lord Louis Mountbatten was the last Viceroy of British India. He oversaw the partition and transfer of power in August 1947, dividing British India into India and Pakistan.",
    },
    {
      id: "his-55",
      question: "The Battle of Panipat (1526) was fought between Babur and:",
      options: ["Prithviraj Chauhan", "Ibrahim Lodi", "Rana Sanga", "Hemu"],
      correct: 1,
      explanation:
        "The First Battle of Panipat (1526) was fought between Babur (Mughal) and Ibrahim Lodi (last Delhi Sultanate ruler). Babur's superior artillery won, establishing the Mughal Empire.",
    },
    {
      id: "his-56",
      question:
        "The Bretton Woods Conference (1944) established which international institutions?",
      options: [
        "United Nations and UNESCO",
        "IMF and World Bank",
        "NATO and Warsaw Pact",
        "WTO and GATT",
      ],
      correct: 1,
      explanation:
        "The Bretton Woods Conference (1944) established the International Monetary Fund (IMF) and the World Bank (IBRD) to regulate the international monetary system and aid post-war reconstruction.",
    },
    {
      id: "his-57",
      question: "The Chauri Chaura incident (1922) led Gandhi to:",
      options: [
        "Launch the Civil Disobedience Movement",
        "Withdraw the Non-Cooperation Movement",
        "Start the Quit India Movement",
        "Sign the Gandhi-Irwin Pact",
      ],
      correct: 1,
      explanation:
        "In February 1922, protesters in Chauri Chaura burned a police station, killing 22 policemen. Gandhi immediately called off the Non-Cooperation Movement, believing Indians were not ready for nonviolent resistance.",
    },
    {
      id: "his-58",
      question:
        "The policy of 'Doctrine of Lapse' was introduced by which British Governor-General?",
      options: [
        "Lord Cornwallis",
        "Lord Wellesley",
        "Lord Dalhousie",
        "Lord Hastings",
      ],
      correct: 2,
      explanation:
        "Lord Dalhousie introduced the Doctrine of Lapse (1848–1856): if a ruler had no natural male heir, the state would be 'lapsed' (annexed) to the British. It caused widespread resentment, contributing to the 1857 revolt.",
    },
    {
      id: "his-59",
      question:
        "The theory of 'Social Contract' in political philosophy was famously developed by:",
      options: [
        "Karl Marx and Friedrich Engels",
        "Hobbes, Locke, and Rousseau",
        "Voltaire and Montesquieu",
        "Adam Smith and David Hume",
      ],
      correct: 1,
      explanation:
        "The Social Contract theory was developed by Thomas Hobbes ('Leviathan'), John Locke ('Two Treatises of Government'), and Jean-Jacques Rousseau ('The Social Contract'). It forms the basis of modern democracy.",
    },
    {
      id: "his-60",
      question:
        "The Round Table Conferences (1930-1932) were organized to discuss:",
      options: [
        "India's partition",
        "Constitutional reforms and future governance of India",
        "WWII strategy",
        "Economic reforms in Britain",
      ],
      correct: 1,
      explanation:
        "Three Round Table Conferences (London, 1930-32) discussed constitutional reforms and India's future governance. Gandhi attended only the Second Conference (1931) as Congress representative.",
    },
    {
      id: "his-61",
      question:
        "The ancient Olympic Games were held in honor of the Greek god:",
      options: ["Apollo", "Poseidon", "Zeus", "Ares"],
      correct: 2,
      explanation:
        "The ancient Olympic Games were held at Olympia in honor of Zeus, king of the Greek gods. They began in 776 BCE and were held every four years. Modern Olympics were revived in 1896.",
    },
    {
      id: "his-62",
      question: "The Silk Road was an ancient trade route connecting:",
      options: [
        "India and Africa",
        "China and Mediterranean/Europe",
        "Arabia and India",
        "Egypt and Mesopotamia",
      ],
      correct: 1,
      explanation:
        "The Silk Road was an ancient network of trade routes connecting China to Central Asia, the Middle East, and the Mediterranean/Europe, facilitating trade in silk, spices, gold, and ideas.",
    },
    {
      id: "his-63",
      question:
        "The Sepoy Mutiny (First War of Independence) of 1857 began at:",
      options: ["Delhi", "Lucknow", "Meerut", "Kanpur"],
      correct: 2,
      explanation:
        "The revolt of 1857 began at Meerut on May 10, 1857, when Indian sepoys refused to use greased cartridges (rumored to contain cow/pig fat). It then spread to Delhi, Lucknow, Kanpur, and elsewhere.",
    },
    {
      id: "his-64",
      question: "The Indian Constitution came into effect on:",
      options: [
        "August 15, 1947",
        "January 26, 1950",
        "November 26, 1949",
        "July 4, 1947",
      ],
      correct: 1,
      explanation:
        "The Indian Constitution came into force on January 26, 1950 (Republic Day). It was adopted by the Constituent Assembly on November 26, 1949 (Constitution Day/Law Day).",
    },
    {
      id: "his-65",
      question: "The storming of the Bastille (1789) symbolized the:",
      options: [
        "Start of the American Revolution",
        "Start of the French Revolution",
        "Fall of Napoleon",
        "End of feudalism in France",
      ],
      correct: 1,
      explanation:
        "The storming of the Bastille prison on July 14, 1789 symbolized the beginning of the French Revolution. Bastille Day is now France's national holiday. The Bastille was a symbol of royal tyranny.",
    },
    {
      id: "his-66",
      question:
        "Who was referred to as the 'Father of the Indian Constitution'?",
      options: [
        "Jawaharlal Nehru",
        "Mahatma Gandhi",
        "Dr. B.R. Ambedkar",
        "Rajendra Prasad",
      ],
      correct: 2,
      explanation:
        "Dr. B.R. Ambedkar chaired the Drafting Committee of the Indian Constitution and is called the 'Father of the Indian Constitution.' He also led the movement for Dalit rights.",
    },
    {
      id: "his-67",
      question:
        "The Non-Aligned Movement was founded by leaders including India's:",
      options: [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Indira Gandhi",
        "Lal Bahadur Shastri",
      ],
      correct: 1,
      explanation:
        "The Non-Aligned Movement (1961) was co-founded by Jawaharlal Nehru (India), Gamal Nasser (Egypt), and Josip Broz Tito (Yugoslavia) — nations that didn't align with either USA or USSR during the Cold War.",
    },
    {
      id: "his-68",
      question:
        "The Amritsar Treaty (1846) was signed after the First Anglo-Sikh War between the British and:",
      options: [
        "Ranjit Singh's successors/Sikh Kingdom",
        "Mysore Kingdom",
        "Maratha Empire",
        "Mughal Emperor",
      ],
      correct: 0,
      explanation:
        "The Treaty of Amritsar (March 1846) ended the First Anglo-Sikh War. The Sikh Kingdom ceded Kashmir and Jalandhar Doab to the British. Kashmir was then sold to Gulab Singh.",
    },
    {
      id: "his-69",
      question: "The Renaissance man Leonardo da Vinci was known as:",
      options: [
        "A statesman and military general",
        "An artist, scientist, and inventor",
        "A religious reformer",
        "A mathematician and astronomer only",
      ],
      correct: 1,
      explanation:
        "Leonardo da Vinci (1452–1519) was the quintessential Renaissance man — painter ('Mona Lisa', 'The Last Supper'), sculptor, architect, scientist, engineer, and inventor. His notebooks contain anatomical drawings and inventions centuries ahead of their time.",
    },
    {
      id: "his-70",
      question: "The Bandung Conference (1955) was important because it:",
      options: [
        "Ended WWII in Asia",
        "Established the UN",
        "Brought together Asian and African nations against colonialism",
        "Created the NATO alliance",
      ],
      correct: 2,
      explanation:
        "The Bandung Conference (Indonesia, 1955) brought together 29 Asian and African nations to oppose colonialism and imperialism. It led to the formation of the Non-Aligned Movement.",
    },
  ],

  "Computer Science": [
    {
      id: "cs-1",
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
      correct: 2,
      explanation:
        "Binary search has O(log n) time complexity because it halves the search space with each comparison. Very efficient for sorted arrays!",
    },
    {
      id: "cs-2",
      question:
        "In OOP, which concept means 'bundling data and methods together'?",
      options: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
      correct: 3,
      explanation:
        "Encapsulation bundles data (attributes) and methods that operate on that data into a single unit (class), and often restricts direct access to some components.",
    },
    {
      id: "cs-3",
      question:
        "Which data structure follows LIFO (Last In, First Out) principle?",
      options: ["Queue", "Array", "Stack", "Linked List"],
      correct: 2,
      explanation:
        "Stack follows LIFO — the last element pushed is the first to be popped. Like a stack of plates! Queue follows FIFO (First In, First Out).",
    },
    {
      id: "cs-4",
      question: "What does the acronym 'CPU' stand for?",
      options: [
        "Central Programming Unit",
        "Computer Processing Utility",
        "Central Processing Unit",
        "Core Processing Unit",
      ],
      correct: 2,
      explanation:
        "CPU stands for Central Processing Unit — the primary component that executes instructions, performs calculations, and manages data flow in a computer.",
    },
    {
      id: "cs-5",
      question:
        "In a for loop: for(int i=0; i<5; i++), how many times does the loop execute?",
      options: ["4 times", "5 times", "6 times", "Infinite times"],
      correct: 1,
      explanation:
        "i starts at 0 and runs while i < 5 (i = 0,1,2,3,4), so the loop executes 5 times. The loop stops when i reaches 5.",
    },
    {
      id: "cs-6",
      question:
        "Which sorting algorithm has an average time complexity of O(n log n)?",
      options: [
        "Bubble Sort",
        "Selection Sort",
        "Insertion Sort",
        "Merge Sort",
      ],
      correct: 3,
      explanation:
        "Merge Sort has O(n log n) average and worst case. Bubble, Selection, and Insertion sort all have O(n²) average case.",
    },
    {
      id: "cs-7",
      question: "In Python, what does the 'len()' function return?",
      options: [
        "The last element of a list",
        "The number of elements in an object",
        "The largest element",
        "The memory size of a variable",
      ],
      correct: 1,
      explanation:
        "len() returns the number of items in an object. For strings, it returns character count; for lists, the number of elements.",
    },
    {
      id: "cs-8",
      question: "What is the output of: 5 // 2 in Python?",
      options: ["2.5", "2", "3", "Error"],
      correct: 1,
      explanation:
        "// is the integer division (floor division) operator in Python. 5 // 2 = 2 (the quotient without remainder). 5 / 2 = 2.5 (regular division).",
    },
    {
      id: "cs-9",
      question:
        "Which HTTP method is typically used to retrieve data from a server?",
      options: ["POST", "PUT", "DELETE", "GET"],
      correct: 3,
      explanation:
        "GET is used to retrieve/request data from a server. POST sends data. PUT updates data. DELETE removes data. This is REST API convention.",
    },
    {
      id: "cs-10",
      question: "Which of the following is NOT a programming paradigm?",
      options: [
        "Object-Oriented Programming",
        "Functional Programming",
        "Procedural Programming",
        "Sequential Programming",
      ],
      correct: 3,
      explanation:
        "OOP, Functional, and Procedural are established programming paradigms. 'Sequential Programming' is not a recognized paradigm — it describes execution order, not a style of program organization.",
    },
    {
      id: "cs-11",
      question: "What does 'RAM' stand for?",
      options: [
        "Read Access Memory",
        "Random Access Memory",
        "Rapid Accessible Memory",
        "Read-only Addressable Memory",
      ],
      correct: 1,
      explanation:
        "RAM stands for Random Access Memory — volatile memory that stores data currently being used by the CPU. It's fast but loses data when power is off.",
    },
    {
      id: "cs-12",
      question: "In binary (base 2), what is the decimal equivalent of 1010?",
      options: ["8", "10", "12", "14"],
      correct: 1,
      explanation:
        "1010 in binary = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10 in decimal.",
    },
    {
      id: "cs-13",
      question:
        "Which data structure is best for implementing a priority queue?",
      options: ["Array", "Stack", "Heap", "Linked List"],
      correct: 2,
      explanation:
        "A heap (binary heap) is the best data structure for implementing a priority queue. Min-heap: minimum element at root; Max-heap: maximum at root. O(log n) for insert/delete.",
    },
    {
      id: "cs-14",
      question: "What is the purpose of a primary key in a database?",
      options: [
        "To store the most important data",
        "To uniquely identify each record in a table",
        "To link two tables together",
        "To encrypt the database",
      ],
      correct: 1,
      explanation:
        "A primary key uniquely identifies each record in a database table. It must be unique and cannot be NULL. Example: Student ID, Employee ID.",
    },
    {
      id: "cs-15",
      question: "In HTML, which tag is used to create a hyperlink?",
      options: ["<link>", "<href>", "<a>", "<url>"],
      correct: 2,
      explanation:
        "The <a> (anchor) tag creates hyperlinks in HTML. Example: <a href='https://example.com'>Click here</a>. The href attribute specifies the URL.",
    },
    {
      id: "cs-16",
      question:
        "The process of converting source code to machine code is called:",
      options: ["Interpretation", "Compilation", "Debugging", "Linking"],
      correct: 1,
      explanation:
        "Compilation translates the entire source code into machine code before execution (C, C++). Interpretation executes code line by line (Python, JavaScript).",
    },
    {
      id: "cs-17",
      question: "Which of the following is an example of an operating system?",
      options: [
        "Microsoft Word",
        "Google Chrome",
        "Ubuntu Linux",
        "Adobe Photoshop",
      ],
      correct: 2,
      explanation:
        "Ubuntu Linux is an operating system — software that manages hardware and provides services for programs. Others are application software.",
    },
    {
      id: "cs-18",
      question:
        "In a graph with V vertices, the maximum number of edges in a simple graph is:",
      options: ["V", "V-1", "V(V-1)/2", "V²"],
      correct: 2,
      explanation:
        "Maximum edges in a simple undirected graph (no self-loops, no parallel edges) = V(V-1)/2. This is achieved in a complete graph (Kₙ).",
    },
    {
      id: "cs-19",
      question: "Which protocol is used to send emails?",
      options: ["HTTP", "FTP", "SMTP", "POP3"],
      correct: 2,
      explanation:
        "SMTP (Simple Mail Transfer Protocol) is used to send emails. POP3/IMAP are used to receive emails. HTTP is for web pages, FTP for file transfer.",
    },
    {
      id: "cs-20",
      question: "What does 'SQL' stand for?",
      options: [
        "Simple Query Language",
        "Structured Query Language",
        "Sequential Query Logic",
        "Standard Query List",
      ],
      correct: 1,
      explanation:
        "SQL stands for Structured Query Language — a standard language for managing and manipulating relational databases (SELECT, INSERT, UPDATE, DELETE).",
    },
    {
      id: "cs-21",
      question: "In OOP, a 'class' is best described as:",
      options: [
        "An instance of an object",
        "A function that processes data",
        "A blueprint/template for creating objects",
        "A collection of data only",
      ],
      correct: 2,
      explanation:
        "A class is a blueprint or template that defines attributes (data) and methods (functions) for objects. An object is an instance of a class.",
    },
    {
      id: "cs-22",
      question: "What does the 'git commit' command do?",
      options: [
        "Sends code to a remote repository",
        "Saves a snapshot of changes to the local repository",
        "Downloads the latest code",
        "Creates a new branch",
      ],
      correct: 1,
      explanation:
        "git commit saves a snapshot of staged changes to the local repository with a message. 'git push' sends it to remote. 'git pull' downloads changes.",
    },
    {
      id: "cs-23",
      question: "Which searching algorithm works only on sorted arrays?",
      options: [
        "Linear Search",
        "Binary Search",
        "Depth First Search",
        "Breadth First Search",
      ],
      correct: 1,
      explanation:
        "Binary Search requires the array to be sorted. It works by comparing the middle element and eliminating half the search space each time. O(log n) efficiency.",
    },
    {
      id: "cs-24",
      question: "What is a 'deadlock' in operating systems?",
      options: [
        "When a program runs too fast",
        "When memory is full",
        "When two processes wait for each other's resources indefinitely",
        "When a process is forcefully terminated",
      ],
      correct: 2,
      explanation:
        "A deadlock occurs when two or more processes are blocked forever, each waiting for resources held by the other. It requires four conditions: mutual exclusion, hold-and-wait, no preemption, circular wait.",
    },
    {
      id: "cs-25",
      question: "The CSS property used to change text color is:",
      options: ["text-color", "font-color", "color", "foreground"],
      correct: 2,
      explanation:
        "The CSS property 'color' sets the text color. Example: color: red; or color: #FF0000; 'background-color' sets the background color.",
    },
    {
      id: "cs-26",
      question: "Which of the following is a non-volatile storage device?",
      options: ["RAM", "Cache", "CPU registers", "Hard Disk Drive (HDD)"],
      correct: 3,
      explanation:
        "Hard Disk Drive (HDD) is non-volatile — it retains data even when power is off. RAM, cache, and CPU registers are volatile (lose data when power is off).",
    },
    {
      id: "cs-27",
      question: "What is recursion in programming?",
      options: [
        "A loop that runs forever",
        "A function that calls itself",
        "A variable that changes constantly",
        "A type of data structure",
      ],
      correct: 1,
      explanation:
        "Recursion is when a function calls itself to solve a smaller sub-problem. It needs a base case to stop. Examples: factorial, Fibonacci, tree traversal.",
    },
    {
      id: "cs-28",
      question: "In networking, what does 'IP' stand for?",
      options: [
        "Internet Protocol",
        "Internet Provider",
        "Internal Port",
        "Integrated Processor",
      ],
      correct: 0,
      explanation:
        "IP stands for Internet Protocol. An IP address is a unique numerical label assigned to each device on a network for identification and communication.",
    },
    {
      id: "cs-29",
      question: "Which of the following is a compiled language?",
      options: ["Python", "JavaScript", "Ruby", "C++"],
      correct: 3,
      explanation:
        "C++ is a compiled language — source code is fully compiled to machine code before execution. Python, JavaScript, and Ruby are interpreted (run line by line).",
    },
    {
      id: "cs-30",
      question:
        "What is the purpose of the 'else' clause in a try-except block in Python?",
      options: [
        "Runs when an exception occurs",
        "Runs when no exception occurs",
        "Always runs regardless",
        "Catches all exceptions",
      ],
      correct: 1,
      explanation:
        "In Python's try-except: 'else' block runs only when NO exception occurs. 'finally' always runs. 'except' runs when exception occurs.",
    },
    {
      id: "cs-31",
      question:
        "A binary tree where each node has at most two children and the left child is less than the parent, right child greater, is called a:",
      options: [
        "Binary heap",
        "Binary Search Tree (BST)",
        "AVL Tree",
        "B-Tree",
      ],
      correct: 1,
      explanation:
        "A Binary Search Tree (BST) maintains the property: left subtree values < node value < right subtree values. This enables O(log n) search in balanced BSTs.",
    },
    {
      id: "cs-32",
      question: "The height of a complete binary tree with n nodes is:",
      options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
      correct: 2,
      explanation:
        "A complete binary tree with n nodes has height O(log n). This is because each level doubles the number of nodes: 2⁰ + 2¹ + ... + 2ʰ = n, giving h ≈ log₂n.",
    },
    {
      id: "cs-33",
      question: "In a graph, a node's 'degree' refers to:",
      options: [
        "Its value/weight",
        "The number of edges connected to it",
        "Its distance from the root",
        "The number of its children",
      ],
      correct: 1,
      explanation:
        "The degree of a vertex (node) in a graph is the number of edges incident to it. In directed graphs, we distinguish in-degree (edges coming in) and out-degree (edges going out).",
    },
    {
      id: "cs-34",
      question: "Dijkstra's algorithm is used to find:",
      options: [
        "Minimum spanning tree",
        "Shortest path from a source to all vertices",
        "Topological ordering",
        "Strongly connected components",
      ],
      correct: 1,
      explanation:
        "Dijkstra's algorithm finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative edges. Time complexity: O((V+E) log V) with a priority queue.",
    },
    {
      id: "cs-35",
      question: "A min-heap data structure ensures that:",
      options: [
        "The maximum element is always at the root",
        "The minimum element is always at the root",
        "All elements are sorted",
        "Left subtree is always smaller than right",
      ],
      correct: 1,
      explanation:
        "In a min-heap, the minimum element is always at the root (top). Every parent node is ≤ its children. Insertion and deletion both take O(log n). Used in priority queues and Dijkstra's algorithm.",
    },
    {
      id: "cs-36",
      question:
        "A hash table with a good hash function achieves average-case time complexity of __ for search:",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      correct: 2,
      explanation:
        "Hash tables achieve O(1) average-case for search, insertion, and deletion. A good hash function distributes keys uniformly, minimizing collisions. Worst case (many collisions): O(n).",
    },
    {
      id: "cs-37",
      question:
        "Which collision resolution technique in hash tables uses a linked list at each bucket?",
      options: [
        "Open addressing",
        "Linear probing",
        "Quadratic probing",
        "Chaining",
      ],
      correct: 3,
      explanation:
        "Chaining (separate chaining) handles collisions by storing a linked list at each hash bucket. All elements with the same hash key go into the same bucket's linked list.",
    },
    {
      id: "cs-38",
      question: "Quick Sort's average time complexity is:",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correct: 1,
      explanation:
        "Quick Sort has average-case O(n log n) but worst-case O(n²) (when pivot is always the smallest/largest element, e.g., already sorted array). Good pivot selection (random/median-of-3) avoids worst case.",
    },
    {
      id: "cs-39",
      question: "Heap Sort's time complexity is:",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correct: 1,
      explanation:
        "Heap Sort is O(n log n) in all cases (best, average, worst). It uses a binary heap. Space complexity is O(1) (in-place). Not cache-friendly compared to Quick Sort.",
    },
    {
      id: "cs-40",
      question: "In OOP, 'polymorphism' means:",
      options: [
        "A class can have only one method",
        "Objects of different types can be treated as instances of a common superclass",
        "All objects are the same type",
        "A class can only inherit from one parent",
      ],
      correct: 1,
      explanation:
        "Polymorphism: objects of different classes can be treated as objects of a common superclass, and the same method name can behave differently on different objects (method overriding).",
    },
    {
      id: "cs-41",
      question:
        "Which OOP concept allows a class to inherit properties and methods from another class?",
      options: ["Encapsulation", "Polymorphism", "Abstraction", "Inheritance"],
      correct: 3,
      explanation:
        "Inheritance allows a class (subclass/child) to acquire properties and methods from another class (superclass/parent). It promotes code reuse. Example: Dog extends Animal.",
    },
    {
      id: "cs-42",
      question: "In Java/C++, method overloading refers to:",
      options: [
        "A method calling itself recursively",
        "Same method name with different parameters in the same class",
        "A subclass redefining a parent's method",
        "A method with no return value",
      ],
      correct: 1,
      explanation:
        "Method overloading: multiple methods with the same name but different parameter lists (number or types) in the same class. Example: add(int,int) and add(double,double). Resolved at compile time.",
    },
    {
      id: "cs-43",
      question:
        "The SQL command to retrieve all columns from a table named 'Students' is:",
      options: [
        "GET * FROM Students",
        "SELECT * FROM Students",
        "FETCH ALL FROM Students",
        "SHOW * Students",
      ],
      correct: 1,
      explanation:
        "SQL SELECT statement: SELECT * FROM Students (where * means 'all columns'). You can also specify: SELECT name, age FROM Students to get specific columns.",
    },
    {
      id: "cs-44",
      question: "First Normal Form (1NF) in database normalization requires:",
      options: [
        "No partial dependencies",
        "No transitive dependencies",
        "Atomic values (no repeating groups)",
        "All columns depend on the whole primary key",
      ],
      correct: 2,
      explanation:
        "1NF requires each column to contain atomic (indivisible) values and each row to be unique. No repeating groups allowed. 2NF removes partial dependencies; 3NF removes transitive dependencies.",
    },
    {
      id: "cs-45",
      question: "A FOREIGN KEY in a relational database:",
      options: [
        "Uniquely identifies each row in a table",
        "References the primary key of another table",
        "Prevents NULL values in a column",
        "Creates an index for faster search",
      ],
      correct: 1,
      explanation:
        "A foreign key is a column (or set of columns) that references the primary key of another table, establishing a relationship between tables. Ensures referential integrity.",
    },
    {
      id: "cs-46",
      question: "The OSI model has how many layers?",
      options: ["4", "5", "7", "9"],
      correct: 2,
      explanation:
        "The OSI (Open Systems Interconnection) model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application. Remember: 'Please Do Not Throw Sausage Pizza Away'.",
    },
    {
      id: "cs-47",
      question:
        "Which layer of the OSI model handles IP addressing and routing?",
      options: [
        "Data Link Layer (Layer 2)",
        "Network Layer (Layer 3)",
        "Transport Layer (Layer 4)",
        "Physical Layer (Layer 1)",
      ],
      correct: 1,
      explanation:
        "The Network Layer (Layer 3) handles logical addressing (IP addresses), routing packets between networks, and path determination. Routers operate at this layer.",
    },
    {
      id: "cs-48",
      question:
        "TCP (Transmission Control Protocol) differs from UDP because TCP:",
      options: [
        "Is faster with no error checking",
        "Provides connection-oriented, reliable delivery with acknowledgments",
        "Is used only for streaming",
        "Operates at the Network layer",
      ],
      correct: 1,
      explanation:
        "TCP is connection-oriented (uses 3-way handshake), reliable (guarantees delivery via acknowledgments and retransmission), and ordered. UDP is connectionless, faster but unreliable — good for streaming/gaming.",
    },
    {
      id: "cs-49",
      question: "The IP address 192.168.1.1 is a:",
      options: [
        "Public IP address",
        "Private IP address",
        "Loopback address",
        "Multicast address",
      ],
      correct: 1,
      explanation:
        "192.168.x.x is a private IP address range (used in local networks). Private ranges: 10.x.x.x, 172.16-31.x.x, 192.168.x.x. Loopback is 127.0.0.1. Not routable on the public internet.",
    },
    {
      id: "cs-50",
      question:
        "In operating systems, CPU scheduling algorithm 'Shortest Job First (SJF)' minimizes:",
      options: [
        "Context switching",
        "Average waiting time",
        "Memory usage",
        "Number of processes",
      ],
      correct: 1,
      explanation:
        "SJF scheduling gives priority to the process with the shortest burst time, which minimizes average waiting time. However, it can cause 'starvation' of longer processes.",
    },
    {
      id: "cs-51",
      question:
        "Round Robin scheduling algorithm uses a fixed time quantum. Its main advantage is:",
      options: [
        "Minimum context switching",
        "Optimal for I/O-bound processes",
        "Fairness — each process gets equal CPU time",
        "Lowest average turnaround time",
      ],
      correct: 2,
      explanation:
        "Round Robin gives each process a fixed time slice (quantum) and cycles through them. Main advantage: fairness and good response time. Best for time-sharing systems.",
    },
    {
      id: "cs-52",
      question: "Virtual memory in operating systems allows programs to:",
      options: [
        "Access hardware directly",
        "Use more memory than physically available by using disk as extension",
        "Execute in the GPU",
        "Run multiple programs simultaneously without any memory limit",
      ],
      correct: 1,
      explanation:
        "Virtual memory uses disk space (swap/page file) as an extension of physical RAM. Programs can use memory addresses beyond physical RAM. Uses paging or segmentation.",
    },
    {
      id: "cs-53",
      question: "Page fault in virtual memory occurs when:",
      options: [
        "A program encounters an error",
        "A process requests a page not currently in physical memory",
        "Memory is completely full",
        "Two processes write to the same page",
      ],
      correct: 1,
      explanation:
        "A page fault occurs when a process tries to access a memory page that is not currently loaded in physical RAM. The OS then loads the page from disk (swap space), causing a performance penalty.",
    },
    {
      id: "cs-54",
      question: "The concept of 'abstraction' in OOP means:",
      options: [
        "Hiding internal implementation details and showing only essential features",
        "Combining data and methods",
        "One class inheriting from another",
        "Objects sharing the same method name",
      ],
      correct: 0,
      explanation:
        "Abstraction hides complex implementation details and shows only the essential features. Example: You use a car without knowing its engine internals. Achieved via abstract classes and interfaces.",
    },
    {
      id: "cs-55",
      question:
        "In a stack implemented with an array, the PUSH operation adds an element at the:",
      options: [
        "Beginning (index 0)",
        "Middle",
        "Top (current top index + 1)",
        "Random position",
      ],
      correct: 2,
      explanation:
        "In a stack, PUSH adds an element at the top (increments top pointer). POP removes from the top (decrements top pointer). LIFO: Last In, First Out.",
    },
    {
      id: "cs-56",
      question:
        "Breadth-First Search (BFS) uses which data structure internally?",
      options: ["Stack", "Queue", "Heap", "Linked List"],
      correct: 1,
      explanation:
        "BFS uses a queue (FIFO). It explores all neighbors at current depth before going deeper. Used for: shortest path in unweighted graphs, level-order traversal. DFS uses a stack (or recursion).",
    },
    {
      id: "cs-57",
      question:
        "The time complexity of inserting an element at the beginning of a singly linked list is:",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correct: 2,
      explanation:
        "Inserting at the beginning of a linked list is O(1) — create new node, set its next to current head, update head pointer. Inserting at the END of a singly linked list without tail pointer is O(n).",
    },
    {
      id: "cs-58",
      question: "What does SQL 'JOIN' operation do?",
      options: [
        "Combines rows from two tables based on a related column",
        "Deletes rows from both tables",
        "Creates a new empty table",
        "Sorts data in a table",
      ],
      correct: 0,
      explanation:
        "SQL JOIN combines rows from two or more tables based on a related column. Types: INNER JOIN (matching rows only), LEFT JOIN (all from left + matching from right), RIGHT JOIN, FULL OUTER JOIN.",
    },
    {
      id: "cs-59",
      question: "The Banker's Algorithm in operating systems is used for:",
      options: [
        "Memory allocation using pages",
        "CPU scheduling",
        "Deadlock avoidance",
        "Cache management",
      ],
      correct: 2,
      explanation:
        "The Banker's Algorithm (by Dijkstra) is used for deadlock avoidance. It checks if resource allocation would leave the system in a 'safe state' before granting requests.",
    },
    {
      id: "cs-60",
      question: "In computer networks, 'DNS' stands for:",
      options: [
        "Digital Network System",
        "Dynamic Node Service",
        "Domain Name System",
        "Data Network Service",
      ],
      correct: 2,
      explanation:
        "DNS (Domain Name System) translates human-readable domain names (www.google.com) into IP addresses (142.250.x.x). It's like the 'phone book' of the internet.",
    },
    {
      id: "cs-61",
      question: "The worst-case time complexity of Bubble Sort is:",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correct: 2,
      explanation:
        "Bubble Sort has O(n²) worst and average case (reversed sorted array). Best case O(n) with early termination optimization. It's simple but inefficient for large datasets.",
    },
    {
      id: "cs-62",
      question: "An abstract class in OOP:",
      options: [
        "Can be instantiated directly",
        "Cannot be instantiated and may contain abstract methods",
        "Only contains static methods",
        "Has no constructors",
      ],
      correct: 1,
      explanation:
        "An abstract class cannot be instantiated directly. It may contain abstract methods (no implementation) that must be overridden by subclasses. Used to define a template/interface for subclasses.",
    },
    {
      id: "cs-63",
      question:
        "The Traveling Salesman Problem (TSP) is an example of which category?",
      options: [
        "P (polynomial time)",
        "NP-complete",
        "Linear programming",
        "Greedy algorithms",
      ],
      correct: 1,
      explanation:
        "TSP (find shortest route visiting all cities once) is NP-complete — no known polynomial-time exact solution. For n cities, brute force takes O(n!). Approximation algorithms are used in practice.",
    },
    {
      id: "cs-64",
      question:
        "In a relational database, the SELECT query with DISTINCT keyword:",
      options: [
        "Selects only the first row",
        "Returns unique values only (removes duplicates)",
        "Selects rows in alphabetical order",
        "Selects all rows including duplicates",
      ],
      correct: 1,
      explanation:
        "SELECT DISTINCT removes duplicate rows from the result set. Example: SELECT DISTINCT city FROM Customers; returns each city name only once, even if multiple customers are from the same city.",
    },
    {
      id: "cs-65",
      question: "A 'router' in computer networks operates at which OSI layer?",
      options: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
      ],
      correct: 2,
      explanation:
        "Routers operate at the Network Layer (Layer 3) and forward packets based on IP addresses. Switches operate at Data Link Layer (Layer 2) using MAC addresses. Hubs operate at Physical Layer.",
    },
    {
      id: "cs-66",
      question: "Which HTTP status code indicates 'Not Found'?",
      options: ["200", "301", "404", "500"],
      correct: 2,
      explanation:
        "HTTP 404 = Not Found (requested resource doesn't exist). 200 = OK (success). 301 = Moved Permanently. 500 = Internal Server Error. 403 = Forbidden.",
    },
    {
      id: "cs-67",
      question:
        "In Python, a 'list comprehension' for generating squares of 0-4 is:",
      options: [
        "[x for x in squares(5)]",
        "[x² for x in range(5)]",
        "[x**2 for x in range(5)]",
        "[range(5).square()]",
      ],
      correct: 2,
      explanation:
        "[x**2 for x in range(5)] generates [0, 1, 4, 9, 16]. List comprehensions provide a concise way to create lists. Syntax: [expression for item in iterable if condition].",
    },
    {
      id: "cs-68",
      question:
        "The process of converting a higher-level language to assembly or machine code is:",
      options: ["Interpretation", "Compilation", "Assembling", "Linking"],
      correct: 1,
      explanation:
        "Compilation translates entire source code (C, C++) to machine/assembly code before execution. Interpretation (Python, JS) translates line-by-line at runtime. Assembling converts assembly to machine code.",
    },
    {
      id: "cs-69",
      question:
        "In object-oriented design, SOLID principles include the Single Responsibility Principle which states:",
      options: [
        "A class should have only one method",
        "A class should have only one reason to change",
        "There should be only one class per file",
        "Objects should have single value attributes",
      ],
      correct: 1,
      explanation:
        "Single Responsibility Principle: a class should have only one reason to change — meaning it should have only one job/responsibility. This reduces coupling and improves maintainability.",
    },
    {
      id: "cs-70",
      question: "The two main types of computer memory in terms of access are:",
      options: [
        "ROM and Cache",
        "Sequential and Random Access Memory",
        "Primary and Secondary memory",
        "Static and Dynamic memory",
      ],
      correct: 2,
      explanation:
        "Primary memory (RAM/ROM) — fast, directly accessible by CPU; temporary. Secondary memory (HDD, SSD, flash) — slower, persistent storage. Hierarchy: Registers > Cache > RAM > Secondary storage.",
    },
  ],
};

export function getRandomQuestions(
  subject: SubjectKey,
  count = 5,
): MCQQuestion[] {
  const bank = mcqBank[subject];
  const shuffled = [...bank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, bank.length));
}

/**
 * Get questions from the bank excluding already-seen IDs.
 * Returns up to `count` unseen questions (randomly ordered).
 * If fewer than `count` unseen questions remain, returns all remaining.
 */
export function getNextBatch(
  subject: SubjectKey,
  seenIds: Set<string>,
  count = 5,
): MCQQuestion[] {
  const bank = mcqBank[subject];
  const unseen = bank.filter((q) => !seenIds.has(q.id));
  const shuffled = [...unseen].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getTotalQuestions(subject: SubjectKey): number {
  return mcqBank[subject].length;
}
