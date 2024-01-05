export default () => ({
  async getMenu() {
    const data = await fetch(`${process.env.NEXT_APP_API_URL}/menu`, {
      method: "GET",
      next: {
        revalidate: 10,
      },
    },{
      headers: {
        "x-locale": "uk",
      },
    });
    return await data.json();
  },
});
