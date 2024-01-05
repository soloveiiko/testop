export default () => ({
  async getVariables() {
    const data = await fetch(
      `${process.env.NEXT_APP_API_URL}/suggest/variables`,
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
