class AreaCircleDB {
  async getData(): Promise<{ radius: number }> {
    // Simulate a database call
    const data = { radius: 5 }; // Example radius value
    return data;
  }
}

export default AreaCircleDB;