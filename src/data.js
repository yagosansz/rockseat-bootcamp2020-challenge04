import { resolve } from 'path';

export default {
  posts: [
    {
      id: 1,
      author: {
        name: "Yago Santos",
        avatar: "https://avatars2.githubusercontent.com/u/24740101?s=460&u=153e3cd41c5e55453a35758ae5d4d29e36ba684e&v=4"
      },
      date: "Dec 19, 2019",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, diam vel blandit porta, sem sem scelerisque libero, ut placerat velit justo quis purus.",
      comments: [
        {
          id: 1,
          author: {
            name: "Bruno Anacleto",
            avatar: "https://avatars3.githubusercontent.com/u/8696092?s=460&u=8379f8ffa12475b2d336e023823eb8342d888767&v=4"
          },
          content: "Duis laoreet luctus eros ut sollicitudin. Nunc ex massa, mollis eget erat sed, vestibulum laoreet lacus. Praesent varius ante at iaculis viverra. Nulla molestie posuere ornare. Cras volutpat fermentum risus vitae congue. Proin vel tristique ante. Nulla ac dui a massa aliquet dignissim."
        }
      ]
    },
    {
      id: 2,
      author: {
        name: "Yago Santos",
        avatar: "https://avatars2.githubusercontent.com/u/24740101?s=460&u=153e3cd41c5e55453a35758ae5d4d29e36ba684e&v=4"
      },
      date: "May 05, 2020",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, diam vel blandit porta, sem sem scelerisque libero, ut placerat velit justo quis purus.",
      comments: [
        {
          id: 1,
          author: {
            name: "Bruno Anacleto",
            avatar: "https://avatars3.githubusercontent.com/u/8696092?s=460&u=8379f8ffa12475b2d336e023823eb8342d888767&v=4"
          },
          content: "Duis laoreet luctus eros ut sollicitudin. Nunc ex massa, mollis eget erat sed, vestibulum laoreet lacus. Praesent varius ante at iaculis viverra. Nulla molestie posuere ornare. Cras volutpat fermentum risus vitae congue. Proin vel tristique ante. Nulla ac dui a massa aliquet dignissim."
        },
        {
          id: 2,
          author: {
            name: "Mateus Bezerra",
            avatar: "https://avatars0.githubusercontent.com/u/53958741?s=460&v=4"
          },
          content: "Duis laoreet luctus eros ut sollicitudin. Nunc ex massa, mollis eget erat sed, vestibulum laoreet lacus. Praesent varius ante at iaculis viverra. Nulla molestie posuere ornare. Cras volutpat fermentum risus vitae congue. Proin vel tristique ante. Nulla ac dui a massa aliquet dignissim."
        }
      ] 
    }
  ]
}