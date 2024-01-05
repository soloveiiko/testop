/** @type {import('next').NextConfig} */
const path = require("path");
const dotenv = require("dotenv");
const withNextIntl = require("next-intl/plugin")("./src/i18n.js");

const { NEXT_IMAGE_DOMAIN, NEXT_APP_API_URL } = dotenv.config({
  path: "./.env",
}).parsed;


module.exports = withNextIntl({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [NEXT_IMAGE_DOMAIN],
  },
  env: {
    NEXT_APP_API_URL,
  },
});
