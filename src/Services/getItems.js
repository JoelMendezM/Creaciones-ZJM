export const getItems = async () => {
  try {
    const response = await fetch("./products.json");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
    // 
  } catch (error) {
    console.log(error);
  }
};
