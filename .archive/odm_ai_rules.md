# ODM v11 - AI Agent Rules

**Language-Agnostic Tooling**

**To the AI Agent:** This protocol is language-agnostic.

- Adapt tools to project's tech stack
- **Python**: `pytest`, `black`, `flake8`
- **Node.js**: `jest`/`mocha`, `prettier`, `eslint`
- **Rust**: `cargo test`, `cargo fmt`, `clippy`
- **Go**: `go test ./...`, `gofmt`, `golint`
- Update `.pre-commit-config.yaml` to match stack

Your primary task is to ensure the *intent* of the checks (testing, formatting, secret scanning) is implemented for the correct language.

---

**AI Sandbox Awareness**

This workflow is designed for an AI operating in a sandboxed environment. The AI clones, works locally (where `pre-commit` hooks enforce rules), and pushes (where `GitHub Actions` provides final verification).

**Key Architectural Rules**

Follow these principles - scripts handle formatting/linting, you handle architecture and design decisions.

- **Single Source of Truth**: Read `ARCHITECTURE.md` at session start - it contains tech stack, structure, patterns, and all key decisions. Update it when making architectural changes.
- **Infrastructure First**: Establish repository, CI/CD, and environments early.
- **Modular Design**: Single responsibility per module (< 300 lines), separate layers (auth/api/db/services/utils).
- **Separation of Concerns**: Never mix business logic, data access, presentation, or configuration.
- **API Versioning**: Always use `/api/v1/` prefixes, RESTful methods, consistent error responses.
- **Environment Awareness**: No hardcoded values - use env vars and config files per environment.
- **Error Handling**: Explicit try/catch with logging, user-friendly messages, never expose internals.
- **Testing**: Maintain or improve test coverage with every change.
- **Documentation**: Document "why" not "what" - explain complex decisions and trade-offs.
- **Boy Scout Rule**: Leave code cleaner than you found it.

---

**The Core Principles (The Unskippable Rules)**

These are the foundational rules that prevent long-term AI errors. They are mandatory in **Enterprise Mode**.

1.  **🚨 The Session Independence Principle**: Start every session from zero trust. Read `ARCHITECTURE.md` and latest `CHANGELOG.md` entry before making any changes.
2.  **🏛️ Governance: The Project's Memory**: The `changelog.md` is add-only. 
3.  **🧪 The MVT (Minimally Viable Test) Principle**: Build the smallest possible skeleton of a feature first to validate the core architecture.
4.  **🔐 The Zero-Trust Secrets Principle**: Never hardcode secrets. Pre-commit hooks will detect and block them.   
---

**Testing and Validation**

To ensure the delivery of robust and reliable software, the AI agent MUST adhere to the following testing hierarchy. Each gate must pass before proceeding to the next.

1. Build Integrity Validation (Gate 1)

**Requirement**: Before any other tests are run, it must be proven that a deployable artifact can be successfully created from the source code. This catches syntax errors, missing dependencies, and other fundamental build issues immediately.

**Implementation**: To ensure a language-agnostic and consistent build environment, all projects MUST be containerizable via Docker.

- **Artifact**: Every project repository MUST contain a `Dockerfile` in its root directory.

```bash
# Test Docker build without pushing/deploying
docker build -t odm-build-test . >/dev/null 2>&1
```

2. Unit & Component Testing (Gate 2)

**Requirement**: After a successful build, all unit and component tests MUST pass. These tests verify the correctness of individual functions, classes, and modules in isolation.

3. System-wide End-to-End Testing (Gate 3)

**Requirement**: Once the components are verified, system-wide E2E tests MUST be run to ensure that all integrated parts of the application function together as expected, simulating real-world user scenarios.