// Import images
import Twitter1 from '../images/twitter-bot-1.JPG';
import Twitter2 from '../images/twitter-bot-2.JPG';
import Twitter3 from '../images/twitter-bot-3.JPG';
import Typeracer1 from '../images/typeracer-1.JPG';
import Typeracer2 from '../images/typeracer-2.JPG';
import Typeracer3 from '../images/typeracer-3.JPG';
import Robot1 from '../images/robot-2.JPG';
import Robot2 from '../images/robot-1.JPG';
import Robot3 from '../images/robot-3.JPG';
import Sensor1 from '../images/sensors-2.jpg'
import Sensor2 from '../images/sensors-3.jpg'
import Sensor3 from '../images/sensors-4.jpg'

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	'NBA Announcer Bot':{	
		ProjectHeader: {
			title: 'NBA Announcer Bot',
			publishDate: '2023',
			tags: 'Python / Solo Project',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Example 1',
				img: Twitter1,
			},
			{
				id: 2,
				title: 'Example 2',
				img: Twitter2,
			},
			{
				id: 3,
				title: 'Example 3',
				img: Twitter3,
			},
		],
		ProjectInfo: {
			Url: 'https://github.com/mluth10/nba_bot',
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Alert followers when interesting things happen in basketball games',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						`On January 2, 2023, Donovan Mitchell scored 71 points in an NBA game and no one told me. I was filled with deep regret and sorrow.
						
						Since I became a fan of the NBA, I have missed many historical events from some of my favorite players simply because I didn't know to tune in.

						This includes Luka Doncic's 60 point triple double, Damian Lillard's 71 point game, and many more. I realized that I could use what I had learned in school to solve my problem.
						`
				},
				{
					id: 2,
					details:
						`Using Python, an API client for the NBA called nba_api (https://github.com/swar/nba_api), and Tweepy, a Python library for accessing Twitter's API, I made a bot that 
						pulled in real time stats from the NBA API, analyzed the data to determine if anything interesting was happening, and if so, sent out a simple announcement tweet. 
						Examples of interesting events include games that are close at the end of regulation, individual players scoring a lot of points, players achieving triple-doubles, etc.
						I then hosted this bot on an Amazon EC2 server and let it run.`
				},
				{
					id: 3,
					details:
						`For this project, it was very important to me that I write clean, easily extensible code. Not only is it good practice, but I planned on adding new 'interesting events'
						as they came to mind. For example, at a friend's request, I had the bot send out a tweet anytime Damian Lillard played a game. This was a very easy feature to add because
						I had built the base code robustly. Another of my goals for this project was to learn more about OOP with Python, which I used to help me accomplish my first goal. 
						I had a lot of fun building my bot. Look for it to be running on Twitter again when the NBA season starts up!`
				},
			
			],
		}
	},
	'Typeracer':{	
		ProjectHeader: {
			title: 'Typeracer / Processor',
			publishDate: '2022',
			tags: 'Computer Architecture, School Project',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Example 1',
				img: Typeracer1,
			},
			{
				id: 2,
				title: 'Example 2',
				img: Typeracer2,
			},
			{
				id: 3,
				title: 'Example 3',
				img: Typeracer3,
			},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Create a game using custom 5-stage pipelined RISC programmed onto FPGA',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'RISC', 'Verilog', 'FPGAs', 'I/O', 'Vivado'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						`This is the final project for the undergraduate class ECE350: Advanced Computer Architecture. Our preceding project had been to build 
						a pipelined five-stage processor using Verilog, which was one of my favorite projects I have done at school. For the final project, we were to 
						extend that design by adding input/output to create a game. My partner and I decided to connect a keyboard and monitor and remake the classic 
						TypeRacer game.`
				},
				{
					id: 2,
					details:
						`To do this, we wrote the game code using RISC-V and translated that to binary using an interpreter. This was then inserted into the FPGA's I-ROM.
						We also added extra instructions to the RISC instruction set to write colors to the screen using a VGA port. Lastly, we used an external library to recieve 
						serial input from the USB keyboard. Putting all of this together, we were able to create a functional game.
						`
				},
				{
					id: 3,
					details:
						`For this project, I was really interested in the low-level programming. I spent a lot of time in the lab finding the limits 
						of my own processor. This is the kind of stuff I really enjoy, and I'm glad that I got the opportunity to play with the FPGAs and 
						and writing assembly code.`
				},
			
			],
		}
	},
	'Walker Robot':{
		ProjectHeader: {
			title: 'Walking Robot',
			publishDate: '2023',
			tags: 'Robotics, Raspberry Pi, School Project',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Example 1',
				img: Robot1,
			},
			{
				id: 2,
				title: 'Example 2',
				img: Robot2,
			},
			{
				id: 3,
				title: 'Example 3',
				img: Robot3,
			},
		],
		ProjectInfo: {
			Url: 'https://github.com/mluth10/empire_robot/',
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Build an autonomous robot that can walk and dance',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Raspberry Pi', 'Linux', 'Python', 'CAD', 'ROS'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						`This was the final project for my Robot Studio class. Our goal was to make a robot completely from scratch that would eventually be able to walk and dance.
						We were given eight servo motors, a motor driver board, a Raspberry Pi, and a battery. We were also given access to 3D printers. `
				},
				{
					id: 2,
					details:
						`We first sketched our original design for the robot to scale. We then used Fusion360 to CAD all the parts of the robot and print them out.
						After assembling the robot, we installed Ubuntu onto the Raspberry Pi and started coding the motion of the robot. We started with guessing and
						checking sinusoidal movement fuctions. We later created a URDF (file describing the links and joints of the robot) so that we could simulate the
						robot. Using RViz, we were able to make the walking robot more efficient.`
				},
				{
					id: 3,
					details:
						`This project was very interesting for me because I love projects that allow me to work with both hardware and software. Building this robot
						was a very rewarding experience and I learned a lot about robotics`
				},
			
			],
		}
	},
	'Farm Protector':{	
		ProjectHeader: {
			title: 'Farm Protector',
			publishDate: '2023',
			tags: 'Arduino, School Project',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Example 1',
				img: Sensor1,
			},
			{
				id: 2,
				title: 'Example 2',
				img: Sensor2,
			},
			{
				id: 3,
				title: 'Example 3',
				img: Sensor3,
			},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Build a device to detect and deter small mammals from destroying row crops',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Arduino', 'C', 'Sensors (various)'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						`This was my senior design project for Duke's Sensor and System Design course. Our goal was to make a device that would be installed at a local farm
						in order to protect crops from raccoons and squirrels. We used various sensors and deterrence methods to achieve this goal without harming the animal.`
				},
				{
					id: 2,
					details:
						`To detect the animals, we used two PIR sensors and a microwave sensor. Feeding this information into an Arduino, if we determined there was an animal
						in the area, we triggered the deterrence method, which involved flashing LEDs, loud beeping noises from a piezospeaker, and a waving flag controlled by a stepper motor.
						`
				},
				{
					id: 3,
					details:
						`This was a very fun and relatively easy project to do. I got to apply a lot of the technical skills I had learned in school such as circuit design, 
						power management, soldering, woodworking, etc. to get the project finished. `
				},
			
			],
		}
	}
};
