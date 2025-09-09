# Splash Page - The Jade Platform

This is the **main splash page** for [thejadeplatform.com](https://thejadeplatform.com).

- Built with **Next.js** and packaged in a **Docker container**.
- Hosted on **port 3001** on our production **Amazon EC2** instance.

## Deployment

To update the production instance:

1. Build the docker image.
2. Push your changes to the `main` branch.
3. GitHub Actions will automatically **build the Docker image** and **deploy it** to the server.

> **Important:** Only commit to `main` if you want your changes to go live in production.

## Manual Docker Build & Run

If you want to build and run the Docker image manually, you can run:

```bash
# Build the Docker image
docker build -t splash-page .

# Run the container
docker run -p 3001:3001 splash-page

# Run in detached mode with a name
docker run -d -p 3001:3001 --name splash-page-container splash-page

# Stop and remove the container if needed
docker stop splash-page-container
docker rm splash-page-container
```
