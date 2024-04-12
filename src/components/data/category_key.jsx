import data from "./data.json";

const categories = data.map(({ category }) => category);
const categoryList = [...new Set(categories)];
categoryList.push(categoryList.splice(0, 1)[0]);

export default categoryList;