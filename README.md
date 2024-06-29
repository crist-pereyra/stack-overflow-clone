# Dev Overflow 📚

![Kanban Preview](/public/assets/images/demo.jpg)

## 🌐 Live Demo

Explore the live demonstration of the project: [nextjs14-devoverflow](https://stack-overflow-clone-amber.vercel.app/)

Welcome to the Dev Overflow project! This is a modern, intuitive, and feature-rich clone of Stack Overflow built with the following awesome technologies:

⚡ **Next.js 14** for server-side rendering and static site generation  
⚛️ **React with TypeScript** for a robust and scalable frontend  
🎨 **Tailwind CSS** for beautiful and customizable UI components  
🔒 **Clerk** for authentication and user management  
🛠️ **ESLint and Prettier** for code quality and consistency  
🖌️ **Shadcn/ui** for UI components  
📝 **TinyMCE** for rich text editing  
📂 **MongoDB and Mongoose** for database management  
🌈 **PrismJS** for syntax highlighting  
📏 **Zod** for schema validation

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/crist-pereyra/stack-overflow-clone
   cd stack-overflow-clone
   ```

2. Install dependencies:

```sh
   npm install
```

### Running the Development Server

1. Start the development server with the following command:

```sh
   npm run dev
```

2. Open your browser and navigate to http://localhost:3000 to see Dev Overflow in action!

## 📂 Project Structure

Here's an overview of the project's structure:

```php
dev-overflow/
├── app/                    # Source code
│   ├── (auth)/             # Log In/ Sign In pages
│   ├── (root)/             # Main Pages
│   ├── api/                # Endpoints
│   ├── globals.css         # CSS style
│   └── layout.tsx          # Main Layout
├── components/             # React components
├── constants/              # Constant values
├── context/                # Context providers
├── database/               # Database interactions
├── lib/                    # Library functions
├── public/                 # Public assets
├── styles/                 # CSS styles
├── types/                  # TypeScript types
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
├── components.json         # Components metadata
├── middleware.ts           # Middleware configuration
├── next.config.mjs         # Next.js configuration
├── package-lock.json       # Lock file for npm
├── package.json            # Project metadata and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Key Features

- **Authentication**: Secure user authentication and management with Clerk.
- **Rich Text Editing**: Create and edit content with TinyMCE.
- **Syntax Highlighting**: Beautiful code display using PrismJS.
- **State Management**: Efficient state management with Search Params in Next.js 14.
- **Type Safety**: Benefit from TypeScript's type-checking to minimize errors.
- **Schema Validation**: Robust input validation with Zod.
