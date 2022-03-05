// Parte II -----------------------------------------------
{
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  // const deliveryPerson = order.order.delivery.deliveryPerson;
  // const client = order.name;
  // const clientPhone = order.phoneNumber;
  // const addressStreet = order.address.street;
  // const addressNumber =  order.address.number;
  // const addressAp =  order.address.apartment;
  // console.log(`Òlá ${deliveryPerson}, entrega para: ${client}, Telefone: ${clientPhone}, Endereço: ${addressStreet}, N°: ${addressNumber}, AP: ${addressAp}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  // const pizzas = Object.keys(order.order.pizza);
  // const nameClient = order.name = 'Guilherme Axhcar';
  // const drink = order.order.drinks.coke.type;
  // const valueBuy = order.payment.total = '55';
  // console.log(`Olá ${nameClient}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$ ${valueBuy},00.`);
}
orderModifier(order);
}
// Parte III ----------------------------------------------
{
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// Atividade 1 ----------------------------------
// const addTurno = (target, key, value) => {
//   target[key] = value;
// }
// addTurno(lesson2, 'turno', 'integral');

// Atividade 2 ----------------------------------
// const listKeys = (obj) => Object.keys(obj);
//   console.log(listKeys(lesson1));

// Atividade 3 ----------------------------------
// const sizeObj = (obj) => Object.keys(obj).length;
// console.log(sizeObj(lesson1));

// Atividade 4 ----------------------------------
// const valueObj = (obj) => Object.values(obj);
// console.log(valueObj(lesson1));

// Atividade 5 ----------------------------------
// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

// Atividade 6 ----------------------------------
// Precisa do 5 para funcionar
// const totalStudents = (obj) => {
//   let result = 0;
//   const array = Object.keys(obj);
//   for (let index in array) {
//     result += obj[array[index]].numeroEstudantes;
//   }
//   return result
// }
// console.log(totalStudents(allLessons));

// Atividade 7 ----------------------------------
// const getValueByNumber = (obj, num) => Object.values(obj)[num];
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// Atividade 8 ----------------------------------
const verifyKeyValue = (obj, key, value) => {
  const array = Object.entries(obj);
  let isValid = false;
  for (const index in array) {
    if (array[index][0] === key && array[index][1]=== value) {
      isValid = true;
    }
  }
  return isValid
}
console.log(verifyKeyValue(lesson1, 'professor', 'Maria Clara'));

}