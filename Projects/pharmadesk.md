# PharmaDesk - Smart Pharmacy Management SaaS

**PharmaDesk** (available at [pharmadesk.in](https://www.pharmadesk.in/)) is a premium, high-efficiency Software-as-a-Service (SaaS) platform built specifically to automate and streamline pharmacy operations, inventory tracking, and retail billing workflows.

---

## Technical Stack & Infrastructure

- **Frontend Application:** Next.js 14 (App Router) combined with **TanStack Tables** for highly interactive, filterable, and dense inventory/billing lists.
- **User Interface System:** Styled with Tailwind CSS and premium **shadcn/ui** components.
- **Database Architecture:** Relational **PostgreSQL** database hosted on **Supabase** with automated indexing for batch queries.
- **Authentication & Security:** Secure session handling and multi-step onboarding powered by **Supabase Auth**.
- **Payment Processing:** Integrated **Razorpay** SDK supporting automated merchant subscriptions and invoicing payments.
- **Communications:** Transactional emails (onboarding, low stock warnings, expiry alerts) dispatched via **Resend**.
- **Backend Services:** Server-side functions and data mutation endpoints written as **Next.js API Routes**.
- **Roadmap (Next Gen):** Re-architecting the core backend APIs into scalable microservices written in **NestJS** or **Go** for high horizontal scalability.

---

## Core Platform Modules

### 1. Invoicing & Billing
- Fast billing workflows utilizing invoice generation templates.
- Support for generating retail bills, custom challans, and printing receipts.
- Automatic inventory level adjustments triggered instantly upon invoice finalization.

### 2. Inventory & Batch Tracking
- Deep tracking of stock levels with multi-batch support.
- Real-time stock status monitoring (low stock alerts, restock triggers).

### 3. Expiry Management
- Active scanning of medicine batches.
- Automated color-coded indicators representing expiry status (active, expiring soon, expired).
- Hard block validation rules preventing staff from billing expired batches to guarantee patient safety.

### 4. Sales Reports & Analytics
- Deep metrics dashboard summarizing sales volumes, profit margins, and inventory value.
- Monthly tax estimation reports and printable summaries.

### 5. AI Optimizations
- **Predictive Restocking:** Forecaster algorithms that suggest purchase quantities based on historical seasonal sales.
- **Automated Batch Processing:** Intelligent AI scanning of distributor invoice PDFs to extract batch numbers, manufacturing dates, and exipries automatically.
