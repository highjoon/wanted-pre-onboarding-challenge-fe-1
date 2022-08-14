import TodoCard from "components/TodoCard";

const mockAPI = {
  data: [
    {
      title: "hi",
      content:
        "hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
  ],
};

const Todo = () => {
  return (
    <>
      {mockAPI.data.map((v) => (
        <TodoCard key={v.id} title={v.title} content={v.content} />
      ))}
    </>
  );
};

export default Todo;
