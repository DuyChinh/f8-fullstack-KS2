export const ProductDetail = (value) => {
    // const { id } = params;
    return `
    <h1>Chi tiết sản phẩm: ${value.data.id}</h1>
    <button onclick="navigate('/san-pham')">Back</button>
    `;
};