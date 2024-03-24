// a
// const data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];

// function func(emp) {
// let name = emp[0];
// let surname = emp[1];
// let department = emp[2];
// let position = emp[3];
// let salary = emp[4];

//   let [name, surname, department, position, salary] = emp

//   console.log(name, surname, department, position, salary);
// }

// func(data);

// b
// const data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];

// function func(emp) {
// let name = emp[0];
// let surname = emp[1];
// let info = emp[2];

//   let [name, surname, info, ...rest] = data

//   console.log(name, surname, info);
// }

// func(data);

// c
// const data = ['Иван', 'Иванов', 'Отдел разработки'];

// function func(emp) {
  // let name = emp[0];
  // let surname = emp[1];
  // let department = emp[2];

  // let position;

  // if (emp[3] !== undefined) {
  //   position = emp[3];
  // }
  // else {
  //   position = 'Junior';
  // }

//   let [name, surname, department, position = 'Junior'] = data

//   console.log(name, surname, department, position);
// }

// func(data);

// d
const data = {
  color: 'red',
  width: 400,
  height: 500
};

function func(options) {
  // let color = options.color;
  // let width = options.width;
  // let height = options.height;

  let {color, width, height} = data

  console.log(color, width, height);
}

func(data);
