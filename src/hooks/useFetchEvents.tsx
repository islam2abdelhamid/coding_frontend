import { getEvents } from 'api/events';
import { useEffect, useState, useCallback } from 'react';
import { Event } from 'types/event';

const useFetchEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await getEvents();
      setEvents(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return { events, loading, error, fetchEvents };
};

export default useFetchEvents;
