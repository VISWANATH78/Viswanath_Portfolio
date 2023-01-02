import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p5 from "../assets/p5.jpeg"
import p6 from "../assets/p6.png"
import p4 from "../assets/p4.png"

const Projects = () => {
    const techs1 = [
        {
            id: 1,
            src: p1,
            title: "B2B-Invoice-Payment Prediction",
            text: "I have worked in AI - Enabled Fintech application for predicting Invoice Payment Date using Python for Machine Learning . I have implemented EDA ,Regressions, Data Cleansing, Prediction methods in ML for Real time Datasets(Invoice Details) of that organization. I have used Core Java for API services ,MySQL for Database and React JS for UserInterface Frontend Development",
            href: "newtech1106@gmail.com", 
           },
           
        {
            id: 2,
            src: p2,
            title: "Home Automation using IFTTT - IoT",
            text: "In this project the working process is based on voice-based control of devices which is based on Google Assistant. Google assistant is an Artificial Intelligence platform that provides voice command to make calls, to surf Internet. The main objective of this voice automation is to reduce electricity and productive usage of electricity. We build an application that controls any kind of devices using natural voice commands.",          href: "newtech1106@gmail.com",
        },
        {
            id: 3,
            src: p3,
            title: "Time Line Analysis (Power BI)",
            text: "Power BI is a powerful Data Visualization software, and much of its popularity is due to its interactive visualizations & user-friendlyinterface.With the Covid-19 Pandemic raging throughout the world, In today’s data-driven world, this also means the creation of newdata, and in turn, a need for new insights.Combining Power BI visualization process with the constantly growing Covid Data",
            href: "newtech1106@gmail.com",
        },
        {
            id: 4,
            src: p4,
            title: "Face-Detection-SNAPCHAT",
            text: "Security cameras identify faces that are run through databases to confirm a person's identity. As for Snapchat, their Lenses feature takes detailed notes of a person's face to accurately apply a specific filter chosen by the user.",
            href: "newtech1106@gmail.com",
        },
        
        {
            id: 5,
            src: p5,
            title: "Uber_Data Analysis",
            text: "Exploring data is certainly one of the most important stages in Data Science processes.To turn things a little bit more interesting, I’ve decided to have some fun with Python on my personal Uber rides data and see which insights I could extract,And visualized the given dataset",
            href: "newtech1106@gmail.com",
        },
        {
            id: 6,
            src: p6,
            title: "Stock Prediction ",
            text: "Stock price analysis has been a critical area of research and is one of the top applications of machine learning. This tutorial will teach you how to perform stock price prediction using machine learning and deep learning techniques. Here, you will use an LSTM network to train your model with all types of stocks and crypto based data.",
            href: "newtech1106@gmail.com",
        },
    ];
    return (
        
            <div
                name="Projects"
                className=" bg-w-full-h-screen   bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white"
            >
                <div className="flex flex-col p-1 justify-center max-w-screen-lg mx-auto h-full">
                    <div >
                        <p className="text-4xl my-auto  mt-60  font-bold border-b-4 border-blue-500 p-2 inline">
                           My Projects
                        </p>
                        <p className="py-4">These are one of my top rated projects</p>
                    </div>
                    <div className="w-full grid grid-cols-1 mt-55  sm:grid-cols-3 gap-8 text-left-justify py-7 px-12 sm:px-0">
                        {techs1.map(({ id, src, title, text ,href}) => (
                             <div  key={id}
                             className={`hover:scale-105 duration-500 py-2 rounded-lg ${id}`}>

                            <Card >

                                <CardMedia
                                    sx={{ height: 200, width: 330 }}
                                    image={src} className="w-20 mx-auto"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className="w-156 mx-auto justify-center">
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className="w-156 mx-auto justify-end">
                                        {text}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    
                                    <Button size="small" ><a href={href}>Learn More</a></Button>
                                </CardActions>
                            </Card>
                            
                            </div>
                        ))}
                </div>
                
</div>



            </div>
   
   
    );
};

export default Projects;
