# AWS Cloud Projects — Felipe de Lima Rosa

> Cloud & FinOps Engineer with hands-on experience in enterprise AWS automation, governance, and security across multi-account environments.

Six real-world projects delivered in production for a corporate environment. Code is proprietary; architecture, decisions, and impact are fully documented.

## Live Portfolio
**[felipefefeu.github.io/aws-cloud-projects](https://felipefefeu.github.io/aws-cloud-projects/)**

---

## Projects

| # | Project | Problem Solved | Core Stack |
|---|---------|----------------|------------|
| 01 | [FinOps Budget Enforcement](./01-finops-budget-enforcement/) | Budget alerts were reactive — by the time someone read the email, the damage was done | SCP, Organizations, Lambda, Budgets, SNS |
| 02 | [Cost Report Automation](./02-cost-report-automation/) | Monthly cost visibility required manual AWS console access and engineering effort every month | Lambda, Cost Explorer API, S3, SNS, EventBridge |
| 03 | [Sophos Endpoint Reconciliation](./03-sophos-reconciliation/) | Endpoint security gaps were invisible between manual audits — exposure window could last weeks | Lambda, Secrets Manager, EventBridge, S3 |
| 04 | [Terraform PoC Factory](./04-terraform-poc-factory/) | AI team provisioned sandbox environments ad-hoc — no budgets, no network controls, forgotten instances billing over weekends | Terraform, Organizations, EC2, Bedrock |
| 05 | [Secure Data Ingestion](./05-secure-data-ingestion/) | Client uploads containing PII reached data scientists without any redaction layer, violating LGPD | Cognito, KMS, Lambda, S3 |
| 06 | [Multi-Account VPN](./06-vpn-connectivity/) | Legacy network integration required SSH access — blocked by corporate security guardrails, making integration unfeasible within the rules | EC2, SSM, IPsec/Libreswan, Transit Gateway |

---

## Core Stack

[![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com)
[![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)](https://python.org)
[![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)](https://terraform.io)
[![Linux](https://img.shields.io/badge/Linux-A8A9AD?style=for-the-badge&logo=linux)](https://kernel.org)

**Focus areas:** FinOps · Cloud Governance · Security Automation · Infrastructure as Code · Serverless · Multi-Account Architecture

---

*All architecture diagrams are versioned as code — [Python Diagrams](https://diagrams.mingrammer.com/) library.*

**Author:** Felipe de Lima Rosa · [LinkedIn](https://www.linkedin.com/in/felipe-limarosa) · [GitHub](https://github.com/felipefefeu)
