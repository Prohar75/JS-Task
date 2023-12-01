export default function findUnique(arr) {
    // Создаем объект для подсчета количества вхождений каждого числа
    const countMap = {};
  
    // Заполняем объект countMap
    for (const num of arr) {
      countMap[num] = (countMap[num] || 0) + 1;
    }
  
    // Ищем число, которое встречается только один раз
    for (const num in countMap) {
      if (countMap[num] === 1) {
        return parseInt(num); // Преобразуем обратно в число (если это было строкой)
      }
    }
  }    