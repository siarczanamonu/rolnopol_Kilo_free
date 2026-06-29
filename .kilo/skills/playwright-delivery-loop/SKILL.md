---
name: playwright-delivery-loop
description: Use when the user wants a complete Playwright workflow in Kilo Code: create or update Markdown test cases first, implement the Playwright test in TypeScript, heal failing tests until green or blocked, run code review, apply review fixes, and finish with a final validation run.
---

# Playwright Delivery Loop

Orchestrate the full Playwright workflow from planning to final validation.

## When to use

Use this skill when:
- The user wants one command to drive the full QA automation flow.
- The expected process is: test cases -> test implementation -> healing loop -> code review -> review fixes -> final run.
- The repository already uses Playwright or is clearly intended to.

This skill is an orchestrator. It should delegate work conceptually to specialized skills rather than doing everything in one undifferentiated pass.

## Skills expected in the workspace

Prefer these companion skills when available:
- `test-case-writer`
- `playwright-test-writer`
- `playwright-healer`
- `playwright-reviewer`

If one is missing, continue with the same phase using the instructions in this file and report the fallback.

## Goal

Deliver a working, reviewed, and validated Playwright test with an explicit planning artifact and a traceable sequence of changes.

## Mandatory phase order

Do not skip or reorder phases unless the user explicitly asks.

1. Planning
2. Implementation
3. Healing loop
4. Review
5. Review fixes
6. Final validation

## Phase 1 - Planning

Objective: create or update the Markdown test plan before code exists.

Actions:
- Inspect requirements, ticket text, app code, current tests, fixtures, and repository conventions.
- Create or update a plan file in `specs/` or the repository's existing QA-doc location.
- Ensure scenarios are concrete, non-redundant, and implementation-ready.

Exit criteria:
- A Markdown plan exists.
- Scope, assumptions, preconditions, steps, and expected results are explicit.
- A handoff section suggests the target spec file and helper usage.

## Phase 2 - Implementation

Objective: create the Playwright spec from the approved plan.

Actions:
- Read the plan file.
- Inspect `playwright.config.*`, fixtures, auth setup, existing spec patterns, and selector conventions.
- Generate or update the target `.spec.ts` file in the existing test folder.
- Map test titles clearly to the planned scenarios.

Implementation rules:
- Prefer semantic locators and repository conventions.
- Avoid brittle selectors and arbitrary waits.
- Use reusable setup via fixtures/helpers when repeated.
- Assert business outcomes, not only visual presence.

Exit criteria:
- A runnable spec file exists.
- No placeholder TODOs remain.
- The implementation aligns with the plan.

## Phase 3 - Healing loop

Objective: iteratively fix the target test until it passes or is clearly blocked.

Loop:
1. Run only the most relevant test or smallest failing subset.
2. Capture the exact failure.
3. Determine root cause.
4. Apply the smallest responsible fix.
5. Re-run the same target.

Healing rules:
- Do not weaken assertions only to get green.
- Do not use blind retries or arbitrary timeouts as the default fix.
- Keep fixes scoped to the observed failure.
- Stop when the issue is clearly an app defect, missing environment, conflicting requirement, or repeated no-progress loop.

Suggested stop threshold:
- Maximum 3 focused healing iterations before reporting blocked status unless there is clear progress.

Exit criteria:
- The target test is green, or
- The workflow is blocked with a precise reason and next action.

## Phase 4 - Review

Objective: review the now-working test for quality.

Review for:
- Locator stability.
- Assertion strength.
- Duplication.
- Fixture and helper usage.
- Naming and readability.
- Flakiness risks.
- Consistency with repository style.

Classify findings:
- High
- Medium
- Low

Exit criteria:
- Findings are documented, even if the result is “no meaningful issues found”.

## Phase 5 - Review fixes

Objective: apply the worthwhile review improvements without changing intent.

Actions:
- Fix high-severity items first.
- Apply medium items that provide clear value now.
- Apply low-severity polish only if cheap and safe.
- Keep edits focused and avoid unrelated refactors.

Exit criteria:
- The reviewed spec reflects the accepted improvements.
- The test intent and coverage remain unchanged.

## Phase 6 - Final validation

Objective: confirm the final artifact is still green after review-driven edits.

Actions:
- Re-run the relevant test or smallest affected scope.
- Confirm no new failure was introduced.
- Summarize the final status.

Exit criteria:
- Final run passes, or
- The exact regression introduced by review fixes is reported.

## Required response format

Use this structure in the final response:

```md
## Delivery summary
- Feature or flow:
- Plan file:
- Spec file:
- Final status:

## Phases completed
- Planning:
- Implementation:
- Healing loop:
- Review:
- Review fixes:
- Final validation:

## Key changes
1. ...
2. ...
3. ...

## Risks or assumptions
- ...

## Next action
- ...
```

## Operating principles

- Follow the phase order strictly.
- Keep every phase auditable.
- Prefer repository conventions over personal preferences.
- Preserve business intent through every fix.
- Minimize unnecessary rewrites.
- Be explicit when blocked.

## Example invocation style

Examples of suitable user intent:
- "Create cases for checkout login, implement the Playwright test, fix it until green, review it, apply review comments, and validate again."
- "Run the full Playwright delivery loop for the password reset flow."

## Final quality bar

A successful delivery loop produces:
- A Markdown plan.
- A Playwright spec.
- A green or clearly blocked result.
- A review pass with tracked improvements.
- A final validation run after review changes.
