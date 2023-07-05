const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require("./middlewares/errorMiddleware.js");
//routes path
const authRoutes=require('./routes/authRoute.js');
const openAiRoutes=require('./routes/openAiRoutes.js');


dotenv.config();

connectDB();

const app=express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(errorHandler);

const PORT=process.env.PORT;

//api routes
app.use("/api/v1/auth", authRoutes);
app.use('/api/v1/openai', openAiRoutes);

app.listen(8080,()=>{
    console.log(`Server Running in ${process.env.PORT} on ${process.env.DEV_MODE} mode`);
});