This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# Storybook
npm run storybook
```
## Component overview

# Input.tsx
props: 
- type
- placeholder
- clearable
# Screenshots: 
# With text
![Active](<Screenshot 2025-10-03 at 16.22.49.png>)
# Without text
![No text](<Screenshot 2025-10-03 at 16.23.38.png>)
# Toggle password btn
![Toggle password](<Screenshot 2025-10-03 at 16.24.23.png>)

# Toast.tsx (with animations)
props:
- message
- type
- duration

# Screenshots:
# Success type
![Success](<Screenshot 2025-10-03 at 16.26.30.png>)
# Error type
![Error](<Screenshot 2025-10-03 at 16.26.44.png>)
# We can also change duration, types, messages via props

# Sidebar.tsx (with animations)
props:
- menuItems array of objects

# Opened state without nested objects
![Opened](<Screenshot 2025-10-03 at 16.31.33.png>)
# Opened state with nested objects
![Opened nested](<Screenshot 2025-10-03 at 16.32.57.png>)
