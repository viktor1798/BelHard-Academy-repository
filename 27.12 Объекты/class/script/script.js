// Созднание объекта

//person = new Object(); // пустой объект создан при помощи конструктора

//person={};  // пустой объект

let person = {
    firstName : "Sasha",
    lastName: "Petrov",
    id: 5566,

    fullInfo:()=>{
        return alert(`name: ${person.firstName}, lastname: ${person.lastName}, id:${person.id}`) // метод объекта person
    }
}

person.fullInfo(); // обращение к свойствам объекта