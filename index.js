const express =require("express");
const app =express()
app.use(express.json());
const cors = require('cors');
app.use(express.urlencoded({ extended : true }));
app.use(cors());
require('dotenv').config();
const connectDB =require('./database/db')


// const allowedOrigins = ["https://hotel-booking-site-dbed7.web.app"];
// app.use(cors({
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// }));

app.use('/profile', require('./routes/ProfileRoutes'))
app.use('/api', require('./routes/PostRoutes'))
app.use('/user', require('./routes/UserRoutes'))
// app.use('/', require('./routes/PaymentRoutes'))
// app.use('/api', require('./routes/bookingsRoutes'))
app.get('/', (req,res) =>{
    res.send("pronob")
})
// app.use('/api', require('./routes/userRoutes'))
// app.use('/pay/webhook', require('./routes/cartPaymentRoutes'))
app.listen(5000,() =>{
    console.log("Server is running")
})

connectDB()