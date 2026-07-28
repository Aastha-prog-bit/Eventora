const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const mongoose=require('mongoose')
const authRoutes=require('./routes/auth')
const eventRoutes=require('./routes/events')
const bookingRoutes=require('./routes/bookings')
dotenv.config()
const app=express();
app.use(cors());
//routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use('/api/events', require('./routes/events'));
app.use('/api/bookings', require('./routes/bookings'))
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("connected to mongodb");
    console.log("Database:", mongoose.connection.name);
})
.catch((error)=>{
    console.log(error);
});
const PORT=process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
console.log(process.env.MONGODB_URI);