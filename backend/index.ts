// import { sendMail } from './mailer';
// import ws from 'ws';
import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import {
  MongooseConnect,
  User,
  Work,
  About,
  Contact,
  Blog,
} from './interfaces';
import { addWork, addAbout, addBlog } from './data';
import path from 'path';
import cors from 'cors';
import moment from 'moment';

const app: Application = express();

// const webSocketServer = new ws.Server({ port: 8081 });

app.use('/images', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

const mongooseOptions: MongooseConnect = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const User = mongoose.model<User>(
  'User',
  new mongoose.Schema({
    nickName: String,
    password: String,
    registered: { type: Date, default: Date.now },
  }),
);

const About = mongoose.model<About>(
  'About',
  new mongoose.Schema({
    details: {
      name: String,
      city: String,
      email: String,
      github: String,
      linkedin: String,
      image: [String],
    },
    misc: {
      bio: String,
      introdescription: String,
      description: [String],
      important: String,
      skills: [String],
    },
  }),
);

const Work = mongoose.model<Work>(
  'Work',
  new mongoose.Schema({
    id: String,
    name: String,
    shortdescription: String,
    description: String,
    image: String,
    url: String,
    languages: [String],
    participants: [String],
  }),
);

const Blog = mongoose.model<Blog>(
  'Blog',
  new mongoose.Schema({
    title: String,
    date: Date,
    content: [String],
  }),
);

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  message: String,
  date: Date,
});

const Contact = mongoose.model<Contact>('Contact', contactSchema);

// -----Funkar inte-----
// contactSchema.post('save', async function () {
//   try {
//     await sendMail();
//   } catch (error) {
//     console.error(error);
//   }
// });

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test', mongooseOptions);

  const database = mongoose.connection;
  database.on('error', console.error.bind(console, 'connection error'));

  database.once('open', function () {
    console.log('Connected to MongoDB');
  });

  //-----Koden för att fylla databasen med startvärden----

  // const contact = new Contact({
  //   name: "Test",
  //   email: "Test@email.com",
  //   phone: 494483993,
  //   date: moment().format("YYYY-MM-DD"),
  // });
  // await contact.save();

  // const user = new User({
  //   nickName: "klarabryntesson",
  //   password: "secret",
  // });
  // await user.save();
  // console.log(user.nickName);

  // await Work.deleteMany({});
  // await About.deleteMany({});
  // await Contact.deleteMany({});

  // await Work.insertMany(addWork);
  // await Blog.insertMany(addBlog);
  // await About.insertMany(addAbout);
}

app.use(express.json());

app.use(cors());

// app.use((request: Request, response: Response, next: NextFunction) => {
//   response.header('Access-Control-Allow-Origin', '*');
//   response.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.get(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    const users = await User.findOne();
    if (users === undefined) {
      response.status(404).end();
    } else {
      response.status(200).send(users);
    }
  },
);

app.get(
  '/work',
  async (request: Request, response: Response, next: NextFunction) => {
    const works = await Work.find();
    if (works === undefined) {
      response.status(404).end();
    } else {
      response.status(200).send(works);
    }
  },
);

app.get(
  '/blog',
  async (request: Request, response: Response, next: NextFunction) => {
    const today = new Date();
    const blogs = await Blog.find({
      date: { $lt: today },
    }).sort({ date: -1 });
    if (blogs === undefined) {
      response.status(404).end();
    } else {
      response.status(200).send(blogs);
    }
  },
);

app.post(
  '/blog',
  async (request: Request, response: Response, next: NextFunction) => {
    if (
      request.body.title === undefined ||
      request.body.content === undefined
    ) {
      response.status(400).end();
    } else {
      const blog = new Blog({
        title: request.body.title,
        date: moment().format('YYYY-MM-DD'),
        content: request.body.content,
      });
      await blog.save();
      response.status(201).end();
    }
  },
);

app.get(
  '/about',
  async (request: Request, response: Response, next: NextFunction) => {
    const about = await About.findOne();
    if (about !== undefined) {
      response.status(200).send(about);
    } else {
      response.status(404).end();
    }
  },
);

app.get(
  '/work/:workId',
  async (request: Request, response: Response, next: NextFunction) => {
    const work = await Work.findOne({ id: request.params.workId });
    if (work !== undefined) {
      response.status(200).send(work);
      console.log(work);
    } else {
      response.status(404).end();
    }
  },
);

app.post(
  '/contact',
  async (request: Request, response: Response, next: NextFunction) => {
    if (
      request.body.name === undefined ||
      request.body.email === undefined ||
      request.body.phone === undefined
    ) {
      response.status(400).end();
    } else {
      const contact = new Contact({
        name: request.body.name,
        email: request.body.email,
        phone: request.body.phone,
        date: moment().format('YYYY-MM-DD'),
      });
      await contact.save();
      response.status(201).end();
    }
  },
);

app.get(
  '/contacts',
  async (request: Request, response: Response, next: NextFunction) => {
    const contacts = await Contact.find();
    if (contacts !== undefined) {
      response.status(200).send(contacts);
    } else {
      response.status(404).end();
    }
  },
);

app.listen(8080, () => {
  console.log('Redo på http://localhost:8080/');
});
