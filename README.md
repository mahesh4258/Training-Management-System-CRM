# Bright Future Academy - Training Institute Management (CRM)

<div align="center">

[![Salesforce](https://img.shields.io/badge/Salesforce-CRM-blue?logo=salesforce)](https://www.salesforce.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**A complete Digital Ecosystem for Training Institutes built on the Salesforce Platform.**


---
[ 📺 **Watch Demo** ](https://drive.google.com/file/d/1p6xOPJbuLnuI3Og62lV1DnMNpbWtNEYP/view?usp=sharing) | [ 📄 **Read Documentation** ](https://drive.google.com/file/d/16ROtuXdKdi-IZB-jfbzzTZK0gaPy1Jii/view?usp=sharing)
---

</div>
## 🌟 Project Overview
I built this CRM as the **Bright Future Academy Training Institue Management** to showcase my Salesforce knowledge in solving real-world business problems. The project transforms a manual, paper-based training institute into a digital, automated, and data-driven ecosystem. It handles the complete student lifecycle—from initial registration and batch assignment to fee collection and executive reporting.

---

## 🚀 Key Functionalities

### 1. Automated Student Onboarding
To ensure 100% data uniqueness, I implemented a **Record-Triggered Flow** that automatically generates a unique **Student ID** (e.g., STU-1001) the moment a new registration is saved. This eliminates manual numbering errors.

### 2. Financial Data Integrity (Validation Rules)
I established a "Digital Gatekeeper" using **Validation Rules** on the Payments object:
* **Positive Value Check:** Blocks any zero or negative payment entries.
* **Course Fee Match:** Ensures the payment amount matches the specific fee of the enrolled course.

### 3. Batch Lifecycle Automation
Using **Flow Builder**, I automated the status transitions of course batches. When a "Start Date" is reached, the Batch status automatically updates from **'Upcoming'** to **'Ongoing'**, triggering notifications for the assigned Tutors.

### 4. Developer Customizations (Apex & LWC)
* **Apex Triggers:** Built bulkified triggers to handle high-volume enrollment updates without hitting Salesforce governor limits.
* **LWC:** Developed a custom **Lightning Web Component** to provide staff with a high-performance search and filter interface for student records.

### 5. Management Insights
Custom **Reports and Dashboards** provide real-time visibility into:
* **Revenue Collection:** Paid vs. Pending fees.
* **Enrollment Trends:** Popular courses and batch capacity tracking.

---

## 🛠️ Technical Stack
* **Admin:** Flow Builder, Validation Rules, Object Modeling, Lookup Filters, Reports & Dashboards.
* **Developer:** Apex (Classes & Triggers), LWC (Lightning Web Components), SOQL.
* **Tools:** VS Code, Salesforce CLI (SFDX), Git/GitHub.

---

## 🔒 Security Model
* **Organization-Wide Defaults (OWD):** Set to Private/Public Read Only to protect sensitive financial data.
* **Permission Sets:** Implemented "Least Privilege" access, ensuring Counselors can manage students while only Admins can modify Course Fees.

---

## 📂 How to Explore the Code
The core implementation logic is located in the following directory:
`force-app/main/default/`
* `/classes` & `/triggers`: Backend Apex logic.
* `/lwc`: Frontend components.
* `/objects`: Custom field and validation rule definitions.
* `/flows`: Automated business processes.

---

## 📜 License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
**Developed by:** Thamarapalli Mahesh
**Project Title:** Training Institute Management - Bright Future Academy CRM
