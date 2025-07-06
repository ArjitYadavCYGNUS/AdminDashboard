React Admin Dashboard
An elegant, modern Admin Dashboard built with React, Tailwind CSS, shadcn/ui, and dnd-kit. It features dynamic theme switching, animated UI, draggable Kanban board, integrated charts, calendar, live clock & greetings, and a responsive layout.


✨ Features
🌙 Dark / Light Mode toggle

👤 Profile dropdown with glowing ring

⏰ Live Clock & Dynamic Greeting

📊 Responsive charts (Recharts)

📅 Interactive calendar (React-DatePicker or similar)

🗂️ Kanban Board with drag & drop

📈 Dynamic revenue data (auto-cycling by month)

🧠 System health, team info, recent activity

💡 Neon-themed border animation for a lively look

🛠️ Tech Stack
React

Tailwind CSS

shadcn/ui

@dnd-kit/core

Recharts

Lucide Icons

Date-fns / React-Datepicker (for calendar)

🚀 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/admin-dashboard.git
cd admin-dashboard
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the development server
bash
Copy
Edit
npm start
📁 Folder Structure
pgsql
Copy
Edit
src/
├── components/
│   ├── ui/
│   ├── ClockGreeting.jsx
│   └── Topbar.jsx
├── pages/
│   └── Dashboard.jsx
├── lib/
│   └── utils.js
├── App.jsx
├── index.js
├── index.css
📌 Customization
🌈 You can easily swap out chart data, profile info, or add more cards.

🎨 Modify color themes in tailwind.config.js or via classNames.

🧩 Add more shadcn components using:

bash
Copy
Edit
npx shadcn add [component-name]
📃 License
MIT © ArjitYadavCYGNUS
