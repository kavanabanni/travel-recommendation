function searchPlace() {
  const input = document.getElementById("search").value.toLowerCase();
  const result = document.getElementById("result");

  if (input.includes("beach")) {
    result.innerHTML = `
      <h2>Beaches</h2>
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb">
    `;
  } 
  else if (input.includes("temple")) {
    result.innerHTML = `
      <h2>Temples</h2>
      <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220">
      <img src="https://images.unsplash.com/photo-1605648916319-3c9d4d9f8c63">
    `;
  } 
  else if (input.includes("country")) {
    result.innerHTML = `
      <h2>Countries</h2>
      <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a">
      <img src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade">
    `;
  } 
  else {
    result.innerHTML = "No results found";
  }
}