# ECommerce (React + Firebase + Redux)

**🔗 Live demo:** [https://farru11.github.io/Ecommerce/](https://farru11.github.io/Ecommerce/)

A shopping demo built with React and Vite.

- Browse products and categories (data from [Fake Store API](https://fakestoreapi.com))
- Product detail pages and a Redux-powered cart
- Sign up / log in with Firebase Authentication; the cart is a protected route
- Contact form with Formik + Yup validation

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview
```

## Deploy to GitHub Pages

1. In the repo go to **Settings > Pages** and set **Source** to **GitHub Actions**.
2. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.

The app uses `HashRouter`, so deep links (`/#/products`) work on Pages without any server config.

### Firebase note

Add your Pages domain (`<username>.github.io`) under **Firebase Console > Authentication > Settings > Authorized domains**, otherwise login will fail on the live site.
