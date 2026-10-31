# Mission: Systems Thinking for Trusted Business Systems

## Why

Use systems thinking as a working tool in design reviews, incident analysis and architecture decisions for fintech and enterprise systems in Thailand, not as management vocabulary. Make an instinct for reliability over cleverness, earned in 19 years of aircraft maintenance, explicit and rigorous.

## Success looks like

- Walk a real incident down the Iceberg (event → pattern → structure → mental model), with a structure-level explanation a senior engineer would accept.
- Draw a stock-and-flow model of a backlog (payment retry queue, reconciliation exception queue, deferred-defect list) with inflows, outflows and at least one delay, and predict its behavior over time before checking.
- Draw a causal loop diagram with correct link polarities and at least one reinforcing and one balancing loop for a production failure mode (retry storm, cascading timeout), and explain which loop dominates and when.
- Name the archetype in a short scenario, propose an intervention, and place it on Meadows' 12 leverage points with a justification.
- Capstone: a one-page system map plus intervention memo for a real system (payment/settlement flow or an engineering-team process) naming stocks, loops, delays, the archetype and the highest-leverage change.

## Constraints

- Sessions of 30–45 minutes, a few per week.
- Zero-setup tooling: Mermaid or plain-text diagrams.
- Taught in English; may compare with the Thai source course.
- Sequence follows Skooldio's "Systems Thinking for Better Problem Solving" spine: foundations → systems lens → anatomy → loops and leverage → archetypes → capstone.
- Meadows' _Thinking in Systems_ is canonical; Senge and Sterman supplement. Flag where sources disagree.

## Out of scope

- Using systems thinking as management or change-consulting vocabulary.
- Building full quantitative system dynamics models in Vensim/Stella (qualitative maps and back-of-envelope prediction are the target).
