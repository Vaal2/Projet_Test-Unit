const items = [
  //clean
  {
    todolist_id: 1,
    name: "item 1 todo 1",
    content: "This is the content part, we can see a beautiful sky right here ...",
    createdAt:"2021-12-29 20:00:00"
  },
  //no name
  {
    todolist_id: 1,
    name: "",
    content: "This is the content part, we can see a beautiful sky right here ...",
    createdAt:"2021-12-29 20:00:00"
  },
  //no content
  {
    todolist_id: 1,
    name: "item 3 todo 1",
    content: "",
    createdAt:"2021-12-29 20:00:00"
  },
  //content length > 1000
  {
    todolist_id: 2,
    name: "item 1 todo 2",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque esse minima aperiam sapiente, quis dicta aliquid aliquam commodi vero dolor nemo, ipsam quidem facilis molestias obcaecati est magni sed aut
    Vitae voluptatum cupiditate cum ab, perferendis laboriosam necessitatibus fuga quos alias voluptates consectetur nam id unde dolorum consequuntur quibusdam harum, ducimus dignissimos, doloribus odit aliquam eum quaerat! Accusamus, ipsum sunt.
    Beatae pariatur a obcaecati amet nostrum nisi consequuntur, distinctio expedita nobis. Magni corrupti facilis obcaecati dolor aliquid officia iure eos? Dolorum omnis quo voluptatem eligendi error commodi molestias odio sequi.
    Vel fuga vitae maiores? Accusantium repellat iusto delectus corrupti atque ratione consequatur error quia minus eos nesciunt quos expedita quibusdam dolore eius modi reprehenderit, vitae possimus voluptates? Quasi, amet soluta.
    Fuga dolorem error quos accusamus voluptatum, tenetur molestias quibusdam, sunt incidunt porro obcaecati assumenda quas quasi voluptates aliquam quae`,
    createdAt:"2021-12-29 20:00:00"
  },
  //no creation date
  {
    todolist_id: 2,
    name: "item 2 todo 2",
    content: "This is the content part, we can see a beautiful sky right here ...",
    createdAt:""
  },
  {
    todolist_id: 2,
    name: "item 3 todo 2",
    content: "This is the content part, we can see a beautiful sky right here ...",
    createdAt:"2021-12-29 20:00:00"
  },
  {
    todolist_id: 2,
    name: "item 4 todo 2",
    content: "This is the content part, we can see a beautiful sky right here ...",
    createdAt:"2021-12-29 20:00:00"
  },
  {
    todolist_id: 3,
    name: "item 1 todo 3",
    content: "This is the content part, we can see a beautiful sky right here ...",
    createdAt:"2021-12-29 20:00:00"
  },
  {
    todolist_id: 3,
    name: "item 2 todo 3",
    content: "This is the content part, we can see a beautiful sky right here ...",
    createdAt:"2021-12-29 20:00:00"
  },
  //not an unique name
  {
    todolist_id: 3,
    name: "item 2 todo 3",
    content: "This is the content part, we can see a mùmùmbeautiful sky right here ...",
    createdAt:"2021-12-29 20:00:00"
  },
]