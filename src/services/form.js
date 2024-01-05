export default () => ({
  async submitForm(value) {
    // console.log(env);
    const data = await fetch(`${process.env.NEXT_APP_API_URL}/leads`, {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
        "x-locale": "uk",
      },
    });
    return await data.json();
  },
});
