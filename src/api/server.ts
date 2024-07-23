let token = '9f9598b3a66dfe3fc37f92b3b397ebe2394f22b792fc4693';

export const server_calls = {
  get: async () => {
    const response = await fetch(`https://car-inventory-jmnl.onrender.com/api/cars`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from server');
    }

    return await response.json();
  },

  create: async (data: any = {}) => {
    const response = await fetch(`https://car-inventory-jmnl.onrender.com/api/cars`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)

    })

    if (!response.ok) {
        throw new Error('Failed to create new data on the server')
    }

    return await response.json()
},
  update: async (id: string, data: any = {}) => {
    const response = await fetch(`https://car-inventory-jmnl.onrender.com/api/cars/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to update data on server');
    }

    return await response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`https://car-inventory-jmnl.onrender.com/api/cars/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to delete data from server');
    }

    return await response.json();
  }
};