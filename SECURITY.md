# Security Policy

## About the Keys

All API keys in this repository (prefixed with `sk-`) are **tokens issued by our own gateway platform**. They are NOT upstream provider keys.

- Each key has independent rate limits and daily quotas
- Keys expire automatically (typically within 24-48 hours)
- No upstream credentials are exposed in this repository

## Reporting a Vulnerability

If you discover a security vulnerability, please **DO NOT** open a public issue.

- **Preferred**: open a private [GitHub Security Advisory](https://github.com/alistaitsacle/free-llm-api-keys/security/advisories/new). Only project maintainers can see it.
- We aim to acknowledge within 72 hours and triage within 7 days.
- Please include reproduction steps, impacted endpoints, and the request ID if you have one.

We will credit reporters in the advisory once a fix is released, unless you prefer to stay anonymous.

## Responsible Use

- Do not attempt to bypass rate limits or quota restrictions
- Do not use the keys for illegal or harmful purposes
- Do not attempt to reverse-engineer the gateway
