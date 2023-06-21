import axios, { AxiosResponse } from 'axios';

type CreateRoomResponse = {
  id: string;
  name: string;
  member: string[];
  created_at: string;
  updated_at: string;
};

export const fetchCreateRoom = async (roomName: string): Promise<CreateRoomResponse> => {
  try {
    const response: AxiosResponse<CreateRoomResponse> = await axios.post('api/room/create', {
      roomName: roomName,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating room:', error);
    throw error;
  }
};

export const fetchEnterRoom = async (roomId: string, memberName: string) => {
  try {
    const response: AxiosResponse<CreateRoomResponse> = await axios.post(`api/room/enter/${roomId}`, {
      memberName: memberName,
    });

    return response.data;
  } catch (error) {
    console.error('Error Enter room:', error);
    throw error;
  }
};
