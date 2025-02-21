interface IpInfo {
    ip: string;
    country: string;
  }
  let infoData: IpInfo | null = null;
  
  export const useLocation = async () => {
    const ipInfoKey = "3f925abfddf59d";
    try {
      if (infoData) {
        return infoData;
      }
      console.log("Fetching IP info...");
      const response = await fetch(`https://ipinfo.io/json?token=${ipInfoKey}`);
      if (!response.ok) {
        throw new Error('Failed to fetch IP info');
      }
      const data = await response.json();
      console.log("Data:", data);
      infoData = data;
      return infoData;
    } catch (err) {
      console.error('Failed to fetch country from IP:', err);
      return null;
    }
  };
  