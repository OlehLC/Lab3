const express = require("express");
const app = express();
const booksRouter = require("./routes/books");
// const booksRouter = require("./routes/books");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.use("/books", booksRouter);
app.get("/", (req, res) => {
  res.render("index");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
