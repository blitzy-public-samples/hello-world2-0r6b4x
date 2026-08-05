# Enterprise Adoption Readiness Assessment

## Scope and Method

**Repository:** `hello-world2` — a two-package repository containing a React + TypeScript single-page application (`src/web/`) and a newly added minimal Express service (`src/backend/`).

**Branch assessed:** `blitzy-e3647160-80f3-4cae-8f4c-61467fbd65fc`

**Commit assessed (HEAD):** `47c6508a3576d89bf89edbb93e0ef307ac758019` (short `47c6508`)

**Tracked files at that commit:** 81 (`git ls-files`)

**Baseline and re-validation:** this assessment was first authored against commit `dcc5b7f4adc7791b09c527284d0d849c993e5a03` (short `dcc5b7f`, 80 tracked files) and has since been **re-baselined against `47c6508` and re-validated against it on 5 August 2026, with exactly one documented exception** — stated at the end of this paragraph and repeated in the same terms wherever the claim it affects appears. `47c6508` is the commit that every `path:line` citation, every measured figure and every appendix transcript below now resolves against, save for that one exception. Exactly three paths differ between the two commits (`git diff --name-status dcc5b7f..HEAD`): root `README.md` (modified), `blitzy/documentation/Project Guide.md` (modified — a platform-generated artefact rewritten on each run, not edited by this assessment; see [W30](#w30--two-documents-named-project-guidemd-disagree-and-one-of-them-leaks-its-own-generator-prompt)), and this document itself (added — which is the whole of the 80 → 81 movement in the count above). Every other cited file is byte-identical across the two commits, so none of its citations was affected by the move; the claims carried by the three changed paths were re-measured and are recorded at their re-observed values — and for the regenerated guide, which the platform rewrites on every run, those values are recorded as date-stamped observations rather than as durable citations. **The one exception:** the unmerged update-branch list in [E17](#e17--unmerged-dependabot-branches) is reproducible only in a clone whose `origin` actually carries those branches, which this checkout does not, so it could not be re-executed here. It is carried forward from the original observation, is dated to that original observation of **4 August 2026**, is labelled *static inspection*, and is the only claim in this document for which that is true. That date is the day this document's first revision was published, which is the most precise date the transcript can carry: the revision that captured it recorded no observation date of its own, so 4 August 2026 is stated as an upper bound rather than as a reading off a clock, and [E17](#e17--unmerged-dependabot-branches) says so.

`47c6508` names **the commit whose tree was analysed and re-validated**, not the commit that carries this file: a document that records the hash of the commit containing it cannot exist, so the commit publishing any revision of this document is necessarily a later one. That is expected and is not evidence drift. What *would* be drift — and what this revision corrected — is a citation whose target no longer says what the document claims it says.

**Line references:** every `path:line` citation below resolves against the tree at the re-validation commit `47c6508`. The six-line **Enterprise Adoption Readiness** pointer section is committed in root `README.md` at L157–L162, which makes that file 217 lines, so the citations into the part of it that sits below the insertion — L186, L191, L193, L194 and L195 — are written at their post-insertion numbers, and each of the five was re-verified line by line on 5 August 2026. One other cited file **has** changed between the two commits — the platform-regenerated `blitzy/documentation/Project Guide.md` — and it is deliberately exempt from the durability this section claims for everything else: because the platform rewrites it on every run, its size and its interior line numbers are recorded here only as **date-stamped observations**, never as citations expected to survive, and no range of it is relied upon (see [W30](#w30--two-documents-named-project-guidemd-disagree-and-one-of-them-leaks-its-own-generator-prompt) and the [cited file and line index](#e19--cited-file-and-line-index)). Apart from those two files — the pointer insertion in root `README.md` and this exempt generated guide — no file this document cites has been modified, so no other citation's numbering has moved.

**Revision 1 — runtime re-verification:** every runtime claim in this document was subsequently re-executed and checked against what the software actually does. Four descriptions were found to overstate or misattribute observed behaviour and have been corrected in place — [W5](#w5--the-spa-build-is-wired-to-rewrite-its-own-source-tree-including-in-ci), [W9](#w9--no-themeprovider-wraps-the-tree-so-the-spas-first-render-is-primed-to-throw), [W11](#w11--coverage-is-either-unenforceable-or-absent) and the `README.md` L121 row of [W28](#w28--root-readmemd-misdescribes-the-repository-in-seven-places). No application, dependency, workflow, test, configuration or infrastructure file was changed to accommodate them — only this document: the assessed commit, the `src/web` tree and every declared version are exactly as recorded above. The identifiers the revision introduced are **append-only**, and they span three distinct series rather than findings alone — two weaknesses ([W34](#w34--npm-start-does-not-start-the-dev-server-cannot-load-its-own-configuration), [W35](#w35--the-pages-own-content-security-policy-kills-the-development-bundle-before-react-executes)), one recommendation ([P0-15](#p0--make-it-green-and-reproducible-030-days)) and two appendix transcripts ([E20](#e20--spa-development-runtime-npm-start-the-csp-conflict-and-the-rendered-page), [E21](#e21--coverage-thresholds-and-the-validate-short-circuit)) — so every cross-reference published before the revision still resolves.

**Revision 2 — evidence re-baseline, 5 August 2026:** the document was re-pinned from `dcc5b7f` to `47c6508` and every command in [What was executed](#what-was-executed) that is reproducible from this checkout was re-run against the current tree — every one of them except [E17](#e17--unmerged-dependabot-branches)'s `git branch -a` branch list, which this checkout cannot reproduce and which is therefore carried forward and labelled *static inspection*. The great majority of asserted figures reproduced exactly and have been left byte-identical; only the values that had genuinely moved were corrected. Those were: the assessed commit and the tracked-file count (above, in [E1](#e1--repository-state-at-the-assessed-commit), in the [E19](#e19--cited-file-and-line-index) preamble and in the [Assessment metadata](#assessment-metadata)); the size, title and subject-matter claims about the regenerated `blitzy/documentation/Project Guide.md` (in [W30](#w30--two-documents-named-project-guidemd-disagree-and-one-of-them-leaks-its-own-generator-prompt), the [E1](#e1--repository-state-at-the-assessed-commit) diffstat, the [E19](#e19--cited-file-and-line-index) index row and the [Claims Deliberately Not Made](#claims-deliberately-not-made) row); the build-context size in [E12](#e12--docker-stage-resolution-and-build-context); the two Terraform provider point releases in [E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources); and two rows of [E20](#e20--spa-development-runtime-npm-start-the-csp-conflict-and-the-rendered-page) — the document-wide search for "Hello World" and the determinism statement — both of which re-running the browser observation proved needed narrowing rather than restating. [E15](#e15--declared-versions-versus-current-published-versions) was additionally extended to cover every declared dependency of both manifests instead of a subset. The point-in-time **external** facts were re-observed from the same publishers rather than carried over — the three GitHub Actions releases pages, the Node.js lifecycle sources, and the Express 5 and Jest 30 upgrade guides, with [E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources) recording the re-reading source by source, including the one corroborating source that was deliberately not re-fetched and why nothing depends on it alone — and every one of them reconciled unchanged apart from the two provider point releases named above; the one figure that changes with the calendar rather than with a source, the days-since-Node-16-end-of-life count in [W4](#w4--the-declared-runtime-has-been-out-of-support-for-nearly-three-years-and-diverges-from-the-runtime-actually-used), was recomputed rather than copied. **What this revision did and did not change, stated exactly:** no *finding* was added, removed, renumbered or remediated — the strength, weakness, risk and modernization-opportunity inventories are the same 14, 35, 16 and 27 items as before — and no declared version was changed. One *recommendation* **was** added: [P0-16](#p0--make-it-green-and-reproducible-030-days), a Dependabot-hardening step placed after P0-10, which raises the roadmap from 38 steps to the 39 that [Assessment metadata](#assessment-metadata) now records. And this document itself was modified, which is the point of a revision: what was **not** modified is any application, dependency, workflow, test, configuration or infrastructure file — those path-scoped diffs are empty, as [What was deliberately not done](#what-was-deliberately-not-done) sets out. Every cross-reference published before this revision therefore still resolves.

**Revision 3 — evidence-accuracy pass, 5 August 2026:** a review of this document's own evidence found nine defects in it, and this revision corrects all nine. No application, dependency, workflow, test, configuration or infrastructure file was changed to accommodate them — only this document, whose own evidence was what the review examined; no finding, recommendation or appendix identifier was added, removed or renumbered, so the strength, weakness, risk, modernization-opportunity and roadmap inventories stand at the same 14, 35, 16, 27 and 39 items; and every cross-reference published before this revision still resolves. The corrections were: (1) the **complete** [E15](#e15--declared-versions-versus-current-published-versions) currency matrix — all 33 declared packages of both manifests — was re-observed at 22:10 UTC, immediately before publication, and the one row that had moved (`web-vitals` 6.0.1 → 6.1.0, published to the registry earlier the same day) is now recorded at its re-observed value in [E15](#e15--declared-versions-versus-current-published-versions) and [M15](#frontend-stack-currency), replacing the previous revision's assertion that no row had changed — an assertion that was true when it was written and had stopped being true by the time it was published, which is exactly the failure mode honesty rule #3 exists to catch; (2) every externally sourced version fact now carries a clickable link to its publisher, so the two [E15](#e15--declared-versions-versus-current-published-versions) tables gained a **Source** column and the non-npm rows in [E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources) became links rather than bare host paths; (3) [W33](#w33--eight-dependency-update-branches-are-open-and-unmerged), [R9](#risk-register) and [P0-16](#p0--make-it-green-and-reproducible-030-days) were corrected to reflect Dependabot's documented default open-pull-request limit, which caps the queue rather than letting it grow without bound; (4) a [W26](#w26--further-terraform-defects-behind-the-initialisation-failure-static-inspection) row asserted that neither Terraform environment declares the variables it references, which reading the two files disproves — it is replaced by the defect those files actually carry, and [P1-11](#p1--make-it-operable-and-secure-3090-days) and the [E19](#e19--cited-file-and-line-index) index were aligned to it; (5) [R1](#risk-register) and [R15](#risk-register) described the build's source-mutation hazard in the present tense, contradicting [W5](#w5--the-spa-build-is-wired-to-rewrite-its-own-source-tree-including-in-ci) and [E21](#e21--coverage-thresholds-and-the-validate-short-circuit), which prove it latent; both now match the evidence; (6) the carried-forward [E17](#e17--unmerged-dependabot-branches) branch list now states its original observation date rather than merely promising one; (7) [M1](#runtime-and-platform)'s file count was corrected from nine to the eight files it enumerates; (8) an arithmetic slip in [E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources) that overstated the AWS provider pin's major gap as double its true size was corrected to the two majors [R14](#risk-register) already recorded, and the action-pin figures beside it were disambiguated; and (9) honesty rule #7 and the [Evidence Appendix](#evidence-appendix) preamble were narrowed from a blanket claim that no environment-variable value appears to the accurate claim that no *sensitive or user-provided* one does — the handful that do appear are the repository's own committed, non-sensitive values, and they are quoted deliberately because the reproducibility of several transcripts depends on them.


**Question this document answers:** if an enterprise engineering organisation adopted this repository as-is — took ownership of it, put it in a regulated delivery pipeline, and ran it in production — what would it find? The assessment therefore judges the repository against enterprise expectations for reproducible builds, enforced quality gates, operability, security posture, deployability, documentation accuracy and governance. It does **not** judge the repository against its own origin brief, which asked for something deliberately much smaller: *"build me a hello world webpage. please make it simple, do as little as possible. Use reactjs and typescript as the tech stack."* (`documentation/Input Prompt.md`). That gap between origin intent and enterprise expectation is the central theme of everything below.

### What was inspected

| Area | Files read |
|---|---|
| Backend service (the feature delivered on this branch) | `src/backend/server.js`, `src/backend/package.json`, `src/backend/server.test.js`, `src/backend/.env.example`, `src/backend/README.md` |
| SPA source | `src/web/src/index.tsx`, `App.tsx`, `App.test.tsx`, `setupTests.ts`, `reportWebVitals.ts`, `react-app-env.d.ts`, `components/HelloWorld/*`, `components/index.ts`, `config/*`, `hooks/*`, `styles/*`, `types/index.ts`, `utils/*`, `public/*` |
| SPA toolchain | `src/web/package.json`, `tsconfig.json`, `webpack.config.ts`, `jest.config.ts`, `babel.config.ts`, `.eslintrc.json`, `.eslintignore`, `.prettierrc`, `src/web/README.md` |
| CI / automation | `.github/workflows/build.yml`, `test.yml`, `deploy.yml`, `.github/dependabot.yml` |
| Governance | `.github/CODEOWNERS`, `.github/pull_request_template.md`, `.github/ISSUE_TEMPLATE/bug_report.md`, `.github/ISSUE_TEMPLATE/feature_request.md`, `LICENSE`, `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` |
| Infrastructure as code | `infrastructure/docker/Dockerfile`, `docker-compose.yml`, `nginx.conf`, `.dockerignore`; `infrastructure/terraform/{main,variables,outputs,providers,versions}.tf`, `modules/{static-hosting,cdn}/*`, `environments/{dev,prod}/*` |
| Repository configuration | `.gitignore` |
| Documentation | root `README.md`, `documentation/Input Prompt.md`, `documentation/Product Requirements Document (PRD).md`, `documentation/Project Guide.md`, `documentation/Technical Specifications.md`, `blitzy/documentation/Project Guide.md` |
| This deliverable | `documentation/Enterprise Adoption Readiness Assessment.md` — the only file this assessment adds to the repository, and therefore the whole of the 80 → 81 movement in the tracked-file count above. It is read solely for internal consistency (heading anchors, the [cited file and line index](#e19--cited-file-and-line-index), and the finding inventory in the [Assessment metadata](#assessment-metadata)); it is never treated as evidence about the repository. |

### What was executed

Every command below was run against this checkout — with the one documented exception explained in the next paragraph — and its real output is reproduced in the [Evidence Appendix](#evidence-appendix). No command was permitted to modify a tracked file, and `git status --porcelain` was re-checked after each one to confirm none did.

Every command in this table that is reproducible from this checkout — that is, every one of them except the `git branch -a` row explained below — was re-run in full at the re-validation commit `47c6508` on 5 August 2026, and each reproduced the counts, exit codes, identifiers and message text recorded in the appendix; where a re-run produced a different *number*, the number printed in this document is the re-observed one. Captured transcripts keep the wall-clock timings of the run that produced them, so a timing inside a fenced transcript may differ from a later run's while every count around it matches — timings are a property of the machine, not a finding. The one row that cannot be reproduced from every checkout is `git branch -a`: it lists the update branches only in a clone whose origin carries them, which this checkout does not, so [E17](#e17--unmerged-dependabot-branches) records its own precondition, is labelled *static inspection*, and is carried forward from the original observation rather than re-executed and restated. It is the single exception to the re-run claim that opens this paragraph, and to the equivalent claims in **Baseline and re-validation** and **Revision 2** above.

| Command | Working directory | Purpose |
|---|---|---|
| `git ls-files`, `git diff origin/main...HEAD --stat` (the `main...HEAD` form only works in a clone that has a local mainline ref — see [E1](#e1--repository-state-at-the-assessed-commit)), `git branch -a`, `git check-ignore -v --no-index` | repository root | Inventory, branch backlog, ignore-rule verification |
| `npm test` | `src/backend` | Backend suite result |
| `npm audit --json` | `src/backend`; and `src/web`, after `npm install --package-lock-only --ignore-scripts` there, because `npm audit` needs a lockfile and none is committed | Advisory posture of **both** dependency trees |
| `node server.js` + HTTP requests to `/` and `/good-evening`, with and without a `PORT` override | `src/backend` | Endpoint behaviour and configurability |
| `npx tsc --noEmit` | `src/web` | SPA type/parse gate |
| `npx eslint src --ext .ts,.tsx --no-fix` | `src/web` | SPA lint gate (check-only; the project's own `lint` script rewrites files) |
| `npx jest --watchAll=false --ci` | `src/web` | SPA test gate |
| `npm ci --dry-run` | `src/web`, and a scratch directory holding only the *tracked* manifest | Reproducibility of a clean install, in the working tree and in a simulated fresh clone |
| `npm view <package> version` | — | Current published version of each declared dependency |
| `docker compose config`, `docker build --target production` | repository root | Compose validity and Docker stage resolution |
| `terraform init -backend=false`, `terraform fmt -check -recursive` | a **copy** of `infrastructure/terraform` | Terraform configuration validity and formatting |
| `npx webpack serve --mode development --port 3000` (the `start` script's non-interactive equivalent) | `src/web` | Whether the SPA development server starts at all |
| `npx webpack serve --env mode=development --no-open --no-client-overlay`, then the served page loaded in Chrome | `src/web` | What the SPA actually renders, and what the browser console reports while rendering it |
| `npm test -- --watchAll=false --ci` — the repository's **own** `test` script, which carries `--coverage` | `src/web` | Whether the declared coverage thresholds are evaluated |
| `npx tsc --noEmit`, chained so the shell reports which branch it takes | `src/web` | Whether `prebuild` → `validate` actually reaches `lint --fix` |

### What was deliberately **not** done

- **Nothing was fixed, corrected, upgraded or refactored.** This is an assessment, not a remediation. Every finding below is reported and left in place. `git diff` for `src/backend`, `src/web`, `.github`, `infrastructure`, `.gitignore`, `LICENSE`, `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` and the pre-existing `documentation/*.md` files is empty, and was re-checked path by path at the re-validation commit and found empty again. `blitzy/documentation/Project Guide.md` *does* differ between `dcc5b7f` and `47c6508`, but that file is regenerated by the platform on every run and was not touched by this assessment — which is precisely why every measurement of it below carries the date it was taken.
- **No dependency, script, endpoint, middleware or test was added**, and no declared version was changed anywhere. Where this document recommends an upgrade, that recommendation exists as prose only.
- **No documentation discrepancy was corrected.** The inaccurate statements found in `README.md`, `SECURITY.md`, `documentation/Technical Specifications.md`, `documentation/Product Requirements Document (PRD).md` and `documentation/Project Guide.md` are named — with path and line — and left exactly as they are.
- **Terraform and Docker were exercised without touching `infrastructure/`.** Terraform ran against a throwaway copy of the tree; the Docker probe produced no retained image.
- **The SPA development server was exercised without modifying it.** No shipped script can load `webpack.config.ts` ([W34](#w34--npm-start-does-not-start-the-dev-server-cannot-load-its-own-configuration)), so observing the rendered page required two read-only environment variables (`TS_NODE_COMPILER_OPTIONS`, `TS_NODE_TRANSPILE_ONLY`) and webpack's own `--env mode=development` flag. No source file was touched and the served bundle was compiled from the committed source, so the rendered evidence is faithful — but **no one can reproduce it with the repository's own commands** until [W3](#w3--the-webpack-configuration-references-itself-before-it-is-assigned-and-writes-to-a-directory-the-clean-script-does-not-delete) and [W34](#w34--npm-start-does-not-start-the-dev-server-cannot-load-its-own-configuration) are fixed. This invocation is not equivalent to `npm start`, and where that difference matters the finding says so.

### Method and honesty rules applied

1. Every claim is traceable to one of three things: a file path in this repository (with line numbers where a specific line matters), a command whose real output appears in the appendix, or a cited authoritative external source. Facts about the world outside this repository — runtime support lifecycles, current published versions, framework upgrade requirements — necessarily rest on the third category, and every one of them carries a clickable link to its publisher in the appendix so it can be re-checked at the source: one per package in the two [E15](#e15--declared-versions-versus-current-published-versions) tables, one per action in [E15a](#e15a--github-actions-declared-versions-versus-current-releases), and one per lifecycle, upgrade-guide and non-npm artefact source in [E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources). No external fact is asserted in this document without such a link.
2. No CVE identifier, metric, version, date or path is asserted from memory. Current versions of **npm packages** come from `npm view`, and each is linked to that package's own `latest` document on the npm registry so the reading can be reproduced at the source, independently of the command (see [E15](#e15--declared-versions-versus-current-published-versions)). Because `npm view` structurally cannot reach an artefact that is not an npm package, the current majors of the **GitHub Actions** the workflows use were read from each action repository's own releases page — the tag carrying the **Latest** badge, never a third-party release-tracking mirror (see [E15a](#e15a--github-actions-declared-versions-versus-current-releases)) — and the current heads of the **Terraform providers** were resolved from the Terraform Registry by `terraform init` against an unconstrained `required_providers` block in a throwaway configuration outside this repository, then re-confirmed against that registry's own provider API; every one of those readings, the mechanism that produced it and the date it was taken is recorded in [E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources), with a link to the publisher beside it. No currency claim in this document is inferred from a Dependabot branch name. The Node.js end-of-life dates come from the Node.js project's own announcement and release schedule, corroborated by a vendor announcement, and the Express 5 and Jest 30 upgrade requirements come from those projects' own upgrade guides — both also recorded in [E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources).
3. Externally sourced facts are point-in-time. Every version and lifecycle statement in this document carries or inherits an explicit observation date, and should be re-checked against the linked source before any of it is acted upon. This is not a formality: a registry head can move inside a single calendar day, and one did while this document was being finalised (`web-vitals`, [E15](#e15--declared-versions-versus-current-published-versions)), which is why the observation window is recorded to the hour where the day alone would be ambiguous.
4. Where a plausible-sounding claim could not be verified, it is either omitted or explicitly labelled. [Claims Deliberately Not Made](#claims-deliberately-not-made) lists every such case and why.
5. Findings derived from reading configuration rather than from running a validator are labelled *static inspection*.
6. Claims about what has or has not happened in this repository's history are avoided. A static review of a single commit can establish what the current tree does and does not contain; it cannot establish what was once run. Findings are therefore stated as properties of the tree as assessed.
7. No secret value, no credential, and no absolute local path appears anywhere in this document; all paths are repository-relative. No **sensitive or user-provided** environment-variable value appears either. A small number of **non-sensitive** environment-variable values are quoted deliberately, because a finding or a transcript is unreproducible without them, and they are named here so the claim is checkable rather than blanket: the committed `PORT=3001` from `src/backend/.env.example` and the `4000` used to prove the override ([S6](#s6--port-is-configurable-and-the-contract-is-documented), [E5](#e5--endpoint-behaviour-headers-and-the-port-override)); the `NODE_ENV` values the workflows set for themselves ([W13](#w13--the-backend-has-zero-ci-coverage)); the unset `REACT_APP_VERSION=${APP_VERSION}` reference in `docker-compose.yml` and Compose's own "not set" message about it ([W23](#w23--the-compose-file-cannot-resolve-its-own-build-inputs)); and the two read-only `TS_NODE_*` values required to bring the dev server up at all ([E20](#e20--spa-development-runtime-npm-start-the-csp-conflict-and-the-rendered-page)). Every one of those is either already committed to this repository or a value this assessment supplied itself; none is a secret, a token, a credential or anything supplied by a user.

All five requested sections follow, in order: [Strengths](#strengths), [Weaknesses](#weaknesses), [Risks](#risks), [Modernization Opportunities](#modernization-opportunities), [Recommended Next Steps](#recommended-next-steps).

## Executive Summary

### Verdict

**Not ready for enterprise adoption in its current state.** The repository is an excellent *teaching artefact* and a credible *starting point*, but it is not an adoptable enterprise asset today. The gap is not conceptual — the intended architecture is sound and the governance scaffolding is unusually complete for a project of this size. The gap is that almost none of the scaffolding actually executes.

Three facts drive the verdict, and each is reproducible from this checkout:

1. **The build is not reproducible and the pipeline cannot be green.** No lockfile is committed (`.gitignore` L88–L89), yet all three workflows run `npm ci` against `cache-dependency-path: src/web/package-lock.json` — a path that cannot exist in a fresh clone. Simulating that fresh clone reproduces the failure exactly: `npm error code EUSAGE … The npm ci command can only install with an existing package-lock.json`. Even past that step, `npx tsc --noEmit` reports **13 errors**, `npx eslint src --ext .ts,.tsx --no-fix` reports **92 problems (88 errors, 4 warnings)**, and `npx jest --watchAll=false --ci` reports **2 suites failed, 0 tests run**. A first-day adopter therefore inherits a red pipeline — precisely, of the three workflows, the two that can trigger (`build.yml` and `test.yml`, both on push and pull request to `main`) fail, and the third never runs at all: `deploy.yml` L6 waits on a workflow named `"Build"`, which does not exist, so it is not a failing run but an absent one, and it would fail too if it were made triggerable.
2. **The runtime contract has been out of support for nearly three years, and nothing in the repository would notice.** Both manifests declare `engines.node >= 16.0.0`, all three workflows pin `node-version: [16.x]`, and `infrastructure/docker/Dockerfile` L2 builds on `node:16-alpine`. Node.js 16 reached end of life on **11 September 2023** — **1,059 days**, or two years and roughly eleven months, before this assessment's observation date of 5 August 2026 (the third anniversary falls on 11 September 2026). Meanwhile the runtime that actually executed this assessment is **Node v22.23.2 / npm 10.9.8** — so the documented contract and the tested reality are different major versions three lines apart, and no `engine-strict`, CI matrix entry or version check reconciles them.
3. **What was shipped has no operational surface and no deployment path.** The Express service in `src/backend/server.js` is 7 lines and correct for what it claims, but it has no logging, no health or readiness endpoint, no graceful shutdown, no error-handling or 404 middleware, no `helmet`, no CORS policy and no rate limiting. It appears in no workflow (all three set `working-directory: src/web`), in no container image (the `Dockerfile` builds the SPA only), in no Terraform resource, and in no `CODEOWNERS` rule of its own — it is matched only by the global `*` default at `CODEOWNERS` L1, whose two owners are GitHub's documentation-example handles. And the deployment workflow that does exist can never fire: `deploy.yml` L6 waits on `workflows: ["Build"]` while `build.yml` L1 declares `name: Build and Test`.

The most important structural observation is a mismatch of *claims* rather than of code. The repository's documentation describes a production-ready, WCAG-compliant, CSP-protected, HTTPS-enforced system with 99.9 % availability targets. Its own `documentation/Project Guide.md` L82–L93 simultaneously lists *Security Headers*, *SSL Certificate*, *Performance Monitoring* and *Environment Variables* as **Pending**. Both statements are committed to the same repository. For an enterprise adopter, that inconsistency is more dangerous than any single defect, because it invites the adopter to skip controls they believe are already in place.

### Rating vocabulary

Ratings below are assigned per dimension using this scale. A dimension is rated on what is **verifiably true in this checkout**, not on what the documentation asserts.

| Rating | Meaning |
|---|---|
| **Strong** | Meets enterprise expectations as-is; no remediation required before adoption. |
| **Adequate** | Fundamentally sound; needs additive hardening but nothing is broken. |
| **Weak** | Present but materially incomplete; adoption requires significant work. |
| **Critical** | Present in name only, or actively misleading; must be addressed before adoption. |
| **Absent** | The capability does not exist in the repository at all. |

### Dimension scorecard

| # | Dimension | Rating | Basis (verifiable in this checkout) |
|---|---|---|---|
| 1 | Architecture | **Adequate** | Clean two-package separation (`src/web/`, `src/backend/`) with zero cross-imports; the service is small, readable and correctly exports its app. No shared contract, no root manifest, no workspace tooling. |
| 2 | Build & Release Reproducibility | **Critical** | No lockfile committed (`.gitignore` L88–L89); `npm ci` fails in a simulated fresh clone; `src/web` `build` script passes `--optimize-minimize`, removed in webpack 5; `webpack.config.ts` L180 references `config` inside its own initializer; `clean` deletes `dist` while webpack writes to `build`. |
| 3 | Quality Gates & Testing | **Weak** | Backend: 2/2 pass, but no lint, no format check, no coverage configuration. SPA: 13 type/parse errors, 92 lint problems, 2 of 2 suites fail to load, `npm start` does not start, and its declared 100 % coverage thresholds (`jest.config.ts` L28–L35) are evaluated on every `npm test` and always fail at 0 %. `prebuild` is wired to run `lint --fix`, so a build that reached it would rewrite source — today the chain stops at `type-check` first. |
| 4 | Security | **Weak** | Genuine positives: `app.disable('x-powered-by')`, zero committed secrets, zero `npm audit` advisories in `src/backend`, no data store. Against that: `src/web` reports **29 advisories, 14 of them high**, across its 1576 resolved packages ([E4b](#e4b--spa-advisory-posture-srcweb)); no `helmet`/CORS/rate limiting; `npm audit` in CI is `continue-on-error: true`; no SAST, no secret scanning, no SBOM; and every HTTP security header is either declared in a container that cannot start or as a `<meta>` tag browsers do not honour. |
| 5 | Operability & Observability | **Absent** | No structured logging, no health or readiness endpoint (`GET /health` returns 404), no graceful `SIGTERM` handling, no request IDs, no metrics, no tracing, no alerting. `reportWebVitals.ts` L44–L48 pipes web-vitals to `console.log` and nowhere else. |
| 6 | CI/CD | **Critical** | Three workflows, none of which can succeed: `build.yml` and `test.yml` trigger and fail, while `deploy.yml` cannot trigger at all because it waits on a workflow name that does not exist — and it calls `actions/deploy-pages@v2` with no artifact-upload step, so it would fail if it did. Zero backend coverage; actions pinned to `checkout@v3`, `setup-node@v3`, `deploy-pages@v2`. |
| 7 | Infrastructure & Deployment | **Critical** | `docker build --target production` fails with *target stage "production" could not be found*; `nginx.conf` is a full server config copied into `conf.d/`, where its top-level directives are illegal; `terraform init -backend=false` fails with 7 errors; the backend has no image and no deployment target at all. |
| 8 | Documentation Accuracy | **Critical** | Broken badge URLs (`README.md` L3–L4); wrong toolchain (L25 "Create React App 5.x", L28 "Jest 27.x"); a directory layout (L97–L107) that does not match the tree; security claims (L191, L193) contradicted by both the code and the repository's own pending-tasks list; `documentation/Technical Specifications.md` L304 and L494 still assert the project has no API after an API shipped. |
| 9 | Governance & Compliance | **Weak** | The full file set exists (MIT `LICENSE`, `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `CODEOWNERS`, issue templates) — but every `CODEOWNERS` owner is a placeholder, the security contact is `security@organization.com`, `SECURITY.md` L153 ends with the literal text `Last Updated: [Current Date]`, and `.github/pull_request_template.md` is 0 bytes. |
| 10 | Dependency Currency | **Weak** | Dependabot now covers `/src/web`, `/src/backend` and GitHub Actions — a real strength — but 8 update branches sit unmerged, five of them in the `/src/web` npm ecosystem, which is exactly Dependabot's default open-pull-request allowance, so that ecosystem can raise no further version-update pull request until one is merged or closed ([W33](#w33--eight-dependency-update-branches-are-open-and-unmerged)). Meanwhile the declared stack trails current published versions by whole majors (React 18 vs 19, styled-components 5 vs 6, TypeScript 4.9 vs 7, ESLint 8 vs 10, Prettier 2 vs 3, Express 4 vs 5, Jest 29 vs 30). |

**Aggregate across the ten dimensions:** 0 Strong · 1 Adequate (#1) · 4 Weak (#3, #4, #9, #10) · 4 Critical (#2, #6, #7, #8) · 1 Absent (#5).

The four Critical ratings — reproducibility, CI/CD, infrastructure and documentation accuracy — are all *pipeline-and-truth* problems rather than product problems, which is encouraging: they are largely mechanical to fix, and none of them requires re-architecting the application. The single Absent rating (operability) is the one that requires genuinely new code, and it is the one an enterprise operations function would insist on first.

## Strengths

These are the things an adopting organisation would keep. Each is stated at the size it actually is — none is inflated, and several are deliberately narrower than the repository's own documentation claims.

### S1 — The Express entry point is minimal, readable and correct

`src/backend/server.js` is seven lines end to end. It requires Express, creates the app, registers two routes, exports the app, and listens only when run directly. There is nothing to misread and nothing dead. For a service whose entire contract is two static strings, this is exactly the right amount of code, and it is a genuine asset: a reviewer can hold the whole service in their head.

### S2 — `x-powered-by` is explicitly disabled

`src/backend/server.js` L3 calls `app.disable('x-powered-by')`. Verified at runtime: the `X-Powered-By` response header is absent from both endpoints. This is a small, deliberate, correctly-placed hardening step — framework fingerprinting is removed by configuration rather than by a proxy rewrite, which is the right layer for it.

### S3 — The app is exported with a guarded `listen`, so tests need no separately started service

`src/backend/server.js` L6–L7: `module.exports = app;` followed by `if (require.main === module) app.listen(...)`. This is the idiomatic Express testability pattern, and it is what lets `server.test.js` import the app and exercise it without starting the service separately: no `npm start` beforehand, no fixed port to reserve, no readiness wait, and no teardown step in the test file.

To be precise about the mechanism, because it is often described loosely: Supertest does bind a socket — it simply manages one itself. Reading the installed copy, `supertest@7.2.2` wraps a bare Express handler with `http.createServer(app)` (`lib/test.js` L35–L41) and then, if the app is not already listening, calls `app.listen(0)` (L63), which asks the operating system for an arbitrary free port; it addresses the request at `127.0.0.1` on whatever port was assigned (L67–L69) and closes the server when the assertion completes (L143). So the guarantee the guarded `listen` provides is not "no port is opened" but the more useful one: **the configured application port is never bound by the test run**, the listener's lifetime is scoped to the request, and cleanup is the library's responsibility rather than the test author's. Tests cannot collide with a running instance or with each other over port `3001`, and no test needs a `afterAll` hook to release it. Many far larger codebases get this wrong by importing a module that calls `listen` unconditionally; this one does not.

### S4 — The backend test suite exists and passes

`npm test` in `src/backend` exits 0: `Test Suites: 1 passed, 1 total`, `Tests: 2 passed, 2 total`, in 0.773 s. `src/backend/server.test.js` asserts both status code and exact body for both routes (`.expect(200, 'Hello world')` and `.expect(200, 'Good evening')`). Asserting the exact body rather than a substring is the stronger choice and is what makes the suite a real regression guard for the two contracts that matter.

### S5 — Both endpoints behave exactly as documented

Verified against a running process: `GET /` returns HTTP 200 with the body `Hello world` (11 bytes) and `GET /good-evening` returns HTTP 200 with the body `Good evening` (12 bytes). These match `src/backend/README.md` L24–L27 and root `README.md` L131–L136 character for character. Documentation-to-behaviour fidelity is rare in this repository (see [Weaknesses](#weaknesses)); here it holds.

### S6 — Port is configurable, and the contract is documented

`src/backend/server.js` L7 reads `process.env.PORT || 3001`, and `src/backend/.env.example` documents the single variable as `PORT=3001`. Verified: with `PORT` set to `4000`, both endpoints served correctly on that port. Externalised configuration with a committed `.env.example` and a git-ignored real `.env` (`.gitignore` L15–L20) is the correct pattern, and choosing 3001 keeps the service clear of the SPA dev server on 3000.

### S7 — Both manifests are `private` and declare `engines`

`src/backend/package.json` L4 and `src/web/package.json` L4 both set `"private": true`, which prevents accidental publication to the public npm registry — a real and frequently-missed safeguard for internal code. Both also declare `engines` (`node >= 16.0.0`, `npm >= 8.0.0`), so a runtime contract is at least *stated*. That the stated version is end-of-life is a weakness (see [W4](#w4--the-declared-runtime-has-been-out-of-support-for-nearly-three-years-and-diverges-from-the-runtime-actually-used)); that a contract is declared at all is a strength.

### S8 — Clean package separation with no cross-coupling

`src/backend/` and `src/web/` are independent npm packages with independent dependency trees. `src/backend/server.js` imports nothing from `src/web/`, and no file under `src/web/src/` imports anything from `src/backend/`. The two run as separate processes. This means the SPA's substantial toolchain problems cannot break the service, and the service can be extracted, containerised or replaced without touching the frontend — the correct starting shape for a service that may later grow.

### S9 — Dependency automation covers every package and the workflows themselves

`.github/dependabot.yml` declares three `updates` entries: npm for `/src/web` (L6–L36), `github-actions` for `/` (L39–L48) and npm for `/src/backend` (L51–L65). Covering GitHub Actions alongside application dependencies is a step many teams skip, and the `/src/web` entry is thoughtfully configured with `allow` rules for both production and development dependencies, `versioning-strategy`, labels, a conventional-commit prefix, and three logical groups (`react`, `typescript-eslint`, `testing`) so related bumps arrive as one reviewable PR. The newly added `/src/backend` entry means the service will not silently rot.

### S10 — A complete governance file set is present

The repository ships an MIT `LICENSE`, `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `.github/CODEOWNERS`, and both issue templates (`.github/ISSUE_TEMPLATE/bug_report.md`, `feature_request.md`). Structurally this is what an enterprise intake checklist looks for, and having the files in place means the remaining work is *filling them in* rather than authoring them from scratch. The contents need attention ([W20](#w20--codeowners-relies-on-generic-placeholder-handles-and-assigns-the-backend-no-dedicated-owner), [W21](#w21--securitymd-promises-a-security-programme-the-repository-does-not-have)), but the scaffolding is genuinely valuable.

### S11 — Infrastructure is committed as code, not as tribal knowledge

`infrastructure/` contains 4 Docker artefacts and 13 Terraform files describing a static-hosting and CDN topology, with separate `dev` and `prod` environment directories. The intent is legible: S3 static hosting behind CloudFront with Cloudflare DNS, encryption, versioning and logging enabled, a public-access block, TLS 1.2 minimum, and a CloudFront response-headers policy. The configuration does not currently validate ([W25](#w25--terraform-does-not-initialise), [W22](#w22--the-container-image-cannot-be-built-and-could-not-start-if-it-were)), but the *design* is recorded in the repository rather than in someone's head, which is a materially better starting position than an undocumented console-built environment.

### S12 — TypeScript, ESLint and Prettier are all configured for the SPA

`src/web/tsconfig.json` enables `strict`, `forceConsistentCasingInFileNames`, `noFallthroughCasesInSwitch` and `isolatedModules` — a genuinely strict baseline rather than a permissive one. `src/web/.eslintrc.json` layers `eslint:recommended`, `plugin:@typescript-eslint/recommended`, `plugin:react/recommended` and `plugin:react-hooks/recommended`, then adds roughly 30 explicit rules including `@typescript-eslint/no-explicit-any: error` and a `naming-convention` policy. `.prettierrc` pins formatting. The *standards* an enterprise would want to impose are already written down; the problem is enforcement, not intent.

### S13 — No secret, credential or data store exists anywhere

`git ls-files` filtered for `.env`, `package-lock.json` and `yarn.lock` returns nothing; the only environment file tracked is `src/backend/.env.example`, containing one non-sensitive line. `.gitignore` L57–L66 additionally excludes `*.pem`, `*.key`, `*.crt`, `*.cert`, `*.p12`, `*.pfx`, `.npmrc` and `.yarnrc`. There is no database, no ORM, no migration, no session store and no user data anywhere in the repository. The data-privacy and secret-exposure surface is therefore close to zero — which is both a real security strength and a real advantage for an adopter, because there is no legacy data model to inherit or migrate.

### S14 — The backend dependency tree currently reports zero advisories

`npm audit --json` in `src/backend` reports `info: 0, low: 0, moderate: 0, high: 0, critical: 0, total: 0` across 356 resolved packages (69 production, 288 development, 1 optional). No CVE identifier is cited anywhere in this document. Express `^4.21.2` currently resolves to `4.22.2`, which is a maintained release of the 4.x line. This strength belongs to `src/backend` alone and does not generalise: the SPA's tree reports 29 advisories, 14 of them high ([E4b](#e4b--spa-advisory-posture-srcweb), [R16](#risk-register)), which is a weakness recorded there rather than a qualification of this one.

### A note on what is **not** listed as a strength

Three claims in root `README.md` are commonly mistaken for strengths and are deliberately excluded here, because nothing in this repository substantiates them. They appear in [Weaknesses](#weaknesses) as documentation-accuracy findings instead:

| Claim | Location | Why it is not a strength |
|---|---|---|
| "WCAG 2.1 Level A compliance" | `README.md` L17 | No accessibility test, linter, axe integration or audit exists anywhere in the repository. `HelloWorld.tsx` does carry ARIA attributes, but one of them (`role="text"`, L34) is not a valid ARIA role, and no automated check would have caught that. |
| "CSP headers configured" | `README.md` L191 | A CSP exists only in `infrastructure/docker/nginx.conf` L67 — inside a container that cannot start ([W22](#w22--the-container-image-cannot-be-built-and-could-not-start-if-it-were)) — and even there the `add_header` directives inside the `location` blocks at L79 and L85 discard the inherited server-level headers. The Express service sets no security headers at all. |
| "Strict HTTPS enforcement" | `README.md` L193 | `nginx.conf` L61 listens on port 80 only, with no TLS and no HTTP-to-HTTPS redirect. The HSTS header at L71 is emitted over plain HTTP, and the `<meta http-equiv="Strict-Transport-Security">` tag in `src/web/public/index.html` L17 is ignored by browsers, which honour HSTS only as an HTTP response header. |

## Weaknesses

Every item carries either a path with line numbers or the real output of a command reproduced in the [Evidence Appendix](#evidence-appendix). Findings labelled *static inspection* were derived by reading configuration because the relevant validator aborts before reaching them.

### Build and release reproducibility

#### W1 — No lockfile is committed, while all three workflows require one

`.gitignore` L88 ignores `yarn.lock` and L89 ignores `package-lock.json`, and `git ls-files` confirms neither is tracked for either package. Yet `build.yml` L47, `test.yml` L41 and `deploy.yml` L53 all run `npm ci`, and all three configure `cache-dependency-path: src/web/package-lock.json` (L44, L37, L49 respectively) — a path that cannot exist in a fresh clone.

Simulating that fresh clone with only the tracked manifest present reproduces the failure exactly:

```text
npm error code EUSAGE
npm error The `npm ci` command can only install with an existing package-lock.json or
npm error npm-shrinkwrap.json with lockfileVersion >= 1.
```

Note that running `npm ci --dry-run` inside this working tree *succeeds*, because a prior `npm install` left a git-ignored `package-lock.json` on disk. That is precisely what makes this defect dangerous: it is invisible to anyone whose working copy has already been installed, and fatal to every clean checkout and every CI run. Beyond CI, the absence of a lockfile means no two installs are guaranteed identical, transitive dependencies float, and there is no artefact to attach an SBOM or a provenance attestation to.

#### W2 — The SPA build script passes a flag webpack 5 removed

`src/web/package.json` L11: `"build": "webpack --mode production --optimize-minimize"`. `--optimize-minimize` was a webpack 4 CLI flag and does not exist in webpack 5, which the project declares at L49 (`"webpack": "^5.75.0"`). It is also redundant: `webpack.config.ts` L110 already sets `optimization.minimize: isProduction`. The production build command is therefore wrong in a way that has no upside.

#### W3 — The webpack configuration references itself before it is assigned, and writes to a directory the clean script does not delete

`src/web/webpack.config.ts` L177–L187 spreads a production-only object that contains `...config.plugins!` at L180 — a reference to the `const config` whose initialiser is still being evaluated. Compounding this, the exported factory reads `env.mode` (L21–L23) while the npm scripts pass `--mode` as a CLI option, which webpack surfaces through the second (`argv`) parameter rather than through `env`; `isDevelopment` therefore resolves false and the production branch containing the self-reference is the branch that always executes.

Separately, `webpack.config.ts` L34 sets `output.path` to `build`, while `src/web/package.json` L16 defines `"clean": "rimraf dist"`. The clean step deletes a directory the build never writes, and root `README.md` L123 documents the output as `build/` while the script targets `dist`.

#### W4 — The declared runtime has been out of support for nearly three years, and diverges from the runtime actually used

| Where the runtime is pinned | Value |
|---|---|
| `src/backend/package.json` L6–L9 | `node >= 16.0.0`, `npm >= 8.0.0` |
| `src/web/package.json` L5–L8 | `node >= 16.0.0`, `npm >= 8.0.0` |
| `.github/workflows/build.yml` L30 | `node-version: [16.x]` |
| `.github/workflows/test.yml` L22 | `node-version: [16.x]` |
| `.github/workflows/deploy.yml` L34 | `node-version: [16.x]` |
| `infrastructure/docker/Dockerfile` L2, L6 | `FROM node:16-alpine`, `ARG NODE_VERSION=16` |
| root `README.md` L26, L35 | "Node.js 16.x+", "Node.js >= 16.x" |
| `CONTRIBUTING.md` L31 | "Node.js 16.x or higher" |

Node.js 16 reached end of life on **11 September 2023**, brought forward seven months from its originally planned April 2024 date to coincide with the end of support for OpenSSL 1.1.1 — the Node.js project's own announcement and the corroborating vendor announcement are both linked in [E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources). Measured against this assessment's observation date of 5 August 2026 that is **1,059 days**, so the line has been unsupported for two years and roughly eleven months; it passes three years on 11 September 2026. End of life means the Node.js project publishes no further releases for the line, security releases included, so no patch has been available for it throughout that period.

The divergence is the second half of the finding: this assessment ran on **Node v22.23.2 with npm 10.9.8**. The runtime the repository documents, pins in CI and builds its container on is three LTS lines behind the runtime that actually executes it. Nothing reconciles the two — there is no `.nvmrc`, no `engine-strict` setting, no `volta` pin and no CI job that runs on anything other than 16.x. An adopter cannot tell from the repository which runtime is supported, and the answer differs depending on which file they read.

#### W5 — The SPA build is wired to rewrite its own source tree, including in CI

`src/web/package.json` L17 defines `"prebuild": "npm run clean && npm run validate"`; L15 defines `"validate": "npm run type-check && npm run lint && npm run test"`; and L13 defines `"lint": "eslint src --ext .ts,.tsx --fix"`. Because npm runs `prebuild` automatically before `build`, this wiring puts ESLint in `--fix` mode on the critical path of every `npm run build`, where it rewrites files under `src/web/src/`.

**The hazard is latent today, not active.** `validate` chains its three steps with `&&`, and the first of them exits 2 on the 13 parse errors ([W6](#w6--the-spa-does-not-type-check-13-errors-all-syntax-level)), so the chain stops *before* `lint` is ever invoked. Verified: a zero-risk probe that runs `npx tsc --noEmit` and reports which branch the shell takes prints `SHORT_CIRCUITED_BEFORE_LINT`, and `git status --porcelain` was `<EMPTY>` after every build attempt in this assessment ([E21](#e21--coverage-thresholds-and-the-validate-short-circuit)). No file under `src/web/src/` is rewritten today, and CI and the container image build do not currently mutate the checked-out tree either — they fail earlier, at `type-check`. ESLint itself sizes the latent blast radius: it reports *71 errors and 0 warnings potentially fixable with the `--fix` option*.

This is a correctness problem, not a style preference: a build must be a pure function of its inputs. This wiring makes the build mutate its own inputs, so once a build runs to completion the second build in a row can differ from the first. Two automated paths reach that ESLint `--fix` step: `build.yml` L59 invokes `npm run lint` directly, while `build.yml` L67 and the Docker build at `Dockerfile` L35 both invoke `npm run build`, which reaches it through `prebuild` → `validate`; each would modify the checked-out working tree. The sequencing consequence is the dangerous part: the hazard **activates the moment [W6](#w6--the-spa-does-not-type-check-13-errors-all-syntax-level) is fixed** — which is precisely when the pipeline is expected to go green — so it arrives unannounced unless [P0-5](#p0--make-it-green-and-reproducible-030-days) lands with or before it. It also makes the `lint` script unusable as a gate — there is no check-only linting entry point in the manifest at all, which is why this assessment invoked `npx eslint … --no-fix` directly.

### Quality gates and testing

#### W6 — The SPA does not type-check: 13 errors, all syntax-level

`npx tsc --noEmit` in `src/web` exits 2 with exactly **13 errors** across 5 files. These are not type mismatches — they are parse failures, meaning the affected files are not valid TypeScript at all:

| File | Errors | Root cause (read from source) |
|---|---|---|
| `src/web/src/config/constants.ts` | L20, L29, L41 — `TS1005` | `as const` is applied to *type alias declarations* (`type AppConfig = { … } as const;`), which is not valid syntax. |
| `src/web/src/utils/testUtils.ts` | L40 ×2 `TS1005`, L42 `TS1161`, L43 `TS1128`, L44 `TS1128`, L77 `TS1161` | The file contains JSX (L38–L44 renders `<ThemeProvider theme={defaultTheme}>`) but carries a `.ts` extension, so `<ThemeProvider …>` is parsed as a type assertion. |
| `src/web/src/components/HelloWorld/index.ts` | L39 — `TS1443` | Raw English prose and a fenced <code>```typescript</code> block are committed as TypeScript source from roughly L20 onward. |
| `src/web/src/components/index.ts` | L36 — `TS1443` | Same pattern. |
| `src/web/src/utils/errorBoundary.tsx` | L158 `TS1443`, L162 `TS1128` | Same pattern. |

Three source files containing un-commented documentation prose and markdown code fences is a review-process finding as much as a code finding: the tree as committed cannot have passed the type-checker it ships with, so whatever review these files received did not include running it.

#### W7 — The SPA does not lint: 92 problems

`npx eslint src --ext .ts,.tsx --no-fix` in `src/web` exits 1 with **92 problems (88 errors, 4 warnings)** across 20 files. Distribution by rule:

| Count | Rule |
|---|---|
| 61 | `no-trailing-spaces` |
| 7 | `arrow-body-style` |
| 6 | `@typescript-eslint/naming-convention` |
| 4 | `no-console` |
| 4 | `@typescript-eslint/no-unused-vars` |
| 3 | Parsing error — module declaration names may only use `'` or `"` quoted strings |
| 2 | `@typescript-eslint/no-empty-function` |
| 1 each | `curly`, `@typescript-eslint/no-empty-interface`, `arrow-parens`, Parsing error `'>' expected`, Parsing error `';' expected` |

Two structural observations sit behind the raw count. First, the five parsing errors are the same files as [W6](#w6--the-spa-does-not-type-check-13-errors-all-syntax-level) — the linter cannot analyse them either, so their real defect count is unknown. Second, `src/web/.eslintignore` excludes `*.config.js`, `*.config.ts`, `src/setupTests.ts` and `src/reportWebVitals.ts`, which means the broken import that breaks the entire test suite ([W8](#w8--both-spa-test-suites-fail-to-load-so-zero-tests-execute)) sits in a file the linter is configured never to look at.

There is also a live contradiction between the two style tools: `.prettierrc` sets `"arrowParens": "avoid"` while `.eslintrc.json` L90 sets `"arrow-parens": ["error", "always"]`. Because the rule is re-enabled in `rules` after `prettier` is listed in `extends`, the ESLint rule wins, and running Prettier reintroduces the violation. One `arrow-parens` error was observed. `.prettierrc` additionally sets `jsxBracketSameLine`, deprecated since Prettier 2.4 and removed in Prettier 3, and `vueIndentScriptAndStyle`, which is inert in a repository with no Vue. No `format` or `format:check` script exists, so Prettier is configured but never executed.

#### W8 — Both SPA test suites fail to load, so zero tests execute

`npx jest --watchAll=false --ci` in `src/web` exits 1:

```text
FAIL src/App.test.tsx
    Cannot find module '../utils/testUtils' from 'src/setupTests.ts'
FAIL src/components/HelloWorld/HelloWorld.test.tsx
    Cannot find module '../utils/testUtils' from 'src/setupTests.ts'
Test Suites: 2 failed, 2 total
Tests:       0 total
```

Root cause: `src/web/src/setupTests.ts` L8 reads `import { renderWithProviders } from '../utils/testUtils';`. Because `setupTests.ts` lives at `src/web/src/setupTests.ts`, the specifier `../utils/testUtils` resolves to `src/web/utils/testUtils`, which does not exist; the real file is `src/web/src/utils/testUtils.ts`, i.e. `./utils/testUtils`. Because `jest.config.ts` L38 registers this file in `setupFilesAfterEnv`, the failure is global — every suite dies during environment setup, so **`Tests: 0 total`** and no assertion in the SPA can run while the tree is in this state.

Two aggravating factors: the target file `utils/testUtils.ts` would not parse even if the path were right ([W6](#w6--the-spa-does-not-type-check-13-errors-all-syntax-level)); and `jest.config.ts` L52–L56 maps stylesheet and image imports to `<rootDir>/__mocks__/styleMock.js` and `<rootDir>/__mocks__/fileMock.js`, but there is no `src/web/__mocks__` directory in the repository, and `identity-obj-proxy` (referenced at L53) is not a declared dependency. Three independent defects sit between this suite and a green run.

#### W9 — No `ThemeProvider` wraps the tree, so the SPA's first render is primed to throw

`src/web/src/index.tsx` L38–L42 renders `<React.StrictMode><App /></React.StrictMode>`. `App.tsx` L23–L34 renders `<GlobalStyles />` at L26 and `<HelloWorld message="Hello World" />` at L33 inside a fragment. Neither introduces a styled-components `ThemeProvider`.

Both of those children read theme values that nothing supplies:

| Component | Theme reads |
|---|---|
| `src/web/src/styles/GlobalStyles.ts` (rendered **first**, at `App.tsx` L26) | L20–L22 `theme.typography.fontFamily` / `.fontSize` / `.fontWeight`; L25–L26 `theme.colors.background` / `.text` |
| `src/web/src/components/HelloWorld/styles.ts` (rendered second, at `App.tsx` L33) | L16 `min-height: ${({ theme }) => theme.spacing.vertical};`; L19 `padding: … theme.spacing.horizontal`; L22 `background-color: … theme.colors.background`; L37–L40 typography and colour |

With no provider in the tree, styled-components supplies an empty theme object, so `theme.typography` and `theme.spacing` are both `undefined` and the first property read on either throws as the component evaluates its interpolations. **Both files are affected, so the provider fix has to cover both** — repairing only `HelloWorld` would leave `GlobalStyles` reading `theme.typography.fontFamily` off an empty object.

Which of the two throws *first* is deliberately not asserted here. It cannot be observed while the bundle does not execute ([W35](#w35--the-pages-own-content-security-policy-kills-the-development-bundle-before-react-executes)), and element order in `App.tsx` does not settle it: a styled component evaluates its interpolations during its own render, whereas the installed styled-components **5.3.11** calls `renderStyles` for a `createGlobalStyle` component during the render pass only when the stylesheet is in server mode and otherwise defers it to a layout effect — so the later-rendered `HelloWorld` may well throw before the earlier-rendered `GlobalStyles` does. *(Evaluation timing read from the installed library, not observed at runtime.)* Nothing in the remediation depends on the answer.

Searching the whole SPA source confirms the omission: `ThemeProvider` appears **only** in `src/web/src/utils/testUtils.ts` (L13, L40, L42), i.e. the wiring exists for tests and is not applied to the application tree at all. `styles.ts` L3 also imports `defaultTheme` without using it, which is the residue of the same mistake.

**This defect does not fire today, and it is not what makes the page blank.** The SPA was served and loaded in Chrome for this assessment, and the page is verifiably blank — `#root.innerHTML` is the empty string, `#root` has zero child nodes, its bounding rect is 0 px tall, and all 1,024,000 pixels of the capture are pure white — but **no `TypeError` occurs**. The strings `TypeError` and `Cannot read properties of undefined` appear nowhere in the console, because the entry chunk never executes: the page's own Content-Security-Policy kills the development bundle first ([W35](#w35--the-pages-own-content-security-policy-kills-the-development-bundle-before-react-executes)). Corroborating measurements: `typeof window.React === "undefined"`, `__REACT_DEVTOOLS_GLOBAL_HOOK__` undefined, **zero** `<style>` elements (so styled-components never ran at all), `#root` carries no `__react*` internal keys, and the application made **zero** `console.*` calls — so even `index.tsx`'s own `console.error('Error rendering application:', error)` never fired. Full transcript in [E20](#e20--spa-development-runtime-npm-start-the-csp-conflict-and-the-rendered-page).

This finding is therefore **real but latent, and masked**. It becomes operative the moment the bundle can run — which is the production path, where `webpack.config.ts` L178 sets `devtool: 'source-map'` and no `eval` is emitted — once the production build itself is repaired ([W2](#w2--the-spa-build-script-passes-a-flag-webpack-5-removed), [W3](#w3--the-webpack-configuration-references-itself-before-it-is-assigned-and-writes-to-a-directory-the-clean-script-does-not-delete)). *(That the production path would reach the render is read from the configuration, not observed: no production bundle can currently be produced.)* The sequencing consequence is concrete: adding a `ThemeProvider` on its own changes nothing a developer can see, which is why **P0-8 depends on P0-15** in the [roadmap](#p0--make-it-green-and-reproducible-030-days).

#### W34 — `npm start` does not start: the dev server cannot load its own configuration

`src/web/package.json` L10 defines `"start": "webpack serve --mode development --open"`. Running that command's non-interactive equivalent exits **2** without ever binding a port:

```console
$ cd src/web && npx webpack serve --mode development --port 3000
[webpack-cli] Failed to load '…/src/web/webpack.config.ts' config
[webpack-cli] webpack.config.ts(180,12): error TS2448: Block-scoped variable 'config' used before its declaration.
webpack.config.ts(180,12): error TS2454: Variable 'config' is used before being assigned.
```

Nothing listens on port 3000 afterwards. The cause is the self-reference already recorded in [W3](#w3--the-webpack-configuration-references-itself-before-it-is-assigned-and-writes-to-a-directory-the-clean-script-does-not-delete): `ts-node` must compile `webpack.config.ts` before webpack can read it, and `TS2448`/`TS2454` are *static* type errors, so the failure is mode-independent — it reproduces under `--env mode=development` too, and only skipping type-checking entirely gets past it. The practical consequence is that **the repository's single documented way to run the application does not run it.** The four gates already recorded — type-check ([W6](#w6--the-spa-does-not-type-check-13-errors-all-syntax-level)), lint ([W7](#w7--the-spa-does-not-lint-92-problems)), tests ([W8](#w8--both-spa-test-suites-fail-to-load-so-zero-tests-execute)) and the production build ([W2](#w2--the-spa-build-script-passes-a-flag-webpack-5-removed)) — are joined by a fifth, and it is the one a new joiner hits first.

A second, quieter defect sits behind it. `webpack.config.ts` L169 sets `devServer.https: true`, but L156 opens that entire block as `...(isDevelopment && { … })`, and W3 establishes that `isDevelopment` (L22) always resolves false because the factory reads `env.mode` while `--mode` arrives through webpack's `argv` — L23 then makes `isProduction` unconditionally true. So even once the config compiles, `npm start` would apply **no `devServer` block at all**: no port 3000, no `historyApiFallback`, no hot reload, no CORS header and **no HTTPS**. HTTPS was observed in this assessment only under a non-standard `--env mode=development` invocation that no shipped script uses, and webpack-dev-server greets even that with `[DEP_WEBPACK_DEV_SERVER_HTTPS] DeprecationWarning: 'https' option is deprecated. Please use the 'server' option.` — one more setting never revalidated against the tool version it targets ([W32](#w32--configuration-files-carry-deprecated-or-inert-settings)). Transcripts in [E20](#e20--spa-development-runtime-npm-start-the-csp-conflict-and-the-rendered-page).

#### W35 — The page's own Content-Security-Policy kills the development bundle before React executes

This is the **operative** cause of the blank page in development, and it takes precedence over every other SPA runtime finding on that path.

`src/web/public/index.html` L12 declares `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'" />`. That policy omits `'unsafe-eval'`. `src/web/webpack.config.ts` L157 sets `devtool: 'eval-source-map'`, which wraps every emitted module factory in a literal `eval("…")` call. The two are mutually exclusive: the browser applies the policy from the served HTML, then refuses the first `eval` the bundle performs. Observed in Chrome against the running dev server:

```console
Uncaught EvalError: Evaluating a string as JavaScript violates the following Content Security Policy
directive because 'unsafe-eval' is not an allowed source of script: script-src 'self'
    at ./node_modules/webpack-dev-server/client/index.js?… (vendors-node_modules_s.js:83:1)
    at __webpack_require__ (runtime.js:40:32)
    at __webpack_exec__ (main.js:74:48)
    at __webpack_require__.O (runtime.js:83:25)
    at webpackJsonpCallback (runtime.js:1196:39)
```

The browser's own `securitypolicyviolation` event carries `violatedDirective: "script-src"`, `blockedURI: "eval"`, `originalPolicy: "default-src 'self'; script-src 'self'"`, `disposition: "enforce"` (enforced, not report-only), at `vendors-node_modules_s.js` line 83 column 1 — a 34,675-character `eval("{var __resourceQuery = …")` module factory.

The ordering is what makes this fatal rather than cosmetic. `main.js` L75 runs all three entry modules inside a **single left-to-right comma expression** — the webpack-dev-server client, `webpack/hot/dev-server.js`, then `./src/index.tsx`. The first of them throws, the exception unwinds out of the comma expression, and **`./src/index.tsx` is never reached: React does not run at all.** Every bundle arrives intact (`runtime.js`, `main.js` and all four `vendors-*.js` chunks return HTTP 200, ≈3.7 MB in ≈80 ms), the four vendor chunks *register* their factories, and not one of them is ever *executed*. No WebSocket is opened either, which independently confirms the dev-server client module never ran. `#root` is left exactly as the HTML template delivered it, and `document.body.outerHTML` is byte-for-byte the served template at 274 characters.

Two consequences follow. First, **every other SPA runtime finding is masked while this holds** — [W9](#w9--no-themeprovider-wraps-the-tree-so-the-spas-first-render-is-primed-to-throw) included — so a team fixing them one at a time sees no change in the browser and no error attributable to their work. Second, this is a self-inflicted conflict between two files the repository controls, and it is invisible to every gate: no workflow serves the application and no test renders it. The same L12 policy is already cited in [W32](#w32--configuration-files-carry-deprecated-or-inert-settings) for blocking the `fonts.gstatic.com` preconnect at L24; the `eval` consequence is by far the larger of the two.

The fix is a choice, not a compromise: serve a development-only policy that includes `'unsafe-eval'`, or select a devtool that emits no `eval` (`source-map`, `cheap-module-source-map`) — which is exactly what the production branch at L178 already does. Either way the production policy should stop being declared as a `<meta>` tag ([W32](#w32--configuration-files-carry-deprecated-or-inert-settings)) and start being served as a response header, so development and production policies can differ. Full evidence in [E20](#e20--spa-development-runtime-npm-start-the-csp-conflict-and-the-rendered-page).

#### W10 — Seven tools the SPA depends on are never declared

`src/web/package.json` declares neither `jest`, `ts-jest`, `ts-node`, `ts-loader`, `@types/node`, `rimraf` nor `identity-obj-proxy`, yet each is required for a declared script or configuration file to work:

| Missing declaration | Required by |
|---|---|
| `jest` | `package.json` L12 `"test": "jest --coverage --watchAll=false"` |
| `ts-jest` | `jest.config.ts` L48 `transform: { '^.+\\.(ts\|tsx)$': 'ts-jest' }` |
| `ts-node` | `webpack.config.ts` and `jest.config.ts` are TypeScript config files |
| `ts-loader` | `webpack.config.ts` L48 `loader: 'ts-loader'` |
| `@types/node` | `webpack.config.ts` L1/L34 use `path` and `__dirname` |
| `rimraf` | `package.json` L16 `"clean": "rimraf dist"` |
| `identity-obj-proxy` | `jest.config.ts` L53 `moduleNameMapper` |

The manifest is therefore not a complete description of the package. Any environment that installs strictly from it — a fresh clone, a CI runner, a container build — is missing tooling that the scripts assume. Only `jest-environment-jsdom` and `@jest/types` (both 29.x) hint that Jest 29 is the intended version.

#### W11 — Coverage is either unenforceable or absent

`src/web/jest.config.ts` L28–L35 declares `coverageThreshold.global` at **100 % branches, functions, lines and statements**. Those thresholds *are* evaluated on every run of the repository's own test script — `src/web/package.json` L12 is `"test": "jest --coverage --watchAll=false"` — and they can never be **met**. Jest collects coverage from `collectCoverageFrom` whether or not a suite executes, so it prints a full 0 % table for the eight collected source files and then four threshold failures, which contribute to the non-zero exit ([E21](#e21--coverage-thresholds-and-the-validate-short-circuit)):

```console
Jest: "global" coverage threshold for statements (100%) not met: 0%
Jest: "global" coverage threshold for branches (100%) not met: 0%
Jest: "global" coverage threshold for lines (100%) not met: 0%
Jest: "global" coverage threshold for functions (100%) not met: 0%
```

The measured figure is 0 % because no suite loads ([W8](#w8--both-spa-test-suites-fail-to-load-so-zero-tests-execute)); the gate itself is live and simply always red. And even once the suites load, 100 % global coverage of every non-index, non-test source file is not an achievable gate for this codebase as written, so the number would keep failing for a second, independent reason. The configured value is aspirational rather than operative — it can never pass, which means it can never *gate* anything either, because a check that is always red is indistinguishable from a check that is switched off.

`src/backend/package.json`, by contrast, declares no Jest configuration at all: no `coverageThreshold`, no `collectCoverageFrom`, and no `--coverage` in its `test` script. The two-test suite that does pass therefore reports no coverage number, and nothing would fail if a future route arrived untested.

#### W12 — The deployment workflow can never trigger, and could not deploy if it did

`deploy.yml` L4–L8 triggers on `workflow_run` with `workflows: ["Build"]`. No workflow in the repository is named `Build`: `build.yml` L1 declares `name: Build and Test`, `test.yml` L1 declares `name: Test`, and `deploy.yml` L1 declares `name: Deploy`. `workflow_run` matches on the workflow's `name`, so the trigger condition is unsatisfiable and the deploy job cannot run as the workflow is checked in. This is a property of the file, not a claim about the repository's run history, which a static review of a single commit cannot observe: what the tree shows is that no event this workflow declares can ever be raised.

Were it to fire, it would still fail. `deploy.yml` L66–L70 calls `actions/deploy-pages@v2` with `artifact_name: github-pages` and `path: src/web/build`, but the workflow contains no `actions/upload-pages-artifact` step and no `actions/configure-pages` step — so no artifact named `github-pages` would exist for `deploy-pages` to publish, and `path` is not an input that `deploy-pages` accepts.

The action versions are also behind: `checkout@v3` (`build.yml` L35, `test.yml` L28, `deploy.yml` L39), `setup-node@v3` (L40, L33, L45) and `deploy-pages@v2` (`deploy.yml` L67). Dependabot has already opened update branches for all three — `dependabot/github_actions/actions/checkout-4`, `setup-node-4` and `deploy-pages-4` — and none has been merged ([W33](#w33--eight-dependency-update-branches-are-open-and-unmerged)). Those branches only reach v4, which is itself no longer current: the published majors are `checkout@v7`, `setup-node@v7` and `deploy-pages@v5`, so even the branch targets are three, three and one majors behind respectively, and the pins actually committed here — v3, v3 and v2 — are four, four and three behind (sources and reading date in [E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources)).

Two further CI hygiene gaps: `test.yml` duplicates `build.yml`'s test step on identical triggers (`push`/`pull_request` to `main`), doing the same work twice; and only `build.yml` declares `concurrency` (L10–L12) and `timeout-minutes`, so `test.yml` and `deploy.yml` have neither cancellation nor a runtime bound.

#### W13 — The backend has zero CI coverage

All three workflows scope every step to the frontend: `build.yml` L24–L26, `test.yml` L15–L17 and `deploy.yml` L17–L19 each set `defaults.run.working-directory: src/web`. No workflow installs `src/backend`, runs its tests, lints it, audits it, builds an image for it or deploys it. The passing 2/2 backend suite exists only as something a developer may choose to run locally; nothing in the repository requires it to pass before a merge. The feature delivered on this branch is, from CI's point of view, invisible.

Note also that `build.yml` L14–L16 sets `NODE_ENV: production` for the entire job — including the test step at L63 — whereas `test.yml` L44/L51 sets `NODE_ENV: test` for the equivalent step. The same tests run under two different environment configurations depending on which workflow executes them.

### Operability and observability of the shipped service

#### W14 — The Express service has none of the operational controls an enterprise requires

`src/backend/server.js` is 7 lines, and the following are all absent from it and from the package as a whole. Each was confirmed by reading the file and, where observable, by exercising the running process:

| Missing control | Evidence | Consequence for an operator |
|---|---|---|
| Structured logging | No logger of any kind; no `console` call; no logging dependency in `src/backend/package.json` | No request log, no error log, no audit trail. A production incident leaves no evidence behind. |
| Health / readiness endpoint | `GET /health` against the running Express service returns **404** ([E5](#e5--endpoint-behaviour-headers-and-the-port-override)) | No load balancer, Kubernetes probe, or uptime monitor can determine whether the process is serving. The two `/health` probes that do exist do not compensate, because they point at a different service — see the note below. |
| Graceful shutdown | No `process.on('SIGTERM'…)`; `server.js` L7 calls `app.listen` and retains no server handle | On deploy or scale-in, in-flight requests are severed rather than drained. |
| 404 handler | `GET /does-not-exist` returns Express's default HTML error page | Unknown routes return an HTML body from a service whose contract is plain text, with no consistent error shape. |
| Error-handling middleware | No 4-argument error middleware registered | Any future throw returns Express's default handler, which in a non-production `NODE_ENV` includes a stack trace in the response body. |
| Request correlation IDs | No middleware, no header propagation | Requests cannot be traced across a proxy, a CDN or a log aggregator. |
| Metrics | No metrics endpoint, no counters, no histograms | No RED/USE signals; capacity and latency are unobservable. |
| Distributed tracing | No OpenTelemetry or equivalent instrumentation | No span data; latency cannot be attributed. |
| Timeouts / body limits | No `server.headersTimeout`, no `express.json({ limit })`, no keep-alive tuning | Default Node timeouts apply, unbounded. |

The response `Content-Type` is a related, smaller finding: because `res.send()` is called with a string, both endpoints return `text/html; charset=utf-8` (verified at runtime) rather than `text/plain`, even though the contract in `src/backend/README.md` L24–L27 describes plain-text responses.

**The two `/health` probes belong to the SPA image, not to this service.** `Dockerfile` L75–L76 (`HEALTHCHECK … curl -f http://localhost/health`) and `docker-compose.yml` L18–L19 (`test: ["CMD","curl","-f","http://localhost/health"]`) are both attached to the nginx image built from `context: ../../src/web` (`docker-compose.yml` L7). They never reach `src/backend`, so they are not probes of the Express service at all — and adding a health endpoint to the Express service would not make them correct, because neither definition points at it. The two surfaces fail differently and must be fixed separately:

| Surface | What a `/health` request actually does | Why it is wrong |
|---|---|---|
| Express service (`src/backend`) | Returns a genuine **404** with Express's default HTML page ([E5](#e5--endpoint-behaviour-headers-and-the-port-override)) | The route is undefined, and no probe anywhere in the repository targets this service |
| nginx / SPA image (the probe target) | Returns **200 with `index.html`** — `nginx.conf` L76–L80 defines `location / { try_files $uri $uri/ /index.html; }`, so `/health` falls through the SPA history fallback | The probe therefore reports healthy for *any* path the SPA fallback catches. It is not a liveness signal, it is a test of whether nginx can serve a static file — and it would report healthy even with the application completely broken (which, per [W35](#w35--the-pages-own-content-security-policy-kills-the-development-bundle-before-react-executes) and [W9](#w9--no-themeprovider-wraps-the-tree-so-the-spas-first-render-is-primed-to-throw), it is) |

Two further defects mean the SPA probe cannot even reach that misleading 200 in practice: the `nginx:alpine` base image does not ship `curl`, so the `HEALTHCHECK` command is unavailable ([W22](#w22--the-container-image-cannot-be-built-and-could-not-start-if-it-were)); and the image cannot start at all as configured. Fixing this properly means defining real probes on the Express service **and** repointing or replacing both existing probe definitions — see [M18](#backend-hardening-and-contract).

#### W15 — There is no security middleware, and no security gate in the pipeline

The service registers no `helmet` (or equivalent header middleware), no explicit CORS policy, no rate limiter, no request-size limit, and no authentication or authorisation of any kind. `app.disable('x-powered-by')` ([S2](#s2--x-powered-by-is-explicitly-disabled)) is the entirety of the service's hardening.

The pipeline offers no compensating control:

- `build.yml` L50–L52 runs `npm audit` with `continue-on-error: true`, so a critical advisory cannot fail the build. `test.yml` and `deploy.yml` do not audit at all.
- There is no SAST step (no CodeQL, no Semgrep, no equivalent) despite `SECURITY.md` L79 claiming "Static code analysis".
- There is no secret-scanning workflow despite `SECURITY.md` L69 claiming "Automated security checks in CI/CD pipeline".
- There is no SBOM generation and no artefact signing or provenance attestation — and with no lockfile ([W1](#w1--no-lockfile-is-committed-while-all-three-workflows-require-one)) there is nothing stable to generate an SBOM from.
- There is no dependency-review or licence-compliance check on pull requests.

#### W16 — Performance and availability are asserted but never measured

`documentation/Product Requirements Document (PRD).md` §5.1 sets hard non-functional targets — L138 load time < 1.5 s, L139 TTFB < 200 ms, L140 first contentful paint < 1 s, L141 bundle size < 100 KB, L142 memory < 50 MB — and §5.4.1 L163 sets "Application uptime: 99.9%".

Nothing in the repository measures any of them:

- `src/web/src/reportWebVitals.ts` L44–L48 passes `getCLS`, `getFID`, `getFCP`, `getLCP` and `getTTFB` to `console.log`. `src/web/src/index.tsx` L45–L51 supplies a production callback whose entire body is `console.log(metric)` beside the comment "Analytics implementation would go here". No metric ever leaves the browser.
- No Lighthouse run, no bundle-size budget check and no performance job exists in any workflow.
- No uptime monitor, synthetic check, SLO definition or alert rule exists anywhere.
- The build's own performance budget contradicts the PRD: `webpack.config.ts` L189–L190 sets `maxEntrypointSize` and `maxAssetSize` to `512000` bytes with `hints: 'warning'` (L191) — five times the PRD's 100 KB target, and a warning rather than an error.
- The TTFB target is a *server* metric, set in a document whose own §3.3 (L304) and §5.3 (L494) assert the application has no server.

A 99.9 % availability target with no monitor, no probe and no on-call rotation is not an SLO; it is an aspiration recorded in a file.

### Deployment and infrastructure

#### W17 — The backend has no container image and no deployment path

`infrastructure/docker/Dockerfile` builds the SPA only: L2 uses `node:16-alpine` as a builder, L35 runs `npm run build`, and L39 switches to `nginx:alpine` to serve the resulting static files from `/usr/share/nginx/html` (L54). There is no stage, image, service or manifest anywhere in `infrastructure/` that runs `node server.js`.

`docker-compose.yml` defines two services (`web`, `dev`), both built from `context: ../../src/web` (L7, L48) — the backend directory is never a build context. `infrastructure/terraform/` provisions S3 static hosting and a CDN; there is no compute resource of any kind (no ECS/Fargate task, no Lambda, no EC2, no App Runner) and therefore nowhere for a long-lived Node process to run. The delivery model in the repository is static-file hosting, and the artefact just added is a server.

The practical consequence: the feature delivered on this branch can be run on a developer's machine and nowhere else. There is no path from `git push` to a reachable endpoint.

#### W18 — There is no API contract

The two endpoints are described only in prose — `src/backend/README.md` L23–L27 and root `README.md` L131–L136. There is no OpenAPI or AsyncAPI document, no JSON Schema, no generated client, no versioning scheme (no `/v1` prefix), and no published error-response shape. For an enterprise, this means no contract test, no consumer-driven verification, no gateway import, no automatic SDK generation and no machine-readable record of the interface. Today the interface is two strings, so the cost is low; the point is that the *practice* is absent, and it becomes expensive precisely when the service grows.

#### W19 — There is no root manifest and no workspace tooling

The repository root contains no `package.json`. `src/web/` and `src/backend/` are two entirely independent packages that must each be installed, versioned, linted and tested separately, with no shared configuration and no single command that validates the whole repository.

Concretely, this produces: duplicated `engines` blocks that can drift apart; no shared ESLint/Prettier/TypeScript base configuration (the backend has none at all — no lint script, no `tsconfig`, no formatter); no hoisting, so overlapping dependencies are resolved and cached twice; no `npm run test` at the root, which is part of why CI never learned about the backend ([W13](#w13--the-backend-has-zero-ci-coverage)); and no way to express that the two packages belong to one release train. Both packages are pinned at `version: 1.0.0` with no changelog and no release process to move them.

#### W20 — CODEOWNERS relies on generic placeholder handles and assigns the backend no dedicated owner

`.github/CODEOWNERS` assigns ownership to nine distinct handles. Every one is a generic, role-shaped name rather than an identified owner, and two of them — `@global-owner1` and `@global-owner2` at L1 — are copied verbatim from GitHub's own documentation example:

| Line | Pattern | Owner(s) |
|---|---|---|
| L1 | `*` | `@global-owner1 @global-owner2` — verbatim from GitHub's own documentation example |
| L4 | `/src/web/` | `@frontend-team` |
| L5 | `/src/web/**/*.{ts,tsx}` | `@typescript-reviewers` |
| L6 | `/src/web/**/*.test.{ts,tsx}` | `@test-reviewers` |
| L9 | `/infrastructure/` | `@devops-team` |
| L12 | `/.github/workflows/` | `@devops-team` |
| L15 | `/config/` | `@devops-team @frontend-team` |
| L18 | `*.ts *.tsx` | `@typescript-reviewers` |
| L21 | `package.json package-lock.json` | `@dependency-reviewers` |
| L24 | `tsconfig.json` | `@typescript-reviewers @frontend-team` |
| L27 | `.eslintrc*` | `@code-quality-team` |
| L30 | `README.md CONTRIBUTING.md` | `@docs-team` |

**On whether these handles are valid — what this assessment can and cannot establish.** Whether each handle resolves to an existing GitHub account or team is a property of the GitHub organization, not of the repository, so it is **not determinable from the files inspected here** and is not asserted either way. What is determinable is that all nine are generic role names carrying no identifying information, and that two are the literal example values from GitHub's documentation. That is sufficient to make the file unfit for accountable ownership regardless of which handles happen to resolve, because an adopter cannot tell from the repository who any of them are. Establishing validity requires two GitHub-side checks, neither of which can be performed from a checkout:

1. **GitHub's own CODEOWNERS validation.** GitHub validates the file server-side and reports unknown owners and syntax errors on the file's page in the repository, which is the authoritative check for whether each handle resolves.
2. **Repository permission review.** GitHub silently ignores a code owner that lacks write access to the repository, so a handle can resolve to a real account or team and still never be requested for review. Each owner must therefore be confirmed to hold write permission.

Beyond the handles, the file has four structural defects that are fully determinable from its contents:

1. **L15 references a path that does not exist.** There is no `config/` directory in the repository (the same phantom path appears in root `README.md` L105).
2. **L5 uses brace expansion.** `CODEOWNERS` uses gitignore-style patterns, which do not support `{ts,tsx}`; that rule matches nothing.
3. **L18, L21 and L30 place multiple patterns on one line.** `CODEOWNERS` accepts exactly one pattern per line followed by owners, so these lines do not behave as intended.
4. **No rule names the backend, so it inherits the global default.** The `*` pattern at L1 *does* match `src/backend/**` — the delivered service is not unowned. But the only owners it can be routed to are the two documentation-example handles, and no rule anywhere in the file mentions the backend specifically, so the service that this branch exists to deliver has no dedicated or identifiable owner while every other significant tree does (`/src/web/` at L4, `/infrastructure/` at L9, `/.github/workflows/` at L12). L21 also names `package-lock.json` as an owned path, but `.gitignore` L89 keeps that file untracked, so that half of the rule can never match anything in this repository.

The net effect is that pull-request routing is technically in place but not accountable: changes to the backend resolve only to the L1 example handles, no reviewer can be identified from the repository, and the three defective patterns above mean several rules match nothing at all. Whether required-reviewer branch protection can be enabled against this file depends on the GitHub-side checks above; what is certain from the repository is that doing so would route backend reviews to owners the repository does not identify.

#### W21 — SECURITY.md promises a security programme the repository does not have

| `SECURITY.md` | Claim | Reality in this checkout |
|---|---|---|
| L25, L138 | Primary contact `security@organization.com` | Placeholder domain; unroutable |
| L26, L139 | Escalation `security-escalation@organization.com` | Placeholder domain; unroutable |
| L21 | "Expect an initial response within 48 hours" | No rotation, no owner, no acknowledgement mechanism |
| L27, L140–L144 | 4 h Critical / 24 h High / 48 h Medium / 72 h Low SLAs | Unbacked by any staffing or process artefact |
| L64 | "Subresource Integrity (SRI) checks for static assets" | No SRI anywhere; `webpack.config.ts` includes no integrity plugin and `src/web/public/index.html` has no `integrity` attribute |
| L69 | "Automated security checks in CI/CD pipeline" | The only check is a non-gating `npm audit` (`build.yml` L50–L52) |
| L77 | "GitHub Actions security workflow" | No such workflow exists; only `build.yml`, `test.yml`, `deploy.yml` |
| L79 | "Static code analysis" | No SAST tool configured |
| L84, L90 | Quarterly security assessments; annual third-party penetration test | No evidence, schedule or report in the repository |
| L99 | "WCAG 2.1 Level A accessibility standards" | No accessibility tooling or test exists |
| L43–L47, L49–L54 | CSP / X-Frame-Options / HSTS / mandatory HTTPS / automatic HTTPS redirection | See [W22](#w22--the-container-image-cannot-be-built-and-could-not-start-if-it-were); none is effective |
| L153 | Document ends with the literal text `Last Updated: [Current Date]` | An unfilled template placeholder shipped to `main` |

A security policy that overstates controls is worse than no policy, because an adopter's risk assessment inherits the overstatement. The `[Current Date]` placeholder at L153 is also the single clearest signal that these files were generated and never reviewed.

#### W22 — The container image cannot be built, and could not start if it were

`docker build --target production -f infrastructure/docker/Dockerfile src/web` fails immediately:

```text
Error response from daemon: target stage "production" could not be found
```

The `Dockerfile` declares only two stages: `builder` (L2) and an unnamed final stage (L39). `docker-compose.yml` L9 requests `target: production` and L50 requests `target: development`; neither exists.

Even setting the stage names aside, the build would fail three more times:

1. **L24 `RUN npm ci --only=production`** requires the `package-lock.json` that `.gitignore` L89 excludes ([W1](#w1--no-lockfile-is-committed-while-all-three-workflows-require-one)). L21 copies `package*.json`, which in a clean checkout matches only `package.json`.
2. **The same line omits devDependencies**, then **L35 runs `npm run build`**, which needs webpack, TypeScript, ts-loader and the whole toolchain. `--only=production` is also deprecated in favour of `--omit=dev`.
3. **L35 triggers `prebuild`** ([W5](#w5--the-spa-build-is-wired-to-rewrite-its-own-source-tree-including-in-ci)), so the image build would run `type-check`, then `lint --fix`, then `jest` — each of which fails on its own evidence ([W6](#w6--the-spa-does-not-type-check-13-errors-all-syntax-level), [W7](#w7--the-spa-does-not-lint-92-problems), [W8](#w8--both-spa-test-suites-fail-to-load-so-zero-tests-execute)). In practice the `&&` chain stops at the first, so the layer fails at `type-check` and the other two are never reached — which is also why the image build does not rewrite the build context today. It would run them against a context from which `.dockerignore` L62 excludes `jest.config.*`.

And if an image existed, the runtime stage could not start. `Dockerfile` L51 copies `nginx.conf` to `/etc/nginx/conf.d/default.conf`, but `infrastructure/docker/nginx.conf` is a **complete** nginx configuration: L2 `worker_processes auto;`, L8 `events { … }` and L15 `http { … }`. The base image includes `conf.d/*.conf` from *inside* its own `http` block, where those directives are illegal — nginx rejects the configuration and exits. Two further blockers compound it: L69 sets `USER nginxuser` while `nginx.conf` L61 binds `listen 80`, a privileged port that an unprivileged user cannot bind; and L75–L76 defines a `HEALTHCHECK` that shells out to `curl`, which `nginx:alpine` does not ship, so the probe command itself is unavailable.

The `HEALTHCHECK` target is separately unsound. `nginx.conf` declares no `/health` location, but it does declare `location / { try_files $uri $uri/ /index.html; }` at L76–L80, so a request for `/health` is caught by the SPA history fallback and answered **200 with `index.html`** rather than rejected. Were `curl` present, the probe would therefore pass unconditionally — it would report healthy for any unmatched path, including while the application itself renders nothing ([W35](#w35--the-pages-own-content-security-policy-kills-the-development-bundle-before-react-executes), [W9](#w9--no-themeprovider-wraps-the-tree-so-the-spas-first-render-is-primed-to-throw)). A probe that cannot fail carries no signal, which is worse than an absent probe, because an operator reasonably reads a green healthcheck as evidence the application is serving. The same applies to the identical `docker-compose.yml` L18–L19 definition. Note also that both probes target this SPA image and never reach the Express service ([W14](#w14--the-express-service-has-none-of-the-operational-controls-an-enterprise-requires)).

Finally, the security headers this image is supposed to provide would not be emitted even on a working nginx. `nginx.conf` L67–L73 declares CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS, X-XSS-Protection and Permissions-Policy at `server` level — but L79 (`location /`) and L85 (`location ^~ /static/`) each declare their own `add_header`, and nginx discards *all* inherited `add_header` directives in any block that declares one. Every SPA route and every static asset would therefore be served with none of the seven headers. This is the concrete reason root `README.md` L191 ("CSP headers configured") and L195 ("Security headers implementation") do not hold.

#### W23 — The Compose file cannot resolve its own build inputs

Beyond the missing stages, `infrastructure/docker/docker-compose.yml` has five independent defects:

| Line(s) | Finding |
|---|---|
| L1 | `version: "3.8"` — confirmed obsolete by `docker compose config`: *"the attribute `version` is obsolete, it will be ignored"* |
| L8, L49 | `dockerfile: ../infrastructure/docker/Dockerfile` is resolved relative to the build **context** (`../../src/web`), which yields `src/infrastructure/docker/Dockerfile`. Verified: `src/infrastructure` does not exist |
| L16 | `REACT_APP_VERSION=${APP_VERSION}` — confirmed unset by `docker compose config`: *"The \"APP_VERSION\" variable is not set. Defaulting to a blank string."* The `REACT_APP_` prefix is a Create React App convention; the custom `DefinePlugin` at `webpack.config.ts` L104–L106 injects only `process.env.NODE_ENV`, so the value would be unreachable even if set |
| L43, L74 | `user: node` — the production image is `nginx:alpine`, which has no `node` user |
| L64 | `command: npm run start:dev` — no `start:dev` script exists in `src/web/package.json` (its scripts are `start`, `build`, `test`, `lint`, `type-check`, `validate`, `clean`, `prebuild`) |

Two further consistency problems: L34 sets `read_only: true` with `tmpfs` for `/tmp` and `/var/cache/nginx`, but `Dockerfile` L61–L62 writes `/var/run/nginx.pid`, which is on the read-only layer; and L83–L84 attaches `driver_opts: encrypted: "true"` to a `bridge` network, where that option has no effect (it is an overlay-network setting).

Separately, `.dockerignore` is in the wrong place. Docker reads `.dockerignore` from the **build context root**, which Compose sets to `src/web`; the file lives at `infrastructure/docker/.dockerignore` and is therefore never applied. The proof is in the build probe's own first line — `Sending build context to Docker daemon 333.5MB` when measured on 5 August 2026 with dependencies installed — a context that size can only mean `node_modules` was uploaded, exactly what `.dockerignore` L1 was meant to prevent. The size varies with the state of the working tree and is not the finding; see the reproduction precondition in [E12](#e12--docker-stage-resolution-and-build-context).

#### W24 — Terraform is not formatted to its own canonical style

`terraform fmt -check -recursive` exits 3 and lists 6 of the 13 `.tf` files as non-canonical: `main.tf`, `modules/cdn/main.tf`, `modules/static-hosting/main.tf`, `modules/static-hosting/variables.tf`, `environments/dev/main.tf` and `environments/prod/main.tf`. This is minor on its own, but it shows that no formatting gate is enforced on this tree: there is no pre-commit hook configuration in the repository and no Terraform job in any of the three workflows, so nothing would have caught it.

#### W25 — Terraform does not initialise

`terraform init -backend=false` in the root module fails with **7 errors** (Terraform v1.15.8):

| Count | Error | Locations |
|---|---|---|
| 2 | Duplicate required providers configuration | `providers.tf` L33 and `versions.tf` L11, both conflicting with `main.tf` L16 |
| 5 | Duplicate output definition | `modules/cdn/outputs.tf` L2/L8/L14 vs `modules/cdn/main.tf` L131/L136/L141; `modules/static-hosting/outputs.tf` L18/L23 vs `modules/static-hosting/main.tf` L194/L189 |

Running the same command in `environments/dev` fails with the same 5 duplicate-output errors from the shared modules, so **neither entry point can be initialised**. Because `init` aborts, no `terraform plan`, `validate`, `apply` or drift check can succeed against this configuration as committed, and the CI pipeline would not surface that, because no workflow runs Terraform at all.

#### W26 — Further Terraform defects behind the initialisation failure *(static inspection)*

Terraform aborts at the seven errors above, so the following were identified by reading the configuration rather than from validator output. Each would surface as soon as [W25](#w25--terraform-does-not-initialise) is resolved:

| Finding | Location |
|---|---|
| The S3 backend interpolates variables — `bucket = "${var.project_name}-terraform-state"`, `region = "${var.region}"` — which Terraform does not permit in a `backend` block | `main.tf` L7–L13 |
| `output "project_tags"` reads `var.tags`, but the root module declares only `environment`, `region`, `project_name` and `domain_name` | `outputs.tf` L62–L64 vs `variables.tf` |
| `module "static_hosting"` passes `project_name`, `region`, `enable_encryption`, `enable_versioning` and `enable_logging`, none of which the module declares; and does not pass `bucket_name` or `domain_name`, which it does declare | `main.tf` L42–L56 vs `modules/static-hosting/variables.tf` |
| `module "cdn"` passes `domain_name`, `enable_waf`, `ssl_support_method`, `minimum_protocol_version`, `default_ttl`, `max_ttl`, `compress` and `tags`, none of which the module declares; and does not pass `aws_region` or `bucket_arn`, which it does | `main.tf` L59–L80 vs `modules/cdn/variables.tf` |
| Conflicting provider source for the same local name: `hashicorp/cloudflare` in one file, `cloudflare/cloudflare` in two others | `versions.tf` L20 vs `providers.tf` L39 and `main.tf` L22 |
| `required_version` is declared twice | `versions.tf` L8 and `main.tf` L4 |
| `CreatedAt = timestamp()` in the default tag set guarantees a diff on every plan | `main.tf` L34 |
| An `aws_cloudfront_response_headers_policy` is created but never attached to any distribution, so the CSP/HSTS/frame-options it defines are never served | `main.tf` L112–L141 |
| A comment states the Cloudflare token "should be provided via environment variable `CLOUDFLARE_API_TOKEN`", while the code beneath it reads the token from three on-disk file paths and an SSM parameter wrapped in `nonsensitive()`, which strips the sensitivity marking | `providers.tf` L18–L28 |
| The provider configuration depends on a `data` source that is itself gated on `var.environment == "prod"`, an ordering Terraform cannot guarantee | `providers.tf` L20–L28, L47–L50 |
| Neither environment declares the inputs its own `terraform.tfvars` assigns, and the two directories solve the problem in opposite, equally broken ways. `environments/dev/` has no `variables.tf`, but its `main.tf` declares `environment`, `region`, `project_name` and `tags` inline at the foot of the file — each with a default — so the four `var.*` it references do resolve; what it does **not** declare is `domain_name`, which its own `terraform.tfvars` sets, making that value undeclared (dev builds its domain by interpolation instead, at L66). `environments/prod/main.tf` references **no** `var.*` at all — every value is a literal or a `local.*` — so all four values in `environments/prod/terraform.tfvars` are inert, and its `domain_name` (`hello-world-react.example.com`) contradicts the literal the prod module actually passes (`hello-world.example.com`, L59): editing the tfvars file changes nothing, which is the more dangerous of the two failures | `environments/dev/main.tf` L84–L120 (declarations), L66; `environments/dev/terraform.tfvars` L18; `environments/prod/main.tf` L52–L72 (all-literal `module "root"` call), L59; `environments/prod/terraform.tfvars` L7/L11/L15/L19 |
| `environments/prod/main.tf` passes four arguments the root module does not declare — `tags`, `enable_monitoring`, `enable_backups`, `enable_logging` — and reads three outputs it does not produce: `module.root.vpc_id`, `module.root.static_hosting` and `module.root.cdn`. The root module declares exactly four variables and eleven outputs, and none of those seven names is among them | `environments/prod/main.tf` L62–L71, L78–L79, L87–L88, L107 vs `variables.tf` L2/L13/L25/L37 and `outputs.tf` L6–L65 |
| Three `backend "s3"` blocks specify three different state-bucket naming schemes | `main.tf` L8, `environments/dev/main.tf` L11, `environments/prod/main.tf` L15 |
| `project_name = "hello-world-react-dev"` combined with `"${var.project_name}-${var.environment}-static"` yields `hello-world-react-dev-dev-static` | `environments/dev/terraform.tfvars` vs `environments/dev/main.tf` L51 |
| Providers pinned to AWS `~> 4.0` and Cloudflare `~> 3.0`; both regions hardcoded to `us-east-1`; both domains are `*.example.com` placeholders | `versions.tf` L13–L22, `environments/{dev,prod}/terraform.tfvars` |
| `modules/static-hosting` emits `cloudfront_domain_name`, `cloudfront_distribution_id`, `cloudfront_hosted_zone_id`, `cloudfront_oai_iam_arn` and `cloudfront_oai_path`, overlapping the responsibilities of `modules/cdn` | `modules/static-hosting/outputs.tf` |

#### W27 — Two `.gitignore` rules do not do what the repository needs

Verified with `git check-ignore -v --no-index`:

1. **SPA build output is not ignored.** `.gitignore` L11 (`/build`) and L12 (`/dist`) are anchored to the repository root by their leading slash, so `src/web/build/**` and `src/web/dist/**` match no rule. Since `webpack.config.ts` L34 writes to `build`, a developer who builds locally can commit the entire bundle by accident.
2. **`*.tfvars` matches files that are already tracked.** L51 ignores `*.tfvars`, yet `infrastructure/terraform/environments/dev/terraform.tfvars` and `.../prod/terraform.tfvars` are both tracked (the rule match is confirmed with `--no-index`). The two existing files are unaffected, but any *new* environment's `terraform.tfvars` will be silently skipped by `git add` — a quiet, easy-to-miss failure mode.

L108 (`.git/`) is also inert, since git never tracks its own directory.

### Documentation accuracy

Documentation drift is treated as a first-class weakness here because it is what an adopter reads *first*, and because several statements would cause an adopter to skip a control they believe already exists. None of these files was corrected; every item is a report.

#### W28 — Root `README.md` misdescribes the repository in seven places

| Line(s) | Text | Reality |
|---|---|---|
| L3–L4 | Badge URLs `https://github.com/actions/workflows/build/badge.svg` and `.../test/badge.svg` | Malformed — they contain no owner or repository segment and resolve against the `github.com/actions` organisation, not this project. Both badges and both link targets are broken. |
| L17 | "WCAG 2.1 Level A compliance" | No accessibility test, linter or audit exists. `HelloWorld.tsx` L34 uses `role="text"`, which is not a valid ARIA role. |
| L25 | "Create React App 5.x" | The SPA is built by a hand-written `webpack.config.ts` with `ts-loader`, `HtmlWebpackPlugin`, `TerserPlugin`, `ForkTsCheckerWebpackPlugin` and `CompressionPlugin`. `react-scripts` is declared at `src/web/package.json` L46 as `"5.x"` but is never invoked by any script. |
| L28 | "Jest 27.x" | The Jest tooling is the 29 line — `@jest/types ^29.0.0` (L29) and `jest-environment-jsdom ^29.0.0` (L44) — and `jest` itself is not declared at all ([W10](#w10--seven-tools-the-spa-depends-on-are-never-declared)). |
| L97–L107 | A directory layout showing `src/components/`, `src/App.tsx`, `src/index.tsx`, `public/`, `build/`, `config/` and `package.json` at the repository root | The real tree is `src/web/src/**`, `src/web/public/`, `src/web/package.json`, plus `src/backend/`, `infrastructure/`, `documentation/`, `blitzy/` and `.github/`. There is no root `package.json` and no `config/` directory. `src/backend/` — the subject of this branch — does not appear in the layout at all. |
| L121 | "Start development server at http://localhost:3000" | `npm start` starts no server at all: `webpack serve` cannot compile `webpack.config.ts` (L180 `TS2448`/`TS2454`), exits 2, and nothing listens on port 3000 ([W34](#w34--npm-start-does-not-start-the-dev-server-cannot-load-its-own-configuration)). Nor does `devServer.https: true` at L169 make this an HTTPS URL: L156 gates the whole `devServer` block behind an `isDevelopment` that never resolves true ([W3](#w3--the-webpack-configuration-references-itself-before-it-is-assigned-and-writes-to-a-directory-the-clean-script-does-not-delete)), so the port and the protocol in this line are both unsupported by the configuration. |
| L123, L124 | "Create production build in build/"; "`npm run lint` — Run ESLint code analysis" | `package.json` L16 cleans `dist`, not `build` ([W3](#w3--the-webpack-configuration-references-itself-before-it-is-assigned-and-writes-to-a-directory-the-clean-script-does-not-delete)); and the `lint` script runs `--fix`, so it rewrites files rather than analysing them ([W5](#w5--the-spa-build-is-wired-to-rewrite-its-own-source-tree-including-in-ci)). |
| L191, L193, L194, L195 | "CSP headers configured"; "Strict HTTPS enforcement"; "Regular dependency audits"; "Security headers implementation" | See [W22](#w22--the-container-image-cannot-be-built-and-could-not-start-if-it-were) and [W15](#w15--there-is-no-security-middleware-and-no-security-gate-in-the-pipeline). The repository's own `documentation/Project Guide.md` L82–L93 lists *Security Headers*, *SSL Certificate* and *Performance Monitoring* as **Pending**, contradicting these four lines from inside the same repository. |

For balance, four stack claims in the same block **are** accurate: L23 React 18.2.0, L24 TypeScript 4.9.5, L27 ESLint 8.x and L29 Webpack 5.x all match the declared dependencies.

#### W29 — The Technical Specification still asserts the project has no API

`documentation/Technical Specifications.md` (1047 lines) contains, unchanged after an HTTP API shipped in this repository:

| Section (heading line) | Line | Assertion |
|---|---|---|
| §3.3 API DESIGN (L302) | L304 | *"Not applicable for this implementation as it's a standalone client-side application with no API requirements."* |
| §5.3 API DESIGN (L492) | L494 | The same sentence, duplicated. |
| §4.4 THIRD-PARTY SERVICES (L377) | L379 | *"Application runs entirely client-side with no external service dependencies."* |
| §7.1 AUTHENTICATION AND AUTHORIZATION (L701) | L707, L709 | *"Public Access \| Unrestricted access to static content"*; *"Role Management \| Not applicable"* |

The database assertions in §3.2 (L300) and §5.2 (L490) remain accurate — there genuinely is no data store. The API assertions do not. An adopter reading this document would conclude there is no server-side attack surface to threat-model, which is no longer true.

The document also duplicates whole sections against itself: §3.2 and §5.2 are both "DATABASE DESIGN", and §3.3 and §5.3 are both "API DESIGN", with identical bodies. Any future correction has to be applied in two places, and nothing enforces that.

#### W30 — Two documents named `Project Guide.md` disagree, and one of them leaks its own generator prompt

`documentation/Project Guide.md` (94 lines, 3362 bytes) and `blitzy/documentation/Project Guide.md` share a filename but are entirely different documents, with different hashes and different subjects. The first describes only the SPA and never mentions the backend — the strings `backend`, `express` and `endpoint` do not occur in it at all.

The second is a **platform-generated build artefact that is rewritten on every run**, so its title, length and interior line numbers are not stable properties of the repository. Everything this assessment records about it is therefore a **date-stamped observation** rather than a durable citation: the figures below are what the file said on the date given, they are expected to change the next time the platform regenerates it, and no range of it is relied upon for any claim. Observed at the re-validation commit on **5 August 2026** it was **708 lines / 61755 bytes**, titled *"Blitzy Project Guide — Express.js Backend Endpoints"* at its L1, and pinning its own provenance internally at its L3–L4 (`HEAD: 958d31b`, `Base: da0d24d`, `Assessment date: 2026-08-05`) — a commit that is neither the one this assessment was authored against nor the one it is re-validated at. Those two short observations, both as of that date, are the only line-level references this assessment makes to it; everything else said about it here describes its subject matter without depending on a line number that regeneration would move. It leads with the backend feature but is not confined to it: its §4 *Runtime Validation & UI Verification* carries a *Frontend SPA (out of AAP scope)* subsection, and it refers to `src/web` throughout. Neither document references the other, so a reader has no way to know which is authoritative or even that the other exists — and because the generated one is replaced on every run, no line of it can be relied upon to survive.

`documentation/Project Guide.md` has three further defects:

1. **L1 leaks the generator's instruction to itself:** *"Based on the technical specification and file implementations, I'll now generate the Project Guide document following the template:"*.
2. **L3 opens a <code>```markdown</code> fence that L94 closes**, wrapping the entire document. Rendered on GitHub, the whole guide displays as one unformatted code block.
3. **L18–L28 bakes a point-in-time status into a versioned file** — a completion pie chart at 95 %, "Estimated engineering hours: 40", "Hours remaining: 2" — which was already stale the moment the backend was added.

Its L82–L93 "HUMAN INPUTS NEEDED" table is simultaneously the most useful thing in the repository and the clearest indictment of its documentation: all eight items are still **Pending** — Environment Variables, API Keys, DNS Configuration, SSL Certificate, Performance Monitoring, Security Headers, Cache Configuration, Build Optimization.

#### W31 — The pull request template is empty, and the Code of Conduct has no contact

`.github/pull_request_template.md` is **0 bytes**, both on disk and in git (`git cat-file -s HEAD:.github/pull_request_template.md` returns `0`). Every pull request therefore opens with a blank description. There is no checklist for tests, no linked-issue requirement, no risk or rollback section — nothing an enterprise change-management process could hook into. This is notable because root `README.md` L186 advertises a "Pull request process" among the contribution guidelines.

`CODE_OF_CONDUCT.md` L61–L73 offers two reporting channels: public GitHub Issues prefixed `[CODE OF CONDUCT]` (L65–L66), and a "Project Email" (L70) for which **no address is given** — while L75–L77 promises confidentiality and respect for reporter privacy, which the public-issue channel cannot provide. L72 promises a 24-hour response. `CONTRIBUTING.md` L153 similarly says to "Email security concerns to project maintainers" without naming an address.

#### W32 — Configuration files carry deprecated or inert settings

Small individually, but together they show that no configuration in the repository has been revalidated against the tool versions it targets:

| File | Setting | Issue |
|---|---|---|
| `src/web/jest.config.ts` | L72–L78 `globals: { 'ts-jest': … }` | Deprecated configuration style in ts-jest 29 (transform options are the supported form), while L88 sets `errorOnDeprecated: true` |
| `src/web/jest.config.ts` | L52–L56 `moduleNameMapper` | Targets `<rootDir>/__mocks__/styleMock.js` and `fileMock.js`; no `src/web/__mocks__` directory exists |
| `src/web/.prettierrc` | `jsxBracketSameLine` | Deprecated in Prettier 2.4, removed in Prettier 3 |
| `src/web/.prettierrc` | `vueIndentScriptAndStyle` | Inert — there is no Vue code |
| `src/web/webpack.config.ts` | L119 `compress: { warnings: false }` | Long-deprecated Terser option |
| `src/web/babel.config.ts` | L34–L36 `modules: 'esnext'`, `useBuiltIns: 'usage'`, `corejs: 3` | `'esnext'` is not among `@babel/preset-env`'s accepted `modules` values, and `core-js` is not a declared dependency. The file is also unreachable: webpack compiles through `ts-loader` and Jest through `ts-jest`, so Babel never runs |
| `src/web/public/index.html` | L13, L14, L16, L17 | `X-Frame-Options`, `X-Content-Type-Options`, `Permissions-Policy` and `Strict-Transport-Security` are declared as `<meta http-equiv>`; browsers honour these only as HTTP response headers. Only L12 (CSP) and L15 (Referrer-Policy) are effective as meta tags |
| `src/web/public/index.html` | L20, L21, L35 | `%PUBLIC_URL%` is a Create React App substitution token; the custom `HtmlWebpackPlugin` configuration never defines it, so the favicon, manifest and script `href`/`src` values would be emitted literally. L35 also hardcodes `/static/js/bundle.js` while `webpack.config.ts` L82 sets `inject: true`, so the plugin injects its own hashed script tags alongside it |
| `src/web/public/index.html` | L24 vs L12 | `<link rel="preconnect" href="https://fonts.gstatic.com">` is contradicted by the CSP on L12, whose `default-src 'self'` would block the font origin |

#### W33 — Eight dependency update branches are open and unmerged

`git branch -a` shows eight Dependabot branches on the remote, none merged. This is the **one claim in this document that the 5 August 2026 re-validation could not re-execute** — the checkout it was re-validated in cannot see those refs at all — so the list below is **carried forward from the original observation of 4 August 2026** and is labelled *static inspection*; the precondition, the test for which situation a given clone is in, how that date is established, and the reason are all recorded in [E17](#e17--unmerged-dependabot-branches).

| Ecosystem | Branch |
|---|---|
| GitHub Actions | `dependabot/github_actions/actions/checkout-4` |
| GitHub Actions | `dependabot/github_actions/actions/setup-node-4` |
| GitHub Actions | `dependabot/github_actions/actions/deploy-pages-4` |
| npm (`src/web`) | `dependabot/npm_and_yarn/src/web/react-739a6347ca` |
| npm (`src/web`) | `dependabot/npm_and_yarn/src/web/styled-components-6.1.15` |
| npm (`src/web`) | `dependabot/npm_and_yarn/src/web/typescript-eslint-6dbe81030e` |
| npm (`src/web`) | `dependabot/npm_and_yarn/src/web/testing-de5456b19f` |
| npm (`src/web`) | `dependabot/npm_and_yarn/src/web/fork-ts-checker-webpack-plugin-9.0.2` |

Automation is opening pull requests and nothing is closing them — which is the predictable consequence of [W1](#w1--no-lockfile-is-committed-while-all-three-workflows-require-one) and [W6](#w6--the-spa-does-not-type-check-13-errors-all-syntax-level) through [W8](#w8--both-spa-test-suites-fail-to-load-so-zero-tests-execute): with the pipeline red for reasons unrelated to the bump, no dependency PR can ever show a green check, so no reviewer can safely merge one.

**The queue does not grow without bound; it stops, which is worse.** Dependabot applies a documented default limit of **five open version-update pull requests per ecosystem** — GitHub's own reference states that once five are open, *"no further pull requests are raised until some of those open requests are merged or closed"* ([source](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#open-pull-requests-limit); security-update pull requests are exempt from that limit and do not count toward it). The branch list above shows this repository has already reached it in the ecosystem that matters most: the **five** `npm (src/web)` branches are exactly the default allowance, so `/src/web` is **saturated**, and no further version-update pull request can be raised for it until a human merges or closes one of the five. Three of those five are grouped pull requests raised by the `groups` rules at `.github/dependabot.yml` L22 — their branch names carry the group identifiers `react`, `typescript-eslint` and `testing` declared there, rather than the `<package>-<version>` form the other two use — so grouping is already doing what it can to fit more updates into the allowance. The `github-actions` ecosystem sits at three of five, and `/src/backend` at zero. The consequence is not a swelling backlog but a frozen one: of the SPA's declared dependencies that trail their current published release ([E15](#e15--declared-versions-versus-current-published-versions)), only those occupying the five slots have been proposed at all — the rest are not merely unmerged, they are **unraised**, and stay unraised until a slot frees. A reviewer watching the pull-request list therefore sees a stable, modest-looking five and no signal at all that the ecosystem is blocked.

The queue has also aged past its own contents: all three GitHub Actions branches target the **v4** line, which is no longer the current major of any of the three actions ([M7](#reproducibility-and-supply-chain), sourced in [E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources)), so merging them frees the slots without reaching current. Separately, `.github/dependabot.yml` sets no `reviewers`/`assignees` on any entry and no `groups` on the `/src/backend` entry (L51–L65), so backend bumps will arrive one pull request per package with no owner attached — and, sharing the same default allowance, five of them will fill it.

## Risks

These are the risks an adopting enterprise carries, derived from the [Weaknesses](#weaknesses) above. Each is rated for **Likelihood** (how probable the consequence is once the repository is adopted as-is) and **Impact** (how severe the consequence is), producing a **Severity**. Ratings use the scale *Low / Medium / High / Very High*; Severity is the higher-weighted combination and is capped at *Critical* where the consequence is immediate and blocking.

No CVE identifier is asserted anywhere below. **Both** dependency trees were audited: `npm audit --json` reports **zero advisories across 356 packages** in `src/backend` ([E4](#e4--backend-advisory-posture)) and **29 advisories — 9 low, 6 moderate, 14 high, 0 critical — across 1576 packages** in `src/web` ([E4b](#e4b--spa-advisory-posture-srcweb)). The dependency risks recorded below are therefore of two kinds: currency and reproducibility risks ([R1](#risk-register), [R3](#risk-register), [R9](#risk-register)), and — confined to the SPA tree — known-vulnerability exposure ([R16](#risk-register)), expressed as `npm audit`'s own severity counts rather than as any named advisory.

### Risk register

| ID | Risk | Evidence | Likelihood | Impact | Severity | Exposure / consequence |
|---|---|---|---|---|---|---|
| R1 | **Builds are not reproducible; the same commit can produce different artefacts** | No lockfile committed (`.gitignore` L88–L89); fresh-clone `npm ci` fails with `EUSAGE`. Independently of that, `prebuild` → `validate` → `lint --fix` puts ESLint in write mode on the critical path of every `npm run build` (`src/web/package.json` L13, L15, L17), so a build that completes rewrites its own inputs — **latent today** only because `validate`'s first step exits non-zero and the `&&` chain stops before `lint` ([W5](#w5--the-spa-build-is-wired-to-rewrite-its-own-source-tree-including-in-ci), [E21](#e21--coverage-thresholds-and-the-validate-short-circuit)) | Very High | High | **Critical** | No two installs are provably identical, so a defect cannot be reliably reproduced or bisected, a release cannot be rebuilt from its tag, and there is no stable input for an SBOM or provenance attestation. Any regulated change-control or software-supply-chain attestation regime fails at this point. The severity rests on the missing lockfile alone, which is active now; the mutating `lint --fix` on the build path is a second, independent route to the same non-reproducibility that arrives the moment the type-check gate passes, so fixing the pipeline without also fixing the script ([P0-5](#p0--make-it-green-and-reproducible-030-days)) trades one cause of R1 for another. |
| R2 | **A day-one adopter inherits a red pipeline on both workflows that run, and a deployment workflow that never runs at all, and cannot distinguish new breakage from inherited breakage** | `npx tsc --noEmit` → 13 errors; `npx eslint … --no-fix` → 92 problems; `npx jest --ci` → 2 suites failed / 0 tests; `npm ci` fails before any of them. `build.yml` and `test.yml` both trigger on push and pull request to `main`; `deploy.yml` L6 waits on the non-existent workflow name `"Build"` and so produces no run to be red | Very High | High | **Critical** | Quality gates stop carrying signal. Because every check is already red, no future pull request — including a security patch — can be evaluated on whether *it* broke something. In practice teams respond by disabling or ignoring the gates, which removes the last defence. |
| R3 | **The runtime contract has been out of support for nearly three years, and no security patch exists for it** | `engines node >= 16.0.0` in both manifests; `node-version: [16.x]` in all three workflows; `node:16-alpine` in `Dockerfile` L2; Node.js 16 end of life 11 September 2023, i.e. 1,059 days before the 5 August 2026 observation date | High | Very High | **Critical** | Any vulnerability disclosed against Node 16 will never be patched upstream. Software-composition tooling now flags end-of-life runtimes as findings in their own right, independent of any individual CVE, so this fails an audit on sight under regimes that require a supported patch path. Compounding it, the runtime actually used here is v22.23.2 — the repository is tested on a runtime it does not document, so an "upgrade" would be an untested change in the opposite direction from what the files say. |
| R4 | **A publicly routable service would run with no operational controls and no way to detect abuse or failure** | `src/backend/server.js` (7 lines) has no logging, no health endpoint (`GET /health` → 404), no `SIGTERM` handling, no error middleware, no `helmet`, no CORS policy, no rate limiting, no request IDs, no metrics, no tracing | Medium (rises to High the moment it is deployed) | Very High | **High** | An incident produces no evidence: no request log, no error log, no metric, no trace. A trivial request flood has nothing to stop it. No probe can tell an orchestrator whether the process is healthy, so a hung process stays in rotation. Deploys sever in-flight requests. Mean-time-to-detect is effectively unbounded and mean-time-to-diagnose is unbounded after that. |
| R5 | **Documentation asserts security controls that do not exist, so adopters will skip controls they believe are in place** | `README.md` L17, L191, L193, L194, L195; `SECURITY.md` L43–L54, L64, L69, L77, L79, L99; contradicted by `nginx.conf` L61/L79/L85, `src/web/public/index.html` L13–L17, `build.yml` L50–L52, and by `documentation/Project Guide.md` L82–L93 listing the same controls as **Pending** | High | High | **High** | This is the most insidious risk in the register, because it is *self-concealing*: a reviewer who reads "CSP headers configured" and "Strict HTTPS enforcement" reasonably closes those checklist items. The controls are absent in every path that actually serves traffic. Compliance attestations built on these statements would be materially inaccurate. |
| R6 | **No identifiable owner and no reachable security contact** | `.github/CODEOWNERS` — nine generic handles, two of them (`@global-owner1`, `@global-owner2` at L1) verbatim from GitHub's documentation example, and none identifiable from the repository; no dedicated `/src/backend/` rule, so the delivered service inherits those L1 defaults; `SECURITY.md` L25/L26/L138/L139 → `security@organization.com`; `CODE_OF_CONDUCT.md` L70 "Project Email" with no address; `.github/pull_request_template.md` is 0 bytes | Very High | Medium | **High** | Review routing exists on paper but resolves to owners no one can identify from the repository, so no change is meaningfully guaranteed a second pair of eyes; whether the owners resolve at all requires GitHub-side validation the repository cannot answer. A vulnerability reporter following `SECURITY.md` reaches an address that does not correspond to any documented mailbox — which converts a coordinated disclosure into either an unreported vulnerability or a public one. Change-management evidence is unproduceable: no PR template, no checklist, no attributable approver. |
| R7 | **No deployment path exists for the service that was just built** | `Dockerfile` builds the SPA only; `docker build --target production` → *target stage "production" could not be found*; `nginx.conf` copied into `conf.d/` cannot be parsed by nginx; `deploy.yml` L6 waits on the non-existent workflow name `"Build"`; Terraform provisions no compute | High | High | **High** | There is no route from commit to running endpoint. Any deployment would be manual, undocumented and unrepeatable, which means no rollback, no audit trail and no disaster-recovery story. The `deploy.yml` failure is silent — the job simply never triggers, so it produces no failing run to notice — and a team reading the workflow file can believe deployment is automated when nothing in the repository can deploy. |
| R8 | **Infrastructure as code cannot be initialised, so the recorded topology is unverified and undeployable** | `terraform init -backend=false` → 7 errors (2 duplicate `required_providers`, 5 duplicate outputs) in both the root module and `environments/dev`; `terraform fmt -check` → 6 files non-canonical; root `main.tf` L7–L13 interpolates variables into a `backend` block, which Terraform forbids | High | Medium | **Medium–High** | The `infrastructure/terraform/` tree cannot be planned, validated or drift-checked. It therefore documents an *intent* that this repository provides no way to verify against any real environment. If a real environment exists, it was created by another means and this code will not manage it; if none exists, adopting this code requires debugging it first. The invalid backend block additionally means no remote state and no state locking — concurrent applies would corrupt state. |
| R9 | **The dependency-update backlog cannot be cleared, and the automation that would refill it has stalled at its own default limit** | 8 unmerged `dependabot/**` branches, of which the **5** in the `npm (src/web)` ecosystem are exactly Dependabot's documented default allowance of five open version-update pull requests per ecosystem ([W33](#w33--eight-dependency-update-branches-are-open-and-unmerged)); declared versions trail current published releases by whole majors (React 18 vs 19, styled-components 5 vs 6, TypeScript 4.9 vs 7, ESLint 8 vs 10, Prettier 2 vs 3, Express 4 vs 5, Jest 29 vs 30); `npm audit` in CI is `continue-on-error: true` | High | Medium | **Medium–High** | Because no PR can go green (R2), no bump can be merged with confidence — including a future security bump. The exposure is not that the queue swells, but that it is **frozen at the cap**: `/src/web` has used all five of its slots, so every other out-of-date SPA dependency is never even proposed, and the drift accumulates silently with nothing in the pull-request list to show it. The longer the gap grows, the larger and riskier each eventual upgrade becomes, until the majors have to be crossed all at once. The non-gating audit means a critical advisory would not stop a release — and this is not hypothetical, because the SPA tree already carries 29 advisories, 14 of them high ([R16](#risk-register), [E4b](#e4b--spa-advisory-posture-srcweb)). Security-update pull requests are exempt from the version-update limit, so that specific path is not blocked by the cap — but it is still blocked by the red pipeline. |
| R10 | **Quality thresholds are declared but unenforceable, giving false assurance** | `src/web/jest.config.ts` L28–L35 declares 100 % global coverage thresholds that are evaluated on every `npm test` and always fail at 0 %, because no suite loads; `src/backend` declares no coverage configuration at all; `.eslintignore` excludes `src/setupTests.ts`, the file whose defect breaks every suite | Medium | Medium | **Medium** | A metrics dashboard or governance review reading the *configuration* would report a 100 % coverage policy. The measured coverage is zero for the SPA and unmeasured for the backend. Any future backend route can ship untested without any gate objecting. |
| R11 | **The delivered SPA does not render, and no automated check would report it** | Verified in a browser: the page is blank, `#root.innerHTML` is empty and every captured pixel is white. Operative cause `public/index.html` L12 CSP `script-src 'self'` versus `webpack.config.ts` L157 `devtool: 'eval-source-map'` → `Uncaught EvalError`, React never executes ([W35](#w35--the-pages-own-content-security-policy-kills-the-development-bundle-before-react-executes)); `npm start` does not start at all ([W34](#w34--npm-start-does-not-start-the-dev-server-cannot-load-its-own-configuration)); and latent behind both, no `ThemeProvider` in `index.tsx` L38–L42 / `App.tsx` L23–L34 while `styles/GlobalStyles.ts` L20–L26 and `components/HelloWorld/styles.ts` L16/L19/L22/L37–L40 read `theme.*` ([W9](#w9--no-themeprovider-wraps-the-tree-so-the-spas-first-render-is-primed-to-throw)) | Very High (measured, not inferred) | Medium | **Medium–High** | The user-visible product is a blank page, and it has three independent causes stacked on top of one another, so any single fix changes nothing observable — which is how a team burns days on the wrong one. Because both test suites fail to load and no smoke test, visual check or end-to-end test exists in any workflow, nothing in the repository would ever report it. The same class of defect can recur unnoticed. |
| R12 | **Build artefacts can be committed by accident, and new environment configuration can be silently dropped** | `git check-ignore -v --no-index`: `src/web/build/**` and `src/web/dist/**` match no rule (`.gitignore` L11–L12 are root-anchored); `*.tfvars` (L51) matches the two already-tracked `terraform.tfvars` files | Medium | Low–Medium | **Medium** | A developer who builds locally can commit the whole bundle, bloating history irreversibly and potentially embedding environment-specific values in source control. Conversely, a new environment's `terraform.tfvars` will be silently skipped by `git add`, so an engineer can believe configuration is committed when it is not. |
| R13 | **Non-functional targets are contractual in tone but unmeasurable in fact** | PRD L138–L142 (load < 1.5 s, TTFB < 200 ms, FCP < 1 s, bundle < 100 KB, memory < 50 MB) and L163 (99.9 % uptime); `reportWebVitals.ts` L44–L48 logs to console only; `webpack.config.ts` L189–L190 budgets 512000 bytes — 5× the stated target — as a warning | Medium | Medium | **Medium** | If these numbers are ever quoted in a service description or contract, the organisation is committing to figures it has no instrument to measure, no baseline for, and — in the bundle-size case — an internal build budget that actively contradicts. A 99.9 % availability commitment with no monitor and no on-call rotation is unmeetable by construction. |
| R14 | **Single-region static topology split across two providers, with aged provider pins and an unattached security policy** | `versions.tf` L13–L22 pins **two** providers — AWS `~> 4.0` (L15) and Cloudflare `~> 3.0` (L21), against current Terraform Registry majors of **6** and **5** respectively ([E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources)); both `environments/{dev,prod}/terraform.tfvars` hardcode `region = "us-east-1"` (dev L10, prod L11); `main.tf` L112–L141 creates an `aws_cloudfront_response_headers_policy` that no distribution references; both domains are `*.example.com` (dev L18, prod L19) | Medium | Medium | **Medium** | The single-region pin is the availability exposure: one region for both environments, with no multi-region or multi-AZ failover story for the origin and no disaster-recovery runbook. The two-provider split is a separate exposure of the opposite kind — it is not vendor lock-in but added coordination surface: CDN and DNS responsibilities straddle AWS and Cloudflare, so an outage, credential rotation or upgrade has to be reasoned about twice, and the two pins are on independent upgrade tracks that must both be maintained. Both are two majors behind current, which will block adoption of current resource types and become a migration project in its own right. The orphaned headers policy means the CDN-level security headers an adopter would assume are active are attached to nothing. |
| R15 | **The build and CI pipeline are wired to modify the source they are validating, and will do so as soon as they get far enough to try** | `prebuild` → `validate` → `lint --fix` (`src/web/package.json` L13, L15, L17); three automated paths reach that step — `build.yml` L59 invokes `npm run lint` directly, while `build.yml` L67 and `Dockerfile` L35 invoke `npm run build`, which reaches it through `prebuild`. **Not active today:** every one of those paths aborts earlier — CI at `npm ci` (L47) and then at `type-check` (L55), the `prebuild` chain at `type-check` — so no run has rewritten the tree. Verified: the short-circuit probe prints `SHORT_CIRCUITED_BEFORE_LINT` and `git status --porcelain` was `<EMPTY>` after every build attempt in this assessment ([W5](#w5--the-spa-build-is-wired-to-rewrite-its-own-source-tree-including-in-ci), [E21](#e21--coverage-thresholds-and-the-validate-short-circuit)) | Low today, **High** the moment [W6](#w6--the-spa-does-not-type-check-13-errors-all-syntax-level) is fixed | Low–Medium | **Medium** | Once the earlier failures are cleared, CI runners and image builds will rewrite the checked-out tree. On a self-hosted runner or a cached workspace that can leak modifications between runs; in a container build it invalidates layer caching non-deterministically; and it makes "the build changed nothing" impossible to assert — a check some change-control regimes require. ESLint sizes the blast radius itself: it reports 71 errors as potentially fixable. The timing is the trap — the hazard activates at precisely the moment the pipeline is expected to go green, so [P0-5](#p0--make-it-green-and-reproducible-030-days) must land with or before [P0-2](#p0--make-it-green-and-reproducible-030-days). |
| R16 | **The SPA dependency tree carries known-vulnerability exposure that the frozen backlog cannot clear** | `npm audit --json` in `src/web` reports **29 advisories — 9 low, 6 moderate, 14 high, 0 critical — across 1576 resolved packages** (64 production, 1512 development), against zero across 356 in `src/backend` ([E4b](#e4b--spa-advisory-posture-srcweb)); three of the SPA's own declarations carry advisories directly, and the never-invoked `react-scripts` (`src/web/package.json` L46) accounts for 24 of the 29, including 13 of the 14 high | High | Medium (lower for production risk today, because no committed pipeline can deploy the SPA at all ([W12](#w12--the-deployment-workflow-can-never-trigger-and-could-not-deploy-if-it-did)) and 1512 of the 1576 packages are development-only; this assessment does not claim to know whether any site is live — see [Claims deliberately not made](#claims-deliberately-not-made)) | **Medium–High** | The exposure is overwhelmingly in build-time tooling rather than in shipped code, so the immediate consequence is a compromised *build* rather than a compromised *product* — but that is exactly the supply-chain path an enterprise threat model treats as high value, and it is unpatchable today for the reasons in [R1](#risk-register), [R2](#risk-register) and [R9](#risk-register): no lockfile means no reproducible remediation baseline, the red pipeline means no bump can be proven safe, and the non-gating `npm audit` (`build.yml` L50–L52) means none of this stops a release. An adopter should assume a triage backlog on day one, and should expect `react-scripts` removal ([M14](#frontend-stack-currency), [P0-4](#p0--make-it-green-and-reproducible-030-days)) to do most of the work. |

### How the risks compound

The three Critical risks are not independent — they form a single chain, which is why fixing them in order matters more than fixing them in parallel:

**R1 (no lockfile) → R2 (red pipeline) → R9 (frozen dependency backlog) → R3 (unpatchable runtime).**

Because no lockfile is committed, `npm ci` fails, so both workflows that a pull request actually triggers go red before they evaluate anything. Because the checks that gate a pull request are red, no Dependabot pull request can show a green check, so none is merged. Because none is merged, the stack — including the end-of-life runtime — cannot move. Committing a lockfile is therefore not a cosmetic first step; it is the step that unblocks the other three. The chain has one more link: **R9 → R16**. The same frozen backlog that cannot cross a major also cannot clear the 29 advisories already sitting in the SPA tree, and the non-gating audit guarantees nothing will insist that it does. `deploy.yml` sits outside this chain rather than adding to it: it never runs, so it contributes no failing check — but it also means a green pipeline would still deploy nothing.

A second, independent chain runs through trust: **R5 (inaccurate documentation) → R6 (no accountable owner) → unverifiable compliance posture.** Inaccurate security claims plus placeholder owners mean there is no one who can be asked to confirm or deny a control, so the documentation becomes the *de facto* system of record for controls that do not exist.

## Modernization Opportunities

**These are recommendations only. Nothing in this section has been implemented, and no declared version anywhere in the repository was changed while producing this assessment.** `src/backend/package.json` still declares `express ^4.21.2`, `jest ^29.7.0` and `supertest ^7.2.2` with `engines node >= 16.0.0` / `npm >= 8.0.0`; `src/web/package.json` is untouched; all three workflows still pin `node-version: [16.x]`; and `infrastructure/docker/Dockerfile` still builds on `node:16-alpine`.

Every "target" version below for an **npm package** is the version currently published on the npm registry, observed with `npm view <package> version` and re-observed on **5 August 2026**; the full table is reproduced in the [Evidence Appendix](#evidence-appendix). Target versions for **GitHub Actions** are not npm packages and do not come from `npm view`; they come from each action's own GitHub releases page, also recorded in the appendix with tag, release date and commit. Version currency decays, so every target below should be re-checked against these same sources before the work is scheduled. Where crossing several majors at once would be unwise, an intermediate migration milestone is named.

Every target in this section has been re-observed against those same sources, most recently in a complete re-run of the [E15](#e15--declared-versions-versus-current-published-versions) matrix at 22:10 UTC on 5 August 2026. **Two targets below have moved since this section was first written, both by a single minor and neither across a major:** `web-vitals`, from 6.0.1 to 6.1.0 in [M15](#frontend-stack-currency), and — at the earlier evidence re-baseline — the two Terraform provider heads behind [M26](#delivery-pipeline-and-infrastructure), by one minor each. Both are recorded at their re-observed values, and in both cases the majors that the recommendations actually rest on held: 6 for `web-vitals`, 6 and 5 for the AWS and Cloudflare providers. That is the expected behaviour of this section: the recommendations are expressed as majors and as named intermediate milestones precisely so that a minor bump on the registry does not invalidate them. It is also why every target carries a dated, linked source — a registry head can move within a single day, and `web-vitals` did.

### Runtime and platform

| # | Current | Target | Ripple this carries |
|---|---|---|---|
| M1 | Node **16.x** — end of life 11 September 2023 — declared in both manifests, all three workflows and the `Dockerfile`; while the runtime that actually executes the repository is **v22.23.2** | An actively supported LTS line. **Node 24** is the current Active LTS (supported to 30 April 2028); **Node 22** is in Maintenance LTS (to 30 April 2027) and is the smaller step, matching what already runs here | Touches `src/backend/package.json` L6–L9, `src/web/package.json` L5–L8, `build.yml` L30, `test.yml` L22, `deploy.yml` L34, `Dockerfile` L2/L6, root `README.md` L26/L35 and `CONTRIBUTING.md` L31 — **eight files** carrying **ten separate pins** between them, all of which must move together or the contract fragments further. A ninth file does not exist yet, and creating it is the other half of the fix: an `.nvmrc` (or a `volta`/`engine-strict` pin) is what stops the documented and actual runtimes diverging again. This is the prerequisite for M2, M4 and M9, each of which has a Node floor above 16. |
| M2 | `express ^4.21.2` (resolves to 4.22.2) | `express 5.2.1` | Express 5 requires Node 18+, so M1 must land first. Breaking changes to plan for: rejected async-handler errors now propagate to error middleware automatically; `req.query` parsing default changed; several deprecated methods removed; path-to-regexp semantics changed for wildcard routes. For a two-route service the migration is close to trivial *today* — which is precisely the argument for doing it now rather than after the service grows. |
| M3 | Two independent packages, no root manifest, each installed and tested separately | **npm workspaces** (or pnpm/Nx/Turborepo) with a root `package.json`, a shared base `tsconfig`, a shared ESLint and Prettier configuration, and root `install` / `lint` / `test` / `build` scripts | This is the change that makes every other quality improvement apply to both packages at once. It also eliminates the duplicated `engines` blocks that can drift ([W4](#w4--the-declared-runtime-has-been-out-of-support-for-nearly-three-years-and-diverges-from-the-runtime-actually-used)), gives CI a single entry point (which is the root cause of [W13](#w13--the-backend-has-zero-ci-coverage)), and enables dependency hoisting. Requires reworking all three workflows' `working-directory` settings and adding a `workspaces` array. |
| M4 | Backend is plain CommonJS JavaScript, while the rest of the repository is TypeScript | Port `src/backend/` to TypeScript, sharing the base `tsconfig` from M3 | Aligns the service with the repository's own stated conventions and gives the future request/response types somewhere to live. Needs a build step (`tsc` or `tsup`), a `dist` output, an updated `main`, and `@types/express`. Small now (7 lines); grows in cost with every route added first. |

### Reproducibility and supply chain

| # | Current | Target | Ripple this carries |
|---|---|---|---|
| M5 | `package-lock.json` and `yarn.lock` git-ignored (`.gitignore` L88–L89); `npm ci` fails in a clean checkout | Commit a `package-lock.json` per package (or one root lockfile under M3) and keep `npm ci` as the only install command in CI and in the `Dockerfile` | Requires removing L88–L89 from `.gitignore` and committing the generated lockfiles. This single change makes all three workflows' existing `cache-dependency-path` settings correct, unblocks the whole Dependabot backlog ([W33](#w33--eight-dependency-update-branches-are-open-and-unmerged)), and gives every subsequent supply-chain control (SBOM, provenance, dependency review) a stable input. It is the highest-leverage single change available in this repository. |
| M6 | No SBOM, no artefact signing, no provenance, no dependency-review gate; `npm audit` non-gating (`build.yml` L50–L52) | CycloneDX or SPDX SBOM generated per build and published as a release artefact; `npm audit` (or `osv-scanner`) as a **gating** step with an explicit, reviewed allowlist; `actions/dependency-review-action` on pull requests; build provenance attestation | Depends on M5 — an SBOM without a lockfile is not meaningfully reproducible. Making the audit gate will initially fail builds, so it needs a triage window and a documented exception process. This is the set of controls most software-supply-chain frameworks now ask for by name. |
| M7 | Actions pinned to `checkout@v3`, `setup-node@v3`, `deploy-pages@v2`; three update branches already open, every one of them targeting the **v4** line | Current majors as of 5 August 2026, read from each action repository's own releases page — where exactly one tag carries the **Latest** badge — and recorded with their sources in [E15a](#e15a--github-actions-declared-versions-versus-current-releases) and [E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources): **`checkout@v7`** (latest release v7.0.1), **`setup-node@v7`** (v7.0.0), **`deploy-pages@v5`** (v5.0.0); ideally pinned by commit SHA rather than by tag | The three open Dependabot branches are **stale intermediate upgrades, not the current majors** — they stop at `v4`, leaving `checkout` and `setup-node` three majors behind and `deploy-pages` one behind (tags, dates and commits in [E15a](#e15a--github-actions-declared-versions-versus-current-releases)). Merging them is review-and-merge rather than authoring and is still worth doing as a first hop — `checkout`'s v4 line is still maintained, its head being v4.4.0, while `deploy-pages` has no current v4 release — but it does not reach current, so a deliberate second bump is required afterwards ([P0-10](#p0--make-it-green-and-reproducible-030-days)). Note the newest majors migrated to ESM and raise the minimum Actions Runner version, so verify runner compatibility rather than bumping blind. Pinning by SHA additionally protects against a tag being re-pointed — a control several frameworks require for third-party actions. |

### Frontend stack currency

| # | Current | Target (current published version) | Ripple this carries |
|---|---|---|---|
| M8 | `react ^18.2.0`, `react-dom ^18.2.0` | **19.2.8** | React 19 removes legacy string refs and `propTypes`, changes `ref` handling (forwardRef largely unnecessary), and introduces the new Actions APIs. Requires matching `@types/react` / `@types/react-dom` and `@testing-library/react` **16.3.2** (from `^13.4.0` — a three-major jump that alone changes render/act semantics). A Dependabot `react` group branch is already open. |
| M9 | `jest ^29.7.0` (backend); Jest 29 tooling undeclared in the SPA | **30.4.2** | Jest 30 raises the Node floor to 18, so M1 must land first, and it raises the TypeScript floor to **5.4+**, which the declared `typescript ^4.9.5` does not meet — so the SPA half of this cannot land as an isolated bump and must move with [M11](#frontend-stack-currency). It also drops some deprecated matchers and changes default `testEnvironment` behaviour. Doing this alongside M14 (declaring the missing tooling) is more efficient than doing either alone. Both floors are sourced in [E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources). |
| M10 | `styled-components ^5.3.0` | **6.5.0** | v6 changes the `DefaultTheme` typing model, removes the `.withComponent` API and alters the `as` prop and `shouldForwardProp` behaviour. This intersects directly with [W9](#w9--no-themeprovider-wraps-the-tree-so-the-spas-first-render-is-primed-to-throw): the theme wiring should be corrected *before* the major bump, or the two failures will be indistinguishable. A Dependabot branch is already open. |
| M11 | `typescript ^4.9.5` | **7.0.2** currently published; **5.x** is the sane intermediate milestone | Crossing 4.9 → 7 in one step is not advisable. Take 5.x first (stricter `satisfies`, `const` type parameters, decorator changes), and only then evaluate the next major. Note that all 13 current `tsc` errors ([W6](#w6--the-spa-does-not-type-check-13-errors-all-syntax-level)) are *syntax* errors that any TypeScript version rejects, so they must be fixed before a version change can be assessed at all. |
| M12 | `eslint ^8.32.0` with `.eslintrc.json`; `@typescript-eslint/* ^5.48.2` | **eslint 10.8.0**; migrate to **flat config** (`eslint.config.js`), which ESLint 9 made the default; `@typescript-eslint 8.66.0` | The flat-config migration is the real work: `.eslintrc.json`'s `env`, `extends`, `plugins` and `overrides` blocks all change shape, and `.eslintignore` is replaced by an `ignores` entry inside the config. Recommend ESLint 9 + flat config as the milestone, then 10. `typescript-eslint` v8 also renames and re-scopes several rules used in `.eslintrc.json`. A Dependabot branch is already open for `typescript-eslint`. |
| M13 | `prettier ^2.8.0`, with `jsxBracketSameLine` (removed in v3) and an `arrowParens` value that contradicts ESLint | **3.9.6** | v3 changes default `trailingComma` to `all` and makes markdown/JSX formatting changes, so expect a one-off repository-wide reformat — best landed as a single isolated commit so it never pollutes a review diff. Resolve the `arrowParens` conflict ([W7](#w7--the-spa-does-not-lint-92-problems)) and add a `format:check` script in the same change, since Prettier is currently configured but never executed. |
| M14 | `react-scripts "5.x"` declared but never invoked; `jest`, `ts-jest`, `ts-node`, `ts-loader`, `@types/node`, `rimraf` and `identity-obj-proxy` all used but undeclared | Remove `react-scripts` entirely; declare all seven missing tools with explicit versions | Removing `react-scripts` alone drops a very large unused transitive tree from the install (and from every audit and SBOM): re-resolving the SPA manifest without it takes the tree from **1576 packages carrying 29 advisories to 840 carrying 5**, eliminating 24 advisories including 13 of the 14 high ([E4b](#e4b--spa-advisory-posture-srcweb)) — which makes this the single highest-yield security change available to the SPA, not merely a tidy-up. Declaring the missing seven is what makes the manifest a true description of the package and makes a clean-install CI run possible. Also remove the now-inert `babel.config.ts`, or wire Babel in deliberately — today it is neither. |
| M15 | `web-vitals ^2.1.0`, `fork-ts-checker-webpack-plugin ^7.3.0`, `webpack ^5.75.0` | **web-vitals 6.1.0**, **fork-ts-checker-webpack-plugin 9.1.0**, **webpack 5.109.2** | `web-vitals` v3 replaced `getFID`/`getCLS`-style getters with `onFID`/`onCLS` and later dropped FID in favour of INP, so `reportWebVitals.ts` L44–L48 must be rewritten. The 6.0.1 → 6.1.0 move recorded in [E15](#e15--declared-versions-versus-current-published-versions) is a minor within major 6 and changes none of that migration work. `fork-ts-checker-webpack-plugin` v9 changes its options shape. `webpack` is a patch-level move within 5.x. A Dependabot branch for the ts-checker plugin is already open. |

### Backend hardening and contract

| # | Current | Target | Ripple this carries |
|---|---|---|---|
| M16 | No security middleware of any kind beyond `app.disable('x-powered-by')` | `helmet` for security headers; an **explicit allowlist** CORS policy (never `*`); `express-rate-limit` (or gateway-level rate limiting); an explicit body-size limit; explicit server timeouts | Adds real HTTP-level headers to the only component that actually serves the API — which is what would finally make root `README.md` L191 and L195 true. Each addition needs a test, and the CORS allowlist needs to be environment-driven, so it should land after M17 (structured configuration) or alongside it. |
| M17 | No logging at all; `PORT` is the only configuration input | Structured JSON logging with `pino` (or equivalent) including request logging and redaction; schema-validated configuration (e.g. `zod`/`envalid`) so the process fails fast on invalid input rather than starting in a bad state | Logging is the prerequisite for every other operability improvement — an alert with no log to pivot to is not actionable. Requires deciding a log schema and correlation-ID header up front so it is consistent from the first line rather than retrofitted. |
| M18 | The Express service defines no health route (`GET /health` → 404), while the only two `/health` probes in the repository — `Dockerfile` L75–L76 and `docker-compose.yml` L18–L19 — are attached to the nginx/SPA image and never reach this service | Add `/healthz` (liveness) and `/readyz` (readiness) endpoints to the Express service, plus graceful `SIGTERM`/`SIGINT` shutdown that stops accepting connections, drains in-flight requests and exits with a bounded timeout. **Then update the deployment definitions to actually probe them:** the backend needs its own container image and service entry ([W17](#w17--the-backend-has-no-container-image-and-no-deployment-path)) whose `HEALTHCHECK` targets `/healthz` on the backend port, and the SPA's own probe must be repointed at a location `nginx.conf` answers explicitly rather than one the `try_files` fallback swallows | The endpoints are what make the service deployable behind any load balancer or orchestrator, but they do **not** by themselves repair the two existing checks — those point at a different service, so they must be changed too. Adding endpoints without changing the probe definitions leaves the SPA probe returning its unconditional fallback 200 and the backend still unprobed. Requires retaining the `http.Server` handle that `server.js` L7 currently discards. |
| M19 | No 404 handler, no error middleware; unknown routes return Express's default HTML page | A terminal 404 handler and a 4-argument error middleware emitting a single consistent machine-readable error shape (RFC 9457 `application/problem+json` is a good default), with stack traces never returned to clients | Also fixes the smaller content-type finding: `res.send()` with a string yields `text/html; charset=utf-8` for both endpoints today, where `text/plain` is what the contract describes. |
| M20 | No API contract of any kind | An **OpenAPI 3.1** document committed alongside the service, with schema validation in tests and a contract check in CI; a `/v1` (or header-based) version scheme before a second consumer exists | Enables generated clients, gateway import, consumer-driven contract testing and machine-readable change detection. Cheapest to introduce now, while the contract is two strings, and progressively more expensive with every route added. |
| M21 | Metrics, tracing and alerting all absent | A `/metrics` endpoint (Prometheus exposition) with RED metrics per route; OpenTelemetry tracing with context propagation; SLOs derived from the PRD targets, with alerts wired to them | This is what converts the PRD's 99.9 % uptime and sub-200 ms TTFB targets ([W16](#w16--performance-and-availability-are-asserted-but-never-measured)) from aspirations into measured objectives. Requires a collector/backend decision, which is an organisational choice rather than a code one. |

### Delivery pipeline and infrastructure

| # | Current | Target | Ripple this carries |
|---|---|---|---|
| M22 | Backend has no image; `Dockerfile` builds the SPA only; `docker build --target production` fails | A dedicated multi-stage `Dockerfile` for `src/backend/` on a supported Node LTS base, pinned by digest, running as a non-root user, with `npm ci --omit=dev`, a `HEALTHCHECK` pointing at the real `/healthz` from M18, and `dumb-init`/`tini` for correct signal handling | Requires a runtime deployment target to exist — ECS/Fargate, App Runner, Kubernetes or an equivalent — which is a Terraform addition, not a Dockerfile one. Also the moment to fix `docker-compose.yml`'s non-existent `target:` values, its unresolvable `dockerfile:` path, its `user: node` on an nginx image and its `npm run start:dev` command, and to move `.dockerignore` into the actual build context. |
| M23 | `nginx.conf` is a full server config copied into `conf.d/default.conf`, where it cannot be parsed; `add_header` in the `location` blocks discards all inherited security headers; `listen 80` under a non-root user | Reduce the file to a `server { … }` block appropriate for `conf.d/`; re-declare every security header inside each `location` that declares any (or adopt the `headers-more` module); listen on an unprivileged port and let the platform map 80/443; add a real `/health` location; add HTTP-to-HTTPS redirection and TLS termination | This is what would make root `README.md` L191 ("CSP headers configured") and L193 ("Strict HTTPS enforcement") accurate for the first time, and it is a prerequisite for the container ever starting. |
| M24 | No backend job in any workflow; all three scope to `src/web`; `deploy.yml` waits on a workflow name that does not exist | A matrix or per-package job set covering **both** packages — install, lint, type-check, test with coverage, audit, build — with enforced coverage thresholds; correct the `workflow_run` name to `Build and Test` (or trigger deployment directly); add `actions/configure-pages` and `actions/upload-pages-artifact` before `deploy-pages`; add `concurrency` and `timeout-minutes` to every workflow; deduplicate `test.yml` against `build.yml` | Easiest and most valuable after M3 (workspaces), because a single root command replaces the per-directory duplication that caused the omission. Requires replacing the mutating `lint --fix` with a check-only lint step so CI stops rewriting the tree. |
| M25 | No SAST, no secret scanning, no IaC scanning, no accessibility or performance gate | CodeQL (or Semgrep) on pull requests; secret scanning with push protection plus `gitleaks` in CI; `tfsec`/`checkov` and `terraform validate` + `fmt -check` on the IaC tree; `hadolint` on the Dockerfiles; `axe`/`pa11y` for the accessibility claim; Lighthouse CI with a bundle-size budget aligned to the PRD's 100 KB target | Each of these turns a documentation claim into an enforced gate — which is the systematic answer to [R5](#risk-register). The Terraform checks are the ones that would have caught [W25](#w25--terraform-does-not-initialise) on the commit that introduced it. |
| M26 | Long-lived cloud credentials implied; AWS provider `~> 4.0`, Cloudflare `~> 3.0`; Cloudflare token read from on-disk files and an SSM parameter wrapped in `nonsensitive()`; root backend block is invalid so there is no working remote state | **OIDC federation** (`aws-actions/configure-aws-credentials` with `id-token: write`) so no static keys exist anywhere; the current provider majors — AWS **6**, Cloudflare **5**, read from the Terraform Registry ([E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources)) — together with the correct `cloudflare/cloudflare` source; secrets from a managed store (AWS Secrets Manager / SSM with `sensitive` preserved), never from files or `nonsensitive()`; a **valid** S3 backend with literal values plus DynamoDB (or S3 native) state locking | Removes standing credentials entirely — usually the single largest cloud-security improvement available to a repository like this. The provider major upgrades carry their own resource-schema migrations and should be sequenced after the configuration validates ([W25](#w25--terraform-does-not-initialise)). Correcting the backend block is what makes concurrent applies safe. |
| M27 | Documentation asserts controls that do not exist; two same-named Project Guides; a Technical Specification that says the project has no API | Bring every claim back to what the code does, and add a docs-accuracy check to CI (dead-link checking, and a required documentation section in the PR template) so drift is caught mechanically rather than by review | Nothing in this assessment corrects these files — that is deliberate, since the request was to analyse. But the durable fix is a *gate*, not a one-off edit: the drift documented in [W28](#w28--root-readmemd-misdescribes-the-repository-in-seven-places) through [W31](#w31--the-pull-request-template-is-empty-and-the-code-of-conduct-has-no-contact) accumulated because nothing ever checked. |

## Recommended Next Steps

> **These are recommendations. This pull request implements none of them.** It adds this assessment document and one pointer section in the root `README.md`, and changes nothing else. No code, dependency, version, workflow, manifest, configuration file or infrastructure definition was modified, and no finding in this document was remediated. Verifying that is straightforward: `git diff` against `src/backend`, `src/web`, `.github`, `infrastructure`, `.gitignore`, `LICENSE`, `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` and the pre-existing `documentation/*.md` files is empty.

The roadmap below is ordered by dependency, not by preference. **P0 makes the repository truthful and reproducible; P1 makes it operable and secure; P2 modernises and scales it.** Attempting P1 before P0 wastes effort, because there is no green pipeline to prove a P1 change worked.

**Effort key:** **S** ≈ up to 1 day · **M** ≈ 2–5 days · **L** ≈ 1–3 weeks · **XL** ≈ more than 3 weeks, for one engineer at the stated role.

### P0 — Make it green and reproducible (0–30 days)

*Exit criterion: a clean clone installs deterministically, all three workflows pass, and no committed document asserts a control the code does not implement.*

| # | Step | Owning role | Effort | Resolves |
|---|---|---|---|---|
| P0-1 | Commit a `package-lock.json` for each package and remove L88–L89 from `.gitignore`. Confirm `npm ci` succeeds from a clean clone in both packages. | Build / Platform Engineer | **S** | [W1](#w1--no-lockfile-is-committed-while-all-three-workflows-require-one), [R1](#risk-register), [M5](#reproducibility-and-supply-chain) — unblocks everything below |
| P0-2 | Fix the SPA's five unparseable files: remove `as const` from the type aliases in `config/constants.ts`; rename `utils/testUtils.ts` to `.tsx`; convert the committed prose and markdown fences in `components/HelloWorld/index.ts`, `components/index.ts` and `utils/errorBoundary.tsx` into comments or delete them. Target: `npx tsc --noEmit` exits 0. | Frontend Engineer | **M** | [W6](#w6--the-spa-does-not-type-check-13-errors-all-syntax-level), [R2](#risk-register) |
| P0-3 | Correct `src/web/src/setupTests.ts` L8 to `'./utils/testUtils'`; create the missing `src/web/__mocks__/styleMock.js` and `fileMock.js`; declare `identity-obj-proxy`. Target: both suites load and their assertions run. | Frontend Engineer | **S** | [W8](#w8--both-spa-test-suites-fail-to-load-so-zero-tests-execute), [R2](#risk-register) |
| P0-4 | Declare the seven undeclared tools (`jest`, `ts-jest`, `ts-node`, `ts-loader`, `@types/node`, `rimraf`, `identity-obj-proxy`) with explicit versions, and remove the unused `react-scripts` — which alone clears 24 of the SPA's 29 advisories ([E4b](#e4b--spa-advisory-posture-srcweb)). | Frontend Engineer | **S** | [W10](#w10--seven-tools-the-spa-depends-on-are-never-declared), [M14](#frontend-stack-currency), [R16](#risk-register) |
| P0-5 | Split linting into `lint` (check-only) and `lint:fix`; point `validate` and `prebuild` at the check-only variant so no build ever rewrites source. | Frontend Engineer | **S** | [W5](#w5--the-spa-build-is-wired-to-rewrite-its-own-source-tree-including-in-ci), [R15](#risk-register) |
| P0-6 | Clear the 92 lint problems; resolve the `arrowParens` conflict between `.prettierrc` and `.eslintrc.json` L90; remove `jsxBracketSameLine` and `vueIndentScriptAndStyle`; add a `format:check` script. Target: `eslint` exits 0. | Frontend Engineer | **M** | [W7](#w7--the-spa-does-not-lint-92-problems), [R2](#risk-register) |
| P0-7 | Remove `--optimize-minimize` from the `build` script; fix the `config.plugins` self-reference at `webpack.config.ts` L180 (hoist the plugin array); make the factory read `mode` from webpack's `argv` rather than `env` — which is also what makes the `devServer` block at L156–L174 apply at all; align `clean` with the real output directory. Target: `npm run build` produces a bundle **and `npm start` serves the application**. | Frontend Engineer | **M** | [W2](#w2--the-spa-build-script-passes-a-flag-webpack-5-removed), [W3](#w3--the-webpack-configuration-references-itself-before-it-is-assigned-and-writes-to-a-directory-the-clean-script-does-not-delete), [W34](#w34--npm-start-does-not-start-the-dev-server-cannot-load-its-own-configuration), [R1](#risk-register) |
| P0-15 | Reconcile the page's Content-Security-Policy with the chosen devtool: either serve a development-only policy that includes `'unsafe-eval'`, or set a non-`eval` devtool at `webpack.config.ts` L157 (`source-map` / `cheap-module-source-map`); and stop declaring the policy as a `<meta>` tag in `public/index.html` L12 so development and production can differ. Target: the development bundle executes and `#root` is populated. | Frontend Engineer | **S** | [W35](#w35--the-pages-own-content-security-policy-kills-the-development-bundle-before-react-executes), [R11](#risk-register) — **blocks P0-8** |
| P0-8 | Wrap the application in a styled-components `ThemeProvider` supplying `defaultTheme` — both `GlobalStyles` and `HelloWorld` need it — and add one smoke test asserting the message renders. **Depends on P0-15 for the development path and on P0-7 for the production path:** until one of them lands the bundle cannot execute, so this change is unobservable. Target: the rendered page shows the message. | Frontend Engineer | **S** | [W9](#w9--no-themeprovider-wraps-the-tree-so-the-spas-first-render-is-primed-to-throw), [R11](#risk-register) |
| P0-9 | Add a backend CI job (install, test, audit) and correct `deploy.yml` L6 to `workflows: ["Build and Test"]`. Add `concurrency` and `timeout-minutes` to `test.yml` and `deploy.yml`; deduplicate `test.yml` against `build.yml`. | DevOps Engineer | **M** | [W12](#w12--the-deployment-workflow-can-never-trigger-and-could-not-deploy-if-it-did), [W13](#w13--the-backend-has-zero-ci-coverage), [R7](#risk-register) |
| P0-10 | Merge the three GitHub Actions update branches (`checkout-4`, `setup-node-4`, `deploy-pages-4`) as an intermediate hop, then raise a follow-up that bumps the same three actions again to the current majors (`checkout@v7`, `setup-node@v7`, `deploy-pages@v5` as of 5 August 2026 — see [M7](#reproducibility-and-supply-chain) and [E16](#e16--runtime-framework-and-tooling-lifecycle-facts-and-their-sources)), checking runner compatibility for the ESM-based majors, and re-pin all three by commit SHA. Then work through the five npm branches now that checks can go green. | DevOps Engineer | **S** | [W33](#w33--eight-dependency-update-branches-are-open-and-unmerged), [R9](#risk-register), [M7](#reproducibility-and-supply-chain) |
| P0-16 | Harden `.github/dependabot.yml` itself, so the queue P0-10 drains stays reviewable afterwards. The queue is already bounded — Dependabot's default of five open version-update pull requests per ecosystem is what stalled `/src/web` in the first place ([W33](#w33--eight-dependency-update-branches-are-open-and-unmerged)) — so the work here is not to bound it but to make the effective policy explicit and the throughput adequate: state `open-pull-requests-limit` on all three `updates` entries so the allowance is a deliberate, reviewed number in the file rather than an unstated default nobody has looked at, and raise it only alongside the capacity to review it; add `groups` to the `/src/backend` entry (L51–L65) so backend bumps arrive as one reviewable pull request instead of one per package — mirroring the three groups the `/src/web` entry already declares at L22, which is the change that actually gets more updates through a fixed allowance; and give every entry a routable owner, either via `reviewers`/`assignees` or by relying on the dedicated `/src/backend/` CODEOWNERS rule added in P0-12, since a saturated queue with no assignee has nobody to unblock it. | DevOps Engineer | **S** | [W33](#w33--eight-dependency-update-branches-are-open-and-unmerged), [R9](#risk-register), [R6](#risk-register) |
| P0-11 | Correct every inaccurate documentation claim: `README.md` L3–L4 badges, L17, L25, L28, L97–L107, L121, L123–L124, L191–L195; `SECURITY.md` L64/L69/L77/L79/L99 and the `[Current Date]` placeholder at L153; `documentation/Technical Specifications.md` L304/L379/L494/L707–L709; the stray `markdown` fence and leaked generator prompt in `documentation/Project Guide.md`. Reconcile or cross-reference the two `Project Guide.md` files. | Technical Writer + Engineering Lead | **M** | [W28](#w28--root-readmemd-misdescribes-the-repository-in-seven-places)–[W30](#w30--two-documents-named-project-guidemd-disagree-and-one-of-them-leaks-its-own-generator-prompt), [R5](#risk-register) |
| P0-12 | Replace the nine generic owners in `.github/CODEOWNERS` with named teams, and confirm via GitHub's server-side CODEOWNERS validation that each resolves and holds write access; add a dedicated `/src/backend/` rule so the delivered service has an identifiable owner instead of inheriting the L1 default; fix the invalid multi-pattern lines (L18, L21, L30) and the brace-expansion pattern (L5); remove the phantom `/config/` rule (L15) and the untrackable `package-lock.json` owner (L21); then enable required-review branch protection. | Engineering Manager | **S** | [W20](#w20--codeowners-relies-on-generic-placeholder-handles-and-assigns-the-backend-no-dedicated-owner), [R6](#risk-register) |
| P0-13 | Replace the placeholder security contacts in `SECURITY.md` with a monitored channel and enable GitHub private vulnerability reporting; add a reporting address to `CODE_OF_CONDUCT.md` L70; author the empty `.github/pull_request_template.md` with a tests / risk / rollback / docs checklist. | Security Lead + Engineering Manager | **S** | [W21](#w21--securitymd-promises-a-security-programme-the-repository-does-not-have), [W31](#w31--the-pull-request-template-is-empty-and-the-code-of-conduct-has-no-contact), [R6](#risk-register) |
| P0-14 | Fix the two `.gitignore` rules: unanchor `build`/`dist` (or scope them to `src/web/`), and reconcile `*.tfvars` with the two files already tracked. | Build / Platform Engineer | **S** | [W27](#w27--two-gitignore-rules-do-not-do-what-the-repository-needs), [R12](#risk-register) |

> **On the numbering:** step IDs are append-only across revisions of this document, so **P0-15 and P0-16 are listed in dependency order rather than in numerical order** — P0-15 precedes P0-8 because it unblocks it, and P0-16 follows P0-10 because both act on the same dependency-update automation, P0-10 draining the existing queue and P0-16 keeping it drained. The same convention applies to [W34](#w34--npm-start-does-not-start-the-dev-server-cannot-load-its-own-configuration) and [W35](#w35--the-pages-own-content-security-policy-kills-the-development-bundle-before-react-executes), which sit beside the findings they extend.

### P1 — Make it operable and secure (30–90 days)

*Exit criterion: the service can be deployed by pipeline, observed in production, and defended; security controls are enforced by gates rather than asserted in prose.*

| # | Step | Owning role | Effort | Resolves |
|---|---|---|---|---|
| P1-1 | Upgrade to an actively supported Node LTS across all **ten** places the version is pinned, spread over the **eight** files enumerated in [M1](#runtime-and-platform); add an `.nvmrc` and a CI matrix entry so the documented and actual runtimes cannot diverge again. | Platform Engineer | **M** | [W4](#w4--the-declared-runtime-has-been-out-of-support-for-nearly-three-years-and-diverges-from-the-runtime-actually-used), [R3](#risk-register), [M1](#runtime-and-platform) |
| P1-2 | Add structured logging (`pino` or equivalent) with request logging, redaction and a correlation-ID header; add schema-validated configuration so the process fails fast on bad input. | Backend Engineer | **M** | [W14](#w14--the-express-service-has-none-of-the-operational-controls-an-enterprise-requires), [R4](#risk-register), [M17](#backend-hardening-and-contract) |
| P1-3 | Add `/healthz` and `/readyz`, retain the `http.Server` handle, and implement graceful `SIGTERM`/`SIGINT` shutdown with a bounded drain. | Backend Engineer | **S** | [W14](#w14--the-express-service-has-none-of-the-operational-controls-an-enterprise-requires), [R4](#risk-register), [M18](#backend-hardening-and-contract) |
| P1-4 | Add `helmet`, an allowlist CORS policy, rate limiting, an explicit body-size limit and explicit server timeouts. | Backend Engineer + Security Lead | **M** | [W15](#w15--there-is-no-security-middleware-and-no-security-gate-in-the-pipeline), [R4](#risk-register), [M16](#backend-hardening-and-contract) |
| P1-5 | Add a terminal 404 handler and a 4-argument error middleware returning one consistent machine-readable error shape with no stack traces; set the correct `Content-Type` for the plain-text routes. | Backend Engineer | **S** | [W14](#w14--the-express-service-has-none-of-the-operational-controls-an-enterprise-requires), [M19](#backend-hardening-and-contract) |
| P1-6 | Triage the SPA's 29 open advisories first (14 high — most of them cleared by P0-4), then make `npm audit` gating in CI **for both packages** with a reviewed allowlist; add `actions/dependency-review-action`; generate and publish a CycloneDX or SPDX SBOM per build; add build provenance attestation. | DevOps + Security Lead | **M** | [W15](#w15--there-is-no-security-middleware-and-no-security-gate-in-the-pipeline), [R1](#risk-register), [R9](#risk-register), [R16](#risk-register), [M6](#reproducibility-and-supply-chain) |
| P1-7 | Add CodeQL (or Semgrep), secret scanning with push protection plus `gitleaks` in CI, and `hadolint` on the Dockerfiles. | Security Lead | **M** | [W15](#w15--there-is-no-security-middleware-and-no-security-gate-in-the-pipeline), [R5](#risk-register), [M25](#delivery-pipeline-and-infrastructure) |
| P1-8 | Author a backend `Dockerfile` (supported LTS base pinned by digest, non-root user, `npm ci --omit=dev`, `HEALTHCHECK` against `/healthz`, correct signal handling) and provision a runtime target in Terraform. | Platform Engineer | **L** | [W17](#w17--the-backend-has-no-container-image-and-no-deployment-path), [R7](#risk-register), [M22](#delivery-pipeline-and-infrastructure) |
| P1-9 | Repair the SPA container path: reduce `nginx.conf` to a `conf.d`-appropriate `server` block, re-declare the security headers inside each `location` that declares any, add a real `/health` location, listen unprivileged, and add TLS termination with HTTP-to-HTTPS redirection. | Platform Engineer | **M** | [W22](#w22--the-container-image-cannot-be-built-and-could-not-start-if-it-were), [R5](#risk-register), [R7](#risk-register), [M23](#delivery-pipeline-and-infrastructure) |
| P1-10 | Fix `docker-compose.yml`: name the Dockerfile stages it references, correct the `dockerfile:` path, remove the obsolete `version` key and the nonexistent `start:dev` command and `user: node`, and move `.dockerignore` into the real build context. | Platform Engineer | **S** | [W23](#w23--the-compose-file-cannot-resolve-its-own-build-inputs), [R7](#risk-register) |
| P1-11 | Make Terraform initialise: remove the duplicate `required_providers` and duplicate outputs, replace the interpolated `backend` values with literals, reconcile the provider sources, reconcile each environment with its own `terraform.tfvars` — `environments/dev/` needs a `domain_name` declaration to match the value its tfvars sets, while `environments/prod/` needs input variables at all before its tfvars can take effect, and until then that file should not be mistaken for live configuration — align each module's arguments and consumed outputs with what the target module actually declares, remove `timestamp()` from the default tags, and attach the CloudFront response-headers policy. Then add `terraform fmt -check`, `validate` and `tfsec`/`checkov` to CI. | Cloud / Platform Engineer | **L** | [W24](#w24--terraform-is-not-formatted-to-its-own-canonical-style)–[W26](#w26--further-terraform-defects-behind-the-initialisation-failure-static-inspection), [R8](#risk-register), [M26](#delivery-pipeline-and-infrastructure) |
| P1-12 | Replace any long-lived cloud credentials with OIDC federation; move the Cloudflare token to a managed secret store, preserving its `sensitive` marking; enable remote state with locking. | Cloud / Security Engineer | **M** | [W26](#w26--further-terraform-defects-behind-the-initialisation-failure-static-inspection), [R8](#risk-register), [M26](#delivery-pipeline-and-infrastructure) |
| P1-13 | Set realistic, enforced coverage thresholds for both packages (replacing the SPA's unattainable 100 %), and add `--coverage` to the backend test script. | Engineering Lead | **S** | [W11](#w11--coverage-is-either-unenforceable-or-absent), [R10](#risk-register) |
| P1-14 | Commit an OpenAPI 3.1 document for the service, validate responses against it in tests, and add a contract check to CI. Adopt a version scheme before a second consumer exists. | Backend Engineer + API Architect | **M** | [W18](#w18--there-is-no-api-contract), [M20](#backend-hardening-and-contract) |

### P2 — Modernise and scale (90+ days)

*Exit criterion: the stack is on supported majors, one command validates the whole repository, and every documented target is measured.*

| # | Step | Owning role | Effort | Resolves |
|---|---|---|---|---|
| P2-1 | Adopt npm workspaces (or an equivalent monorepo tool) with a root manifest, shared base `tsconfig`, shared ESLint/Prettier configuration, and root `install`/`lint`/`test`/`build` scripts; rework the workflows onto the root commands. | Platform / Build Engineer | **L** | [W19](#w19--there-is-no-root-manifest-and-no-workspace-tooling), [M3](#runtime-and-platform) |
| P2-2 | Migrate the SPA stack: React 18 → 19 (with matching `@types/*` and `@testing-library/react`), styled-components 5 → 6 (after P0-8), TypeScript 4.9 → 5.x, ESLint 8 → 9 flat config → 10, Prettier 2 → 3, and `web-vitals` 2 → current (rewriting `reportWebVitals.ts` for the `on*` API). One major per pull request. | Frontend Engineer | **XL** | [W33](#w33--eight-dependency-update-branches-are-open-and-unmerged), [R9](#risk-register), [M8](#frontend-stack-currency)–[M15](#frontend-stack-currency) |
| P2-3 | Migrate the service to Express 5 and Jest 30 (both require the Node upgrade from P1-1; Jest 30 also requires TypeScript 5.4+, so its SPA half moves with P2-2). Do it while the service is still two routes. | Backend Engineer | **M** | [R3](#risk-register), [R9](#risk-register), [M2](#runtime-and-platform), [M9](#frontend-stack-currency) |
| P2-4 | Port `src/backend/` to TypeScript on the shared base configuration from P2-1, with a build step and `@types/express`. | Backend Engineer | **M** | [W19](#w19--there-is-no-root-manifest-and-no-workspace-tooling), [M4](#runtime-and-platform) |
| P2-5 | Add a `/metrics` endpoint with RED metrics, OpenTelemetry tracing with context propagation, and SLOs derived from the PRD's targets, with alerts wired to them. Ship web-vitals to a real RUM endpoint instead of `console.log`. | SRE / Observability Engineer | **L** | [W16](#w16--performance-and-availability-are-asserted-but-never-measured), [R13](#risk-register), [M21](#backend-hardening-and-contract) |
| P2-6 | Add Lighthouse CI with a bundle-size budget reconciled against the PRD's 100 KB target (currently contradicted by the 512 KB webpack budget), and `axe`/`pa11y` accessibility checks to substantiate or retire the WCAG 2.1 Level A claim. Fix the invalid `role="text"` at `HelloWorld.tsx` L34. | Frontend + QA Engineer | **M** | [W16](#w16--performance-and-availability-are-asserted-but-never-measured), [W28](#w28--root-readmemd-misdescribes-the-repository-in-seven-places), [R13](#risk-register), [M25](#delivery-pipeline-and-infrastructure) |
| P2-7 | Upgrade the Terraform providers off AWS `~> 4.0` and Cloudflare `~> 3.0`; introduce multi-AZ or multi-region resilience and a documented disaster-recovery runbook with a tested restore. | Cloud Engineer | **L** | [W26](#w26--further-terraform-defects-behind-the-initialisation-failure-static-inspection), [R14](#risk-register), [M26](#delivery-pipeline-and-infrastructure) |
| P2-8 | Add a documentation-accuracy gate: dead-link checking in CI, a required documentation section in the PR template, and a periodic review that re-verifies every claim in `README.md` and `SECURITY.md` against the code. | Technical Writer + Engineering Lead | **M** | [W28](#w28--root-readmemd-misdescribes-the-repository-in-seven-places)–[W31](#w31--the-pull-request-template-is-empty-and-the-code-of-conduct-has-no-contact), [R5](#risk-register), [M27](#delivery-pipeline-and-infrastructure) |
| P2-9 | Establish a release process: semantic versioning off `1.0.0`, a generated changelog, tagged releases with attached SBOM and provenance, and a documented rollback procedure. | Engineering Lead | **M** | [W19](#w19--there-is-no-root-manifest-and-no-workspace-tooling), [R1](#risk-register), [R7](#risk-register) |

### Sequencing summary

| Wave | Theme | Gate to pass before proceeding |
|---|---|---|
| **P0** | Truth and reproducibility | A clean clone installs with `npm ci`; `tsc`, `eslint`, both test suites and the production build all pass; all three workflows are green; every documented claim matches the code; every `CODEOWNERS` owner and security contact is real. |
| **P1** | Operability and security | The service logs, exposes liveness and readiness, shuts down gracefully, sets security headers, rate-limits and validates its configuration; it builds into a container and deploys by pipeline; Terraform initialises, validates and holds remote state; SAST, secret scanning, a gating audit and an SBOM all run on every pull request. |
| **P2** | Modernisation and scale | Every dependency is on a supported major; one root command validates the repository; every PRD target is measured with an alert attached; releases are versioned, attested and reversible. |

A final framing point for whoever picks this up. The repository was built to satisfy the brief in `documentation/Input Prompt.md` — *"please make it simple, do as little as possible"* — and by that measure it succeeded. Almost every finding in this document exists because enterprise-grade scaffolding (CI, IaC, security policy, governance files, a specification, a PRD) was layered on top of a deliberately minimal demo, and — on the evidence of the tree as it stands — none of that scaffolding can execute end to end. The correct reading is therefore not that the work was done badly, but that **the repository is a demo wearing enterprise clothing**. P0 is the wave that makes the clothing fit; nothing after it is safe or verifiable until it does.

## Evidence Appendix

Output below is real, trimmed to the relevant lines, and reproduced verbatim apart from three normalisations: absolute local paths are replaced with repository-relative ones, ANSI colour codes and Terraform's box-drawing characters are stripped, and long dependency lists are elided with `…`. No secret value, credential or token appears in any transcript below, and no sensitive or user-provided environment-variable value appears either; the few non-sensitive environment-variable values that do appear are enumerated, with their reason, in honesty rule #7 of [Scope and Method](#scope-and-method).

### E1 — Repository state at the assessed commit

```console
$ git rev-parse --abbrev-ref HEAD
blitzy-e3647160-80f3-4cae-8f4c-61467fbd65fc

$ git rev-parse HEAD
47c6508a3576d89bf89edbb93e0ef307ac758019

$ (git ls-files | Measure-Object -Line).Lines
81

$ git diff origin/main...HEAD --stat=100
 .github/dependabot.yml                                    |   19 +-
 README.md                                                 |   36 +
 blitzy/documentation/Project Guide.md                     |  708 +++++++++++++++
 documentation/Enterprise Adoption Readiness Assessment.md | 1517 +++++++++++++++++++++++++++++++++
 src/backend/.env.example                                  |    1 +
 src/backend/README.md                                     |   42 +
 src/backend/package.json                                  |   21 +
 src/backend/server.js                                     |    7 +
 src/backend/server.test.js                                |   11 +
 9 files changed, 2361 insertions(+), 1 deletion(-)
```

*Reading the two rows that move.* `blitzy/documentation/Project Guide.md` is a platform-generated artefact rewritten on every run, so its 708-line row is a measurement taken on 5 August 2026 rather than a property of the repository ([W30](#w30--two-documents-named-project-guidemd-disagree-and-one-of-them-leaks-its-own-generator-prompt)). This document's own row is self-referential for the same structural reason: each revision of it changes that one number and nothing else in the block, so the figure shown is its size at the re-validation commit.

*Reproduction precondition:* the width is pinned with `--stat=100` so the histogram does not rescale with the terminal, and the `main...HEAD` form needs a mainline ref that the clone can actually resolve. A clone that has no local `main` — only a remote-tracking `origin/main` — must name that end explicitly, as the transcript above does; with a local `main` present, `main...HEAD` prints the same block. Without any reachable mainline ref, `git` fails with *"fatal: Needed a single revision"* rather than printing a different result. The previous baseline also remains exactly reproducible from this tree — `git diff origin/main...dcc5b7f --stat=100` still prints the eight-file, 515-insertion block recorded before the re-baseline, with `README.md` at 30 lines and the generated guide at 385 — which is how the two commits' evidence was reconciled.

### E2 — Runtime actually in use, versus the runtime the repository pins

```console
$ node --version
v22.23.2

$ npm --version
10.9.8
```

Compare with `engines.node` (`>= 16.0.0`) in both manifests, `node-version: [16.x]` in all three workflows, and `FROM node:16-alpine` at `infrastructure/docker/Dockerfile` L2. See [W4](#w4--the-declared-runtime-has-been-out-of-support-for-nearly-three-years-and-diverges-from-the-runtime-actually-used).

### E3 — Backend test suite

```console
$ cd src/backend && npm test

> hello-world-express-backend@1.0.0 test
> jest

PASS ./server.test.js
  backend endpoints
    √ GET / returns Hello world (28 ms)
    √ GET /good-evening returns Good evening (5 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.773 s, estimated 1 s
```

Exit code 0.

### E4 — Backend advisory posture

```console
$ cd src/backend && npm audit --json     # summary fields extracted

metadata.vulnerabilities: info 0, low 0, moderate 0, high 0, critical 0, total 0
metadata.dependencies:    prod 69, dev 288, optional 1, peer 0, total 356
vulnerabilities:          (empty)
```

Zero advisories. `express ^4.21.2` resolved to `4.22.2`. **No CVE identifier is asserted anywhere in this document.** Re-audited on **5 August 2026**: every field above reproduced exactly, including the 356-package total and the resolved `4.22.2`. Advisory data is point-in-time, so re-run the command rather than treating the zero as durable. For the other half of the repository, see [E4b](#e4b--spa-advisory-posture-srcweb).

### E4b — SPA advisory posture (`src/web`)

`npm audit` requires a lockfile, and none is committed ([W1](#w1--no-lockfile-is-committed-while-all-three-workflows-require-one)), so the tree was resolved first. `--package-lock-only --ignore-scripts` writes only the git-ignored lockfile: no `node_modules` is created and no lifecycle script runs, so nothing tracked is modified.

```console
$ cd src/web && npm install --package-lock-only --ignore-scripts
$ npm audit --json                       # summary fields extracted

metadata.vulnerabilities: info 0, low 9, moderate 6, high 14, critical 0, total 29
metadata.dependencies:    prod 64, dev 1512, optional 2, peer 3, total 1576

$ npm audit                              # final summary line
29 vulnerabilities (9 low, 6 moderate, 14 high)
```

Exit code 1. Three of the SPA's **own** declarations carry advisories directly — `react-scripts` (high), `webpack-dev-server` (moderate) and `compression-webpack-plugin` (moderate); the remaining 26 advisory nodes are transitive. The severity mix is what matters more than the total: **1512 of the 1576 resolved packages are development-only**, so this is predominantly build-time exposure rather than exposure in anything the SPA would serve.

The dominant single cause is measurable rather than assumed. Re-resolving the same manifest with the never-invoked `react-scripts` (`src/web/package.json` L46) removed — in a scratch copy, leaving the tracked manifest untouched — gives:

```console
$ npm audit --json                       # scratch manifest, react-scripts removed

metadata.vulnerabilities: info 0, low 0, moderate 4, high 1, critical 0, total 5
metadata.dependencies:    prod 58, dev 776, optional 1, peer 8, total 840
```

So removing one unused declaration eliminates **24 of the 29 advisories, including 13 of the 14 high**, and nearly halves the resolved tree (1576 → 840). That is the evidence behind [M14](#frontend-stack-currency) and [P0-4](#p0--make-it-green-and-reproducible-030-days), and the reason [R16](#risk-register) is rated the way it is.

Two boundaries on this evidence. First, **no advisory identifier of any kind is reproduced here** — not a CVE, not a GHSA — in keeping with [Claims deliberately not made](#claims-deliberately-not-made); the counts above are `npm audit`'s own aggregates. Second, advisory data is **point-in-time**: these counts were re-observed on **5 August 2026**, when every figure above reproduced exactly — the 29/9/6/14/0 mix, the 1576-package total, the three direct declarations and the whole scratch re-resolution — and they will change as advisories are published or withdrawn, so re-run the two commands rather than citing these numbers as durable. `src/backend` was audited by the same method and reports zero ([E4](#e4--backend-advisory-posture)).

### E5 — Endpoint behaviour, headers, and the `PORT` override

Server started as an isolated process; only that process was stopped afterwards.

```console
GET http://localhost:3001/               -> 200  body "Hello world"   (11 bytes)
GET http://localhost:3001/good-evening   -> 200  body "Good evening"  (12 bytes)
     response Content-Type : text/html; charset=utf-8
     response X-Powered-By : (absent)

GET http://localhost:3001/health         -> 404  "Cannot GET /health"   (Express default HTML page)
GET http://localhost:3001/does-not-exist -> 404  (Express default HTML page)

# with PORT overridden to 4000
GET http://localhost:4000/               -> 200  body "Hello world"
GET http://localhost:4000/good-evening   -> 200  body "Good evening"
```

Supports [S2](#s2--x-powered-by-is-explicitly-disabled), [S5](#s5--both-endpoints-behave-exactly-as-documented), [S6](#s6--port-is-configurable-and-the-contract-is-documented) and [W14](#w14--the-express-service-has-none-of-the-operational-controls-an-enterprise-requires).

### E6 — SPA type check: 13 errors

```console
$ cd src/web && npx tsc --noEmit
src/components/HelloWorld/index.ts(39,2): error TS1443: Module declaration names may only use ' or " quoted strings.
src/components/index.ts(36,2): error TS1443: Module declaration names may only use ' or " quoted strings.
src/config/constants.ts(20,3): error TS1005: ';' expected.
src/config/constants.ts(29,3): error TS1005: ';' expected.
src/config/constants.ts(41,3): error TS1005: ';' expected.
src/utils/errorBoundary.tsx(158,2): error TS1443: Module declaration names may only use ' or " quoted strings.
src/utils/errorBoundary.tsx(162,1): error TS1128: Declaration or statement expected.
src/utils/testUtils.ts(40,20): error TS1005: '>' expected.
src/utils/testUtils.ts(40,25): error TS1005: ')' expected.
src/utils/testUtils.ts(42,7): error TS1161: Unterminated regular expression literal.
src/utils/testUtils.ts(43,3): error TS1128: Declaration or statement expected.
src/utils/testUtils.ts(44,1): error TS1128: Declaration or statement expected.
src/utils/testUtils.ts(77,22): error TS1161: Unterminated regular expression literal.
```

Exit code 2. Every error is syntax-level; none is a type mismatch.

### E7 — SPA lint: 92 problems

```console
$ cd src/web && npx eslint src --ext .ts,.tsx --no-fix
…
✖ 92 problems (88 errors, 4 warnings)
```

Exit code 1; 20 files reported. Rule distribution is tabulated in [W7](#w7--the-spa-does-not-lint-92-problems). The `--no-fix` flag was used deliberately: the repository's own `lint` script (`src/web/package.json` L13) runs `--fix` and rewrites source files.

### E8 — SPA test suites: 0 tests execute

```console
$ cd src/web && npx jest --watchAll=false --ci
FAIL src/App.test.tsx
  ● Test suite failed to run
    Cannot find module '../utils/testUtils' from 'src/setupTests.ts'
FAIL src/components/HelloWorld/HelloWorld.test.tsx
  ● Test suite failed to run
    Cannot find module '../utils/testUtils' from 'src/setupTests.ts'

Test Suites: 2 failed, 2 total
Tests:       0 total
Snapshots:   0 total
```

Exit code 1.

### E9 — Clean-install reproducibility

In this working tree, `npm ci --dry-run` **succeeds**, because a prior `npm install` left a git-ignored `package-lock.json` on disk:

```console
$ Test-Path src/web/package-lock.json        -> True
$ git ls-files --error-unmatch src/web/package-lock.json
                                             -> not tracked (matches .gitignore L89)
```

Repeating the command in a scratch directory containing **only** the tracked manifest — which is exactly what a fresh clone yields — reproduces the CI failure:

```console
$ git show HEAD:src/web/package.json > <scratch>/package.json
$ cd <scratch> && npm ci --dry-run
npm error code EUSAGE
npm error
npm error The `npm ci` command can only install with an existing package-lock.json or
npm error npm-shrinkwrap.json with lockfileVersion >= 1. Run an install with npm@5 or
npm error later to generate a package-lock.json file, then try again.
```

Exit code 1. See [W1](#w1--no-lockfile-is-committed-while-all-three-workflows-require-one).

### E10 — `.gitignore` rule verification

```console
$ git check-ignore -v src/web/build/main.js
  (no match)
$ git check-ignore -v src/web/dist/main.js
  (no match)
$ git check-ignore -v build/x
  .gitignore:11:/build            build/x
$ git check-ignore -v dist/x
  .gitignore:12:/dist             dist/x
$ git check-ignore -v src/web/package-lock.json
  .gitignore:89:package-lock.json src/web/package-lock.json
$ git check-ignore -v --no-index infrastructure/terraform/environments/dev/terraform.tfvars
  .gitignore:51:*.tfvars          infrastructure/terraform/environments/dev/terraform.tfvars
```

The first two show that `src/web/build/**` and `src/web/dist/**` match no rule; the last shows `*.tfvars` matching a file that is nevertheless tracked. See [W27](#w27--two-gitignore-rules-do-not-do-what-the-repository-needs).

### E11 — Secret hygiene

```console
$ git ls-files | Select-String '\.env$|package-lock|yarn\.lock'
  (no matches)

$ git ls-files | Select-String '\.env'
  src/backend/.env.example
```

No `.env`, lockfile, key, certificate or credential is tracked. Supports [S13](#s13--no-secret-credential-or-data-store-exists-anywhere).

### E12 — Docker: stage resolution and build context

```console
$ docker build --target production -f infrastructure/docker/Dockerfile src/web
Sending build context to Docker daemon  333.5MB

Error response from daemon: target stage "production" could not be found
```

Exit code 1. Two facts follow. First, the only stages the `Dockerfile` declares are:

```console
$ Select-String -Path infrastructure/docker/Dockerfile -Pattern '^FROM '
  L2:  FROM node:16-alpine AS builder
  L39: FROM nginx:alpine
```

Second, the 333.5 MB build context proves `infrastructure/docker/.dockerignore` is never applied — Docker reads `.dockerignore` from the build-context root, which Compose sets to `src/web`, so `node_modules` was uploaded. See [W22](#w22--the-container-image-cannot-be-built-and-could-not-start-if-it-were) and [W23](#w23--the-compose-file-cannot-resolve-its-own-build-inputs).

*Reproduction precondition:* that 333.5 MB was measured on 5 August 2026 in a working tree where `src/web/node_modules` had been installed, which is the state any real build runs in. The figure tracks whatever is on disk at the moment of the probe and nothing else — the same command measured 323.3 MB against an earlier install of the same manifest and 322.3 MB while an install was still in flight — so the **size is environment-dependent and must not be treated as a fixed property of the repository**. A checkout that has never installed dependencies sends a context roughly four thousand times smaller: the tracked content of `src/web` is 37 files totalling 81,018 bytes, about 79 kB. The finding does not depend on the number at all: `.dockerignore` sits outside the build-context root, so it is inert regardless of how large the context happens to be, and the stage-resolution failure above is reproducible in any checkout.

### E13 — Docker Compose validation

```console
$ docker compose -f infrastructure/docker/docker-compose.yml config
warning  The "APP_VERSION" variable is not set. Defaulting to a blank string.
warning  docker-compose.yml: the attribute `version` is obsolete, it will be ignored,
         please remove it to avoid potential confusion
…
services:
  dev:
    build:
      context: <repo>/src/web
      dockerfile: ../infrastructure/docker/Dockerfile
      target: development
    command: [npm, run, start:dev]
```

```console
$ Test-Path src/infrastructure
False
```

The `dockerfile:` path is resolved relative to the context (`src/web`), so it points at `src/infrastructure/docker/Dockerfile`, which does not exist.

### E14 — Terraform initialisation

Terraform was not present on the assessment host; **Terraform v1.15.8** was installed for this check and run against a **copy** of the tree, leaving `infrastructure/` untouched (`git diff -- infrastructure` is empty).

```console
$ terraform init -backend=false -input=false        # root module
Initializing modules...
- static_hosting in modules/static-hosting
- cdn in modules/cdn

Error: Duplicate required providers configuration
  on providers.tf line 33, in terraform:
  33:   required_providers {
A module may have only one required providers configuration. The required
providers were previously configured at main.tf:16,3-21.

Error: Duplicate required providers configuration
  on versions.tf line 11, in terraform:
  11:   required_providers {
A module may have only one required providers configuration. The required
providers were previously configured at main.tf:16,3-21.

Error: Duplicate output definition
  on modules/cdn/outputs.tf line 2:
   2: output "cloudfront_domain_name" {
An output named "cloudfront_domain_name" was already defined at
modules/cdn/main.tf:131,1-32. Output names must be unique within a module.

Error: Duplicate output definition
  on modules/cdn/outputs.tf line 8:
   8: output "cloudfront_distribution_id" {
An output named "cloudfront_distribution_id" was already defined at
modules/cdn/main.tf:136,1-36. Output names must be unique within a module.

Error: Duplicate output definition
  on modules/cdn/outputs.tf line 14:
  14: output "cloudfront_oai_iam_arn" {
An output named "cloudfront_oai_iam_arn" was already defined at
modules/cdn/main.tf:141,1-32. Output names must be unique within a module.

Error: Duplicate output definition
  on modules/static-hosting/outputs.tf line 18:
  18: output "cloudfront_domain_name" {
An output named "cloudfront_domain_name" was already defined at
modules/static-hosting/main.tf:194,1-32. Output names must be unique within a module.

Error: Duplicate output definition
  on modules/static-hosting/outputs.tf line 23:
  23: output "cloudfront_distribution_id" {
An output named "cloudfront_distribution_id" was already defined at
modules/static-hosting/main.tf:189,1-36. Output names must be unique within a module.
```

Exit code 1 — **7 errors**. The same command in `environments/dev` fails with the same 5 duplicate-output errors from the shared modules. Because initialisation aborts here, the further Terraform defects listed in [W26](#w26--further-terraform-defects-behind-the-initialisation-failure-static-inspection) are reported from static inspection rather than from validator output. Re-run on 5 August 2026 the exit code, the error count and all seven error bodies reproduced exactly; only the order of the two `Initializing modules...` lines differs between runs, which is Terraform enumerating a map and carries no meaning.

```console
$ terraform fmt -check -recursive
environments/dev/main.tf
environments/prod/main.tf
main.tf
modules/cdn/main.tf
modules/static-hosting/main.tf
modules/static-hosting/variables.tf
```

Exit code 3 — 6 of 13 `.tf` files are not canonically formatted.

### E15 — Declared versions versus current published versions

Observed with `npm view <package> version`. Every row below was re-observed in full at **22:10 UTC on 5 August 2026**; **32 of the 33 rows reproduced unchanged and exactly one had moved** — `web-vitals`, from 6.0.1 to 6.1.0, the 6.1.0 release having been published to the registry earlier the same day. All 33 were then checked once more against the linked registry endpoints at **23:01 UTC**, immediately before this revision was published, and every one matched the figure recorded here. That row is recorded below at its re-observed value, and the move is the reason this appendix now carries a source link per row: see **Revision 3** in [Scope and Method](#scope-and-method). This table is the sole source for every **npm** "target" version in [Modernization Opportunities](#modernization-opportunities); no version is asserted from memory.

The **Source** column links each package's `latest` document on the npm registry — `registry.npmjs.org`, the same registry `npm view` queries — so every figure can be re-checked against the publisher itself rather than taken on trust. Each link returns the registry's own JSON for that package, whose `version` field is the figure recorded in the row; the browsable equivalent for a human reader is `npmjs.com/package/<name>`. Every one of the 33 links was confirmed to resolve and to report the version shown beside it, which is a second reading of the whole matrix through a different mechanism than `npm view`. The versions are point-in-time by nature: a registry head can move within a single day, as `web-vitals` did here, so re-obtain any figure from the linked source before acting on it. GitHub Actions are not npm packages, so their target versions come from the separate source recorded in [E15a](#e15a--github-actions-declared-versions-versus-current-releases) below. Every table in this section and in [E15a](#e15a--github-actions-declared-versions-versus-current-releases) is a point-in-time observation and should be re-taken before the upgrade work is scheduled.

**Coverage.** The two manifests declare **33** packages between them — `src/backend/package.json` declares 3 (1 dependency, 2 devDependencies) and `src/web/package.json` declares 30 (4 dependencies, 26 devDependencies). The first table below carries the **15** that findings and recommendations elsewhere in this document cite by name; the second carries the remaining **18**, so that every declared dependency of both manifests is accounted for and no gap in the table can be mistaken for a package that was not checked.

| Package | Declared in this repository | Current published | Source |
|---|---|---|---|
| `express` | `^4.21.2` (`src/backend`) | 5.2.1 | [registry](https://registry.npmjs.org/express/latest) |
| `jest` | `^29.7.0` (`src/backend`); undeclared in `src/web` | 30.4.2 | [registry](https://registry.npmjs.org/jest/latest) |
| `supertest` | `^7.2.2` (`src/backend`) | 7.2.2 — already current | [registry](https://registry.npmjs.org/supertest/latest) |
| `react` | `^18.2.0` | 19.2.8 | [registry](https://registry.npmjs.org/react/latest) |
| `react-dom` | `^18.2.0` | 19.2.8 | [registry](https://registry.npmjs.org/react-dom/latest) |
| `styled-components` | `^5.3.0` | 6.5.0 | [registry](https://registry.npmjs.org/styled-components/latest) |
| `web-vitals` | `^2.1.0` | 6.1.0 — moved from 6.0.1 during the 5 August 2026 re-observation | [registry](https://registry.npmjs.org/web-vitals/latest) |
| `typescript` | `^4.9.5` | 7.0.2 | [registry](https://registry.npmjs.org/typescript/latest) |
| `eslint` | `^8.32.0` | 10.8.0 | [registry](https://registry.npmjs.org/eslint/latest) |
| `@typescript-eslint/eslint-plugin` | `^5.48.2` | 8.66.0 | [registry](https://registry.npmjs.org/@typescript-eslint/eslint-plugin/latest) |
| `prettier` | `^2.8.0` | 3.9.6 | [registry](https://registry.npmjs.org/prettier/latest) |
| `webpack` | `^5.75.0` | 5.109.2 | [registry](https://registry.npmjs.org/webpack/latest) |
| `@testing-library/react` | `^13.4.0` | 16.3.2 | [registry](https://registry.npmjs.org/@testing-library/react/latest) |
| `fork-ts-checker-webpack-plugin` | `^7.3.0` | 9.1.0 | [registry](https://registry.npmjs.org/fork-ts-checker-webpack-plugin/latest) |
| `react-scripts` | `"5.x"` (declared, never invoked) | 5.0.1 | [registry](https://registry.npmjs.org/react-scripts/latest) |

The remaining **18** declared packages, all of them `devDependencies` of `src/web/package.json`, observed the same way on the same date. They complete the currency picture. No **target** version in [Modernization Opportunities](#modernization-opportunities) is taken from a row below; several of these packages do appear elsewhere in this document for other reasons — `compression-webpack-plugin` and `webpack-dev-server` each carry a direct advisory in [E4b](#e4b--spa-advisory-posture-srcweb), `@types/react` and `@types/react-dom` appear in [M8](#frontend-stack-currency) as ripple that must move with React, `@typescript-eslint/parser` moves with the plugin in [M12](#frontend-stack-currency), and `jest-environment-jsdom` is part of the SPA test wiring — but in each case the recommendation is expressed against the package in the first table that drives it.

| Package | Declared in `src/web` | Current published | Source |
|---|---|---|---|
| `@babel/preset-env` | `^7.0.0` | 8.0.2 | [registry](https://registry.npmjs.org/@babel/preset-env/latest) |
| `@babel/preset-react` | `^7.0.0` | 8.0.1 | [registry](https://registry.npmjs.org/@babel/preset-react/latest) |
| `@babel/preset-typescript` | `^7.0.0` | 8.0.1 | [registry](https://registry.npmjs.org/@babel/preset-typescript/latest) |
| `@jest/types` | `^29.0.0` | 30.4.1 | [registry](https://registry.npmjs.org/@jest/types/latest) |
| `@testing-library/jest-dom` | `^5.16.5` | 7.0.0 | [registry](https://registry.npmjs.org/@testing-library/jest-dom/latest) |
| `@testing-library/user-event` | `^14.0.0` | 14.6.3 | [registry](https://registry.npmjs.org/@testing-library/user-event/latest) |
| `@types/react` | `^18.0.27` | 19.2.18 | [registry](https://registry.npmjs.org/@types/react/latest) |
| `@types/react-dom` | `^18.0.10` | 19.2.4 | [registry](https://registry.npmjs.org/@types/react-dom/latest) |
| `@typescript-eslint/parser` | `^5.48.2` | 8.66.0 | [registry](https://registry.npmjs.org/@typescript-eslint/parser/latest) |
| `compression-webpack-plugin` | `^10.0.0` | 12.0.0 | [registry](https://registry.npmjs.org/compression-webpack-plugin/latest) |
| `eslint-config-prettier` | `^8.0.0` | 10.1.8 | [registry](https://registry.npmjs.org/eslint-config-prettier/latest) |
| `eslint-plugin-react` | `^7.0.0` | 7.37.5 | [registry](https://registry.npmjs.org/eslint-plugin-react/latest) |
| `eslint-plugin-react-hooks` | `^4.0.0` | 7.1.1 | [registry](https://registry.npmjs.org/eslint-plugin-react-hooks/latest) |
| `html-webpack-plugin` | `^5.5.0` | 5.6.8 | [registry](https://registry.npmjs.org/html-webpack-plugin/latest) |
| `jest-environment-jsdom` | `^29.0.0` | 30.4.1 | [registry](https://registry.npmjs.org/jest-environment-jsdom/latest) |
| `terser-webpack-plugin` | `^5.3.6` | 5.6.1 | [registry](https://registry.npmjs.org/terser-webpack-plugin/latest) |
| `webpack-cli` | `^5.0.1` | 7.2.2 | [registry](https://registry.npmjs.org/webpack-cli/latest) |
| `webpack-dev-server` | `^4.11.1` | 6.0.0 | [registry](https://registry.npmjs.org/webpack-dev-server/latest) |

Four of those eighteen — `@testing-library/user-event`, `eslint-plugin-react`, `html-webpack-plugin` and `terser-webpack-plugin` — have a current release that the declared caret range already admits, so an install resolves them to current today. The other fourteen are at least one major behind their declared floor. Like every row above, these are point-in-time readings.

### E15a — GitHub Actions: declared versions versus current releases

**Source:** each action's own GitHub releases page — the `/releases` index linked in the last column, where exactly one tag carries the **Latest** badge — read on **5 August 2026**. These are *not* npm packages and were *not* obtained with `npm view`; the tag marked "Latest" on the publisher's page is the authority, and the commit each tag points at is recorded so the observation is reproducible. All three pages were read again at the evidence re-baseline and every cell below reconciled unchanged: same latest tag, same release date, same commit. Third-party release-tracking mirrors were **not** used as authority; one such mirror reports a different publication date for `actions/checkout@v7.0.1`, and where a mirror and the publisher disagree this table follows the publisher. Like every currency reading in this assessment, the three rows below are point-in-time and should be re-taken from the linked releases pages before the upgrade in [M7](#reproducibility-and-supply-chain) is scheduled.

| Action | Pinned in this repository | Dependabot branch open | Current release | Released | Commit | Source |
|---|---|---|---|---|---|---|
| `actions/checkout` | `v3` (`build.yml` L35, `test.yml` L28, `deploy.yml` L39) | `v4` | **v7.0.1** | 20 July 2026 | `3d3c42e` | [releases](https://github.com/actions/checkout/releases) |
| `actions/setup-node` | `v3` (`build.yml` L40, `test.yml` L33, `deploy.yml` L45) | `v4` | **v7.0.0** | 14 July 2026 | `8207627` | [releases](https://github.com/actions/setup-node/releases) |
| `actions/deploy-pages` | `v2` (`deploy.yml` L67) | `v4` | **v5.0.0** | 25 March 2026 | `cd2ce8f` | [releases](https://github.com/actions/deploy-pages/releases) |

Two consequences follow, and both are reflected in [M7](#reproducibility-and-supply-chain) and in step P0-10 of the [Recommended Next Steps](#recommended-next-steps):

1. **The open Dependabot branches do not reach current.** Each targets `v4`, which was current when the branch was opened but is now one or more majors behind. Merging them is a legitimate first hop that closes the largest gap; a second hop is still required.
2. **The newest majors are not drop-in.** `checkout@v7` and `setup-node@v7` migrated to ESM and raise the minimum Actions Runner version, and `deploy-pages@v5` moved to Node.js 24.x, so runner compatibility must be confirmed rather than assumed.

### E16 — Runtime, framework and tooling lifecycle facts and their sources

**Sources, all read on 5 August 2026.** These are external facts, so each is linked rather than asserted:

| # | Source | What it establishes |
|---|---|---|
| 1 | Node.js announcement — [*Bringing forward the End-of-Life Date for Node.js 16*](https://nodejs.org/en/blog/announcements/nodejs16-eol) | The Node.js 16 end-of-life date, and that it was moved forward from April 2024 to align with the end of support for OpenSSL 1.1.1 |
| 2 | Node.js — [Previous releases](https://nodejs.org/en/about/previous-releases) | The per-release-line status table (which lines are End-of-Life, LTS or Current) and the project's support policy |
| 3 | Node.js Release Working Group — [release schedule](https://github.com/nodejs/release#release-schedule) | The dated end-of-life rows below. The Working Group publishes `schedule.json` as the machine-readable record and states that dates are subject to change |
| 4 | Node.js announcement — [*Evolving the Node.js release schedule*](https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule) | That Node.js 26 is the last line under the current model, and that from Node.js 27 the cadence becomes annual with every major becoming LTS |
| 5 | AWS Developer Tools blog — [*Announcing the end of support for Node.js 16.x in the AWS SDK for JavaScript (v3)*](https://aws.amazon.com/blogs/developer/announcing-the-end-of-support-for-node-js-16-x-in-the-aws-sdk-for-javascript-v3/) | Independent vendor corroboration of the same Node.js 16 date: *"which reached end-of-life on September 11, 2023"* |

| Release line | Status (5 August 2026) | End of life | Source |
|---|---|---|---|
| Node.js 16 "Gallium" | End of life — **brought forward seven months** from April 2024 to align with the end of support for OpenSSL 1.1.1 | **11 September 2023** | 1, 2, 5 |
| Node.js 18 "Hydrogen" | End of life | 30 April 2025 | 2, 3 |
| Node.js 20 "Iron" | End of life | 30 April 2026 | 2, 3 |
| Node.js 22 "Jod" | Maintenance LTS | 30 April 2027 | 2, 3 |
| Node.js 24 "Krypton" | Active LTS | 30 April 2028 | 2, 3 |
| Node.js 26 | Current — first released 5 May 2026. It is the last line under the existing release model, so on that model's published cadence it is due to be promoted to Active LTS in October 2026 | — | 2, 4 |

Only the two LTS lines — Node.js 22 and Node.js 24 — are supported targets today; the Node.js project's guidance on source 2 is that production applications should run an Active or Maintenance LTS release. Because these dates are published as forward-looking commitments and are explicitly subject to change, they should be re-read from sources 2 and 3 before an upgrade is scheduled rather than taken from this table.

At the evidence re-baseline every row above reconciled **unchanged**, and the re-reading is recorded here source by source so that a reader can tell what was re-observed from what was carried over. Source 3's schedule was re-read and checked line by line — `16.x` Gallium `2023-09-11`, `18.x` Hydrogen `2025-04-30`, `20.x` Iron `2026-04-30`, `22.x` Jod `2027-04-30`, `24.x` Krypton `2028-04-30` — and source 1 was re-read and still gives the reason for the first of those dates in terms, moving it "by seven months to coincide with the end of support of OpenSSL 1.1.1". Source 4's substance also still holds: the existing odd/even model ends with Node.js 26, and from Node.js 27 every major becomes LTS. The **Status** column was re-derived from source 3's dates against the observation date rather than re-read from source 2's rendered table, which is why Node.js 20 now reads End of life. Source 5 is cited only as independent vendor corroboration of a date that sources 1 and 3 each give first-hand; it was **not** re-fetched at the re-baseline, and no row in this section depends on it alone. The elapsed-time figure derived from the Node.js 16 date in [W4](#w4--the-declared-runtime-has-been-out-of-support-for-nearly-three-years-and-diverges-from-the-runtime-actually-used) was recomputed against the observation date rather than carried over, and remains **1,059 days** (366 + 365 + 328). Anyone re-dating this document must recompute it the same way, because it is the one figure here that changes every day even when every source is untouched.

The upgrade requirements attributed to Express and Jest in [Modernization Opportunities](#modernization-opportunities) come from those projects' own published guides, not from inference:

| Authority | Requirement stated there |
|---|---|
| Express — [*Migrating to Express 5*](https://expressjs.com/en/guide/migrating-5.html) | Express 5 requires **Node.js 18 or later** |
| Jest — [*Upgrading from Jest 29 to 30*](https://jestjs.io/docs/upgrading-to-jest30) | Jest 30 requires **Node.js 18+** and **TypeScript 5.4+**, and states that Jest 30 drops support for Node 16 outright |

Both guides were re-read at the evidence re-baseline and both requirements are unchanged. They are cited because they are the reason the two upgrades in [Modernization Opportunities](#modernization-opportunities) are *ordered* rather than independent: the runtime move has to land first, which is why the roadmap sequences it as step P1-1 and places the two framework upgrades behind it at step P2-3 in the [Recommended Next Steps](#recommended-next-steps).

#### Non-npm artefacts and how each was sourced

Two classes of currency fact in this assessment concern artefacts that are **not** npm packages, so `npm view` — the mechanism [E15](#e15--declared-versions-versus-current-published-versions) uses and honesty rule #2 names for npm versions — cannot reach them. Each was obtained on **5 August 2026** from the publisher itself, by the mechanism named per row, and none is inferred from the Dependabot branch names in [E17](#e17--unmerged-dependabot-branches), which record only what Dependabot has proposed so far and not what is current. The three GitHub Actions rows below restate the readings tabulated in [E15a](#e15a--github-actions-declared-versions-versus-current-releases), which also records each release's date and the commit its tag points at; the two Terraform provider rows appear only here.

| Artefact | Pinned in this repository | Current release, as obtained from the publisher | Source, and how it was obtained |
|---|---|---|---|
| `actions/checkout` | `@v3` — `build.yml` L35, `test.yml` L28, `deploy.yml` L39 | **v7.0.1**, major **7** (the v4 line remains maintained, its head being v4.4.0) | [actions/checkout releases](https://github.com/actions/checkout/releases) — read the page, took the tag badged **Latest** |
| `actions/setup-node` | `@v3` — `build.yml` L40, `test.yml` L33, `deploy.yml` L45 | **v7.0.0**, major **7** | [actions/setup-node releases](https://github.com/actions/setup-node/releases) — read the page, took the tag badged **Latest** |
| `actions/deploy-pages` | `@v2` — `deploy.yml` L67 | **v5.0.0**, major **5** | [actions/deploy-pages releases](https://github.com/actions/deploy-pages/releases) — read the page, took the tag badged **Latest** |
| Terraform AWS provider | `~> 4.0` — `versions.tf` L15 | **6.58.0**, major **6** | [Terraform Registry — hashicorp/aws](https://registry.terraform.io/providers/hashicorp/aws/latest) — resolved from the public registry by `terraform init` against an unconstrained `required_providers` block in a throwaway configuration outside this repository, which logged `- Installing hashicorp/aws v6.58.0`; re-confirmed later on 5 August 2026 against the registry's own provider API, which reports `"version": "6.58.0"` |
| Terraform Cloudflare provider | `~> 3.0` — `versions.tf` L21 | **5.23.0**, major **5** | [Terraform Registry — cloudflare/cloudflare](https://registry.terraform.io/providers/cloudflare/cloudflare/latest) — resolved the same way, logging `- Installing cloudflare/cloudflare v5.23.0`; re-confirmed at the same time against the same registry API, which reports `"version": "5.23.0"` |

These five readings are point-in-time: patch and minor numbers move continuously, so re-obtain them the same way before acting on [M7](#reproducibility-and-supply-chain) or [M26](#delivery-pipeline-and-infrastructure). This document has already watched that happen twice, in this table and in [E15](#e15--declared-versions-versus-current-published-versions). At the evidence re-baseline both Terraform rows had moved on by one minor — the AWS provider from 6.57.1 to **6.58.0** and the Cloudflare provider from 5.22.0 to **5.23.0** — while the three Actions rows and, decisively, all five **majors** were unchanged; at the later re-check on 5 August 2026 recorded in the two rows above, both provider heads still read 6.58.0 and 5.23.0. The majors are the durable part, and they are what [M7](#reproducibility-and-supply-chain), [P0-10](#p0--make-it-green-and-reproducible-030-days) and [R14](#risk-register) rest on: a repository pinning the AWS provider at `~> 4.0` is **two majors behind** — 4 against a head of 6 — whether the registry head reads 6.57.1 or 6.58.0, and the Cloudflare pin of `~> 3.0` is likewise two behind a head of 5, which is the arithmetic [R14](#risk-register) states. Container base images are the third non-npm class in this repository; no currency *number* is claimed for `node:16-alpine` anywhere in this document — the finding against it is the Node.js 16 end-of-life date above, which is sourced from the Node.js project itself.

### E17 — Unmerged Dependabot branches

```console
$ git branch -a
* blitzy-e3647160-80f3-4cae-8f4c-61467fbd65fc
  main
  remotes/origin/HEAD -> origin/main
  remotes/origin/blitzy-e3647160-80f3-4cae-8f4c-61467fbd65fc
  remotes/origin/dependabot/github_actions/actions/checkout-4
  remotes/origin/dependabot/github_actions/actions/deploy-pages-4
  remotes/origin/dependabot/github_actions/actions/setup-node-4
  remotes/origin/dependabot/npm_and_yarn/src/web/fork-ts-checker-webpack-plugin-9.0.2
  remotes/origin/dependabot/npm_and_yarn/src/web/react-739a6347ca
  remotes/origin/dependabot/npm_and_yarn/src/web/styled-components-6.1.15
  remotes/origin/dependabot/npm_and_yarn/src/web/testing-de5456b19f
  remotes/origin/dependabot/npm_and_yarn/src/web/typescript-eslint-6dbe81030e
  remotes/origin/main
```

*Reproduction precondition:* `git branch -a` lists only the refs the local clone has actually fetched, so this output requires remote-tracking refs from the upstream repository where Dependabot opens its branches. A clone whose `origin` is another local checkout carrying only the working branches shows **no** `dependabot/**` refs at all — `git ls-remote --heads origin` is the quickest way to tell which case you are in. Where the refs are unreachable, the branch list can be neither reproduced nor refuted locally; [W33](#w33--eight-dependency-update-branches-are-open-and-unmerged) then has to be read against the repository's own branch list on the hosting platform.

*Carried forward, observed 4 August 2026.* At the re-validation commit the checkout was in exactly that second case: `git ls-remote --heads origin` returned only two heads — the working branch and `main` — and no `dependabot/**` ref was present, so this transcript could **not** be re-executed on 5 August 2026. It is therefore **carried forward from the original observation** and labelled *static inspection*, and it is the only claim in this document that is carried forward rather than re-executed; every other command in [What was executed](#what-was-executed) was re-run against the current tree on that date. This is the exception that **Baseline and re-validation**, **What was executed** and **Revision 2** in [Scope and Method](#scope-and-method) each name, and the [Assessment metadata](#assessment-metadata) records.

*How that date is established, and its limits.* The transcript above was captured during this document's first authoring pass and has been byte-identical ever since; that revision was published on **4 August 2026**, so the observation cannot be later than that day. It could in principle be slightly earlier, because the revision that captured it recorded no observation date of its own — which is the defect this revision is correcting, and the reason the date is given as the day of publication rather than as a reading taken at a stated time. Treat **4 August 2026** as the upper bound on the branch list's age: as of the 5 August 2026 re-validation it was at least one day old, and by the time it is read it will be older still. Confirm the count against the hosting platform's own branch list before acting on [W33](#w33--eight-dependency-update-branches-are-open-and-unmerged), [R9](#risk-register) or [P0-10](#p0--make-it-green-and-reproducible-030-days).

### E18 — Empty pull request template

```console
$ (Get-Item .github/pull_request_template.md).Length
0

$ git cat-file -s HEAD:.github/pull_request_template.md
0
```

Zero bytes both on disk and in git history.

### E19 — Cited file and line index

Every path below is repository-relative. Line numbers refer to the re-validation commit `47c6508`, and every row in this index was re-checked against that tree on 5 August 2026: each cited file still exists and no cited line number exceeds its file's length. Root `README.md` citations are given at their committed numbers, with the pointer section in place — see **Line references** in [Scope and Method](#scope-and-method). Of the three files that differ between the originally assessed `dcc5b7f` and `47c6508`, two appear in this index: root `README.md`, whose citations are given at their post-insertion numbers and were each re-verified line by line, and the platform-regenerated `blitzy/documentation/Project Guide.md`, which for exactly that reason is the one row whose figures are recorded as **date-stamped observations** — its size, and its L1 title and L3–L4 provenance block as they stood on 5 August 2026 — rather than as citations expected to survive the next regeneration; no interior range of it is treated as durable, and nothing in this assessment depends on one. No other row was affected by the move.

| Path | Lines cited | What is cited there |
|---|---|---|
| `src/backend/server.js` | L1–L7 (whole file) | Express bootstrap; `x-powered-by` disabled (L3); both routes (L4–L5); export (L6); guarded `listen` (L7) |
| `src/backend/package.json` | L4, L6–L9, L10–L13, L15, L17–L20 | `private`; `engines`; scripts; `express ^4.21.2`; `jest`/`supertest` devDependencies |
| `src/backend/server.test.js` | whole file | Two Supertest assertions on status and exact body |
| `src/backend/.env.example` | L1 | `PORT=3001` |
| `src/backend/README.md` | L24–L27 | Endpoint contract table |
| `src/web/package.json` | L4, L5–L8, L10–L17, L19–L23, L25–L51, L46, L49 | `private`; `engines`; all scripts; dependencies; devDependencies; `react-scripts`; `webpack` |
| `src/web/webpack.config.ts` | L21–L23, L34, L48, L82, L104–L106, L110, L119, L156–L157, L169, L171, L177–L191 | Factory reading `env.mode`, `isDevelopment`/`isProduction`; output dir; `ts-loader`; HTML injection; `DefinePlugin`; minimize; deprecated Terser option; the `isDevelopment`-gated dev-server block and `devtool: 'eval-source-map'`; dev-server HTTPS and CORS; production spread with the `config.plugins` self-reference and `devtool: 'source-map'`; performance budget |
| `src/web/jest.config.ts` | L28–L35, L38, L48, L52–L56, L72–L78, L88 | Coverage thresholds; `setupFilesAfterEnv`; `ts-jest` transform; `moduleNameMapper`; deprecated `globals`; `errorOnDeprecated` |
| `src/web/tsconfig.json` | L2–L26 | Strict compiler options |
| `src/web/.eslintrc.json` | L8–L14, L34–L91, L90 | Extends chain; rule set; `arrow-parens` |
| `src/web/.eslintignore` | whole file | Exclusion of `*.config.ts`, `setupTests.ts`, `reportWebVitals.ts` |
| `src/web/.prettierrc` | whole file | `arrowParens`, `jsxBracketSameLine`, `vueIndentScriptAndStyle` |
| `src/web/babel.config.ts` | L34–L36 | `modules`, `useBuiltIns`, `corejs` |
| `src/web/src/index.tsx` | L38–L42, L45–L51 | Render tree without a `ThemeProvider`; console-only web-vitals callback |
| `src/web/src/App.tsx` | L23–L34, L26, L33 | `GlobalStyles` + `HelloWorld` in a fragment, in that render order |
| `src/web/src/styles/GlobalStyles.ts` | L20–L22, L25–L26 | Unguarded `theme.typography.*` and `theme.colors.*` reads in the first component `App` renders |
| `src/web/src/setupTests.ts` | L8 | The unresolvable `'../utils/testUtils'` import |
| `src/web/src/reportWebVitals.ts` | L44–L48 | Web-vitals piped to `console.log` |
| `src/web/src/components/HelloWorld/styles.ts` | L3, L16, L19, L22, L37–L40 | Unused `defaultTheme` import; theme reads |
| `src/web/src/components/HelloWorld/HelloWorld.tsx` | L30, L31, L34, L35–L36 | ARIA attributes, including the invalid `role="text"` |
| `src/web/src/components/HelloWorld/index.ts` | ~L20 onward, L39 | Prose and markdown fence committed as TypeScript |
| `src/web/src/components/index.ts` | L36 | Same pattern |
| `src/web/src/config/constants.ts` | L20, L29, L41 | `as const` on type alias declarations |
| `src/web/src/utils/errorBoundary.tsx` | L158, L162 | Same prose pattern |
| `src/web/src/utils/testUtils.ts` | L13, L38–L44, L77 | The only `ThemeProvider` in the repository; JSX in a `.ts` file |
| `src/web/src/styles/theme.ts` | L13–L46, L54–L65 | `Theme` interface and `defaultTheme`, including `spacing.vertical` |
| `src/web/public/index.html` | L12–L17, L20–L21, L24, L35 | Meta-tag "security headers", including the L12 CSP that blocks the development bundle's `eval` calls; `%PUBLIC_URL%` tokens; font preconnect; hardcoded bundle path |
| `.github/workflows/build.yml` | L1, L10–L12, L14–L16, L24–L26, L30, L35, L40, L44, L47, L50–L52, L55, L59, L63, L67 | Workflow name; concurrency; job-wide `NODE_ENV`; working directory; Node pin; action pins; cache path; `npm ci`; non-gating audit; type-check, lint, test, build |
| `.github/workflows/test.yml` | L1, L15–L17, L22, L28, L33, L37, L41, L44, L51 | Name; working directory; Node pin; action pins; cache path; `npm ci`; `NODE_ENV` |
| `.github/workflows/deploy.yml` | L1, L4–L8, L17–L19, L34, L39, L45, L49, L53, L60, L66–L70 | Name; the `workflow_run: ["Build"]` trigger; working directory; Node pin; action pins; cache path; install; build; `deploy-pages@v2` with no artifact upload |
| `.github/dependabot.yml` | L6–L36, L39–L48, L51–L65 | The three `updates` entries |
| `.github/CODEOWNERS` | L1, L4–L6, L9, L12, L15, L18, L21, L24, L27, L30 | Placeholder owners; phantom `/config/`; invalid patterns; absence of a backend rule |
| `.github/pull_request_template.md` | whole file (0 bytes) | Empty template |
| `.gitignore` | L11–L12, L15–L20, L51, L57–L66, L88–L89, L108 | Anchored build/dist rules; env-file rules; `*.tfvars`; secret patterns; lockfile exclusion; inert `.git/` rule |
| `SECURITY.md` | L21, L25–L27, L43–L54, L64, L69, L77, L79, L84, L90, L99, L138–L144, L153 | Response promises; placeholder contacts; header and transport claims; SRI, CI-security, SAST, assessment and WCAG claims; SLAs; `[Current Date]` placeholder |
| `CODE_OF_CONDUCT.md` | L61–L77 | Reporting channels with no address; confidentiality contradiction |
| `CONTRIBUTING.md` | L31, L107, L117, L153 | Node 16 requirement; test tooling; coverage command; contactless security guidance |
| `LICENSE` | L1–L3 | MIT, 2024 |
| `infrastructure/docker/Dockerfile` | L2, L6, L18, L21, L24, L28, L35, L39, L51, L54, L61–L62, L69, L75–L76 | Base images; `NODE_VERSION`; non-root user; manifest copy; `npm ci --only=production`; source copy; build; nginx stage; config copy; artefact copy; pid file; `USER`; `HEALTHCHECK` |
| `infrastructure/docker/docker-compose.yml` | L1, L7–L9, L16, L19, L34, L43, L48–L50, L64, L74, L83–L84, L91 | Obsolete `version`; build context and unresolvable Dockerfile path; missing targets; unset variable; health check; `read_only`; `user: node`; `start:dev`; network and volume options |
| `infrastructure/docker/.dockerignore` | L1, L60–L62 | `node_modules` exclusion; excluded config files |
| `infrastructure/docker/nginx.conf` | L2, L5, L8–L12, L15, L61, L67–L73, L79, L85, L101 | Top-level directives illegal in `conf.d`; worker limits; server block; security headers; the `add_header` declarations that discard them; `error_page` |
| `infrastructure/terraform/main.tf` | L4, L7–L13, L16–L25, L34, L42–L56, L59–L80, L83–L99, L102–L109, L112–L141 | Duplicate `required_version`; interpolated backend; duplicate providers; `timestamp()` tag; module calls; outputs; public-access block; unattached headers policy |
| `infrastructure/terraform/providers.tf` | L18–L28, L32–L43, L47–L50 | Token sourcing versus its own comment; duplicate providers; conditional data source |
| `infrastructure/terraform/versions.tf` | L8, L11–L23 | `required_version`; provider sources and pins |
| `infrastructure/terraform/variables.tf` | whole file | The four declared variables |
| `infrastructure/terraform/outputs.tf` | L6–L65, L62–L64 | Root outputs; `var.tags` reference |
| `infrastructure/terraform/modules/cdn/{main,outputs,variables}.tf` | `outputs.tf` L2/L8/L14; `main.tf` L131/L136/L141; `variables.tf` L4–L49 | Duplicate outputs; declared variables |
| `infrastructure/terraform/modules/static-hosting/{main,outputs,variables}.tf` | `outputs.tf` L2–L50; `main.tf` L189/L194; `variables.tf` L4–L37 | Outputs including CloudFront overlap; duplicate outputs; declared variables |
| `infrastructure/terraform/environments/dev/main.tf` | L6–L28, L31–L47, L50–L57, L66, L84–L120 | Duplicate composition; literal backend; provider blocks; `var.tags` and locals; the interpolated `domain_name` argument; the four inline `variable` declarations |
| `infrastructure/terraform/environments/prod/main.tf` | L15–L16, L52–L72, L59, L78–L79, L87–L88, L107 | Literal backend and its third state-bucket scheme; the all-literal `module "root"` call with its four undeclared arguments; the `domain_name` literal; the three consumed outputs the root module does not produce |
| `infrastructure/terraform/environments/{dev,prod}/terraform.tfvars` | whole files — dev L6/L10/L14/L18, prod L7/L11/L15/L19 | `environment`, `region`, `project_name`, `domain_name` — declared by `environments/dev/main.tf` except `domain_name`, declared by `environments/prod/main.tf` not at all |
| `README.md` (root) | L3–L4, L17, L23–L29, L35, L97–L107, L121, L123–L124, L127–L155, L186, L191–L195 | Badges; WCAG claim; stack notes; prerequisites; directory layout; script table; the Backend (Express) section; contribution bullet; security claims |
| `documentation/Input Prompt.md` | L1 | The origin brief |
| `documentation/Technical Specifications.md` | L300, L302–L304, L377–L379, L488–L494, L701, L707, L709 | Database and API "not applicable" assertions; third-party services; authentication table |
| `documentation/Product Requirements Document (PRD).md` | L136–L142, L163, L194 | Performance targets; availability target; accessibility requirement |
| `documentation/Project Guide.md` | L1, L3, L12, L18–L28, L82–L93, L94 | Leaked generator prompt; stray fence; WCAG claim; point-in-time status; the eight pending human inputs |
| `blitzy/documentation/Project Guide.md` | identity, plus date-stamped observations only — a platform-generated artefact rewritten on every run: 708 lines / 61755 bytes, and its L1 title and L3–L4 provenance block, all as observed on 5 August 2026 and expected to change on the next regeneration; no interior range of it is treated as durable | The second guide of the same filename, and the fact that it is regenerated rather than maintained |

### E20 — SPA development runtime: `npm start`, the CSP conflict, and the rendered page

**1. The `start` script's non-interactive equivalent, run faithfully.**

```console
$ cd src/web && npx webpack serve --mode development --port 3000
[webpack-cli] Failed to load '…/src/web/webpack.config.ts' config
[webpack-cli] webpack.config.ts(180,12): error TS2448: Block-scoped variable 'config' used before its declaration.
webpack.config.ts(180,12): error TS2454: Variable 'config' is used before being assigned.
```

Exit code 2. Listeners on port 3000 afterwards: **0**. See [W34](#w34--npm-start-does-not-start-the-dev-server-cannot-load-its-own-configuration).

**2. What it took to get a page at all.** With `TS_NODE_COMPILER_OPTIONS={"module":"commonjs"}` and `TS_NODE_TRANSPILE_ONLY=true` — environment variables only, no file changed — and webpack's own `--env mode=development`:

```console
$ npx webpack serve --env mode=development --no-open --no-client-overlay
(node:…) [DEP_WEBPACK_DEV_SERVER_HTTPS] DeprecationWarning: 'https' option is deprecated. Please use the 'server' option.
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: https://localhost:3000/
webpack 5.109.2 compiled successfully in 967 ms
```

`--env mode=development` is the only reason `isDevelopment` is true here, and therefore the only reason HTTPS applies; **no shipped script passes it** ([W34](#w34--npm-start-does-not-start-the-dev-server-cannot-load-its-own-configuration)).

**3. What the browser reported.** Loaded in Chrome at 1280×800 after accepting the self-signed certificate. The console contained 9 errors and 1 DevTools issue; the fatal one:

```console
Uncaught EvalError: Evaluating a string as JavaScript violates the following Content Security Policy
directive because 'unsafe-eval' is not an allowed source of script: script-src 'self'
    at ./node_modules/webpack-dev-server/client/index.js?… (vendors-node_modules_s.js:83:1)
    at __webpack_require__ (runtime.js:40:32)
    at __webpack_exec__ (main.js:74:48)
    at __webpack_require__.O (runtime.js:83:25)
    at webpackJsonpCallback (runtime.js:1196:39)
```

The `securitypolicyviolation` event captured before any page script ran: `violatedDirective "script-src"`, `blockedURI "eval"`, `originalPolicy "default-src 'self'; script-src 'self'"`, `disposition "enforce"`, `sourceFile vendors-node_modules_s.js`, line 83, column 1 — **exactly one violation**, because the throw aborts the entry chain before any other `eval` is reached. See [W35](#w35--the-pages-own-content-security-policy-kills-the-development-bundle-before-react-executes).

**4. Measured state of the rendered document.**

| Probe | Value |
|---|---|
| `document.getElementById('root').innerHTML` | `""` (length **0**) |
| `#root.childElementCount` / child nodes of any kind | **0** / **0** |
| `#root.getBoundingClientRect().height` | **0** px |
| `document.body.innerText` | `""` (length **0**) |
| `document.querySelectorAll('style').length` | **0** — styled-components never ran |
| `document.body.outerHTML.length` | **274** — byte-for-byte the served template |
| `typeof window.React` / `__REACT_DEVTOOLS_GLOBAL_HOOK__` | `"undefined"` / undefined |
| Pixels in the full-page capture | **1,024,000 of 1,024,000 pure white** |
| `"Hello World"` present anywhere in `<body>`, rendered or otherwise | **false** — the string does occur twice in the *served* `<head>`, in the meta description and in `<title>` (which is why `document.title` is `"Hello World"`), but the whole of `body.outerHTML` is the 274-character served template measured three rows above, and it contains no occurrence of the string. Nothing rendered it. |
| `TypeError` anywhere in the console | **false** |
| `Cannot read properties of undefined` anywhere in the console | **false** |
| `console.*` calls made by application code | **0** |
| WebSocket connections opened | **0** |

**5. Asset delivery was not the problem.** `runtime.js`, `main.js` and all four `vendors-*.js` chunks returned **HTTP 200** (≈3.7 MB in ≈80 ms). The only failures were four **400**s on unsubstituted `%PUBLIC_URL%` paths (`/static/js/bundle.js`, `/manifest.json` twice, `/favicon.ico`), which webpack-dev-server's Express router rejects with `URIError: Failed to decode param` because `%PU` is a malformed percent-escape — an independent runtime confirmation of the `%PUBLIC_URL%` and hardcoded-`bundle.js` rows in [W32](#w32--configuration-files-carry-deprecated-or-inert-settings), and not a cause of the blank page. Chrome also emitted `X-Frame-Options may only be set via an HTTP header sent along with a document. It may not be set inside <meta>.`, confirming the same finding's meta-header row from the browser's own mouth.

**6. Determinism.** The failure is not intermittent, and re-running the whole observation on 5 August 2026 established precisely which parts of it are deterministic and which are not. Across four loads — one cold load plus three instrumented reloads — every *outcome* was identical: byte-identical full-page screenshots (one SHA-256 across all three, a single distinct colour, 1,024,000 of 1,024,000 pixels white), the same 10 console messages as a set (9 errors and 1 DevTools issue), the `Uncaught EvalError`'s stack trace byte-for-byte, exactly one `securitypolicyviolation` with the same seven field values, every probe in the table above, the same eleven-request network composition, the same four `%PUBLIC_URL%` 400s and the same zero WebSocket connections.

Two things are **not** deterministic, and neither changes the outcome. The **order** of the console messages varies: the CSP issue and the `EvalError` surface at positions two and three when the six JavaScript chunks are served `304` from cache and at positions six and seven when they are served `200` with full bodies, because a cached bundle begins executing before the in-flight `%PUBLIC_URL%` 400 responses land. The chunks' status codes therefore vary between `200` and `304` across reloads, as does wall-clock load time. The earlier statement that the messages appear "in the same order" was too strong and has been narrowed to what four loads actually showed.

### E21 — Coverage thresholds and the `validate` short-circuit

**1. Does `prebuild` reach `lint --fix`?** `prebuild` runs `clean && validate`, and `validate` runs `type-check && lint && test`. Probing the first link of that chain, with no risk of the `--fix` step running:

```console
$ cd src/web && npx tsc --noEmit  (exit 2)  →  SHORT_CIRCUITED_BEFORE_LINT
```

`git status --porcelain` was `<EMPTY>` after every build attempt in this assessment, and `HEAD:src/web` kept the same tree hash throughout. The mutation hazard in [W5](#w5--the-spa-build-is-wired-to-rewrite-its-own-source-tree-including-in-ci) is therefore real but **latent**: it activates when [W6](#w6--the-spa-does-not-type-check-13-errors-all-syntax-level) is fixed.

**2. Are the coverage thresholds evaluated?** Yes — the repository's own `test` script carries `--coverage` (`src/web/package.json` L12):

```console
$ cd src/web && npm test -- --watchAll=false --ci
Test Suites: 2 failed, 2 total
Tests:       0 total
Jest: "global" coverage threshold for statements (100%) not met: 0%
Jest: "global" coverage threshold for branches (100%) not met: 0%
Jest: "global" coverage threshold for lines (100%) not met: 0%
Jest: "global" coverage threshold for functions (100%) not met: 0%
```

Exit code 1. Jest also printed a full coverage table — `All files | 0 | 0 | 0 | 0` across the **eight** collected source files (`App.tsx`, `reportWebVitals.ts`, `components/HelloWorld/HelloWorld.tsx`, `components/HelloWorld/styles.ts`, `config/environment.ts`, `hooks/useErrorBoundary.ts`, `styles/GlobalStyles.ts`, `styles/theme.ts`). Coverage collection is driven by `collectCoverageFrom`, so it happens whether or not a suite executes — the thresholds are live and simply never met. [E8](#e8--spa-test-suites-0-tests-execute) above used `npx jest --watchAll=false --ci`, which omits `--coverage`, which is why no threshold line appears there. See [W11](#w11--coverage-is-either-unenforceable-or-absent).

### Claims deliberately not made

Enterprise assessments fail most often by asserting a plausible finding that turns out to be wrong. The following claims were considered, could not be substantiated as stated, and are therefore either omitted or restated. They are listed so a reader can see exactly where the boundary of the evidence lies.

| Claim considered | Why it is not made as stated | What is claimed instead |
|---|---|---|
| "There are no coverage thresholds." | False as a blanket statement: `src/web/jest.config.ts` L28–L35 declares 100 % global thresholds. | [W11](#w11--coverage-is-either-unenforceable-or-absent) states that the SPA declares thresholds that are evaluated on every `npm test` and always fail at 0 %, and that `src/backend` declares no coverage configuration at all. |
| "The SPA's coverage thresholds are never evaluated." | The repository's own `test` script carries `--coverage` (`src/web/package.json` L12) and Jest collects coverage from `collectCoverageFrom` independently of suite execution, so all four thresholds are checked and reported on every run. | [W11](#w11--coverage-is-either-unenforceable-or-absent) claims that they can never be **met**, quoting the four `not met: 0%` lines, with the transcript in [E21](#e21--coverage-thresholds-and-the-validate-short-circuit). |
| "`documentation/Technical Specifications.md` §5.1.1 asserts the project has no backend." | The actual §5.1.1 (heading at L439) is "Layout Structure". | [W29](#w29--the-technical-specification-still-asserts-the-project-has-no-api) cites the lines that do carry the assertion: §3.3 at L304, §5.3 at L494 and §4.4 at L379. |
| "The two `Project Guide.md` files are duplicates." | Their hashes differ, they cover different subjects, and their sizes differ by an order of magnitude: `documentation/Project Guide.md` is 94 lines / 3362 bytes, while the platform-generated `blitzy/documentation/Project Guide.md` measured 708 lines / 61755 bytes on 5 August 2026 — a figure that changes whenever the platform regenerates it. | [W30](#w30--two-documents-named-project-guidemd-disagree-and-one-of-them-leaks-its-own-generator-prompt) describes them as two different documents sharing one filename with no cross-reference, and treats every figure it gives for the generated one — the size, the L1 title and the L3–L4 provenance block — as a date-stamped observation from 5 August 2026 rather than a durable citation. |
| "The blank page is caused by the missing `ThemeProvider`." | The page *was* rendered and is verifiably blank, but no theme error fires: the entry chunk never executes, so nothing reaches the render path. The console contains no `TypeError` and no "Cannot read properties of undefined". | [W35](#w35--the-pages-own-content-security-policy-kills-the-development-bundle-before-react-executes) records the Content-Security-Policy / `eval-source-map` conflict as the operative cause, and [W9](#w9--no-themeprovider-wraps-the-tree-so-the-spas-first-render-is-primed-to-throw) records the `ThemeProvider` omission as a real but latent defect behind it ([E20](#e20--spa-development-runtime-npm-start-the-csp-conflict-and-the-rendered-page)). |
| "The blank page reproduces with the repository's own commands." | It does not: no shipped script can load `webpack.config.ts`, so the page could only be observed after forcing the dev server up with two read-only environment variables and `--env mode=development`. | [W34](#w34--npm-start-does-not-start-the-dev-server-cannot-load-its-own-configuration) records that `npm start` fails outright, and [E20](#e20--spa-development-runtime-npm-start-the-csp-conflict-and-the-rendered-page) discloses the exact non-standard invocation used. |
| "The first theme error would originate in `GlobalStyles.ts` L20 because `App.tsx` renders it before `HelloWorld`." | Element order does not decide it, and it cannot be observed while the bundle never executes. In styled-components 5.3.11 a styled component evaluates its interpolations during render, while `createGlobalStyle` defers `renderStyles` to a layout effect on the client — so the later-rendered component may throw first. | [W9](#w9--no-themeprovider-wraps-the-tree-so-the-spas-first-render-is-primed-to-throw) names **both** unguarded files and asserts only that the provider fix must cover both, which is all the remediation needs. |
| "Terraform reports an error for the interpolated backend, the undeclared `var.tags`, and the module-argument mismatches." | `terraform init` aborts at the 7 earlier errors and never evaluates these. | [W26](#w26--further-terraform-defects-behind-the-initialisation-failure-static-inspection) is labelled *static inspection* and states that these surface only once [W25](#w25--terraform-does-not-initialise) is resolved. |
| Any specific advisory identifier (CVE or GHSA) affecting either dependency tree. | `npm audit --json` reported **zero** advisories across 356 packages in `src/backend` and **29** across 1576 in `src/web`; no advisory identifier is reproduced from either output, and no other scanner was run. | [S14](#s14--the-backend-dependency-tree-currently-reports-zero-advisories) reports the backend zero result and [E4b](#e4b--spa-advisory-posture-srcweb)/[R16](#risk-register) report the SPA counts by severity only; [R3](#risk-register) and [R9](#risk-register) remain framed as end-of-life and currency risks. |
| "`npm ci` fails in this repository." | It succeeds in this working tree, because of a git-ignored lockfile left by a prior `npm install`. | [W1](#w1--no-lockfile-is-committed-while-all-three-workflows-require-one) and [E9](#e9--clean-install-reproducibility) draw the distinction explicitly and prove the failure with a fresh-clone simulation. |
| "The nginx container serves no security headers, therefore the site is unprotected in production." | Whether a production site exists, and what serves it, cannot be determined from the repository. | [W22](#w22--the-container-image-cannot-be-built-and-could-not-start-if-it-were) confines itself to what the committed configuration would do; [R5](#risk-register) frames the consequence as a documentation-accuracy risk. |
| A defect count for the five unparseable SPA files. | Neither `tsc` nor ESLint can analyse a file it cannot parse, so the true count is unknown. | [W6](#w6--the-spa-does-not-type-check-13-errors-all-syntax-level) and [W7](#w7--the-spa-does-not-lint-92-problems) report the observed counts (13 and 92) and note that the real figure for those files is unknown until they parse. |

### Assessment metadata

| Field | Value |
|---|---|
| Document | `documentation/Enterprise Adoption Readiness Assessment.md` |
| Repository branch | `blitzy-e3647160-80f3-4cae-8f4c-61467fbd65fc` |
| Commit assessed | `47c6508a3576d89bf89edbb93e0ef307ac758019` (short `47c6508`) |
| Tracked files at that commit | 81 |
| Originally authored against | `dcc5b7f4adc7791b09c527284d0d849c993e5a03` (short `dcc5b7f`), when the count was 80 tracked files |
| Re-baselined and re-validated | 5 August 2026, against `47c6508` — every command in [What was executed](#what-was-executed) re-run against the current tree except [E17](#e17--unmerged-dependabot-branches)'s `git branch -a` branch list, which this checkout cannot reproduce and which is carried forward and labelled *static inspection*; see the **Baseline and re-validation** and **Revision 2** notes in [Scope and Method](#scope-and-method) |
| Assessment host runtime | Node v22.23.2, npm 10.9.8 |
| Tools used | git, npm, Node.js, TypeScript (`tsc`), ESLint, Jest, webpack / webpack-dev-server 5.109.2, Google Chrome, Docker 29.7.1, Docker Compose, Terraform 1.15.8 |
| Nature of this document | Read-only assessment. No finding was remediated, and no application, dependency, workflow, test, configuration or infrastructure file was modified. The work adds this document and the six-line pointer section in root `README.md`, and changes nothing else. |
| Findings and recommendations recorded | 14 strengths, 35 weaknesses, 16 risks and 27 modernization opportunities — the findings — plus 39 recommended steps across three waves, which are recommendations rather than findings and are implemented by nothing in this change |

---

That is the complete picture: a small, correct, well-tested service and a well-intentioned SPA, wrapped in enterprise scaffolding that cannot run end to end in the state assessed here. Fix the lockfile and the pipeline first, make the documentation tell the truth, and the rest becomes ordinary engineering work.

> **That's all, Folks!**
>
> — Porky Pig, *Looney Tunes*
