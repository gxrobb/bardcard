import { useEffect, useState } from "react";

const fetchImage = async (id: string) => {
  const apiKey = import.meta.env.VITE_CAT_API_KEY;

  if (!apiKey) {
    throw new Error('API key not found in environment variables');
  }

  const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=${apiKey}&id=${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch image');
  }
  const data = await response.json();
  return data[0].url;
};

const useFetchImage = (id: string) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        setLoading(true);
        setError(null);
        const url = await fetchImage(id);
        setImageUrl(url);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load image');
        console.error('Error fetching image:', err);
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [id]);

  return { imageUrl, loading, error };
};

export default useFetchImage;