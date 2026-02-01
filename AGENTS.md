# DEPOT KNOWLEDGE BASE

## OVERVIEW
Shared library for Types, Enums, and Constants.
- **Consumers:** Client and Server.
- **Tech:** TypeScript, tsc-alias.

## STRUCTURE
```
src/
├── types/         # Shared Interfaces/Types
├── enums/         # Shared Enums (DB status, User roles)
├── consts/        # Shared Constants
└── index.ts       # Main export
```

## WORKFLOW
1. **Modify:** Make changes in `src/`.
2. **Build:** Run `pnpm build` (runs `tsc && tsc-alias`).
3. **Consume:** Client/Server import from `@scspace-depot`.

## CONVENTIONS
- **Purity:** No side effects. No runtime logic that depends on environment (Node/Browser).
- **Single Source:** If a type is used in both Client and Server, it MUST be here.

## ANTI-PATTERNS
- **Runtime Validation:** Zod is currently dev-only. Do not rely on runtime validation schemas from depot in production.
- **Direct Usage:** Never use `src` files directly in other packages. Always use the built `dist`.
