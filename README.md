# NextJS
Next.js is a React framework for building full-stack web applications.
Next.js simplifies the process of building production-ready web applications. It simplifies
    1. Routing
    2. API routes
    3. Rendering
    4. Data fetching
    5. Styling
    6. Optimization
    7. Dev and prod build system
    
## Topics

### Server components
1. Used for fetching data
2. Accessing backend resources
3. Keeping sensitive info on the server

### Client components
1. Interativity and event listeners
2. Using hooks like useState or useEffect
3. Using browser only APIs

### Routing
1. Next.js has a file-system based routing mechanism.
2. The way one organizes one's files and folders determines the routes of one's application.

    #### Routing conventions:
    1. All routes must be placed in the app folder.
    2. Every file that represents a route should be names page.js or page.tsx
    3. Every folder corresponds to a path segment in the browser URL.

### Layouts
1. Layouts allows you to define UI that is shared btw multiple pages.
2. Useful for elements like headers, footers, navigation menus that you want to appear consistently across diffrent routes.
3. When navigating btwn pages that share a layout, only the page components update - the layout doesnot re-render.
4. This leads to improved performance and a smoother user experience.
5. They also help reduce code duplication and improve the overall structure of your project.

### Route Handlers
1. Route handlers allow you to create custom request handlers for your application.
2. Unlike page routers, which respond with HTML content, route handlers allow you to create RESTful endpoints.
3. Gives you full control over the response without the need for a separate backend setup.
4. Perfect for handling everything from form submissions and database queries to secure interactions with 3rd party APIs.
5. By running server-side, they ensure sensitive information like API keys remains protected.

### Data fetching
1. Server components are the preferred choice for data fetching in Next.js because
   1. reduced bundle size
   2. lower latency
   3. improved SEO
   4. direct access to backend resources
   5. and the ability to secure sensitive data
2. Opt for client components for data fetching only when its necessary such as real time updates or when the data depends on client side interactions that can't be predicted server-side.

### Server actions
1. Server actions are asynchronous functions that are executed on the server.
2. They allow us to define and execute server-side logic directly from our components.
3. They're incredibly useful for handling form subissions, updating databases, or any operation that requires server-side execution.

### Authentication with Clerk
1. Sign Up
2. Sign In
3. manage account
4. Show UI elemets based on auth status
5. Protect routes based on auth status
6. Read session and user data
7. Sign out