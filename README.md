# Event Requirement Posting Flow

This project implements a **multi-step event requirement posting flow**
using **Next.js (Frontend)** and **Node.js + Express + MongoDB
(Backend)**. Users can create an event, select whom they want to hire
(Planner / Performer / Crew), fill role-specific requirements, review
the details, and submit the data to be stored in MongoDB.

------------------------------------------------------------------------

## 📌 Assignment Objective

-   Build a 3--4 step dynamic form
-   Steps should change based on **hire type selection**
-   Persist submitted data in MongoDB
-   Clearly categorize requirements by hire type

------------------------------------------------------------------------

## 🛠 Tech Stack

### Frontend

-   Next.js (App Router)
-   TypeScript
-   React Hook Form
-   Tailwind CSS

### Backend

-   Node.js
-   Express.js
-   MongoDB with Mongoose

------------------------------------------------------------------------

## 🧭 Form Flow

### Step 1: Event Details

-   Event Name
-   Event Type
-   Event Date & Time
-   Event Venue

### Step 2: Hire Type Selection

User selects one of: - Planner - Performer - Crew

### Step 3: Role-Specific Details

**Planner** - Event Budget - Guest Count - Required Services
(multi-select)

**Performer** - Performer Type(s) - Performer Count - Duration -
Equipment Required

**Crew** - Crew Type(s) - Crew Count - Duration - Equipment Required

### Step 4: Review & Submit

-   Review entered data
-   Submit to backend API

------------------------------------------------------------------------

## 📂 Project Structure

### Frontend (Next.js)

    app/
     ├─ components/
     │   ├─ EventDetailsForm.tsx
     │   ├─ HireTypeSelector.tsx
     │   ├─ PlannerDetailsForm.tsx
     │   ├─ PerformerDetailsForm.tsx
     │   ├─ CrewDetailsForm.tsx
     │   └─ ReviewAndSubmitForm.tsx
     ├─ types.ts
     └─ page.tsx

### Backend (Node.js)

    src/
     ├─ controllers/
     │   └─ events.controller.js
     ├─ models/
     │   └─ event.model.js
     ├─ routes/
     │   └─ event.route.js
    index.js

------------------------------------------------------------------------

## 🔌 API Endpoint

### Create Event

**POST** `/api/events`

#### Sample Request Body

``` json
{
  "eventName": "College Fest",
  "eventType": "Cultural",
  "eventDate": "2025-03-10",
  "eventVenue": "Auditorium",
  "hireType": "planner",
  "plannerDetails": {
    "eventBudget": 50000,
    "guestCount": 300,
    "services": ["Decor", "Caterers"]
  }
}
```

------------------------------------------------------------------------

## 💾 Database Design

-   Single `Event` collection
-   `hireType` determines which nested details object is populated
-   Only relevant role-specific data is stored
-   Flexible schema for future expansion

------------------------------------------------------------------------

## ▶️ Running the Project Locally

### Backend Setup

``` bash
cd backend
npm install
npm run dev
```

Create `.env`:

    MONGO_URI=your_mongodb_connection_string
    CLIENT_URL=http://localhost:3000
    PORT=5000

------------------------------------------------------------------------

### Frontend Setup

``` bash
cd frontend
npm install
npm run dev
```

Create `.env.local`:

    NEXT_PUBLIC_BASE_URL=http://localhost:5000

------------------------------------------------------------------------

## ✅ Key Highlights

-   Dynamic multi-step form
-   Single API submission
-   Strong TypeScript typing
-   Clean separation of concerns
-   Scalable data model

------------------------------------------------------------------------

## 👤 Author

**Vidhilika Gupta**
