import express from "express";

const app = express();

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "A simple joke",
    },
    {
      id: 2,
      title: "Animal Joke",
      content: "Out side of home Cat was Barking",
    },
    {
      id: 3,
      title: "Politics Joke",
      content: "Indian Politions are so Poor",
    },
    {
      id: 4,
      title: "Eduaction Joke",
      content:
        "We live this kind of Socity there Eduction System was top Class",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
