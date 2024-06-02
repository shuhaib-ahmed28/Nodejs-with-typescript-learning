interface User {
    name: string;
    age: number;
    email: string;
}

 export const users:User[]=[
    {
        name:"Vikram",
        age:21,
        email: "vikramsurrendar10@gmail.com"
    },
    {
        name:"Imran",
        age:21,
        email: "imranayub10@gmail.com"
    },
    {
        name:"Suhail",
        age:21,
        email: "suhaildynamite007@gmail.com"
    },

];



interface book{
    img:string;
    bookname:string;
    price:number;
    discount:number;
    originalPrice:number;
    description:string;
}

export const books : book[]=[
    {
        img:"https://i.pinimg.com/236x/19/0c/b0/190cb0aa5880d1077802591dbec16b3d.jpg",
        bookname:"Rich dad poor dad",
        price:360,
        discount:10,
        originalPrice:400,
        description:"financial literacy"
    },
    {
        img:"https://i.pinimg.com/236x/8c/9b/a8/8c9ba8c6475ad1d3e5b2e7f36341afcc.jpg",
        bookname:"Harry Potter and the PRISONERS of AZKABAN",
        price:809,
        discount:10,
        originalPrice:899,
        description:"Fictional Fantasy"
    },
    {
        img:"https://i.pinimg.com/236x/65/20/9a/65209aff43fa12661a3359a67e201d30.jpg",
        bookname:"The Great Gatsby",
        price:630,
        discount:10,
        originalPrice:700,
        description:"personality development"
    },
    {
        img:"https://i.pinimg.com/236x/19/0c/b0/190cb0aa5880d1077802591dbec16b3d.jpg",
        bookname:"Rich dad poor dad",
        price:360,
        discount:10,
        originalPrice:400,
        description:"financial literacy"
    },
    {
        img:"https://i.pinimg.com/236x/8c/9b/a8/8c9ba8c6475ad1d3e5b2e7f36341afcc.jpg",
        bookname:"Harry Potter and the PRISONERS of AZKABAN",
        price:809,
        discount:10,
        originalPrice:899,
        description:"Fictional Fantasy"
    },
    {
        img:"https://i.pinimg.com/236x/65/20/9a/65209aff43fa12661a3359a67e201d30.jpg",
        bookname:"The Great Gatsby",
        price:630,
        discount:10,
        originalPrice:700,
        description:"personality development"
    }
]