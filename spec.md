# StudyMate AI

## Current State
The MCQ Practice section has a question bank (mcqBank.ts) with 30 questions per subject for Physics, Chemistry, Math, Biology, History, and Computer Science, and 25 for English. Questions are delivered 5 at a time with no repeats per session.

## Requested Changes (Diff)

### Add
- 20-70 additional questions per subject to bring each subject to 50-100 questions total
  - Physics: 30 → 70 questions (+40)
  - Chemistry: 30 → 70 questions (+40)
  - Math: 30 → 70 questions (+40)
  - Biology: 30 → 70 questions (+40)
  - English: 25 → 70 questions (+45)
  - History: 30 → 70 questions (+40)
  - Computer Science: 30 → 70 questions (+40)

### Modify
- mcqBank.ts: append new question objects to each subject array

### Remove
- Nothing removed

## Implementation Plan
1. Add 40 new Physics questions (phy-31 through phy-70) covering topics like thermodynamics, waves, electromagnetism, modern physics, optics
2. Add 40 new Chemistry questions (che-31 through che-70) covering organic chemistry, periodic table, reactions, bonding, acids/bases
3. Add 40 new Math questions (mat-31 through mat-70) covering algebra, calculus, trigonometry, probability, coordinate geometry
4. Add 40 new Biology questions (bio-31 through bio-70) covering cell biology, genetics, ecology, human physiology, evolution
5. Add 45 new English questions (eng-26 through eng-70) covering grammar, vocabulary, comprehension, literature
6. Add 40 new History questions (his-31 through his-70) covering world history, Indian history, modern history
7. Add 40 new Computer Science questions (cs-31 through cs-70) covering data structures, algorithms, OOP, databases, networking
