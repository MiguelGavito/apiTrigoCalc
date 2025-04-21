class PitagoreanDB {
  async getData(): Promise<{ catetoA: number, catetoB: number }> {
    // Simulate a database call
    const Pitagor = { catetoA: 9, catetoB: 3 }; // Example radius value
    return Pitagor;
  }
}

export default PitagoreanDB;