"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { sendMail } from './mailer';
// import ws from 'ws';
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const moment_1 = __importDefault(require("moment"));
const app = (0, express_1.default)();
// const webSocketServer = new ws.Server({ port: 8081 });
app.use('/images', express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: false }));
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const User = mongoose_1.default.model('User', new mongoose_1.default.Schema({
    nickName: String,
    password: String,
    registered: { type: Date, default: Date.now },
}));
const About = mongoose_1.default.model('About', new mongoose_1.default.Schema({
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
}));
const Work = mongoose_1.default.model('Work', new mongoose_1.default.Schema({
    id: String,
    name: String,
    shortdescription: String,
    description: String,
    image: String,
    url: String,
    languages: [String],
    participants: [String],
}));
const Blog = mongoose_1.default.model('Blog', new mongoose_1.default.Schema({
    title: String,
    date: Date,
    content: [String],
}));
const contactSchema = new mongoose_1.default.Schema({
    name: String,
    email: String,
    phone: Number,
    message: String,
    date: Date,
});
const Contact = mongoose_1.default.model('Contact', contactSchema);
// -----Funkar inte-----
// contactSchema.post('save', async function () {
//   try {
//     await sendMail();
//   } catch (error) {
//     console.error(error);
//   }
// });
main().catch((err) => console.log(err));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect('mongodb://127.0.0.1:27017/test', mongooseOptions);
        const database = mongoose_1.default.connection;
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
    });
}
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// app.use((request: Request, response: Response, next: NextFunction) => {
//   response.header('Access-Control-Allow-Origin', '*');
//   response.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });
app.get('/', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User.findOne();
    if (users === undefined) {
        response.status(404).end();
    }
    else {
        response.status(200).send(users);
    }
}));
app.get('/work', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const works = yield Work.find();
    if (works === undefined) {
        response.status(404).end();
    }
    else {
        response.status(200).send(works);
    }
}));
app.get('/blog', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const blogs = yield Blog.find({
        date: { $lt: today },
    }).sort({ date: -1 });
    if (blogs === undefined) {
        response.status(404).end();
    }
    else {
        response.status(200).send(blogs);
    }
}));
app.post('/blog', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (request.body.title === undefined ||
        request.body.content === undefined) {
        response.status(400).end();
    }
    else {
        const blog = new Blog({
            title: request.body.title,
            date: (0, moment_1.default)().format('YYYY-MM-DD'),
            content: request.body.content,
        });
        yield blog.save();
        response.status(201).end();
    }
}));
app.get('/about', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const about = yield About.findOne();
    if (about !== undefined) {
        response.status(200).send(about);
    }
    else {
        response.status(404).end();
    }
}));
app.get('/work/:workId', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const work = yield Work.findOne({ id: request.params.workId });
    if (work !== undefined) {
        response.status(200).send(work);
        console.log(work);
    }
    else {
        response.status(404).end();
    }
}));
app.post('/contact', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (request.body.name === undefined ||
        request.body.email === undefined ||
        request.body.phone === undefined) {
        response.status(400).end();
    }
    else {
        const contact = new Contact({
            name: request.body.name,
            email: request.body.email,
            phone: request.body.phone,
            date: (0, moment_1.default)().format('YYYY-MM-DD'),
        });
        yield contact.save();
        response.status(201).end();
    }
}));
app.get('/contacts', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield Contact.find();
    if (contacts !== undefined) {
        response.status(200).send(contacts);
    }
    else {
        response.status(404).end();
    }
}));
app.listen(8080, () => {
    console.log('Redo på http://localhost:8080/');
});
