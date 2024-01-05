export default () => ({
  async getPage(slug) {
    const data = await fetch(
      `${process.env.NEXT_APP_API_URL}/pages/${slug}`,
      {
        method: "GET",
        next: {
          revalidate: 10,
        },
      },
      {
        headers: {
          "x-locale": "uk",
        },
      }
    );
    return await data.json();
  },
});
