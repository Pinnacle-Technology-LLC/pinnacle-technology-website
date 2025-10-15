# Development Partnership

We build production code together using a coordinated team of specialist agents. The main orchestrator handles task coordination while you guide architecture and provide feedback.

## Working with the Agent System

### Your Main Point of Contact: The Orchestrator

**Always start by talking to the main-orchestrator.** It's your senior technical lead that:
- Understands your requests (even when vague)
- Decides which specialists to involve
- Delegates in the right order
- Synthesizes results into coherent responses

You don't need to manage agents yourself - the orchestrator handles coordination.

### Specialist Agents Available

**Planning & Research:**
- `requirements-clarifier` - Clarifies vague requests before implementation starts
- `research-agent` - Researches libraries, best practices, and solutions using Context7 MCP
- `error-memory` - Checks/logs errors to prevent redundant debugging

**Architecture & Implementation:**
- `architect` - Designs system architecture, database schemas, and API contracts
- `frontend-developer` - Implements React/Next.js UI with Server/Client Components
- `backend-developer` - Implements APIs, business logic, and integrations
- `database-agent` - Writes queries, creates migrations, optimizes performance

**Quality & Security:**
- `code-reviewer` - Reviews code quality, consistency, and best practices
- `test-engineer` - Writes comprehensive unit, integration, and E2E tests
- `security-auditor` - Identifies vulnerabilities and security misconfigurations
- `documentation-agent` - Creates clear, comprehensive documentation

### Agent Coordination Philosophy

**You give direction. The orchestrator executes.**
- Request features naturally - the orchestrator determines agent sequence
- Trust the workflow - agents run in parallel when possible
- Provide feedback - the orchestrator adjusts approach based on your input

## Core Workflow: Clarify → Design → Implement → Validate

The orchestrator manages this workflow automatically:

**1. Clarify** - Ensure requirements are clear
   - Invoke `requirements-clarifier` if request is vague
   - Use `research-agent` for unfamiliar technologies via Context7 MCP
   - Check `error-memory` for previously solved issues

**2. Design** - Plan the architecture
   - Invoke `architect` for system design decisions
   - Define database schemas, API contracts, integration patterns
   - Security architecture considered upfront (never an afterthought)

**3. Implement** - Build with quality
   - Specialist developers (`frontend`, `backend`, `database`) work in coordination
   - Follow existing patterns discovered during research
   - Write code with proper error handling and validation
   - Use Context7 MCP for up-to-date library documentation

**4. Validate** - Ensure quality and security
   - `test-engineer` writes comprehensive test coverage
   - `code-reviewer` checks code quality and consistency
   - `security-auditor` reviews security-sensitive code (auth, payments, user data)
   - `documentation-agent` documents the implementation
   - Run formatters, linters, and tests before completion

**Key Principle:** Trust the orchestrator. It sequences work optimally and runs agents in parallel when possible.

## Code Organization

**Keep functions small and focused:**
- If you need comments to explain sections, split into functions
- Group related functionality into clear modules
- Prefer many small files over few large ones

**Follow project patterns:**
- Research existing implementations before creating new patterns
- Match naming conventions and file organization
- Reuse components and utilities

## Architecture Principles

**This is always a feature branch:**
- Delete old code completely - no deprecation needed
- No versioned names (processV2, handleNew, ClientOld)
- No migration code unless explicitly requested
- No "removed code" comments - just delete it

**Prefer explicit over implicit:**
- Clear function names over clever abstractions
- Obvious data flow over hidden magic
- Direct dependencies over service locators

## Maximize Efficiency

**Parallel Agent Operations:**
- Orchestrator runs multiple agents simultaneously when possible
- Example: Research + Architecture design run in parallel
- Example: Frontend + Backend + Database agents work together after design
- Example: Review + Test + Security audit happen concurrently after implementation

**Error Memory System:**
- Never solve the same problem twice
- All significant errors logged automatically to `docs/errors-and-fixes.md`
- Checked before debugging new issues
- Builds institutional knowledge over time

**Context7 MCP for Documentation:**
- Always get up-to-date, version-specific library docs
- Pulls from source repositories (not cached/outdated snapshots)
- Includes real code examples from official repos
- Reduces hallucination risk with authoritative sources

**Batch Similar Work:**
- Group related file edits together
- Run multiple searches/reads in parallel
- Complete related tasks before context switching

## Next.js & React Development Standards

### Required Patterns

- **Server Components by default** - Only use "use client" when interactivity needed
- **TypeScript strict mode** - Proper typing prevents runtime bugs
- **Error boundaries** - Graceful error handling (error.tsx in App Router)
- **Loading states** - Always handle loading and error states (loading.tsx)
- **Zod for validation** - Never trust client data, validate all inputs
- **Proper authentication** - Verify on server, not just client

### Frontend Specifics

- Use Context7 MCP for up-to-date Next.js documentation
- Server Components for data fetching and static content
- Client Components only for interactivity (onClick, useState, etc.)
- Push "use client" as deep as possible in component tree
- Optimize images with next/image
- Follow accessibility standards (WCAG, semantic HTML)

## Security-First Development

**Automatic Security Review for:**
- Authentication and authorization implementations
- Payment processing integrations
- User data handling and storage
- API endpoints accepting user input
- File uploads or external integrations

The `security-auditor` thinks like an attacker to find vulnerabilities before they're exploited.

**Security Issues Prioritized as:**
- 🔴 **Critical** - Immediate exploitation possible (auth bypass, SQL injection)
- 🟠 **High** - Likely exploitation, significant impact (broken access control, XSS)
- 🟡 **Medium** - Possible exploitation, moderate impact (info disclosure, weak passwords)
- 🟢 **Low** - Unlikely exploitation, minor impact (verbose errors, missing headers)

**Never Skip Security Review for:**
- Authentication/authorization
- Payment processing
- User data operations
- Admin functionality
- API endpoints with user input

## Problem Solving

**When stuck:** Stop. Check with `error-memory` first - we may have solved this before.

**When uncertain about architecture:** "Let me have the architect design this before implementing."

**When encountering an error:**
1. Orchestrator checks `error-memory` for known solutions
2. If new, research and solve
3. Log solution to `error-memory` for future reference

**When choosing approaches:** "I see approach A (simple) vs B (flexible). Which do you prefer?"

**When implementing security-sensitive features:** Always involve `security-auditor` - security is not optional.

Your redirects prevent over-engineering. When uncertain, the orchestrator will clarify or research before proceeding.

## Testing Strategy

The `test-engineer` agent handles comprehensive test coverage:

**Match testing approach to code complexity:**
- Complex business logic: Write tests first (TDD)
- Simple CRUD operations: Write code first, then tests
- Security-critical features: Extensive edge case and attack scenario tests
- Hot paths: Add benchmarks after implementation

**Test Coverage Includes:**
- Unit tests - Pure functions, business logic, utility functions
- Integration tests - API endpoints, database operations, service interactions
- Component tests - React components, user interactions, form validation
- Edge cases - Boundary conditions, errors, invalid inputs, race conditions
- Security tests - Injection attacks, auth bypass, data exposure attempts

**Always run tests before committing** - The orchestrator ensures this in the validation phase.

**Performance rule:** Measure before optimizing. No guessing.

## Progress Tracking

- **TodoWrite** for task management during implementation
- **Clear naming** in all code and commits
- **Agent coordination** visible through orchestrator updates

Focus on maintainable solutions over clever abstractions.

## Documentation & Library Research

### Context7 MCP

Pulls up-to-date, version-specific documentation directly from source repositories.

**When to use:**
- Starting work with unfamiliar libraries
- Verifying API changes between versions
- Finding idiomatic usage patterns
- Getting official code examples

**Workflow:**
1. `research-agent` resolves library name to Context7 ID
2. Fetches documentation with optional topic focus
3. Returns version-specific docs with real code examples

**Benefits:**
- Always current (pulls from source, not cached snapshots)
- Version-specific (matches your package.json versions)
- Includes real code examples from official repos
- Reduces hallucination risk with authoritative sources

**Example:**
```
"Let me check the latest Next.js 14 docs for Server Actions"
→ research-agent uses Context7: /vercel/next.js
→ Returns official Server Actions documentation with examples
```

### Error Memory

Searchable log at `docs/errors-and-fixes.md` of every error encountered and solved.

**Automatic workflow:**
1. Hit an error? Orchestrator checks error-memory first
2. Found solution? Apply it immediately
3. New error? Debug, solve, then log to error-memory
4. Future developers (or you) never solve it again

**What gets logged:**
- Error message and context
- Root cause analysis
- Step-by-step solution
- Prevention tips
- Related errors

**What doesn't:**
- Typos or syntax errors (obvious fixes)
- Incomplete code errors
- Well-documented errors with official solutions

## Quick Agent Reference

**You don't need to memorize this - the orchestrator decides automatically. But for reference:**

| Situation | Agent(s) Involved | Sequence |
|-----------|------------------|----------|
| Vague request | `requirements-clarifier` | First |
| Unfamiliar tech | `research-agent` | First |
| New feature | `architect` → `database-agent` → `backend-developer` → `frontend-developer` → `test-engineer` → `code-reviewer` → `security-auditor` (if sensitive) → `documentation-agent` | Sequential with parallel steps |
| Bug fix | Appropriate developer → `test-engineer` (regression test) | Sequential |
| Code review | `code-reviewer` → `security-auditor` (if sensitive) | Parallel |
| Auth/Payment | `architect` → Implementation agents → `security-auditor` (mandatory) → `test-engineer` | Sequential |
| Documentation | `documentation-agent` | Final step |
| Recurring error | `error-memory` (check first, log after solving) | Always check first |

**Golden Rule:** Let the orchestrator coordinate. It knows the right sequence and when to parallelize for maximum efficiency.

## What Makes This Work

**Trust the system:**
- Orchestrator knows agent capabilities and sequencing
- Specialists are experts in their domains
- Agents collaborate automatically
- Quality is built-in, not bolted-on

**Provide guidance:**
- Give clear direction on goals and priorities
- Make architectural decisions when presented with trade-offs
- Provide feedback on agent outputs
- Redirect when approach isn't working

**Stay in flow:**
- Don't micromanage agent selection
- Trust specialist recommendations
- Focus on "what" not "how"
- Let agents handle implementation details

The best partnership is one where you guide direction while the team handles execution. The orchestrator ensures specialists work together seamlessly to deliver high-quality results efficiently.
