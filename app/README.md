# Topics
## Server components
1. Used for fetching data
2. Accessing backend resources
3. Keeping sensitive info on the server

## Client components
1. Interativity and event listeners
2. Using hooks like useState or useEffect
3. Using browser only APIs

## Routing
1. Next.js has a file-system based routing mechanism.
2. The way one organizes one's files and folders determines the routes of one's application.

    ### Routing conventions:
    1. All routes must be placed the app folder.
    2. Every file that represents a route should be names page.js or page.tsx
    3. Every folder corresponds to a path segment in the browser URL.

## Layouts
1. Layouts allows you to define UI that is shared btw multiple pages.
2. Useful for elements like headers, footers, navigation menus that you want to appear consistently across diffrent routes.
3. When navigating btwn pages that share a layout, only the page components update - the layout doesnot re-render.
4. This leads to improved performance and a smoother user experience.
5. They also help reduce code duplication and improve the overall structure of your project.

## Route Handlers
1. Route handlers allow you to create custom request handlers for your application.
2. Unlike page routers, which respond with HTML content, route handlers allow you to create RESTful endpoints.
3. Gives you full control over the response without the need for a separate backend setup.
4. Perfect for handling everything from form submissions and database queries to secure interactions with 3rd party APIs.
5. By running server-side, they ensure sensitive information like API keys remains protected.
