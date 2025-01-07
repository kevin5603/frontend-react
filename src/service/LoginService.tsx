import User from "../model/user.tsx";


const endpoint = import.meta.env.VITE_APP_API_URL + "/users";

export const loginService = {
  getUsers: async () => {
    const response = await fetch(`${endpoint}`, {
      method: "GET",
    });
    console.log(response);
    if (!response.ok) {
      const errorMessage = await response.text();
      alert(errorMessage);
      return;
    }
    return response.json();
  },
  findUserByName: async (username: string) => {
    const response = await fetch(`${endpoint}/search/${username}`, {
      method: "GET",
    });
    console.log(response);
    if (!response.ok) {
      const errorMessage = await response.text();
      alert(errorMessage);
      return;
    }
    return response.json();
  },
  saveUser: async (user: User) => {
    const response = await fetch(`${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    console.log(response);
    if (!response.ok) {
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  },
  deleteUser: async (id: number | undefined) => {
    const response = await fetch(`${endpoint}/${id}`, {
      method: "DELETE",
    })
    console.log(response);
    if (!response.ok) {
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  }
}


