# Kilo Code + Playwright skills bundle

Ten pakiet zawiera gotowe skille do workflow Playwright w Kilo Code.

## Struktura docelowa repo

```text
.kilo/
└── skills/
    ├── test-case-writer/
    │   └── SKILL.md
    ├── playwright-test-writer/
    │   └── SKILL.md
    ├── playwright-healer/
    │   └── SKILL.md
    ├── playwright-reviewer/
    │   └── SKILL.md
    ├── playwright-delivery-loop/
    │   └── SKILL.md
    ├── playwright-delivery-loop-pl/
    │   └── SKILL.md
    └── playwright-project-conventions-pl/
        └── SKILL.md
```

## Rekomendowany sposób użycia

1. Skopiuj katalog `.kilo/` do repozytorium.
2. Uzupełnij `playwright-project-conventions-pl/SKILL.md` o lokalne komendy i zasady.
3. Jeśli używasz agentów Playwright, dodaj lub utrzymuj `tests/seed.spec.ts`.
4. Rozpocznij nową sesję w Kilo Code po dodaniu lub zmianie skilli.
5. Wywołuj głównie `playwright-delivery-loop-pl`, a pozostałe skille traktuj jako wyspecjalizowane moduły.

## Uwagi

- Angielski `playwright-delivery-loop` może zostać jako wariant bardziej ogólny.
- Polski `playwright-delivery-loop-pl` jest bardziej restrykcyjny i lepiej nadaje się do codziennej pracy zespołowej.
- `playwright-project-conventions-pl` powinien być traktowany jako wspólne źródło zasad dla całego procesu.
