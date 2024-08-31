import data from '../data/data.json';

export const orderData = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500)
    })
}

export const orderItemId = (itemId) => {
  return new Promise((resolve, reject) => {
    const item = data.find((elem) => elem.id === itemId);
    if (item) {
      resolve(item);
    } else {
      reject({
        error: "No se encontró el producto.",
      });
    }
  });
};