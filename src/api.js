export const fetchResponse = async (chat) => {
  try {
    const responce = await fetch("https://chat-gpt-api-xi.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: chat.map((message) => message.message).join(" \n "),
      }),
    });

    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
