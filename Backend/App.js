import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/LoginRegister" , {
        useNewUrlParser: true,
        useUnifiedTopology: true
})


.then(() => {
    console.log("DB Connected");
})
.catch((err) => {
    console.log("Error connecting to DB:", err);
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)


//Routes
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successfull", user: user });
        } else {
          res.send({ message: "Password didn't match" });
          navigate("/Login")
        }
      } else {
        res.send({ message: "User not registered" });
        navigate("/Login")
      }
    } catch (err) {
      res.send({ message: err.message });
    }
  });

  app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        res.send({ message: "User already Registered!" });
     } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        await newUser.save();
        res.send({ message: "Successfully Registered, Please login now" });
      }
    } catch (err) {
      res.send({ message: err.message });
    }
  });

app.listen(9002,()=>{
    console.log("Be started at port 9002")
})