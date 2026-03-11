export type ExamType =
  | "EAPCET"
  | "TS_EAPCET"
  | "JEE_MAINS"
  | "JEE_ADVANCED"
  | "SEMESTER";

export interface RoadmapTopic {
  id: string;
  subject: string;
  topic: string;
  priority: "high" | "medium" | "low";
}

export interface ExamRoadmap {
  name: string;
  description: string;
  totalTopics: number;
  topics: RoadmapTopic[];
}

export const examRoadmaps: Record<ExamType, ExamRoadmap> = {
  EAPCET: {
    name: "AP EAPCET",
    description:
      "Andhra Pradesh Engineering, Agriculture and Pharmacy Common Entrance Test",
    totalTopics: 39,
    topics: [
      // Physics
      {
        id: "eap-phy-1",
        subject: "Physics",
        topic: "Units & Dimensions",
        priority: "high",
      },
      {
        id: "eap-phy-2",
        subject: "Physics",
        topic: "Kinematics — Motion in 1D & 2D",
        priority: "high",
      },
      {
        id: "eap-phy-3",
        subject: "Physics",
        topic: "Laws of Motion & Friction",
        priority: "high",
      },
      {
        id: "eap-phy-4",
        subject: "Physics",
        topic: "Work, Energy & Power",
        priority: "high",
      },
      {
        id: "eap-phy-5",
        subject: "Physics",
        topic: "Rotational Motion & Moment of Inertia",
        priority: "medium",
      },
      {
        id: "eap-phy-6",
        subject: "Physics",
        topic: "Gravitation & Satellites",
        priority: "medium",
      },
      {
        id: "eap-phy-7",
        subject: "Physics",
        topic: "Thermodynamics & Heat Transfer",
        priority: "high",
      },
      {
        id: "eap-phy-8",
        subject: "Physics",
        topic: "Oscillations & Waves",
        priority: "medium",
      },
      {
        id: "eap-phy-9",
        subject: "Physics",
        topic: "Electrostatics & Capacitance",
        priority: "high",
      },
      {
        id: "eap-phy-10",
        subject: "Physics",
        topic: "Current Electricity & Circuits",
        priority: "high",
      },
      {
        id: "eap-phy-11",
        subject: "Physics",
        topic: "Magnetism & Magnetic Effects",
        priority: "medium",
      },
      {
        id: "eap-phy-12",
        subject: "Physics",
        topic: "Ray Optics & Wave Optics",
        priority: "high",
      },
      {
        id: "eap-phy-13",
        subject: "Physics",
        topic: "Modern Physics & Nuclear Physics",
        priority: "medium",
      },
      // Chemistry
      {
        id: "eap-che-1",
        subject: "Chemistry",
        topic: "Atomic Structure & Electronic Configuration",
        priority: "high",
      },
      {
        id: "eap-che-2",
        subject: "Chemistry",
        topic: "Chemical Bonding — Ionic, Covalent, VSEPR",
        priority: "high",
      },
      {
        id: "eap-che-3",
        subject: "Chemistry",
        topic: "States of Matter — Gases & Liquids",
        priority: "medium",
      },
      {
        id: "eap-che-4",
        subject: "Chemistry",
        topic: "Thermodynamics — Laws & Gibbs Energy",
        priority: "high",
      },
      {
        id: "eap-che-5",
        subject: "Chemistry",
        topic: "Chemical Equilibrium & Le Chatelier's Principle",
        priority: "high",
      },
      {
        id: "eap-che-6",
        subject: "Chemistry",
        topic: "Redox Reactions & Electrochemistry",
        priority: "medium",
      },
      {
        id: "eap-che-7",
        subject: "Chemistry",
        topic: "s-Block Elements (Alkali & Alkaline Earth)",
        priority: "medium",
      },
      {
        id: "eap-che-8",
        subject: "Chemistry",
        topic: "p-Block Elements — Non-metals & Metalloids",
        priority: "medium",
      },
      {
        id: "eap-che-9",
        subject: "Chemistry",
        topic: "Organic Chemistry — Basics & IUPAC Naming",
        priority: "high",
      },
      {
        id: "eap-che-10",
        subject: "Chemistry",
        topic: "Biomolecules — Carbohydrates, Proteins, Lipids",
        priority: "low",
      },
      // Mathematics
      {
        id: "eap-mat-1",
        subject: "Mathematics",
        topic: "Sets, Relations & Functions",
        priority: "high",
      },
      {
        id: "eap-mat-2",
        subject: "Mathematics",
        topic: "Logarithms & Exponential Functions",
        priority: "medium",
      },
      {
        id: "eap-mat-3",
        subject: "Mathematics",
        topic: "Matrices & Determinants",
        priority: "high",
      },
      {
        id: "eap-mat-4",
        subject: "Mathematics",
        topic: "Quadratic Equations & Theory of Equations",
        priority: "high",
      },
      {
        id: "eap-mat-5",
        subject: "Mathematics",
        topic: "Trigonometry — Identities & Equations",
        priority: "high",
      },
      {
        id: "eap-mat-6",
        subject: "Mathematics",
        topic: "Vectors — Dot Product & Cross Product",
        priority: "medium",
      },
      {
        id: "eap-mat-7",
        subject: "Mathematics",
        topic: "3D Geometry — Lines, Planes, Distances",
        priority: "medium",
      },
      {
        id: "eap-mat-8",
        subject: "Mathematics",
        topic: "Differential Calculus — Limits & Derivatives",
        priority: "high",
      },
      {
        id: "eap-mat-9",
        subject: "Mathematics",
        topic: "Integral Calculus — Definite & Indefinite",
        priority: "high",
      },
      {
        id: "eap-mat-10",
        subject: "Mathematics",
        topic: "Probability & Statistics",
        priority: "medium",
      },
      {
        id: "eap-mat-11",
        subject: "Mathematics",
        topic: "Coordinate Geometry — Circles & Conics",
        priority: "high",
      },
      {
        id: "eap-mat-12",
        subject: "Mathematics",
        topic: "Sequences, Series & Progressions",
        priority: "medium",
      },
      {
        id: "eap-mat-13",
        subject: "Mathematics",
        topic: "Binomial Theorem & Mathematical Induction",
        priority: "medium",
      },
      {
        id: "eap-mat-14",
        subject: "Mathematics",
        topic: "Complex Numbers",
        priority: "medium",
      },
      {
        id: "eap-mat-15",
        subject: "Mathematics",
        topic: "Permutations & Combinations",
        priority: "high",
      },
      {
        id: "eap-mat-16",
        subject: "Mathematics",
        topic: "Straight Lines & Pair of Lines",
        priority: "medium",
      },
    ],
  },

  TS_EAPCET: {
    name: "TS EAPCET",
    description:
      "Telangana State Engineering, Agriculture and Pharmacy Common Entrance Test",
    totalTopics: 39,
    topics: [
      // Physics
      {
        id: "ts-phy-1",
        subject: "Physics",
        topic: "Units & Measurements",
        priority: "high",
      },
      {
        id: "ts-phy-2",
        subject: "Physics",
        topic: "Kinematics — Motion in Straight Line & Plane",
        priority: "high",
      },
      {
        id: "ts-phy-3",
        subject: "Physics",
        topic: "Laws of Motion & Friction",
        priority: "high",
      },
      {
        id: "ts-phy-4",
        subject: "Physics",
        topic: "Work, Energy & Power",
        priority: "high",
      },
      {
        id: "ts-phy-5",
        subject: "Physics",
        topic: "Rotational Motion & Torque",
        priority: "medium",
      },
      {
        id: "ts-phy-6",
        subject: "Physics",
        topic: "Gravitation — Kepler's Laws & Satellites",
        priority: "medium",
      },
      {
        id: "ts-phy-7",
        subject: "Physics",
        topic: "Thermodynamics & Kinetic Theory of Gases",
        priority: "high",
      },
      {
        id: "ts-phy-8",
        subject: "Physics",
        topic: "Oscillations & Waves",
        priority: "medium",
      },
      {
        id: "ts-phy-9",
        subject: "Physics",
        topic: "Electrostatics — Coulomb's Law & Capacitors",
        priority: "high",
      },
      {
        id: "ts-phy-10",
        subject: "Physics",
        topic: "Current Electricity — Ohm's Law & Circuits",
        priority: "high",
      },
      {
        id: "ts-phy-11",
        subject: "Physics",
        topic: "Magnetism & Magnetic Effects of Current",
        priority: "medium",
      },
      {
        id: "ts-phy-12",
        subject: "Physics",
        topic: "Electromagnetic Induction & AC Currents",
        priority: "high",
      },
      {
        id: "ts-phy-13",
        subject: "Physics",
        topic: "Optics — Ray & Wave Optics",
        priority: "high",
      },
      {
        id: "ts-phy-14",
        subject: "Physics",
        topic: "Dual Nature of Matter & Radiation",
        priority: "medium",
      },
      {
        id: "ts-phy-15",
        subject: "Physics",
        topic: "Atoms & Nuclei — Radioactivity",
        priority: "medium",
      },
      // Chemistry
      {
        id: "ts-che-1",
        subject: "Chemistry",
        topic: "Atomic Structure & Periodic Table",
        priority: "high",
      },
      {
        id: "ts-che-2",
        subject: "Chemistry",
        topic: "Chemical Bonding — Ionic, Covalent, Metallic",
        priority: "high",
      },
      {
        id: "ts-che-3",
        subject: "Chemistry",
        topic: "States of Matter — Gas Laws & Liquid State",
        priority: "medium",
      },
      {
        id: "ts-che-4",
        subject: "Chemistry",
        topic: "Thermodynamics — Enthalpy, Entropy & Gibbs",
        priority: "high",
      },
      {
        id: "ts-che-5",
        subject: "Chemistry",
        topic: "Chemical Equilibrium & Ionic Equilibrium",
        priority: "high",
      },
      {
        id: "ts-che-6",
        subject: "Chemistry",
        topic: "Electrochemistry — Cells & Nernst Equation",
        priority: "medium",
      },
      {
        id: "ts-che-7",
        subject: "Chemistry",
        topic: "p-Block & d-Block Elements",
        priority: "medium",
      },
      {
        id: "ts-che-8",
        subject: "Chemistry",
        topic: "Organic Chemistry — Functional Groups & Reactions",
        priority: "high",
      },
      {
        id: "ts-che-9",
        subject: "Chemistry",
        topic: "Aldehydes, Ketones & Carboxylic Acids",
        priority: "high",
      },
      {
        id: "ts-che-10",
        subject: "Chemistry",
        topic: "Biomolecules & Polymers",
        priority: "low",
      },
      // Mathematics
      {
        id: "ts-mat-1",
        subject: "Mathematics",
        topic: "Algebra — Sets, Relations & Functions",
        priority: "high",
      },
      {
        id: "ts-mat-2",
        subject: "Mathematics",
        topic: "Matrices & Determinants",
        priority: "high",
      },
      {
        id: "ts-mat-3",
        subject: "Mathematics",
        topic: "Quadratic Equations & Theory of Equations",
        priority: "high",
      },
      {
        id: "ts-mat-4",
        subject: "Mathematics",
        topic: "Trigonometry — Identities & Inverse Functions",
        priority: "high",
      },
      {
        id: "ts-mat-5",
        subject: "Mathematics",
        topic: "Vectors & 3D Geometry",
        priority: "medium",
      },
      {
        id: "ts-mat-6",
        subject: "Mathematics",
        topic: "Coordinate Geometry — Circles & Conics",
        priority: "high",
      },
      {
        id: "ts-mat-7",
        subject: "Mathematics",
        topic: "Differential Calculus — Limits, Derivatives",
        priority: "high",
      },
      {
        id: "ts-mat-8",
        subject: "Mathematics",
        topic: "Integral Calculus — Definite & Indefinite",
        priority: "high",
      },
      {
        id: "ts-mat-9",
        subject: "Mathematics",
        topic: "Probability & Statistics",
        priority: "medium",
      },
      {
        id: "ts-mat-10",
        subject: "Mathematics",
        topic: "Permutations, Combinations & Binomial Theorem",
        priority: "high",
      },
      {
        id: "ts-mat-11",
        subject: "Mathematics",
        topic: "Complex Numbers & Sequences",
        priority: "medium",
      },
      {
        id: "ts-mat-12",
        subject: "Mathematics",
        topic: "Straight Lines & Pair of Lines",
        priority: "medium",
      },
      {
        id: "ts-mat-13",
        subject: "Mathematics",
        topic: "Differential Equations",
        priority: "medium",
      },
      {
        id: "ts-mat-14",
        subject: "Mathematics",
        topic: "Applications of Derivatives — Maxima/Minima",
        priority: "high",
      },
    ],
  },

  JEE_MAINS: {
    name: "JEE Mains",
    description:
      "Joint Entrance Examination — for admission to NITs, IIITs, and GFTIs",
    totalTopics: 45,
    topics: [
      // Physics
      {
        id: "jee-phy-1",
        subject: "Physics",
        topic: "Units, Dimensions & Error Analysis",
        priority: "high",
      },
      {
        id: "jee-phy-2",
        subject: "Physics",
        topic: "Kinematics — Projectile & Relative Motion",
        priority: "high",
      },
      {
        id: "jee-phy-3",
        subject: "Physics",
        topic: "Newton's Laws — Applications & Friction",
        priority: "high",
      },
      {
        id: "jee-phy-4",
        subject: "Physics",
        topic: "Work, Energy, Power & Collision",
        priority: "high",
      },
      {
        id: "jee-phy-5",
        subject: "Physics",
        topic: "Rotational Mechanics & Angular Momentum",
        priority: "high",
      },
      {
        id: "jee-phy-6",
        subject: "Physics",
        topic: "Gravitation — Kepler's Laws & Orbital Velocity",
        priority: "medium",
      },
      {
        id: "jee-phy-7",
        subject: "Physics",
        topic: "Properties of Matter — Elasticity & Fluid Mechanics",
        priority: "medium",
      },
      {
        id: "jee-phy-8",
        subject: "Physics",
        topic: "Thermodynamics — Laws, Engines & Entropy",
        priority: "high",
      },
      {
        id: "jee-phy-9",
        subject: "Physics",
        topic: "Simple Harmonic Motion & Wave Mechanics",
        priority: "high",
      },
      {
        id: "jee-phy-10",
        subject: "Physics",
        topic: "Electrostatics — Gauss Law & Capacitors",
        priority: "high",
      },
      {
        id: "jee-phy-11",
        subject: "Physics",
        topic: "Current Electricity — Kirchhoff's Laws & Wheatstone",
        priority: "high",
      },
      {
        id: "jee-phy-12",
        subject: "Physics",
        topic: "Magnetic Effects of Current & Magnetism",
        priority: "high",
      },
      {
        id: "jee-phy-13",
        subject: "Physics",
        topic: "Electromagnetic Induction & AC Circuits",
        priority: "high",
      },
      {
        id: "jee-phy-14",
        subject: "Physics",
        topic: "Ray Optics, Wave Optics & Optical Instruments",
        priority: "high",
      },
      {
        id: "jee-phy-15",
        subject: "Physics",
        topic: "Modern Physics — Photoelectric, Bohr Model",
        priority: "high",
      },
      {
        id: "jee-phy-16",
        subject: "Physics",
        topic: "Semiconductors & Digital Electronics",
        priority: "medium",
      },
      {
        id: "jee-phy-17",
        subject: "Physics",
        topic: "Communication Systems — Modulation & Waves",
        priority: "low",
      },
      // Chemistry
      {
        id: "jee-che-1",
        subject: "Chemistry",
        topic: "Atomic Structure — Quantum Numbers & Orbitals",
        priority: "high",
      },
      {
        id: "jee-che-2",
        subject: "Chemistry",
        topic: "Chemical Bonding — Hybridization & MOT",
        priority: "high",
      },
      {
        id: "jee-che-3",
        subject: "Chemistry",
        topic: "Thermodynamics & Thermochemistry",
        priority: "high",
      },
      {
        id: "jee-che-4",
        subject: "Chemistry",
        topic: "Chemical Equilibrium & Ionic Equilibrium",
        priority: "high",
      },
      {
        id: "jee-che-5",
        subject: "Chemistry",
        topic: "Electrochemistry & Redox Reactions",
        priority: "high",
      },
      {
        id: "jee-che-6",
        subject: "Chemistry",
        topic: "Chemical Kinetics & Rate Laws",
        priority: "high",
      },
      {
        id: "jee-che-7",
        subject: "Chemistry",
        topic: "s, p, d and f Block Elements",
        priority: "high",
      },
      {
        id: "jee-che-8",
        subject: "Chemistry",
        topic: "Coordination Compounds & Isomerism",
        priority: "medium",
      },
      {
        id: "jee-che-9",
        subject: "Chemistry",
        topic: "Organic Chemistry — Mechanisms & Reactions",
        priority: "high",
      },
      {
        id: "jee-che-10",
        subject: "Chemistry",
        topic: "Polymers & Chemistry in Everyday Life",
        priority: "medium",
      },
      // Mathematics
      {
        id: "jee-mat-1",
        subject: "Mathematics",
        topic: "Complex Numbers & Quadratic Equations",
        priority: "high",
      },
      {
        id: "jee-mat-2",
        subject: "Mathematics",
        topic: "Matrices, Determinants & System of Equations",
        priority: "high",
      },
      {
        id: "jee-mat-3",
        subject: "Mathematics",
        topic: "Permutations, Combinations & Binomial Theorem",
        priority: "high",
      },
      {
        id: "jee-mat-4",
        subject: "Mathematics",
        topic: "Sequences & Series — AP, GP, HP",
        priority: "medium",
      },
      {
        id: "jee-mat-5",
        subject: "Mathematics",
        topic: "Trigonometry — Properties of Triangles",
        priority: "high",
      },
      {
        id: "jee-mat-6",
        subject: "Mathematics",
        topic: "Inverse Trigonometric Functions",
        priority: "medium",
      },
      {
        id: "jee-mat-7",
        subject: "Mathematics",
        topic: "Straight Lines & Conic Sections",
        priority: "high",
      },
      {
        id: "jee-mat-8",
        subject: "Mathematics",
        topic: "3D Geometry — Vectors & Lines in Space",
        priority: "high",
      },
      {
        id: "jee-mat-9",
        subject: "Mathematics",
        topic: "Limits, Continuity & Differentiability",
        priority: "high",
      },
      {
        id: "jee-mat-10",
        subject: "Mathematics",
        topic: "Applications of Derivatives — Maxima/Minima",
        priority: "high",
      },
      {
        id: "jee-mat-11",
        subject: "Mathematics",
        topic: "Integrals & Applications — Area & Volumes",
        priority: "high",
      },
      {
        id: "jee-mat-12",
        subject: "Mathematics",
        topic: "Differential Equations",
        priority: "medium",
      },
      {
        id: "jee-mat-13",
        subject: "Mathematics",
        topic: "Probability — Classical & Bayes Theorem",
        priority: "high",
      },
      {
        id: "jee-mat-14",
        subject: "Mathematics",
        topic: "Mathematical Reasoning & Statistics",
        priority: "low",
      },
      {
        id: "jee-mat-15",
        subject: "Mathematics",
        topic: "Sets, Relations & Functions",
        priority: "medium",
      },
    ],
  },

  JEE_ADVANCED: {
    name: "JEE Advanced",
    description: "Joint Entrance Examination Advanced — for admission to IITs",
    totalTopics: 42,
    topics: [
      // Physics — Advanced
      {
        id: "adv-phy-1",
        subject: "Physics",
        topic: "Mechanics — Advanced: Springs, Pulleys, Constraints",
        priority: "high",
      },
      {
        id: "adv-phy-2",
        subject: "Physics",
        topic: "Kinematics — Complex Trajectories & Relative Motion",
        priority: "high",
      },
      {
        id: "adv-phy-3",
        subject: "Physics",
        topic: "Rigid Body Dynamics & Rolling Motion",
        priority: "high",
      },
      {
        id: "adv-phy-4",
        subject: "Physics",
        topic: "Fluids — Bernoulli & Viscosity Problems",
        priority: "high",
      },
      {
        id: "adv-phy-5",
        subject: "Physics",
        topic: "Thermodynamics — Processes, Cycles & Entropy Deep Dive",
        priority: "high",
      },
      {
        id: "adv-phy-6",
        subject: "Physics",
        topic: "Waves — Standing Waves, Beats & Doppler Effect",
        priority: "high",
      },
      {
        id: "adv-phy-7",
        subject: "Physics",
        topic: "Electrostatics — Advanced: Gauss, Potentials, Conductors",
        priority: "high",
      },
      {
        id: "adv-phy-8",
        subject: "Physics",
        topic: "Magnetism — Electromagnetic Induction & LCR Circuits",
        priority: "high",
      },
      {
        id: "adv-phy-9",
        subject: "Physics",
        topic: "Optics — Interference, Diffraction & Polarization",
        priority: "high",
      },
      {
        id: "adv-phy-10",
        subject: "Physics",
        topic: "Modern Physics — Nuclear Reactions & Radioactive Decay",
        priority: "high",
      },
      {
        id: "adv-phy-11",
        subject: "Physics",
        topic: "Problem-Solving Strategy: Multi-concept Problems",
        priority: "high",
      },
      // Chemistry — Advanced
      {
        id: "adv-che-1",
        subject: "Chemistry",
        topic: "Physical Chemistry — Advanced Thermodynamics",
        priority: "high",
      },
      {
        id: "adv-che-2",
        subject: "Chemistry",
        topic: "Electrochemistry — Nernst Equation & Cells",
        priority: "high",
      },
      {
        id: "adv-che-3",
        subject: "Chemistry",
        topic: "Chemical Kinetics — Complex Mechanisms",
        priority: "high",
      },
      {
        id: "adv-che-4",
        subject: "Chemistry",
        topic: "Inorganic Chemistry — Transition Metals & Complexes",
        priority: "high",
      },
      {
        id: "adv-che-5",
        subject: "Chemistry",
        topic: "Organic Mechanisms — SN1, SN2, E1, E2 Reactions",
        priority: "high",
      },
      {
        id: "adv-che-6",
        subject: "Chemistry",
        topic: "Stereochemistry — Chirality & Optical Isomers",
        priority: "high",
      },
      {
        id: "adv-che-7",
        subject: "Chemistry",
        topic: "Named Reactions & Multi-step Synthesis",
        priority: "high",
      },
      {
        id: "adv-che-8",
        subject: "Chemistry",
        topic: "Spectroscopy Basics — IR & NMR (conceptual)",
        priority: "medium",
      },
      // Mathematics — Advanced
      {
        id: "adv-mat-1",
        subject: "Mathematics",
        topic: "Algebra — Functional Equations & Inequalities",
        priority: "high",
      },
      {
        id: "adv-mat-2",
        subject: "Mathematics",
        topic: "Complex Numbers — Geometry on Argand Plane",
        priority: "high",
      },
      {
        id: "adv-mat-3",
        subject: "Mathematics",
        topic: "Trigonometry — Advanced Identities & Equations",
        priority: "high",
      },
      {
        id: "adv-mat-4",
        subject: "Mathematics",
        topic: "Coordinate Geometry — Parametric Forms & Conics",
        priority: "high",
      },
      {
        id: "adv-mat-5",
        subject: "Mathematics",
        topic: "Calculus — Continuity, MVT & L'Hopital's Rule",
        priority: "high",
      },
      {
        id: "adv-mat-6",
        subject: "Mathematics",
        topic: "Definite Integrals — Properties & Advanced Evaluation",
        priority: "high",
      },
      {
        id: "adv-mat-7",
        subject: "Mathematics",
        topic: "Differential Equations — Exact & Non-exact",
        priority: "high",
      },
      {
        id: "adv-mat-8",
        subject: "Mathematics",
        topic: "3D Geometry — Advanced Planes & Distance Problems",
        priority: "high",
      },
      {
        id: "adv-mat-9",
        subject: "Mathematics",
        topic: "Probability — Conditional, Bayes & Distributions",
        priority: "high",
      },
      {
        id: "adv-mat-10",
        subject: "Mathematics",
        topic: "Combinatorics — Advanced Counting & Graph Theory",
        priority: "medium",
      },
      {
        id: "adv-mat-11",
        subject: "Mathematics",
        topic: "Number Theory & Mathematical Induction",
        priority: "medium",
      },
      {
        id: "adv-str-1",
        subject: "Strategy",
        topic: "Time Management in Multi-part Questions",
        priority: "high",
      },
      {
        id: "adv-str-2",
        subject: "Strategy",
        topic: "Negative Marking Awareness & Partial Marking",
        priority: "high",
      },
      {
        id: "adv-str-3",
        subject: "Strategy",
        topic: "Integer Type & Paragraph Questions Practice",
        priority: "high",
      },
      {
        id: "adv-str-4",
        subject: "Strategy",
        topic: "Previous Year Papers (2016-2024) Analysis",
        priority: "high",
      },
      {
        id: "adv-str-5",
        subject: "Strategy",
        topic: "Mock Test Simulation under exam conditions",
        priority: "high",
      },
      {
        id: "adv-str-6",
        subject: "Strategy",
        topic: "Revision Schedule: Weak areas & Formula sheets",
        priority: "high",
      },
    ],
  },

  SEMESTER: {
    name: "Semester Exams",
    description: "University Semester Examinations — Engineering first year",
    totalTopics: 36,
    topics: [
      // Engineering Mathematics
      {
        id: "sem-mat-1",
        subject: "Engineering Mathematics",
        topic: "Differential Equations — 1st & 2nd Order",
        priority: "high",
      },
      {
        id: "sem-mat-2",
        subject: "Engineering Mathematics",
        topic: "Laplace Transforms & Inverse",
        priority: "high",
      },
      {
        id: "sem-mat-3",
        subject: "Engineering Mathematics",
        topic: "Fourier Series & Transforms",
        priority: "high",
      },
      {
        id: "sem-mat-4",
        subject: "Engineering Mathematics",
        topic: "Partial Differential Equations",
        priority: "medium",
      },
      {
        id: "sem-mat-5",
        subject: "Engineering Mathematics",
        topic: "Linear Algebra — Rank, Eigenvalues",
        priority: "high",
      },
      {
        id: "sem-mat-6",
        subject: "Engineering Mathematics",
        topic: "Vector Calculus — Gradient, Divergence, Curl",
        priority: "medium",
      },
      {
        id: "sem-mat-7",
        subject: "Engineering Mathematics",
        topic: "Numerical Methods — Newton-Raphson, Simpson's Rule",
        priority: "medium",
      },
      // Engineering Physics
      {
        id: "sem-phy-1",
        subject: "Engineering Physics",
        topic: "Quantum Mechanics — Wave functions & Uncertainty",
        priority: "high",
      },
      {
        id: "sem-phy-2",
        subject: "Engineering Physics",
        topic: "Lasers — Types, Properties & Applications",
        priority: "high",
      },
      {
        id: "sem-phy-3",
        subject: "Engineering Physics",
        topic: "Fiber Optics & Photonics",
        priority: "high",
      },
      {
        id: "sem-phy-4",
        subject: "Engineering Physics",
        topic: "Crystal Structure & X-ray Diffraction",
        priority: "medium",
      },
      {
        id: "sem-phy-5",
        subject: "Engineering Physics",
        topic: "Semiconductor Physics & Band Theory",
        priority: "high",
      },
      {
        id: "sem-phy-6",
        subject: "Engineering Physics",
        topic: "Superconductivity & Nanotechnology Basics",
        priority: "medium",
      },
      // Engineering Chemistry
      {
        id: "sem-che-1",
        subject: "Engineering Chemistry",
        topic: "Water Analysis — Hardness, Treatment, Boiler Problems",
        priority: "high",
      },
      {
        id: "sem-che-2",
        subject: "Engineering Chemistry",
        topic: "Fuels — Types, Calorific Value, Flue Gas Analysis",
        priority: "high",
      },
      {
        id: "sem-che-3",
        subject: "Engineering Chemistry",
        topic: "Corrosion — Types, Mechanisms & Prevention",
        priority: "high",
      },
      {
        id: "sem-che-4",
        subject: "Engineering Chemistry",
        topic: "Lubricants — Types, Properties & Testing",
        priority: "medium",
      },
      {
        id: "sem-che-5",
        subject: "Engineering Chemistry",
        topic: "Polymers — Synthesis, Properties & Applications",
        priority: "medium",
      },
      {
        id: "sem-che-6",
        subject: "Engineering Chemistry",
        topic: "Electrochemistry — Batteries & Fuel Cells",
        priority: "medium",
      },
      // Programming in C
      {
        id: "sem-pro-1",
        subject: "Programming in C",
        topic: "C Basics — Syntax, Data Types, Operators",
        priority: "high",
      },
      {
        id: "sem-pro-2",
        subject: "Programming in C",
        topic: "Control Flow — If-else, Switch, Loops",
        priority: "high",
      },
      {
        id: "sem-pro-3",
        subject: "Programming in C",
        topic: "Functions — Definition, Call by Value/Reference",
        priority: "high",
      },
      {
        id: "sem-pro-4",
        subject: "Programming in C",
        topic: "Arrays & Strings — 1D, 2D, String functions",
        priority: "high",
      },
      {
        id: "sem-pro-5",
        subject: "Programming in C",
        topic: "Pointers — Declaration, Pointer Arithmetic",
        priority: "high",
      },
      {
        id: "sem-pro-6",
        subject: "Programming in C",
        topic: "Structures & Unions — Definition, Usage",
        priority: "medium",
      },
      {
        id: "sem-pro-7",
        subject: "Programming in C",
        topic: "File Handling — fopen, fread, fwrite, fclose",
        priority: "medium",
      },
      // Basic Electronics
      {
        id: "sem-ele-1",
        subject: "Basic Electronics",
        topic: "Diodes — P-N Junction, Rectifiers, Clippers",
        priority: "high",
      },
      {
        id: "sem-ele-2",
        subject: "Basic Electronics",
        topic: "Transistors — BJT, MOSFET & Biasing Circuits",
        priority: "high",
      },
      {
        id: "sem-ele-3",
        subject: "Basic Electronics",
        topic: "Operational Amplifiers — Inverting, Non-inverting",
        priority: "high",
      },
      {
        id: "sem-ele-4",
        subject: "Basic Electronics",
        topic: "Digital Logic — Boolean Algebra & Logic Gates",
        priority: "high",
      },
      {
        id: "sem-ele-5",
        subject: "Basic Electronics",
        topic: "Combinational Circuits — Adders, MUX, DeMUX",
        priority: "medium",
      },
      {
        id: "sem-ele-6",
        subject: "Basic Electronics",
        topic: "Sequential Circuits — Flip-flops, Counters, Registers",
        priority: "medium",
      },
      // Communication Skills
      {
        id: "sem-com-1",
        subject: "Communication Skills",
        topic: "Technical Writing — Reports, Letters, Emails",
        priority: "high",
      },
      {
        id: "sem-com-2",
        subject: "Communication Skills",
        topic: "Presentation Skills & Group Discussion",
        priority: "high",
      },
      {
        id: "sem-com-3",
        subject: "Communication Skills",
        topic: "Reading Comprehension & Vocabulary Building",
        priority: "medium",
      },
      {
        id: "sem-com-4",
        subject: "Communication Skills",
        topic: "Interview Preparation & Resume Writing",
        priority: "high",
      },
    ],
  },
};
