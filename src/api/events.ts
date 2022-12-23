import { Event } from 'types/event';
import axios from 'axios';
const BACKEND_URL = 'http://localhost:5000';

export const getEvents = () => axios.get<Event[]>(`${BACKEND_URL}/events`);

export const createEvent = (event: Event) => axios.post<Event>(`${BACKEND_URL}/events`, event);

export const updateEvent = (event: Event) =>
  axios.put<Event>(`${BACKEND_URL}/events/${event.id}`, event);

export const deleteEvent = async (id: number) => axios.delete<Event>(`${BACKEND_URL}/events/${id}`);
