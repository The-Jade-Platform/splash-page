# Splash Page - The Jade Platform

This is the **main splash page** for [thejadeplatform.com](https://thejadeplatform.com).

- Built with **Next.js** and packaged in a **Docker container**.
- Hosted on **port 3001** on our production **Amazon EC2** instance.

## Deployment

To update the production instance:

1. Push your changes to the `main` branch.
2. GitHub Actions will automatically **build the Docker image** and **deploy it** to the server.

> **Important:** Only commit to `main` if you want your changes to go live in production.
