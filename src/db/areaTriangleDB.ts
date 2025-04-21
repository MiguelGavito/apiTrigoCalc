class AreaTriangleDB {
  async getData(): Promise<{ base: number, height: number }> {
    // Simulate a database call
    const Triangle = { base: 5, height: 10 }; // Example radius value
    return Triangle;
  }
}

export default AreaTriangleDB;