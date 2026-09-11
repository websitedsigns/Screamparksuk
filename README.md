# Scream Parks UK v2

A larger React/Vite version of the Halloween attraction rating app.

## Scoring

Each maze is rated:
- Scariness: 🎃 1–10
- Actors: 1–10
- Theming / immersiveness: 1–10

Maze score = average of the completed maze scores.

The park itself is rated:
- Food & drink: 1–10
- Entertainment: 1–10
- Overall feel / atmosphere: 1–10

Park score = average of those three.

Final score = (Maze Score + Park Score) ÷ 2.

Final percentage = Final score × 10.

There is also a separate 5-star **Overall Park Quality** rating. This is intentionally not included in the main percentage so the headline score stays faithful to the requested formula.

## New in v2

- Expanded attraction directory
- Current 2026 dates/details for selected major events
- Dedicated leaderboard
- Attraction search/filter/sorting
- Individual maze cards
- Maze completion indicator
- Visit date
- Written review
- Separate 5-star park quality rating
- Browser persistence with localStorage
- Mobile responsive design
- Better dashboard/statistics
- More structured attraction pages

## Run

npm install
npm run dev

## Important

Attraction/maze data is starter data. Verify each operator's live 2026 lineup before publishing it as an authoritative directory.
