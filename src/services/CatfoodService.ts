export type CatfoodDto = {
  id: number;
  userId: string;
  name: string;
  flavor: string;
  amount: number;
  count: number;
  createdAt: string;
  updatedAt: string;
}

const API_HOST = process.env.API_HOST || 'https://catfood-manager.herokuapp.com/api/catfoods/'

class CatfoodService {
  
  async getAll(): Promise<Response> {
    return fetch(API_HOST);
  }

  async getById(id: string): Promise<Response> {
    return fetch(`${API_HOST}/${id}`);
  }

  async registration(body: CatfoodDto): Promise<Response> {
    const formData = new FormData();
    formData.append('userId', 'norang');
    formData.append('name', body.name);
    formData.append('amount', String(body.amount));
    formData.append('count', String(body.count));
    return fetch(API_HOST, {
      method: 'POST',
      body: formData, 
    })
  }

  async updateAll(body: CatfoodDto): Promise<Response> {
    const formData = new FormData();
    formData.append('id', 'norang');
    formData.append('userId', 'norang');
    formData.append('name', body.name);
    formData.append('amount', String(body.amount));
    formData.append('count', String(body.count));
    return fetch(API_HOST, {
      method: 'PUT',
      body: formData, 
    })
  }

  async updateCount(id:string): Promise<Response> {
    return fetch(`${API_HOST}/${id}`, {
      method:"PATCH"
    });
  }

  async delete(id: string): Promise<Response> {
    return fetch(`${API_HOST}/${id}`, {
      method:"DELETE"
    });
  }
}

export default CatfoodService;